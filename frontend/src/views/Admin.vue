<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      app>
     <v-list-item>
        <AdminSideNav/>
     </v-list-item>    
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>e-Gym</v-toolbar-title>
    </v-app-bar>

    <v-main class="ma-6">
      <router-view  :name="this.$store.state.adminView"/>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminSideNav from "../components/AdminSideNav.vue"

@Component({
  components: {
    AdminSideNav
  },

  mounted () {
     this.$store.commit("main")
  },
})
export default class Admin extends Vue {
  drawer = false
  
}
</script>

<style>

</style>