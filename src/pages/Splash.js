import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../styles';

const Splash = _ => (
    <View style={styles.wrap}>  
        <Text style={styles.title}>Move Point</Text>
    </View>
);

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.skobeloff2,
    },

    title: {
        color: colors.white, 
        fontSize: 40,    
        textAlign: 'center'
    }
})

export default Splash;