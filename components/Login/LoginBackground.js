import React from 'react';
import {
	StyleSheet,
	ImageBackground,
	StatusBar,
	Text,
	Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { w } from '../../proportion';

const LoginBackground = ({
	children,
	source = require('../../imgs/login/loginPicture.png'),
}) => {
	return (
		<ImageBackground source={source} style={{ width: '100%', height: '100%' }}>
			<StatusBar barStyle="light-content" />
			<LinearGradient
				colors={['rgba(45,45,45,0.41)', 'rgba(8,8,8,1)']}
				style={bgStyles.linearGradient}
			>
				{children}
			</LinearGradient>
		</ImageBackground>
	);
};

const bgStyles = StyleSheet.create({
	linearGradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 118 * w,
	},
});
export default LoginBackground;
