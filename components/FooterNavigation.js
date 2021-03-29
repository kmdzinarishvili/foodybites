import React from 'react';
import {View, Image, StyleSheet, PixelRatio} from 'react-native';

const pixelRatio = PixelRatio.get();



const FooterNavigation = () =>{
    return(
        <View style={{flexDirection:"row", justifyContent:'space-around'}}>
        <Image source={require('../imgs/footer/home.png')} style={styles.home} />
        <Image source={require('../imgs/footer/bookmark.png')} style={styles.bookmark} />
        <Image source={require('../imgs/footer/bell.png')} style={styles.bell} />
        <Image source={require('../imgs/footer/person.png')} style={styles.person} />


        </View>
    );
};

const styles = StyleSheet.create({
    home:{
        width:73.86/pixelRatio,
        height:67.71/pixelRatio
    },
    bookmark: {
        width:44.01/pixelRatio,
        height:59.95/pixelRatio

    }, 
    bell: {
        width:58.3/pixelRatio,
        height:67.44/pixelRatio
    },
    person:{
        width:41.75/pixelRatio,
        height:60.57/pixelRatio

    }


})
export default FooterNavigation;