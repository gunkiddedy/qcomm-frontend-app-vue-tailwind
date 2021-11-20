export const appMixins = {
    data() {
        return {
            authRules: [],
            showMenu: false,
        }
    },

    created: function() {
        if (localStorage.status === '200') {
            const rules = [...localStorage.userMenuUpdate.split(","),
            ...localStorage.userMenuTask.split(","),
            ...localStorage.userMenuProject.split(","),
            ...localStorage.userMenuManage.split(","),
            ...localStorage.userMenuEdit.split(","),
            ...localStorage.userMenuDashboard.split(","),
            ...localStorage.userMenuArchive.split(","),
            ...localStorage.userMenuAdd.split(",")
            ]
            this.authRules = rules
        }
    },

    methods: {
        assetUrl(fileName) {
            return 'http://localhost:3000/images/' + fileName
        },

        getAppToken() {
            return "NiddXiSD/cEYWluKbZX3BlZ69hM="
        },

        formatDate(inputDate) {
            if (inputDate) {
                let date = inputDate.toLocaleDateString('en-GB').split('/');
                return date[1]+'/'+date[0]+'/'+date[2];
            }
        },

        allowedTo(action) {
            return this.authRules.filter(e => e === action).length > 0
        },

        allowedHere(action) {
            if (!this.allowedTo(action)) {
                this.$router.push('/error');
            }            
        }
    }
}
export default appMixins