import React from 'react';
import { Card, Heading, VStack } from '@chakra-ui/react';
import StatusSequencePreview, { StatusSequencePreviewProps } from './StatusSequencePreview';

const StatusSequenceList = () => {
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
			<VStack>
				<Heading as='h4' size='md'>Статусы</Heading>
				{
					list.map((status, index) => <StatusSequencePreview name={status.name} key={index}/>)
				}
			</VStack>
		</Card>
	);
};

export default StatusSequenceList;
