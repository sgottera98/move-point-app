import React from 'react';
import { colors } from '../styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';
import Auth from '../pages/Auth';
import Feed from '../pages/Feed';

const Stack = createNativeStackNavigator();

const Routes = _ => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: true,
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.skobeloff },
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ title: 'Feed de Esportes', headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;