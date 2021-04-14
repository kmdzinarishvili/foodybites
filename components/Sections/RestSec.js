import React, {useState, useEffect} from 'react';
import {FlatList, Platform} from 'react-native';

import RestaurantPreview from '../SectionViews/RestaurantPreview';

import HomeSection from '../HomeSection';
import { useNavigation } from '@react-navigation/native';

import {w} from '../../proportion';


const RestSec = () =>{
    const navigation= useNavigation();
    const [restaurants, setRestaurants] = useState();
    const fetch_restaurant_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=restaurant'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setRestaurants(json)})
        .catch((error) => {
            throw error;
        });
    }    
    
    useEffect(()=>{
        fetch_restaurant_pictures();
    }, []);
 
    return(
        <HomeSection title='Trending Restaurants' number={45} goTo={() =>navigation.navigate('Restaurant')}>
        <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexDirection:'row', marginTop:  20*w}}
                data={restaurants}
                horizontal={true}
                keyExtractor={(item) => {
                    return (`${item.id}`);
                }
                }

                renderItem={({item})=>{
                    return (
                        <RestaurantPreview open={Math.random() < 0.5}
                         item={item} /> 
                    )
            
                }}
        />
        </HomeSection>
    );
}

export default RestSec;