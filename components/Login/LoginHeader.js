import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	Image,
	Text,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	View,
	Pressable,
} from 'react-native';
import { w, h } from '../../proportion';
import styles from '../../styles/styles';

const LoginHeader = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={headStyles.container}>
			<Pressable
				style={headStyles.imgPressable}
				onPress={() => {
					navigation.goBack();
				}}
			>
				<Image
					source={require('../../imgs/restaurantPage/back_arrow.png')}
					style={headStyles.img}
				/>
			</Pressable>
			<Text style={headStyles.text}>Forgot Password</Text>
		</SafeAreaView>
	);
};
const headStyles = StyleSheet.create({
	container: {
		width: '100%',
		height: 226 * h,

		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		...styles.jSemi,
		color: '#FFF',
		fontSize: 60 * w,
	},
	img: {
		height: 67.61 * h,
		width: 34.1 * w,
	},
	imgPressable: {
		position: 'absolute',
		left: 0 * w,
		top: 137 * h,
	},
});
export default LoginHeader;
