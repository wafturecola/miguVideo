<template>
  <div class="advBarWrapper" ref="advBar">
    <ul class="advBar" ref="advUl">
      <li ref="advLis" class="advItem" v-for="(adv, index) in dataCode.icon" :key="index">
        <img :src="adv.advImg" width="40" height="40">
        <div class="name">{{adv.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      dataCode: {
        type: Object,
        require: true
      }
    },
    watch: {
      dataCode() {
        this._initAdvScroll()
      }
    },
    methods: {
      _initAdvScroll() {
        this.$nextTick(() => {
          if (this.dataCode.icon) {
            let advUlWidth = 0
            let lis = this.$refs.advLis
            for (let i = 0; i < lis.length; i++) {
              advUlWidth += lis[i].scrollWidth
            }
            this.$refs.advUl.style.width = advUlWidth + 'px'
            if (!this.advBarScroll) {
              this.advBarScroll = new BScroll(this.$refs.advBar, {
                click: true,
                scrollX: true
              })
            } else {
              this.advBarScroll.refresh()
            }
          }
        })
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .advBarWrapper
    margin-top: 9px
    width: 100%
    overflow: hidden
    .advBar
      white-space: nowrap
      .advItem
        display: inline-block
        padding-right: 34px
        &:first-child
          padding-left: 12px
        &:last-child
          padding-right: 12px
        .name
          font-size: 8px
          text-align: center
</style>
