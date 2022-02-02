import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import {styles} from '../components/styles';
const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,padding:15}}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>This is a Third Page</Text>
                <Button title="Go To First Page" onPress={() => navigation.navigate('FirstPage')} />
                <Button title="Go to Second Page" onPress={() => navigation.navigate('SecondPage')} /> 
                <Text style={{bottom:15, position:'absolute'}}>
                    <Text style={styles.textBottomStyle} >Thai-Nichi Institute of Technology</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default ThirdPage;