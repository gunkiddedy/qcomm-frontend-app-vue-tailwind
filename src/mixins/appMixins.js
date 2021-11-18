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
        }
    }
}
export default appMixins