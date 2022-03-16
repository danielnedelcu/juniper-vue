<template>
  <div class="product__grid--product">
    <figure>
      <img :src="data.PhotoName" />
    </figure>
    <div class="product__grid--text">
        <h3 class="bold">{{ data.ItemName }}</h3>
        <div class="flex-spacer"></div>
        <button @click="$router.push({name: 'product', params: { id: data.ProductID}})">View product</button>
    </div>
  </div>
</template>

<script>
import  store from '../store/index'

export default {
    name: 'product-item',
    store,
    props : {
        data : { type : Object, required : true }
    },

    data () {
      return {
      }
    },
    
    computed: {
      formattedPrice() {
        const format = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
            });

        return format.format(this.data.BasePrice)
      }
    }
}
</script>

<style scoped lang="scss">
  .product__grid--product {
    background-color: white;
    padding: 20px 0;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    .bold {
      font-weight: 600;
    }

    .flex-spacer {
      flex-grow: 1;
    }

    h2 { 
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.02em;
    }

    figure {
      height: 237px;
      background-color: white;
      margin: 0;
      padding: 5%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    button {
      border: 2px solid #E6E6E6;
      background-color: #fff;
      width: 100%;
      padding: 18px 16px;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: -0.01em;
      justify-content: center;
      margin-top: 25px;
      cursor: pointer;
      color: #2b2b2b;
      will-change: transition; 
      transition: 250ms ease-out;
      
      &:hover {
        background-color: #2b2b2b;
        color: white;
      }
    }

    .product__grid--text {
      margin-top: 21px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
      padding: 0 30px;
      text-align: left;

      h3 {
        font-size: 21px;
        line-height: 2rem;
        letter-spacing: 0.02em;
        color: black;
        margin: 0 0 20px;
        width: 70%;
      }

      h4 {
        color: black;
        margin: 20px 0;
        font-size: 25px;
      }

      span {
        font-size: 14px;
        line-height: 20px;
      }

      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        margin: 0 0 12px;
      }
    }
  }
</style>