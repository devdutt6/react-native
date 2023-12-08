import CustomButton from "./components/CustomButton/CustomButton";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <View style={[style.box]}>
          <Text style={style.text}>Hello</Text>
          <CustomButton title="Click!" onPress={() => alert("oh!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 24,
        // fontWeight: "bold",
        fontStyle: "italics",
        color: "black",
      },
      android: {
        fontSize: 24,
        // fontWeight: "bold",
        fontStyle: "italic",
        color: "blue",
      },
    }),
    textAlign: "center",
  },
});
