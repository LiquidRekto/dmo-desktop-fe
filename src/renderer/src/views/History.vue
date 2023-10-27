<script setup>
import { onMounted } from 'vue';

onMounted(async () => {

})
</script>
<template>
    <v-container fluid class="pa-0">
        <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
            <v-row>
                <v-col cols="6">
                    <h1>History</h1>
                </v-col>
                <v-col cols="6" class="d-flex justify-end align-center">
                        <v-btn prepend-icon="arrow-rotate-right">
                            Refresh
                        </v-btn>
                    </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                <v-icon>fa-filter</v-icon>
                                <h3 class="ml-4">Filters</h3>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="text-center">
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field variant="outlined" label="Schedule Name"></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-select variant="outlined"  v-model="value" :items="['Pending','Failed','Succeeded']" chips
                                            label="Skills" multiple></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="d-flex justify-end align-center">
                                        <v-btn color="primary">Search</v-btn>
                                    </v-col>
                                </v-row>

                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card class="px-12 py-4 elevation-3 rounded-lg border">
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
                                        <v-text-field variant="outlined" placeholder="Type schedule name here" class="py-4"
                                            hide-details model-value="schedule_generated_2023_10_25_0110101"></v-text-field>
                                    </td>
                                    <td class="align-center">
                                        2023-10-25 15:00:00 GMT+07
                                    </td>
                                    <td>
                                        <b class="text-red">LMAO'D</b>
                                    </td>
                                    <td>
                                        <v-btn link to="/history/1" class="mx-3" color="green">View</v-btn>
                                        <v-btn class="mx-3" color="red">Delete</v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card>
                </v-col>
            </v-row>

        </v-list>
    </v-container>
</template>
<style>
.belowNavHeight {
    height: calc(100vh - 48px);
}
</style>