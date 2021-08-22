import React from 'react';
import { SafeAreaView } from 'react-native';
import Input from './components/Input';
import Splash from './pages/Splash';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Input />    
    </SafeAreaView>
  );
};

export default App;
