import React from 'react';
import {View, Text} from 'react-native';
import { w,h } from '../proportion';


const PageTemplate = ({children}) =>{
    return(
        <View style={[{paddingTop:0, backgroundColor:'#FAFAFA', marginHorizontal:68*w }]}>
            {children}
        </View>
    );
}

export default PageTemplate;





