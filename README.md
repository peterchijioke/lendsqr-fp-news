# lendsqr-fp-news
 FP News is a simple news application built using react-native; 


## Table of Contents

* [Features](#Features)
* [Installation](#Installation)
* [Alternatively download the React Native APK Test App](#Alternatively%download%the%React%Native%APK%Test%App)
* [Steps taken to build this app](#Steps%taken%to%build%this%app%include)
* [Tech Stack](#Tech%Stack)
* [Screenshots](#Screenshots)



## Features
- Implement Over-the-air update using code push
- Include the following Firebase services
* Crashlytics
* Performance
* Remote-config
* Messaging
- Middleware to log all user activities and screen change using Firebase event
- A button that throws a runtime error when pressed.
- Login
- Signup
- Google signin
- Google signup




## Installation

How to Install & test the React Native App

```bash
git clone https://github.com/peterchijioke/lendsqr-fp-news.git
cd lendsqr-fp-news
yarn install
yarn android
```
    
   - I recommend you use yarn instead of npm
    
## Alternatively download the React Native APK Test App

- [Android APK: ](https://appdistribution.firebase.google.com/testerapps/null/releases/1qlef3miuvn60)

## Steps taken to build this app include:
- Create a react native application using ```npx react-native init FP_News```
- Install redux-tookit, note that redux-toolkit is dependent on react-redux, so you must install both; You can run this command to install both ```npm install @reduxjs/toolkit react-redux```
- Set up redux-toolkit for the state management: you can follow through the set up documentation at https://redux-toolkit.js.org/tutorials/quick-start
- Create your Slices
- Installed ```@react-native-firebase/app``` which is the core of all other firebase packages;
- Created a new app, adhearing to the name given
- Setup the featured services needed.
- installed the following react-native firebase dependencied using yarn: 
- ```@react-native-firebase/crashlytics```,
- ```@react-native-firebase/perf```, 
- ```@react-native-firebase/analytics```, 
- ```@react-native-firebase/remote-config```, 
- ```@react-native-firebase/messaging```
-  Then setup the platform code in the react-native project. 
-  I installed also react-navigation, which is basicaly used for routing and navigation to and from a screen
-  The last package was ```react-native-codepush```, which is plugin that provides client-side integration for the CodePush service in react-native
-  I installed the google signin package ```@react-native-google-signin/google-signin```, which handle the client side user auth by google.
-  I used the clean architecture design, which provide a way to organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism.
-  On the project directory you will find the core directories which are: Infrastructure, Screens, application.
-  The infrastructure contains the fetch rutine
-  The Screen contains the application screens and components basically tsx files etc,
-  The Application contains the redux files.

## Tech Stack

**Client:** Bare React-Native, Redux Toolkit, Codepush, Firebase

**Server:** RapidAPI endpoint



## Screenshots

![](/image1.jpg)
![](/image2.jpg)
![](/image3.jpg)
![](/image4.jpg)

