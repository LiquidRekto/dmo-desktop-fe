<script setup>
import { ref } from 'vue';
import DiagramCanvas from '../components/DiagramCanvas.vue';
let drawer = ref(false);
let key = ref(null);
let lineData = ref(null);
let refStart = ref(0)
let refDuration = ref(0)
let refTaskName = ref('')
let refConnectedTasks = ref([])
window.api.receive('re-drawer-interact', (data) => {
    drawer.value = data.isOpen;
})

window.api.receive('re-update-node-data', (data) => {
    refStart.value = data.start;
    refDuration.value = data.duration;
    refTaskName.value = data.taskName;
})
let showAlert = true
</script>
<template>
    <v-container fluid class="h-screen pa-0">
        <DiagramCanvas styleClass="belowNavHeight no-overflow" :drawer="drawer" />
        <v-navigation-drawer color="blue-grey-lighten-5" class="drawer" v-model="drawer" permanent location="bottom">
            <div class="text-center">
                <v-btn color="primary" @click.stop="drawer = !drawer" icon style="transform: translateY(-25px);"
                    class="text-center">
                    <v-icon>fa-chevron-down</v-icon>
                </v-btn>
            </div>

            <v-row class="px-12">
                <v-col cols="4">
                    <v-text-field variant="outlined" label="Start" :model-value="refStart"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field variant="outlined" label="Duration" :model-value="refDuration"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field variant="outlined" label="Task Name" :model-value="refTaskName"></v-text-field>
                </v-col>
            </v-row>

            <v-row class="px-12">
                <v-col cols="4">
                </v-col>
                <v-col cols="4">
                    <v-select variant="outlined"  v-model="refConnectedTasks" :items="['Pending','Failed','Succeeded']" chips
                                            label="Connected to" multiple></v-select>
                </v-col>
                <v-col cols="4">
                </v-col>
            </v-row>
        </v-navigation-drawer>
    </v-container>
</template>
<style>

.v-navigation-drawer__content {
    overflow: visible !important;
}
</style>