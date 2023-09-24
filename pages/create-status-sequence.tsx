import React, { useState } from 'react';
import { Page } from '../components/page';
import { Box, Button, Card, Grid, Heading, HStack, Input, VStack } from '@chakra-ui/react';
import Status from '../components/statuses/Status';
import { useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates
} from '@dnd-kit/sortable';

function Content() {
	const [statusSequence, setStatusSequence] = useState<{
		name: string,
		id: number,
	}[]>([
		{
			name: 'asdasd1',
			id: 1
		},
		{
			name: 'asdasd2',
			id: 2
		},
		{
			name: 'asdasd3',
			id: 3
		},
		{
			name: 'asdasd4',
			id: 4
		},
		{
			name: 'asdasd5',
			id: 5
		},
		{
			name: 'asdasd6',
			id: 6
		},
	]);

	const [sequenceName, setSequenceName] = useState('')
	const onChange = (ev) => {
		setSequenceName(ev.target.value);
	};

	const { data: statusTypeLinkID } = useDeepId('@l4legenda/status-pipeline', 'Status')

	const { data: statuses } = useDeepSubscription({
		type_id: {
			_eq: statusTypeLinkID,
		}
	})

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			setStatusSequence((items) => {
				const oldItem = items.find(item => item.id === active.id);
				const oldIndex = items.indexOf(oldItem);

				const newItem = items.find(item => item.id === over.id);
				const newIndex = items.indexOf(newItem);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	return (
			<VStack p={ 10 } h={ '100vh' }>
				<HStack w={ '100%' }>
					<Heading>Создание цепочки статусов</Heading>
					<Input w={ 600 } marginLeft={ 'auto' } type={ 'text' } value={ sequenceName } onChange={ onChange }
						   placeholder={ 'Название последовательности' }></Input>
					<Button colorScheme={ 'green' }>Создать</Button>
				</HStack>
				<Grid templateColumns={ '3fr 6fr' } w={ '100%' } h={ '100%' } gap={ 4 }>
					<Card p={ 2 } h={ '100%' }>
						{
							statuses.map(status => <Box marginTop={ 2 } key={ status.id }>
								<Status name={ status.value?.value } id={status.id} isDeleteShow={true}></Status>
							</Box>)
						}
					</Card>
					<Card p={2}>
						<DndContext
							id={"create status sequence list"}
							sensors={ sensors }
							collisionDetection={ closestCenter }
							onDragEnd={ handleDragEnd }
						>
							<SortableContext
								items={ statusSequence }
								strategy={ horizontalListSortingStrategy }
							>
								{ statusSequence.map(status => <Box marginTop={ 2 } key={ status.id }>
									<Status name={ status.name } id={ status.id } isDeleteShow={false}></Status>
								</Box>)
								}
							</SortableContext>
						</DndContext>
					</Card>
				</Grid>
			</VStack>
	);
}

export default function CreateStatusSequencePage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}


