<template>

  <div class="main">
    <div class="container">
      <ul class="copters_list">
      <li class="copter_item" v-for="copter of copters" :hey="copter.id">
        <a @click.prevent="openCopter(copter)" class="copter_item__link" href="#">
          <span class="copter_item__img"><img :src=copter.preview :alt=copter.name></span>
          <span class="copter_info">
            <span class="copter_info__title">{{copter.name}}</span>
            <span class="copter_info__desc">{{copter.description}}</span>
            <span class="copter_info__price">{{copter.rent}}</span>
          </span>
        </a>
      </li>
      </ul>
    </div>

  </div>


</template>

<script>
export default {
  async fetch({store}) {
    if (store.copters['copters/copters'].length === 0) {
      await store.dispatch('copters/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Users page'
  }),
  computed: {
    copters() {
      return this.$store.getters['copters/copters']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/copters/' + user.id)
    }
  }
}
</script>

<style scoped>

</style>