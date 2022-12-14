import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login, { loginName } from "./src/screens/Login";
import Signup, { signupName } from "./src/screens/Signup";
import codePush from "react-native-code-push";
import NewsListing, { newsListingName } from "./src/screens/NewsListing";
import NewsDetails, { newsDetailsName } from "./src/screens/NewsDetails";
import { Provider, useDispatch } from "react-redux";
import Store from "./src/application/Store";

import analytics from "@react-native-firebase/analytics";

const Stack = createNativeStackNavigator();

function App() {
  const routeNameRef: any = React.useRef();
  const navigationRef: any = React.useRef();
  return (
    <Provider store={Store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Login" }}
            name={loginName}
            component={Login}
          />

          <Stack.Screen
            options={{ title: "Sign Up" }}
            name={signupName}
            component={Signup}
          />

          <Stack.Screen
            options={{ title: "News List" }}
            name={newsListingName}
            component={NewsListing}
          />

          <Stack.Screen
            options={{
              title: "News Detail",
            }}
            name={newsDetailsName}
            component={NewsDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
export default codePush(codePushOptions)(App);

/*

Note: All command here are run from the root directory of the project.



**codepush deloyment command**

** for Android **
```appcenter codepush release-react -a peterchijioke/FPNews -d Production```


**for iOS**
```appcenter codepush release-react -a peterchijioke/FPNews-1 -d Production```





** Firebase set up **

1. Install the React Native Firebase "app" module to the root of your React Native project with yarn, by running the below command on the terminal 
```yarn add @react-native-firebase/app```

Note: The @react-native-firebase/app module must be installed before using any other Firebase service.


2 Setup configuration for the android side of the application.
 * Add new android app to the lendsqr-fp-news project created on firebase

 * Follow the Android setup configuration steps as described at https://rnfirebase.io/ 


3. Setup configuration for the android side of the application.
 * Add new iOS app to the lendsqr-fp-news project created on firebase


*/
