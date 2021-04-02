import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, StatusBar } from 'react-native';
import SafeView from './SafeView';
import {w, h} from '../proportion';
import styles from '../styles/styles';

 const Header = ({ navigateBack, name, search}) =>{
return (
    <SafeAreaView>
            <View style={{ 
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                flexDirection:'row', height:155*h, backgroundColor:'#FAFAFA', justifyContent:'space-between',
                    alignItems: 'center'}}>  
                   <Pressable 
                            onPress={navigateBack}>
                       <Image
                    style={[{width: 41.1*w, height:74.61*h}, space.space]}
                    source={require('../imgs/header/backArrow.png')}
                    />
                    </Pressable>
                   
             
                  <Text style={[styles.jBold, styles.font60, styles.blue]}>{name}</Text>
                    {search&&<Image
                    style={[{width: 63.55*w, height:63.55*h}, space.space]}
                    source={require('../imgs/header/blueSearch.png')}
                    />}
            </View>
    </SafeAreaView>

);
}
const space=StyleSheet.create({
    space:{
        margin: 68*w
    }
});

export default  Header;