import React, { useState, useEffect } from 'react';
import {View, Text, FlatList} from 'react-native';
import FriendInfo from '../components/FriendInfo';
import Star from '../components/Star';
import {h} from '../proportion';

const AllReviews = () =>{
    const [profile, setProfile] = useState()
    const fetch_profiles= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setProfile(json)})
        .catch((error) => {
            throw error;
        });
    }    
    
    useEffect(()=>{
        fetch_profiles();
    }, []);
    
     


    
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