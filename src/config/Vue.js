// core
import Vue from 'vue'

// global mixins
import breakpoint from '@/assets/js/mixins/breakpoint'
import env from '@/assets/js/mixins/env'

import './base-components'

Vue.config.productionTip = false

Vue.mixin(breakpoint)
Vue.mixin(env)

export default Vue
