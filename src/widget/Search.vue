<template>
<div class="header">
    <div class="search">
      <i class="icon-search"></i>
      反贪风暴3
    </div>
    <span class="time"></span>
    <span class="tv"></span>
</div>
</template>

<script>
  export default {}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .header
    display: flex
    padding: 8px 12px 0
    width: 100%
    box-sizing: border-box
    .search
      flex: 1
      padding: 6px 0
      font-size: 12px
      text-align: center
      border-radius: 25px
      background: #EAEAEA
      color: #686868
      .icon-search
        margin-right: 10px
        color: #D60419
    &>span
      display: inline-block
      flex: 0 0 25px
      margin-left: 12px
      width: 25px
      height: 25px
    .time
      background: url("../public/img/TimeLogo.jpg")
      background-size: 25px 25px
    .tv
      background: url("../public/img/TVLogo.jpg")
      background-size: 25px 25px
</style>
