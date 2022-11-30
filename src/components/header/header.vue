<template>
  <div class="music-header">
    <span class="logo">
      <!-- <img :src="logo" alt="logo"> -->
    </span>
    <h1 class="title">菠萝音乐</h1>
  </div>
</template>

<script setup lang="ts">
// import logo from '@/assets/images/logo.svg'
</script>

<style scoped lang="scss">
.music-header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .logo {
    display: inline-block;
    margin-top: 6px;
    vertical-align: top;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    background-size: 30px 32px;
    @include bg-image("logo")
  }
  .title {
    margin-left: 10px;
    font-size: $font-size-large;
    line-height: 44px;
    vertical-align: top;
    display: inline-block;
  }
}
</style>
