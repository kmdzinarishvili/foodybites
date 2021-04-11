import React from 'react';
import {View, Text, Pressable} from 'react-native';
import openMap from 'react-native-open-maps';



const RedirecToMaps = ({children}) =>{
    const goToMap = () =>{
        // /"My Location"
        openMap({ end:'Stamba', start:'My Location' });
    };
    return (
        // <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <Pressable
                onPress={goToMap}>
                {children}
            </Pressable>
        // </View>
    )
}

export default RedirecToMaps;