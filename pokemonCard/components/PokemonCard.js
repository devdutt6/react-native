import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const typed =
    type === "Fire"
      ? { color: "#FF5733", text: "🔥 Fire" }
      : type === "Water"
      ? { color: "#6493EA", text: "💧 Water" }
      : type === "Grass"
      ? { color: "#66CC66", text: "🌿 Grass" }
      : type === "Electric"
      ? { color: "#FFD700", text: "⚡️ Electric" }
      : { color: "black", text: type };
  return (
    <View style={cardStyle.card}>
      <View style={cardStyle.titleRow}>
        <Text style={cardStyle.title}>{name}</Text>
        <Text style={cardStyle.hp}> 🧡 HP: {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={cardStyle.image}
        resizeMode="contain"
      />

      <View style={cardStyle.typeButton}>
        <Text style={[cardStyle.typeText, { borderColor: typed.color }]}>
          {typed.text}
        </Text>
      </View>

      <Text style={[cardStyle.textLine]}>
        <Text style={[cardStyle.bold]}>Moves: </Text>
        <Text>{moves.join(", ")}</Text>
      </Text>

      <Text style={[cardStyle.textLine]}>
        <Text style={[cardStyle.bold]}>Weaknesses: </Text>
        <Text>{weaknesses.join(", ")}</Text>
      </Text>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
  hp: {
    fontSize: 20,
    fontWeight: "400",
    padding: 5,
  },
  typeButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  typeText: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    // borderColor: "black",
    borderWidth: 4,
    borderRadius: 16,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "600",
  },
  textLine: {
    fontSize: 18,
    marginBottom: 6,
    // textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  image: {
    marginBottom: 16,
    width: "100%",
    height: 200,
  },
});
