import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tab';
import TransactionScreen from './Screens/fb';
import SearchScreen from './Screens/in';

export default class App extends React.Component{
  render (){
    return (
      <AppContainer/>
    )
  }
}
const tabNavigator = createBottomTabNavigator({
  Transaction: {screen:fb},
  Search:{screen: }
})
const AppContainer = createAppContainer(tabNavigator)