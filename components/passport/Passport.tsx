import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Grid,
	GridItem,
	Heading,
	Image,
	Stack,
	StackDivider,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import ProjectInPassport from './ProjectInPassport';
import { useDeepSubscription } from '@deep-foundation/deeplinks/imports/client';
import Contractors from './Contractors';
import MapOnObject from './MapOnObject';
import { useRouter } from 'next/router';

const Passport = (props: { projectID: string }) => {
	const router = useRouter()

	const { data: project } = useDeepSubscription({
		id: {
			_eq: +props.projectID,
		}
	})

	return (
		<Box p={ 4 }>
			<Heading as="h1" fontSize="38" textAlign="left" marginBottom={ 2 }>
				Паспорт объекта
			</Heading>
			<Grid templateColumns={ 'repeat(3, 1fr)' } templateRows={ 'repeat(2, 1fr)' } gap={ 4 }>
				<GridItem>
					<Image src="https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mnogoetazhnyh-domov-20.jpg"
						   alt="Паспорт обьекта"
						   border="2px solid gray"/>
				</GridItem>
				<GridItem>
					<ProjectInPassport/>
				</GridItem>
				<GridItem>
					<Button marginBottom={ 'auto' } marginLeft={ 'auto' }
							onClick={ () => router.push(`/create-process/${ props.projectID }`) }>Добавить
						процесс</Button>
				</GridItem>
				<GridItem>
					<Card h={ '100%' }>
						<CardHeader>
							<Heading size="xs">Информация об объекте</Heading>
						</CardHeader>
						<CardBody>
							<Stack divider={ <StackDivider/> } spacing="4">
								<Box>
									<Heading size="xs" textTransform="uppercase">
										Название проекта
									</Heading>
									<Text pt="2" fontSize="sm">
										{ project?.[0]?.value?.value?.name || '' }
									</Text>
								</Box>
								<Box>
									<Heading size="xs" textTransform="uppercase">
										Дата начала
									</Heading>
									<Text pt="2" fontSize="sm">
										{ project?.[0]?.value?.value?.startDate || '' }
									</Text>
								</Box>
								<Box>
									<Heading size="xs" textTransform="uppercase">
										Дата окончания
									</Heading>
									<Text pt="2" fontSize="sm">
										{ project?.[0]?.value?.value?.endDate || '' }
									</Text>
								</Box>
							</Stack>
						</CardBody>
					</Card>
				</GridItem>
				<GridItem>
					<Contractors/>
				</GridItem>
				<GridItem>
					<MapOnObject/>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default Passport;
