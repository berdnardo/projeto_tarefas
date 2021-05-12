<template>
  <v-card elevation=9 width="100%" class="d-flex flex-row pa-10 ">

    <v-form
    ref="form"
    v-model="valid"
    lazy-validation>

    <v-text-field
      v-model="name"
      :counter="50"
      :rules="nameRules"      
      label="Nome"
      required
    ></v-text-field> 
    
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail do Aluno"
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
          let user = await this.createUser(this.name, this.email)
          this.$refs.form.reset()
        }
      },

      reset () {
        this.$refs.form.reset()
      },
      
      async createUser (name, email) {
        let user = await axios
        .post(`http://localhost:3333/users`, {
          name: name,
          email: email
        })
      }
  },

    
})
export default class AdminCreateUser extends Vue {

  name = null;
  nameRules= [
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