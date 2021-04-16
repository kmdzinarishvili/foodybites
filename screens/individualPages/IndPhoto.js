import React, {useState} from 'react';
import {View, StyleSheet, Pressable, FlatList} from 'react-native';
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

const IndPhoto =({route}) =>{
    const {image} =route.params;
    return<View style={photoStyles.container}>
        <AutoHeightImage style={{marginBottom:350*h}} width={1125*w} source={{uri:image}} />
        <SelectorCircles numCircles={5}/>
    </View>

}


const photoStyles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor: '#25262E',
        justifyContent:'center',
        alignItems:'center',
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