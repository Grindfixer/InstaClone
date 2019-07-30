import React, { Component } from 'react';
import { FlatList} from "react-native";
import {Post} from '../presentation';
import { thisExpression } from '@babel/types';

class PostFeed extends Component {

  renderPost(){
    return <Post />
  }

  _returnKey(item){
    return item.toString();
  }

  render() {
     return <FlatList
               data={[1,2,3,4,5,6,7,8,9,10]}

     keyExtractor = {this._returnKey}
     renderItem={() => this.renderPost}
      />;
  }
}

export default PostFeed;
