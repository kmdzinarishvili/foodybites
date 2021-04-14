import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, StatusBar } from 'react-native';
import SafeView from './SafeView';
import {w, h} from '../proportion';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

 const Header = ({  name, search, color = "#FAFAFA", textColor}) =>{
    const navigation = useNavigation();
    //backgroundColor:color
return (
            <View style={[space.container,        {backgroundColor:color,  position:'relative'}]}>  
                   <Pressable 
                            style={space.left}
                            onPress={()=>navigation.goBack()}>
                    

                    <Image
                    style={[ {width: 41.1*w, height:74.61*h}]}
                    source={!textColor?require('../imgs/header/backArrow.png'): require('../imgs/restaurantPage/back_arrow.png')}
                    />
                    </Pressable>
                   
             
                  <Text style={[styles.jBold, styles.font60,textColor?{color:textColor}: styles.blue]}>{name}</Text>


                    {search&&<Image
                    style={[{width: 63.55*w, height:63.55*h}, space.right]}
                    source={require('../imgs/header/blueSearch.png')}
                    />}
            </View>
  

);
}
const space=StyleSheet.create({
    container:{ 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flexDirection:'row',
        height:155*h, 
        justifyContent:'center',
        alignItems: 'center',
        }
            ,
    space:{
        margin: 68*w
    },
    left:{
        position:'absolute',
        top: 39*h,
        left: 67.5*w

    },
    right:{
        position:'absolute',
        top: 39*h,
        right: 67.5*w

    }
});

export default  Header;