import React from 'react';
import {Page} from '../../components/page';
import "gantt-task-react/dist/index.css";
import {
HStack
} from "@chakra-ui/react";
import {NavBar} from "../../components/navbar";
import { useRouter } from 'next/router';
import Dashboard from "../../components/dashboard/Dashboard";

function Content() {
    const router = useRouter()
    const { id } = router.query

    return (
        <HStack>
            <NavBar projectID={id as string}/>
            <Dashboard />
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

