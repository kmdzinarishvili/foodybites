import React from 'react';
import {View, Text} from 'react-native';

import SafeView from './SafeView';



const Header = () =>{
    return (
        <View></View>
    ); 
}
const PageTemplate = ({children}) =>{
    return(
        <SafeView>
            <Header/>
            <Text>This is the page Template </Text>
            {children}
        </SafeView>
    );
}

export default PageTemplate;





