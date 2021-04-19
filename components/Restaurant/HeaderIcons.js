import React from 'react';
import {View, Image, Pressable, SafeAreaView, StatusBar, Share } from 'react-native';
import { h, w } from '../../proportion';


const HeaderIcons= ({onPress}) =>{
    return(
        <SafeAreaView>
            <View style={{flexDirection:'row', justifyContent:'space-between', 
                            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                        }}>
                <Pressable  onPress={onPress}>
                <Image  style={{width:34.1*w, height: 67.61*h, margin:70*w}} source={require('../../imgs/restaurantPage/back_arrow.png')}/>

                </Pressable>

                    <View style={{flexDirection:'row'}}>
                        <Pressable
                            onPress={()=>Share.share({
                                message:
                                  "Check out this restaurant",
                              })}>
                                <Image style={{width: 60.91*w, height:73.1*h, margin:70*w, marginRight:0 }} source={require('../../imgs/restaurantPage/share.png')}/>
                        </Pressable>
                        <Image style={{width: 60.91*w, height:73.1*h , margin:70*w}} source={require('../../imgs/restaurantPage/bookmark.png')}/>
                    </View>
            </View>
        </SafeAreaView>
    );

}


export default HeaderIcons;