import React, { useRef, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import useFetch from '../../hooks/useFetch';
import IndPhoto from './IndPhoto';

import {w} from '../../proportion';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SwiperFlatList } from 'react-native-swiper-flatlist';




const REG_CIRCLE_WIDTH =17.02*w;
const SEL_CIRCLE_WIDTH =29*w;
const CIRCLE_MARGIN =4.5*w;


const PhotoNav = ({route}) =>{
    const index = route.params.index;
   const food = route.params.food;
   return ( < ImageViewer style={{width:'100%', height:'100%'}} 
                imageUrls={food}
                index={index}
                renderImage={(props)=> <Image style={{width:100, height:100}} {...props} />}
                renderHeader={(currentIndex)=>{console.warn(currentIndex)}}
                renderIndicator={(currentIndex)=>{console.warn(currentIndex)}}/>
 )

}




const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:'5%',
        right:0,
        left:0,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end'

      
    },
    regCircle:{
        backgroundColor:'#6A6A6A',
        margin:CIRCLE_MARGIN,
        width: REG_CIRCLE_WIDTH,
        height:REG_CIRCLE_WIDTH,
        borderRadius:REG_CIRCLE_WIDTH/2,
    },
    selCircle:{
        backgroundColor:'#5663FF',
        width:SEL_CIRCLE_WIDTH,
        height:SEL_CIRCLE_WIDTH,
        borderRadius:SEL_CIRCLE_WIDTH/2,
        margin:CIRCLE_MARGIN,
        borderColor:'#FFF',
        borderWidth:1*w

    }
})

export default PhotoNav;