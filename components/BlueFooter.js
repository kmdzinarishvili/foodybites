import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { w, h } from '../proportion';
import styles from '../styles/styles';

const BlueFooter = ({text="Footer", action}) =>{
    if(typeof(text)==='string'){
    return(
        <Pressable 
        onPress={action}
        style={footerStyles.footer}>
            <Text style={footerStyles.text}>{text}</Text>
        </Pressable>
    )
    }else{
        return(<View style={[footerStyles.footer, {justifyContent:'space-around'}]}>
            <Pressable
                onPress={action[0]}
            >
                <Text style={[footerStyles.text, {padding:145*w}]}>{text[0]}</Text>
                </Pressable>
            <View style={{height:'100%', width:1, backgroundColor:'blue' }}></View>
            <Pressable
                onPress={action[1]}
            >
            <Text style={[footerStyles.text, {padding:145*w}]}>{text[1]}</Text>
            </Pressable>

        </View>)
    }
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
    flexDirection:'row',
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