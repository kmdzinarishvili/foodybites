import React from 'react';
import {View, Text, StyleSheet, PixelRatio, FlatList} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Josefin_Sans_400Regular,
  } from "@expo-google-fonts/josefin-sans";
const pixelRatio = PixelRatio.get();




  
const HomeSection = ({title, number, data, renderItem, extraData, children}) =>{
    // let [fontsLoaded] = useFonts({
    //     Josefin_Sans_400Regular,
    //   });
    //   if(!fontsLoaded){
    //       return <AppLoading/>
    //   }
        return(
            <View>
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
        fontSize:60/pixelRatio,
        color: '#222455',
    },
    seeall:{
        color:'#6E7FAA',
        opacity:0.8,
    }
})

export default HomeSection;