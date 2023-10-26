<script setup>
</script>
<template>
    <v-container fluid class="pa-8">
        <h1>Schedule Generator</h1>
        <v-row>
            <v-col cols="12">
                <v-card class="my-6 mx-auto pa-8 border rounded-lg w-75">
                    <v-table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Objective</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="x in 5">
                                <td>{{ x }}</td>
                                <td> Objective {{ x }}</td>
                                <td>
                                    <v-slider hide-details thumb-label step="0.1" min="0.1" max="1" model-value="1"
                                        show-ticks color="primary"></v-slider>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>

            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="text-right">
                    <v-btn color="red">
                        Generate
                    </v-btn>

                </div>
            </v-col>
        </v-row>



    </v-container>
</template>