import React from 'react';
import {View} from 'react-native';
import { w } from '../proportion';


const PageTemplate = ({children}) =>{
    return(
        <View style={[{paddingTop:0, backgroundColor:'#FAFAFA', marginHorizontal:68*w }]}>
            {children}
        </View>
    );
}

export default PageTemplate;





