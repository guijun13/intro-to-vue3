<script>
import GenderStatistics from './components/GenderStatistics.vue'
import CharacterCard from './components/CharacterCard.vue'

export default {
  components: {
    GenderStatistics,
    CharacterCard
  },
  data: () => ({
    friendsCharactersList: [
      {
        name: 'Ross Geller',
        gender: ['Male']
      },
      {
        name: 'Monica Geller',
        gender: ['Female']
      },
      {
        name: 'Chandler Bing',
        gender: ['Male']
      },
      {
        name: 'Joey Tribbiani',
        gender: ['Male']
      },
      {
        name: 'Rachel Green',
        gender: ['Female']
      },
      {
        name: 'Phoebe Buffay',
        gender: ['Female']
      }
      // {
      //   name: "Janice"
      // }
    ],
    favoriteCharactersList: [],
    newCharacter: {
      name: '',
      gender: ['']
    }
  }),
  methods: {
    addFavorite(payload) {
      this.favoriteCharactersList.push(payload)
    },
    addNewCharacter() {
      this.friendsCharactersList.push(this.newCharacter)
      this.newCharacter = { name: '' }
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="character in friendsCharactersList" v-bind:key="character.name">
      <CharacterCard v-bind:character="character" @favorite="addFavorite" />
    </li>
  </ul>
  <input type="text" v-model="newCharacter.name" @keyup.enter="addNewCharacter" />
  <button @click="addNewCharacter">Add Character</button>
  <!-- </hr> -->
  <h2>Favorite Characters</h2>
  <p v-if="favoriteCharactersList.length === 0">There are no favorite characters yet</p>
  <ul v-else>
    <li v-for="character in favoriteCharactersList" v-bind:key="character.name">
      {{ character.name }}
    </li>
  </ul>

  <GenderStatistics v-bind:charactersList="friendsCharactersList" />
</template>
