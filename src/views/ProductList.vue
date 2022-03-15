<template>
  <div class="product__grid">
      <product-item v-for="(item, index) in products"
        :key="index" 
        :index="index"
        :data="item"
        class="card"
    />
  </div>
</template>

<script>
import { ASSIGN_PRODUCTS }  from "../constants/actions.type";
import { GETTER_PRODUCTS }  from "../constants/getters.type";
import { mapActions, mapGetters } from 'vuex';
import Product from '../components/Product';

export default {
  name: 'ProductList',
  components : {
    'product-item' : Product
  },    

  computed: {
    ...mapGetters ({
        products : 'productStore/' + GETTER_PRODUCTS
    })
  },

  methods : {
    ...mapActions( {
        fetchProducts: 'productStore/' + ASSIGN_PRODUCTS
    })
  },

  mounted() {
    this.fetchProducts();
  },
}
</script>

<style scoped lang="scss">
.product__grid {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    grid-gap: 12px;
    display: grid;
    width: 100%;
    font-weight: normal;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1366px) {
      width: 75%;
      grid-template-columns: repeat(3, 1fr);
    }
}
</style>