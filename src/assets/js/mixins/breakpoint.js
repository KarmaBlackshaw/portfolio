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

      Object.defineProperty(breakpoints, 'smAndBelow', define({ get: () => _isMax(screenSmMax) }))
      Object.defineProperty(breakpoints, 'mdAndBelow', define({ get: () => _isMax(screenMdMax) }))
      Object.defineProperty(breakpoints, 'lgAndBelow', define({ get: () => _isMax(screenLgMax) }))

      Object.defineProperty(breakpoints, 'xsAndAbove', define({ get: () => _isMin(screenXsMin) }))
      Object.defineProperty(breakpoints, 'smAndAbove', define({ get: () => _isMin(screenSmMin) }))
      Object.defineProperty(breakpoints, 'mdAndAbove', define({ get: () => _isMin(screenMdMin) }))

      Object.defineProperty(breakpoints, 'name', define({
        get: () => ['xs', 'sm', 'md', 'lg', 'xl'].find(curr => breakpoints[curr])
      }))

      Object.defineProperty(breakpoints, 'isBelow', define({ value: size => _isMax(size) }))
      Object.defineProperty(breakpoints, 'isAbove', define({ value: size => _isBetween(size) }))
      Object.defineProperty(breakpoints, 'isBetween', define({ value: (minSize, maxSize) => _isBetween(minSize, maxSize) }))

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
