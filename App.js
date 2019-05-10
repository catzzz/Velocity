/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


import Overview from './src/pages/Overview.js'
import Analystics from './src/pages/Analystics.js'
import Chat from './src/pages/Chat.js'
import HomeScreen from './src/pages/HomeScreen.js'
import LinksScreen from './src/pages/LinksScreen.js'
import Map from './src/pages/Map.js'
import Service from './src/pages/Service.js'
import Settings from './src/pages/Settings.js'
import SettingScreen from './src/pages/SettingScreen.js'
import Vehicles from './src/pages/Vehicles.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Analystics/>
        <Overview/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
