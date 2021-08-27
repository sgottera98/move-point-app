import React from 'react';
import { SafeAreaView } from 'react-native';

import Button from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Splash = _ => (
        <SafeAreaView style={{flex: 1}}>
            <Icon name="home" size={24} color="#999" />  
            <Button text="Login"/>          
        </SafeAreaView>
    );

export default Splash;