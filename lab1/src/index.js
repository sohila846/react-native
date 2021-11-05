
import {SearchScreen} from './screens';
import React from 'react';
import {COLORS} from './common';
import {SafeAreaView, StatusBar} from 'react-native';
const App =()=>{
return(
  <SafeAreaView
  style={{
    flex: 1,
    backgroundColor: COLORS. oxfordBlue,
  }}>
  <StatusBar barStyle={'light-content'}/>
 
  <SearchScreen />
</SafeAreaView>
)

};


export default App;
