import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <NavigationContainer>
            <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                name ="Login"
                component={LoginPage}
                />
                <Stack.Screen name="Signup" component={SignUpPage}/>
                <Stack.Screen name="Main" component={MainPage}/>
            </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};