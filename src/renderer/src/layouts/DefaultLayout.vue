<script setup>
import { ref } from 'vue';

let maximizeState = ref("fa-regular fa-window-maximize")

let handler = (event, data) => {
    console.log(data)
}

window.api.receive("re-maximize-state", handler)

// if (data.isMaximized) {
//         maximizeState.value = "fa-regular fa-window-restore"
//     } else {
//         maximizeState.value = "fa-regular fa-window-maximize"
//     }

let funcHanlder = (ev) => {
    switch(ev) {
        case "close":
            window.api.send("ev-close");
            break;
        case "minimize":
            window.api.send("ev-minimize");
            break;
        case "toggle-maximize":
            window.api.send("ev-toggle-maximize",{card: "concax"});
            break;

    }
}

</script>
<template>
    <v-toolbar color="primary" id="title-bar" density="compact">
        <v-app-bar-nav-icon size="small"></v-app-bar-nav-icon>
        <v-title>DENSO Manpower Optimization Program</v-title>
        <v-spacer></v-spacer>
        <v-btn size="x-small" @click="funcHanlder('minimize')" icon>
            <v-icon small>fa-window-minimize</v-icon>
        </v-btn>

        <v-btn size="x-small" @click="funcHanlder('toggle-maximize')" icon>
            <v-icon small>{{maximizeState}}</v-icon>
        </v-btn>

        <v-btn size="small"  @click="funcHanlder('close')" icon>
            <v-icon large>fa-xmark</v-icon>
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