import React from 'react'; //импортируем все необходимые библиотеки
import {View, TouchableOpacity, Image} from 'react-native';

const Photo = (props) => { //дополнение к файлу MainScreen.js настраивает размер изображения для сетки
  return (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Image source={props.img} style={{width: '100%', height: 130}} resizeMode="cover"/>
  </TouchableOpacity>
  );
}

export default Photo;