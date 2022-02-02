import React from 'react';
import { View, TouchableOpacity, Image, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import SettingScreen from './pages/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
function HomeScreenStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#FACF5A' },
        headerTintColor: '#233142',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomeScreen' }} />
    </Stack.Navigator>
  )
}
function SettingScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FACF5A' },
        headerTintColor: '#233142',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Setting" component={SettingScreen} options={{ title: 'SettingScreen' }} />
       <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'ProfileScreen' }} />
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "exclamationcircle" : "exclamationcircleo";
            } else if (route.name === "Setting") {
              iconName = focused ? "closecircle" : "closecircleo";
            }
            return <AntDesign name={iconName} color={color} />;
          }
        })}
        tabBarOptions={{ activeTintColor: 'red', inactiveTintColor: 'gray' }}>

        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Setting" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
