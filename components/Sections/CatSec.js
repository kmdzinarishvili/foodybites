import React from 'react';
import {FlatList} from 'react-native';

import CatView from '../SectionViews/CatView';
import HomeSection from '../HomeSection';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';


const CatSec = () =>{
    const countries = ['Italian', 'Chinese', 'Mexican',
                        'Thai', 'Arabian', 'Indian',
                        'American', 'Korean', 'European'];
    const navigation = useNavigation();
    const categories = useFetch('https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food');

    return(
        <HomeSection title='Category' number={9} goTo={()=> navigation.navigate('Category')}>    
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection:'row'}}
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