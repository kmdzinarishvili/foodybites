import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { h } from '../../proportion';


const SelectorCircles = (numCircles) =>{
    const [selected, setSelected] = useState(0)
    return <View style={photoStyles.selectorContainer}>
        
    </View>
}

const IndPhoto =({photo}) =>{
    return<View style={photoStyles.container}>
        <AutoHeightImage width='100%' source={{uri:photo}} />
    </View>

}


const photoStyles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor: '#25262E'
    },
    selectorContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom: 74*h

    }
})

export default IndPhoto;