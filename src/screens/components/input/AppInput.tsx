import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../../assets/colors/Colors";
import { elevation } from "../../../partials/Style";
import EyeIcon from "react-native-vector-icons/dist/Ionicons";
import AppText from "../text/AppText";

const AppInput = ({ style, ...props }: any) => {
  return (
    <View style={{ position: "relative" }}>
      {props.label ? (
        <AppText.SubTitle
          style={{
            marginLeft: "5%",
            marginBottom: "2%",
            fontWeight: "600",
          }}
        >
          {props?.label.toUpperCase()}
        </AppText.SubTitle>
      ) : null}
      <TextInput
        placeholderTextColor="#ccc"
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
};

AppInput.Password = ({ onPressEye, ...props }: any) => (
  <View style={{ position: "relative" }}>
    <AppInput style={[styles.password]} {...props} />
    {props.eyeState ? (
      <EyeIcon
        style={{
          position: "absolute",
          right: 0,
          paddingRight: "8%",
          paddingTop: props?.label ? "10%" : "3%",
        }}
        onPress={onPressEye}
        size={20}
        color={Colors.primary}
        name="eye-outline"
      />
    ) : (
      <EyeIcon
        style={{
          position: "absolute",
          right: 0,
          paddingRight: "8%",
          paddingTop: props?.label ? "10%" : "3%",
        }}
        onPress={onPressEye}
        size={20}
        color={Colors.primary}
        name="eye-off-outline"
      />
    )}
  </View>
);

AppInput.Email = (props: any) => (
  <AppInput keyboardType="email-address" style={[styles.email]} {...props} />
);

export default AppInput;

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: Colors.baseAncent,
    borderRadius: 4,
    padding: 10,
    color: Colors.baseAncent,
  },
  password: {},
  email: {},
});
