import vuePluginTemplate from './VuePluginTemplate.vue'

const vuePlugin = {
    install (Vue, options) {
        Vue.component(vuePluginTemplate.name, vuePluginTemplate)
    }
}

if (typeof window !== 'undefined' && window.Vue){
    window.Vue.use(vuePlugin)
} else {
    console.error('Please install vue!')
}

export default vuePlugin
