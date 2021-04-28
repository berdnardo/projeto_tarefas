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
             <v-listi-item-icon>
               <v-icon></v-icon>
             </v-listi-item-icon>
              <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
           </v-list-item>
         </v-list>

  </v-container>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";


@Component
export default class AdminSideNav extends Vue {}
</script>

<style>

</style>