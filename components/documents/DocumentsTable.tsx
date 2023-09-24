import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

const DocumentsTable = () => {
	return (
		<TableContainer marginTop={30} bg="gray.100">
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
	);
}

export default DocumentsTable;