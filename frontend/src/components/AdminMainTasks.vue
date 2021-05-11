<template>
<v-container> 
     
    <v-card 
    
    class="ma-5 pa-5"
    max-width="100vw">
    <v-card-title class="white--text orange darken-4">
     {{this.name}}

      <v-spacer></v-spacer>

      {{this.email}}

      <v-spacer></v-spacer>

      
    </v-card-title>    

    <v-divider></v-divider>

    <v-simple-table fixed-header height="200px">
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
          <tr v-for="task in this.tasks" :key="task">
            <td>{{task.tarefa}}</td>
            <td>{{formatDate(task.created_at)}}</td>
            <td>{{formatDate(task.updated_at)}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    
    </v-card>
</v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import VueAxios from "vue-axios";
import dayjs from "dayjs"
Vue.use(VueAxios, axios, dayjs);

@Component({ 

  methods: {

    async findTasks (id) {
      let tarefas = await axios
      .get(`http://localhost:3333/tasks/${id}`)
      .then(respose => {return respose.data});
      return tarefas
    },

    formatDate(number) {
      let date = dayjs(number).format("DD/MM/YYYY HH:mm:ss");
      return date
    }

    
    
    
  },

  async mounted () {
    this.tasks = await this.findTasks(this.id)  
    
  },

  props: {

    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
    
})
export default class AdminMainTasks extends Vue {
  tasks = null; 
    
}
</script>

<style>

</style>