import React from 'react';
import { Page } from '../components/page';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import StatusList from '../components/statuses/StatusList';
import StatusSequenceList from '../components/statuses/StatusSequenceList';

function Content() {
	return (
		<VStack spacing={8}>
			<Heading>Статусы</Heading>
			<HStack>
				<StatusList />
				<StatusSequenceList />
			</HStack>
		</VStack>
	);
}

export default function StatusListPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}


