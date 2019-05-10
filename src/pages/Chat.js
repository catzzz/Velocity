import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Chat extends Component<Props> {
  render() {
    return (
      <View style={styles.Chat}>
        <Text>Chat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Chat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
