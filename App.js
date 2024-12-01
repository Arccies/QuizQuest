import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/LoginScreen';
import Signup from './Screen/SignUpScreen';
import InstructorDashboard from './Screen/InstructorDashboardScreen';
import AddSubject from './Screen/AddSubjectScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="InstructorDashboard"
>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />        
          <Stack.Screen 
          name="Signup" 
          component={Signup}
          options={{ headerShown: false }}
           />
           <Stack.Screen
           name='InstructorDashboard'
           component={InstructorDashboard}
           options={{ headerShown: false }}
           />
           <Stack.Screen
           name='AddSubject'
           component={AddSubject}
           options={{ headerShown: false }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
