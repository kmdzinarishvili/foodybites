import React from 'react';
import {StyleSheet} from 'react-native';
import {w} from '../proportion';


const styles=StyleSheet.create({
    font50: {
        fontSize:50*w
    },
    font60: {
        fontSize:50*w
    },
    font22:{
        fontSize:22*w
    },  
    spaceRight: {
        marginRight:18*w
    },
    jBold: {
        fontFamily:'josefin-bold'
    },
    jReg:{
        fontFamily:'josefin-regular'
    }, 
    jSemi:{
        fontFamily:'josefin-semibold'
    },
    blue:{
        color:'#222455'
    },
    title:{
        fontSize:60*w,
        color: '#3E3F68',
        fontFamily:'josefin-semibold'

    },

});

export default styles;