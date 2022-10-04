import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={textStyle}>Hello World!</Text>
      </View>
    );
  }
}

const textStyle = {
  fontSize: 40,
};
