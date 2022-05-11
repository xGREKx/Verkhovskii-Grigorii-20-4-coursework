import React, {useState, useRef, useEffect} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    StyleSheet,
    Button,
} from 'react-native';
import Constants from 'expo-constants';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { IMAGES } from '../constants';

const {width} = Dimensions.get('window');
const SPACING = 12;
const THUMB_SIZE = 83;

const CarouselScreen = ({navigation, route}) => {
    const carouselRef = useRef();
    const flatListRef = useRef();
    const [images, setImages] = useState(
      Object.keys(IMAGES).map((key, index) => {
        return {id: index, image: IMAGES[key]}
      })
    );

    const AppButton = ({onPress, title}) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const [indexSelected, setIndexSelected] = useState(route.params.index);
    const onSelect = (indexSelected) => {
        setIndexSelected(indexSelected);

        flatListRef?.current?.scrollToOffset({ 
            offset: indexSelected * THUMB_SIZE,
            animated: true,
        });
    };

    const onTouchThumbnail = (touched) => {
        setIndexSelected(touched);
        carouselRef.current.snapToItem(touched);
    };


    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>

            <View style={{flex: 0.5, marginTop: 150}}>
                <Carousel
                    ref={carouselRef}
                    layout="default"
                    data={images}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => onSelect(index)}
                    firstItem={route.params.index}
                    renderItem={({item, index}) => (
                      <Image
                        key={index}
                        style={{width: '100%', height: '100%', borderRadius: 5}}
                        source={item.image}
                      />
                    )}
                 />

                <View style={{position: 'absolute', bottom: -80, left: 100, right: 100}}>
                  <AppButton title="К сетке" onPress={() => navigation.goBack()}/>
                </View>

                <FlatList
                    ref={flatListRef}
                    horizontal={true}
                    data={images}
                    style={{position: 'absolute', bottom: -280}}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: SPACING,
                    }}
                    keyExtractor={(item, index) => index}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            onPress={() => onTouchThumbnail(index)}
                            activeOpacity={0.9}>
                            <Image
                                style={{
                                    width: THUMB_SIZE,
                                    height: THUMB_SIZE,
                                    marginRight: SPACING,
                                    borderRadius: 90,
                                    borderWidth: index === indexSelected ? 4 : 0.75,
                                    borderColor: index === indexSelected ?'white': 'grey',
                                }}
                                source={item.image}
                            />
                        </TouchableOpacity>)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {

        backgroundColor: "grey",
        borderRadius: 180,
        paddingVertical: 10,
        paddingHorizontal: 1,
        bottom: -85,
        opacity: 0.4
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default CarouselScreen;