import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../pages/Profile'
import { SearchPage } from '../pages/Search'
import { MyProducts } from '../pages/myProducts';
import { MyRequests } from '../pages/myRequests';
import { Catalog } from '../pages/Catalog';
import { BookRegister } from '../pages/BookRegister';
import { ProductPurchase } from '../pages/ProductPurchase';

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackPagesProfile() {
  return (
    <Stack.Navigator initialRouteName="Profile Options" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Produtos" component={MyProducts} />
      <Stack.Screen name="BookRegister" component={BookRegister} />
    </Stack.Navigator>
  );
}

function StackPagesCat() {
  return (
    <Stack.Navigator initialRouteName="Catalog Options" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Catalogo" component={Catalog} />
      <Stack.Screen name="CompraProduto" component={ProductPurchase} />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, }}>
        <Tab.Screen
        name="Início"
        component={StackPagesCat}
        options={{ 
          tabBarIcon: () => {
            return <Feather name='home' size={25} color="#000"/>;
          }
         }}
        />
        
        <Tab.Screen
        name="Pesquisa"
        component={SearchPage} 
        options={{ 
          tabBarIcon: () => {
            return <Feather name='search' size={25} color="#000"/>;
          }
         }}
        />

        <Tab.Screen
        name="Pedidos"
        component={MyRequests}
        options={{
          tabBarIcon: () => {
            return <Feather name='inbox' size={25} color="#000"/>;
          }
        }}
        />
        <Tab.Screen
        name="Perfil"
        component={StackPagesProfile}
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