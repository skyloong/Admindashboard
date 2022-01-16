import { SET_NAVMINI } from '@/store/mutations-name'

const state = {
    miniVariant: false,
}

const mutations = {
    [SET_NAVMINI]: (state) => {
        state.miniVariant = !state.miniVariant
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}