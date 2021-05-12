<template>
  <v-card elevation=9 width="100%" class="d-flex flex-row pa-10 ">

    <v-form
    ref="form"
    v-model="valid"
    lazy-validation>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail do Aluno"
      required
    ></v-text-field>

    <v-text-field
      v-model="task"
      :counter="50"
      :rules="taskRules"      
      label="Exercício"
      required
    ></v-text-field>      

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate">
      Adicionar
    </v-btn>
    
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar Campos
    </v-btn>    
  </v-form>

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
          let tarefa = await this.addTask(this.id, this.task)
          this.$refs.form.reset()
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

    async addTask (id, task) {
      let add = await axios
      .post(`http://localhost:3333/tasks`, {
        user_id: id,
        tarefa: task,
        done: false
      })
      .then(response => {return response.data})
      return add
    }
    
           
  },

    
})
export default class AdminCreateTask extends Vue {

  task = null;
  taskRules= [
        v => !!v || 'Exercicio deve ser preenchido',
        v => (v && v.length <= 50) || 'Caracteres excedidos',
      ]
  
  id = null;  
  
  valid = true; 
  email = '';
  emailRules = [
    v => !!v || 'E-mail é necessário!',
    v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
  ];
}
</script>

<style>

</style>