<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>User: {{ route.params.name }}</h1>
</template>
