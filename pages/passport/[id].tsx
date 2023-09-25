import React from 'react';
import { Page } from '../../components/page';
import Passport from "../../components/passport/Passport";
import { NavBar } from '../../components/navbar';
import { Box, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function Content() {
	const router = useRouter()
	const { id } = router.query

	return (
		<HStack>
			<Box marginBottom={"auto"}>
				<NavBar projectID={id as string}/>
			</Box>
			<Passport projectID={id as string}/>
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

