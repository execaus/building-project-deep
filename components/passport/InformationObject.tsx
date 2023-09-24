import {Box, Card, CardBody, CardHeader, Grid, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import MapOnObject from "./MapOnObject";
import Contractors from "./Contractors";

const InformationObject = (props: { name: string, startDate: string, endDate: string }) => {
	return (
		<Grid templateColumns='repeat(3, 1fr)' gap="2">
			<Card marginTop={10}>
				<CardHeader>
					<Heading size='xs'>Информация об объекте</Heading>
				</CardHeader>
				<CardBody>
					<Stack divider={<StackDivider />} spacing='4'>
						<Box>
							<Heading size='xs' textTransform='uppercase'>
								Название проекта
							</Heading>
							<Text pt='2' fontSize='sm'>
								{ props.name }
							</Text>
						</Box>
						<Box>
							<Heading size='xs' textTransform='uppercase'>
								Дата начала
							</Heading>
							<Text pt='2' fontSize='sm'>
								{ props.startDate }
							</Text>
						</Box>
						<Box>
							<Heading size='xs' textTransform='uppercase'>
								Дата окончания
							</Heading>
							<Text pt='2' fontSize='sm'>
								{ props.endDate }
							</Text>
						</Box>
					</Stack>
				</CardBody>
			</Card>
			<Contractors/>
			<MapOnObject/>
		</Grid>
	);
}

export default InformationObject;
