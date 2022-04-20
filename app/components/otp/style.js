import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../themes/Colors';
import {setHeight, setWidth} from '../../globals/utils/Display';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#73AD21',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  submitText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  TextView: {
    marginTop: 30,
    fontSize: 31,
    color: '#14131B',
    width: Dimensions.get('window').width,
    paddingStart: 20,
    fontFamily: 'poppins-semiBold',
  },
  TextViewLight: {
    marginTop: 30,
    marginStart: 22,
    marginEnd: 40,
    fontSize: 19,
    color: '#343434',
    fontFamily: 'poppins-regular',
    width: Dimensions.get('window').width,
  },
  ImageView: {
    alignItems: 'center',
    marginTop: 30,
    width: Dimensions.get('window').width,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerFullWidth: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,
    flexDirection: 'column',
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000000',
    margin: 30,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  checkbox: {
    alignSelf: 'center',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 15,
    width: '90%',
  },
  label: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  endChange: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginEnd: 30,
    marginTop: 25,
    color: Colors.DEFAULT_APP,
    fontSize: 14,
    fontFamily: 'poppins-regular',
  },
  numberHorizontal: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  number: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    marginStart: 23,
    marginTop: 20,
    color: '#343434',
    fontSize: 19,
    fontFamily: 'poppins-regular',
  },
  textInputContainer: {
    marginBottom: 5,
    marginStart: 10,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  resendOtpText: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#ED1381',
    fontSize: 15,
    fontFamily: 'poppins-semiBold',
  },
  resend: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginStart: 25,
    marginEnd: 30,
    color: '#343434',
    fontSize: 19,
  },
  otpContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#F2F1F6',
    backgroundColor: '#F4F7FE',
    borderWidth: 0.5,
    marginEnd: 20,
  },
  otpText: {
    fontSize: 25,
    color: '#14131B',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_APP,
    borderRadius: 8,
    height: setHeight(6),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 20,
  },
  loginButton: {
    backgroundColor: Colors.DEFAULT_APP,
    borderRadius: 8,
    marginHorizontal: 20,
    height: setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 15,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: 'poppins-medium',
  },
});
export default styles;
