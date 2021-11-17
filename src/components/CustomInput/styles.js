import { colors } from "../../styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapInput: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
      marginHorizontal: 10,
    },
  
    placeholderText: {
      paddingLeft: 20,
    },

    input: {
      width: '100%',
      height: 60,
      paddingHorizontal: 30,
      borderWidth: 1.5,
      borderRadius: 30,
    },
  });
  
  export default styles;