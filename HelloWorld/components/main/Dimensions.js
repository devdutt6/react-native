// import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
} from "react-native";

export default function App() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });

  //   return () => subscription?.remove();
  // });

  // const { width, height } = dimensions.window;
  const { width, height } = useWindowDimensions();

  return (
    <View style={style.container}>
      <View
        style={[
          style.box,
          {
            width: width > 500 ? "70%" : "90%",
            height: height > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: width > 500 ? 50 : 24 }}>Hello</Text>
      </View>
    </View>
  );
}

// drawback dimensions dont update on portrait to dimensions
// console.log(width, height);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // width: width > 500 ? "70%" : "90%",
    // height: height > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  // text: {
  //   fontSize: width > 500 ? 50 : 24,
  //   fontWeight: "bold",
  //   color: "black",
  // },
});
