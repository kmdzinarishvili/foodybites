import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, Image,  StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { w, h } from '../../proportion';
import gradients from '../../styles/gradients';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import RestSec from '../../components/Sections/RestSec';
import RestaurantPage from '../RestaurantPage';


const IndCategory = ({ name='Italian', gradient}) =>{
    const [food, setFood] = useState();
    const navigation = useNavigation();
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
        // <LinearGradient
        //     colors={gradients.pink}
        //     style={{width:100, height:100}}>
        //     <ImageBackground source={
        //     {
        //         uri:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYxNzYwMTMwMQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
        //     }
        //     }
        //     style={{width:1125*w, height:317.72*h}}>

        //         <Text> Individual Category Page </Text>
        //     </ImageBackground>
        <Pressable>
        
            <ImageBackground source={
            {
                uri:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYxNzYwMTMwMQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
            }
            }
            style={{width:1125*w, height:317.72*h}}>
          
            <LinearGradient
            colors={gradients.pink}
            style={{width:'100%', height:'100%', opacity:0.85,
                    justifyContent:'center', alignItems:'center',
                    position:'absolute',
                     top:0}}>
                </LinearGradient>
                <View style={{flexDirection:'row', margin:268*w }}>
                {[1,2,3,4,5,6,7,8,9].map((num)=><View style={{margin:10*w,width:52*w, height: 15*w, backgroundColor:'#FFF', opacity:1, borderRadius:8*w }}></View>)}
                </View>

                <Text style={[styles.title, {color:"#FFF", position:'absolute', zIndex:1000,
                        bottom:0, right:'40%', bottom:'30%'}]}> {name} </Text>
                
                <Pressable 
                    style={{ position:'absolute', top:140*h, left:68*w}}
                    onPress={()=>navigation.goBack()}>
                    <Image
                        style={{width:34.1*h, height: 67.61*w}}
                         source={require('../../imgs/restaurantPage/back_arrow.png')}/>
                </Pressable>
            </ImageBackground>
            <RestaurantPage/>

        
        </Pressable>
        // </LinearGradient>
       
    );
}
export default IndCategory;