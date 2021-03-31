import React from 'react';
import {StyleSheet, ImageBackground, Text} from 'react-native';
import {w, h} from '../../proportion';
import { LinearGradient } from 'expo-linear-gradient';
import gradients from '../../styles/gradients';
import styles from '../../styles/styles';
const CatView = ({image, index, name='Italian'}) => {
    return(
            <ImageBackground
            style={{alignItems:'center', justifyContent:'center', borderRadius:10, overflow:'hidden', width:300*w, height:300*h, margin:26*w}}
            source={{
                uri:image
            }}
            >
                   <LinearGradient colors={
                       index%3==0? gradients.pink:
                       index%3==1? gradients.purple:
                       gradients.blue
                    } 
                        style={linearStyles.linearGradient}/>


            <Text style={[{color:'#FFF', fontSize:50*w}, styles.jBold ]}>{name}</Text>
            </ImageBackground>

    )
}
const linearStyles = StyleSheet.create({
    linearGradient:{
        position:'absolute',
        width:'100%',
        height:'100%',
        opacity:0.65
    }
});


export default CatView;