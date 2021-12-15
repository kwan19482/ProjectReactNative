import React,{useState,useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    const users=[
        {id:1, name:'John'},
        {id:2, name:'Jun'}
    ]
    
    const [count,setCount] = useState(0); 
    //const [] = useState(); Default Syntax of useState

    //useEffect will work when this file have a render
    useEffect(()=>{
        console.log('use effect')
    })
    //one time work เช่นการเรียกข้อมูลจากbackend
    useEffect(()=>{
        console.log('use effect2')
    },[])
    //useEffect will work when variable is changing
    useEffect(()=>{
        console.log('use effect3')
    },[count])

    return (
        <View>
            <Text style={styles.title}>Thai Nichi Institute of Technology {count}</Text>
            {
                users.map((user,index)=>{ //map is function for call array data
                    return <Text key={user.id}>{index+1}.{user.name}</Text>
                })
            }
            <Button title="Meow" 
            onPress={ ()=>{
                    setCount(count+1)
                }
        }/>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:40,
        
    }
})
