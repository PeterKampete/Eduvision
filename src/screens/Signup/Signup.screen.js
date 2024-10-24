import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import isEmail from 'validator/lib/isEmail';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Signup.style';

import {FormInput, FormButton, EduvisionText} from '../../components';
import {AuthContext} from '../../navigation/AuthProvider';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const showToastWithGravityAndOffset = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const {register, setUser} = useContext(AuthContext);

  const registerUser = async () => {
    setLoading(true);

    if (
      email.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0
    ) {
      showToastWithGravityAndOffset('All Input fields must be filled');
      setLoading(false);
      return false;
    }

    if (!isEmail(email)) {
      showToastWithGravityAndOffset('Not a valid email');
      setLoading(false);
      return false;
    }

    if (password !== confirmPassword) {
      showToastWithGravityAndOffset('Password does not match');
      setLoading(false);
      return false;
    }

    const user = await register(email, password);
    if (user) {
      setUser(user);
      await AsyncStorage.setItem('@user', user);
      navigation.navigate('Home');
    } else {
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to <EduvisionText style={{fontWeight: 'bold', fontSize: 28}} />
        🔥
      </Text>

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Phone number"
        iconType="phone"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        passwordInput
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        passwordInput
      />

      {loading ? (
        <ActivityIndicator
          style={{marginTop: 10}}
          size="large"
          color={'#2e64e5'}
        />
      ) : (
        <FormButton buttonTitle="Register" onPress={registerUser} />
      )}

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
