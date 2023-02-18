import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../pages/Profile'
import { SearchPage } from '../pages/Search'
import { MyProducts } from '../pages/myProducts';
import { MyRequests } from '../pages/myRequests';
import { MainPage } from '../pages/PrincipalPage';
import { BookRegister } from '../pages/BookRegister';

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackPages() {
  return (
    <Stack.Navigator initialRouteName="Profile Options" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Produtos" component={MyProducts} />
      <Stack.Screen name="BookRegister" component={BookRegister} />
    </Stack.Navigator>
  );
}

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
        component={SearchPage} 
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
        component={StackPages}
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