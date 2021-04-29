import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { w, h } from '../../proportion';
import styles from '../../styles/styles';

const LoginButton = ({ text, style, action }) => {
	return (
		<Pressable style={[buttonStyles.container, style]} onPress={action}>
			<Text style={buttonStyles.text}>{text}</Text>
		</Pressable>
	);
};

const buttonStyles = StyleSheet.create({
	container: {
		backgroundColor: '#5663FF',
		borderRadius: 36 * w,
		alignSelf: 'stretch',
		height: 176 * h,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#FFF',
		fontSize: 50 * w,
		...styles.jReg,
	},
});

export default LoginButton;
