import React, {useState} from 'react';
import {View, Image, Pressable, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { h, w } from '../../proportion';
import {PanGestureHandler} from 'react-native-gesture-handler';


const Review = () =>{
    const [numStars, setNumStars] = useState(0);
    console.log(numStars);
    let myStars = [];
    let empty = [1,2,3,4,5];
    for (let i = 1; i<=5 ; i++) {
        myStars.push(
        <Pressable onPress={()=>setNumStars(i)}>
            <Image  source={require('../../imgs/star.png')}/>
        </Pressable>)
    }
   
  
    return (
        <View style={{width: 894*w, height:207*h,
         backgroundColor: 'rgba(238, 247, 255, 0.51)', borderRadius:10,
        flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <FlatList 
                horizontal={true}
                contentContainerStyle={{justifyContent:'space-around', alignItems:'center', width:'100%'}}
                data={empty}
                keyExtractor={(star, id)=>`empty-star${id}`}
                renderItem = {({item, index})=>{
                    console.log(item);
                    return  <Pressable onPress={()=>setNumStars(item)}>
                   {index<numStars? <Image style={sStyles.star} source={require('../../imgs/star.png')}/>: 
                                <Image  style={sStyles.star} source ={require('../../imgs/gray_star.png')}/>}
                      

                </Pressable>
                }} />
        </View>
    )
}

const sStyles= StyleSheet.create({
    star:{
        width: 114.47*w,
        height:109.15*h
    }
})

export default Review;