import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userView: "login",
    adminView: "main",
    emailUser: "",
  },
  mutations: {
    login: state => state.userView = "login",
    task: state => state.userView = "task",
    main: state => state.adminView = "main",
    emailUser (state, payload) {
      state.emailUser = payload.amount
    },
  },
  actions: {},
  modules: {},
});
