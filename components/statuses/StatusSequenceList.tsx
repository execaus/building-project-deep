import React from 'react';
import { Box, Button, Card, Flex, Heading, HStack } from '@chakra-ui/react';
import StatusSequencePreview from './StatusSequencePreview';
import { Add, ChevronRight, Delete } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useDeep, useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';

const StatusSequenceList = () => {
	const router = useRouter()
	const deep = useDeep()

	const { data: statusPipelineTypeLinkID } = useDeepId("@l4legenda/status-pipeline", "StatusPipeline")
	const { data: statusPipelines } = useDeepSubscription({
		type_id: {
			_eq: statusPipelineTypeLinkID,
		}
	})

	const onCreate = () => {
		router.push('create-status-sequence');
	};

	const onRemove = async (id: number) => {
		await deep.delete({id: id})
	};

	return (
		<Card p={4}>
			<HStack paddingBottom={2}>
				<Heading as='h4' size='md' marginBottom={4}>Цепочки статусов</Heading>
				<Button colorScheme="green" onClick={onCreate} marginLeft={"auto"}>
					<Add/>
				</Button>
			</HStack>
			<Flex justifyContent={"left"} flexDirection={"column"}>
				{
					statusPipelines.map((sequence) =>
						<Box key={sequence.value?.id} marginBottom={2}>
							<HStack >
								<StatusSequencePreview name={sequence.value?.value?.name} statuses={sequence.value?.value?.pipeline} />
								<Button onClick={ () => onRemove(sequence.id) }>
									<Delete/>
								</Button>
							</HStack>
						</Box>
					)
				}
			</Flex>
		</Card>
	);
};

export default StatusSequenceList;
