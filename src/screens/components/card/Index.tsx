import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {elevation} from '../../../partials/Style';
import {Colors} from '../../../assets/colors/Colors';

const Index = () => {
  return <View style={styles.container}></View>;
};

export default Index;

const styles = StyleSheet.create({
  container: {
    ...elevation,
    width: '100%',
    height: '50%',
    borderRadius: 5,
    backgroundColor: Colors.baseAncent,
    padding: 4,
  },
});
