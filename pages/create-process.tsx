import { useState } from 'react';
import { Page } from '../components/page';
import { Box, Button, Flex, Editable, EditablePreview, EditableInput, Select, Card, CardBody, Text, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { EditIcon, AddIcon } from '@chakra-ui/icons';
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';

function Content() {
	const deep = useDeep()
	const { data: statusTypeLinkId } = useDeepId("@l4legenda/status-pipeline", "Status");

	const [name, setName] = useState("")

	const { data: statusListLink } = useDeepSubscription({
		type_id: statusTypeLinkId || 0,
	})
	console.log(statusListLink)

	return (
		<Box>
			<Flex>
				<Flex align="center">
					<Editable defaultValue='Название процесса'>
						<EditablePreview />
						<EditableInput />
					</Editable>
				</Flex>
				<Box ml={10}>
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
					<Button>Предложить статусы</Button>
				</Box>
			</Flex>
			<Box>
				<Box>Выбор цепочки статусов</Box>
				<Select placeholder='Цепочки статусов' width={300}>
					{statusListLink.map((status, index) => {
						return <option key={index} value={status.id}>{status.value?.value}</option>
					})}
				</Select>
			</Box>
			<Flex>
				<Card mt={10}>
					<CardHeader>
						<Flex align={"center"}>
							<Heading size='md'>Материалы прооцесса</Heading>
							<Button ml="auto"><AddIcon /></Button>
						</Flex>

					</CardHeader>

					<CardBody>
						<Stack divider={<StackDivider />} spacing='4'>
							<Box>
								<Heading size='xs' textTransform='uppercase'>
									Summary
								</Heading>
								<Text pt='2' fontSize='sm'>
									View a summary of all your clients over the last month.
								</Text>
							</Box>
						</Stack>
					</CardBody>
				</Card>
			</Flex>
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

