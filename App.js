import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#FACF5A'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
        <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
    </Stack.Navigator>
  )
}
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FACF5A' },
        headerTintColor: '#233142',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Setting Page' }} />
       <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Profile Page' }} />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          ItemStyle: {marginVertical: 5}
      }}
      >
        <Drawer.Screen name='HomeScreen' component ={HomeStack}/>
        <Drawer.Screen name='ProductStack' component ={ProductStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
