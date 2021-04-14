import React, {useState,useEffect} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, FlatList, Pressable} from 'react-native';

import {w, h} from '../proportion';
import MasonryList from "react-native-masonry-list";

const Photos = ({navigation}) =>{

    const [food, setFood] = useState();
    const fetch_food= async () =>{
        let currFood = [];
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {
            currFood =(json);
        })
        .catch((error) => {
            throw error;
        });

        let newRes = [];
        await currFood.map((item)=> newRes.push({uri:item['urls']['regular']}));
        console.log(newRes);
        setFood(newRes);

    }    
    
    useEffect(()=>{
        fetch_food();
    }, []);
    return <View style={styles.container}>
        <View style={{flexDirection:'row',
                        flexWrap:'wrap',
                        justifyContent:'space-around',
                        height: '100%'
                        }}>
            

            <MasonryList
            imageContainerStyle={{borderRadius:22*w}}
            images={food} />
    
            </View>
    </View>
}

const styles= StyleSheet.create({
    container:{
        width:'100%', 
        height:'100%', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#FAFAFA'
    }
});
export default Photos;