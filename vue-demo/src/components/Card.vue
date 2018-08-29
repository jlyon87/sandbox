<template>
  <div class="card bg-dark text-white">
  <img class="card-img" :src="image" alt="Card image">
  <div class="app-overlay card-img-overlay"
    @click="shown = !shown" >

    <h5 class="card-title">{{ movie.title }}</h5>
    <p v-if="shown" class="card-text">{{ movie.overview }}</p>
  </div>
  </div>
</template>

<script>
import { posterBaseURL } from '../api/tmdb.config'

export default {
  name: 'card',
  data () {
    return {
      shown: false
    }
  },

  props: [ 'movie' ],

  computed: {
    image () {
      return this.movie ? `${posterBaseURL}${this.movie.poster_path}` : ''
    }
  }
}
</script>

<style scoped>
.app-overlay {
  background-color: rgba(0, 0, 0, .4)
}
</style>
