import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation,route}) => {
  const {id,title} =route.params;
  React.useLayoutEffect(
    ()=>{
      navigation.setOptions({
        /* title:'รายละเอียดสินค้า' //static set! */
        title:title //Dynamic set!
      })
    },[navigation]
  )
  return (
    <View>
      <Text>{id}. {title}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})