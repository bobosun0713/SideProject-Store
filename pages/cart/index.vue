<template>
  <div class="Shopping-cart">
    <div class="cart-list">
      <h1 class="cart-list__title">您的購物車</h1>
      <div class="cart-list__container">
        <template v-if="cartList.length">
          <cart-item
            v-for="(product, idx) in cartList"
            :key="product.name"
            :product-no="product.id"
            :product="product"
            :index="idx"
          ></cart-item>
        </template>
        <h2 v-else class="cart-list__container-else">無商品資料</h2>
      </div>
    </div>
    <div class="cart-order">
      <h2 class="cart-order__title">訂單摘要</h2>
      <ul class="cart-order__list">
        <li class="cart-order__list-item">
          <span class="list-title">小計</span>
          <span class="list-price">NT$ {{ cartTotal }}</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">運費</span>
          <span class="list-price">NT$ {{ checkoutLogin() ? fareTotal : 0 }}</span>
        </li>
        <li class="cart-order__list-item">
          <span class="list-title">總計</span>
          <span class="list-price">NT$ {{ cartTotal === 0 ? 0 : cartTotal + fareTotal }}</span>
        </li>
      </ul>
      <button class="cart-order__button" @click="goCheckout">結帳</button>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import checkoutLogin from '@/mixin/checkoutLogin'
export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  mixins: [checkoutLogin],
  computed: {
    ...mapState('cart', ['cartList', 'fareTotal']),
    ...mapState('login', ['isLogin', 'userToken']),
    ...mapGetters('cart', ['cartTotal']),
  },

  mounted() {
    this.fetchCartList()
  },
  methods: {
    ...mapActions('cart', ['getCarts']),
    fetchCartList() {
      // TODO: 這邊取值有兩種，一種為vuex、另一種為cookies，主要因為要部署在github pages，因為是靜態部署所以在nuxtServiceInit是不會執行的
      // TODO: 所以這邊就用兩種方式取值，取Vuex或cookies其中一個。
      const IS_LOGIN = this.isLogin || this.$cookies.get('IS_LOGIN')
      const USER_TOKEN = this.userToken || this.$cookies.get('USER_TOKEN')
      if (IS_LOGIN) {
        this.getCarts(USER_TOKEN)
      }
    },
    goCheckout() {
      if (!this.cartList.length) {
        this.NotifiCation('錯誤', 'error', '目前購物車沒有商品！')
        return
      }
      this.$router.push('/checkout')
    },
  },
}
</script>

<style lang="scss" scoped>
.Shopping-cart {
  width: 940px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  // ====== RWD  ======
  @include RWD_991 {
    width: 100%;
    flex-direction: column;
  }
  @include RWD_576 {
    margin: auto;
  }
}

// 訂單列表
.cart-list {
  width: 620px;

  // ====== RWD  ======
  @include RWD_991 {
    width: 100%;
  }

  &__title {
    text-align: center;
    height: 65px;
    line-height: 65px;
    background-color: map-get($theme-colors, light-green);
    color: map-get($theme-colors, dark-green);
  }

  &__container {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow-y: scroll;

    // 無商品的時候
    &-else {
      margin: 20px 0;
      padding: 10px;
      text-align: center;
      border: 1px solid map-get($theme-colors, border);
    }
  }
}

// 訂單金額
.cart-order {
  align-self: flex-start;
  background-color: map-get($theme-colors, dark-green);
  width: 300px;

  // ====== RWD  ======
  @include RWD_991 {
    margin: 0 auto;
  }
  @include RWD_576 {
    width: 100%;
    background-color: transparent;
  }

  &__title {
    width: 260px;
    padding: 16px 0;
    margin: 0 auto;
    border-bottom: 1px solid map-get($theme-colors, light);
    color: map-get($theme-colors, light);
    text-align: center;

    // ====== RWD  ======
    @include RWD_576 {
      background-color: map-get($theme-colors, light-green);
      color: map-get($theme-colors, dark-green);
      width: 100%;
    }
  }

  &__list {
    width: 260px;
    margin: 10px auto;

    // ====== RWD  ======
    @include RWD_576 {
      width: 315px;
    }

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 2.5px 0;
      color: map-get($theme-colors, light);

      // ====== RWD  ======
      @include RWD_576 {
        color: map-get($theme-colors, dark-green);
        width: 315px;
      }

      &:last-child {
        margin-top: 8px;
        font-size: map-get($fontSize, large);
      }
    }
  }

  // 結帳
  &__button {
    border: 0;
    width: 100%;
    padding: 16px;
    background-color: map-get($theme-colors, light-yellow);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    color: map-get($theme-colors, dark-green);
    transition: all 0.5s;

    &:hover {
      background-color: map-get($theme-colors, light-green);
    }
  }
}
</style>
