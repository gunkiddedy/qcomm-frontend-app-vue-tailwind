<template>
    <div class="bg-purple-700 -mx-36 h-screen relative">

        <div class="wrap-all py-20">
            <div class="big-title-wrap flex flex-col items-center mx-auto w-2/3 px-8">
                <div class="big-title md:text-4xl text-2xl font-semibold text-white w-full text-center">
                    QComm Project Management System
                </div>
                <div class="small text-gray-400 text-md md:w-3/4 w-full text-center">
                    Untuk dapat memulai, silahkan login pada form di bawah ini dengan menggunakan username dan password anda!
                </div>
            </div>

            <div class="form md:max-w-md w-2/3 mx-auto pt-4 px-8">
                <form class="login-form">
                    <div class="bg-white shadow-lg rounded-lg px-8 pt-6 py-8 mb-4 flex flex-col">
                        <div v-if="response" class="text-red-400 px-4 py-1 font-bold text-center text-sm">
                            {{ response }}
                        </div>
                        <div class="my-8">
                            <input 
                                v-model="user.username"
                                class="shadow border rounded-full w-full py-2 px-3 text-grey-darker focus:outline-none focus:border-blue-300 focus:shadow-inner focus:bg-gray-100 text-center" 
                                id="username" 
                                type="text" 
                                placeholder="Masukkan username anda">
                        </div>
                        <div class="mb-4">
                            <input
                                v-model="user.password" 
                                class="shadow border border-red rounded-full w-full py-2 px-3 text-grey-darker mb-3 focus:outline-none focus:border-blue-300 focus:shadow-inner focus:bg-gray-100 text-center" id="password" 
                                type="password" 
                                placeholder="Masukkan password anda">
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                @click="handleLogin" 
                                class="flex items-center justify-center bg-yellow-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white font-bold py-3 px-4 rounded-full w-full" 
                                type="button">
                                <svg v-if="isLoging" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ isLoging ? "Processing..." : "Login" }}
                            </button>
                        </div>
                        
                    </div>
                </form>
            </div>

            <div class="forgot mx-auto text-center">
                <span class="text-gray-300" style="display:none">
                    Lupa password? Klik
                    <router-link to="/user-password" class="font-bold text-gray-200">disini</router-link> untuk reset.
                </span>
            </div>
        </div>

        <div class="flex flex-col absolute w-full" style="bottom:0">
            <div class="footer-small text-gray-800">
                <svg class="svg" style="pointer-events: none" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 75">
                    <g class="b"><path class="c" d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"></path></g>
                    <g class="b"><path class="d" d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"></path></g>
                    <g class="b"><path class="d" d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"></path></g>
                    <g class="b"><path class="d" d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"></path></g>
                </svg>
            </div>
            <div class="flex lg:flex-row flex-col items-center justify-between bg-gray-800 text-gray-400 lg:py-4 py-2 lg:px-24 px-2">
                <div class="copy">
                    Copyright &copy; 2021. QComm
                </div>
                <div class="bantuan">
                    Bantuan:support@qcomm.id
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
import appMixins from '../mixins/appMixins'
export default {
    data(){
        return {
            user: {
                username: '',
                password: '',
            },
            response: '',
            isLoging: false
        }
    },
    mixins: [appMixins],
    computed: {
       getUserData: {
          get: function () {
            this.response = this.$store.getters["currentUser/userData"];
          },
        },
    },
    methods: {
        handleLogin(e){
            e.preventDefault();
            this.isLoging = true;
            axios.post(`/auth/login?username=${this.user.username}&password=${this.user.password}`)
            .then((response) => {
                if(response.data.status == 200){
                    console.log(response.data)
                    this.isLoging = false;
                    this.$store.dispatch('currentUser/afterLogin', response);
                    this.$router.push('/');
                    console.log(response.data);
                }else{
                    this.response = response;
                }
            })
            .catch((error) => {
                this.response = error;
                this.isLoging = false;
                console.log(error);
            });
        }
    },
}
</script>

<style scoped>
    .svg-border-waves {
        padding-top: 2rem;
    }
    .svg-border-waves svg {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        width: 100%;
    }
    .a {
        fill: none;
    }
    .b {
        clip-path: url(#a);
    }
    .d {
        opacity: 0.5;
        isolation: isolate;
    }
</style>
