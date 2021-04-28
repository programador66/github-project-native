import React from 'react';
import {AntDesign,Feather} from '@expo/vector-icons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Repos from '../screens/Repos';
import Seguidores from '../screens/Seguidores';
import Seguindo from '../screens/Seguindo';

const Tab = createBottomTabNavigator();
const icons = {
    Home: {
       lib: AntDesign,
       name: 'home',
    },
    Repos: {
       lib: Feather,
       name: 'github'
    },
    Seguidores: {
       lib: Feather,
       name: 'users'
    },
    Seguindo: {
       lib: Feather,
       name: 'users'
    }
 }



const Navigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route,navigation}) => ({
                
                tabBarIcon: ({color, size, focused}) => {
                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                 },
                 tabBarVisible: true,
            })}
            tabBarOptions={{
                style: {
                   backgroundColor: '#fff',
                   borderTopLeftRadius: 15,
                   borderTopRightRadius: 15,
                   height: 60,
                },
                activeTintColor: '#000000',
                inactiveTintColor: '#92929c',
                labelStyle: {
                    marginTop: 0,
                    marginBottom: 5,
                    fontSize: 15
                }
             }}
             
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Repos" component={Repos} />
            <Tab.Screen name="Seguidores" component={Seguidores} />
            <Tab.Screen name="Seguindo" component={Seguindo} />
        </Tab.Navigator>
    );
}

export default Navigation;