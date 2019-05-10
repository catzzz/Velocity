import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Vehicles extends Component<Props> {
  render() {
    return (
      <View style={styles.Vehicles}>
        <Text>Vehicles</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Vehicles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
