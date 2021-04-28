import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { w, h } from '../../proportion';

const StyledInput = ({ image }) => {
	return (
		<View style={inpStyles.container}>
			<Image source={require(image)} />
			{/* <TextInput style={inpStyles.input} /> */}
		</View>
	);
};

const inpStyles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255,255,255,0.22)',
		borderRadius: 36 * w,
		alignSelf: 'stretch',
		height: 176 * h,
	},
});

export default StyledInput;
