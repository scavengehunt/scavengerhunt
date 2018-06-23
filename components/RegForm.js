import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default class RegForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  updateValue(text, field) {
    if (field === 'email') {
      this.setState({
        email: text,
      });
    } else if (field === 'password') {
      this.setState({
        password: text,
      });
    }
  }

  handleSubmit() {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={text => this.updateValue(text, 'email')}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          password={true}
          onChangeText={text => this.updateValue(text, 'password')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}