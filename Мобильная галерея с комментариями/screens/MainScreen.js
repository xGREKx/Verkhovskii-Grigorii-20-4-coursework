import React, {useState, useRef} from 'react'; //импортируем все необходимые библиотеки
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
import Photo from '../components/Photo'; //импортируем индексы фотографий
import {IMAGES} from '../constants'; //импортируем фотографии

const MainScreen = ({navigation}) => { //функия рендера сетки основного окна
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}> //отрисовка свободной области для IPhone во избежание скрытия интерфейса за блоком камер
      <View style={{paddingTop: 50}}>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center'}}>
              {Object.keys(IMAGES).map((key, index) => //принимает индексы фотографий
                <Photo
                  style={{width: '50%', padding: 2}} //размещает фото по сетке
                  onPress={() => navigation.navigate('CarouselScreen', {index})} //переключает на второй экран по нажатию на фотографию
                  img={IMAGES[key]} //передает индекс
                />
              )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  ); 
}

export default MainScreen; 