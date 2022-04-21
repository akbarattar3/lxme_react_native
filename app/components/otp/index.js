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
import {callLogin} from '../otp/action';
import {connect} from 'react-redux';
import {store} from '../../store/configureStore';
import LottieView from 'lottie-react-native';

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
          console.log('otp clicked ', firstInput.current);
          if (
            firstInput.current.text == undefined ||
            secondInput.current.text == undefined ||
            thirdInput.current.text == undefined ||
            fourthInput.current.text == undefined
          ) {
            Alert.alert('Please enter the OTP to proceed!');
          } else if (
            firstInput.current.text.length == 0 ||
            secondInput.current.text.length == 0 ||
            thirdInput.current.text.length == 0 ||
            fourthInput.current.text.length == 0
          ) {
            Alert.alert('Please enter the correct OTP to proceed!');
          } else {
            setIsLoading(true);
            props.callLogin({
              mobileNumber: number,
              onSuccess: successMessage => {
                setIsLoading(false);
                console.log('on success response ', successMessage[0].lan_name);
                console.log(
                  'on success response from reducer ',
                  props.LoginReducer.languageData,
                );
                console.log(
                  'from direct store ',
                  store.getState().LoginReducer.languageData,
                );
                alert('Logged in successful');
              },
            });
          }
        }}
      />
      {isLoading ? (
        <LottieView source={require('../../assets/loading.json')} autoPlay />
      ) : (
        <Text style={styles.signinButtonText}>Sign In</Text>
      )}
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

const mapStateToProps = state => {
  return {
    LoginReducer: state.LoginReducer,
  }; // write reducer code here
};

const mapDispatchToProps = {
  callLogin: callLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);
