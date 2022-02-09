import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react';
import {styles} from '../components/styles';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 15 }}>
                <View style={styles.container}>
                    <Text style={styles.textTopStyle}>Home Screen</Text>
                    <Button title="Go To Setting Tab" onPress={()=> navigation.navigate('Setting')} />
                    <Button title="Open News Screen" />

                    <Text style={{ bottom: 15, position: 'absolute' }}>
                        <Text style={styles.textBottomStyle} >www.tni.ac.th</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default HomeScreen;



