import React, { Component } from "react";
import { View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "coulmn",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
          <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
          <View style={{ width: 50, height: 50, backgroundColor: "pink" }} />
        </View>
      </View>
    );
  }
}
