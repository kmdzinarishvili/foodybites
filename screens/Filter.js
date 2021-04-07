import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { h, w } from '../proportion';


const Category = (country) =>{
    return(<View style={{width:300*w, height:133*h}}><Text>{country}</Text></View>)

}



const Filter = () =>{
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European']
    return (<View style={{backgroundColor:'#FAFAFA', height:'100%'}}>
        <Text>Select Category</Text>
        <View style={{flexDirection:'row', flexWrap:true}}>
            {countries.map((c)=> Category(c))}
        </View>
    </View>)
}

export default Filter;