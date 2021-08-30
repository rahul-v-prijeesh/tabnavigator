import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Facb from './screens/fb';
import Instagram from './screens/insta';
export default class App extends React.Component {
  render() {
    return (
     
        <AppContainer/>
      // <Text>you should return your books</Text>
    )
  }


}                    
const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facb },
  Instagram: { screen: Instagram }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});