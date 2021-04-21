import React from 'react';
import { FlatList, View } from 'react-native';

import PageTemplate from '../components/PageTemplate';
import CatView from '../components/SectionViews/CatView';
import { w, h } from '../proportion';

import useFetch from '../hooks/useFetch';

const CategoryPage = () => {
	const countries = [
		'Italian',
		'Chinese',
		'Mexican',
		'Thai',
		'Arabian',
		'Indian',
		'American',
		'Korean',
		'European',
	];
	const categories = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=food'
	);

	return (
		<View style={{width:'100%', backgroundColor:'#FFF'}}>
		<PageTemplate bColor="#FFF">
			<FlatList
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexDirection: 'column' }}
				data={categories}
				keyExtractor={(item) => `item${item.id}`}
				renderItem={({ item, index }) => {
					return (
						<CatView
							image={item['urls']['regular']}
							index={index}
							name={countries[index]}
							width={993.15 * w}
							height={231.72 * h}
							marginHorizontal={0}
							showStripe={true}
							num={categories.length}
						/>
					);
				}}
			/>
		</PageTemplate>
		</View>
	);
};

export default CategoryPage;
