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
import react from "./react.png";

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <View style={container}>
          <Image style={imgStyle} source={react} />
          <View style={{ flex: 1, justifyContent: "center", marginleft: 10 }}>
            <Text style={textStyle}>React Course</Text>
            <Text style={text2Style}>
              Course about how to write the React web framework
            </Text>
          </View>
        </View>

        <View style={container}>
          <Image style={imgStyle} source={react} />
          <View style={{ flex: 1, justifyContent: "center", marginleft: 10 }}>
            <Text style={textStyle}>React Native Course</Text>
            <Text style={text2Style}>
              Course about how to write mobile app in IOS and Android using
              React-Native.
            </Text>
          </View>
        </View>

        <View style={container}>
          <Image style={imgStyle} source={react} />
          <View style={{ flex: 1, justifyContent: "center", marginleft: 10 }}>
            <Text style={textStyle}>Redux Course</Text>
            <Text style={text2Style}>
              Course about predictable state container for Javascript apps
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const container = {
  display: "flex",
  flexDirection: "row",
};

const imgStyle = {
  width: 100,
  height: 100,
};

const textStyle = {
  fontSize: 30,
};

const text2Style = {
  fontSize: 15,
};
