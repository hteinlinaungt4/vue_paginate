import axios from 'axios'

const clientApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default {
  getEvents(limit, page) {
    return clientApi.get('/todos?_limit=' + limit + '&_page=' + page)
  },
  getEvent(id) {
    return clientApi.get('/todos/' + id)
  },
}
