import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native'


const TextInputPractice1 = () => {
    const [inputName,setInputName] = useState('')
    const [inputMail,setInputMail] = useState('')
    const checkInput1=()=>{
        if(!inputName.trim()){
            alert('Please input name')
        }else if(!inputMail.trim()){
            alert('Please input Email')
        }else{
            alert('Success')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(inputName)=>{setInputName(inputName)}}
                placeholder="Enter Name"
                
            />
             <TextInput
                style={styles.textInputStyle}
                onChangeText={(inputMail)=>{setInputMail(inputMail)}}
                placeholder="Enter Email"
                
            />
           <View style={{marginTop:10}}>
           <Button onPress={checkInput1} title="submit" color="#1FE253" />
           </View>

        </SafeAreaView>
    )
}


export default TextInputPractice1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
});
