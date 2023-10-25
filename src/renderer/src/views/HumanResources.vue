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
                <div v-if="!users">
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                    <v-skeleton-loader type="card"></v-skeleton-loader>
                </div>

                <div v-if="users">
                    <v-row v-for="x in Math.ceil(users.length / 3)">
                        
                        <v-col cols="4" v-for="y in 3">
                            <v-card v-if="(x - 1) * 3 + y - 1 < users.length" class="pa-4 border text-center rounded-xl">
                                <v-avatar color="surface-variant" size="x-large">
                                    <v-img :src="users[(x - 1) * 3 + y - 1]['image']" alt="John"></v-img>
                                </v-avatar>
                                <v-card-title>{{ users[(x - 1) * 3 + y - 1]['firstName'] }} {{ users[(x - 1) * 3 + y - 1]['lastName'] }}</v-card-title>
                                <v-card-subtitle>{{ users[(x - 1) * 3 + y - 1]['email'] }}</v-card-subtitle>
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