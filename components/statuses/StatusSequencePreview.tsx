import React from 'react';
import {
	Button,
	Card, Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text, useDisclosure
} from '@chakra-ui/react';
import StatusSequenceFullPreview from './StatusSequenceFullPreview';

export interface StatusSequencePreviewProps {
	name: string,
	statuses: string[],
}

const StatusSequencePreview = (props: StatusSequencePreviewProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button p={3} marginBottom={2} onClick={onOpen}>
				{ props.name }
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{ props.name }</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<StatusSequenceFullPreview items={props.statuses} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default StatusSequencePreview;
