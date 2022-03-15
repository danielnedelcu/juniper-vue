import { MUTATE_ADD_PRODUCTS, MUTATE_MANUFACTURER, MUTATE_MANUFACTURER_NAME } from "../../constants/mutations.type";

const mutations = {

    /**
     * Adds products array to state
     * 
     * @param {*} state 
     * @param {*} arr 
     */
    [MUTATE_ADD_PRODUCTS](state, arr) {    
        state.products = arr;
     },

    /**
     * Adds manufacturer ID to state
     * 
     * @param {*} state 
     * @param {*} str 
     */
    [MUTATE_MANUFACTURER](state, str) {    
        state.manufacturerId = str;
    },

    /**
     * Adds manufacturer name to state
     * 
     * @param {*} state 
     * @param {*} str 
     */
    [MUTATE_MANUFACTURER_NAME](state, str) {    
        state.manufacturerName = str;
     }
}

export default mutations;