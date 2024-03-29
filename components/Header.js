import React from 'react';
import {
	Text,
	Image,
	StyleSheet,
	Pressable,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { w, h } from '../proportion';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({ name, search, color = '#FAFAFA', textColor, x = false }) => {
	const navigation = useNavigation();

	return (
		<SafeAreaView
			style={[
				space.container,
				{ backgroundColor: color, position: 'relative' },
			]}
		>
			<Pressable style={space.left} onPress={() => navigation.goBack()}>
				<Image
					style={[{ width: 41.1 * w, height: 74.61 * h }]}
					source={
						!textColor
							? require('../imgs/header/backArrow.png')
							: require('../imgs/restaurantPage/back_arrow.png')
					}
				/>
			</Pressable>

			<Text
				style={[
					styles.jBold,
					styles.font60,
					textColor ? { color: textColor } : styles.blue,
				]}
			>
				{name}
			</Text>

			{search && (
				<Image
					style={[{ width: 63.55 * w, height: 63.55 * h }, space.right]}
					source={require('../imgs/header/blueSearch.png')}
				/>
			)}
			{x && (
				<Pressable
					style={space.right}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Image
						style={{ width: 65 * w, height: 65 * h }}
						source={require('../imgs/header/grey_x.png')}
					/>
				</Pressable>
			)}
		</SafeAreaView>
	);
};
const space = StyleSheet.create({
	container: {
		marginTop: 0,
		flexDirection: 'row',
		height: Platform.OS === 'android' ? 155 * h : 155 * h + 106 * h,
		justifyContent: 'center',
		alignItems: 'center',
	},
	space: {
		margin: 68 * w,
	},
	left: {
		position: 'absolute',
		top: Platform.OS === 'android' ? 39 * h : 39 * h + 106 * h,
		left: 67.5 * w,
	},
	right: {
		position: 'absolute',
		top: Platform.OS === 'android' ? 39 * h : 39 * h + 106 * h,
		right: 67.5 * w,
	},
});

export default Header;
