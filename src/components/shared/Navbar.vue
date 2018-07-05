<template>
  <b-navbar
    toggleable="md"
    fixed="top">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        NavBar
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <router-link
            class="nav-link"
            :to="{ name: 'Projects' }">
            Projetos
          </router-link>
          <router-link
            class="nav-link"
            :to="{ name: 'Members' }">
            Membros
          </router-link>
          <router-link
            class="nav-link"
            :to="{ name: 'Contact' }">
            Contato
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'

export default {
  components: {
    bNavbar
  }

}
</script>

<style lang="scss" scoped>

</style>
