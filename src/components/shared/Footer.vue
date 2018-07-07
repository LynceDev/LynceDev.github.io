<template>
  <section>
    <footer
      class="container-fluid dark-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-6 text-left">
            <ul class="list-unstyled">
              <router-link
                :to="{}"
                class="">
                <li>
                  Home
                </li>
              </router-link>
              <router-link
                :to="{}"
                class="">
                <li>
                  Projetos
                </li>
              </router-link>
              <router-link
                :to="{}"
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
      </div>
    </footer>
    <div class="detail container-fluid text-center pt-3 pb-3">
      <small>
        Feito em Vue.js e hospedado no Github
      </small>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../../assets/theme.scss';

  .detail{
    background-color: #111;
    color: $alt-txt-color;
  }

  .list-unstyled {
    a {
      li {
        padding-top: .3em;
        padding-bottom: .3em;
        margin-top: .3em;
        margin-bottom: .3em;
      }

      &:hover {
        color: white;
      }
    }
  }
</style>
