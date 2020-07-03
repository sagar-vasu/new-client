import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Privacy from '../screens/policy';
import Splash from '../screens/splash';
import AuthButtons from '../screens/authButton';
import UserType from '../screens/userType';
import AccountType from '../screens/accountType';
import Home from '../screens/home';

const Stack = createStackNavigator();
export default function Navigation() {
    const option = { headerShown: false };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={option} />
                <Stack.Screen name="Auth" component={AuthButtons} options={option} />
                <Stack.Screen name="UserType" component={UserType} options={option} />
                <Stack.Screen name="AccountType" component={AccountType} options={option} />
                <Stack.Screen name="Signin" component={Signin} options={option} />
                <Stack.Screen name="Signup" component={Signup} options={option} />
                <Stack.Screen name="Privacy" component={Privacy} options={option} />
                <Stack.Screen name="Home" component={Home} options={option} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}