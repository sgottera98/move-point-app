import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';
import Auth from '../pages/auth';

const Stack = createNativeStackNavigator();

const Routes = _ => (
    <NavigationContainer>
        <Stack.Navigator initialRoute="Splash" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;