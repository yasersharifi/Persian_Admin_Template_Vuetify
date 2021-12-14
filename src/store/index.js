import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        header: {color: "white", dark: false},
        sideBar: {color: "white", dark: false},
    },
    mutations: {
        changeHeaderStyle: (state, colorAndDark) => {
            state.header.color = colorAndDark[0];
            state.header.dark = colorAndDark[1];
        },
        changeSideBarStyle: (state, colorAndDark) => {
            console.log(colorAndDark[0], colorAndDark[1])
            state.sideBar.color = colorAndDark[0];
            state.sideBar.dark = colorAndDark[1];
        }
    },
    actions: {
    },
    modules: {
    }
})
