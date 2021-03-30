import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Josefin_Sans_400Regular,
  } from "@expo-google-fonts/josefin-sans";

import {w,h} from '../proportion';


  
const HomeSection = ({index, title, number, data, renderItem, extraData, children}) =>{
    // let [fontsLoaded] = useFonts({
    //     Josefin_Sans_400Regular,
    //   });
    //   if(!fontsLoaded){
    //       return <AppLoading/>
    //   }
        return(
            <View style={{marginTop:20}}>
                <View style={sectionStyles.titleContainer}>
                    <Text style={sectionStyles.title}>{title}</Text>
                    <Text style={sectionStyles.seeall}>See all ({number})</Text>
                </View>
               {children}
            </View>
        )
        //;
};
const sectionStyles = StyleSheet.create({
    titleContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        // fontFamily:'JosefinSans_400Regular',
        fontSize:60*w,
        color: '#222455',
    },
    seeall:{
        fontSize:40*w,
        color:'#6E7FAA',
        opacity:0.8,
    }
})

export default HomeSection;