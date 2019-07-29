import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { tsConstructorType } from "@babel/types";
import { dim } from "ansi-colors";

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get("window").width
    })
  }

  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>InstaClone</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/rCBMuE30hg-Z1lil_8eSDgaAN5PXW-ORxAeNYKD7l3FK6kkeFeM7qkHN0380Uc0mXPt52Xtbr0VYDHP4a1F8AH3MTQ"
              }}
            />

            <Text style={{ marginLeft: 10 }}>Tony Mahroneystein</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
          <View />
        </View>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: this.state.screenWidth, height: 100 }}
          source={{
            uri:
              "https://lh3.googleusercontent.com/NetFCMbu_X6Db6kedM_JQKfEhnpaL3qUdGNh5etql1ZNqgPkFqGa1RpgM-XHf_W2Qnw6bH-ArCqEHKaiSUXZ88pXJA"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(238,238,238)",
    borderBottomColor: "rgb(180,180,180)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default InstaClone;
