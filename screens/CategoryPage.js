import React, {useState, useEffect} from 'react';
import {View,FlatList} from 'react-native';

import PageTemplate from '../components/PageTemplate';
import SearchBar from '../components/SearchBar';
import CatView from '../components/SectionViews/CatView';
import {w,h} from '../proportion';

const CategoryPage = () =>{
    const [categories, setCategories] = useState();
    const fetch_category_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setCategories(json);
       })
        .catch((error) => {
            throw error;
        });
    }
    
    useEffect(()=>{
        fetch_category_pictures();
    }, []);
   
        return(
        <PageTemplate>
              <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexDirection:'column'}}
                    data={categories}
                    keyExtractor={(item) => `item${item.id}`}
                renderItem={({item, index})=>{
                
                return (
                            <CatView image ={item['urls']['regular']} index={index}  width={993.15*w} height={231.72*h} marginHorizontal={0} showStripe={true} />
               );
            }}                    
            />
            <SearchBar placeholder="Search"/>        
        </PageTemplate>
    );
   

}

export default CategoryPage;