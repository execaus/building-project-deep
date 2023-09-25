import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";

const Contractors = () => {
	return (
		<Card h={"100%"}>
			<CardHeader>
				<Heading size='xs'>Информация об объекте</Heading>
			</CardHeader>
			<CardBody>
				<Stack divider={<StackDivider />} spacing='4' overflowY="auto" maxHeight="200px">
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Контора 1
						</Heading>
						<Text pt='2' fontSize='sm'>
							Заказчик
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Контора 2
						</Heading>
						<Text pt='2' fontSize='sm'>
							Подрядчик
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Контора 3
						</Heading>
						<Text pt='2' fontSize='sm'>
							Подрядчик
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Контора 4
						</Heading>
						<Text pt='2' fontSize='sm'>
							Подрядчик
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Контора 5
						</Heading>
						<Text pt='2' fontSize='sm'>
							Подрядчик
						</Text>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default Contractors;
