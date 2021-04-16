import React, { useRef, useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import useFetch from '../../hooks/useFetch';
import IndPhoto from './IndPhoto';

import {w} from '../../proportion';



const REG_CIRCLE_WIDTH =17.02*w;
const SEL_CIRCLE_WIDTH =29*w;
const CIRCLE_MARGIN =4.5*w;


const PhotoNav = ({route}) =>{
    const initIndex = route.params.index;
    const photos =  useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food');
    const slider = useRef();
    useEffect(()=>{
        if(slider.current){
            slider.current.goToSlide(initIndex, true);
        }
    });
   
    if (photos){
        return (
        <AppIntroSlider 
        ref={(ref) => (slider.current = ref)}
            renderItem={({item,index})=>{
                return (<IndPhoto image={item['urls']['regular']}/>)
            }
            }
            data={photos} 
            keyExtractor={(item)=>item.id}
            renderPagination={(active)=>{
                return(<View style={styles.container}>
                    {photos.map((item, index)=><View key={`${index}`}
                      style={active===index?styles.selCircle:styles.regCircle}/>)}
                </View>)}
            }
            /> 
        );
    }else{
        return (
            <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'center'}}> 
                <Text>
                    LOADING
                </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:'5%',
        right:0,
        left:0,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end'

      
    },
    regCircle:{
        backgroundColor:'#6A6A6A',
        margin:CIRCLE_MARGIN,
        width: REG_CIRCLE_WIDTH,
        height:REG_CIRCLE_WIDTH,
        borderRadius:REG_CIRCLE_WIDTH/2,
    },
    selCircle:{
        backgroundColor:'#5663FF',
        width:SEL_CIRCLE_WIDTH,
        height:SEL_CIRCLE_WIDTH,
        borderRadius:SEL_CIRCLE_WIDTH/2,
        margin:CIRCLE_MARGIN,
        borderColor:'#FFF',
        borderWidth:1*w

    }
})

export default PhotoNav;