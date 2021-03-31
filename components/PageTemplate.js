import React from 'react';
import {View, Text} from 'react-native';

import SafeView from './SafeView';




const PageTemplate = ({children, style}) =>{
    console.log(style)
    return(
        <SafeView>
            <View style={style}>
            {children}
            </View>
        </SafeView>
    );
}

export default PageTemplate;





