import React from 'react';
import {View, Image} from 'react-native';
import {w,h} from '../../proportion';

const FriendView = ({image}) => {
    return(
            <Image
            style={{borderRadius:100, width:130*w, height:130*h, marginHorizontal:22*w,
                    marginTop:54*h}}
            source={{
                uri:image
            }}
            />
    )
}

export default FriendView;