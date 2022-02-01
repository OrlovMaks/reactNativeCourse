import React from 'react';
import {SafeAreaView,ImageBackground,StatusBar,View,Dimensions, StyleSheet,} from 'react-native';
import { ChangeNumber } from './components/changeNumber/index';


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar animated={true} backgroundColor="#87e5ad" />
      <ImageBackground source={require('../assets/background.jpeg')} style={styles.backgroundImage} resizeMode='cover' >
          <ChangeNumber></ChangeNumber>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1
  },
  backgroundImage:{
    flex: 1,
    justifyContent: 'center'
  }
})