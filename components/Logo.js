import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const title="TNI";
    const isTitle=true;
    const showData=()=>{<Text>Hello,December</Text>}
    return (
        <View>
            <Text style= {{color:'blue',fontSize:20}}>Thai-Nichi</Text>
            {isTitle===true && <Text>{title}</Text>}
            {isTitle===true?<Text>{title}</Text>
            :<Text>Thai-Nichi</Text>}
            {/* <Text>{title}</Text> */}
            {showData()}
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
