<template>
  <div v-if="event">
    <h1>Details</h1>
    <div>{{ event.title }}</div>
    <div>{{ event.complete }}</div>
  </div>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  name: 'CardDetail',
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },

  created() {
    EventService.getEvent(this.id)
      .then(res => {
        this.event = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>

<style lang="stylus" scoped></style>
