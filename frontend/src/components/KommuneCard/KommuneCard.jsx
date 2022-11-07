import { Card, Image, Text, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./KommuneCard.css";

export default function KommuneCard(id, name, county, weaponImg, rating) {
	return (
		<Card withBorder style={styles.kommuneCard}>
			<Group noWrap spacing={15}>
				<Image src={weaponImg} style={styles.weaponImg} />
				<div>
					<Text mt="xs" mb="xs" weight="700" size="md">
						{name}
					</Text>
					<Text size="sm" color="dimmed">
						📍{county}
					</Text>
					<Link to={`kommune/${id}`}>
						<Button variant="light" color="blue" mt="xs" radius="md">
							Vis mer
						</Button>
					</Link>
				</div>
				<div style={styles.kommuneCardRating}>
					<Rating size={20} iconsCount={1} readonly initialValue={1}></Rating>
					<div style={styles.kommuneCardAverageRating}>
						({rating != 0 ? rating.toFixed(2) : "-"})
					</div>
				</div>
			</Group>
		</Card>
	);
}

const styles = StyleSheet.create({
	kommuneCard: {
		width: "265px",
		height: "150px",
	},
	kommuneCard_hover: {
		boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
		transition: "box-shadow 0.2s ease-in-out",
	},
	kommuneCardRating: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		position: "absolute",
		top: "7px",
		right: "7px",
	},
	kommuneCardAverageRating: {
		fontSize: "14px",
		paddingBottom: "3px",
	},
	instructions: {
		color: "#888",
		fontSize: 18,
		marginHorizontal: 15,
	},
	weaponImg: {
		maxWidth: "60px",
	},
});

// const styles = StyleSheet.create({
// kommuneCard: {
//   width: '265px',
//   height: '150px',
// },
// kommuneCard:hover {
//   boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
//   transition: 'box-shadow 0.2s ease-in-out',
// },
// kommuneCardRating: {
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   position: 'absolute',
//   top: '7px',
//   right: '7px',
// },
// kommuneCardAverageRating: {
//   fontSize: '14px',
//   paddingBottom: '3px',
// },
// weaponImg: {
//   maxWidth: '60px',
// },});
