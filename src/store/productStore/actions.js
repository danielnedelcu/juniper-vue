import { MUTATE_ADD_PRODUCTS, MUTATE_MANUFACTURER, MUTATE_MANUFACTURER_NAME } from "../../constants/mutations.type";
import Services from '../../services/ApiList'


/**
* Fetchs products list
 * 
 * @param {state} commit 
*/
export async function AssignProducts ({ commit }) {
    try {
        let response = await Services.getProductLits();	   
        commit(MUTATE_ADD_PRODUCTS, response.data.items);
        commit(MUTATE_MANUFACTURER, response.data.ManufacturerID);
        commit(MUTATE_MANUFACTURER_NAME, response.data.CompanyName);

    } catch (e) {
        console.log('Data fetch failure:', e)
    }    
}