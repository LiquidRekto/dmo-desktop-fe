import { createApp } from 'vue'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



const vuetify = createVuetify({
    
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa
        }
    },
    
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify)

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
library.add(far)

app.mount('#app')