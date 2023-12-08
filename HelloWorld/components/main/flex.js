import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "green" }}>Box 1</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 2</Box>
      <Box style={{ backgroundColor: "teal" }}>Box 3</Box>
      <Box style={{ backgroundColor: "cyan" }}>Box 4</Box>
      <Box style={{ backgroundColor: "midnightblue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "yellowgreen" }}>Box 6</Box>
      <Box style={{ backgroundColor: "pink" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "violet",
    backgroundColor: "brown",
  },
});

// flex: int value depicts how the item will grow if there is remaining space
// flexDirection: row, column, row-reverse, column-reverse
// justifyContent: place the content along the main axis of the direction of flex
// allowed value flex-start, flex-end, center, space-around, evenly, between
// alignItems: place the items along the cross axis of the direction of flex
// allowed value stretch, flex-start, flex-end, center, baseline
// alignSelf: same as alignitems and auto
// flexWrap: nowrap, wrap, wrap-reverse
// alignContent: same as justify but on cross-axis
// rowGap, columnGap, gap
// flexBasis: the size of the item before distributing the extra space\
// flexShrink: how the item will shrink if parent is smaller than total size taken ny item
// flexGrow: opposite og shrink
// absolute, relative layouts
