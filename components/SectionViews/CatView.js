import React from 'react';
import {View,StyleSheet, ImageBackground, Text} from 'react-native';
import {w, h} from '../../proportion';
import { LinearGradient } from 'expo-linear-gradient';
const CatView = ({image, index, name='Italian'}) => {
    return(
            <ImageBackground
            style={{alignItems:'center', justifyContent:'center', borderRadius:10, overflow:'hidden', width:300*w, height:300*h, margin:26*w}}
            source={{
                uri:image
            }}
            >
                   {index%3==0&& <LinearGradient colors={gradients.pink} 
                        style={styles.linearGradient}/>}
                    {index%3==1&&<LinearGradient colors={gradients.purple} 
                        style={styles.linearGradient}/>}
                    {index%3==2 &&<LinearGradient colors={gradients.blue} 
                        style={styles.linearGradient}>
                             </LinearGradient>}
            <Text style={{color:'white', fontSize:50*w}}>{name}</Text>
            </ImageBackground>

    )
}
const styles = StyleSheet.create({
    linearGradient:{
        position:'absolute',
        width:'100%',
        height:'100%',
        opacity:0.65
    }
});

const gradients= {
    pink: ['#FF5673', '#FF8C48'],
    purple: ['#832BF6', '#FF4665'],
    blue: ['#2DCEF8', '#3B40FE']
}
export default CatView;