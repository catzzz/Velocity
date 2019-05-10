import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Settings extends Component<Props> {
  render() {
    return (
      <View style={styles.Settings}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});