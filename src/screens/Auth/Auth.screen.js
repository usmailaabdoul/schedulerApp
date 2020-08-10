import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

import styles from './Auth.style';

const Auth = () => {
  const [emailValue, onEmailChange] = useState('');
  const [passwordValue, onPasswordChange] = useState('');

  const perfomLogin = (email, password) => {
    if (!email.length || !password.length) {
      return console.log('empty fields');
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('successfully logged in', res.user.email);
        Alert.alert('Success', `Successfully logged in as ${res.user.email}`, [
          {
            text: 'ok',
            onPress: () => Actions.home(),
          },
        ]);
      })
      .catch((e) => {
        registerUser(email, password);
        console.log('something happened', e);
      });
  };

  const registerUser = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('successfully registered', res.user.email);
        Alert.alert('Success', `Successfully registered as ${res.user.email}`, [
          {
            text: 'ok',
            onPress: () => Actions.home(),
          },
        ]);
      })
      .catch((e) => {
        console.log('something unpected happened', e);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerIcon}>
          <Icon name="chevron-back-outline" size={25} color="#00000090" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Sign in / Register</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text style={styles.formLable}>Email address</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your email"
              value={emailValue}
              onChangeText={(text) => onEmailChange(text)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <Text style={styles.formLable}>Password</Text>
          <View style={styles.form}>
            <TextInput
              placeholder="Enter your password"
              value={passwordValue}
              onChangeText={(text) => onPasswordChange(text)}
              style={styles.textInput}
              secureTextEntry
            />
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => perfomLogin(emailValue, passwordValue)}
        style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Auth;
