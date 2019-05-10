import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Service extends Component<Props> {
  render() {
    return (
      <View style={styles.Service}>
        <Text>Service</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Service: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});