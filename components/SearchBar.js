import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {w,h} from '../proportion';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return(
    <View style={styles.SectionStyle}>
    <Image source={require('../imgs/home/magnifying_glass.png')} style={styles.ImageStyle} />
    <TextInput
        style={{position: 'absolute', left:60}}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Find Restaurants"
    
    />
    <Image source={require('../imgs/home/search_sliders.png')} style={styles.ImageStyle} />
    </View>);
}




const styles = StyleSheet.create({
    SectionStyle: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#E8E8E8',
        height: 154*h,
        borderRadius: 5 ,
        paddingHorizontal:54*w,
    },
    
    ImageStyle: {
        marginVertical:10,
        padding: 0,
        margin: 5,
        height: 50*h,
        width: 50*h,
        // resizeMode : 'stretch',
        alignItems: 'center'
    },
    

});

export default SearchBar;