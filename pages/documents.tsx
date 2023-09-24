import React from 'react';
import { Page } from '../components/page';
import {
	Box, Button,
	Heading,
	Table,
	TableContainer,
	Tbody, Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

function Content() {
	return (
		<Box p={20}>
			<Heading as="h1" size="xl" textAlign="left">
				Документы
			</Heading>
			<TableContainer marginTop={10} bg="gray.100">
				<Table variant='simple' size='lg' shadow='lg' colorScheme={"blackAlpha"}>
					<Thead>
						<Tr>
							<Th>Имя</Th>
							<Th>Дата добавления</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td><Button ml={2}>Разрешение на строительство</Button></Td>
							<Td>01.01.1990</Td>
						</Tr>
						<Tr>
							<Td><Button ml={2}>План на стротельство</Button></Td>
							<Td>01.01.1990</Td>
						</Tr>
						<Tr>
							<Td><Button ml={2}>Заказы</Button></Td>
							<Td>01.01.1990</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default function DocumentsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

