import React from 'react';
import { Page } from '../components/page';
import Passport from "../components/passport/Passport";
import { NavBar } from '../components/navbar';
import { HStack } from '@chakra-ui/react';

function Content() {
	return (
		<HStack>
			<NavBar />
			<Passport/>
		</HStack>
	);
}

export default function PassportPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

