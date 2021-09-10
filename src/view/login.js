import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// eslint-disable-next-line no-undef
export default Login = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Main');
  }, 3000);
  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../image/pngtree-real-estate-development-background-map-image_210560.jpeg')}
        resizeMode="stretch"
      />
      <View style={style.loading}>
        <ActivityIndicator size="large" color="#FF0000" style={style.test} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  test: {
    marginBottom: '250%',
  },
});
