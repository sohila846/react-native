import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.oxfordBlue,
    height: 60,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    overflow: 'hidden',
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    width: '80%',
    paddingStart: 16,
    fontFamily: FONTS.medium,
    height: '100%',
    fontSize: 16,
    color: COLORS.black,
  },
  iconContainer: {
    borderStartColor: COLORS.oxfordBlue,
    borderStartWidth: 2,
    backgroundColor: COLORS.loblolly,
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});