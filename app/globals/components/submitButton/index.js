/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';

const SubmitButton = props => {
  console.log('props', props);
  return (
    <TouchableOpacity
      style={styles.signinButton}
      activeOpacity={0.8}
      onPress={() => {
        console.log(' submit button clicked ');
        props.buttonPress();
      }}>
      {props.isLoading ? (
        <LottieView source={require('../../../assets/loading.json')} autoPlay />
      ) : (
        <Text style={styles.signinButtonText}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
