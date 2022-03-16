import { createStore } from "vuex";
import productStore from "./productStore";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    productStore
  },
  plugins: [createPersistedState()]
});
