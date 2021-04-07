import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {w,h} from '../../proportion';

const FriendView = ({ image, width=130*w, height=130*h, marginTop=54*h}) => {
    const navigation = useNavigation();
    return(

        <Pressable
            onPress={()=>navigation.navigate('Individual Friend')}>
            <Image
            style={{borderRadius:100, width:width, height:height, marginHorizontal:22*w,
                    marginTop:marginTop}}
            source={{
                uri:image
            }}
            />
        </Pressable>
    )
}

export default FriendView;