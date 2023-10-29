<script setup>
import { ref } from 'vue';
import { getUsers } from '../services/test'
import { onMounted } from 'vue';
import { getAllEmployees } from '../services/employee.api';
import { getAllSkills } from '../services/skills.api';
let users = ref(null)
let skillsFilterArr = ref(null)
let filterSkills = ref([])

const loadSkills = async () => {
    if (skillsFilterArr.value == null) {
        let resSkill = await getAllSkills()
        skillsFilterArr.value = resSkill.data.data.map(obj => obj.skillName)
    }
}

onMounted(async () => {
    let res = await getAllEmployees()
    console.log(res)
    users.value = res.data.data
    await loadSkills();
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
                                        <v-select variant="outlined" v-model="filterSkills" :items="skillsFilterArr" chips
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
                                    <v-img :src="users[(x - 1) * 3 + y - 1]['avatarUrl']" :alt="users[(x - 1) * 3 + y - 1]['firstName']"></v-img>
                                </v-avatar>
                                <h2>{{ users[(x - 1) * 3 + y - 1]['firstName'] }} {{ users[(x - 1) * 3 + y - 1]['lastName']
                                }}</h2>
                                <h4>
                                    Skills:
                                    <br />
                                    <v-chip v-for="t in users[(x - 1) * 3 + y - 1]['skills']" class="ma-2" color="primary">
                                        {{ t.skillName}}
                                    </v-chip>
                                </h4>
                                <v-card-title>Age: <b>{{ users[(x - 1) * 3 + y - 1]['age'] }}</b></v-card-title>
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