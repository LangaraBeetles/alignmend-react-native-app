import React, { useState } from "react";

import { Image, Pressable, Switch, Text } from "react-native";
import { Link, Redirect } from "expo-router";
import DeviceMotionView from "@src/components/ui/DeviceMotionView";

import { useUser } from "@state/useUser";

import SessionControl from "@src/components/sessions/SessionControl";
import Stack from "@src/components/ui/Stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Center from "@src/components/ui/Center";

const HomePage = () => {
  const isSetupComplete = useUser((state) => state.isSetupComplete);
  const userName = useUser((state) => state.user.name);
  const userLevel = useUser((state) => state.user.level);
  const userHP = useUser((state) => state.user.hp);
  const userXP = useUser((state) => state.user.xp);
  const userSteak = useUser((state) => state.user.daily_streak_counter);

  const [isTrackingEnabled, setTrackingEnabled] = useState(false);
  const toggleTracking = () =>
    setTrackingEnabled((previousState) => !previousState);

  if (!isSetupComplete) {
    return <Redirect href="/setup/start" />;
  }

  return (
    <SafeAreaView>
      <Stack flexDirection="row" justifyContent="space-between" p={15} pb={0}>
        <Stack
          flexDirection="row"
          gap={18}
          border={1}
          borderRadius={50}
          p={10}
          alignItems="center"
        >
          {/*TODO: display avatar */}
          <Image source={require("../../../assets/img/avatar.png")} />
          {userName === null ? <Text>{userName}</Text> : null}
          <Text>Lv.{userLevel}</Text>
        </Stack>
        <Stack flexDirection="row" gap={18} border={0} p={5}>
          <Image source={require("../../../assets/img/earbuds.png")} />
          <Link href="/notifications" asChild>
            <Pressable>
              <Image
                source={require("../../../assets/img/notifications.png")}
              />
            </Pressable>
          </Link>
        </Stack>
      </Stack>

      <Center p={15} pb={0}>
        <Stack
          flexDirection="row"
          border={1}
          borderRadius={20}
          justifyContent="space-evenly"
          w={"100%"}
          p={18}
        >
          <Stack flexDirection="row" border={0} justifyContent="space-evenly">
            <Center p={10}>
              <Image source={require("../../../assets/img/avatar.png")} />
            </Center>

            <Stack
              flexDirection="column"
              border={0}
              justifyContent="space-evenly"
            >
              <Text>Posture Score</Text>
              <Text>{userHP} / 100</Text>
            </Stack>
          </Stack>
          <Stack
            flexDirection="column"
            border={0}
            justifyContent="space-evenly"
          >
            <Stack
              flexDirection="row"
              gap={10}
              border={0}
              justifyContent="start"
            >
              <Image source={require("../../../assets/img/avatar.png")} />
              <Text>{userXP} XP</Text>
            </Stack>
            <Stack
              flexDirection="row"
              gap={10}
              border={0}
              justifyContent="start"
            >
              <Image source={require("../../../assets/img/avatar.png")} />
              <Text>{userSteak} Day Streak</Text>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <Center p={15}>
        <Stack
          flexDirection="row"
          border={1}
          borderRadius={20}
          justifyContent="space-between"
          alignItems="center"
          w={"100%"}
          p={10}
        >
          <Text>Realtime Tracking</Text>
          <Switch onValueChange={toggleTracking} value={isTrackingEnabled} />
        </Stack>
      </Center>
      <Center>
        <Image source={require("../../../assets/img/mascot.png")} />
      </Center>
      <Center>
        <SessionControl />
      </Center>

      <DeviceMotionView isTrackingEnabled={isTrackingEnabled} />
    </SafeAreaView>
  );
};

export default HomePage;
