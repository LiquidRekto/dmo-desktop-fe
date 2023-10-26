<script setup>
import { ref } from 'vue';

let maximizeState = ref("fa-regular fa-window-maximize")


window.api.receive("re-maximize-state", (data) => {
    if (data.isMaximized) {
        maximizeState.value = "fa-regular fa-window-restore"
    } else {
        maximizeState.value = "fa-regular fa-window-maximize"
    }
})


let funcHanlder = (ev) => {
    switch (ev) {
        case "close":
            window.api.send("ev-close");
            break;
        case "minimize":
            window.api.send("ev-minimize");
            break;
        case "toggle-maximize":
            window.api.send("ev-toggle-maximize");
            break;

    }
}

let drawer = ref(null);

const toggleDrawer = () => {
    drawer.value = !drawer.value
}


</script>
<template>
    <v-app>
        <!-- toolbar section -->
        <v-app-bar color="primary" class="fixed" id="title-bar" density="compact">
            <v-app-bar-nav-icon @click="toggleDrawer" size="small"></v-app-bar-nav-icon>
            <v-app-bar-title>DENSO Manpower Optimization Program</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn size="x-small" @click="funcHanlder('minimize')" icon>
                <v-icon small>fa-window-minimize</v-icon>
            </v-btn>

            <v-btn size="x-small" @click="funcHanlder('toggle-maximize')" icon>
                <v-icon small>{{ maximizeState }}</v-icon>
            </v-btn>

            <v-btn size="small" @click="funcHanlder('close')" icon>
                <v-icon large>fa-xmark</v-icon>
            </v-btn>
        </v-app-bar>
        <!-- sidebar section -->


        <v-navigation-drawer class="pa-2" temporary v-model="drawer" width="350">
            <v-list>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/" title="Dashboard"
                    prepend-icon="gauge"></v-list-item>
                <v-divider class="ma-2"></v-divider>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/hr" title="Human Resources"
                    prepend-icon="users"></v-list-item>

                <v-list-group value="Lmao">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="bars-progress" title="Line Management"></v-list-item>
                    </template>


                    <v-list-item class="rounded-lg pl-0" color="primary" @click="toggleDrawer" link to="/mng/lines"
                        title="Lines" prepend-icon="diagram-project"></v-list-item>
                    <v-list-item class="rounded-lg pl-0" color="primary" @click="toggleDrawer" link to="/mng/lines/dependencies"
                        title="Line Dependencies" prepend-icon="diagram-predecessor"></v-list-item>


                    <!-- Add more items as needed -->
                </v-list-group>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/mng/skills"
                    title="Skills Management" prepend-icon="clipboard-list"></v-list-item>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/history" title="History"
                    prepend-icon="clock-rotate-left"></v-list-item>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/schedule" title="Schedule"
                    prepend-icon="calendar-days"></v-list-item>
                <v-list-item class="rounded-lg" color="primary" @click="toggleDrawer" link to="/setting" title="Settings"
                    prepend-icon="gear"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <body class="h-screen">
            <v-main class="">
                <v-content>
                    <slot></slot>
                </v-content>

            </v-main>
        </body>
    </v-app>
</template>
<style>
html,
body {
    margin: 0 !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-y: hidden !important;
}

#title-bar {
    -webkit-app-region: drag;
}

#title-bar button {
    -webkit-app-region: no-drag;
}
</style>