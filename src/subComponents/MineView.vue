<template>
  <div class="mineWrapper" ref="mine">
    <div class="mineItem">
      <div class="header  border-1px">
        <div class="scan">
          <img src="../public/img/mine-scan.png" width="18" height="18">
        </div>
        <span class="mine">我的</span>
        <span class="icon icon-cog"></span>
      </div>
      <div class="login border-1px">
        <div class="left">
          <div class="avatar">
            <img :src="vipData.avatar" width="42" height="42">
          </div>
          <span class="register">登录/注册</span>
        </div>
        <div class="right">
          <span class="sign">签到领积分</span>
        </div>
      </div>
      <div class="special">
        <div class="vip">
          <img class="pic" src="../public/img/mine-vip.png">
          <div class="text">
            <p>我的vip</p>
            <i>首月仅6元</i>
          </div>
          <div class="order">订购</div>
        </div>
        <div class="vip g-box">
          <img class="pic" src="../public/img/mine-G.png">
          <div class="text">
            <p>G客号</p>
            <i>我要上传视频</i>
          </div>
          <span class="order upload">上传</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="direction">
        <span class="txt">观看历史</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="direction">
        <span class="txt">离线缓存</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="line"></div>
      <div class="direction">
        <span class="txt">我的看单</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="line"></div>
      <div class="icon">
        <div class="title">个人服务</div>
        <ul>
          <li>
            <img src="../public/img/mine-card.png">
            <div class="describe">我的卡包</div>
          </li>
          <li>
            <img src="../public/img/mine-record.png">
            <div class="describe">交易记录</div>
          </li>
          <li>
            <img src="../public/img/mine-tv.png">
            <div class="describe">投电视</div>
          </li>
          <li>
            <img src="../public/img/mine-flow.png">
            <div class="describe">我的流量</div>
          </li>
          <li>
            <img src="../public/img/mine-help.png">
            <div class="describe">帮助中心</div>
          </li>
          <li>
            <img src="../public/img/mine-opinion.png">
            <div class="describe">意见反馈</div>
          </li>
          <li>
            <img src="../public/img/mine-look.png">
            <div class="describe">多屏同看</div>
          </li>
        </ul>
      </div>
      <div class="icon">
        <div class="title">精彩生活</div>
        <ul>
          <li>
            <img src="../public/img/mine-shop.png">
            <div class="describe">购票</div>
          </li>
          <li>
            <img src="../public/img/mine-money.png">
            <div class="describe">免息借钱</div>
          </li>
          <li>
            <img src="../public/img/mine-stroe.png">
            <div class="describe">元气商店</div>
          </li>
          <li>
            <img src="../public/img/mine-migu.png">
            <div class="describe">咪咕币</div>
          </li>
          <li>
            <img src="../public/img/mine-welfare.png">
            <div class="describe">福利</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created() {
      this.axios('/api/vipData')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.vipData = res.data
            this.mineScroll = new BScroll(this.$refs.mine, {
                click: true
            })
          }
        })
    },
    data() {
      return {
        vipData: {}
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../public/scss/_mixin"
  .mineWrapper
    position: fixed
    top: 0
    bottom: 60px
    width: 100%
    .mineItem
      margin-bottom: 60px
      background: #fff
      .header
        display: flex
        padding: 10px 10px
        width: 100%
        @include border-1px(rgba(7, 17, 27, 0.1))
        box-sizing: border-box
        .scan
          flex: 1
        .mine
          flex: 1
          text-align: center
          font-size: 18px
          color: #5C5B63
        .icon
          flex: 1
          text-align: right
          color: #767676
      .login
        display: flex
        padding: 10px 10px
        @include border-1px(rgba(7, 17, 27, 0.1))
        .left
          flex: 1
          .avatar
            display: inline-block
            width: 42px
            height: 42px
            border-radius: 50%
            overflow: hidden
          .register
            display: inline-block
            margin: 12px 0 0 12px
            font-size: 14px
            color: #787878
            vertical-align: top
        .right
          flex: 1
          text-align: right
          .sign
            display: inline-block
            margin-top: 9px
            padding: 5px 12px
            font-size: 10px
            border: 1px solid #deac0e
            border-radius: 7px
            color: #deac0e
      .special
        display: flex
        padding: 7px 10px
        .vip
          position: relative
          flex: 1
          font-size: 0
          .pic
            width: 30px
            height: 30px
            margin-top: 3px
          .text
            display: inline-block
            margin-left: 9px
            &>p
              font-size: 16px
              color: #535353
              margin-bottom: 7px
            &>i
              font-size: 10px
              color: #C8C8C8
          .order
            position: absolute
            top: 5px
            right: 7px
            display: inline-block
            padding: 6px 10px
            font-size: 10px
            border-radius: 12px
            background: #BD9445
            color: #fff
        .g-box
          border-left: 1px solid #D8D8D8
          padding-left: 4px
          .upload
            background: #4E43A3
      .line
        width: 100%
        height: 8px
        background: #EDEDED
      .direction
        display: flex
        padding: 15px 10px
        .txt
          flex: 1
          font-size: 16px
        .icon-keyboard_arrow_right
          flex: 1
          text-align: right
          font-size: 14px
          line-height: 16px
          color: #D2D2D2
      .icon
        width: 100%
        .title
          padding: 15px 10px
          font-size: 16px
        li
          display: inline-block
          margin: 0 0 15px 30px
          width: 56px
          height: 63px
          text-align: center
          &>img
            width: 35px
            height: 35px
            margin-bottom: 12px
          .describe
            font-size: 14px
</style>
