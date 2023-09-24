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
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';

function Content() {
	const [ projectName, setProjectName ] = useState('')
	const [ startDate, setStartDate ] = useState('')
	const [ endDate, setEndDate ] = useState('')

	const deep = useDeep()
	const router = useRouter()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)
	const fileInputRef = React.useRef()

	const onCreate = async () => {
		const projectTypeLinkId = await deep.id('@l4legenda/project-pipeline', 'Project')
		const fileTypeLinkId = await deep.id('@deep-foundation/core', 'AsyncFile')

		const { data: [{ id: statusLinkId }] } = await deep.insert({
			type_id: projectTypeLinkId,
			object: {
				data: {
					value: {
						name: projectName,
						startDate, endDate,
					},
				}
			},
		})

		if (fileInputRef.current) {
			for (const file of (fileInputRef.current as HTMLInputElement).files) {
				const { data: [{ id: fileLinkId }] } = await deep.insert({
					type_id: fileTypeLinkId,
					in: {
						data: {
							type_id: 3,
							from_id: statusLinkId,
						}
					}
				})

				const formData = new FormData()
				formData.append('file', file);

				await fetch(`https://3007-deepfoundation-dev-umhddgfsgj6.ws-eu104.gitpod.io/api/file`, {
					headers: {
						"Authorization": `Bearer ${deep.token}`,
						"linkId": fileLinkId,
					},
					method: "POST",
					body: formData,
				})

				// const [{ data, loading, error }, refetch] = useAxios({
				// 	method: 'get',
				// 	`https://3007-deepfoundation-dev-umhddgfsgj6.ws-eu104.gitpod.io/api/file?linkId=${fileLinkId}`,
				// 	headers: {
				// 		'Authorization': `Bearer ${deep.token}`,
				// 	},
				// 	responseType: "blob",
				// });
				// if (!loading && data) {
				// 	const reader = new window.FileReader();
				// 	reader.onload = () => {
				// 		setSrc(reader.result);
				// 	};
				// 	reader.readAsDataURL(data);
				// }
			}
		}

		router.push(`/passport/${statusLinkId}`);
	};


	const { data: projectLinkID } = useDeepId("@l4legenda/project-pipeline", "Project")
	const { data: projects } = useDeepSubscription({
		type_id: {
			_eq: projectLinkID,
		}
	})

	return (
		<HStack>
			<NavBar/>
			<Box p={ 10 } w={ '100%' } h={ '100vh' }>
				<HStack paddingBottom={ 4 }>
					<Heading>Проекты</Heading>
					<Button marginLeft={ 'auto' } colorScheme={ 'green' } onClick={ onOpen }>Создать проект</Button>
				</HStack>
				<Grid gap={ 8 } templateColumns={ 'repeat(6, 1fr)' }>
					{
						projects.map(project => <Card key={project.id} style={ {
							cursor: 'pointer',
						} } p={ 4 } onClick={ () => {
							router.push(`/passport/${ project.id }`)
						} }>
							<Image src={ "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg" } w={ 300 }/>
							<Text paddingTop={ 3 } fontSize="xl">{ project.value?.value.name }</Text>
						</Card>)
					}
				</Grid>
			</Box>
			<Modal
				initialFocusRef={ initialRef }
				finalFocusRef={ finalRef }
				isOpen={ isOpen }
				onClose={ onClose }
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader>Общая информация</ModalHeader>
					<ModalCloseButton/>
					<ModalBody pb={ 6 }>
						<FormControl>
							<FormLabel>Название проекта</FormLabel>
							<Input value={projectName} onChange={(ev) => setProjectName(ev.target.value)}/>
						</FormControl>

						<FormControl mt={ 4 }>
							<FormLabel>Дата начала</FormLabel>
							<Input value={startDate} onChange={(ev) => setStartDate(ev.target.value)}/>
						</FormControl>

						<FormControl mt={ 4 }>
							<FormLabel>Дата окончания</FormLabel>
							<Input value={endDate} onChange={(ev) => setEndDate(ev.target.value)}/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<FormControl>
							<FormLabel>Загрузить документы</FormLabel>
							<Input type="file" ref={fileInputRef}/>
						</FormControl>
					</ModalFooter>

					<ModalFooter>
						<Button colorScheme="teal" onClick={ onCreate } mr={ 4 }>
							Сохранить
						</Button>
						<Button onClick={ onClose } pl={ 4 }>Закрыть</Button>
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

