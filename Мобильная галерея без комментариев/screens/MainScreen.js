import React, {useState, useRef} from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    Button,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Photo from '../components/Photo';
import {IMAGES} from '../constants';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{paddingTop: 50}}>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center'}}>
              {Object.keys(IMAGES).map((key, index) =>
                <Photo
                  style={{width: '50%', padding: 2}}
                  onPress={() => navigation.navigate('CarouselScreen', {index})}
                  img={IMAGES[key]}
                />
              )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  ); 
}

export default MainScreen; 