import React from 'react';
import {Text, View } from 'react-native';
import Rating from '../components/Review/Rating';
import SafeView from '../components/SafeView';

const Review = () =>{
    return(
    <SafeView>
        <Text>Review page</Text>
        {/* <Rating/> */}
    </SafeView>
    )
}


export default Review;