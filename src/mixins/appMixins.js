export const appMixins = {
    data() {
        return {
            defaultTitle: '',
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
    }
}
export default appMixins