import React, { Component } from 'react';
import { FlatList, Text} from "react-native";
import {Post} from '../presentation';
import { thisExpression } from '@babel/types';

class PostFeed extends Component {

 render(){
   return(<Post />);
}
}
export default PostFeed;
