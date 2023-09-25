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
			<Button w={"100%"} p={3} onClick={onOpen}>
				{ props.name }
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW={"auto"} w={"fit-content"}>
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
