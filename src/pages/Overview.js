import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Overview extends Component<Props> {
  render() {
    return (
      <View style={styles.Overview}>
        <Text>Overview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Overview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
