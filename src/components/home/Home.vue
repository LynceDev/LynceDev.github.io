<template>
  <div>
    <c-header/>
    <div class="branding">
      <div class="container text-center">
        <h3>
          Nosso propósito é desenvolver softwares que buscam facilitar a sua vida.
        </h3>
        <p>
          Teve uma idéia de app, website ou serviço que potencialmente pode mudar
          o mundo, mas precisa de alguém para desenvolvê-lo?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/home/Header'

export default {
  components: {
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
  .branding {
    padding-top: 2em;
    padding-bottom: 2em;
  }
</style>
