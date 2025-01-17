import React from "react";
import { SvgProps } from "react-native-svg";

import StreakFlames from "assets/img/streak-flames.svg";
import WeaselHappyImage from "assets/img/weasel-happy.svg";
import BackGroundHappyImage from "assets/img/background-happy.svg";
import BackGroundBadImage from "assets/img/background-bad.svg";
import WaeaselSideImage from "assets/img/weasel-side-peaceful.svg";
import WaeaselSideSadImage from "assets/img/weasel-side-sad.svg";
import TitltArrow from "assets/img/tilt-arrow.svg";
import TiltCorrect from "assets/img/tilt-correct.svg";
import Sparkling from "assets/img/sparkling-image.svg";
import FourCornerStar from "assets/img/four-corner-star.svg";
import NotificationImage from "assets/img/notification.svg";
import NotificationWindow from "assets/img/notification-window.svg";
import HomeScreenImage from "assets/img/Home-screen-image .svg";
import ProfileXpImage from "assets/img/profile-XP-image.svg";
import LevelUpImage from "assets/img/level-up-image.svg";
import Confeties from "assets/img/confeties.svg";
import BadgeBackground from "assets/img/badge-background.svg";
import SessionBackground from "assets/img/session-background.svg";
import SessionConfetti from "assets/img/session-confetti.svg";
import WeaselHeadTilt from "assets/img/weasel-head-tilt.svg";
import WeaselPomPom from "assets/img/weasel-pom-pom.svg";
import Tada from "assets/img/tada.svg";
import WeaselFloating from "assets/img/weasel-floating.svg";
import ElipseShadow from "assets/img/ellipse-shadow.svg";
import GoogleAndroidButtonContinue from "assets/img/android_light_rd_ctn.svg";
import GoogleAndroidButtonSignUp from "assets/img/android_light_rd_SU.svg";
import GoogleiOSButtonContinue from "assets/img/ios_light_rd_ctn.svg";
import GoogleiOSButtonSignUp from "assets/img/ios_light_rd_SU.svg";
import Level1 from "assets/levels/Level1.svg";
import Level2 from "assets/levels/Level2.svg";
import Level3 from "assets/levels/Level3.svg";
import Level4 from "assets/levels/Level4.svg";
import Level5 from "assets/levels/Level5.svg";
import Level6 from "assets/levels/Level6.svg";
import Level1up from "assets/levels/Level1-up.svg";
import Level2up from "assets/levels/Level2-up.svg";
import Level3up from "assets/levels/Level3-up.svg";
import Level4up from "assets/levels/Level4-up.svg";
import Level5up from "assets/levels/Level5-up.svg";
import Level6up from "assets/levels/Level6-up.svg";
import SunShine from "assets/img/sunshine.svg";
import HelloWally from "assets/img/hello_wally.svg";
import StartSetupImages from "assets/img/start_setup_images.svg";
import SetupBadge from "assets/img/setup_badge.svg";
import SetupImageBackground from "assets/img/setup-image-background.svg";
import WallyOnThePhone from "assets/img/wally_on_the_phone.svg";
import NotificationExclamation from "assets/img/notification_exclamation.svg";
import XpBarSetup from "assets/img/xp_bar_setup.svg";
import StreakCardSetup from "assets/img/streak-card-setup.svg";
import LevelUpSetup from "assets/img/level_up_setup.svg";
import BadgeSetup from "assets/img/badge_setup.svg";
import WallieWithAMap from "assets/img/wallie_with_a_map.svg";
import ImageOnSignup from "assets/img/image_on_signup.svg";
import PhoneWeasel from "assets/img/phone-weasel.svg";
import EarbudsWeasel from "assets/img/earbuds-weasel.svg";
import YellowCircle from "assets/img/yellow-circle.svg";
import AnalyticsHappy from "assets/img/analytics_happy.svg";
import AnalyticsSad from "assets/img/analytics_sad.svg";

export const ImageConfig = {
  "streak-flames": StreakFlames,
  "weasel-happy": WeaselHappyImage,
  "background-happy": BackGroundHappyImage,
  "background-bad": BackGroundBadImage,
  "weasel-side-peaceful": WaeaselSideImage,
  "weasel-side-sad": WaeaselSideSadImage,
  "weasel-pom-pom": WeaselPomPom,
  "tilt-arrow": TitltArrow,
  "tilt-correct": TiltCorrect,
  sparkling: Sparkling,
  "four-corner-star": FourCornerStar,
  notification: NotificationImage,
  "notification-window": NotificationWindow,
  "home-screen-image": HomeScreenImage,
  "profile-XP-image": ProfileXpImage,
  "level-up-image": LevelUpImage,
  confeties: Confeties,
  "badge-background": BadgeBackground,
  "session-background": SessionBackground,
  "session-confetti": SessionConfetti,
  "weasel-head-tilt": WeaselHeadTilt,
  tada: Tada,
  "weasel-floating": WeaselFloating,
  "elipse-shadow": ElipseShadow,
  "google-android-btn-ctn": GoogleAndroidButtonContinue,
  "google-android-btn-su": GoogleAndroidButtonSignUp,
  "google-ios-btn-ctn": GoogleiOSButtonContinue,
  "google-ios-btn-su": GoogleiOSButtonSignUp,
  "level-1": Level1,
  "level-2": Level2,
  "level-3": Level3,
  "level-4": Level4,
  "level-5": Level5,
  "level-6": Level6,
  "level-1-up": Level1up,
  "level-2-up": Level2up,
  "level-3-up": Level3up,
  "level-4-up": Level4up,
  "level-5-up": Level5up,
  "level-6-up": Level6up,
  sunshine: SunShine,
  "hello-wally": HelloWally,
  "start-setup": StartSetupImages,
  "setup-badge": SetupBadge,
  "setup-image-background": SetupImageBackground,
  "wally-on-the-phone": WallyOnThePhone,
  "notification-exclamation": NotificationExclamation,
  "xp-bar-setup": XpBarSetup,
  "streak-card-setup": StreakCardSetup,
  "level-up-setup": LevelUpSetup,
  "badge-setup": BadgeSetup,
  "wallie-with-a-map": WallieWithAMap,
  "image-on-signup": ImageOnSignup,
  "phone-weasel": PhoneWeasel,
  "earbuds-weasel": EarbudsWeasel,
  "yellow-circle": YellowCircle,
  "analytics-happy": AnalyticsHappy,
  "analytics-sad": AnalyticsSad,
};

export type ImageName = keyof typeof ImageConfig;

type ImageProps = {
  name: ImageName;
} & Omit<SvgProps, "color">;

const Image: React.FC<ImageProps> = React.forwardRef(
  ({ name, width = "100%", height = "100%", ...props }, ref) => {
    void ref;
    const CustomImage = ImageConfig[name];
    return <CustomImage {...props} width={width} height={height} />;
  },
);

export default Image;
