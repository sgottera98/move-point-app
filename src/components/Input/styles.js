import { colors } from '../../styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapInput: {
    width: '100%',
    justifyContent: 'center',
  },

  placeholderText: {
    zIndex: 1,
    position: 'absolute',
    paddingLeft: 20,
  },

  text: {
    color: colors.white,
  },

  input: {
    width: '100%',     
    paddingVertical: 16,
    paddingHorizontal: 10, 
    borderWidth: 1.5,
    borderRadius: 10,
  },
});

export default styles;
