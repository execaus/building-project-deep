import React from 'react';
import { Button, Card } from '@chakra-ui/react';

export interface StatusSequencePreviewProps {
	name: string,
}

const StatusSequencePreview = (props: StatusSequencePreviewProps) => {
	return (
		<Button p={3} marginBottom={2}>
			{ props.name }
		</Button>
	);
};

export default StatusSequencePreview;
