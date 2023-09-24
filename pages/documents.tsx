import React from 'react';
import { Page } from '../components/page';
import {
	Box, Button,
	Heading, HStack, Icon, Input, InputGroup, InputLeftElement,
	Table,
	TableContainer,
	Tbody, Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import {Search} from "@mui/icons-material";
import Documents from "../components/documents/Documents";
import { NavBar } from '../components/navbar';
import Passport from '../components/passport/Passport';

function Content() {
	return (
		<HStack w={"100%"}>
			<NavBar />
			<Documents/>
		</HStack>
	);
}

export default function DocumentsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

