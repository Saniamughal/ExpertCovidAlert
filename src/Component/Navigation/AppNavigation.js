import React from 'react';
import NavString from './NavString';
import { Image } from 'react-native';
import TipsList from '../../Screens/TipsList';
import Home from '../../Screens/Home';
import Status from '../../Screens/Status';
import Remainder from '../../Screens/Remainder';
import TipsDescripton from '../../Screens/TipsDescription';
import ImagesPath from '../../Icons/ImagesPath';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }
    } >
      <Stack.Screen name={NavString.HOME}
      >

        {() => (
          <Tab.Navigator

            screenOptions={{
              // headerStyle: { elevation:0, backgroundColor: '#A30000' },
              headerShown: false,
              tabBarActiveTintColor: '#330000',
              // tabBarInActiveTintColor:'#330000',
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                borderRadius: 40,
                bottom: 10,
                marginHorizontal: 16,
                backgroundColor: '#A30000',
                height: 70



              }
            }}

          >
            <Tab.Screen name={NavString.HOME} component={Home}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{ tintColor: focused ? '#330000' : 'black' }}
                      source={ImagesPath.icHome} />
                  )
                }
              }} />
            <Tab.Screen name={NavString.TIPS} component={TipsList}
              options={{

                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{ tintColor: focused ? '#330000' : 'black' }}
                      source={ImagesPath.icTip} />
                  )
                }
              }} />
            <Tab.Screen name={NavString.STATUS} component={Status}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{ tintColor: focused ? '#330000' : 'black' }}
                      source={ImagesPath.icStatus} />
                  )
                }
              }} />

            <Tab.Screen name={NavString.REMAINDER} component={Remainder}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Image
                      style={{ tintColor: focused ? '#330000' : 'black' }}
                      source={ImagesPath.icSetting} />
                  )
                }
              }} />
          </Tab.Navigator>)}

      </Stack.Screen>

      <Stack.Screen
        name={NavString.Description}
        component={TipsDescripton}
      />
    </Stack.Navigator>

  );

};


export default AppNavigation;