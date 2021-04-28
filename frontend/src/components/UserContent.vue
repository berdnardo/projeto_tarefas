<template>
  <v-card elevation=0 class="pa-10">
    <v-container fluid v-for="task in tasks" :key="task">
    <v-checkbox 
    color="success" 
    :label="task"
    change=""></v-checkbox>
    <v-divider></v-divider>
    </v-container>
    
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class UserContent extends Vue {

  tasks = [
    "10 Flexões",
    "10 agachamentos"
  ]
}
</script>

<style>

</style>