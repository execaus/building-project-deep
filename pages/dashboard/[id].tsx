import React from 'react';
import {Page} from '../../components/page';
import {Gantt, Task} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import {
    Card,
    Grid,
    GridItem,
    VStack,
    List, ListItem, ListIcon, HStack
} from "@chakra-ui/react";
import {Circle} from "@mui/icons-material";
import {NavBar} from "../../components/navbar";
import { useRouter } from 'next/router';

function Content() {
    const router = useRouter()
    const { id } = router.query

    let tasks: Task[] = [
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 1, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 45,
            isDisabled: true,
            styles: {progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d'},
        },
    ];

    return (
        <HStack h={'100vh'}>
            <NavBar/>
            <Grid
                h={'100vh'}
                templateAreas={`"nav main"`}
                gridTemplateRows={'1fr'}
                templateColumns={"3fr 7fr"}
                gap={4}
                p={4}
            >
                <GridItem area={"nav"}>
                    <Card p={3}>
                        <VStack>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={Circle} color='red.500'/>
                                    Заливка фундамента
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={Circle} color='blue.500'/>
                                    Установка свай
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={Circle} color='purple.500'/>
                                    Очистка строй площадки
                                </ListItem>
                            </List>
                        </VStack>
                    </Card>
                </GridItem>
                <GridItem area={"main"}>
                    <Card
                        p={3}
                    >
                        <Gantt
                            tasks={tasks}
                        />
                    </Card>
                </GridItem>
            </Grid>
        </HStack>
    );
}

export default function DashboardPage() {
    return (
        <Page>
            <Content/>
        </Page>
    );
}

