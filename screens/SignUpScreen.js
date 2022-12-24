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

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>
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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        iconType="lock"
        placeholderText={'Password'}
        secureTextEntry={true}
      />
      <FormButton
        buttonTittle={'Sign Up'}
        onPress={() => alert('Sign Up Clicked')}
      />
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
          navigation.navigate('Slider');
        }}>
        <Text style={styles.navBtnText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafd',
    padding: 20,
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
  navBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
