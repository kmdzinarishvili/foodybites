import React from 'react';
import {View, Text} from 'react-native';
import { h } from '../proportion';


const PageTemplate = ({children, style}) =>{
    return(
        <View style={[{marginTop:155*h, backgroundColor:'#FAFAFA', marginHorizontal: 100}, style]}>
            {children}
        </View>
    );
}

export default PageTemplate;





