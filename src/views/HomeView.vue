<template>
  <div>
    <CardList v-for="event in events" :key="event.id" :event="event" />

    <router-link
      :to="{ name: home, query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Pev Page</router-link
    >

    <router-link
      :to="{ name: home, query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import EventService from '@/services/EventService'
import { watchEffect } from 'vue'
export default {
  name: 'HomeView',
  components: { CardList },
  props: ['page'],
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  created() {
    watchEffect(() => {
      ;(this.events = null),
        EventService.getEvents(2, this.page)
          .then(res => {
            ;(this.events = res.data),
              (this.totalEvents = res.headers['x-total-count'])
          })
          .catch(err => {
            console.log(err)
          })
    })
  },

  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    },
  },
}
</script>

<style lang="stylus" scoped></style>
