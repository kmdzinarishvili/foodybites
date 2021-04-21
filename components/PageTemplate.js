import React from 'react';
import { View } from 'react-native';
import { w } from '../proportion';

const PageTemplate = ({ children, bColor}) => {
	return (
		<View
			style={[
				{ paddingTop: 0, backgroundColor:bColor? bColor: '#FAFAFA', marginHorizontal: 68 * w },
			]}
		>
			{children}
		</View>
	);
};

export default PageTemplate;
