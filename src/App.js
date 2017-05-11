import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Header from './components/common/Header';
import MealList from './components/MealList';


class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="GainIt" />
        <MealList />
      </View>
    );
  }
}

export default App;
