import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { w, h } from '../../proportion';
import gradients from '../../styles/gradients';


const IndCategory = ({navigation, gradient}) =>{
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
            <LinearGradient
            colors={gradients.pink}
            style={{width:100, height:100}}>
            <ImageBackground source={
            {
                uri:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTYxNzYwMTMwMQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080"
            }
            }
            style={{width:1125*w, height:317.72*h}}>

                <Text> Individual Category Page </Text>
            </ImageBackground>
        </LinearGradient>
        // </LinearGradient>
       
    );
}
export default IndCategory;