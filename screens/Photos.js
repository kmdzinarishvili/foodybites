import React, {useState,useEffect} from 'react';
import {View, Image, Text, StyleSheet, ScrollView, FlatList, Pressable} from 'react-native';

import {w, h} from '../proportion';

const Photos = ({navigation}) =>{

    const [food, setFood] = useState();
    const fetch_food= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setFood(json);
        })
        .catch((error) => {
            throw error;
        });
    }    
    
    useEffect(()=>{
        fetch_food();
    }, []);
    return <View style={styles.container}>
        <ScrollView>
        <View style={{flexDirection:'row',
                        flexWrap:'wrap',
                        justifyContent:'space-around',
                        }}>
             {food?food.map((item, index)=>{
                return     <Pressable
                key={`${index}`}
                onPress={()=>{
                    navigation.navigate('Photo');
                }}><Image 
                        style={{width: index===4? 650*w: index===9?989*w  :300*w, 
                            height: index===4?  650*h:index===9?678*h  : 300*h,
                             borderRadius:22*w, marginHorizontal:45*w/2,
                             margin:24*w
                                }}
                        source={{uri:item['urls']['regular']}}
                        />

                        </Pressable>
                    }):
        
                <Text>Loading</Text>}
            </View>
            </ScrollView>
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