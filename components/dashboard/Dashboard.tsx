import { Card, Grid, GridItem, List, ListIcon, ListItem, Spinner, VStack } from "@chakra-ui/react";
import { Circle } from "@mui/icons-material";
import { Gantt } from "gantt-task-react";
import React from "react";
import { tasks } from "./GanttTasks";
import { useDeep, useDeepId, useDeepSubscription } from "@deep-foundation/deeplinks/imports/client";
import { useRouter } from "next/router";

const Dashboard = () => {
    const deep = useDeep();
    const router = useRouter();
    const { id } = router.query;
    const { data: processTypeLinkId } = useDeepId("@l4legenda/process-pipeline", "Process");
    const { data: processLinks, loading: hasLoadingProcess } = useDeepSubscription({
        type_id: processTypeLinkId || 0,
        in: {
            type_id: 3,
            from_id: +id
        }
    });

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
                            {
                                hasLoadingProcess ? <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='sm'
                                /> : null
                            }
                            {
                                processLinks.map((process, index) => {
                                    return <ListItem key={index}>
                                        <ListIcon as={Circle} color='green.500' />
                                        Заливка фундамента
                                    </ListItem>
                                })
                            }
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