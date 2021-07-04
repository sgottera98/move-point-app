import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text>Test</Text>
            <Icon name="home" size={24} color="#999" />
        </SafeAreaView>
    );
};

export default App;