import React from 'react';
import { useState } from 'react';

//Component Import
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View } from 'react-native';

const FriedChicken = () => {
  const [inputValue, setInputValue] = useState('')
  const checkValueNUM=()=>{
    if(isNaN(inputValue)){
      alert("It isn't Number")
    }else{
      alert("It is Number")
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput placeholder="Enter text"
        style={styles.txtInputST}
        onChangeText={(inputValue)=>{setInputValue(inputValue)}}
        />
        <Button title="Check Value" onPress={checkValueNUM}/>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  }, txtInputST: {
    textAlign: 'center',
    height: 50,
    width: "70%",
    marginBottom: 10,
  }
});
export default FriedChicken;