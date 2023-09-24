import {Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";

const ProjectInPassport = () => {
	return (
		<Box marginTop={10} >
			<TableContainer  overflowY="auto" maxHeight="350">
				<Table variant='simple'  size='lg' shadow='lg' colorScheme={"blackAlpha"}  bg="gray.100" width="620px" height="351px">
					<Thead>
						<Tr>
							<Th fontSize="lg" color="gray.800">Выполняемые процессы</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Укладка пола</Td>
						</Tr>
						<Tr>
							<Td>Настраивание падингов</Td>
						</Tr>
						<Tr>
							<Td>Ровняем личико</Td>
						</Tr>
						<Tr>
							<Td>Ровняем личико</Td>
						</Tr>
						<Tr>
							<Td>Ровняем личико</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}
export default ProjectInPassport;