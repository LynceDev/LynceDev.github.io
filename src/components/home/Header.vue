<template>
  <header class="container-fluid">
    <b-jumbotron
      id="welcome-mat"
      class="container bx-0 text-center bg-transparent">
      <template slot="header">
        We build code.
      </template>
      <h2>
        Lynce Development
      </h2>
      <button
        class="btn btn-primary">
        Nossos projetos
      </button>
      <button
        class="btn btn-outline-success">
        Faça um orçamento
      </button>
    </b-jumbotron>
  </header>
</template>

<script>
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'

export default {
  components: {
    bJumbotron
  }
}
</script>

<style lang="scss" scoped>
  header {
    padding-top: 8em;
    @media (min-width: 578px) {
      padding-top: 10em;
    }
    padding-bottom: 10em;
  }
</style>
