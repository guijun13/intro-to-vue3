<script>
export default {
  props: {
    charactersList: {
      type: Array,
      required: true
    },
  },
  computed: {
          genderStatistics(){
            const genders = ["Male", "Female"];
            const statistics = {
              Male: 0,
              Female: 0
            }

            this.charactersList.forEach(character => {
              genders.forEach(gender => {
                if(character.gender.indexOf(gender) > -1){
                  statistics[gender] += 1
                }
              })
            })

            return statistics;
          }
        },
}
</script>

<template>
    <h2>Statistics</h2>
    <ul>
      <li v-for="(stat, type) in genderStatistics" v-bind:key="type">
        {{ type }}: {{ stat }}
      </li>
    </ul>
</template>