import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../components/CustomInput'
import Button from '../../components/CustomButton';

const Auth = () => {
    return (
        <SafeAreaView style={styles.wrap}>
            <Input placeholder="Insira seu e-mail" />
            <Input 
                placeholder="Insira sua senha"
                secureTextEntry={true}
            />
            <Button>
                <Link to={{screen: 'Feed'}}>Acesse</Link>
            </Button>
            <Button>Cadastre-se</Button>
            <Button
                backgroundColor='blue'
            >
                <Icon
                    name='facebook-square'
                    size={20}
                />  Acesse com o Facebook
            </Button>
            <Button
                backgroundColor='red'
                style={styles.contentButton}
            >
                <Icon 
                    name='google'
                    size={20}
                />  Acesse com o Google
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default Auth;