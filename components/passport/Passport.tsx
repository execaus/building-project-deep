import {
	Box,
	Heading, HStack,
} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import React from "react";
import InformationObject from "./InformationObject";
import ProjectInPassport from "./ProjectInPassport";
import { useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';

const Passport = (props: { projectID: string }) => {
	const { data: project } = useDeepSubscription({
		id: {
			_eq: +props.projectID,
		}
	})

	return (
		<Box p={10}>
			<Heading as="h1" fontSize="38" textAlign="left">
				Паспорт объекта
			</Heading>
			<HStack>
				<Image marginTop={10} src='https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg'
				       alt="Паспорт обьекта"
				       width="500px" height="350px" border="2px solid gray" />
				<ProjectInPassport/>
			</HStack>
			<InformationObject
				name={project?.[0]?.value?.value?.name || ""}
				startDate={project?.[0]?.value?.value?.startDate || ""}
				endDate={project?.[0]?.value?.value?.endDate || ""}/>
		</Box>
	);
}

export default Passport;
