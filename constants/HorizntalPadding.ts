import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = () => {
  const aspectRatio = height / width;

  // 예시 기준: 가로 또는 세로 길이가 600dp 이상인 경우 태블릿으로 간주
  if (Platform.OS === "ios" || Platform.OS === "android") {
    if ((width >= 600 || height >= 600) && aspectRatio <= 1.6) {
      return true;
    }
  }
  return false;
};

const HorizontalPadding = isTablet() ? 40 : 20;

export { isTablet, HorizontalPadding };
