<template>

  <v-img 
    src="../assets/backgroundTheme.jpg"
    max-height="80vh"
    class="d-flex justify-end align-center"
  >
    <v-card class="d-flex align-center justify-center transparent" elevation="0">
      <v-card >
       <v-menu offset-x transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Entrar
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/user" @click="login">
          <v-list-item-title>Usuario</v-list-item-title>
        </v-list-item>
        <v-divider black></v-divider>
        <v-list-item to="/admin">
          <v-list-item-title>Professor</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-card>
    </v-card>      
  </v-img>
    
    
  
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  
})
export default class HomeContent extends Vue {}
</script>

<style>



</style>