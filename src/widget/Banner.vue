<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in dataCode" :key="index">
        <img :src="item.imgSrc" width="100%" height="100%">
        <div class="title" v-if="item.title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../dist/css/swiper.min.css'
  export default {
    props: {
      dataCode: {
        type: Array,
        require: true
      }
    },
    watch: {
      dataCode() {
        this._initBanner()
      }
    },
    methods: {
      _initBanner() {
        this.$nextTick(() => {
          this.mySwiper = new Swiper('.swiper-container', {
            autoplay: {
              delay: 1000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
            loop: true
          })
        })
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .swiper-wrapper
    position: relative
    .title
      position: absolute
      bottom: 10px
      left: 0
      width: 100%
      text-align: center
      font-size: 14px
      color: #fff

</style>
