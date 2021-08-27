import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Auth = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Input placeholder="Insira seu e-mail" />
            <Button text="Login" />
        </SafeAreaView>
    );
};

export default Auth;