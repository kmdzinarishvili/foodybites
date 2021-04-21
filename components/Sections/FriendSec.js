import React from 'react';
import { FlatList } from 'react-native';

import FriendView from '../SectionViews/FriendView';

import HomeSection from '../HomeSection';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';

const FriendSec = () => {
	const navigation = useNavigation();
	const friends = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
	);

	return (
		<HomeSection
			title="Friends"
			number={56}
			goTo={() => navigation.navigate('Friend')}
		>
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={friends}
				horizontal={true}
				renderItem={({ item }) => {
					return <FriendView image={item['urls']['regular']} />;
				}}
				keyExtractor={(item) => item.id}
			/>
		</HomeSection>
	);
};

export default FriendSec;
