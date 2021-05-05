<template>
<v-container> 
     
    <v-card 
    v-for="user in this.users" :key="user"
    class="mx-auto pa-5"
    max-width="100vw">
    <v-card-title class="white--text orange darken-4">
      {{user.name}}

      <v-spacer></v-spacer>

      {{user.email}}

      <v-spacer></v-spacer>

      <v-btn
        color="white"
        class="text--primary"
        fab
        small
        @click="openBox(user.id)"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>    

    <v-divider></v-divider>

    <v-simple-table height="40px">
    <template>
      <thead>
        <tr>
          <th class="text-left">
            Exercício:
          </th>
          <th class="text-left">
            Data de Criação:
          </th>
          <th class="text-left">
            Executado em: 
          </th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      </template>
    </v-simple-table>

    <v-divider v-if="valid == true"></v-divider>

    <v-virtual-scroll
      :items="tasks"
      :item-height="50"
      height="150"
          >
      <template class="d-flex ma-2">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{tasks[0]}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>{{tasks[1]}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>{{tasks[2]}}</v-list-item-title>
          </v-list-item-content>           
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <v-divider></v-divider>
  </v-card>
</v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

@Component({ 

  methods: {
    
    async findUsers () {
      let {...alunos} = await axios
      .get(`http://localhost:3333/users`)
      .then(response => {return response.data});
      return alunos
    },
    
    async findTasks (id) {
      let {tarefas} = await axios
      .get(`http://localhost:3333/tasks/${this.id}`)
      .then(respose => {return respose.data});
      return tarefas
    },
    async openBox (user) {
      this.tasks = await this.findTasks(user);
    }
    
  },

  async mounted () {
    this.users = await this.findUsers();   
    
    
  }
    
})
export default class AdminMainTasks extends Vue {  
  
  valid = false;
  users = null; 
  tasks = "";  
  
}
</script>

<style>

</style>