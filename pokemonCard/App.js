import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import pokemons from "./data.json";

export default function App() {
  return (
    // <SafeAreaView>
    <View>
      <ScrollView style={styles.container}>
        {pokemons.map((pokemon) => {
          return (
            <View style={styles.pokecard} key={pokemon.id}>
              <Text>{pokemon.name}</Text>
              <Text>{pokemon.type}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
  // {/* </SafeAreaView> */}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  pokecard: {
    marginBottom: 12,
  },
});
