# lendsqr-fp-news
 FP News is a simple new application


## Table of Contents

* [Installation](#Installation)
* [Alternatively download the React Native APK Test App](#Alternatively%download%the%React%Native%APK%Test%App)
* [Steps taken to build this app](#Steps%taken%to%build%this%app%include)
* [Tech Stack](#Tech%Stack)
* [Features](#Features)
* [Screenshots](#Screenshots)



## Features
- Implement Over-the-air update using code push
- Include the following Firebase services
* Crashlytics
* Performance
* Remote-config
* Messaging
- Create a middleware to log all user activities and screen change using Firebase event
- A button that throws a runtime error when pressed.




## Installation

How to Install & test the React Native App

```bash
git clone https://github.com/peterchijioke/lendsqr-fp-news.git
cd lendsqr-fp-news
yarn install
yarn android
```
    
   - I reommend you use yarn instead of npm
    
## Alternatively download the React Native APK Test App

- [Android APK: ](https://appdistribution.firebase.google.com/testerapps/null/releases/1qlef3miuvn60)

## Steps taken to build this app include:
- Create a react native application using ```npx react-native init crud-app```
- Install redux-tookit, note that redux-toolkit is dependent on react-redux, so you must install both; You can run this command to install both ```npm install @reduxjs/toolkit react-redux```
- Set up redux-toolkit for the state management: you can follow through the set up documentation at https://redux-toolkit.js.org/tutorials/quick-start
- Create your Slices
- Preload you state with array of objects : Just to let the user have somthing to feel on first render.

## Tech Stack

**Client:** Bare React-Native, Redux Toolkit

**Server:** Fake server


## Features

- Create quote
- Delete quote
- Update quote
- Cross platform (Android & ios)

## Screenshots

![](/image1.jpg)
![](/image2.jpg)

