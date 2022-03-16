<template>
  <header>
    <figure>
      <img :src="logo" />
    </figure>
    <span>{{name}}</span>
  </header>
</template>

<script>
import { GETTER_MANUFACTURER, GETTER_MANUFACTURER_NAME }  from "../constants/getters.type";
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderItem',

  computed: {
    ...mapGetters ({
        id : 'productStore/' + GETTER_MANUFACTURER,
        name: 'productStore/' + GETTER_MANUFACTURER_NAME
    }),

    logo() {
      return `http://images.repzio.com/productimages/${this.id}/logo${this.id}_lg.jpg`
    }
  }
}
</script>

<style scoped lang="scss">
  header {
    background-color: #fff;
    height: 70px;
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(73, 102, 123, 0.35);
    margin: 0 15px 0 0;
    padding: 0 15px;

    figure {
      margin: 0 15px 0 0;

      img {
        width: 50px;
      }
    }
  }
</style>