import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Profile } from '../pages/Profile/index'
import { SearchPage } from '../pages/Search/index'
import { MyProducts } from '../pages/myProducts/index';
import { MyRequests } from '../pages/myRequests/index';
import { Catalog } from '../pages/Catalog/index';
import { BookRegister } from '../pages/BookRegister/index';
import { ProductPurchase } from '../pages/ProductPurchase/index';
import { StorePage } from '../pages/StorePage/index';
import { ShoppingCart } from '../pages/ShoppingCart/index';
import { Login } from '../pages/Login/index';

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
    <Stack.Navigator initialRouteName="Catalogo" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Catalogo" component={Catalog} />
      <Stack.Screen name="Loja" component={StorePage}/>
      <Stack.Screen name="CompraProduto" component={ProductPurchase}/>
      <Stack.Screen name="CarrinhoComp" component={ShoppingCart}/>
    </Stack.Navigator>
  );
}

function TabInicialPages() {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveBackgroundColor: "#dadadf"}} >
        <Tab.Screen
        name="Home"
        component={StackPagesCat}
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
        name="Requests"
        component={MyRequests}
        options={{
          tabBarIcon: () => {
            return <Feather name='inbox' size={25} color="#000"/>;
          }
        }}
        />
        <Tab.Screen
        name="Profile"
        component={StackPagesProfile}
        options={{
          tabBarIcon: () => {
            return <Feather name='user' size={25} color="#000"/>;
          }
        }}
        />
      </Tab.Navigator>
    //  </NavigationContainer> 
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="Telas" component={TabInicialPages}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}