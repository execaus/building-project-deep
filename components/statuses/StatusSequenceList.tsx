import React from 'react';
import { Button, Card, Flex, Heading, HStack } from '@chakra-ui/react';
import StatusSequencePreview from './StatusSequencePreview';
import { Add } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';

const StatusSequenceList = () => {
	const router = useRouter()

	const { data: statusPipelineTypeLinkID } = useDeepId("@l4legenda/status-pipeline", "StatusPipeline")
	const { data: statusPipelines } = useDeepSubscription({
		type_id: {
			_eq: statusPipelineTypeLinkID,
		}
	})

	const onCreate = () => {
		router.push('create-status-sequence');
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
					statusPipelines.map((sequence, index) =>
						<StatusSequencePreview name={sequence.value?.value?.name} statuses={sequence.value?.value?.pipeline} key={index} />
					)
				}
			</Flex>
		</Card>
	);
};

export default StatusSequenceList;
