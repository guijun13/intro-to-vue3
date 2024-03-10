
<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  emits: ['favorite'],
  methods: {
    favorite() {
      this.$emit('favorite', this.character);
    },
  }
}
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="favorite">Favorite</button>
  </div>
</template>