import React from 'react';
import { View, TouchableOpacity,Image ,Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

function HomeScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>HomeScreen</Text>
    <Button onPress={}>Go to setting Tab</Button>
  </View>
  )
}
function SettingScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Setting!!</Text>
    </View>
  )
}
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color})=>{
            let iconName;
            if(route.name==="Home"){
              iconName = focused?"exclamationcircle":"exclamationcircleo";
            }else if(route.name==="Setting"){
              iconName = focused?"closecircle":"closecircleo";
            }
            return <AntDesign name={iconName} color={color} />;
          }
        })}
        tabBarOptions={{activeTintColor:'red', inactiveTintColor:'gray'}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
