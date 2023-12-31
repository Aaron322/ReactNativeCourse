import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [text, onChangeText] = React.useState("");
  // Add subscribe screen code here
  function onSubscribeButtonPress() {
    if (!validateEmail(text)) {
      return Alert.alert("Error", "Invalid email address");
    } else {
      return Alert.alert("Success", "Thanks for subscribing");
    }
  }
  return (
    <View>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>
        Subscribe to our Newsletter for our{"\n"}latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onSubscribeButtonPress}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#1E6738",
    color: "white",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default SubscribeScreen;
