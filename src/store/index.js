// 组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menusArr: []
    },
    getters: {
        menusArr: state => state.menusArr
    },
    actions: {
        addMenus({ commit }, infos) {
            this.state.menusArr = infos
        }
    },
    mutations: {}
})