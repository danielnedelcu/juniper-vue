import Api from './Api'

/**
 * API abstraction for the products service
 */
export default {
    /**
     * Fetch products list data
     * 
     * @type GET
     */
    getProductLits() {
        return Api().get(); 
    }
}