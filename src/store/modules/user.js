import { login } from '@/api/user'
import { getToken, setToken, removeToken, jwtDecode } from '@/utils/auth'
import { SET_TOKEN, SET_NAME, SET_USERID, SET_AVATAR, SET_TOLES } from '@/store/mutations-name'

const state = {
    token: getToken(),
    name: '',
    userId: '',
    avatar: '',
    roles: []
}

const mutations = {
    [SET_TOKEN]: (state, token) => {
        state.token = token
    },
    [SET_NAME]: (state, name) => {
        state.name = name
    },
    [SET_USERID]: (state, userId) => {
        state.userId = userId
    },
    [SET_AVATAR]: (state, avatar) => {
        state.avatar = avatar
    },
    [SET_TOLES]: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ usercode: username, password: password }).then(response => {
                let token = response.data
                commit(SET_TOKEN, token)
                setToken(token)
                let tokenInfo = jwtDecode(token)
                console.log(tokenInfo.UserId);
                commit(SET_USERID, tokenInfo.UserId)
                //commit(SET_NAME, tokenInfo.Name)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit }) {
        commit(SET_TOKEN, '')
        commit(SET_USERID, '')
        commit(SET_NAME, '')
        removeToken()
    },
    setInfo({ commit }, token) {
        let tokenInfo = jwtDecode(token)
        commit(SET_USERID, tokenInfo.UserId)
        commit(SET_NAME, tokenInfo.Name)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
