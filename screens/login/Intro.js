import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { h, w } from '../../proportion';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';

import styles from '../../styles/styles';
const INIT_WIDTH = 1900;
const INIT_HEIGHT = 2848.35;

const FINAL_WIDTH = 2124;
const FINAL_HEIGHT = 3184.35;

const Intro = ({ navigation, route }) => {
	const rotation = useSharedValue(0);
	const xScale = useSharedValue(1);
	const yScale = useSharedValue(1);

	const textY = useSharedValue(2436 * h);
	const textScale = useSharedValue(2);

	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{ rotate: rotation.value + 'deg' },
				{
					scaleX: xScale.value,
				},
				{
					scaleY: yScale.value,
				},
			],
		};
	});

	const textStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateY: textY.value },
				{
					scale: textScale.value,
				},
			],
		};
	});

	useEffect(() => {
		setTimeout(() => {
			rotation.value = withTiming(17, 1000);
			xScale.value = withTiming(FINAL_WIDTH / INIT_WIDTH);
			yScale.value = withTiming(FINAL_HEIGHT / INIT_HEIGHT);
		}, 1000);

		setTimeout(() => {
			textY.value = withTiming(0);
			textScale.value = withTiming(1);
		}, 2000);
		setTimeout(() => {
			navigation.navigate('Login');
		}, 4000);
	});

	const AnimatedText = Animated.createAnimatedComponent(Text);
	const AnimatedImage = Animated.createAnimatedComponent(Image);
	return (
		<View>
			<AnimatedImage
				style={[sStyles.img, animatedStyles]}
				source={require('../../imgs/login/bigPicture.png')}
			></AnimatedImage>
			<View style={sStyles.view}>
				<AnimatedText style={[sStyles.text, textStyles]}>
					Foodybite
				</AnimatedText>
			</View>
		</View>
	);
};

//animated 17 degrees
const sStyles = StyleSheet.create({
	img: {
		width: INIT_WIDTH * w,
		height: INIT_HEIGHT * h,
		marginTop: -43 * h,
		marginLeft: -545 * w,
	},
	view: {
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		height: '87%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 10,
		borderColor: 'blue',
	},
	text: {
		color: '#3E3F68',
		fontSize: 136 * w,
		...styles.jBold,
	},
});

export default Intro;
