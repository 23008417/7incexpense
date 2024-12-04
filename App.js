import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Income, Expenses Page' }}
                />
                <Stack.Screen
                    name="Add"
                    component={AddScreen}
                    options={{ title: 'Add' }}
                />
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                    options={{ title: 'Edit Expense' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
