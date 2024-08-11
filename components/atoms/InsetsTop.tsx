import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const InsetsTop = () => {
  const insets = useSafeAreaInsets();
  return <View style={{ height: insets.top }}></View>;
};

export default InsetsTop;
