import React from 'react';
import {View, Image} from 'react-native';
import {w,h} from '../../proportion';

const FriendView = ({image, width=130*w, height=130*h, marginTop=54*h}) => {
    return(
            <Image
            style={{borderRadius:100, width:width, height:height, marginHorizontal:22*w,
                    marginTop:marginTop}}
            source={{
                uri:image
            }}
            />
    )
}

export default FriendView;