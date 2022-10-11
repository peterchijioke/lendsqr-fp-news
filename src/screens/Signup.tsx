import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../assets/colors/Colors';
import Button from './components/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNews, getNewsLoading} from '../application/selectors/news/Index';
import {NEWS_LOAD} from '../application/reducers/news/ui';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AppText from './components/text/AppText';
import Wrapper from './components/wrapper/Wrapper';
import AppInput from './components/input/AppInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {loginName} from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Helper from '../partials/Helper';
import {newsListingName} from './NewsListing';
import Loading from './components/loading/Loading';
export let signupName = 'signup';

const Signup = ({navigation, ...props}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [eyeState, setEyeState] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [error, setError] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const allNews = useSelector(getAllNews);
  // const loading = useSelector(getNewsLoading);
  const helperClass = new Helper();

  let Navigation = (screenName: any): void => {
    navigation.navigate(`${screenName}`);
  };

  let profileImageSize = 150;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '368879747942-8df76scm7horfgo3l1esoqp5vfgsv2fg.apps.googleusercontent.com',
      profileImageSize,
    });
  }, []);

  useEffect(() => {
    dispatch(NEWS_LOAD(false));
  }, [useIsFocused()]);

  const HandleSignup = async () => {
    setLoading(true);
    try {
      AsyncStorage.getItem('userdetails');
    } catch (error) {
      console.error(error);
    }
    const userDetails: object = {
      name: fullName,
      phone: phoneNumber,
      email,
      password,
    };

    if (fullName && phoneNumber && email && password) {
      if (toggleCheckBox) {
        const emailValidationRespons = helperClass.validateEmail(email);
        if (emailValidationRespons) {
          let responds = await helperClass.storeData(
            userDetails,
            'userdetails',
          );
          if (responds == 'saved') {
            setTimeout(() => {
              setLoading(false);
              Navigation(loginName);
            }, 4000);
          }
        } else {
          setLoading(false);
          setError('Ooops.. The provided email is not valid');
        }
      } else {
        setLoading(false);
        setError(
          'Ooops.. Confirm you read our privacy policy by checking the box.',
        );
      }
    } else {
      setLoading(false);
      setError('Ooops.. Please make sure all fields are filled');
    }
  };

  const HandleGoogleSignup = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.secondary}}>
      <KeyboardAwareScrollView
        style={{flex: 1, backgroundColor: Colors.secondary}}>
        <View style={styles.constainer}>
          <Wrapper style={{width: '90%', alignSelf: 'center'}}>
            <Wrapper
              style={{
                width: '90%',
                backgroundColor: 'transparent',
                alignSelf: 'center',
                marginTop: '2%',
              }}>
              <AppText.SubTitle
                style={{color: Colors.primary, marginTop: '5%', fontSize: 14}}>
                {error}
              </AppText.SubTitle>
            </Wrapper>
            {/* Name */}
            <Wrapper style={{marginTop: '4%', marginBottom: '4%'}}>
              <AppInput onChangeText={setFullName} placeholder="Full Name" />
            </Wrapper>

            {/* Email Entry */}
            <Wrapper style={{marginTop: '5%', marginBottom: '4%'}}>
              <AppInput
                onChangeText={setPhoneNumber}
                placeholder="Phone Number"
              />
            </Wrapper>

            {/* Email Entry */}
            <Wrapper style={{marginTop: '5%', marginBottom: '4%'}}>
              <AppInput.Email onChangeText={setEmail} placeholder="Email" />
            </Wrapper>

            {/* Password Entry */}
            <Wrapper style={{marginTop: '5%', marginBottom: '2%'}}>
              <AppInput.Password
                onChangeText={setPassword}
                placeholder="Password"
                eyeState={eyeState}
                secureTextEntry={eyeState}
                onPressEye={() => {
                  setEyeState(!eyeState);
                }}
              />
            </Wrapper>
          </Wrapper>
          {/* Check box */}
          <Wrapper
            style={{
              justifyContent: 'flex-start',
              width: '85%',
              marginBottom: '5%',
              alignItems: 'center',
              marginTop: '1%',
              paddingLeft: '2%',
            }}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.baseAncent}
              unfillColor="#FFFFFF"
              text="I accept the terms and Conditions"
              iconStyle={{borderColor: 'red'}}
              innerIconStyle={{borderWidth: 2}}
              onPress={(isChecked: boolean) => {
                setToggleCheckBox(isChecked);
              }}
            />
          </Wrapper>

          {/* Signup button  */}
          <Wrapper
            style={{
              justifyContent: 'flex-start',
              width: '85%',
              alignSelf: 'center',
              marginBottom: '2%',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Button.SignUp
              onPress={HandleSignup}
              text="Sign Up"
              style={{padding: 10, width: '60%'}}
            />
            <AppText.Body style={{fontSize: 14, marginTop: '2%'}}>
              Already registered?{' '}
              <AppText.Body
                onPress={() => console.log('To Login')}
                onPressIn={() => Navigation(`${loginName}`)}
                style={{
                  fontSize: 14,
                  color: Colors.primary,
                  fontWeight: 'bold',
                }}>
                Login
              </AppText.Body>
            </AppText.Body>
          </Wrapper>
          {/* Or Divider */}

          <Divider />

          {/* Google Button Card */}
          <Wrapper style={styles.googleCard}>
            <Button.Google
              text="Signup with Google"
              onPress={() => console.log('Google Sign Up')}
            />
          </Wrapper>
        </View>
      </KeyboardAwareScrollView>
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.secondary,
    alignSelf: 'center',
  },
  googleCard: {
    padding: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
});

const Divider = () => (
  <Wrapper
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 30,
      height: 30,
    }}>
    <Wrapper
      style={{width: '40%', height: 1.5, backgroundColor: Colors.baseAncent}}
    />
    <AppText.Body style={{fontSize: 14}}>Or</AppText.Body>
    <Wrapper
      style={{width: '40%', height: 1.5, backgroundColor: Colors.baseAncent}}
    />
  </Wrapper>
);
