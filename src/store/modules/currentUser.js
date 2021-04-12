const state = {
    userInformation: [],
    menu: {
        add: [],
        archive: [],
        dashboard: [],
        edit: [],
        manage: [],
        projects: [],
        tasks: [],
        update: [],
    }
};

const getters = {
    userData: state => state.userInformation,
    userMenuAdd: state => state.menu.add,
    userMenuArchive: state => state.menu.archive,
    userMenuDashboard: state => state.menu.dashboard,
    userMenuEdit: state => state.menu.edit,
    userMenuManage: state => state.menu.manage,
    userMenuProject: state => state.menu.projects,
    userMenuTask: state => state.menu.tasks,
    userMenuUpdate: state => state.menu.update
};

const mutations = {
    AFTER_LOGIN : (state, payload) => {
        state.userInformation.push(payload);
        state.menu.add.push(payload.data.data.menu.add);
        state.menu.archive.push(payload.data.data.menu.archive);
        state.menu.dashboard.push(payload.data.data.menu.dashboard);
        state.menu.edit.push(payload.data.data.menu.edit);
        state.menu.manage.push(payload.data.data.menu.manage);
        state.menu.projects.push(payload.data.data.menu.projects);
        state.menu.tasks.push(payload.data.data.menu.tasks);
        state.menu.update.push(payload.data.data.menu.update);
        localStorage.setItem('userId', payload.data.data.user.id);
        localStorage.setItem('roleName', payload.data.data.user.roleName);
        localStorage.setItem('fullName', payload.data.data.user.fullName);
        localStorage.setItem('status', payload.data.status);
        localStorage.setItem('userMenuAdd', payload.data.data.menu.add);
        localStorage.setItem('userMenuArchive', payload.data.data.menu.archive);
        localStorage.setItem('userMenuDashboard', payload.data.data.menu.dashboard);
        localStorage.setItem('userMenuEdit', payload.data.data.menu.edit);
        localStorage.setItem('userMenuManage', payload.data.data.menu.manage);
        localStorage.setItem('userMenuProject', payload.data.data.menu.projects);
        localStorage.setItem('userMenuTask', payload.data.data.menu.tasks);
        localStorage.setItem('userMenuUpdate', payload.data.data.menu.update);
    },
    AFTER_LOGOUT: (state) => {
        state.userInformation = [];
        localStorage.removeItem('userId');
        localStorage.removeItem('roleName');
        localStorage.removeItem('fullName');
        localStorage.removeItem('status');
        localStorage.removeItem('userMenuAdd');
        localStorage.removeItem('userMenuArchive');
        localStorage.removeItem('userMenuDashboard');
        localStorage.removeItem('userMenuEdit');
        localStorage.removeItem('userMenuManage');
        localStorage.removeItem('userMenuProject');
        localStorage.removeItem('userMenuTask');
        localStorage.removeItem('userMenuUpdate');
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