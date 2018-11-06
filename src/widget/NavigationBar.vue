<template>
  <div>
    <div class="nav-bar" ref="navBar">
      <ul class="nav" ref="nav">
        <li ref="lis" class="nav-item"
            v-for="(item, index) in dataCode.title"
            :key="index"
            :class="index === activeNum ? 'active' : ''"
            @click="isActive(index)">
          <span class="text" :class="dataCode.type === 2 ? 'vip-text' : ''">{{item}}</span>
          <div class="box" :class="dataCode.type === 2 ? 'vip-box' : ''"></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created() {
    },
    props: {
      dataCode: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        activeNum: 0
      }
    },
    watch: {
      dataCode() {
        this._initHorizontalScroller()
      }
    },
    methods: {
      isActive(index) {
        this.activeNum = index
      },
      _initHorizontalScroller() {
         this.$nextTick(() => {
          if (this.dataCode.title) {
            let ulWigth = 0
            let lis = this.$refs.lis
            for (let i = 0; i < lis.length; i++) {
                ulWigth += lis[i].scrollWidth
            }
            this.$refs.nav.style.width = ulWigth + 'px'
            if (!this.navigationScroll) {
              this.navigationScroll = new BScroll(this.$refs.navBar, {
                click: true,
                scrollX: true
              })
            } else {
              this.navigationScroll.refresh()
            }
          }
         })
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .nav-bar
    padding: 6px 0
    width: 100%
    overflow: hidden
    .nav
      white-space: nowrap  //强制文本不换行
      .nav-item
        display: inline-block
        padding-right: 20px
        &:first-child
          padding-left: 12px
        &:last-child
          padding-right: 12px
        .text
          font-size: 14px
          color: #333
          &.vip-text
            color: #fff
        .box
          margin: 3px auto 0
          width: 15px
          height: 2px
          border-radius: 1px
          background: #fff
          &.vip-box
            background: #000
        &.active
          .text
            font-weight: bold
            color: #D60419
            &.vip-text
              color: #CEB375
          .box
            background: #D60419
            &.vip-box
              background: #CEB375

</style>
