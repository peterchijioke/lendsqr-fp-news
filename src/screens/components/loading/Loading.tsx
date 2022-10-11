import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors/Colors';

const style: any = StyleSheet;

const Loading = ({visible, ...props}: any) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.view}>
        <ActivityIndicator color={Colors.secondary} size={30} />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  view: {
    ...style.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
