import Vue from 'vue'

const data = Vue.observable({
  scrollY: null,
  outerHeight: null,
  innerHeight: null
})

export default {
  computed: {
    windowState () {
      return data
    }
  },

  mounted () {
    this.initWindowState()
    window.onscroll = () => this.initWindowState()
  },

  methods: {
    initWindowState () {
      data.scrollY = window.scrollY
      data.outerHeight = window.outerHeight
      data.innerHeight = window.innerHeight
    }
  }
}
