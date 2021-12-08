import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity } from 'react-native'

const TouchablePractice = () => {
    const [inputPS,setInputPS] = useState('')
    const [inputMail,setInputMail] = useState('')
    const checkInput1=()=>{
        if(inputMail.trim()&&inputPS.trim()){
            alert('Email : '+inputMail+'\n'+'Password : '+inputPS)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            
            
             <TextInput
                style={styles.textInputStyle}
                onChangeText={(inputMail)=>{setInputMail(inputMail)}}
                placeholder="Enter Email"
                
            />
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(inputPS)=>{setInputPS(inputPS)}}
                placeholder="Enter Password"
                
            />
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={checkInput1}>
                <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
        alignItems: 'center',
        
    },buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },textInputStyle: {
        borderColor:'#000000'  ,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        borderRadius:5,
    }
})