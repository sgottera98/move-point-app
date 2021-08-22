import React from 'react';
import { SafeAreaView } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

const Splash = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Icon name="home" size={24} color="#999" />
            <Input placeholder="Insira seu e-mail" />
            <Button text="Login" />
        </SafeAreaView>
    );
};

export default Splash;