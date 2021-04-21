import React from 'react';
import { FlatList, Platform } from 'react-native';

import RestaurantPreview from '../SectionViews/RestaurantPreview';

import HomeSection from '../HomeSection';
import { useNavigation } from '@react-navigation/native';

import { w } from '../../proportion';
import useFetch from '../../hooks/useFetch';

const RestSec = () => {
	const navigation = useNavigation();
	const restaurants = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=restaurant'
	);

	return (
		<HomeSection
			title="Trending Restaurants"
			number={45}
			goTo={() => navigation.navigate('Restaurant')}
		>
			<FlatList
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ flexDirection: 'row', marginTop: 20 * w }}
				data={restaurants}
				horizontal={true}
				keyExtractor={(item) => {
					return `${item.id}`;
				}}
				renderItem={({ item }) => {
					return <RestaurantPreview open={Math.random() < 0.5} item={item} />;
				}}
			/>
		</HomeSection>
	);
};

export default RestSec;
