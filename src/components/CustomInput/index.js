import styles from './styles';
import {colors} from '../../styles';
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({
  text,
  backgroundColor,
  borderColor = colors.slateGray,
  color = colors.slateGray,
  placeholderTextColor = colors.slateGray,
  placeholder,
  keyboardType,
  secureTextEntry = false,
}) => {
  
  const [isFocused, setIsFocused] = useState(false);
  const [textIsInserted, setTextIsInserted] = useState(false);

  return (
    <View 
      style={styles.wrapInput} 
      onFocus={e => setIsFocused(true)}
      onTextInput={e => setTextIsInserted(true)}  
    >
      <View
        style={styles.placeholderText}
        top={isFocused || textIsInserted ? -11 : null}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
      <TextInput
        style={styles.input}     
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        color={color}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
