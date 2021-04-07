import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable, ImageBackground, FlatList, SafeAreaView, StatusBar, } from 'react-native';
import { BlurView } from 'expo-blur';
import BlueFooter from '../../components/BlueFooter';



import { h, w } from '../../proportion';
import styles from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';
import gradients from '../../styles/gradients';

import HomeSection from '../../components/HomeSection';
import FriendInfo from '../../components/FriendInfo';

import FriendView from '../../components/SectionViews/FriendView';
import { useNavigation } from '@react-navigation/native';




const RestaurantInfo = ({name, category, distance, rating, address, isOpen, dailyTime}) =>{
    return (
        <View>
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
    );
}

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
                        <Image style={{width: 60.91*w, height:73.1*h, margin:70*w, marginRight:0 }} source={require('../../imgs/restaurantPage/share.png')}/>
                        <Image style={{width: 60.91*w, height:73.1*h , margin:70*w}} source={require('../../imgs/restaurantPage/bookmark.png')}/>
                    </View>
            </View>
        </SafeAreaView>
    );

}



const IndRestaurant = ({route}) =>{
    const navigation = useNavigation();
    const {image} = route.params 
    const phoneNumber='+1 212-673-3754'
    const category = "Italian";
    const name = 'Happy Bones';
    const address = "394 Broome St, New York, NY 10013, USA";
    const distance = 12;
    const isOpen = false;
    const dailyTime = "9:30 am to 11:00 pm";
    const rating = 4.5


    const [food, setFood] = useState();
    const fetch_food= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setFood(json)})
        .catch((error) => {
            throw error;
        });
    }    
    
    useEffect(()=>{
        fetch_food();
    }, []);
    

return (
    <View>
  
   
    <ImageBackground style={{width:'100%', height:909*h}} source={{uri:image}}>
    <HeaderIcons onPress={()=> navigation.goBack()}/>
   <Pressable onPress={()=> console.warn('pressed')}>
        <BlurView style={{width:'90%', height:142*h, position:'absolute', top:400*h , 
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


    <View style={{marginHorizontal:66*w, marginVertical:38*h, marginBottom:340*h}}>


            <FlatList 
            showsVerticalScrollIndicator={false}
            data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}

            keyExtractor={(item)=>`ahhhhhhhhhh${item}`}

            ListHeaderComponent={
                <View>
                <RestaurantInfo name={name} category={category} distance={distance} rating={rating} address={address} isOpen={isOpen} dailyTime={dailyTime}/>
                <HomeSection title='Menu & Photos' number ={32}/>
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={food}
                    scrollEnabled={true}
                    keyExtractor={(item)=>item.id}
                    renderItem ={({item})=>{
                        return<Image 
                        style={{width:450*w, height:336.57*h, borderRadius:22*w, marginHorizontal:45*w/2}}
                        source={{uri:item['urls']['regular']}}
                        />}}
                /> 
                <HomeSection title='Review & Ratings' number ={32}/>
                </View>
            }
      
            renderItem ={({item})=>{
                return<FriendInfo 
                showFollow={false}
                justifyContent='space-between'
                text="Lorem ipsum dolor sit amet consectetur"
                image={
                    <FriendView  width={160*w} height={160*h}/>}
                    star={
                        <Star rating={rating}/>
                    }
                    >
                    </FriendInfo>
                    
            }}/>

        </View>
        <BlueFooter/>
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
    },
    imgTest:{
        width:100, height:100
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
         position:'absolute', zIndex:1000, overflow:'hidden', 
         paddingHorizontal: 22*w, borderRadius: 5, color:'#4CD964', fontSize:25*w
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