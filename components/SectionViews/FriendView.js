import React from 'react';
import {View, Image} from 'react-native';

const FriendView = ({image}) => {
    return(
            <Image
            style={{borderRadius:100, width:100, height:100}}
            source={{
                uri:image
            }}
            />
    )
}

export default FriendView;