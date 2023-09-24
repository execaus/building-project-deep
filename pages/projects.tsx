import { Box, Button, Card, Grid, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Page } from '../components/page';
import { useRouter } from 'next/navigation';

function Content() {
	const router = useRouter()
	const [projects, setProject] = useState([
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
	])

	return (
		<Box p={10} w={"100%"}>
			<HStack paddingBottom={4}>
				<Heading>Проекты</Heading>
				<Button marginLeft={"auto"} colorScheme={"green"}>Создать проект</Button>
			</HStack>
			<Grid gap={8} templateColumns={"repeat(6, 1fr)"}>
				{
					projects.map(project => <Card style={{
						cursor: "pointer",
					}} p={4} onClick={() => {
						router.push("/passport")
					}}>
						<Image src={project.image} w={300} />
						<Text paddingTop={3} fontSize='xl'>{ project.name }</Text>
					</Card>)
				}
			</Grid>
		</Box>
	);
}

export default function ProjectsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

