<template>
  <div class="product-card">
    <div class="card__header">
      <img class="card__header__img" :src="product.image" alt="" />
      <div class="card__header__title">
        {{ transformProductType(product.type) }}
      </div>
      <button class="card__header__fav">
        <font-awesome v-if="checkCartList" :icon="['far', 'heart']" class="icon"></font-awesome>
        <font-awesome v-else :icon="['fas', 'heart']" class="icon"></font-awesome>
      </button>
    </div>
    <div class="card__body">
      <div class="card__body__info">
        <div class="card__body__info-name">{{ product.name }}</div>
        <div class="card__body__info-price">NT$ {{ product.price }}</div>
      </div>
      <button type="button" class="card__body__button" :disabled="isAddLoading" @click="addToCart">加入購物車</button>
    </div>
  </div>
</template>

<script>
import { apiSetProductInCart } from '@/api'
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
    userToken: {
      type: String,
      require: true,
    },
    isLogin: {
      type: Boolean,
      require: true,
    },
    cartList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      productData: {
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        quantity: 1,
      },
      isAddLoading: false,
    }
  },
  computed: {
    checkCartRepeat() {
      return this.cartList.filter((item) => item.name === this.product.name).length
    },
  },
  methods: {
    ...mapActions('cart', ['getCarts']),
    transformProductType(value) {
      const type = new Map([
        ['1', '本日精選'],
        ['2', '人氣推薦'],
        ['3', '新品上市'],
      ])
      return type.get(value)
    },
    addToCart() {
      if (!this.checkUserInfo()) return
      if (!this.checkCartList()) return
      this.isAddLoading = true
      apiSetProductInCart(this.userToken, this.productData).then(() => {
        this.$notify({
          title: '購物車通知',
          type: 'success',
          message: `商品『${this.product.name}』已加入購物車`,
          showClose: true,
        })
        this.isAddLoading = false
        this.getCarts(this.userToken)
      })
    },

    checkUserInfo() {
      if (!this.isLogin) {
        this.$notify({
          title: '購物車通知',
          type: 'error',
          message: '請先登入',
          showClose: true,
        })
        return false
      }
      return true
    },

    checkCartList() {
      if (this.checkCartRepeat) {
        this.$notify({
          title: '購物車通知',
          type: 'warning',
          message: `商品『${this.product.name}』已存在購物車`,
          showClose: true,
        })
        return false
      }
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  display: inline-block;
  width: 300px;

  // ====== RWD  ======
  @include RWD_991 {
    margin: 0 10px;
  }
}
.product-card--mb {
  margin-bottom: 20px;
}

// 圖片
.card__header {
  width: 100%;
  height: 315px;

  display: flex;
  justify-content: space-between;
  position: relative;

  // img
  &__img {
    width: 100%;
    object-fit: cover;
  }

  // title
  &__title {
    position: absolute;
    padding: 16px 10px;
    left: 20px;
    background-color: map-get($theme-colors, dark-green);
    color: map-get($theme-colors, light);
    letter-spacing: 3px;
    writing-mode: tb-rl;
  }

  // fav
  &__fav {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    .icon {
      width: 100%;
      height: 100%;
    }
  }
}

// 價錢
.card__body {
  &__info {
    display: flex;
    text-align: center;
    color: map-get($theme-colors, dark-green);
    font-weight: bold;

    &-name {
      padding: 15px 5px;
      border-right: 1px solid map-get($theme-colors, border);
      border-left: 1px solid map-get($theme-colors, border);
      flex: 1;
    }

    &-price {
      border-right: 1px solid map-get($theme-colors, border);
      padding: 15px 5px;
      width: 130px;
    }
  }

  &__button {
    color: map-get($theme-colors, dark-green);
    background-color: map-get($theme-colors, light-green);
    font-size: map-get($fontSize, large);
    font-weight: bold;
    border: 0;
    width: 100%;
    padding: 16px;

    transition: all 0.5s;

    &:hover {
      color: map-get($theme-colors, light);
      background-color: map-get($theme-colors, dark-green);
    }
  }
}
</style>
