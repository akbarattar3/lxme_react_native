import {StyleSheet} from 'react-native';
import {Display} from '../../utils';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
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
