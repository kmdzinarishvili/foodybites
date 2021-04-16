import React from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {countries} from '../../data/data';
import IndCategory from './IndCategory';
import useFetch from '../../hooks/useFetch';
import gradients from '../../styles/gradients';

const CategoryNav = ({navigation}) =>{
const categories =  useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food');

    if (categories){
        console.log(categories);
    return (
       <AppIntroSlider 
        renderItem={({item,index})=>{
            const gradient =  index%3==0? gradients.pink:index%3==1? gradients.purple:gradients.blue;
            return (<IndCategory image={item['urls']['regular']} gradient={gradient} name={index<countries.length?countries[index]:'German'}/>)
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