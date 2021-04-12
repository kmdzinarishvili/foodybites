import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';

import {w} from '../proportion';

import RestaurantFlatList from '../components/Restaurant/RestaurantFlatList';
const RestaurantPage = () =>{

    return(
        <View style={{backgroundColor:'#FFF'}} >
           <View style={{paddingHorizontal:68*w}}>
                 <SearchBar placeholder="Search"/>
           </View>
            <RestaurantFlatList />
       
        
        </View>
    );

}

export default RestaurantPage;