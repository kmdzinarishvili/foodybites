import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import styles from '../styles/styles';
import { w, h } from '../proportion';

const Star = ({ rating = 4.5 }) => {
	return (
		<View
			style={[
				starStyles.whiteButton,
				starStyles.right,
				{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'rgba(47, 53, 128, 0.05)',
					width: 135.32 * w,
					height: 68.1 * h,
				},
			]}
		>
			<Image
				style={{ width: 33.4 * w, height: 31.85 * h, marginRight: 2 }}
				source={require('../imgs/star.png')}
			/>
			<Text style={[styles.blue, { fontSize: 36 * w }, styles.jSemi]}>
				{rating}
			</Text>
		</View>
	);
};

const starStyles = StyleSheet.create({
	whiteButton: {
		position: 'absolute',
		zIndex: 1000,
		overflow: 'hidden',
		paddingHorizontal: 22 * w,
		borderRadius: 5,
		color: '#4CD964',
		fontSize: 25 * w,
	},
	right: {
		right: 31 * w,
	},
});

export default Star;
