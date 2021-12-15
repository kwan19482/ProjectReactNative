import React from 'react'
import { StyleSheet, Text, View, Alert, SafeAreaView, Button } from 'react-native'

const AlertExample = () => {
    const simpleAlertHandler=()=>{
        alert('hello, I am Simple Alert')
    }
    const TwoOptionAlert =()=>{
        //function to make two option alert 
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert. do you want to cancle me?',
            [
                {
                    text:'Yes',
                    onPress:()=>console.log('Yes, Pressed')
                },
                {
                    text:'No',
                    onPress:()=>console.log('No Pressed')
                }
            ], {cancelable:false}
        );
    }
    const ThreeOptionAlert =()=>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I am three option alert. What you want to do with me?',
            [
                {
                    text:'Maybe',
                    onPress:()=>console.log('Cancle Pressed')
                },
                {
                    text:'Yes',
                    onPress:()=>console.log('Yes, Pressed')
                },
                {
                    text:'Ok',
                    onPress:()=>console.log('Ok Pressed')
                }
                
            ],
            {cancelable:true}
        );
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button title="Simple Alert" onPress={simpleAlertHandler}/>
                <Button title="Alert with Two Option" onPress={TwoOptionAlert}/>
                <Button title="Alert with Three Option" onPress={ThreeOptionAlert}/>
            </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
