import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {w} from '../proportion';
import styles from '../styles/styles';


  
const HomeSection = ({title, number, children, goTo, style}) =>{
        return(
            <View style={[{marginTop:20}, style]}>
                <View style={sectionStyles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Pressable onPress={() => goTo()}>
                    <Text style={[sectionStyles.seeall, styles.jReg]}>See all ({number})</Text>
                    </Pressable>
                </View>
               {children}
            </View>
        )
        
};
const sectionStyles = StyleSheet.create({
    titleContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontSize:60*w,
        color: '#3E3F68',
    },
    seeall:{
        fontSize:40*w,
        color:'#6E7FAA',
        opacity:0.8,
    }
})

export default HomeSection;