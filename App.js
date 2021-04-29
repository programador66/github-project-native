import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from "react-native";
import MainStack from './src/stack/MainStack';
import { DefaultTheme } from '@react-navigation/native';

import {GitHubProvider} from './src/contexts/gitHub';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#292929',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Main = () => {
  return (
    <>
     <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer theme={MyTheme} >
        <GitHubProvider>
          <MainStack />
        </GitHubProvider>
      </NavigationContainer>
    </>
  );
}

export default Main;
