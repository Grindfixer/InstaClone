import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { tsConstructorType } from '@babel/types';
import { dim } from 'ansi-colors';
import config from './config';
import { PostFeed } from './components/container';
import { Post } from './components/presentation';

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text>InstaClone</Text>
          </View>
         <PostFeed />
      </View>
    ); //end return
  } //end render
} //end Instaclone

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height:100,
    backgroundColor: 'rgb(238,238,238)',
    borderBottomColor: 'rgb(180,180,180)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InstaClone;
