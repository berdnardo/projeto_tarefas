<template>
  <v-container>

    <v-list-item-content>
          <v-list-item-title class="title">
            Professor
          </v-list-item-title>
          <v-list-item-subtitle>
            Opções de navegação
          </v-list-item-subtitle>
        </v-list-item-content>

         <v-divider></v-divider>

         <v-list>
           <v-list-item to="/">             
              <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
           </v-list-item>

           <v-list-item @click="goToMain()">             
              <v-list-item-content>
            <v-list-item-title>Listar Alunos</v-list-item-title>
          </v-list-item-content>
           </v-list-item>

          <v-list-item @click="goAddTask()">             
              <v-list-item-content>
            <v-list-item-title>Adicionar Exercício</v-list-item-title>
          </v-list-item-content>
           </v-list-item>

         <v-list-item @click="goAddUser()">             
              <v-list-item-content>
            <v-list-item-title>Adicionar Aluno</v-list-item-title>
          </v-list-item-content>
           </v-list-item>
         </v-list>

  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";


@Component({
  methods: {
    goAddTask() {
      this.$store.commit("createTask")
    },

    goAddUser() {
      this.$store.commit("createUser")
    },

    goToMain() {
      this.$store.commit("main")
    }
  }
})
export default class AdminSideNav extends Vue {}
</script>

<style>

</style>