import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from 'react-navigation-header-buttons';
import Logo from '../../assets/images/Logo';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import SubmitButton from '../../globals/components/submitButton';

const HomeScreen = props => {
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <View style={styles.containerFullWidth}>
        <View style={styles.ImageView}>
          <Logo />
        </View>
        <View>
          <Text style={styles.TextView}>Let's sign you in</Text>
          <Text style={styles.TextViewLight}>
            Personal finance, just got easy
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile No"
            keyboardType="numeric"
            backgroundColor="#F4F7FE"
          />
          <View style={styles.horizontal}>
            <CheckBox
              style={styles.checkbox}
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? '#ED1381' : undefined}
            />
            <Text style={styles.label}>I accept the terms and conditions</Text>
          </View>
        </View>
        <SubmitButton
          isLoading={isLoading}
          text={'SEND OTP'}
          buttonPress={() => {
            console.log('clicked ');
            props.navigation.navigate('Otp');
          }}
        />
      </View>
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

export default HomeScreen;
