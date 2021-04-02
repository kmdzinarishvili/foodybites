import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';


import FriendInfo from '../components/FriendInfo';
import FriendView from '../components/SectionViews/FriendView';

import {w,h} from '../proportion';
import styles from '../styles/styles';


const Dividor = ({title}) =>{
    return (
        <View style={{backgroundColor: 'rgba(86, 99, 255, 0.05)', width:1125*w}}>
            <Text style={[styles.jSemi, {color: 'rgba(34, 36, 85, 0.5)', margin:68*w, fontSize:46*w}]}>{title}</Text>
        </View>

    );
}

const FriendPage = () =>{
    const [friends, setFriends] = useState();

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
        fetch_friend_pictures();
    }, [] );
    return(
        <View style={{backgroundColor:'#FAFAFA'}}>
                <View style={{paddingHorizontal:68*w}}>
                <SearchBar placeholder="Search"/>
                </View>
                <FlatList
                    ListHeaderComponent={
                        <Dividor title='Contacts'/>

                    }
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom:10}}
                        data={friends}
                        keyExtractor={(item) => `item${item.id}`}
                    renderItem={({item})=>{
                    return (
                        <View>
                        <FriendInfo  picture={<FriendView width={160*w} height={160*h} image={item['urls']['regular']} marginTop={10}/>}/>                    
                        </View>

                );
                }}                    
                />

        </View>
    );

}

export default FriendPage;