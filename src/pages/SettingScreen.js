import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class SettingScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.SettingScreen}>
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SettingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
