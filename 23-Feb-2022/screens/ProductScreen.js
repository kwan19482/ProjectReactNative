import React,{useState,useEffect} from 'react';
import {StyleSheet,  View,ActivityIndicator,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Badge } from 'native-base';
import axios from 'axios';
/* import { FlatList } from 'react-native-gesture-handler'; */
import {styles} from '../components/styles';

import { useFocusEffect } from '@react-navigation/native';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(false);
let cancelToken;
  const getData = async ()=>{
    setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course',{cancelToken:cancelToken.token});
      setProduct(res.data.data); //Update Product จากค่าที่ดึงมา
      setLoading(false);
    };
    useFocusEffect(
      //usecallback เอาไว้ optimize function for dont re-render of child component
      React.useCallback(()=>{
        cancelToken=axios.CancelToken.source();
        getData();
        return()=>{
          cancelToken.cancel();
        }
      },[])
    )
  /*useEffect(()=>{
        getData();
      }, []);*/

  if(loading === true){
    return(
      <View style={styles.container}>
          <ActivityIndicator color='blue' size='large'/>
      </View>
    )
  }
const _onRefresh = ()=>{
  getData();
}
  return (
    <View >
    <FlatList
        data={product}
        keyExtractor={(item,index)=>item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading} //if refreshing = true : waiting for data refresh!
        renderItem={({item})=>(
            <ListItem thumbnail onPress={()=>{
              navigation.navigate('Detail',{
                id:item.id,
                title:item.title //get title from backend and send to detail
              })
            }}>
              <Left>
                <Thumbnail square source={{ uri: item.picture }} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.detail}</Text>
              </Body>
              <Right>
                <Badge danger>
                    <Text>
                        {item.view}
                    </Text>
                </Badge>
              </Right>
            </ListItem>
        )}
    />
    </View>
  );
};


export default ProductScreen;
