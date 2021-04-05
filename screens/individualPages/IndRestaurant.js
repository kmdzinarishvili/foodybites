import { BlurView } from 'expo-blur';
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ImageBackground} from 'react-native';
import BlueFooter from '../../components/BlueFooter';
import SafeView from '../../components/SafeView';
import { h, w } from '../../proportion';
import styles from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';
import gradients from '../../styles/gradients';
import openMap from 'react-native-open-maps';



import RestaurantPreview from '../../components/SectionViews/RestaurantPreview';


const Circle=({children})=>{
    return <View style={{width:74*w, height:74*h, backgroundColor:'#FFF', marginRight:10,
             borderRadius:74*h/2, justifyContent:'center', alignItems:'center'}}>
                 {children}

    </View>
}

const Star = ({rating})=>{
    return(
    <View style={[restStyles.whiteButton, restStyles.right, {flexDirection: 'row', justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: 'rgba(47, 53, 128, 0.05)', width:135.32*w, height: 68.1*h}]}>
       <Image 
       style={{width:33.4*w, height:31.85*h, marginRight:2}}
       source={require("../../imgs/star.png")}/>
       <Text style={[styles.blue, {fontSize:36*w}, styles.jSemi, ]}>{rating}</Text>
   </View>
    )
}

const IndRestaurant = ({route, navigation}) =>{
    const {image} = route.params 
    const phoneNumber='+1 212-673-3754'
    const category = "Italian";
    const name = 'Happy Bones';
    const address = "394 Broome St, New York, NY 10013, USA";
    const distance = 12;
    const isOpen = false;
    const dailyTime = "9:30 am to 11:00 pm";
    const rating = 4.5
return (
    <View>
    <ImageBackground style={{width:'100%', height:909*h}} source={{uri:image}}>
   
   
   <Pressable onPress={()=> console.warn('pressed ')}>
        <BlurView style={{width:'90%', height:142*h, position:'absolute', top:716*h , 
        marginBottom:48, marginHorizontal:'7%', borderRadius:100, overflow:'hidden',
        flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <View style={{ flexDirection:'row', alignItems:'center', overflow:'hidden' }}>
        
                <Circle>
                    <Image 
                        style={{width:36.1*w, height:38.94*h}}
                        source={require('../../imgs/restaurantPage/phone.png')}/>
                
                </Circle>
                <Text style={[{color:'#FFF', fontSize:40*w},styles.jSemi]}>{phoneNumber}</Text>
            </View>


            <View style={{ flexDirection:'row', alignItems:'center', overflow:'hidden' }}>
        
            <Circle>
            <Image 
                        style={{width:36.1*w, height:38.94*h}}
                        source={require('../../imgs/restaurantPage/arrows.png')}/>

                </Circle>

            <Text style={[indStyles.text, styles.jSemi]}>Direction</Text>
            </View>

            </BlurView> 
         </Pressable> 
         </ImageBackground> 


         <View style={{marginHorizontal:66*w, marginVertical:38*h}}>
         <View style={{flexDirection:'row', alignItems:'center'}}> 
                        <Text style={[styles.font50, styles.spaceRight, styles.jBold, {color:'#3E3F68'}, indStyles.margin20]}>{name}</Text> 
                        <LinearGradient colors={gradients.pink} 
                            style={[styles.linearGradient,  styles.spaceRight, restStyles.rad9, {opacity:0.65}]}>
                        <Text  style={[restStyles.white22, ]}>{category}</Text>
                        </LinearGradient>
                        <Text style={[styles.jReg, restStyles.white22, restStyles.purple,restStyles.rad9]}>{distance} km</Text>
                <Star rating={rating} />
                        </View>

                        <Text style={[restStyles.address, styles.jReg,  indStyles.margin20]} >{address}</Text>
                        <View style={[{flexDirection:'row'},, indStyles.margin20]}>
                            <Text style={[restStyles.address, styles.jReg, restStyles.red]}>{isOpen? "Open Now": "Closed Now"}</Text>
                            
                            <Text style={[restStyles.address, styles.jReg]}> daily time </Text> 
                            <View style={[{flexDirection:'row', alignItems:'center'}]}>
                                <Text style={[restStyles.address, styles.jReg,
                                     restStyles.red]}>{dailyTime}</Text> 
                                <Image
                                    style={{width: 21.95*w, height:12.52*h }}
                                    source={require('../../imgs/restaurantPage/downarrow.png')}
                                />
                            </View>



                        </View>
    </View>
    </View>
        );

}

const indStyles = StyleSheet.create({
    text:{
        color:'#FFF', 
        fontSize:40*w
    },
    margin20:{
        marginVertical:20*h
    }
})



const restStyles = StyleSheet.create({
    containter:{
        borderRadius:10,
        overflow:'hidden', 
        position:'relative',
        margin:27*w
    },
    whiteButton:{
         position:'absolute', zIndex:1000, 
            overflow:'hidden', paddingHorizontal: 22*w, borderRadius:10, color:'#4CD964', fontSize:25*w
    },
    left:{
        left: 31*w,

    },
    right:{
        right:31*w
    },
 
    size25:{
        fontSize:25*w
    },
    bottom:{
        height:225*h, 
        width: 907.85*w,
         backgroundColor:"#FFF",
          flexDirection:'column', 
          justifyContent:'space-around',
          padding:25*w

    },
    white22:{
        fontSize:22*w,
        color:'#FFF',
        paddingHorizontal:23*w,
        paddingVertical:12*w,
      
    },
    rad9:{
        borderRadius:9,
        overflow:'hidden'
    },
    purple:{
        backgroundColor: '#848DFF'
    },
    address:{
        color:'#8A98BA',
        fontSize:36*w
    },
    red:{
        color:'#FF4A40'
    },
    miniFriend:{
       
        width:55*w,
        height:55*w,
        borderRadius:55*w/2,
        borderColor:'#FFF',
        borderWidth:3*w,
        marginLeft:-10

    }
    
});
export default IndRestaurant;