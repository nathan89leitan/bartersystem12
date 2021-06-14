import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ReceiverDetailsScreen  from '../screens/ReceiverDetailsScreen';
import NotificationScreen from '../screens/NotificationsScreen'

import HomeScreen from '../screens/HomeScreen';
export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BarterList'
  }
);