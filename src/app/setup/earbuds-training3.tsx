import Main from "@src/components/layout/Main";
import Center from "@src/components/ui/Center";
import Spacer from "@src/components/ui/Spacer";
import Stack from "@src/components/ui/Stack";
import { router } from "expo-router";
import { SafeAreaView, Pressable } from "react-native";
import { Text } from "@src/components/ui/typography";
import Button from "@src/components/ui/Button";
import PaginationDot from "react-native-animated-pagination-dot";

const EarbudsTrainingScreen3 = () => {
  const next = () => {
    router.replace("/setup/enable-notifications");
  };

  return (
    <SafeAreaView>
      <Main>
        <Spacer height="4%" />
        <Pressable onPress={next}>
          <Text
            align="right"
            level="body"
            weight="medium"
            style={{ textDecorationLine: "underline" }}
          >
            Skip
          </Text>
        </Pressable>
        <Center justifyContent="center" height="100%" px={2}>
          <Spacer height="60%" />

          <Stack gap={80}>
            <Stack gap={16}>
              <Text align="center" level="title_2">
                A 10-degree tilt? It’s fine!
              </Text>
              <Text align="center">
                Don’t worry, we only alert you when your head angle becomes too
                steep.
              </Text>
            </Stack>
            <Button
              title="Continue"
              onPress={next}
              type={{ type: "primary", size: "l" }}
            />
          </Stack>
          <Center>
            <PaginationDot activeDotColor={"black"} curPage={2} maxPage={3} />
          </Center>
        </Center>
      </Main>
    </SafeAreaView>
  );
};

export default EarbudsTrainingScreen3;
