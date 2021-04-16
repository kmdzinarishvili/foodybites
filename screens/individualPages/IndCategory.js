import React from 'react';
import {View, Text, ImageBackground, Pressable, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { w, h } from '../../proportion';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';


import RestaurantFlatList from '../../components/Restaurant/RestaurantFlatList';


const IndCategory = ({image, gradient, name ="Italian" }) =>{
    const navigation = useNavigation();

    return (
        <View >
        
            <ImageBackground source={
            {
                uri:image          }
            }
            style={{width:1125*w, height:317.72*h}}>
          
            <LinearGradient
            colors={gradient}
            style={{width:'100%', height:'100%', opacity:0.85,
                    justifyContent:'center', alignItems:'center',
                    position:'absolute',
                     top:0}}>
                </LinearGradient>
                <View style={{position: 'absolute',  left: 0, right: 0, bottom: '30%', justifyContent: 'center', alignItems: 'center'}}>
                <Text  
                    style={[styles.title, {color:"#FFF"}]}> {name} </Text>
                </View>
                <Pressable 
                    style={{ position:'absolute', top:140*h, left:68*w}}
                    onPress={()=>navigation.navigate('Home')}
                    hitSlop={50*w}>
                    <Image
                        style={{width:34.1*h, height: 67.61*w}}
                         source={require('../../imgs/restaurantPage/back_arrow.png')}/>
                </Pressable>
            </ImageBackground>
            <RestaurantFlatList type="full"/>

        
        </View>
       
    );
}
export default IndCategory;