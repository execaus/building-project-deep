import {Card, Grid, GridItem, List, ListIcon, ListItem, VStack} from "@chakra-ui/react";
import {Circle} from "@mui/icons-material";
import {Gantt} from "gantt-task-react";
import React from "react";
import {tasks} from "./GanttTasks";

const Dashboard = () => {
    return (
        <Grid
            h={'100vh'}
            templateAreas={`"nav main"`}
            gridTemplateRows={'1fr'}
            templateColumns={"1fr 7fr"}
            gap={4}
            p={10}
            marginLeft={-10}
        >
            <GridItem area={"nav"}
                      maxWidth={'100%'}>
                <Card p={3}
                >
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
            <GridItem
                area={"main"}
                overflow={"auto"}
                maxWidth={'100%'}>
                <Card
                    p={3}
                >
                    <Gantt
                        tasks={tasks}
                    />
                </Card>
            </GridItem>
        </Grid>
    )

}

export default Dashboard;