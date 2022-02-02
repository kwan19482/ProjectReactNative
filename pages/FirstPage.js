import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import {styles} from '../components/styles';
import Logo from './Logo';
const FirstPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:()=><Logo/>,
      headerRight: () => (
        <Button onPress={() => alert('Test')} title="Register" />
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,padding:15}}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is a First Page</Text>
                <Button title="Go To Second Page" onPress={() => navigation.navigate('SecondPage')} />
                <Button title="Go to Third Page" onPress={() => navigation.navigate('ThirdPage')} /> 
                <Text style={{bottom:15, position:'absolute'}}>
                    <Text style={styles.textBottomStyle} >Thai-Nichi Institute of Technology</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default FirstPage;