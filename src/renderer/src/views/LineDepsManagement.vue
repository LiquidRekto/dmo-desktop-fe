<script setup>
import { ref } from 'vue';
import DiagramCanvas from '../components/DiagramCanvas.vue';
let drawer = ref(false);
let key = ref(null)
window.api.receive('re-drawer-interact', (data) => {
    drawer.value = data.isOpen;
})

window.api.receive('re-update-node-data', (data) => {
    key.value = data.key.key
    console.log(key.value)
})

</script>
<template>
    <v-container fluid class="h-screen pa-0">
        <DiagramCanvas styleClass="belowNavHeight" :drawer="drawer" />
        <v-navigation-drawer color="blue-grey-lighten-5" class="drawer" v-model="drawer" permanent location="bottom">
            <div class="text-center">
                <v-btn color="primary" @click.stop="drawer = !drawer" icon style="transform: translateY(-25px);" class="text-center">
                    <v-icon>fa-chevron-down</v-icon>
                </v-btn>
            </div>

            <v-list-item link>
                <v-list-item-title>{{ key  }}</v-list-item-title>
            </v-list-item>
        </v-navigation-drawer>
    </v-container>
</template>
<style>
.v-navigation-drawer__content {
  overflow: visible !important;
}


</style>