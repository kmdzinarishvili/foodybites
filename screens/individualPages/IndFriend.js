
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FollowingButton from '../../components/FollowingButton';
import FriendView from '../../components/SectionViews/FriendView';
import { w, h } from '../../proportion';
import styles from '../../styles/styles';
import useFetch from '../../hooks/useFetch';
import RestaurantPreview from '../../components/SectionViews/RestaurantPreview';
const Stat = ({ number, type }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Text style={profileStyles.number}>{number}</Text>
			<Text style={profileStyles.type}>{type}</Text>
		</View>
	);
};

const Stats = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				width: 791 * w,
				justifyContent: 'space-between',
				marginTop: 110 * h,
			}}
		>
			<Stat number={120} type={'Reviews'} />
			<Stat number={'50k'} type={'Followers'} />
			<Stat number={45} type={'Following'} />
		</View>
	);
};

const IndFriend = ({
	name = 'Jayson Acevedo',
	email = 'jayson.acevedo@gmail.com',
	route,
}) => {
	const { image } = route.params;
	const restaurants = useFetch(
		'https://api.unsplash.com/search/photos/?client_id=i3AmYBQbRiDxMi3p937gP1nTnvqdBuSeyIm_99ZQ_jE&query=restaurant'
	);

	return (
		<View style={{ backgroundColor: '#FFF' }}>
			<FlatList
				ListHeaderComponent={
					<View style={{ backgroundColor: '#FFF' }}>
						<View style={profileStyles.container}>
							<FriendView
								image={image}
								marginTop={146 * h}
								width={374 * w}
								height={374 * h}
							/>

							<Text style={profileStyles.name}>{name}</Text>
							<Text style={profileStyles.email}>{email}</Text>
							<Stats />
							<View style={{ flexDirection: 'row', marginTop: 67 * h }}>
								<FollowingButton style={profileStyles.button}></FollowingButton>
								<FollowingButton
									type="blocking"
									bool={true}
									style={profileStyles.button}
								></FollowingButton>
							</View>
							<View
								style={{
									width: 1125 * w,
									height: 6 * w,
									backgroundColor: '#E2E2E2',
									marginVertical: 60 * w,
								}}
							/>
						</View>
					</View>
				}
				contentContainerStyle={{ alignItems: 'center' }}
				data={restaurants}
				keyExtractor={(item) => `item${item.id}`}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<View>
							<RestaurantPreview type={'full'} item={item}></RestaurantPreview>
						</View>
					);
				}}
			/>
		</View>
	);
};

const profileStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
	},
	name: {
		color: '#3E3F68',
		fontSize: 66 * w,
		...styles.jSemi,
		marginTop: 64 * h,
	},
	email: {
		...styles.lightGrayText,
		opacity: 0.8,
		...styles.jReg,
		marginTop: 35 * h,
	},
	number: {
		...styles.blueText,
		...styles.jSemi,
		fontSize: 50 * w,
	},
	type: {
		...styles.lightGrayText,
		...styles.jReg,
		fontSize: 40 * w,
	},
	button: {
		marginHorizontal: 26 * w,
		width: 380 * w,
	},
});

export default IndFriend;
