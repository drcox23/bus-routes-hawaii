import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
// import { Icon } from 'react-native-elements'

//~~~~~~~~~~ MY IMPORTS ~~~~~~~~~~//
import Home from '../app/screens/HomeScreen.js';
import Other from '../app/screens/OtherScreen.js';

//Navigation Tabs

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#273746',
      },
    },
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const OtherStack = createStackNavigator(
  {
    Other: Other,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#273746',
      },
    },
  }
);

OtherStack.navigationOptions = {
  tabBarLabel: 'Other',
};

export default createBottomTabNavigator(
  {
    HomeStack,
    OtherStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#ffeeb0',
      activeBackgroundColor: '#e37874',
      style: {
        backgroundColor: '#273746',
      },
      labelStyle: {
        color: 'white',
      },
    },
  }
);
