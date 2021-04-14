import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import CatView from '../SectionViews/CatView';
import HomeSection from '../HomeSection';
import { useNavigation } from '@react-navigation/native';
import {h} from '../../proportion';


const CatSec = () =>{
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European'];
    const navigation = useNavigation();
    const [categories, setCategories] = useState();
    const fetch_category_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setCategories(json.slice(0,9));
       })
        .catch((error) => {
            throw error;
        });
    }
    
    useEffect(()=>{
        fetch_category_pictures();
    }, []);

    return(
        <HomeSection title='Category' number={9} goTo={()=> navigation.navigate('Category')}>    
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection:'row', marginTop:54*h/2}}
            data={categories}
            horizontal={true}

            renderItem={({item, index})=>{
                return (
                    <CatView image={item['urls']['regular']} name={countries[index]} index={index}/>);
           
            }}
            keyExtractor={(item) => item.id}
        />
        </HomeSection>
    );
}

export default CatSec;