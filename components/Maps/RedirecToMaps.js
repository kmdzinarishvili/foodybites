import React from 'react';
import {View, Text, Pressable} from 'react-native';
import openMap from 'react-native-open-maps';



const RedirecToMaps = ({children, style}) =>{
    const goToMap = () =>{
        // /"My Location"
        openMap({ end:'Stamba', start:'My Location' });
    };
    return (
            <Pressable
                onPress={goToMap}>
                <View style={style}>
                {children}
                </View>
            </Pressable>
            
    )
}

export default RedirecToMaps;