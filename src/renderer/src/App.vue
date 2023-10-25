<script setup>
import Versions from './components/Versions.vue'
import DefaultLayout from './layouts/DefaultLayout.vue';

</script>

<template>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' data: https://randomuser.me;">
  <DefaultLayout>
    <RouterView/>
  </DefaultLayout>
</template>
