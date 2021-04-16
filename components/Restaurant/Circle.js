import React from 'react';
import {View, StyleSheet} from 'react-native';

import { h, w } from '../../proportion';

const Circle=({children})=>{
    return <View style={circle.circle}>
                 {children}

    </View>
}


const circle = StyleSheet.create({
    circle:{
        width:74*w,
        height:74*h,
        backgroundColor:'#FFF',
        marginRight:10,
        borderRadius:74*h/2,
        justifyContent:'center',
        alignItems:'center'
    }

});
export default Circle;