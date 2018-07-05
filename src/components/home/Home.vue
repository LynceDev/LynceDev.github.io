<template>
  <div>
    <c-navbar/>
    <c-header/>
    <c-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Header from '@/components/home/Header'

export default {
  components: {
    'c-navbar': Navbar,
    'c-footer': Footer,
    'c-header': Header,
  },

  data () {
    return {

    }
  },

  methods: {

  }

}
</script>

<style lang="scss">

</style>
