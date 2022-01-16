const state = {
    currentNavText: '首页'
}

const mutations = {
    'SET_CURRENTNAV': (state, text) => {
        state.currentNavText = text
    }
}

const actions = {
    setNav({ commit }, text) {
        commit('SET_CURRENTNAV', text)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}