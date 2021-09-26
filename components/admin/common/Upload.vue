<template>
  <div class="upload">
    <div v-if="showImage" class="upload__action">
      <div class="upload__cancel" @click="handleDelete"></div>
      <img class="upload__image" :src="showImage" alt="" />
    </div>

    <vue-core-image-upload
      v-else
      class="upload__action"
      :class="['btn', 'btn-primary']"
      :crop="false"
      :max-file-size="1024 * 1024 * 10"
      @imagechanged="handleImageFillIn"
    >
      <div class="upload__action-icon">
        <font-awesome :icon="['fas', 'images']"></font-awesome>
      </div>
      <div class="upload__action-text">上傳圖片</div>
    </vue-core-image-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',

  data() {
    return {
      showImage: '',
      imageData: '',
    }
  },
  methods: {
    handleImageFillIn(val) {
      const reader = new FileReader()
      reader.readAsDataURL(val)
      reader.onload = (e) => {
        this.showImage = e.target.result
        this.$emit('update', this.showImage)
      }
    },
    handleDelete() {
      this.showImage = ''
      this.imageData = ''
      this.$emit('update', this.showImage)
    },
  },
}
</script>

<style lang="scss" scoped>
.upload {
  width: 150px;
  height: 150px;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__action {
    border: 1px solid map-get($theme-colors, shadow);
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-icon {
      font-size: 24px;
    }
  }

  &__cancel {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 0.6s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 18px;
      height: 2px;
      border-radius: 2px;
      background-color: black;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      transform: scale(1.2) rotate(180deg);
    }
  }
}
</style>
