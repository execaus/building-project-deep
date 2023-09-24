import React from 'react';
import { Page } from '../components/page';
import { NavBar } from '../components/navbar';
import Passport from '../components/passport/Passport';
import { HStack } from '@chakra-ui/react';

function Content() {
	return (
		<HStack>
			<NavBar />
			<div>dashboard</div>
		</HStack>
	);
}

export default function DashboardPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

