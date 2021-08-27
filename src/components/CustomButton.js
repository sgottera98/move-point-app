import React from 'react';
import { colors } from '../styles'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
    text,
    backgroundColor = colors.skobeloff,
    color = colors.white    
}) => (
        <TouchableOpacity style = {[
            styles.button, 
            {backgroundColor: backgroundColor},
        ]}>            
            <Text style = {[
                styles.font, 
                {color: color}
            ]}>{text}</Text>
        </TouchableOpacity>
    );      
    
export default Button;

const styles = StyleSheet.create({   
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
        width: '100%',
        height: 60,  
        marginVertical: 10,
        borderRadius: 30,
    },     
    font: {
        color: colors.white,
        fontSize: 16,
        letterSpacing: 0.16,
        lineHeight: 19,
        padding: 10,
    }
})



