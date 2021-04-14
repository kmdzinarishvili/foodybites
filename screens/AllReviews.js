import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import FriendInfo from '../components/FriendInfo';
import Star from '../components/Star';
import {h} from '../proportion';
import useFetch from '../hooks/useFetch';

const AllReviews = () =>{
    const profile= useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile');

    return <View style={{backgroundColor:'#FAFAFA', height:'100%', paddingHorizontal:68*h}}>
       <FlatList
       
        data={profile}
        keyExtractor = {(item) =>`${item.id}`}
       
        renderItem ={({item})=>{
            return <FriendInfo showFollow={false} image={item['urls']['small']} justifyContent='space-between'
       
            star={
                <Star key={item.id} rating={4.5}/>
            }
            />
                
        }}/> 
       

    </View>
}

export default AllReviews;