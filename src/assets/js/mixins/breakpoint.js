import Vue from 'vue'

const data = Vue.observable({
  width: 0
})

export default {
  computed: {
    $breakpoint () {
      const width = data.width

      const breakpoints = {}
      const isBetween = (num, a, b = a) => num >= a && num <= b
      const isMax = (num, a) => num <= a
      const isMin = (num, a) => num >= a

      const screenXsMax = 600

      const screenSmMin = 601
      const screenSmMax = 960

      const screenMdMin = 961
      const screenMdMax = 1264

      const screenLgMin = 1265
      const screenLgMax = 1904

      const screenXlMin = 1905

      const define = props => ({
        enumerable: false,
        configurable: false,
        ...props
      })

      Object.defineProperty(breakpoints, 'xs', define({ get: () => isMax(width, screenXsMax) }))
      Object.defineProperty(breakpoints, 'sm', define({ get: () => isBetween(width, screenSmMin, screenSmMax) }))
      Object.defineProperty(breakpoints, 'md', define({ get: () => isBetween(width, screenMdMin, screenMdMax) }))
      Object.defineProperty(breakpoints, 'lg', define({ get: () => isBetween(width, screenLgMin, screenLgMax) }))
      Object.defineProperty(breakpoints, 'xl', define({ get: () => isMin(width, screenXlMin) }))
      Object.defineProperty(breakpoints, 'name', define({
        get: () => {
          const name = ['xs', 'sm', 'md', 'lg', 'xl']

          for (let i = 0; i < name.length; i++) {
            const curr = name[i]

            if (breakpoints[curr]) {
              return curr
            }
          }
        }
      }))

      return breakpoints
    }
  },

  created () {
    data.width = window.innerWidth
    window.onresize = () => {
      data.width = window.innerWidth
    }
  }
}
