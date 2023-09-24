import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export interface StatusProps {
	name: string,
	id?: number,
}

const Status = (props: StatusProps) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({id: props.name});

	const style = {
		transform: CSS.Transform.toString(transform),
		position: 'relative',
		zIndex: attributes['aria-pressed'] ? 1000 : 1,
		transition,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<Button w={"100%"} p={4}>{ props.name }</Button>
		</div>
	);
};

export default Status;
