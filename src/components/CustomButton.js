import React from 'react';
import { colors } from '../styles'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({
    backgroundColor = colors.skobeloff,
    color = colors.white,
    children    
}) => (
        <TouchableOpacity style = {[
            styles.button, 
            {backgroundColor: backgroundColor},
        ]}>            
            <Text style = {[
                styles.font, 
                {color: color}
            ]}>{children}</Text>
        </TouchableOpacity>
    );      
    
export default Button;

const styles = StyleSheet.create({   
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,  
        marginTop: 25,
        marginHorizontal: 10,
        borderRadius: 30,
    },     
    font: {
        color: colors.white,
        fontSize: 16,
        letterSpacing: 0.16,
    }
})



