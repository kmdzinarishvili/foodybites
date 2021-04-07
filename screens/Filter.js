import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { h, w } from '../proportion';


const Category = ({country, pressed}) =>{
    return(<View style={{width:300*w, height:133*h,
            borderColor:"rgba(112, 112, 112, 0.4)",
            borderRadius:23*w,
            borderWidth:1*w,
            justifyContent:'center',
            alignItems:'center',margin:21*w}}>
        <Text >{country}</Text>
        </View>)

}



const Filter = () =>{
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European']
    return (<View style={{backgroundColor:'#FAFAFA', height:'100%',
                padding:"4%",
                flexDirection:'column',
                alignItems:'center'
                }}>
        <Text>Select Category</Text>
        <View style={{flexDirection:'row', flexWrap:true}}>
            {countries.map((c)=> < Category country = {c} pressed={false}/>)}
        </View>
    </View>)
}

export default Filter;