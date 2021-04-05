import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import CatView from '../SectionViews/CatView';
import HomeSection from '../HomeSection';



const CatSec = ({goTo, navigation}) =>{
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
        <HomeSection title='Category' number={9} goTo={goTo}>    
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection:'row'}}
            data={categories}
            horizontal={true}

            renderItem={({item, index})=>{
                return (
                    <CatView navigation={navigation}image={item['urls']['regular']}  index={index}/>);
           
            }}
            keyExtractor={(item) => item.id}
        />
        </HomeSection>
    );
}

export default CatSec;