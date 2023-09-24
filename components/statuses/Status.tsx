import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { Delete } from '@mui/icons-material';

export interface StatusProps {
	name: string,
	id?: string,
}

const Status = (props: StatusProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.id});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const onDelete = () => {

	};

	return (
		<HStack ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<Button w={"100%"} p={4}>{ props.name }</Button>
			<Button onClick={onDelete}>
				<Delete />
			</Button>
		</HStack>
	);
};

export default Status;
