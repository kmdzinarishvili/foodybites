import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {w,h} from '../proportion';
import styles from '../styles/styles';


  
const HomeSection = ({index, title, number, data, renderItem, extraData, children}) =>{

        return(
            <View style={{marginTop:20}}>
                <View style={sectionStyles.titleContainer}>
                    <Text style={[sectionStyles.title, styles.jBold]}>{title}</Text>
                    <Text style={[sectionStyles.seeall, styles.jReg]}>See all ({number})</Text>
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