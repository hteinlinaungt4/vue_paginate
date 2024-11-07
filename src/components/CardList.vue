<template>
  <router-link :to="{ name: 'cardDetail', params: { id: event.id } }">
    <div class="card">
      <h1>{{ event.title }}</h1>
    </div>
  </router-link>
</template>

<script>
import CardDetail from '@/views/CardDetail.vue'

export default {
  name: 'CardDetail',
  props: {
    event: {
      type: Object,
    },
  },
  components: [CardDetail],
}
</script>

<style lang="stylus" scoped>
.card{
  border: 2px solid black;
  margin: 20px;
  padding : 20px;
  transition: 1s;
}
.card:hover{
  scale: 1.1;
  background-color: red;
  cursor: pointer;
  color:black;
}
</style>
