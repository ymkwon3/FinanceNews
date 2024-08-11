import InsetsTop from "@/components/atoms/InsetsTop";
import Article from "@/components/molecules/Article";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const list = [
    { text: "기사" },
    { text: "기사" },
    { text: "기사" },
    { text: "기사" },
    { text: "기사" },
    { text: "기사" },
    { text: "기사" },
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#ffffff",
      }}
    >
      <InsetsTop />
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {list.map((v, index) => {
          return <Article key={`article_${index}`} item={v} index={index} />;
        })}
      </ScrollView>
    </View>
  );
}
