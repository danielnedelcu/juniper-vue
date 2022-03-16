<template>
  <div v-if="this.product">
    <div class="product__detail">
        <div class="product__detail__image">
          <figure>
            <img :src="product.PhotoName" />
          </figure>
        </div>

        <div class="product__detail__desc">
          <section class="product__detail__desc--section">
              <h2 class="bold">{{product.ItemName}}</h2>
              <p v-if="product.Description.length">{{product.Description}}</p>
              <span>Id: {{product.ProductID}}</span>
              <span>Dimensions: {{product.Dimensions}}</span>
          </section>

          <hr />

          <section class="product__detail__purchase">
            <div class="product__detail__purchase--price">
              <div class="product__detail__purchase--total">{{formattedPrice}}</div>
              <div class="product__detail__purchase--salesrep">
                <span>Contact salesrep:</span>
                <h4>{{ salesrepData.CreatedBy}}</h4>
                <p>{{ salesrepData.Phone}}</p>
                <a :href="`mailto:${salesrepData.EmailAddress }`" target="_blank">
                  {{ salesrepData.EmailAddress }}
                </a>
              </div>
            </div> 
          </section>
        </div>
      </div>
    </div>
  <div v-else>
    <h1>Product Not Found</h1>
  </div>
</template>

<script>
import { GETTER_PRODUCT, GETTER_SALESREP }  from "../constants/getters.type";
import { mapGetters } from 'vuex';

export default {
  name: 'ProductItem',

  data:() => ({
      product: '',
      salesrepData: {}
  }),

  computed: {
    ...mapGetters ({
        getProduct : 'productStore/' + GETTER_PRODUCT,
        getSalesrep : 'productStore/' + GETTER_SALESREP
    }),

    formattedPrice() {
      const format = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
          });

      return format.format(this.product.BasePrice)
    }
  },

  mounted() {
    this.product = this.getProduct(this.$route.params.id);
    this.salesrepData = this.getSalesrep;
  }
}
</script>

<style scoped lang="scss">
  .product__detail {
    background-color: white;
    display: flex;
    flex-flow: column;
    border-bottom: 1px solid #E6E6E6;
    padding: 20px;
    margin: 0 auto;

    @media (min-width: 768px) {
      flex-flow: row;
      padding: 50px;
    }

    .bold {
      font-weight: 600;
    }

    &__image {
      width: 100%;
  
      @media (min-width: 1366px) {
        width: 50%;
        align-items: center;
        display: flex;
      }

      figure {
        margin: 0 auto;
        padding: 10% 20%;

        @media (min-width: 1366px) {
          width: 342px;
          margin: 0 auto;
          padding: 10%;
        }

        img {
          width: 100%;
        }
      }
    }

    &__desc {
      width: 100%;
  
      @media (min-width: 1366px) {
        width: 50%;
      }
  
      &--section {
        margin-bottom: 20px;
        text-align: left;
        display: flex;
        flex-flow: column;

        @media (min-width: 1366px) {
          margin-bottom: 24px;
        }
      }
  
      h2 { 
        margin: 0;
        font-size: 22px;
        line-height: 2rem;
      }

      p {
        font-size: 16px;
      }

      a {
          color: #a6192d;
      }

      span {
        font-size: 14px;
        line-height: 20px;
      }
  
      &--block {
        margin-bottom: 10px;
  
        @media (min-width: 1366px) {
          margin-bottom: 20px;
        }
  
        &:last-child {
          margin-bottom: 0;
        }
  
        h4 {
          font-weight: bold;
          font-size: 17px;
          line-height: 24px;
          letter-spacing: -0.01em;
          margin: 0;
        }
      }
    }

    &__purchase {
        grid-gap: 36px 12px;
        margin-top: 20px;
        margin-bottom: 0;
        display: flex;
        flex-flow: column;

        @media (min-width: 1366px) {
          margin-top: 23px;
        }

        &--selectors {
          flex-flow: row;
          justify-content: space-between;
        }

        &--price {
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          flex-flow: row;
          display: flex;
          align-items: center;

          @media (min-width: 1366px) {
            flex-flow: row;
            justify-content: space-between;
          }
        }


        &--total {
          font-weight: bold;
          font-size: 25px;
          line-height: 32px;
          letter-spacing: -0.02em;
          align-items: center;
          display: flex;
          width: 50%;
          margin-bottom: 0;
        }

        &--salesrep {
          text-align: right;

          h4 {
            font-size: 14px;
            margin: 10px 0;
          }

          p {
            font-size: 13px;
            margin: 2px 0;
          }
        }

        button {
          border: 2px solid #E6E6E6;
          background-color: #fff;
          width: 50%;
          padding: 18px 16px;
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          letter-spacing: -0.01em;
          justify-content: center;
          cursor: pointer;
          color: #2b2b2b;
          will-change: transition; 
          transition: 250ms ease-out;
          
          &:hover {
            background-color: #2b2b2b;
            color: white;
          }
        }
      }
  }
</style>