import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors/Colors';
import {elevation} from '../../../partials/Style';
import EyeIcon from 'react-native-vector-icons/dist/Ionicons';

const AppInput = ({style, ...props}: TextInputProps) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

AppInput.Password = ({onPressEye, ...props}: any) => (
  <View style={{position: 'relative'}}>
    <AppInput style={[styles.password]} {...props} />
    {props.eyeState ? (
      <EyeIcon
        style={{
          position: 'absolute',
          right: 0,
          paddingRight: '8%',
          paddingTop: '2%',
        }}
        onPress={onPressEye}
        size={30}
        color={Colors.primary}
        name="eye-outline"
      />
    ) : (
      <EyeIcon
        style={{
          position: 'absolute',
          right: 0,
          paddingRight: '8%',
          paddingTop: '2%',
        }}
        onPress={onPressEye}
        size={30}
        color={Colors.primary}
        name="eye-off-outline"
      />
    )}
  </View>
);

AppInput.Email = (props: TextInputProps) => (
  <AppInput keyboardType="email-address" style={[styles.email]} {...props} />
);

export default AppInput;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: Colors.baseAncent,
    borderRadius: 4,
  },
  password: {},
  email: {},
});
