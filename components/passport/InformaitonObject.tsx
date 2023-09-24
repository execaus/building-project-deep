import {Box, Card, CardBody, CardHeader, Grid, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import MapOnObject from "./MapOnObject";

const InformaitonObject = () => {
	return (
		<Grid templateColumns='repeat(3, 1fr)' gap="1">
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
								"Тут будет имя"
							</Text>
						</Box>
						<Box>
							<Heading size='xs' textTransform='uppercase'>
								Дата начала
							</Heading>
							<Text pt='2' fontSize='sm'>
								01.01.1990
							</Text>
						</Box>
						<Box>
							<Heading size='xs' textTransform='uppercase'>
								Дата окончания
							</Heading>
							<Text pt='2' fontSize='sm'>
								01.01.1990
							</Text>
						</Box>
					</Stack>
				</CardBody>
			</Card>
			<MapOnObject/>
		</Grid>
	);
}

export default InformaitonObject;