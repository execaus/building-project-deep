'use client';

import React, { useState } from 'react';
import {
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
import { useDeep } from '@deep-foundation/deeplinks/imports/client';

const StatusList = () => {
	const deep = useDeep();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [createStatusName, setCreateStatusName] = useState('')
	const handleChange = (event) => setCreateStatusName(event.target.value)

	const onCreateStatus = async () => {
		onClose();

		console.log(await deep.select(1))

		const statusTypeLinkId = await deep.id("@l4legenda/status-pipeline", "Status")

		const {data: [{ id: statusLinkId }]} = await deep.insert({
			type_id: statusTypeLinkId,
			string: {data: {value: createStatusName}},
		})
	};

	return (
		<>
			<Card p={"3"}>
				<HStack>
					<Heading as='h4' size='md'>Статусы</Heading>
					<Button colorScheme="green" onClick={onOpen}>
						<Add/>
					</Button>
				</HStack>
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
