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
          <span class="fa fa-"></span> Nossos projetos
        </button>
        <button
          class="btn btn-outline-primary">
          <span class="fa fa-"></span> Trabalhe conosco
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

<style>

</style>
