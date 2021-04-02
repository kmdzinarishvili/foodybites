import React from 'react';
import {View, Text} from 'react-native';
import { h } from '../proportion';
import styles from '../styles/styles';

const BlueFooter = ({text}) =>{
    return(
        <View style={{position:'absolute', bottom:0, height:198*h, backgroundColor:'#5663FF', borderRadius:80*w}}>
            <Text style={[{fontSize:56*w}, styles.jSemi]}>{text}</Text>
        </View>
    )
}

export default BlueFooter;