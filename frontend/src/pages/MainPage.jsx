import React from "react";
import { View, Text, Button } from "react-native";
import KommuneCard from "../components/KommuneCard/KommuneCard";

export default function MainPage({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Main Page</Text>
			<Button
				title="Go to details page"
				onPress={() => navigation.navigate("Details")}
			/>
			<KommuneCard
				id="1"
				name="Isabelle"
				county="Fylke"
				weaponImg=""
				rating="2.5"
			/>
		</View>
	);
}
