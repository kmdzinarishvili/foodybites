import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

const SafeView = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.view, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop:0,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor:'#FAFAFA'
   
    }
});

export default SafeView;