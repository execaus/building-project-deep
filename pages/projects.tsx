import {
	Box,
	Button,
	Card, FormControl, FormLabel,
	Grid,
	Heading,
	HStack,
	Image, Input,
	Modal, ModalBody, ModalCloseButton,
	ModalContent, ModalFooter, ModalHeader,
	ModalOverlay,
	Text, useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NavBar } from '../components/navbar';
import { Page } from '../components/page';

function Content() {
	const router = useRouter()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const onCreate = () => {
		router.push('passport');
	};


	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const [projects, setProject] = useState([
		{
			id: 1,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 2,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 3,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 4,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 5,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 6,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 7,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 8,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 9,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
		{
			id: 10,
			image: "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg",
			name: "Название проекта",
		},
	])

	return (
		<HStack>
			<NavBar/>
			<Box p={10} w={"100%"} h={"100vh"}>
				<HStack paddingBottom={4}>
					<Heading>Проекты</Heading>
					<Button marginLeft={"auto"} colorScheme={"green"} onClick={onOpen}>Создать проект</Button>
				</HStack>
				<Grid gap={8} templateColumns={"repeat(6, 1fr)"}>
					{
						projects.map(project => <Card style={{
							cursor: "pointer",
						}} p={4} onClick={() => {
							router.push(`/passport/${project.id}`)
						}}>
							<Image src={project.image} w={300} />
							<Text paddingTop={3} fontSize='xl'>{ project.name }</Text>
						</Card>)
					}
				</Grid>
			</Box>
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
		</HStack>
	);
}

export default function ProjectsPage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}

