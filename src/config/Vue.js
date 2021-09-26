// core
import Vue from 'vue'

// libs
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// global mixins
import breakpoint from '@/assets/js/mixins/breakpoint'

// Base Components
const requireComponent = require.context('../components/base', false, (/Base[A-Z]\w+\.(vue|js)$/))
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')))

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

Vue.mixin(breakpoint)

export default Vue
