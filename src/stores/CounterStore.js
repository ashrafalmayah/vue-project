import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 5
    }
  },
  actions: {
    increament() {
      if (this.count < 10) this.count++
    }
  },

  getters: {
    remaining() {
      return 10 - this.count
    }
  }
})
