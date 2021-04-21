import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	Pressable,
	Image,
	StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { w, h } from '../../proportion';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';

import RestaurantFlatList from '../../components/Restaurant/RestaurantFlatList';

const IndCategory = ({ navigation, route }) => {
	const { image, gradient, name, length, active } = route.params;
	const pagination = [];
	for (let i = 0; i < length; i++) {
		pagination.push(
			<View
				key={`${i}`}
				style={[
					pagStyles.page,
					{
						width: (600 * w) / length - 20 * w,
						opacity: i === active ? 1 : 0.5,
					},
				]}
			/>
		);
	}
	return (
		<View>
			<ImageBackground
				source={{
					uri: image,
				}}
				style={{ width: 1125 * w, height: 317.72 * h }}
			>
				<View style={pagStyles.container}>{pagination}</View>
				<LinearGradient
					colors={gradient}
					style={{
						width: '100%',
						height: '100%',
						opacity: 0.85,
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						top: 0,
					}}
				></LinearGradient>
				<View
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: '30%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={[styles.title, { color: '#FFF' }]}> {name} </Text>
				</View>
				<Pressable
					style={{ position: 'absolute', top: 140 * h, left: 68 * w }}
					onPress={() => navigation.navigate('Home')}
					hitSlop={50 * w}
				>
					<Image
						style={{ width: 34.1 * h, height: 67.61 * w }}
						source={require('../../imgs/restaurantPage/back_arrow.png')}
					/>
				</Pressable>
			</ImageBackground>
			<RestaurantFlatList type="full" />
		</View>
	);
};

const pagStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'row',
		width: 600 * w,
		position: 'absolute',
		top: 250 * h,
		zIndex: 100,
	},
	page: {
		margin: 10 * w,
		height: 15 * w,
		backgroundColor: '#FFF',
		borderRadius: 8 * w,
	},
});

export default IndCategory;
