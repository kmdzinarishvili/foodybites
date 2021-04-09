import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {w,h} from '../../proportion';

const FriendView = ({ image= "https://images.unsplash.com/photo-1579783483458-83d02161294e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyMTg3NTR8MHwxfHNlYXJjaHwxfHxwcm9maWxlfGVufDB8fHx8MTYxNzk0NzQzNQ\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080", 
    width=130*w, height=130*h, marginTop=54*h, style}) => {
    const navigation = useNavigation();
    return(

        <Pressable
            onPress={()=>navigation.navigate('Individual Friend')}>
            <Image
            style={[{borderRadius:100, width:width, height:height, marginHorizontal:22*w,
                    marginTop:marginTop}, style]}
            source={{
                uri:image
            }}
            />
        </Pressable>
    )
}

export default FriendView;