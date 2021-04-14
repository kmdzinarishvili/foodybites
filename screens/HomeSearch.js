import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Restaurant/Circle';

import {w,h} from '../proportion';
import { useNavigation } from '@react-navigation/core';
import RestaurantFlatList from '../components/Restaurant/RestaurantFlatList';


const ExitCircle = () =>{
    const navigation = useNavigation()
    return(
    <Pressable
        onPress={()=>navigation.navigate('Home')}
        style={{backgroundColor:'#222455',
            opacity:0.5,
            width:76*w,
            height:76*h,
            borderRadius:38*w,
            justifyContent:'center',
            alignItems:'center'}}>
        <Image style={{width:29.89 *w, height: 28.89*h, transform: [{ rotate: '45deg' }]}} source={require('../imgs/footer/cross.png')}/>
    </Pressable>
    );
}


const HomeSeach = () =>{
    return <SafeView >
        <View style={{paddingHorizontal:68*w}}>
            <SearchBar placeholder='Find Restaurants' autoFocus={true} rightComponent={<ExitCircle/>}/>
        </View>
        <RestaurantFlatList/>
    </SafeView>
}

export default HomeSeach;