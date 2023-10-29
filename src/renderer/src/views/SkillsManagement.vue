<script setup>
import { onMounted, ref } from 'vue';
import { getAllSkills } from '../services/skills.api'

let skillsDat = ref(null)
onMounted(async () => {
    const res = await getAllSkills()
    skillsDat.value = res.data.data

})
</script>
<template>
    <v-container fluid class="pa-0">
        <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
            <v-row>
                <v-col cols="6" class="d-flex">
                    <h1 class="">
                        List of skills
                    </h1>
                </v-col>
                <v-col cols="6" class="d-flex justify-end align-center">
                    <v-btn v-if="skillsDat" prepend-icon="plus" color="green">
                        Add new skill
                    </v-btn>
                </v-col>
            </v-row>
            <div v-if="!skillsDat">
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                </div>
            <v-row v-if="skillsDat">
                <v-col cols="12">
                    <v-card class="px-8 elevation-3 rounded-lg border">
                    <v-table class="border-0">
                        <thead>
                            <tr>
                                <th class="text-left w-5">
                                    #
                                </th>
                                <th class="text-left w-20">
                                    Skill Name
                                </th>
                                <th class="text-left w-40">
                                    Skill Description
                                </th>
                                <th class="text-left w-35">
                                    In which lines?
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="x in skillsDat">
                                <td>{{ x.id }}</td>
                                <td class="align-center">
                                    <v-text-field class="py-2" hide-details variant="outlined" placeholder="Your skill name"
                                        :model-value="x.skillName"></v-text-field>
                                </td>
                                <td>
                                    <v-textarea class="py-2" hide-details variant="outlined" placeholder="Your skill name"
                                        :model-value="x.skillDescription"></v-textarea>
                                </td>
                                <td>
                                    <v-chip class="ma-2">
                                        Default
                                    </v-chip>

                                    <v-chip class="ma-2" color="primary">
                                        Primary
                                    </v-chip>

                                    <v-chip class="ma-2" color="secondary">
                                        Secondary
                                    </v-chip>

                                    <v-chip class="ma-2" color="red" text-color="white">
                                        Red Chip
                                    </v-chip>

                                    <v-chip class="ma-2" color="green" text-color="white">
                                        Green Chip
                                    </v-chip>
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
tr {}

.belowNavHeight {
    height: calc(100vh - 48px);
}
</style>