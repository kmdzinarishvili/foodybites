import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { w, h } from '../proportion';
import styles from '../styles/styles';

const BlueFooter = ({text="Footer", action}) =>{
    return(
        <Pressable 
        onPress={action}
        style={footerStyles.footer}>
            <Text style={footerStyles.text}>{text}</Text>
        </Pressable>
    )
}
const footerStyles= StyleSheet.create({
   footer:{ 
    position:'absolute',
    bottom:0,
    height:198*h, 
    width:'100%', 
    backgroundColor:'#5663FF',
    borderTopLeftRadius:80*w,
    borderTopRightRadius:80*w,
    justifyContent:'center',
    alignItems:'center',
    },
    text:{
        color:'#FFF',
        fontSize:56*w,
        ...styles.jSemi
    }
})
export default BlueFooter;