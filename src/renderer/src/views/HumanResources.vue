<script setup>
</script>
<template>
    <v-container fluid class="h-screen pa-0">
        <div >
            <v-list lines="one" class="pa-12 overflow-y-auto overflow-x-hidden belowNavHeight">
                <v-row v-for="x in 10">
                    <v-col cols="4" v-for="y in 3">
                        <v-card class="pa-4 border text-center rounded-xl">
                            <v-avatar color="surface-variant" size="x-large"></v-avatar>
                            <v-card-title>{{ 'Person ' + x * 3 + y + 1 }}</v-card-title>
                            <v-card-subtitle>This is a person name</v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-list>
        </div>

    </v-container>
</template>
<style>
.belowNavHeight {
    height: calc(100vh - 48px);
}
</style>