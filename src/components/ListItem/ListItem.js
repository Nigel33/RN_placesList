import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onItemPressed}> 
			<View style={styles.listItem}>
				<Image source={props.placeImage} style={styles.placeImage} resizeMode="contain"/>
				<Text>{props.placeName}</Text>
			</View>
		</TouchableOpacity>
	);
};



const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		padding: 10,
		backgroundColor: "#eee",
		marginBottom: 5,
		flexDirection: "row",
		alignItems: 'center',
	},
	placeImage: {
		marginRight: 8,
		height: 50,
		width: 50
	}
});

export default listItem