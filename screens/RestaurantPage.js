import React from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';


import PageTemplate from '../components/PageTemplate';


const RestaurantPage = () =>{
    return(
        <PageTemplate  style={{flexDirection:'column', justifyContent:'flex-end'}}>

            <SearchBar placeholder="Search"/>
        
        </PageTemplate>
    );

}

export default RestaurantPage;