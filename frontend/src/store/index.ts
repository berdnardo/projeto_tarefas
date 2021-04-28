import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userView: "login"
  },
  mutations: {
    login: state => state.userView = "login",
    task: state => state.userView = "task"
  },
  actions: {},
  modules: {},
});
