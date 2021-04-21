import React from 'react';
import { View, Text, Pressable } from 'react-native';
import openMap from 'react-native-open-maps';

const RedirecToMaps = ({ children, style, end = 'Stamba' }) => {
	const goToMap = () => {
		openMap({ end: end, start: 'My Location' });
	};
	return (
		<Pressable onPress={goToMap}>
			<View style={style}>{children}</View>
		</Pressable>
	);
};

export default RedirecToMaps;
