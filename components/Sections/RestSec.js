import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import RestaurantPreview from '../SectionViews/RestaurantPreview';

import HomeSection from '../HomeSection';




const RestSec = ({goToPage}) =>{
    console.log(goToPage);
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
        <HomeSection title='Trending Restaurants' number={45} goToPage={goToPage}>
        <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexDirection:'row'}}
                data={restaurants}
                horizontal={true}
                renderItem={({item})=>{
                    return (
                        <RestaurantPreview item={item} /> 
                    )
            
                }}
                keyExtractor={(item) => item.id}
        />
        </HomeSection>
    );
}

export default RestSec;