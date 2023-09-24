import {
	Box,
	Button,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Table,
	TableContainer,
	Tbody, Td,
	Th,
	Thead,
	Tr
} from "@chakra-ui/react";
import {Search} from "@mui/icons-material";
import React from "react";
import StatusList from "../statuses/StatusList";
import DocumentsTable from "./DocumentsTable";

const Documents = () => {
	return (
		<Box p={20}>
			<Heading as="h1" size="xl" textAlign="left">
				Документы
			</Heading>
			<InputGroup marginTop={30}>
				<InputLeftElement pointerEvents='none'>
					<Search/>
				</InputLeftElement>
				<Input type='tel' placeholder='Поиск документа' />
			</InputGroup>
			<DocumentsTable/>
		</Box>
	);
}

export default Documents;