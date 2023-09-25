import {Task} from "gantt-task-react";

export let tasks: Task[] = [
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
    {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 2, 2),
        name: 'Svarka',
        id: 'Task 1',
        type: 'task',
        progress: 79,
        isDisabled: true,
        styles: {progressColor: '#54c9ff', progressSelectedColor: '#0d62ff'},
    },
];