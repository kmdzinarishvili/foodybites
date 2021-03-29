import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native'

const SearchBar = (searchTerm, setSearchTerm) => {
    return(
    <View style={styles.SectionStyle}>
    <Image source={require('../imgs/home/magnifying_glass.png')} style={styles.ImageStyle} />
    <TextInput
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder='Search Items'
    
    />
    <Image source={require('../imgs/home/search_sliders.png')} style={styles.ImageStyle} />
    </View>);
}




const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
    },
    
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    

});

export default SearchBar;