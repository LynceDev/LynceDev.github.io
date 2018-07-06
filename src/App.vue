<template>
  <div id="app">
    <c-navbar/>
    <router-view/>
    <c-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default {
  name: 'App',
  components: {
    'c-navbar': Navbar,
    'c-footer': Footer,
  }
}
</script>

<style lang="scss">
  @import './assets/theme.scss';

  body {
    background-color: $light-bg;
  }

  p {
    color: $txt-color;
    font-family: $txt-family;
  }

  h1, h2, h3, h4, h5, h6 {
    color: $txt-color;
    font-family: $headings-family;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  .btn {
    margin: .3em auto;
  }
</style>
