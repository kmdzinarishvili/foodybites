import React from 'react';
import { View, Text, FlatList } from 'react-native';

import FriendInfo from '../components/FriendInfo';

import { w, h } from '../proportion';
import styles from '../styles/styles';
import useFetch from '../hooks/useFetch';

const Dividor = ({ title }) => {
	return (
		<View
			style={{ backgroundColor: 'rgba(86, 99, 255, 0.05)', width: 1125 * w }}
		>
			<Text
				style={[
					styles.jSemi,
					{ color: 'rgba(34, 36, 85, 0.5)', margin: 68 * w, fontSize: 46 * w },
				]}
			>
				{title}
			</Text>
		</View>
	);
};

const FriendPage = () => {
	const friends = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=profile'
	);
	return (
		<View style={{ backgroundColor: '#FAFAFA' }}>
			<View style={{ paddingHorizontal: 68 * w }}/>

			<FlatList
				ListHeaderComponent={
					<View>
						<FlatList
							ListHeaderComponent={<Dividor title="Contacts" />}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								paddingBottom: 10,
							}}
							data={friends}
							keyExtractor={(item) => `i${item.id}`}
							renderItem={({ item }) => {
								return (
									<View>
										<FriendInfo
											image={item['urls']['regular']}
											marginTop={10}
										/>
									</View>
								);
							}}
						/>
						<Dividor title="Suggested" />
					</View>
				}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					paddingBottom: 10,
				}}
				data={friends}
				keyExtractor={(item) => `i${item.id}`}
				renderItem={({ item }) => {
					return (
						<View>
							<FriendInfo image={item['urls']['regular']} marginTop={10} />
						</View>
					);
				}}
			/>
		</View>
	);
};

export default FriendPage;
