import React, {useState, useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import CarouselScreen from './screens/CarouselScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      > 
        <Stack.Screen name="MainScreen" component={MainScreen} /> 
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;