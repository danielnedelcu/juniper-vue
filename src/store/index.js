import { createStore } from "vuex";
import productStore from "./productStore";

export default createStore({
  modules: {
    productStore
  }
});
