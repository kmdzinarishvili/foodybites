import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FriendInfo from '../components/FriendInfo';
import Star from '../components/Star';

const AllReviews = () =>{
    return <View style={{backgroundColor:'#FAFAFA', height:'100%'}}>
       <FlatList
        data={[1,2,3,4,5]}
        keyExtractor = {(item) =>`${item}`}
       
        renderItem ={({item})=>{
            return <FriendInfo showFollow={false}  justifyContent='space-between'
       
            star={
                <Star key={item.id} rating={4.5}/>
            }
            />
                
        }}/> 
       

    </View>
}

export default AllReviews;