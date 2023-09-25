import { useState } from 'react';
import { Page } from '../components/page';
import { Box, Button, Flex, Editable, EditablePreview, EditableInput, Select, Card, CardBody, Text, CardHeader, Heading, Stack, StackDivider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, ModalFooter, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Menu, MenuButton, MenuList, MenuItem, Checkbox, Spinner } from '@chakra-ui/react';
import { EditIcon, AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';


function Content() {
	const deep = useDeep()
	const [loadingSubTasks, setLoadingSubTasks] = useState(false)
	const [listSubTasks, setListSubTasks] = useState([])

	const [nameStatus, setNameStatus] = useState("");

	const { data: statusTypeLinkId } = useDeepId("@l4legenda/status-pipeline", "Status");
	const { data: statusPipelineTypeLinkId } = useDeepId("@l4legenda/status-pipeline", "StatusPipeline");
	const { data: materialTypeLinkId } = useDeepId("@l4legenda/material-pipeline", "Material");
	const { data: contractorTypeLinkId } = useDeepId("@l4legenda/contractor-pipeline", "Contractor");

	const [processName, setProcessName] = useState("Название процесса");

	const [isOpenMaterial, setIsOpenMaterial] = useState(false);
	const [isOpenContractor, setIsOpenContractor] = useState(false);

	const [materialName, setMaterialName] = useState("");
	const [materialCount, setMaterialCount] = useState(0);

	const [contractorName, setContractorName] = useState("");

	const { data: materaislLink, loading: hasLoadingMaterial } = useDeepSubscription({
		type_id: materialTypeLinkId || 0,
		_not: {
			in: {
				type_id: 3
			}
		}
	})

	const onCloseModalMaterial = () => {
		setIsOpenMaterial(false);
	}
	const onOpenModalMaterial = () => {
		setIsOpenMaterial(true);
		setMaterialName("");
		setMaterialCount(0);
	}

	const onCloseModalContractor = () => {
		setIsOpenContractor(false);
	}
	const onOpenModalContractor = () => {
		setIsOpenContractor(true);
		setContractorName("");
	}

	const onCreateMaterial = async () => {
		const materialTypeLinkId = await deep.id("@l4legenda/material-pipeline", "Material")

		await deep.insert({
			type_id: materialTypeLinkId,
			object: {
				data: {
					value: {
						name: materialName,
						count: materialCount,
					}
				}
			},
		})

		onCloseModalMaterial();
	}

	const onCreateContractor = async () => {
		const contractorTypeLinkId = await deep.id("@l4legenda/contractor-pipeline", "Contractor")

		await deep.insert({
			type_id: contractorTypeLinkId,
			object: {
				data: {
					value: {
						name: contractorName,
					}
				}
			},
		})

		onCloseModalContractor();
	}

	const splitTask = async () => {
		setLoadingSubTasks(true);
		const taskTypeLinkId = await deep.id("@deep-foundation/tasks", "Task");
		const dependsOnTypeLinkId = await deep.id("@deep-foundation/tasks", "DependsOn");
		const splitTypeLinkId = await deep.id("@deep-foundation/chatgpt-tasks", "Split");

		const { data: [{ id: taskLinkId }] } = await deep.insert({
			type_id: taskTypeLinkId,
			string: { data: { value: processName } }
		});

		const { data: [{ id: splitLinkId }] } = await deep.insert({
			type_id: splitTypeLinkId,
			from_id: taskLinkId,
			to_id: taskLinkId,
		});

		const handlerAwait = await deep.await(splitLinkId);
		const { data: subTasks } = await deep.select({
			type_id: taskTypeLinkId,
			in: {
				type_id: dependsOnTypeLinkId,
				from_id: taskLinkId,
			}
		})

		console.log(subTasks);
		setListSubTasks([...subTasks.map((subtask => ({
			checked: false,
			name: subtask.value?.value,
		})))])
		setLoadingSubTasks(false);
	}

	const { data: statusPipelineListLink } = useDeepSubscription({
		type_id: statusPipelineTypeLinkId || 0,
	})

	const { data: contractorListLink, loading: hasLoadingContractor } = useDeepSubscription({
		type_id: contractorTypeLinkId || 0,
	})

	const createStatusPipeline = async () => {
		const statusPipelineTypeLinkId = await deep.id('@l4legenda/status-pipeline', 'StatusPipeline')

		const listSubTasksFilter = listSubTasks.filter((subtask) => {
			return subtask.checked
		})

		const { data: [{ id: statusLinkId }] } = await deep.insert({
			type_id: statusPipelineTypeLinkId,
			object: {
				data: {
					value: {
						name: nameStatus,
						pipeline: [...listSubTasksFilter.map((subtask) => {
							return subtask.name
						})],
					}
				}
			},
		})
		setNameStatus("")
		setListSubTasks([]);
	}

	return (
		<Box p={10}>
			<Flex>
				<Flex align="center">
					<Editable value={processName} fontSize={20} onInput={(e: any) => setProcessName(e.target.value)}>
						<EditablePreview />
						<EditableInput />
					</Editable>
				</Flex>
				<Box ml={20}>
					<Flex align={'center'}>Дата начала:
						<Editable defaultValue='2020-12-12' ml={2}>
							<EditablePreview />
							<EditableInput />
						</Editable>
					</Flex>
					<Flex align={'center'}>Дата окончания:
						<Editable defaultValue='2020-12-12' ml={2}>
							<EditablePreview />
							<EditableInput />
						</Editable>
					</Flex>
				</Box>
				<Box ml={'auto'}>
					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
							Предложить статусы
						</MenuButton>
						<MenuList>
							<Button onClick={splitTask} width={'100%'} colorScheme='blue' isLoading={loadingSubTasks}>Создать предложения</Button>
							{listSubTasks.map((subtask, index) => {
								return <Box key={index} width={350} p={2}>
									<Checkbox
										onChange={(e) => {
											listSubTasks[index].checked = true;
											setListSubTasks([...listSubTasks])
										}}>
										{subtask.name}
									</Checkbox>
								</Box>
							})}
							{
								listSubTasks.length > 0 ? <>
									<Input placeholder='Название цепочки статусов' my={4}
										value={nameStatus}
										onInput={(e: any) => { setNameStatus(e.target.value) }}
									/>
									<Button width={'100%'} onClick={createStatusPipeline}>Сохранить</Button>
								</> : <></>
							}

						</MenuList>
					</Menu>
				</Box>
			</Flex>
			<Box mt={6}>
				<Box>Выбор цепочки статусов</Box>
				<Select placeholder='Цепочки статусов' width={300}>
					{statusPipelineListLink.map((status, index) => {
						return <option key={index} value={status.id}>{status.value?.value?.name}</option>
					})}
				</Select>
			</Box>
			<Flex>
				<Box>


					<Card mt={10}>
						<CardHeader>
							<Flex align={"center"}>
								<Heading size='md' mr={4}>Материалы прооцесса</Heading>
								<Button ml="auto" onClick={onOpenModalMaterial}><AddIcon /></Button>
							</Flex>

						</CardHeader>

						<CardBody >
							<Stack divider={<StackDivider />} spacing='4' height={200} overflow={'auto'}>
								{
									hasLoadingMaterial ? <Spinner
										thickness='4px'
										speed='0.65s'
										emptyColor='gray.200'
										color='blue.500'
										size='xl'
									/> : null
								}
								{
									materaislLink.map((material, index) => {
										return <Box key={index}>
											<Heading size='xs' textTransform='uppercase'>
												{material.value?.value?.name}
											</Heading>
											<Text pt='2' fontSize='sm'>
												Количество: {material.value?.value?.count}
											</Text>
										</Box>
									})
								}

							</Stack>
						</CardBody>
					</Card>

					<Card mt={10}>
						<CardHeader>
							<Flex align={"center"}>
								<Heading size='md' mr={4}>Подрядчики</Heading>
								<Button ml="auto" onClick={onOpenModalContractor}><AddIcon /></Button>
							</Flex>

						</CardHeader>

						<CardBody >
							<Stack divider={<StackDivider />} spacing='4' height={200} overflow={'auto'}>
								{
									hasLoadingContractor ? <Spinner
										thickness='4px'
										speed='0.65s'
										emptyColor='gray.200'
										color='blue.500'
										size='xl'
									/> : null
								}
								{
									contractorListLink.map((material, index) => {
										return <Box key={index}>
											<Heading size='xs' textTransform='uppercase'>
												{material.value?.value?.name}
											</Heading>
										</Box>
									})
								}

							</Stack>
						</CardBody>
					</Card>
				</Box>
				<Box>
					<Card mt={10}>
						<CardHeader>
							<Flex align={"center"}>
								<Heading size='md' mr={4}>Зависимые процессы</Heading>
								<Button ml="auto" onClick={onOpenModalMaterial}><AddIcon /></Button>
							</Flex>

						</CardHeader>

						<CardBody >
							<Stack divider={<StackDivider />} spacing='4' height={200} overflow={'auto'}>
								{
									hasLoadingMaterial ? <Spinner
										thickness='4px'
										speed='0.65s'
										emptyColor='gray.200'
										color='blue.500'
										size='xl'
									/> : null
								}
								{
									materaislLink.map((material, index) => {
										return <Box key={index}>
											<Heading size='xs' textTransform='uppercase'>
												{material.value?.value?.name}
											</Heading>
											<Text pt='2' fontSize='sm'>
												Количество: {material.value?.value?.count}
											</Text>
										</Box>
									})
								}

							</Stack>
						</CardBody>
					</Card>
				</Box>
			</Flex>

			{/* Material */}
			<Modal isOpen={isOpenMaterial} onClose={onCloseModalMaterial}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Добавление материала</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input placeholder='Название материала' size='md' value={materialName} onChange={(e) => setMaterialName(e.target.value)} />
					</ModalBody>
					<ModalBody>
						<NumberInput placeholder='Количество материала' value={materialCount} onChange={(e) => setMaterialCount(+e)}>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={onCreateMaterial}>
							Добавить
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			{/* Contractor */}
			<Modal isOpen={isOpenContractor} onClose={onCloseModalContractor}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Добавление подрядчика</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input placeholder='Название подрядчика' size='md' value={contractorName} onChange={(e) => setContractorName(e.target.value)} />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={onCreateContractor}>
							Добавить
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default function CreateProcessPage() {
	return (
		<Page>
			<Content />
		</Page>
	);
}

