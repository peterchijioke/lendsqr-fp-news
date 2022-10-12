import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../assets/colors/Colors";
import Button from "./components/button/Button";
import AppText from "./components/text/AppText";
import Wrapper from "./components/wrapper/Wrapper";
import AppInput from "./components/input/AppInput";
import crashlytics from "@react-native-firebase/crashlytics";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { newsListingName } from "./NewsListing";
import Helper from "../partials/Helper";
import Loading from "./components/loading/Loading";
export let signupName = "signup";
export let loginName = "login";
type label = string;
const Login = ({ navigation, ...props }) => {
  const [eyeState, setEyeState] = useState<boolean>(true);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  let Navigation = (screenName: string): void => {
    navigation.navigate(screenName);
  };
  const helperClass = new Helper();
  let profileImageSize = 150;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "368879747942-8df76scm7horfgo3l1esoqp5vfgsv2fg.apps.googleusercontent.com",
      profileImageSize,
    });
  }, []);

  const HandleLogin = async () => {
    crashlytics().log("Loging User in");
    setLoading(true);
    const userDetails: object = {
      email,
      password,
    };

    if (email && password) {
      const emailValidationRespons = helperClass.validateEmail(email);
      if (emailValidationRespons) {
        let responds = await helperClass.getData("userdetails");
        if (responds !== "error" && responds !== null) {
          let { email: resEmail, password: resPassword } = responds;

          // check if email & password match input
          if (resEmail == email && resPassword == password) {
            setTimeout(() => {
              setLoading(false);
              Navigation(newsListingName);
              crashlytics().log("User loged in");
            }, 3000);
          } else {
            setLoading(false);
            setError("Ooops.. This user does not exist.");
            crashlytics().log("Ooops.. This user does not exist.");
          }
        } else {
          setLoading(false);
          setError("Ooops.. This user does not exist.");
          crashlytics().log("Ooops.. This user does not exist.");
        }
      } else {
        setLoading(false);
        setError("Ooops.. The provided email is not valid");
        crashlytics().log("Ooops.. The provided email is not valid");
      }
    } else {
      setLoading(false);
      setError("Ooops.. Please make sure all fields are filled");
      crashlytics().log("Ooops.. Please make sure all fields are filled");
    }
  };

  // google signup
  let HandleGoogleSignup = async () => {
    try {
      let hasPlayService = await GoogleSignin.hasPlayServices();
      if (!hasPlayService) {
        setError("Your mobile phone do not support google play service");
        crashlytics().log(
          "Your mobile phone do not support google play service"
        );
        return;
      }
      const { user } = await GoogleSignin.signIn();
      // const {user} = await GoogleSignin.getTokens();
      const userDetails: object = {
        name: user.name,
        phone: "",
        email: user.email,
        provider: "google",
        photo: user.photo,
      };

      if (user?.email && user?.name) {
        const storedUser = await helperClass.getData("userdetails");
        if (storedUser !== "error" && storedUser !== null) {
          let { email: storedEmail, name: storedName, provider } = storedUser;
          if (provider == "google") {
            setTimeout(() => {
              setLoading(false);
              Navigation(newsListingName);
            }, 3000);
          } else {
            setLoading(false);
            setError("Ooops.. Unknown process, please try again");
            crashlytics().log("Ooops.. Unknown process, please try again");
          }
        } else {
          setLoading(false);
          setError("Ooops.. This user does not exist, please signup");
          crashlytics().log("Ooops.. This user does not exist, please signup");
        }
      }
    } catch (error: any) {
      console.log(error);
      crashlytics().recordError(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.secondary }}>
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: Colors.secondary }}
      >
        <View style={styles.constainer}>
          <Wrapper style={{ width: "90%", alignSelf: "center" }}>
            <Wrapper
              style={{
                width: "90%",
                backgroundColor: "transparent",
                alignSelf: "center",
                marginTop: "2%",
              }}
            >
              <AppText.SubTitle
                style={{ color: Colors.primary, marginTop: "5%", fontSize: 14 }}
              >
                {error}
              </AppText.SubTitle>
            </Wrapper>

            {/* Email Entry */}
            <Wrapper style={{ marginTop: "5%", marginBottom: "4%" }}>
              <AppInput.Email
                label="Email"
                onChangeText={setEmail}
                placeholder="Email"
              />
            </Wrapper>

            {/* Password Entry */}
            <Wrapper style={{ marginTop: "5%", marginBottom: "2%" }}>
              <AppInput.Password
                label="Password"
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
              width: "85%",
              marginBottom: "5%",
              alignItems: "flex-end",
              marginTop: "1%",
              alignSelf: "center",
              paddingRight: "2%",
            }}
          >
            <AppText.SubTitle
              onPress={() => crashlytics().log("Forgot Password **To do**")}
              style={{ fontSize: 18, color: Colors.primary }}
            >
              Forgot password
            </AppText.SubTitle>
          </Wrapper>

          {/* Signup button  */}
          <Wrapper
            style={{
              justifyContent: "flex-start",
              width: "85%",
              alignSelf: "center",
              marginBottom: "2%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button.SignUp
              text="Login"
              onPress={HandleLogin}
              style={{ padding: 10, width: "60%" }}
            />
            <AppText.Body style={{ fontSize: 14, marginTop: "2%" }}>
              Don’t have an account?{" "}
              <AppText.Body
                onPress={() => Navigation(signupName)}
                style={{
                  fontSize: 14,
                  color: Colors.primary,
                  fontWeight: "bold",
                }}
              >
                Sign up
              </AppText.Body>
            </AppText.Body>
          </Wrapper>
          {/* Or Divider */}

          <Divider />

          {/* Google Button Card */}
          <Wrapper style={styles.googleCard}>
            <Button.Google
              text="Login with Google"
              onPress={HandleGoogleSignup}
            />
          </Wrapper>
        </View>
      </KeyboardAwareScrollView>
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  constainer: { marginTop: "5%" },
  googleCard: {
    padding: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
});

const Divider = () => (
  <Wrapper
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "90%",
      justifyContent: "space-between",
      alignSelf: "center",
      marginTop: 30,
      marginBottom: 30,
      height: 30,
    }}
  >
    <Wrapper
      style={{ width: "40%", height: 1.5, backgroundColor: Colors.baseAncent }}
    />
    <AppText.Body style={{ fontSize: 14 }}>Or</AppText.Body>
    <Wrapper
      style={{ width: "40%", height: 1.5, backgroundColor: Colors.baseAncent }}
    />
  </Wrapper>
);
