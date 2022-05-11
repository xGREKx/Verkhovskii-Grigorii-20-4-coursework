import React, {useState, useRef} from 'react'; ////импортируем все необходимые библиотеки
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import CarouselScreen from './screens/CarouselScreen';

const Stack = createNativeStackNavigator();

const App = () => { //функция объединяющая оба экрана
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false //отключает надписи вверху экрана
      }}
      > 
        <Stack.Screen name="MainScreen" component={MainScreen} /> 
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//используется для переключений между экранами

export default App;