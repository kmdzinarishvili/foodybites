import React from 'react';
import {View, FlatList} from 'react-native';

import {w} from '../../proportion';

import RestaurantPreview from '../SectionViews/RestaurantPreview';

import useFetch from '../../hooks/useFetch';

const RestaurantPage = ({type='full', url = 'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=restaurant'
}) =>{

    const restaurants = useFetch(url);

    return(
        <View style={{paddingHorizontal:68*w, marginBottom:100}} >
            <FlatList 
            
                contentContainerStyle={{alignItems:'center',}}  
            data={restaurants}
              keyExtractor={(item) => `item${item.id}`}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=>{
              return (
                  <View>
                      <RestaurantPreview type={type} item={item}></RestaurantPreview>
                  </View>

             )}}/>

        
        </View>
    );

}

export default RestaurantPage;