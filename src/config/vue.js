// core
import Vue from 'vue'

// global mixins
import breakpoint from '@/assets/js/mixins/breakpoint'
import env from '@/assets/js/mixins/env'
import meta from '@/assets/js/mixins/meta'

import './base-components'

Vue.config.productionTip = false

Vue.mixin(breakpoint)
Vue.mixin(env)
Vue.mixin(meta)

export default Vue
