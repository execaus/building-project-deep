import React from 'react';
import { Page } from '../components/page';
import {Heading, Card, CardHeader, HStack, VStack} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";


function Content() {
	return (
		<Box p={20} >
			<Heading as='h1' size='2xl' textAlign="left">
				Экран подрядчика
			</Heading>
			<VStack spacing={10} align="left" mt={10}>
				<HStack  spacing={10} >
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
				</HStack>
				<HStack  spacing={10}>
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<Heading size='md'>Процесс, в котором он задействован</Heading>
						</CardHeader>
					</Card>
				</HStack>
			</VStack>
		</Box>

	);
}

export default function ContractorPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

