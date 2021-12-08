import React from 'react'
import { useState } from 'react';

//Component Import
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View } from 'react-native';


const TextInputReview = () => {
    const [text, onChangeText] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: '#1D57FF' }} >{text}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />


        </SafeAreaView>
    )
}

export default TextInputReview

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor:'#ffffff',
    }, input: {
      height: 44,
      width: 250,
      marginBottom: 10,
      marginTop:20,
      backgroundColor:'#e8e8e8'
    }
  });
