/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {store} from './app/store/configureStore';

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
    <Provider store={store}>
      <Navigator>
        <HomeScreen />
      </Navigator>
    </Provider>
  );
}
