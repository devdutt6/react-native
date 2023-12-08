import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function App() {
  const staticImage = require("./assets/adaptive-icon.png");
  const networkImage = "https://picsum.photos/300";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    // View
    <View style={{ backgroundColor: "teal", flex: 1, padding: 60 }}>
      {/* NESTED VIEWS */}
      {/* <View
        style={{ width: "50%", height: "50%", backgroundColor: "red" }}
      ></View>
      <View
        style={{ width: "50%", height: "50%", backgroundColor: "green" }}
      ></View> */}
      {/* TEXT */}
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text> world
      </Text> */}
      {/* IMAGE STATIC, NETWORK */}
      {/* <Image source={staticImage} style={{ width: 300, height: 300 }}></Image> */}
      {/* <Image
        source={{ uri: networkImage }}
        style={{ width: 300, height: 300 }}
      ></Image> */}
      {/* IMAGE AS BACKGROUND */}
      {/* <ImageBackground source={staticImage} style={{ flex: 1 }}>
        <Text>Hello Image as Background</Text>
      </ImageBackground> */}
      {/* Scroll View should have bounded heights or padding & all gives issues */}
      {/* <ScrollView>
        <Image source={staticImage} style={{ width: 300, height: 300 }}></Image>
        <Text>
          Commodo in consequat cillum et ex aute quis minim tempor. Fugiat
          tempor labore sint id ea irure amet velit sint nisi ullamco magna ad.
          Adipisicing proident velit aliquip velit minim esse et nostrud eu non
          sunt adipisicing.Fugiat magna ea nulla consectetur qui cillum. Magna
          laborum nisi consequat dolore consequat. Aliqua consequat officia
          eiusmod amet esse incididunt pariatur aute fugiat aute dolor. Sint
          excepteur do incididunt excepteur anim nulla consectetur laborum sint
          non et dolor fugiat. Do mollit adipisicing magna esse irure tempor
          veniam Lorem laboris eu sunt. Labore eu qui magna esse officia.
          Consectetur ea Lorem officia est deserunt in ut mollit ipsum aliqua
          aute.
        </Text>
        <Image
          source={{ uri: networkImage }}
          style={{ width: 300, height: 300 }}
        ></Image>
      </ScrollView> */}
      {/* BUTTON */}
      {/* <Button
        onPress={() => console.log("pressed")}
        color="green"
        title="submit"
        // disabled
      /> */}
      {/* PRESSABLE */}
      {/* <Pressable onPress={() => console.log("text pressed")}>
        <Text>
          Eu adipisicing anim occaecat cillum laboris ea reprehenderit est
          reprehenderit aliquip consectetur ullamco tempor deserunt. Sit velit
          aute laboris laborum nostrud cillum. Excepteur excepteur dolor
          incididunt ullamco minim do excepteur nostrud ipsum labore dolore
          excepteur et reprehenderit. Id eiusmod ullamco ipsum dolor elit
          proident. Laboris duis sit mollit et quis quis pariatur dolore fugiat
          irure.
        </Text>
      </Pressable>
      <Pressable
        onPressIn={() => console.log("image pressedin")}
        onPressOut={() => console.log("image pressedout")}
        onLongPress={() => console.log("image longpressed")}
      >
        <Image source={staticImage} style={{ width: 300, height: 300 }}></Image>
      </Pressable> */}

      {/* MODAL */}
      {/* <Button onPress={() => setIsModalVisible(true)} title="Open" />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide" // fade, slide, none
        presentationStyle="formSheet" // fullscreen, formSheet, pageSheet only affects ios
      >
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <Text>Modal Content</Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal> */}

      {/* STATUS BAR */}
      {/* <Button onPress={() => setToggle((t) => !t)} title="toggle" /> */}
      {/* <StatusBar
        backgroundColor="yellow"
        barStyle="light-content"
        hidden={toggle}
      /> */}

      {/* ACTIVITY INDICATOR */}
      {/* <ActivityIndicator size="large" color="blue" animating={toggle} /> */}

      {/* ALERT */}
      {/* <Button
        title="alert"
        onPress={() =>
          Alert.alert("Invalid Data", "Incorrect DOB", [
            {
              text: "OK",
              onPress: () => console.log("OK"),
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel"),
            },
          ])
        }
      /> */}
    </View>
  );
}
