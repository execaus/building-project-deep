import React from 'react';
import { Page } from '../components/page';
import { Grid, Heading, HStack, VStack } from '@chakra-ui/react';
import StatusList from '../components/statuses/StatusList';
import StatusSequenceList from '../components/statuses/StatusSequenceList';
import { NavBar } from '../components/navbar';

function Content() {
	return (
		<HStack w={"100%"}>
			<NavBar />
			<VStack p={10} h={"100vh"} w={"100%"}>
				<Heading>Статусы</Heading>
				<Grid templateColumns={"3fr 7fr"} gap={4} width={"100%"} h={"100%"} p={6}>
					<StatusList />
					<StatusSequenceList />
				</Grid>
			</VStack>
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


