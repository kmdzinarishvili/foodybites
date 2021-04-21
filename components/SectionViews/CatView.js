import React from 'react';
import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Pressable,
} from 'react-native';
import { w, h } from '../../proportion';
import { LinearGradient } from 'expo-linear-gradient';
import gradients from '../../styles/gradients';
import styles from '../../styles/styles';
import { useNavigation } from '@react-navigation/core';

const CatView = ({
	num,
	image,
	index,
	name = 'Italian',
	width = 300 * w,
	height = 300 * h,
	marginVertical = 26 * w,
	marginHorizontal = 26 * w,
	showStripe = false,
}) => {
	const navigation = useNavigation();
	const gradient =
		index % 3 == 0
			? gradients.pink
			: index % 3 == 1
			? gradients.purple
			: gradients.blue;
	return (
		<Pressable
			onPress={() => {
				navigation.navigate('Individual Category', {
					image: image,
					name: name,
					gradient: gradient,
					length: num,
					active: index,
				});
			}}
		>
			<View>
				<ImageBackground
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 10,
						overflow: 'hidden',
						width: width,
						height: height,
						marginVertical: marginVertical,
						marginHorizontal,
					}}
					source={{
						uri: image,
					}}
				>
					<LinearGradient
						colors={gradient}
						style={linearStyles.linearGradient}
					/>
					<Text style={[{ color: '#FFF', fontSize: 50 * w }, styles.jBold]}>
						{name}
					</Text>
				</ImageBackground>
				{showStripe && (
					<View
						style={{
							width: 15 * w,
							height: '50%',
							backgroundColor: '#FFF',
							position: 'absolute',
							right: 60 * w,
							bottom: 20,
							opacity: 0.5,
							borderRadius: 8 * w,
						}}
					></View>
				)}
			</View>
		</Pressable>
	);
};
const linearStyles = StyleSheet.create({
	linearGradient: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: 0.65,
	},
});

export default CatView;
