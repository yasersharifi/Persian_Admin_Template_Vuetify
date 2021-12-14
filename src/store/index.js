import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        header: {color: "white", dark: false},
        sideBar: {color: "white", dark: false},
        settingSidebarMenu: false
    },
    mutations: {

    },
    actions: {
    },
    modules: {
    }
})
