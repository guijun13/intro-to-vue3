<script>
export default {
  data() {
    return {
      count: 0,
      counterTitle: 'Counter standard',
      incrementAmount: 10
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter is greater than 20'
      } else {
        return 'Counter is less than or equal to 20'
      }
    },
    optimizedAmount() {
      return this.displayTitle.length * this.incrementAmount
    }
  },
  methods: {
    // changeIncrementAmount(event){
    //   this.incrementCount += Number(event.target.value);
    // },
    incrementCount() {
      this.count += this.incrementAmount
    }
  }
}
</script>

<template>
  <h1>Counter</h1>
  <p>{{ count }}</p>
  <button v-on:click="incrementCount">Increment</button>
  <p>{{ displayTitle }}</p>
  <p>{{ optimizedAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <!-- <input type="number" v-bind:value="incrementAmount" v-on:input="changeIncrementAmount"> -->
    <input type="number" v-model="incrementAmount" />
  </div>
</template>
