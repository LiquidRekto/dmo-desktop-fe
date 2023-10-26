<script setup>
import { onMounted } from 'vue';

onMounted(async () => {

})
</script>
<template>
    <v-container fluid class="pa-0">
        <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
            <h1>History</h1>
            <div class="ma-4 pa-4 border rounded-xl">
                <v-row>
                    <v-col cols="4">
                        <v-text-field variant="outlined" label="Schedule Name"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-checkbox label="Pending"></v-checkbox>
                        <v-checkbox label="Failed"></v-checkbox>
                        <v-checkbox label="Succeeded"></v-checkbox>
                    </v-col>
                    <v-col cols="4">
                        
                    </v-col>
                </v-row>
                <v-row class="pa-8">
                    <v-btn>Search</v-btn>
                </v-row>
            </div>
            <v-table class="border-0">
                <thead>
                    <tr>
                        <th class="text-left w-35">
                            Schedule Name
                        </th>
                        <th class="text-left w-25">
                            Generated at
                        </th>
                        <th class="text-left w-10">
                            Status
                        </th>
                        <th class="text-left w-30">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="x in 10">
                        <td>
                            <v-text-field variant="outlined" placeholder="Type schedule name here" class="py-4" hide-details model-value="schedule_generated_2023_10_25_0110101"></v-text-field>
                        </td>
                        <td class="align-center">
                            2023-10-25 15:00:00 GMT+07
                        </td>
                        <td>
                            <b class="text-red">LMAO'D</b>
                        </td>
                        <td>
                            <v-btn class="mx-3" color="green">View</v-btn>
                            <v-btn class="mx-3" color="red">Delete</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-list>
    </v-container>
</template>
<style>
.belowNavHeight {
    height: calc(100vh - 48px);
}
</style>