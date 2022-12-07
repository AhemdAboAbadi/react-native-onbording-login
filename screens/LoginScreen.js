import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SuctionalButton from '../components/SuctionalButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN social Media</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        iconType="user"
        placeholderText={'Email'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        iconType="lock"
        placeholderText={'Password'}
        secureTextEntry={true}
      />
      <FormButton
        buttonTittle={'Sign In'}
        onPress={() => alert('Sign In Clicked')}
      />
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navBtnText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SuctionalButton
        backgroundColor={'#e6eaf4'}
        color={'#4867aa'}
        buttonTittle={'Sign In with Facebook'}
        btnType={'facebook'}
      />
      <SuctionalButton
        backgroundColor={'#f5e7ea'}
        color={'#de4d41'}
        buttonTittle={'Sign In with Google'}
        btnType={'google'}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text
          style={styles.navBtnText}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Don't Have an Account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafd',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    fontFamily: 'Kufam-SemiBoldItalic',
  },
  navBtn: {
    marginTop: 15,
  },
  forgotButton: {
    marginTop: 17,
    marginBottom: 17,
  },
  navBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
