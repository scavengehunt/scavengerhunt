import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RegForm from './components/RegForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default class App extends Component {
  render() {
    const markers = fakePoints
    return (
      <View style={styles.container}>
        <RegForm />
      </View>
    );
  }
}
