import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/LineDetail';

const PeopleDetailPage = ({props, navigation, route}) => {
	const [person, setPerson] = useState(route.params);

	useEffect(() => {
		setPerson(route.params);
	}, [route.params]);

	return (
		<View style={styles.container}>
				<Image style={styles.avatar} source={{uri: person.picture.large}} />
				<View style={styles.detailContainer}>
					<Line label="E-Mail:" content={person.email} />
					<Line label="Cidade:" content={person.location.city} />
					<Line label="Estado:" content={person.location.state} />
					<Line label="Tel:" content={person.phone} />
					<Line label="Celular:" content={person.cell} />
					<Line label="Naturalidade:" content={person.nat} />
				</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1,
	},
	detailContainer: {
		backgroundColor: '#E2F9FF',
		marginTop: 20,
		elevation: 1,
	}
})

export default PeopleDetailPage;