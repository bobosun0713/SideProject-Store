<template>
  <div class="pagination">
    <button class="pagination__button" :disabled="currentPage === 1" @click="clickPage(-1, true)">
      <font-awesome icon="caret-left" class="icon"></font-awesome>
    </button>
    <ul class="pager">
      <template v-if="currentPage >= viewPage && totalPage > viewPage">
        <li class="pager__number" @click="clickPage(1, false)">1</li>
        <li class="pager__number">...</li>
      </template>
      <li
        v-for="page in pages"
        :key="page"
        :class="{ 'pager__number--active': currentPage === page }"
        class="pager__number"
        @click="clickPage(page, false)"
      >
        {{ page }}
      </li>
      <template v-if="totalPage > viewPage && currentPage < totalPage - 1">
        <li class="pager__number">...</li>
        <li class="pager__number" @click="clickPage(totalPage, false)">{{ totalPage }}</li>
      </template>
    </ul>
    <button class="pagination__button" :disabled="currentPage === totalPage" @click="clickPage(1, true)">
      <font-awesome icon="caret-right" class="icon"></font-awesome>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
    viewPage: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      } else if (this.currentPage === this.totalPage) {
        return this.currentPage - this.viewPage + 1
      } else {
        return this.currentPage - 1
      }
    },
    endPage() {
      return this.startPage + this.viewPage - 1
    },
    pages() {
      const pagesAry = []
      for (let i = this.startPage; i <= this.endPage; i++) {
        pagesAry.push(i)
      }
      return this.totalPage === 1 ? 1 : this.totalPage < this.viewPage ? this.totalPage : pagesAry
    },
  },
  methods: {
    clickPage(val, isAdd) {
      this.$emit('updatePage', val, isAdd)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin-left: auto;

  // ====== RWD  ======
  @include RWD_991 {
    margin-left: 0;
  }
  &__button {
    width: 60px;
    height: 60px;
    border: 1px solid map-get($theme-colors, border);
    background-color: transparent;
  }
}

// 頁碼
.pager {
  cursor: pointer;
  display: flex;
  &__number {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid map-get($theme-colors, border);
    color: map-get($theme-colors, dark-green);
    font-weight: bold;
    border-right: 0;

    &:first-child {
      border-left: 0;
    }

    &--active {
      background-color: map-get($theme-colors, light-green);
    }
  }
}
</style>
