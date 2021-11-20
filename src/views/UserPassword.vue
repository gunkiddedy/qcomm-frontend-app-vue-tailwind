<template>
    <div id="app" class="user-form">
        <div class="project flex lg:flex-row flex-col lg:items-center justify-between mt-10">

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Change Password</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Ubah Password Anda
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
            </div>

        </div>

        <div class="loader-page flex justify-center" v-if="loadingPage">
            <Loader />
        </div>

        <div v-show="!loadingPage" class="form-project mt-8 bg-gray-200">
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Change Password
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Current Password</label>
                            <input
                                v-model="user.currentPassword"
                                type="password"
                                placeholder="Current Password" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">New Password</label>
                            <input
                                v-model="user.password"
                                type="password"
                                placeholder="New Password" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Confirm New Password</label>
                            <input
                                v-model="user.passwordConfirmation"
                                type="password"
                                placeholder="Confirm New Password" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                    </div>

                    <div class="select-file flex items-center justify-start py-4 px-4 mb-4">
                        <button 
                            @click="addUser"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none mr-4">

                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>


                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Update Password' }}
                            </span>
                        </button>

                        <button
                            @click="canceling" 
                            class="bg-gray-100 px-4 py-1 rounded hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none flex items-center justify-start">
                            <svg class="w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span class="font-semibold text-gray-600 text-sm leading-loose" >Cancel</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
const appToken = 'adadasd';
import Loader from '@/components/Loader.vue'
import appMixins from '../mixins/appMixins'

export default {
    components: {
        Loader,
    },
    mixins: [ appMixins ],
    data() {
        return {
            loadingPage: true,
            isSubmitting: false,
            selected: '',
            user: {
                companyId: '',
                groupId : '',
                fullName : '',
                email : '',
                phoneNumber: '',
                title: '',
                role: '',
                status: '',
            }
        }
    },
    mounted() {
        setTimeout(()=>{
            this.loadingPage = false;
        }, 1000)
    },
    methods: {
        addUser(){
            // e.preventDefault();
            this.isSubmitting = true;
            axios.post("/users", this.user, {
                headers: {
                    'Authorization': 'Bearer ' +appToken
                }
            })
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `${this.user.companyId}, ${this.user.groupId}, ${this.user.fullName},${this.user.email}, ${this.user.phoneNumber}, ${this.user.title},${this.user.role}, ${this.user.status}`, "success");
                this.$router.push('/users');
                console.log(response.data);
            })
            .catch((error) => {
                console.log('woooo...'+error);
            });
        },
        canceling(){
            this.$router.go(-1);
        }
    },
}
</script>