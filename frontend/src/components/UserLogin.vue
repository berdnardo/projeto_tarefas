<template>
  <v-card width="100%" class="pa-16">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
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
      label="E-mail"
      required
    ></v-text-field>    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Login
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar Formulário
    </v-btn>    
  </v-form>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
   methods: {
      validate () {
        this.$refs.form.validate()
        this.$store.commit("task")
      },
      reset () {
        this.$refs.form.reset()
      },      
    }
})
export default class UserLogin extends Vue {

  valid =true
  name = ''
  nameRules = [
    v => !!v || 'Name é necessário!!',
    v => (v && v.length <= 50) || 'Nome deve ter menos de 50 caracteres!',
  ]
  email = ''
  emailRules = [
    v => !!v || 'E-mail é necessário!',
    v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
  ]
  

}
</script>

<style>

</style>