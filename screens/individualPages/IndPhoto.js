import React, {useState} from 'react';
import {View, StyleSheet, Pressable, FlatList} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {w, h } from '../../proportion';


const REG_CIRCLE_WIDTH =17.02*w;
const SEL_CIRCLE_WIDTH =29*w;
const CIRCLE_MARGIN =4.5*w;

const IndPhoto =({image}) =>{
    // return <View style={{width:'100%', height:'100%',  backgroundColor: '#25262E'}}></View>
    
    
    return(<View style={photoStyles.container}>
        <AutoHeightImage style={{marginBottom:350*h}} width={1125*w} source={{uri:image}} />
    </View>);

}


const photoStyles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor: '#25262E',
        justifyContent:'center',
        alignItems:'center',
    },
    selectorContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom: 74*h,       
    },
})

export default IndPhoto;