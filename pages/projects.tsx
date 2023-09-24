import {
	Box,
	Button,
	Card,
	Grid,
	Heading,
	HStack,
	Image,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl, Input, FormLabel, useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Page } from '../components/page';

function Content() {
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

	const router = useRouter();
	const onCreate = () => {
		router.push('passport');
	};
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)

	return (
		<Box p={4} w={"100%"}>
			<HStack paddingBottom={4}>
				<Heading>Проекты</Heading>
				<Button marginLeft={"auto"} colorScheme={"green"} onClick={onOpen}>Создать проект</Button>
			</HStack>
			<Grid gap={8} templateColumns={"repeat(6, 1fr)"}>
				{
					projects.map(project => <Card p={4}>
						<Image src={project.image} w={300} />
						<Text paddingTop={3} fontSize='xl'>{ project.name }</Text>
					</Card>)
				}
			</Grid>

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Общая информация</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Название проекта</FormLabel>
							<Input/>
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Дата начала</FormLabel>
							<Input />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Дата окончания</FormLabel>
							<Input />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<FormControl>
							<FormLabel>Загрузить документы</FormLabel>
							<Input type="file" />
						</FormControl>
					</ModalFooter>

					<ModalFooter>
						<Button colorScheme="teal" onClick={onCreate} mr={4}>
							Сохранить
						</Button>
						<Button onClick={onClose} pl={4}>Закрыть</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
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

