import React, { useRef, useState } from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {countries} from '../../data/data';
import IndCategory from './IndCategory';
import useFetch from '../../hooks/useFetch';
import gradients from '../../styles/gradients';

import {w,h} from '../../proportion';
import { useEffect } from 'react/cjs/react.development';

const CategoryNav = ({route}) =>{
    const initIndex= route.params.index;
    const categories =  useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food');
    const slider = useRef();
    const [timePassed, setTimePassed] = useState(false);
    useEffect(()=>{
        if(slider.current){
            slider.current.goToSlide(initIndex)
        }
        setTimeout( () => {
            setTimePassed(true);
         },200);
    });

    if (categories){
        return (      

       <AppIntroSlider 
        ref={(ref) => {
    
             (slider.current)= ref;
        }}
        renderItem={({item,index})=>{
            if(timePassed&&index !==initIndex){
                const gradient =  index%3==0? gradients.pink:index%3==1? gradients.purple:gradients.blue;
                return (<IndCategory image={item['urls']['regular']} gradient={gradient} name={index<countries.length?countries[index]:'German'}/>)
            }else{
                console.log(initIndex);
                const gradient =  initIndex%3==0? gradients.pink:initIndex%3==1? gradients.purple:gradients.blue;
                return <IndCategory image={categories[initIndex]['urls']['regular']} gradient={gradient} name={initIndex<countries.length?countries[initIndex]:'German'}/>
                // return(
                //     <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}> 
                //     <Text>
                //         LOADING
                //     </Text>
                // </View>
                // );

            }
        }}
        data={categories} 
        keyExtractor={(item)=>item.id}
        renderPagination={(active)=>{
            const numPages = categories.length
            return(<View style={styles.container}>
                {categories.map((cat,index)=><View key={`${index}`}
                  style={[styles.page, {        width:(600*w)/numPages -20*w,
                    opacity:index===active?1:0.5}]}/>)}
            </View>)}
        }
        /> 
    );
    }else{
        return (
            <View style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}}> 
                <Text>
                    LOADING
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row', 
        width:600*w,
        position:'absolute',
        top:250*h
    },
    page:{
        margin:10*w,
        height: 15*w,
        backgroundColor:'#FFF',
        borderRadius:8*w 
    }
})

export default CategoryNav;