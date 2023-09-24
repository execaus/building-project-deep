import React from 'react';
import { Box, Button, Card, Flex, HStack, Heading, Stack, VStack, useDisclosure } from '@chakra-ui/react';
import StatusSequencePreview, { StatusSequencePreviewProps } from './StatusSequencePreview';
import { Add } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const StatusSequenceList = () => {
	const router = useRouter()
	const list: StatusSequencePreviewProps[] = [
		{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},
		{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},{
			name: 'Последовательность статусов',
			statuses: [
				"Первый статус",
				"Второй статус",
				"Третий статус",
				"Четвертый статус",
				"Пятый статус",
			]
		},
	]

	const onCreate = () => {
		router.push('create-status-sequence');
	};

	return (
		<Card p={4}>
			<HStack paddingBottom={2}>
				<Heading as='h4' size='md' marginBottom={4}>Цепочки статусов</Heading>
				<Button colorScheme="green" onClick={onCreate} marginLeft={"auto"}>
					<Add/>
				</Button>
			</HStack>
			<Flex justifyContent={"left"} flexDirection={"column"}>
				{
					list.map((sequence, index) => <StatusSequencePreview name={sequence.name} statuses={sequence.statuses} key={index} />)
				}
			</Flex>
		</Card>
	);
};

export default StatusSequenceList;
