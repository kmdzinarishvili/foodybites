import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {w, h } from '../../proportion';


const REG_CIRCLE_WIDTH =17.02*w;
const SEL_CIRCLE_WIDTH =29*w;
const CIRCLE_MARGIN =4.5*w;


const SelectorCircles = ({numCircles}) =>{
    const [selected, setSelected] = useState(0)
    let ids = []
    for (let i = 0; i<numCircles; i++){
        ids.push(i)
    }

    return <View style={[photoStyles.selectorContainer, {left: (1125*w/2)-(numCircles-1)*(REG_CIRCLE_WIDTH+CIRCLE_MARGIN)/2 - (SEL_CIRCLE_WIDTH+CIRCLE_MARGIN)/2}]}>
        <FlatList 
            horizontal={true}
            contentContainerStyle={ {alignItems:'center'}}
            data={ids}
            keyExtractor={(id)=>`${id}`}
            renderItem={({item})=>{
                return(<Pressable 
                style={selected===item? photoStyles.selCircle:photoStyles.regCircle}>
                    
            </Pressable>)
            }}
        />
    
    </View>
}

const IndPhoto =({photo}) =>{
    photo="https://media.istockphoto.com/photos/delicious-panna-cotta-with-berries-picture-id182026106?k=6&m=182026106&s=612x612&w=0&h=4CcYZf7CKpsFP6ECPJ0fq0lgB8geZo0rQ04pnjAK8NE="
    return<View style={photoStyles.container}>
        <AutoHeightImage  width={1125*w} source={{uri:photo}} />
        <SelectorCircles numCircles={5}/>
    </View>

}


const photoStyles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor: '#25262E',
        justifyContent:'space-around',
        alignItems:'center'
    },
    selectorContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom: 74*h,       
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

export default IndPhoto;