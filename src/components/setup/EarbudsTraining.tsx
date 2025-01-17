import React, { useState, useEffect, useRef } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@src/components/ui/typography";
import { theme } from "@src/styles/theme";
import Image from "@src/components/ui/Image";
import Button from "@src/components/ui/Button";
import BackButton from "../ui/BackButton";
import Stack from "@src/components/ui/Stack";
import ContentCard from "@src/components/setup/ContentCard";
import LottieView from "lottie-react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  runOnJS,
  Easing,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");

type EarbudsTrainingProps = {
  changePage: React.Dispatch<React.SetStateAction<string>>;
};

const EarbudsTraining: React.FC<EarbudsTrainingProps> = ({ changePage }) => {
  const [step, setStep] = useState(0);
  const animation = useRef<LottieView>(null);

  const animations = [
    require("../../animations/onboarding_animation_headup.json"),
    require("../../animations/onboarding_animation_bad.json"),
    require("../../animations/onboarding_animation_10degree.json"),
  ];

  const steps = [
    {
      title: "Sit or stand up\nstraight",
      text: "WeaUp monitors your posture using earbud movement. Keep your head upright.",
    },
    {
      title: "Try dropping\nyour head",
      text: "Notice the alerts or vibrations? It’s a reminder to correct your posture.",
    },
    {
      title: "A 10-degree tilt?\n It’s fine!",
      text: "Don’t worry, we only alert you when your head angle becomes too steep.",
    },
  ];

  const fadeInMain = useSharedValue(0);
  const scaleBackground = useSharedValue(0);
  const slideUpAnimation = useSharedValue(height);
  const lottieOpacity = useSharedValue(0);
  const fadeOut = useSharedValue(1);

  const startLottieAnimation = () => {
    if (animation.current) {
      animation.current.reset();
      animation.current.play();
    }
  };

  useEffect(() => {
    // Initial animation setup
    fadeInMain.value = withDelay(100, withTiming(1, { duration: 500 }));
    scaleBackground.value = withDelay(200, withTiming(1, { duration: 400 }));
    slideUpAnimation.value = withDelay(
      600,
      withTiming(
        0,
        {
          duration: 1000,
          easing: Easing.out(Easing.exp),
        },
        (finished) => {
          if (finished) {
            runOnJS(startLottieAnimation)();
          }
        },
      ),
    );
    lottieOpacity.value = withDelay(900, withTiming(1, { duration: 1000 })); // Updated to fade in the animation while sliding up
  }, []);

  useEffect(() => {
    // Start a new animation immediately when the step changes
    if (step > 0) {
      startLottieAnimation();
    }
  }, [step]);

  const mainStyle = useAnimatedStyle(() => ({
    opacity: fadeInMain.value,
  }));

  const mainStyleOut = useAnimatedStyle(() => ({
    opacity: fadeOut.value,
  }));

  const scaleBackgroundStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleBackground.value }],
  }));

  const slideUpStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slideUpAnimation.value }],
    opacity: lottieOpacity.value, // Combine opacity with slide animation
  }));

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      fadeOut.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(changePage)("notifications");
      });
    }
  };

  const onSkip = () => {
    changePage("notifications");
  };

  const onBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      changePage("selectMode");
    }
  };

  return (
    <Animated.View style={[{ flex: 1 }, mainStyleOut]}>
      <Stack h={height} px={16} alignItems={"center"}>
        <Stack
          flexDirection="row"
          pt={height * 0.06}
          w={"100%"}
          justifyContent="space-between"
          style={{ zIndex: 5 }}
        >
          <BackButton onBack={onBack} />
          <Stack h={40} justifyContent="center">
            <TouchableOpacity onPress={onSkip}>
              <Text
                level="footnote"
                weight="semibold"
                style={{ color: theme.colors.other[400] }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          </Stack>
        </Stack>

        <Stack
          flexDirection="column"
          gap={30}
          alignItems="center"
          style={{ position: "absolute", bottom: height * 0.1 }}
        >
          <Animated.View style={[scaleBackgroundStyle]}>
            <Stack w={width * 0.9} h={width} style={{ top: 100, zIndex: -1 }}>
              <Image name="setup-image-background" />
            </Stack>
          </Animated.View>
          <Animated.View style={[mainStyle, { zIndex: 4 }]}>
            <ContentCard
              title={steps[step].title}
              text={steps[step].text}
              section={"training"}
            />
          </Animated.View>
          <Animated.View style={[mainStyle]}>
            <Stack w={"100%"} py={"1.5%"}>
              <Button onPress={next} variant="primary" title={"Next"} />
            </Stack>
          </Animated.View>
          <Animated.View style={[mainStyle]}>
            <Stack flexDirection={"row"} gap={8}>
              {steps.map((_, index) => (
                <Stack
                  key={index}
                  w={index === step ? 40 : 16}
                  h={8}
                  style={index === step ? styles.activeNav : styles.inactiveNav}
                />
              ))}
            </Stack>
          </Animated.View>
          <Animated.View
            style={[slideUpStyle, { position: "absolute", top: 146 }]}
          >
            <LottieView
              autoPlay={false}
              loop={false}
              ref={animation}
              duration={1500}
              style={{
                width: width,
                height: width,
                zIndex: 2,
              }}
              source={animations[step]}
            />
          </Animated.View>
        </Stack>
      </Stack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  activeNav: {
    backgroundColor: theme.colors.primary[700],
    borderRadius: 40,
    zIndex: 4,
  },
  inactiveNav: {
    backgroundColor: theme.colors.primary[700],
    opacity: 0.25,
    borderRadius: 40,
    zIndex: 4,
  },
});

export default EarbudsTraining;
