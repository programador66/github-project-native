import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TabNavigation from './Navigation';
import FindUserGitHubContext from '../contexts/gitHub';

const Stack = createStackNavigator();


const MainStack = () => {
  const { signed } = useContext(FindUserGitHubContext);
 
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false
        }
      }
      >
        {
          !signed ? <Stack.Screen name="Login" component={Login} /> :
                    <Stack.Screen name="Navigation" component={TabNavigation} />
        }
         
      </Stack.Navigator>
  );
}

export default MainStack;