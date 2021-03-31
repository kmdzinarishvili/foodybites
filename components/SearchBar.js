import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {w,h} from '../proportion';
import styles from '../styles/styles';
const SearchBar = ({placeholder}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return(
    <View style={searchStyles.SectionStyle}>
    <Image source={require('../imgs/home/magnifying_glass.png')} style={searchStyles.ImageStyle} />
    <TextInput
        style={[{position: 'absolute', left:60,fontSize:48*w, paddingTop:10 },styles.jReg ]}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder={placeholder}
    
    />
    <Image source={require('../imgs/home/search_sliders.png')} style={searchStyles.ImageStyle} />
    </View>);
}




const searchStyles = StyleSheet.create({
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