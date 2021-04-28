import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TabNavigation from './Navigation';

const Stack = createStackNavigator();

// import { Container } from './styles';

const MainStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false
        }
      }
      >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Navigation" component={TabNavigation} />
      </Stack.Navigator>
  );
}

export default MainStack;