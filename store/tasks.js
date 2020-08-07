import axios from 'axios'

const API_URL = 'http://localhost:8000'

export const state = () => ({
  tasks: []
})

export const actions = {
    async getAlltasks ({ commit }) {
      const { data } = await axios.get(`${API_URL}/tasks/`)
      console.log(data)
      //commit('set', data)
    },
}

export const mutations = {
    set (state, tasks) {
      state.tasks = tasks
    },
}