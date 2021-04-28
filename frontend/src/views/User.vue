<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-list-item >
        <UserSideNav/>
     </v-list-item>
    
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>e-Crossfit</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-card class="d-flex"  height="100vh" elevation=0>
        <router-view  :name="this.$store.state.userView"/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserSideNav from "../components/UserSideNav.vue";
import UserLogin from "../components/UserLogin.vue";
import UserContent from "../components/UserContent.vue";

@Component({
  components: {
    UserSideNav,
    UserLogin,
    UserContent
  },
  mounted () {
     this.$store.commit("login")
  },
  
})
export default class User extends Vue {
  drawer = false
  
}
</script>

<style>

</style>