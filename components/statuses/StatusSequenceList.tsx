import React from 'react';
import { Box, Button, Card, Flex, HStack, Heading, Stack, VStack, useDisclosure } from '@chakra-ui/react';
import StatusSequencePreview, { StatusSequencePreviewProps } from './StatusSequencePreview';
import { Add } from '@mui/icons-material';

const StatusSequenceList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const list: StatusSequencePreviewProps[] = [
		{
			name: 'Статус'
		},
		{
			name: 'Статус'
		},
		{
			name: 'Статус'
		},
		{
			name: 'Статус'
		},
		{
			name: 'Статус'
		},{
			name: 'Статус'
		},
	]

	return (
		<Card p={4}>
			<HStack>
				<Heading as='h4' size='md' marginBottom={4}>Цепочки статусов</Heading>
				<Button colorScheme="green" onClick={onOpen} marginLeft={"auto"}>
					<Add/>
				</Button>
			</HStack>
			<Flex justifyContent={"left"} flexDirection={"column"}>
				{
					list.map((status, index) => <StatusSequencePreview name={status.name} key={index}/>)
				}
			</Flex>
		</Card>
	);
};

export default StatusSequenceList;
