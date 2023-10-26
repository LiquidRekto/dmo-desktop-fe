<script setup>
import { ref } from 'vue';
import { getUsers } from '../services/test'
import { onMounted } from 'vue';
let users = ref(null)

onMounted(async () => {
    let res = await getUsers()
    users.value = res[1].users
    console.log(users.value)
})

</script>
<template>
    <v-container fluid class="h-screen pa-0">
        <div>

            <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
                <v-row>
                    <v-col cols="6" class="d-flex">
                        <h1 class="">
                            List of employees
                        </h1>
                    </v-col>
                    <v-col cols="6" class="d-flex justify-end align-center">
                        <v-btn v-if="users" prepend-icon="plus" color="green">
                            Add new employee
                        </v-btn>
                    </v-col>
                </v-row>

                <div v-if="!users">
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                </div>

                <div v-if="users">
                    <v-row>
                        <v-col cols="12">
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <v-expansion-panel-title>
                                        <v-icon>fa-filter</v-icon>
                                        <h3 class="ml-4">Filters</h3>
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text class="text-center">
                                        <v-select variant="outlined" v-model="value" :items="['Make money', 'Play some games']" chips
                                            label="Skills" multiple></v-select>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>

                    <v-row v-for="x in Math.ceil(users.length / 3)">

                        <v-col cols="4" v-for="y in 3">
                            <v-card link to="/hr/1" v-if="(x - 1) * 3 + y - 1 < users.length"
                                class="pa-4 border text-center rounded-xl">
                                <v-avatar color="surface-variant" size="x-large">
                                    <v-img :src="users[(x - 1) * 3 + y - 1]['image']" alt="John"></v-img>
                                </v-avatar>
                                <h2>{{ users[(x - 1) * 3 + y - 1]['firstName'] }} {{ users[(x - 1) * 3 + y - 1]['lastName']
                                }}</h2>
                                <h4>
                                    Skills:
                                    <br />
                                    <v-chip class="ma-2" color="primary">
                                        Play some games
                                    </v-chip>
                                    <v-chip class="ma-2" color="error">
                                        Make money
                                    </v-chip>
                                    <v-chip class="ma-2" color="green">
                                        Love plants
                                    </v-chip>
                                    <v-chip class="ma-2" color="orange">
                                        Sunny sides!
                                    </v-chip>
                                    <v-chip class="ma-2" color="warning">
                                        Make amends
                                    </v-chip>
                                </h4>
                                <v-card-title>Age: <b>30</b></v-card-title>
                                <v-card-subtitle>Email: {{ users[(x - 1) * 3 + y - 1]['email'] }}</v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>

            </v-list>
        </div>

    </v-container>
</template>
<style>
.belowNavHeight {
    height: calc(100vh - 48px);
}
</style>