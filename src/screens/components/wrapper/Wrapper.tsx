import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';
import {elevation} from '../../../partials/Style';
import {Colors} from '../../../assets/colors/Colors';

const Wrapper = ({style, ...props}: ViewProps) => {
  return <View style={[styles.container, style]} {...props} />;
};

Wrapper.Card = (props: ViewProps) => <Wrapper style={[styles.card]} />;
export default Wrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
  },
  card: {
    ...elevation,
    width: '95%',
    borderRadius: 10,
  },
});
