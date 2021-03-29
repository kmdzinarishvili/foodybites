import React from 'react';
import {View, Image, StyleSheet, PixelRatio, Dimensions} from 'react-native';


const proportion = 2;

const FooterNavigation = () =>{
    return(
        <View style={{flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
        <Image source={require('../imgs/footer/home.png')} style={styles.home} />
        <Image source={require('../imgs/footer/bookmark.png')} style={styles.bookmark} />
        <View style={{backgroundColor:"#5663FF", borderRadius:30, width:60, height:60,
                    justifyContent:'center', alignItems:'center',
                    position:'absolute', bottom:30, left: Dimensions.get('window').width/2 - 45,
                    shadowColor: '#000',
                    zIndex: 1,
                    shadowOffset: {
                        width: 0,
                        height: 16,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 15,
                    elevation: 16,
                    }}>
            <Image style={styles.cross} source={require('../imgs/footer/cross.png')} />
            </View>
        <View style={{width:40}}></View>
        <Image source={require('../imgs/footer/bell.png')} style={styles.bell} />
        <Image source={require('../imgs/footer/person.png')} style={styles.person} />
        </View>
    );
};

const styles = StyleSheet.create({
    home:{
        width: 73.86/proportion,
        height: 67.71/proportion,
    
    },
    bookmark: {
        width:44.01/proportion,
        height:59.95/proportion

    }, 
    bell: {
        width:58.3/proportion,
        height:67.44/proportion
    },
    person:{
        width:41.75/proportion,
        height:60.57/proportion
    },
    cross:{
        width: 61.58/proportion,
        height: 61.58/proportion
    }


})
export default FooterNavigation;