<script>
  export default{
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    emits: ['changeName']
  }

</script>

<template>
  <h1>{{ user.name }}</h1>
  <p>{{ user.food }}</p>
  <button @click="$emit('changeName')">Change name</button>
  </template>