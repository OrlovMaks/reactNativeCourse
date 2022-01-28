import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import { ButtonCount } from './src/components/Button/Button';
import { ChangeNumber } from './src/components/ChangeNumber/ChangeNumber';
const heightWindow = Dimensions.get('window').height;


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#87e5ad" />
      <ImageBackground source={require('./src/images/background.jpeg')} style={{ flex: 1, justifyContent: 'center' }} resizeMode='cover' >
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: heightWindow }}>
          <ChangeNumber></ChangeNumber>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
