<template>
<v-app>
  <v-app-bar app>
    e-Gym
  </v-app-bar>
    <v-main app>
      <v-container fluid>
        <HomeContent/>
      </v-container>
    </v-main>
    <v-footer dark padless>
       <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
    </v-footer>
</v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeContent from "../components/HomeContent.vue";
@Component({
  components: {
  HomeContent,
  },
})
export default class Home extends Vue {
  icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
      ]
    
}
</script>
