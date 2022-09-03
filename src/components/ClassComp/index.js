import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ClassComp extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#1abc9c',
            height: 50,
            width: 50,
            flex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: '#3498db',
            height: 50,
            width: 50,
            flex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: '#e67e22',
            height: 50,
            width: 50,
            flex: 1,
          }}></View>
      </View>
    );
  }
}

export default ClassComp;
