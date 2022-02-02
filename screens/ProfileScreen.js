import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
        <Text>You are on Profile Screen</Text>
        <Text style={{ bottom: 15, position: 'absolute' }}>
          <Text style={styles.textBottomStyle} >www.tni.ac.th</Text>
        </Text>
      </View>
    </SafeAreaView>

  );
};

export default ProfileScreen;
