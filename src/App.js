import React from 'react';
import {View} from 'react-native';
import ClassComp from './components/ClassComp';
import StylingComponent from './components/StylingComp';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <View>
      <StylingComponent />
      <Home />
      <About />
      <ClassComp />
    </View>
  );
};

export default App;
