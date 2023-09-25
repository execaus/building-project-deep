import {Box} from "@chakra-ui/react";
import React from "react";

const MapOnObject = () => {
	return (
		<Box h={"100%"}>
			<iframe
				src= "https://yandex.ru/map-widget/v1/?um=constructor%3Aa2ee09b7a370eeccd06e07650e6dc4aa70846f8a8918213adbb86a60143ab896&amp;source=constructor"
				width="100%" height="100%"></iframe>
		</Box>
	);
}

export default MapOnObject;
