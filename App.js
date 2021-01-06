import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tab';
import facebook from './Screens/Face';
import instagram from './Screens/Insta';

export default class App extends React.Component{
  render (){
    return (
      <AppContainer/>
    )
  }
}
const tabNavigator = createBottomTabNavigator({
  Transaction: {screen:facebook},
  Search:{screen:instagram }
})
const AppContainer = createAppContainer(tabNavigator)
