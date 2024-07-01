import Box from "../ui/Box";
import Badge, { BadgeName } from "../ui/Badge";
import { Text } from "../ui/typography";
import { styled } from "@fast-styles/react";
import { globalStyles } from "@src/styles/globalStyles";

const BadgeContainer: React.FC<{
  title: string;
  subtitle: string;
  unlocked?: boolean;
  badge: BadgeName;
}> = ({ title, subtitle, unlocked = false, badge }) => {
  return (
    <BadgeRoot>
      <Badge name={badge} />
      <Text
        level="caption_1"
        weight="bold"
        style={{
          color: unlocked
            ? globalStyles.colors.text
            : globalStyles.colors.neutral[100],
        }}
      >
        {title}
      </Text>
      <Text
        level="caption_2"
        style={{
          color: unlocked
            ? globalStyles.colors.text
            : globalStyles.colors.neutral[100],
        }}
      >
        {subtitle}
      </Text>
    </BadgeRoot>
  );
};

export default BadgeContainer;

const BadgeRoot = styled(Box, {
  padding: 8,
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  width: 100,
  height: 125,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: globalStyles.colors.neutral[100],
});
