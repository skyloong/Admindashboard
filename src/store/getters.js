const getters = {
    token: state => state.user.token,
    userId: state => state.user.userId,
    name: state => state.user.name,
    miniVariant: state => state.settings.miniVariant,
    currentNavText: state => state.nav.currentNavText,
}

export default getters