import { HorizontalPadding } from "@/constants/HorizntalPadding";
import { Text, View } from "react-native";

const Article = ({ item, index }) => {
  const { text } = item;
  return (
    <View
      style={{
        height: 60,
        paddingVertical: 12,
        paddingHorizontal: HorizontalPadding,
        width: "100%",
        borderBottomWidth: 1,
        borderTopWidth: index === 0 ? 1 : 0,
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};

export default Article;
