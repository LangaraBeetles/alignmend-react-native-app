import Button from "@src/components/ui/Button";
import Center from "@src/components/ui/Center";
import Stack from "@src/components/ui/Stack";
import { Text } from "@src/components/ui/typography";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

type AuthParams = {
  _id: string;
  access_token: string;
  daily_goal: string;
  device_id: string;
  email: string;
  expiry_date: string;
  hp: string;
  id_token: string;
  is_setup_complete: string;
  name: string;
  preferred_mode: string;
  providerId: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  xp: string;
};

const AuthCallback = () => {
  const params = useGlobalSearchParams<AuthParams>();

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center p={30} flex={1}>
        <Stack flexDirection="column" gap={30}>
          <Text level="title_1" align="center">
            Welcome {params?.name}!
          </Text>

          <Button
            title="Yey! Continue"
            onPress={() => {
              router.push("/");
            }}
            type={{
              type: "primary",
              size: "l",
            }}
          />
        </Stack>
      </Center>
    </SafeAreaView>
  );
};

export default AuthCallback;
