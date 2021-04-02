import { BlurView } from 'expo-blur';
import React from 'react';
import {View, Text, Image} from 'react-native';
import BlueFooter from '../../components/BlueFooter';
import SafeView from '../../components/SafeView';
import { h, w } from '../../proportion';



const IndRestaurant = ({route, navigation}) =>{
    const {image} = route.params 
    const phoneNumber='+1 212-673-3754'
return (
    <View>
        <View>
    <Image style={{width:'100%', height:909*h}} source={{uri:image}}></Image>
    <BlurView style={{width:'90%', height:142*h, position:'absolute', bottom:0, 
     marginBottom:48, marginHorizontal:'7%', borderRadius:100, overflow:'hidden',
     flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
        <View style={{ flexDirection:'row', alignItems:'center', borderRadius:10, overflow:'hidden' }}>
            <View style={{width:74*w, height:74*h, backgroundColor:'#FFF'}}></View>
            <Text>{phoneNumber}</Text>
        </View>
         <Text>Direction</Text>

         </BlurView> 
    </View>
    </View>);

}


export default IndRestaurant;