import React from 'react';
import { Page } from '../components/page';
import { Grid, Heading, HStack, VStack } from '@chakra-ui/react';
import StatusList from '../components/statuses/StatusList';
import StatusSequenceList from '../components/statuses/StatusSequenceList';

function Content() {
	return (
		<VStack p={10}>
			<Heading>Статусы</Heading>
			<Grid templateColumns={"3fr 7fr"} gap={4} width={"100%"} p={6}>
				<StatusList />
				<StatusSequenceList />
			</Grid>
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


