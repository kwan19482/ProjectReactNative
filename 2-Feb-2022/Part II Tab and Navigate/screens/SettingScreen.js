import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';
const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={styles.container}>
                <Text style={styles.textTopStyle}>Setting Screen</Text>
                <Button title="Go To Home Tab" onPress={()=> navigation.navigate('Home')} />
                <Button title="Open News Screen" />
                <Button title="Go To Profile Screen" onPress={()=> navigation.navigate('Profile')} />
                

                <Text style={{ bottom: 15, position: 'absolute' }}>
                    <Text style={styles.textBottomStyle} >www.tni.ac.th</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView >
);
};

export default SettingScreen;
