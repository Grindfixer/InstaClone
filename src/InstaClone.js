import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { tsConstructorType } from "@babel/types";
import { dim } from "ansi-colors";
import config from "./config";

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/NetFCMbu_X6Db6kedM_JQKfEhnpaL3qUdGNh5etql1ZNqgPkFqGa1RpgM-XHf_W2Qnw6bH-ArCqEHKaiSUXZ88pXJA" +
      "=s" +
      imageHeight +
      "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

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
        <TouchableOpacity
          onPress={() => {
            this.likeToggled();
          }}
        >
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 40, width: 40, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />

          <Image
            style={[styles.icon, { height: 36, width: 36 }]}
            source={config.images.bubbleIcon}
          />

          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 50, width: 40 }]}
            source={config.images.arrowIcon}
          />
        </View>
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
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(180,180,180)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    paddingLeft: 5
  }
});

export default InstaClone;
