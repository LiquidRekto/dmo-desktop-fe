<script setup>
import { ref } from "vue"

const row1BarList = ref([
    {
        myBeginDate: "2023-10-29 00:00",
        myEndDate: "2023-10-29 12:00",
        ganttBarConfig: {
            // each bar must have a nested ganttBarConfig object ...
            id: "unique-id-1", // ... and a unique "id" property
            label: "Lorem ipsum dolor"
        }
    }
])
const row2BarList = ref([
    {
        myBeginDate: "2023-10-26 00:00",
        myEndDate: "2023-10-27 00:00",
        ganttBarConfig: {
            id: "another-unique-id-2",
            hasHandles: false,
            label: "Hey, look at me",
            style: {
                // arbitrary CSS styling for your bar
                background: "#e09b69",
                borderRadius: "20px",
                color: "black"
            }
        }
    }
])

let breadCrumbList = [
    {
        title: 'History',
        disabled: false,
        href: '/history',
    },
    {
        title: 'schedule_xxx',
        disabled: false,
    },
]
</script>
<template>
    <v-container fluid class="h-screen pa-0">

        <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
            <v-breadcrumbs :items="breadCrumbList"></v-breadcrumbs>
            <h2 class="my-8">Showing generated schedule for schedule_xxx</h2>
            <g-gantt-chart grid class="elevation-3" chart-start="2023-10-26 00:00" chart-end="2023-11-02 00:00" precision="day"
                bar-start="myBeginDate" bar-end="myEndDate">
                <g-gantt-row label="Task 1" :bars="row1BarList" />
                <g-gantt-row label="Task 2" :bars="row2BarList" />
                <g-gantt-row label="Task 3" :bars="row2BarList" />
                <g-gantt-row label="Task 4" :bars="row2BarList" />
                <g-gantt-row label="Task 5" :bars="row2BarList" />
                <g-gantt-row label="Task 6" :bars="row2BarList" />
                <g-gantt-row label="Task 7" :bars="row2BarList" />
                <g-gantt-row label="Task 8" :bars="row2BarList" />
                <g-gantt-row label="Task 9" :bars="row2BarList" />
                <g-gantt-row label="Task 10" :bars="row2BarList" />
            </g-gantt-chart>
        </v-list>
    </v-container>
</template>