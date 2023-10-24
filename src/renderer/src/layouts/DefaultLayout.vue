<script setup>
const props = defineProps({
    api: Object
})
</script>
<template>
    <v-toolbar color="primary" id="title-bar" density="compact">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-title>DENSO Manpower Optimization Program</v-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon small>fa-window-minimize</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon small>fa-regular fa-window-maximize</v-icon>
        </v-btn>

        <v-btn @click="api.close()" icon>
            <v-icon small>fa-xmark</v-icon>
        </v-btn>
    </v-toolbar>

    <body>
        <slot></slot>
    </body>
</template>
<style>
html,
body {
    margin: 0 !important;
    font-family: Arial
}

#title-bar {
    -webkit-app-region: drag;
}

#title-bar button{
    -webkit-app-region: no-drag;
}

</style>