const state = {
    userInformation: [],
};

const getters = {
    userData: state => state.userInformation,
    // userId: state => {
    //     state.userInformation.forEach(user => {
    //         user.data.data.user.id;
    //         console.log('getters ' + user.data.data.user.id);
    //     })
    // },
};

const mutations = {
    AFTER_LOGIN : (state, payload) => {
        state.userInformation.push(payload);
        localStorage.setItem('userId', payload.data.data.user.id);
        localStorage.setItem('roleName', payload.data.data.user.roleName);
        localStorage.setItem('fullName', payload.data.data.user.fullName);
        localStorage.setItem('status', payload.data.status);
    },
    AFTER_LOGOUT: (state) => {
        state.userInformation = [];
        localStorage.removeItem('userId');
        localStorage.removeItem('roleName');
        localStorage.removeItem('fullName');
        localStorage.removeItem('status');
    }
};

const actions = {
    afterLogin: (context, payload) => {
        context.commit('AFTER_LOGIN', payload);
    },

    afterLogout: context => context.commit('AFTER_LOGOUT')
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}