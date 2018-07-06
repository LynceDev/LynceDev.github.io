<template>
  <footer
    class="container-fluid dark-bg">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-6 text-left">
        <ul class="list-unstyled">
          <router-link
            :to="{}"
            :tag="li"
            class="">
            <li>
              Home
            </li>
          </router-link>
          <router-link
            :to="{}"
            :tag="li"
            class="">
            <li>
              Projetos
            </li>
          </router-link>
          <router-link
            :to="{}"
            :tag="li"
            class="">
            <li class="">
              Contato
            </li>
          </router-link>
        </ul>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <!-- <form action="">
          <div class="form-group">
            <input
              type="text"
              class="form-control mt-2 mb-2">
            <button
              class="btn btn-success"
              >
              <i class="far fa-envelope"></i> Enviar
            </button>
          </div>
        </form> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
