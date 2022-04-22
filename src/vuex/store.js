import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const baseURL = process.env.VUE_APP_BASE_URL;

const store = new Vuex.Store({
  state: {
    proposals: [],
  },
  mutations: {
    SET_PROPOSALS_TO_STATE: (state, proposals) => {
      state.proposals = proposals;
      console.log(proposals);
    },
  },
  actions: {
    GET_PROPOSALS({ commit }) {
      return axios(baseURL + "/v1/proposals", {
        Method: "GET",
      })
        .then((proposals) => {
          commit("SET_PROPOSALS_TO_STATE", proposals.data.results);
          return proposals.data.results;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PROPOSALS(state) {
      return state.proposals;
    },
  },
});

export default store;
