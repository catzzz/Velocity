import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Map extends Component<Props> {
  render() {
    return (
      <View style={styles.Map}>
        <Text>Map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
