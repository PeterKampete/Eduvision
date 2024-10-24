import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { AuthProvider } from './src/navigation/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}

export default App
