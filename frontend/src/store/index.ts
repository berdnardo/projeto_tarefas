import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userView: "login",
    adminView: "main",
   
  },
  mutations: {
    login: state => state.userView = "login",
    task: state => state.userView = "task",
    main: state => state.adminView = "main",
    createTask: state => state.adminView = "createTask",
    createUser: state => state.adminView = "createUser"
    
  },
  actions: {},
  modules: {},
});
