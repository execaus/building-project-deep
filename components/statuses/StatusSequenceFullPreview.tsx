import React from 'react';
import {
	Button,
	HStack,
	Input, Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay, useDisclosure, VStack
} from '@chakra-ui/react';
import Status from './Status';

export interface StatusSequenceFullPreviewProps {
	items: string[],
}

const StatusSequenceFullPreview = (props: StatusSequenceFullPreviewProps) => {
	return (
		<VStack >
			{
				props.items.map((item, index) => <Status name={ item } key={ index }/>)
			}
		</VStack>
	);
};

export default StatusSequenceFullPreview;
