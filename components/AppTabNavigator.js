import React from 'react';
import { Image } from 'react-native';
import { AppStackNavigator } from './AppStackNavigator'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screens/Exchange';
export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/icon.png")} style={{width:25, height:25}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  BookRequest: {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/icon.png")} style={{width:25, height:25,}} />,
      tabBarLabel : "ExchangeScreen",
    }
  }
});