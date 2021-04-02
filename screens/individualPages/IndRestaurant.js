import { BlurView } from 'expo-blur';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BlueFooter from '../../components/BlueFooter';
import SafeView from '../../components/SafeView';
import { h, w } from '../../proportion';
import styles from '../../styles/styles';


const Circle=({children})=>{
    return <View style={{width:74*w, height:74*h, backgroundColor:'#FFF', marginRight:10,
             borderRadius:74*h/2, justifyContent:'center', alignItems:'center'}}>

    </View>
}

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
        <View style={{ flexDirection:'row', alignItems:'center', overflow:'hidden' }}>
            <Circle>
                <Image 
                    style={{width:100, height:100}}
                    source={require('../../imgs/restaurantPage/arrows.png')}/>
            </Circle>
            <Text style={[{color:'#FFF', fontSize:40*w},styles.jSemi]}>{phoneNumber}</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems:'center', overflow:'hidden' }}>
        <Circle/>

         <Text style={[indStyles.text, styles.jSemi]}>Direction</Text>
         </View>

         </BlurView> 
    </View>
    </View>
        );

}

const indStyles = StyleSheet.create({
    text:{
        color:'#FFF', 
        fontSize:40*w

    }
})


export default IndRestaurant;