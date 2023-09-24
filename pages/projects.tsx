import React from 'react';
import { Page } from '../components/page';
import { useRouter } from 'next/navigation';
import { VStack } from '@chakra-ui/react';

function Content() {
	return (
		<VStack spacing={8}>

		</VStack>
	);
}

export default function ProjectsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

