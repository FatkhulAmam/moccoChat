import React from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

const Stack = createStackNavigator();

//import screens
import Register from '../screens/Register'
import Verification from '../screens/Verification'
import LandingPage from "../screens/LandingPage";


const Route = () => {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            title: 'Your Phone',
                            headerStyle: {
                                backgroundColor: '#1c3661',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }} />
                        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
                        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}

export default Route