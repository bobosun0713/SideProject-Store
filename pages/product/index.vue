<template>
  <div class="product">
    <div class="product__banner">
      <div class="product__banner__slogan"></div>
    </div>
    <div class="product__container">
      <div class="product__content">
        <aside class="product__menu">
          <h1 class="product__menu-title">甜點類別</h1>
          <ul class="menu-list">
            <li
              class="menu-list__item"
              :class="{ 'menu-list__item--active': tabName === '' }"
              @click="changeProduct('')"
            >
              所有甜點({{ filterAmount() }})
            </li>
            <li
              class="menu-list__item"
              :class="{ 'menu-list__item--active': tabName === '1' }"
              @click="changeProduct('1')"
            >
              本日精選({{ filterAmount('1') }})
            </li>
            <li
              class="menu-list__item"
              :class="{ 'menu-list__item--active': tabName === '2' }"
              @click="changeProduct('2')"
            >
              人氣推薦({{ filterAmount('2') }})
            </li>
            <li
              class="menu-list__item"
              :class="{ 'menu-list__item--active': tabName === '3' }"
              @click="changeProduct('3')"
            >
              新品上市({{ filterAmount('3') }})
            </li>
          </ul>
        </aside>
        <div class="product__list">
          <product-card
            v-for="product in pageList"
            :key="product.id"
            :product="product"
            :user-token="userToken"
            :is-login="isLogin"
            :cart-list="cartList"
            class="product-card--mb"
          ></product-card>
        </div>
      </div>

      <pagination
        :current-page.sync="currentPage"
        :total-page="totalPage"
        :view-page="3"
        @updatePage="updatePage"
      ></pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductCard from '@/components/product/ProductCard.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Product',
  components: {
    ProductCard,
    Pagination,
  },
  data() {
    return {
      tabName: '',

      currentPage: 1,
      perPage: 4,
    }
  },
  computed: {
    ...mapState('login', ['userToken', 'isLogin']),
    ...mapState('product', ['productList']),
    ...mapState('cart', ['cartList']),

    filterAmount() {
      return (type) => {
        return this.productList.filter((product) => (!type ? product : product.type === type)).length
      }
    },
    filterProducts() {
      return this.productList.filter((product) => (!this.tabName ? product : product.type === this.tabName))
    },

    pageList() {
      let startPage = (this.currentPage - 1) * this.perPage
      return this.filterProducts.slice(startPage, startPage + this.perPage)
    },
    totalPage() {
      return Math.ceil(this.filterProducts.length / this.perPage)
    },
  },
  mounted() {
    // 首頁連結過來時
    this.tabName = this.$route.params.productType || ''
    this.getProducts()
    this.getCarts(this.userToken)
  },

  methods: {
    ...mapActions('product', ['getProducts']),
    ...mapActions('cart', ['getCarts']),

    changeProduct(tab) {
      this.tabName = tab
      this.currentPage = 1
    },

    updatePage(val, isAdd) {
      if (isAdd) return (this.currentPage += val)
      this.currentPage = val
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__banner {
    margin: 0 auto 60px;
    background: url('../../assets/image/product/product-4.jpg') no-repeat center center;
    background-size: cover;
    width: 940px;
    height: 496px;

    transition: all 0.5s;
    // ====== RWD  ======
    @include RWD_991 {
      margin: 0 auto;
      width: 100%;
      height: 400px;
    }
    @include RWD_768 {
      height: 350px;
    }
    @include RWD_576 {
      height: 280px;
    }

    &__slogan {
      background: url('../../assets/image/home/home-slogan.svg') no-repeat center center;
      background-size: cover;
      width: 90px;
      height: 330px;
      float: right;
      margin: 40px;

      transition: all 0.5s;
      // ====== RWD  ======
      @include RWD_991 {
        margin: 25px 40px;
      }
      @include RWD_768 {
        width: 75px;
        height: 280px;
      }
      @include RWD_576 {
        width: 60px;
        height: 220px;
      }
    }
  }

  &__container {
    width: 940px;
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;

    // ====== RWD  ======
    @include RWD_991 {
      align-items: center;
      width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    @include RWD_991 {
      // ====== RWD  ======
      flex-direction: column;
      width: 100%;
    }
  }

  // 側邊欄
  &__menu {
    width: 300px;
    // ====== RWD  ======
    @include RWD_991 {
      width: 100%;
      margin-bottom: 30px;
    }

    // 標題
    &-title {
      background-color: map-get($theme-colors, dark-green);
      color: map-get($theme-colors, light);
      padding: 16px 0;
      text-align: center;
    }
  }

  // 商品列表
  &__list {
    width: 620px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    // ====== RWD  ======
    @include RWD_991 {
      width: 100%;
      justify-content: center;
    }
  }
}

// 側邊欄
.menu-list {
  border: 1px solid map-get($theme-colors, border);

  &__item {
    border-bottom: 1px solid map-get($theme-colors, border);
    color: map-get($theme-colors, dark-green);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    text-align: center;
    display: block;
    padding: 16px;
    cursor: pointer;
    &--active {
      background-color: map-get($theme-colors, light-green);
    }

    &:hover {
      background-color: map-get($theme-colors, light-green);
    }
  }
}
</style>
