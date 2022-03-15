export const getProducts = state => state.products;
export const getMenufacturerId = state => state.manufacturerId;
export const getMenufacturerName = state => state.manufacturerName;
export const getProduct = state => id => state.products.filter(item => item.ProductID == Number(id))[0];

