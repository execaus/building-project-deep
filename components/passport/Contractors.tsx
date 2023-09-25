import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import { useDeepId, useDeepQuery, useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import { useRouter } from 'next/router';

const Contractors = () => {
	const router = useRouter()
	const { id: projectID } = router.query

	const { data: processTypeLinkId } = useDeepId("@l4legenda/process-pipeline", "Process");

	const { data: processListLink, loading: hasLoadingProcess } = useDeepSubscription({
		type_id: processTypeLinkId || 0,
		in: {
			type_id: 3,
			from_id: +projectID,
		}
	})

	const contractorID = [...(new Set(processListLink.map(process => process?.value?.value?.contractor_id).flat()))]

	const { data: contractorLinks } = useDeepQuery({
		id: {
			_in: contractorID,
		}
	})

	return (
		<Card h={"100%"}>
			<CardHeader>
				<Heading size='xs'>Подрядчики</Heading>
			</CardHeader>
			<CardBody>
				<Stack divider={<StackDivider />} spacing='4' overflowY="auto" h={370}>
					{
						contractorLinks.map(link => <Box key={link.id}>
							<Heading size='xs' textTransform='uppercase'>
								{ link.value?.value?.name }
							</Heading>
						</Box>)
					}

				</Stack>
			</CardBody>
		</Card>
	);
}

export default Contractors;
