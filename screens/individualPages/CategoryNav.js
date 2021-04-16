import React from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {countries} from '../../data/data';
import IndCategory from './IndCategory';
import useFetch from '../../hooks/useFetch';
import gradients from '../../styles/gradients';

const CategoryNav = ({route}) =>{
const {image, gradient, name} = route.params
const categories =  useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food');

    if (categories){
    return (
       <AppIntroSlider 
        renderItem={({item,index})=>{
            return (<IndCategory image={image} gradient={gradient} name={name}/>)
        }
        }
        data={categories} 
        keyExtractor={(item)=>item.id}
        /> 
    );
    }else{
        return (
            <View> 
                <Text>
                    Loading
                </Text>
            </View>
        )
    }
}

export default CategoryNav;