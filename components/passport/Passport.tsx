import {
	Box,
	Card,
	CardBody,
	CardHeader, Grid,
	Heading, HStack,
	Input,
	InputGroup,
	InputLeftElement, Stack,
	StackDivider, Text
} from "@chakra-ui/react";
import {Search} from "@mui/icons-material";
import DocumentsTable from "../documents/DocumentsTable";
import { Image } from '@chakra-ui/react'
import React from "react";
import InformationObject from "./InformationObject";
import ProjectInPassport from "./ProjectInPassport";

const Passport = () => {
	return (
		<Box p={10}>
			<Heading as="h1" fontSize="38" textAlign="left">
				Паспорт обьекта
			</Heading>
			<HStack>
				<Image marginTop={10} src='https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg'
				       alt="Паспорт обьекта"
				       width="500px" height="350px" border="2px solid gray" />
				<ProjectInPassport/>
			</HStack>
			<InformationObject/>
		</Box>
	);
}

export default Passport;
