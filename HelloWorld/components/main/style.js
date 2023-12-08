import { View, StyleSheet } from "react-native";
import Greet from "../Greet";

export default function App() {
  return (
    <View style={style.component}>
      {/* CUSTOM COMPONENT */}
      <Greet
        style={[
          style.box,
          style.lightBlueBg,
          style.boxShadow,
          style.androidShadow,
        ]}
        name="Bruce Wayne"
      />
      <Greet
        style={[style.box, style.androidShadow, style.lightGreenBg]}
        name="Clark Kent"
      />
    </View>
  );
}

const style = StyleSheet.create({
  component: {
    backgroundColor: "plum",
    padding: 60,
    flex: 1,
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10, // border radius only applies to android for ios
    borderStyle: "solid", // you have to wrap text with view and give radius to that
    borderWidth: 4,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    // for IOS use this for android use elevation
    shadowColor: "blue",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    // for android use this for IOS use shadow
    elevation: 10,
    shadowColor: "black",
  },
});

// style inheritance will not work in native
// style inheritance is only limited to text to text tree
// it wont be possible in view to text or view to view trees
