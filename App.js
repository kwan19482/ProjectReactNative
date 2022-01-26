import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { View, TouchableOpacity,Image  } from 'react-native';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props)=>{
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return(
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Image
          source={require('./assets/drawerWhite.png')}
          style={{width:25,height:25,marginLeft:5}}
        />
      </TouchableOpacity>
    </View>
  );
}
function firstScreenStack({navigation}){
  return(
    <Stack.Navigator 
    initialRouteName='FirstPage' 
    screenOptions={{
      headerStyle:{backgroundColor:'#5f9ea0',}, 
      headerTintColor:'#fff', 
      headerTitleStyle:{fontWeight:'bold'},
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>
    }}
    >
      <Stack.Screen name='FirstPage' component={FirstPage} options={{title:'FirstPage'}}/>

    </Stack.Navigator>
  )
}
function SecondScreenStack({navigation}){
  return(
    <Stack.Navigator 
    initialRouteName='FirstPage' 
    screenOptions={{
      headerStyle:{backgroundColor:'#5f9ea0'}, 
      headerTintColor:'#fff', 
      headerTitleStyle:{fontWeight:'bold'},
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>
    }}
    >
      <Stack.Screen name='SecondPage' component={SecondPage} options={{title:'SecondPage'}}/>
      <Stack.Screen name='ThirdPage' component={ThirdPage} options={{title:'ThirdPage'}}/>

    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor:'#e91263',
            itemStyle:{marginVertical:5}
          }}
        >
          <Drawer.Screen 
            name='FirstPage' 
            component={firstScreenStack}
            options={{drawerLabel:'First page Option'}}
          />
          <Drawer.Screen 
            name='SecondPage' 
            component={SecondScreenStack}
            options={{drawerLabel:'Second page Option'}}
          />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
