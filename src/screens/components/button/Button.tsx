import {
  ButtonProps,
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppText from '../text/AppText';
import {elevation} from '../../../partials/Style';
import {Colors} from '../../../assets/colors/Colors';
const icons: string = '../../../assets/images/icon/';

interface pressableProps extends PressableProps {
  style: any;
}
const Button = ({style, ...props}: pressableProps) => {
  return <Pressable style={[styles.btn, style]} {...props} />;
};

Button.Google = ({text, ...props}: any) => (
  <Button style={[styles.google]} {...props}>
    <Image
      style={{width: 40, height: 40}}
      source={require(`${icons}google.png`)}
    />
    <AppText.Google>{text}</AppText.Google>
  </Button>
);

Button.SignUp = ({text, ...props}: any) => (
  <Button style={[styles.signup]} {...props}>
    <AppText
      style={{
        fontSize: 18,
        color: Colors.secondary,
        lineHeight: 25,
        textAlign: 'center',
      }}>
      {text}
    </AppText>
  </Button>
);

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  google: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
    ...elevation,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
  },
  signup: {...elevation, width: '45%', alignSelf: 'center'},
});
