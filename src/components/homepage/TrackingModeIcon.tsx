import { useUser } from "@src/state/useUser";
import Stack from "../ui/Stack";
import Icon from "../ui/Icon";
import { theme } from "@src/styles/theme";

const TrackingModeIcon = () => {
  const mode = useUser((state) => state.mode);

  return (
    <Stack
      backgroundColor={theme.colors.white}
      h={40}
      w={40}
      borderRadius={20}
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        name={"earbuds"}
        color={
          mode === "earbuds" ? theme.colors.text : theme.colors.neutral[200]
        }
      />
    </Stack>
  );
};

export default TrackingModeIcon;
