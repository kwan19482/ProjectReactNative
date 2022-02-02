import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, textTopStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
    }, textBottomStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
    }

});

