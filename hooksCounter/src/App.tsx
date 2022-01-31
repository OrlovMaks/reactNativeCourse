import React from 'react';
import {SafeAreaView,ImageBackground,StatusBar,View,Dimensions,} from 'react-native';
import { ButtonCount } from './components/buttonsIncrementDecrement/index';
import { ChangeNumber } from './components/changeNumber/index';
const heightWindow = Dimensions.get('window').height;


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#87e5ad" />
      <ImageBackground source={require('../assets/background.jpeg')} style={{ flex: 1, justifyContent: 'center' }} resizeMode='cover' >
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: heightWindow }}>
          <ChangeNumber></ChangeNumber>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
