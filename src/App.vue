<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/Tab'
export default {
  name: 'App',
  components: {
    'm-header': MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>
</style>
