import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';

import {w} from '../proportion';

import PageTemplate from '../components/PageTemplate';
import RestaurantPreview from '../components/SectionViews/RestaurantPreview';

const RestaurantPage = () =>{

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
        <PageTemplate>

            <SearchBar placeholder="Search"/>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexDirection:'column', alignSelf:'flex-end'}}
                    data={restaurants}
                    keyExtractor={(item) => `item${item.id}`}
                renderItem={({item})=>{
                return (
                    <View>
                    <RestaurantPreview item={item}/>                    
                    </View>

               );
            }}                    
            />

        
        </PageTemplate>
    );

}

export default RestaurantPage;