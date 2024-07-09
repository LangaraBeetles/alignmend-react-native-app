import { SvgProps } from "react-native-svg";

import StreakFlames from "assets/img/streak-flames.svg";
import WeaselHappyImage from "assets/img/weasel-happy.svg";
import BackGroundHappyImage from "assets/img/background-happy.svg";
import BackGroundBadImage from "assets/img/background-bad.svg";
// import AvatarImage from "assets/img/avatar.svg";
import WaeaselSideImage from "assets/img/weasel-side-peaceful.svg";
// import GreenGradientImage from "assets/img/green-gradient.svg";
import TitltArrow from "assets/img/tilt-arrow.svg";
import TiltCorrect from "assets/img/tilt-correct.svg";


const ImageConfig = {
  "streak-flames": StreakFlames,
  "weasel-happy": WeaselHappyImage,
  "background-happy": BackGroundHappyImage,
  "background-bad": BackGroundBadImage,
  // avatar: AvatarImage,
  "weasel-side-peaceful": WaeaselSideImage,
  // "green-gradient": GreenGradientImage,
  "tilt-arrow": TitltArrow,
  "tilt-correct": TiltCorrect,
};

export type ImageName = `${keyof typeof ImageConfig}`;

type ImageProps = {
  name: ImageName;
} & Omit<SvgProps, "color">;

const Image: React.FC<ImageProps> = ({
  name,
  width = "100%",
  height = "100%",
  ...props
}) => {
  const CustomImage = ImageConfig[name];

  return <CustomImage {...props} width={width} height={height} />;
};

export default Image;
