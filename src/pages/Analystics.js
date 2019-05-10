import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Analysitcs extends Component<Props> {
  render() {
    return (
      <View style={styles.Analysitcs}>
        <Text>Analysitcs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Analysitcs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
