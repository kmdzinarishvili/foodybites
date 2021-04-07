import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { h, w } from '../proportion';
import styles from '../styles/styles';


const Category = ({country, pressed}) =>{
    return(<View style={{width:300*w, height:133*h,
            borderColor:"rgba(112, 112, 112, 0.4)",
            borderRadius:23*w,
            borderWidth:1*w,
            justifyContent:'center',
            alignItems:'center',margin:21*w}}>
        <Text style={[styles.jSemi, {fontSize:50*w, color: pressed?'#FFF':'#rgba(62, 63, 104, 0.5)'}]}>{country}</Text>
        </View>)

}

const FilterTitle = ({style,text})=>{
    return(<Text style={[styles.title, style]}>{text}</Text>);
}


const Filter = ({distance}) =>{
    distance= 50;

    //pressed.id 
    //then change accordingly
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European'];
    return (<View style={{backgroundColor:'#FAFAFA', height:'100%',
                padding:"4%",
                flexDirection:'column',
                alignItems:'center'
                }}>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Select Category'/>
        <View style={{flexDirection:'row', flexWrap:true,  justifyContent:'space-around'}}>
            {countries.map((c)=> < Category country = {c} pressed={false}/>)}
        </View>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Distance'/>
        <View style={{width:'100%'}}>
        <View style={{width: distance+'%', height: 27*h, backgroundColor:'#5663FF', borderRadius:14*w,
        borderBottomRightRadius:0, borderTopRightRadius:0, position:'absolute', left:0}}></View>
            <View style={{width: 100-distance+'%', height: 27*h, backgroundColor:'#EDEEFF', borderRadius:14*w,
        borderBottomLeftRadius:0, borderTopLeftRadius:0, position:'absolute', right:0}}></View>
        </View>
        <FilterTitle style={{marginTop:127*h, marginBottom:83*h}} text='Ratings'/>

    </View>)
}

export default Filter;