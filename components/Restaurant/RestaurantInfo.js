import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';

import { h, w } from '../../proportion';
import styles from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';
import gradients from '../../styles/gradients';


import Star from '../../components/Star';



const RestaurantInfo = ({name, category, distance, rating, address, isOpen, dailyTime}) =>{
    return (
        <View>
    <View style={{flexDirection:'row', alignItems:'center'}}> 
                    <Text style={[styles.font50, styles.spaceRight, styles.jBold, {color:'#3E3F68'}, indStyles.margin20]}>{name}</Text> 
                    <LinearGradient colors={gradients.pink} 
                        style={[styles.linearGradient,  styles.spaceRight, restStyles.rad9, {opacity:0.65}]}>
                    <Text  style={[restStyles.white22, ]}>{category}</Text>
                    </LinearGradient>
                    <Text style={[styles.jReg, restStyles.white22, restStyles.purple,restStyles.rad9]}>{distance} km</Text>
            <Star rating={rating} />
                    </View>

                    <Text style={[restStyles.address, styles.jReg,  indStyles.margin20]} >{address}</Text>
                    <View style={[{flexDirection:'row'},, indStyles.margin20]}>
                        <Text style={[restStyles.address, styles.jReg, restStyles.red]}>{isOpen? "Open Now": "Closed Now"}</Text>
                        
                        <Text style={[restStyles.address, styles.jReg]}> daily time </Text> 
                        <View style={[{flexDirection:'row', alignItems:'center'}]}>
                            <Text style={[restStyles.address, styles.jReg,
                                restStyles.red]}>{dailyTime}</Text> 
                            <Image
                                style={{width: 21.95*w, height:12.52*h }}
                                source={require('../../imgs/restaurantPage/downarrow.png')}
                            />
                        </View>
                    </View>
    
        
        </View> 
    );
}

const indStyles = StyleSheet.create({
    text:{
        color:'#FFF', 
        fontSize:40*w
    },
    margin20:{
        marginVertical:20*h
    },
    imgTest:{
        width:100, height:100
    }
})



const restStyles = StyleSheet.create({
    containter:{
        borderRadius:10,
        overflow:'hidden', 
        position:'relative',
        margin:27*w
    },
    whiteButton:{
         position:'absolute', zIndex:1000, overflow:'hidden', 
         paddingHorizontal: 22*w, borderRadius: 5, color:'#4CD964', fontSize:25*w
    },
    left:{
        left: 31*w,

    },
    right:{
        right:31*w
    },
 
    size25:{
        fontSize:25*w
    },
    bottom:{
        height:225*h, 
        width: 907.85*w,
         backgroundColor:"#FFF",
          flexDirection:'column', 
          justifyContent:'space-around',
          padding:25*w

    },
    white22:{
        fontSize:22*w,
        color:'#FFF',
        paddingHorizontal:23*w,
        paddingVertical:12*w,
      
    },
    rad9:{
        borderRadius:9,
        overflow:'hidden'
    },
    purple:{
        backgroundColor: '#848DFF'
    },
    address:{
        color:'#8A98BA',
        fontSize:36*w
    },
    red:{
        color:'#FF4A40'
    },
    miniFriend:{
       
        width:55*w,
        height:55*w,
        borderRadius:55*w/2,
        borderColor:'#FFF',
        borderWidth:3*w,
        marginLeft:-10

    }
    
});

export default RestaurantInfo;