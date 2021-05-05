<template>
  <v-card elevation=9 width="100%" class="d-flex flex-row pa-10 ">

    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      
    >
      Listar
    </v-btn>
    
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar Email
    </v-btn>    
  </v-form>

  <v-card v-if="login == true"
  class="ma-5 d-flex flex-column" width="60%">  
    <v-container fluid v-for="task in this.tasks" :key="task">
    <v-checkbox 
    color="success"
    :label="[task.tarefa]"
    @change="taskDone(task.id)">
    </v-checkbox>
    <v-divider></v-divider>
    </v-container>
  </v-card>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

@Component({
  

  methods: {
      async validate () {
        this.$refs.form.validate()
        if (this.email) {
          this.id = await this.findUserID(this.email) 
          this.tasks = await this.findTasks(this.id)
          this.login = true;
        }
      },

      reset () {
        this.$refs.form.reset()
      },
      
      async findUserID (email) {
      let {id} = await axios
      .get(`http://localhost:3333/users/${email}`)
      .then(response =>{return response.data});
      return id      
    },

    async findTasks (id) {
      let {...tarefas} = await axios
      .get(`http://localhost:3333/tasks/${this.id}`)
      .then(respose => {return respose.data});
      return tarefas
    },

    async taskDone (id) {
      let done = await axios
      .put(`http://localhost:3333/tasks/${id}`)
      .then(respose => {return respose.data});
      return done
    }
           
  },

    
})
export default class UserContent extends Vue {

  tasks = null;
  id = null;
  login = false
  
  valid = true 
  email = ''
  emailRules = [
    v => !!v || 'E-mail é necessário!',
    v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
  ]
}
</script>

<style>

</style>