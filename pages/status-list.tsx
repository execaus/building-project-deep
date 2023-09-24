import React from 'react';
import { Page } from '../components/page';
import { Heading, HStack } from '@chakra-ui/react';
import StatusList from '../components/statuses/StatusList';
import StatusSequenceList from '../components/statuses/StatusSequenceList';

function Content() {
	return (
		<HStack spacing={8}>
			<Heading>Статусы</Heading>
			<StatusList />
			<StatusSequenceList />
		</HStack>
	);
}

export default function StatusListPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}


