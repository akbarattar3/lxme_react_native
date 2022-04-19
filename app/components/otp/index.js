import React, {useState, useRef} from 'react';
import {Text, View, TextInput} from 'react-native';
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from 'react-navigation-header-buttons';
import Logo from '../../assets/images/Logo';
import styles from './style';
import SubmitButton from '../../globals/components/submitButton';

const OtpScreen = props => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <View style={styles.containerFullWidth}>
        <View style={styles.ImageView}>
          <Logo />
        </View>
        <View style={styles.container}>
          <Text style={styles.TextView}>Enter OTP</Text>
          <Text style={styles.TextViewLight}>OTP has been sent to you</Text>
          <View style={styles.numberHorizontal}>
            <Text style={styles.number}>9620407863</Text>
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
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.resend}>
          <Text style={styles.resendOtpText}>Resend OTP</Text>
        </View>
        <SubmitButton
          isLoading={isLoading}
          text={'LOGIN'}
          buttonPress={() => {
            console.log('otp clicked ');
            props.navigation.navigate('Otp');
          }}
        />
      </View>
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
