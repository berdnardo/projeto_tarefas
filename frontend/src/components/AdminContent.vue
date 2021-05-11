<template>
<v-container >
  <div v-for="user in this.users" :key="user">


  <AdminMainTasks :name="user.name" :email="user.email" :id="user.id" />

  </div>
</v-container>

</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import VueAxios from "vue-axios";
import AdminMainTasks from "./AdminMainTasks.vue"

Vue.use(VueAxios, axios);
@Component({
  components: {
    AdminMainTasks,
  },

  methods: {
    async findAllUsers() {
      let alunos = await axios
      .get(`http://localhost:3333/users`)
      .then(respose => {return respose.data});
      return alunos
    }
  },

  async mounted () {
    this.users = await this.findAllUsers()  
  }
})
export default class AdminContent extends Vue {
users = null
}
</script>

<style>

</style>