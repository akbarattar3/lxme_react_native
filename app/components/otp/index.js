import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from 'react-navigation-header-buttons';
import Logo from '../../assets/images/Logo';
import styles from './style';
import SubmitButton from '../../globals/components/submitButton';

const OtpScreen = props => {
  const firstInput = useRef('');
  const secondInput = useRef('');
  const thirdInput = useRef('');
  const fourthInput = useRef('');
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  const number = navigation.getParam('number', '9620407863');

  return (
    <>
      <KeyboardAvoidingView
        style={styles.containerFullWidth}
        behavior="padding">
        <ScrollView>
          <View style={styles.ImageView}>
            <Logo />
          </View>
          <Text style={styles.TextView}>Enter OTP</Text>
          <Text style={styles.TextViewLight}>OTP has been sent to you</Text>
          <View style={styles.numberHorizontal}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.endChange}>Change</Text>
          </View>
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={text => {
                  setOtp({...otp, 1: text});
                  text && secondInput.current.focus();
                  firstInput.current.text = text;
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={text => {
                  setOtp({...otp, 2: text});
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                  secondInput.current.text = text;
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={text => {
                  setOtp({...otp, 3: text});
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                  thirdInput.current.text = text;
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={text => {
                  setOtp({...otp, 4: text});
                  !text && thirdInput.current.focus();
                  fourthInput.current.text = text;
                }}
              />
            </View>
          </View>
          <View style={styles.resend}>
            <Text style={styles.resendOtpText}>Resend OTP</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SubmitButton
        isLoading={isLoading}
        text={'LOGIN'}
        buttonPress={() => {
          console.log('otp clicked ');
          if (
            firstInput.current.length == undefined ||
            secondInput.current.length == undefined ||
            thirdInput.current.length == undefined ||
            fourthInput.current.length == undefined
          ) {
            Alert.alert('Please enter the OTP to proceed!');
          } else if (
            firstInput.current.text.length == 0 ||
            secondInput.current.text.length == 0 ||
            thirdInput.current.text.length == 0 ||
            fourthInput.current.text.length == 0
          ) {
            Alert.alert('Please enter the correct OTP to proceed!');
          }
        }}
      />
    </>
  );
};

const HeaderButtonComponent = props => (
  <HeaderButton Text="Skip" color="#BCC0C3" {...props} upperCase="false" />
);

OtpScreen.navigationOptions = navData => {
  return {
    headerTitle: '',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Skip"
          upperCase={false}
          color="#BCC0C3"
          onPress={() => navData.navigation.navigate('Setting')}
        />
      </HeaderButtons>
    ),
  };
};

export default OtpScreen;
