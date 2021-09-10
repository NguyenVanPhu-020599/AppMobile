import React, {Component} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import Login from './login';
import Main from './main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// eslint-disable-next-line no-undef
export default RootComponent = () => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
