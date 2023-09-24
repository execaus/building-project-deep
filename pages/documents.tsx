import React from 'react';
import { Page } from '../components/page';
import {
	Box, Button,
	Heading, Icon, Input, InputGroup, InputLeftElement,
	Table,
	TableContainer,
	Tbody, Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import {Search} from "@mui/icons-material";
import Documents from "../components/documents/Documents";

function PhoneIcon(props: { color: string }) {
	return null;
}

function Content() {
	return (
		<Documents/>
	);
}

export default function DocumentsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

