import { View, Text } from "react-native";

export default function Greet({ name, style }) {
  return (
    <View style={style}>
      <Text>Hello, {name}</Text>
    </View>
  );
}
