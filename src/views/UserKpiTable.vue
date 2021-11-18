<template>
    <div id="app" class="user-list">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col lg:items-center justify-between mt-10">

            <div class="flex lg:flex-row flex-col lg:items-center justify-start lg:mb-0 mb-4">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Daftar User</span>
                    </div>
                    <div class="">
                        <span class="text-md font-semibold text-gray-400">
                            Semua user yang menggunakan sistem
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <!-- <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button
                        @click="goToUserForm" 
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div> -->
                <div class="search flex items-center w-full lg:my-8 my-2 lg:px-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-1/3 shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>
            </div>

        </div>

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <!-- ############ IMAGE USER ############# -->
        <transition name="fade">
        <div class="table-user mt-8">
            <!-- TABLE -->
            <div class="w-full">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                    <table class="min-w-full bg-white">
                        <thead class="bg-white text-gray-700 text-lg font-extrabold">
                            <tr>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Employee</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Deadline</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Quality</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Idea</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Design</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">Total Projects</th>
                            <th class="text-left py-4 px-4 uppercase font-semibold text-sm">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr class="bg-gray-100">
                                <td class="text-left py-4 px-4">Lian</td>
                                <td class="text-left py-4 px-4">Smith</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">6</td>
                                <td>
                                    <button class="bg-purple-600 px-6 py-1 rounded-full flex items-center justify-between hover:bg-purple-700 focus:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none">
                                        <span class="mr-1 text-white">Detail</span>
                                        <svg class="w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="text-left py-4 px-4">Lian</td>
                                <td class="text-left py-4 px-4">Smith</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">90</td>
                                <td class="text-left py-4 px-4">6</td>
                                <td>
                                    <button class="bg-purple-600 px-6 py-1 rounded-full flex items-center justify-between hover:bg-purple-700 focus:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none">
                                        <span class="mr-1 text-white">Detail</span>
                                        <svg class="w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </transition>

        <!-- <div class="bg-indigo-100 -ml-36 -mr-36 h-20"></div> -->

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader.vue'
const APP_ID = '6027c83b1a75fe2bb9fd75f4'
import appMixins from '../mixins/appMixins'

export default {
    components: {
        Loader
    },
    mixins: [ appMixins ],
    data() {
        return {
            loaderPage: false,
            user: {
                sort: 'ASC',
                order: 'limit',
                keyword: '',
            },
            userList: [],
        }
    },
    mounted() {
        this.getUserList();
    },
    methods: {
        goToUserForm(){
            this.$router.push('/user-form');
        },
        goToUserProfile(param){
            this.$router.push({ 
                path: `/users/${param}`
            });
        },
        getUserList(){
            this.loaderPage = true;
            axios.get('/users', {
                headers: {
                    'app-id': APP_ID
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.userList = response.data.data;
                // console.log('user list ' + response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>