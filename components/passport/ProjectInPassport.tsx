import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { useDeepId, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import { Text } from '@chakra-ui/react';
import React from 'react';

const ProjectInPassport = () => {
	const { data: processTypeLinkId } = useDeepId("@l4legenda/process-pipeline", "Process");

	const { data: processListLink, loading: hasLoadingProcess } = useDeepSubscription({
		type_id: processTypeLinkId || 0,
	})

	const onProcessClick = () => {

	};

	return (
		<Card h={"100%"}>
			<CardHeader>
				<Heading size='xs'>Выполняемые процессы</Heading>
			</CardHeader>
			<CardBody>
				<Stack divider={<StackDivider />} spacing='4' overflowY="auto" h={370}>
					{
						processListLink.map(process => <Box key={process?.id} onClick={onProcessClick}>
							<Text fontSize='lg' >
								{ process?.value?.value?.name }
							</Text>
							<Text fontSize='sm'>
								{ `c ${process?.value?.value?.date_start} по ${process?.value?.value?.date_end}` }
							</Text>
						</Box>)
					}
				</Stack>
			</CardBody>
		</Card>
	);
}
export default ProjectInPassport;
