import Vue from 'vue'

const data = Vue.observable({
  width: 0
})

export default {
  computed: {
    $breakpoint () {
      const width = data.width

      const breakpoints = {}
      const _isBetween = (a, b = a) => width >= a && width <= b
      const _isMax = a => width <= a
      const _isMin = a => width >= a

      const screenXsMin = 300
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

      Object.defineProperty(breakpoints, 'xs', define({ get: () => _isMax(screenXsMax) }))
      Object.defineProperty(breakpoints, 'sm', define({ get: () => _isBetween(screenSmMin, screenSmMax) }))
      Object.defineProperty(breakpoints, 'md', define({ get: () => _isBetween(screenMdMin, screenMdMax) }))
      Object.defineProperty(breakpoints, 'lg', define({ get: () => _isBetween(screenLgMin, screenLgMax) }))
      Object.defineProperty(breakpoints, 'xl', define({ get: () => _isMin(screenXlMin) }))

      Object.defineProperty(breakpoints, 'smAndDown', define({ get: () => _isMax(screenSmMax) }))
      Object.defineProperty(breakpoints, 'mdAndDown', define({ get: () => _isMax(screenMdMax) }))
      Object.defineProperty(breakpoints, 'lgAndDown', define({ get: () => _isMax(screenLgMax) }))

      Object.defineProperty(breakpoints, 'xsAndUp', define({ get: () => _isMin(screenXsMin) }))
      Object.defineProperty(breakpoints, 'smAndUp', define({ get: () => _isMin(screenSmMin) }))
      Object.defineProperty(breakpoints, 'mdAndUp', define({ get: () => _isMin(screenMdMin) }))

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
