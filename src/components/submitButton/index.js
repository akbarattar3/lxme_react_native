/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import Images from '../../constants/Images';

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
        <LottieView source={Images.LOADING} autoPlay />
      ) : (
        <Text style={styles.signinButtonText}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default SubmitButton;
