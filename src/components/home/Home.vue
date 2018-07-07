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
    <section>

    </section>
    <c-members/>
  </div>
</template>

<script>
import Header from '@/components/home/Header'
import Members from '@/components/members/Members'

export default {
  components: {
    'c-header': Header,
    'c-members': Members,
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
    padding-top: 3em;
    padding-bottom: 3em;
  }
</style>
