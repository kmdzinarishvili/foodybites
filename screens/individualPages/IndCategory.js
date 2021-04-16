import React from 'react';
import {View, Text, ImageBackground, Pressable, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { w, h } from '../../proportion';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';


import RestaurantFlatList from '../../components/Restaurant/RestaurantFlatList';


const IndCategory = ({  route}) =>{
    const {image, gradient, name} = (route.params);
    const navigation = useNavigation();

    return (
        <Pressable>
        
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
                <View style={{flexDirection:'row', margin:268*w }}>
                {[1,2,3,4,5,6,7,8,9].map((num)=><View key={num} style={{margin:10*w,width:52*w, height: 15*w, backgroundColor:'#FFF', opacity:1, borderRadius:8*w }}></View>)}
                </View>

                <Text style={[styles.title, {color:"#FFF", position:'absolute', zIndex:1000,
                        bottom:0, right:'40%', bottom:'30%'}]}> {name} </Text>
                
                <Pressable 
                    style={{ position:'absolute', top:140*h, left:68*w}}
                    onPress={()=>navigation.goBack()}
                    hitSlop={50*w}>
                    <Image
                        style={{width:34.1*h, height: 67.61*w}}
                         source={require('../../imgs/restaurantPage/back_arrow.png')}/>
                </Pressable>
            </ImageBackground>
            <RestaurantFlatList type="full"/>

        
        </Pressable>
       
    );
}
export default IndCategory;