import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList, Image} from 'react-native';


import SafeView from '../components/SafeView';
import SearchBar from '../components/SearchBar';
import HomeSection from '../components/HomeSection';
import FooterNavigation from '../components/FooterNavigation';

import RestaurantPreview from '../components/SectionViews/RestaurantPreview';
import FriendView from '../components/SectionViews/FriendView';
import CatView from '../components/SectionViews/CatView';

const Home = () => {
    const [restaurants, setRestaurants] = useState();
    const [categories, setCategories] = useState();
    const [friends, setFriends] = useState();
    const [searchTerm, setSearchTerm] = useState('');    
    const fetch_restaurant_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=restaurant'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setRestaurants(json)})
        .catch((error) => {
            throw error;
        });
    }
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
    const fetch_friend_pictures= async () =>{
        const result = await fetch(
            'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
        ).then(res=>res.json()).then(res=>res['results'])
        .then(json => {setFriends(json)})
        .catch((error) => {
            throw error;
        });
    }
    useEffect(() =>{
        fetch_restaurant_pictures();
        fetch_category_pictures();
        fetch_friend_pictures();
    }, [] );
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
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{flexDirection:'row'}}
                            data={restaurants}
                            horizontal={true}
                            renderItem={({item})=>{
                                return (
                                    <RestaurantPreview item={item} friends={friends}/> 
                                )
                        
                            }}
                            keyExtractor={(item) => item.id}
                    />
                </HomeSection>
                <HomeSection title='Category' number={9}>    
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{flexDirection:'row'}}
                        data={categories}
                        horizontal={true}

                        renderItem={({item, index})=>{
                            return (<View>
                                <CatView image={item['urls']['regular']}  index={index}/>
                     
                            </View>)
                       
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    </HomeSection>
                    <HomeSection title='Friends' number={56}>    
                    <FlatList
                        showsHorizontalScrollIndicator={false}

                        data={friends}
                        horizontal={true}
                        renderItem={({item})=>{
                            return (
                            <FriendView image={item['urls']['regular']}
                            />
                            )
                       
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    </HomeSection>
                    

           </View>
           <FooterNavigation/>
           </View>
        </SafeView>

    )
}



const styles= {
    restStyles:{

    },
    catStyles:{

    },
    friendStyles:{

    }
}

export default Home;