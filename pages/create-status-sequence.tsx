import React, { useState } from 'react';
import { Page } from '../components/page';
import {
	Alert,
	AlertIcon,
	Box,
	Button,
	Card,
	Grid,
	Heading,
	HStack,
	Input,
	useDisclosure,
	VStack
} from '@chakra-ui/react';
import Status from '../components/statuses/Status';
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates
} from '@dnd-kit/sortable';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function Content() {
	const deep = useDeep()
	const router = useRouter()
	const [statusSequence, setStatusSequence] = useState<{
		name: string,
		id: number,
	}[]>([]);

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

	const {
		isOpen: isVisibleError,
		onClose,
		onOpen,
	} = useDisclosure()

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

	const onCreateSequence = async () => {
		if (sequenceName.length === 0) {
			onOpen();
			setTimeout(() => {
				onClose()
			}, 5000);
			return;
		}

		const statusPipelineTypeLinkId = await deep.id('@l4legenda/status-pipeline', 'StatusPipeline')

		const { data: [{ id: statusLinkId }] } = await deep.insert({
			type_id: statusPipelineTypeLinkId,
			object: {
				data: {
					value: {
						name: sequenceName,
						pipeline: [...statusSequence.map(item => item.name)],
					}
				}
			},
		})

		router.back()
	};

	const onRemove = (id: number) => {
		setStatusSequence(items => {
			return items.filter(item => item.id !== id);
		});
	};

	const onAppend = (status: { name: string, id: number }) => {
		setStatusSequence(items => {
			return [...items, status];
		});
	};

	return (
		<>
			<VStack p={ 10 } h={ '100vh' }>
				<HStack w={ '100%' }>
					<Heading>Создание цепочки статусов</Heading>
					<Input w={ 600 } marginLeft={ 'auto' } type={ 'text' } value={ sequenceName } onChange={ onChange }
						   placeholder={ 'Название последовательности' }></Input>
					<Button colorScheme={ 'green' } onClick={ onCreateSequence }>Создать</Button>
				</HStack>
				<Grid templateColumns={ '3fr 6fr' } w={ '100%' } h={ '100%' } gap={ 4 }>
					<Card p={ 2 } h={ '100%' }>
						{
							statuses.map(status => <HStack marginTop={ 2 } key={ status.id }>
								<Status name={ status.value?.value } id={ status.id } isDeleteShow={ false }></Status>
								<Button onClick={ () => onAppend({ name: status.value?.value, id: status.id }) }>
									<ChevronRight/>
								</Button>
							</HStack>)
						}
					</Card>
					<Card p={ 2 }>
						<DndContext
							id={ 'create status sequence list' }
							sensors={ sensors }
							collisionDetection={ closestCenter }
							onDragEnd={ handleDragEnd }
						>
							<SortableContext
								items={ statusSequence }
								strategy={ horizontalListSortingStrategy }
							>
								{ statusSequence.map(status => <HStack marginTop={ 2 } key={ status.id }>
									<Button onClick={ () => onRemove(status.id) }>
										<ChevronLeft/>
									</Button>
									<Status name={ status.name } id={ status.id } isDeleteShow={ false }></Status>
								</HStack>)
								}
							</SortableContext>
						</DndContext>
					</Card>
				</Grid>
			</VStack>
			{
				isVisibleError ? <div style={ {
					position: 'absolute',
					left: 10,
					top: 10,
					width: 'calc(100% - 20px)',
				} }><Alert status="error">
					<AlertIcon/>
					Для создания последовательности необходимо дать ей название
				</Alert></div> : null
			}
		</>
	);
}

export default function CreateStatusSequencePage() {
	return (
		<Page>
			<Content/>
		</Page>
	);
}


