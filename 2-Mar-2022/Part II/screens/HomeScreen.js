import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { userStoreContext } from '../context/UserContext';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);
const HomeScreen = ({navigation}) => {
  const userStore = React.useContext(userStoreContext);

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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),  
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#f4511e" />
      {
        userStore.profile&& (
          <>
            <Text>ยินดีต้อนรับ: {userStore.profile.name}</Text>
            <Text>อีเมล: {userStore.profile.email}</Text>
          </>
        )
        
      }
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to Product"
        onPress={() =>
          navigation.navigate('Product', {email: 'sa.wiraphat_st@tni.ac.th'})
        }  
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});