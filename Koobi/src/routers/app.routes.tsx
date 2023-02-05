import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Profile } from '../pages/Profile/profile'
import { MyProducts } from '../pages/myProducts/myProducts';
import { MyRequests } from '../pages/myRequests/myRequests';
import { MainPage } from '../pages/PrincipalPage/mainPage';

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, }}>
        <Tab.Screen
        name="Home"
        component={MainPage}
        options={{ 
          tabBarIcon: () => {
            return <Feather name='home' size={25} color="#000"/>;
          }
         }}
        />
        
        <Tab.Screen
        name="Search"
        component={MyProducts} 
        options={{ 
          tabBarIcon: () => {
            return <Feather name='search' size={25} color="#000"/>;
          }
         }}
        />

        <Tab.Screen
        name="My requests"
        component={MyRequests}
        options={{
          tabBarIcon: () => {
            return <Feather name='inbox' size={25} color="#000"/>;
          }
        }}
        />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Feather name='user' size={25} color="#000"/>;
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}