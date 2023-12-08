import { Pressable, Text, StyleSheet } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <Pressable onPress={onPress} style={buttonStyle.box}>
      <Text style={buttonStyle.text}>{title}</Text>
    </Pressable>
  );
}

const buttonStyle = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: "purple",
    fontSize: 18,
  },
});
