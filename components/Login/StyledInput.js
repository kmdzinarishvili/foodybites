import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { w, h } from '../../proportion';
import styles from '../../styles/styles';

const StyledInput = ({ image, width, height, placeholder, style }) => {
	return (
		<View style={[inpStyles.container, style]}>
			<Image
				source={image}
				style={{
					width: width,
					height: height,
				}}
			/>
			<TextInput
				style={inpStyles.input}
				placeholder={placeholder}
				placeholderTextColor={'#FFF'}
			/>
		</View>
	);
};

const inpStyles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255,255,255,0.22)',
		borderRadius: 36 * w,
		alignSelf: 'stretch',
		height: 176 * h,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 68 * w,
		margin: 28 * h,
	},
	input: {
		fontSize: 50 * w,
		color: '#FFF',
		...styles.jReg,
		margin: 68 * w,
		height: 52 * h,
	},
});

export default StyledInput;
