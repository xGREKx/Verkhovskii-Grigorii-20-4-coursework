import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const Photo = (props) => {
  return (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Image source={props.img} style={{width: '100%', height: 130}} resizeMode="cover"/>
  </TouchableOpacity>
  );
}

export default Photo;