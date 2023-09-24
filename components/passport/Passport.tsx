import {
	Box,
	Card,
	CardBody,
	CardHeader, Grid,
	Heading,
	Input,
	InputGroup,
	InputLeftElement, Stack,
	StackDivider, Text
} from "@chakra-ui/react";
import {Search} from "@mui/icons-material";
import DocumentsTable from "../documents/DocumentsTable";
import { Image } from '@chakra-ui/react'
import React from "react";
import InformaitonObject from "./InformaitonObject";

const Passport = () => {
	return (
		<Box p={20}>
			<Heading as="h1" fontSize="38" textAlign="left">
				Паспорт обьекта
			</Heading>
			<Image marginTop={10} src='https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg'
			       alt="Паспорт обьекта"
			       width="425px" height="300px" border="2px solid gray" />
			<InformaitonObject/>
		</Box>
	);
}

export default Passport;