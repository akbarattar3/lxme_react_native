import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from 'react-navigation-header-buttons';
import Logo from '../../assets/images/Logo';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import SubmitButton from '../../globals/components/submitButton';
import SpannableBuilder from 'react-native-spannable-string';
import {isValid} from '../../globals/utils/validator';
import {callLogin} from './action';
import {connect} from 'react-redux';
import {store} from '../../store/configureStore';

const HomeScreen = props => {
  const [agree, setAgree] = useState(false);
  const [isLoading] = useState(false);
  const [input, setInput] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        style={styles.containerFullWidth}
        behavior="padding">
        <ScrollView>
          <View>
            <View style={styles.ImageView}>
              <Logo />
            </View>
            <Text style={styles.TextView}>Let's sign you in</Text>
            <Text style={styles.TextViewLight}>
              Personal finance, just got easy
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile No"
              keyboardType="numeric"
              backgroundColor="#F4F7FE"
              value={input}
              onChangeText={value => setInput(value)}
              placeholderStyle={styles.placeholder}
            />
            <View style={styles.horizontal}>
              <CheckBox
                style={styles.checkbox}
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? '#ED1381' : undefined}
              />
              <View style={styles.spanText}>
                {SpannableBuilder.getInstance()
                  .appendCustom('I accept the ', styles.label)
                  .build()}
                {SpannableBuilder.getInstance()
                  .appendCustom('Terms and Conditions', styles.termsConditions)
                  .build()}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SubmitButton
        isLoading={isLoading}
        text={'SEND OTP'}
        buttonPress={() => {
          // console.log('clicked ');
          props.navigation.navigate('Otp', {number: input});
          //   props.callLogin({
          //     onSuccess: successMessage => {
          //       console.log('on success response ', successMessage[0].lan_name);
          //       console.log(
          //         'on success response from reducer ',
          //         props.LoginReducer.languageData,
          //       );
          //       console.log(
          //         'from direct store ',
          //         store.getState().LoginReducer.languageData,
          //       );
          //     },
          //   });
          // }}
        }}
      />
    </>
  );
};

const HeaderButtonComponent = props => (
  <HeaderButton
    color="#BCC0C3"
    {...props}
    upperCase="false"
    autoCapitalize="none">
    <Text uppercase={false} autoCapitalize="none">
      Skip
    </Text>
  </HeaderButton>
);

HomeScreen.navigationOptions = navData => {
  return {
    headerTitle: '',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Skip"
          upperCase={false}
          color="#BCC0C3"
          onPress={() => navData.navigation.navigate('Otp')}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
