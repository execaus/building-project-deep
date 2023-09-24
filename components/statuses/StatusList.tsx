'use client';

import React, { useState } from 'react';
import {
	Box,
	Button, Card,
	Heading,
	HStack, Input,
	Modal, ModalBody, ModalCloseButton,
	ModalContent, ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure
} from '@chakra-ui/react';
import { Add } from '@mui/icons-material';
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import Status from './Status';

const StatusList = () => {
	const deep = useDeep();
	const { data: statusTypeLinkID } = useDeepId("@l4legenda/status-pipeline", "Status")
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [createStatusName, setCreateStatusName] = useState('')
	const handleChange = (event) => setCreateStatusName(event.target.value)

	const { data: statuses } = useDeepSubscription({
			type_id: {
				_eq: statusTypeLinkID,
			}
		})

	const onCreateStatus = async () => {
		onClose();

		const statusTypeLinkId = await deep.id("@l4legenda/status-pipeline", "Status")

		const {data: [{ id: statusLinkId }]} = await deep.insert({
			type_id: statusTypeLinkId,
			string: {data: {value: createStatusName}},
		})
	};

	return (
		<>
			<Card p={"3"} >
				<HStack>
					<Heading as='h4' size='md'>Статусы</Heading>
					<Button colorScheme="green" onClick={onOpen} marginLeft={"auto"}>
						<Add/>
					</Button>
				</HStack>
				{
					statuses.map((status, index) => <Box marginTop={2}>
						<Status name={status.value?.value} key={index}></Status>
					</Box>)
				}
			</Card>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Добавление статуса</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input placeholder='Название статуса' size='md' value={createStatusName} onChange={handleChange}/>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={onCreateStatus}>
							Создать
						</Button>
						<Button variant='ghost'>Добавить</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default StatusList;
