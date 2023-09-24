import React from 'react';
import { Page } from '../components/page';
import { Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

function Content() {
	const router = useRouter()

	return (
		<VStack spacing={8}>
			<Button colorScheme="blue" onClick={() => navigator.push("/projects")}>Проекты</Button>
			<Button colorScheme="blue">Гость</Button>
		</VStack>
	);
}

export default function IndexPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

