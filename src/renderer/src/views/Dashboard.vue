<script setup>
import { onMounted, ref } from 'vue';
import { getDashboardSummary } from '../services/misc.api'

let dashboardDat = ref(null)
onMounted(async () => {
    const res = await getDashboardSummary();
    dashboardDat.value = res.data.data

})
</script>
<template>
    <v-container class="pa-4 pt-8 text-center">
        <v-row>
            <v-col>
                <v-icon size="x-large">
                    fa-gauge
                </v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h1>Welcome back!</h1>
            </v-col>
            
        </v-row>
        
        <v-row class="pa-12">
            <v-col cols="4">
                <v-card link to="/hr" class="rounded-xl border overflow-visible">
                    <v-avatar size="x-large" class="border bg-white float-up elevation-3">
                        <v-icon color="primary">fa-user</v-icon>
                    </v-avatar>
                    
                    <p class="text-giant" v-if="!dashboardDat">
                        <v-progress-circular :size="100" :width="10" indeterminate></v-progress-circular>
                    </p>
                    <h1 v-if="dashboardDat" class="text-giant text-primary">{{ dashboardDat.employeeCount }}</h1>
                    <v-card-title size="large">current employees</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card link to="/mng/lines" class="rounded-xl border overflow-visible">
                    <v-avatar size="x-large" class="border bg-white float-up elevation-3">
                        <v-icon color="primary">fa-list-check</v-icon>
                    </v-avatar>
                    <br />
                    <p class="text-giant" v-if="!dashboardDat">
                        <v-progress-circular :size="100" :width="10" indeterminate></v-progress-circular>
                    </p>
                    <b v-if="dashboardDat" class="text-giant text-primary">0</b>
                    <v-card-title>current lines</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card link to="/mng/skills" class="rounded-xl border  overflow-visible">
                    <v-avatar size="x-large" class="border bg-white float-up elevation-3">
                        <v-icon color="primary">fa-screwdriver-wrench</v-icon>
                    </v-avatar>
                    <br />
                    <p class="text-giant" v-if="!dashboardDat">
                        <v-progress-circular :size="100" :width="10" indeterminate></v-progress-circular>
                    </p>
                    <b v-if="dashboardDat" class="text-giant text-primary" >{{ dashboardDat.skillCount }}</b>
                    <v-card-title>current skills</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.belowNavHeight {
    height: calc(100vh - 48px);
}

.text-giant {
    font-size: 8rem;
}

.float-up {
    transform: translateY(-1.5rem);
}
</style>