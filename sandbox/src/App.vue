<script>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';

export default {
    components: {
      BaseCounter,
      UserCard,
    },
    data() {
          return {
            message: "Hello, Vue 3",
            listOfNumbers: [1, 2, 3, 4, 5],
            listOfObjects: [
              { name: "John", age: 30, favColors: ["red", "blue"] },
              { name: "Jane", age: 25, favColors: ["green", "yellow"] },
              { name: "Jake", age: 35, favColors: ["purple", "orange"]},
              { name: "Jill", age: 40, favColors: ["black", "white"]}
            ],
            user: {
              name: "John Doe",
              age: 30,
              email: "johndoe@gmail.com",
              favoriteFood: "Pizza"
            }
          };
        },
        watch: {
          count(newValue){
            console.log('watch: ', newValue);
          }
        },
        computed: {
          refinedUserData(){
            return{
              name: this.user.name,
              food: this.user.favoriteFood,
            }
          }
        },
        methods: {
          changeName(){
            this.user.name = "Jane Doe";
          }
        }
      }
</script>

<template>
      <UserCard :user="refinedUserData" v-on:changeName="changeName"/>
      <!-- <button @click="changeName">change now</button> -->

      <BaseCounter />

      <hr />

      <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
      <p v-else>Odd: {{ message }}</p>

      <ul v-for="(item, index) in listOfObjects" :key="`item-${index}`">
        <li>
          {{ item.name }} is {{ item.age }} years old.
          <ul>
            <li v-for="(colors, index) in item.favColors" :key="`item-${index}`">{{ colors }}</li>,
          </ul>
        </li>
      </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>./components/BaseCounter.vue
