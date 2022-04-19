/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './app/components/home';
import OtpScreen from './app/components/otp';

const OnBoarding = createStackNavigator(
  {Home: HomeScreen, Otp: OtpScreen},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#20232A',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFF',
      },
      headerTintColor: '#FFF',
    },
  },
);

const Navigator = createAppContainer(OnBoarding);

export default function App() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}
