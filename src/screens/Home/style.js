import {StyleSheet, Dimensions} from 'react-native';
import {Display} from '../../utils';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  input: {
    height: Display.setHeight(6),
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5,
    marginStart: 20,
    marginEnd: 20,
    paddingStart: 10,
    fontFamily: 'poppins-semiBold',
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
    fontFamily: 'poppins-semiBold',
    color: '#14131B',
    width: Dimensions.get('window').width,
    paddingStart: 20,
  },
  TextViewLight: {
    marginTop: 10,
    paddingStart: 20,
    marginEnd: 70,
    fontSize: 23,
    color: '#343434',
    fontFamily: 'poppins-regular',
  },
  ImageView: {
    alignItems: 'center',
    marginTop: 30,
    width: Dimensions.get('window').width,
  },
  containerFullWidth: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    flex: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 15,
    marginStart: 20,
    width: '90%',
  },
  label: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#343434',
  },
  signinButtonText: {
    fontSize: 15,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: 'poppins-medium',
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_APP,
    borderRadius: 8,
    height: Display.setHeight(6),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 20,
  },
});
export default styles;
