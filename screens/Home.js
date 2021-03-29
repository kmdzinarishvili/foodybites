import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Dimensions} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import HomeSection from '../components/HomeSection';
import FooterNavigation from '../components/FooterNavigation';
import { FlatList } from 'react-native-gesture-handler';



const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');    
    return (
        <SafeView >
            <View style={{
                                        paddingHorizontal: 0.06044444444*Dimensions.get('window').width,
                                        flex:1,
                                        justifyContent:'space-between',
                                        backgroundColor:'#F9F9f9'
            }}>
            <View >
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <HomeSection title='Trending Restaurants' number={45}>
                    <FlatList 
//  data={DATA}
//  renderItem={renderItem}
//  keyExtractor={(item) => item.id}
//  extraData={selectedId}
                    />
                    </HomeSection>

           </View>
           <FooterNavigation/>
           </View>
        </SafeView>

    )
}



export default Home;