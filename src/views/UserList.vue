<template>
    <div id="app" class="user-list">
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
                        <span class="text-md text-gray-400">
                            Semua user yang menggunakan sistem
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button
                        @click="goToUserForm" 
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <transition name="fade">
        <div class="image-project mt-8 grid lg:grid-cols-4 gap-12">

            <div
                v-for="(item, i) in userList"
                :key="i"
                @click="goToUserProfile(item.id)" 
                class="card rounded-lg shadow-lg bg-white relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">

                <div class="label-role bg-gray-900 opacity-70 py-1 px-2 text-white absolute mt-2 right-0 rounded-l-md">
                    <span v-if="item.role">
                        {{ item.role }}
                    </span>
                    <span v-else>{{item.roleName}}</span>
                </div>

                <div class="img-card-img flex items-center justify-center px-2 py-2">
                    <!--
                    <img
                        v-if="!item.profilePictureUrl"
                        src="../assets/users/user-1.jpeg" 
                        :alt="item.id"
                        class="rounded-full w-60">
                    <img 
                        v-else
                        :src="item.profilePictureUrl" 
                        :alt="item.id"
                        class="rounded-full w-60">
                    -->
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>                    
                </div>

                <div class="footer-card bg-white px-6 rounded-b-lg py-3">
                    <div class="footer-contain flex items-center justify-around">
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold text-gray-500">
                                {{ item.fullName }}
                            </span>
                            <span class="text-xs act-time text-gray-400">
                                Aktifitas terakhir
                            </span>
                            <span class="text-xs act-time text-gray-400">
                                {{ item.createdAt | momentRelativeTime}}
                            </span>
                        </div>
                    </div>
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
const appToken = '6027c83b1a75fe2bb9fd75f4'
import appMixins from '../mixins/appMixins'

export default {
    components: {
        Loader
    },
    mixins: [ appMixins ],
    data() {
        return {
            loaderPage: false,
            filter: {
                sort: 'ASC',
                order: '',
                limit: '',
                keyword: '',
            },
            userList: [],
            userMenu: localStorage.userMenuManage.split(','),
        }
    },
    created() {
        this.allowedHere('userList')
    },    
    mounted() {
        const find_menu = this.userMenu.find(menu => menu == "userList");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getUserList();
    },
    methods: {
        searchUser(){
            this.loaderPage = true;
            axios.get(`/users?sort=ASC&order=updatedAt&limit=12&keyword=${this.filter.keyword}`, {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            }).then((response) => {
                this.loaderPage = false;
                this.userList = response.data.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        },
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
            // {{apiHost}}users?sort=ASC&order&limit&keyword
            axios.get(`/users?sort=${this.filter.sort}&order=${this.filter.order}&limit=${this.filter.limit}&keyword=${this.filter.keyword}`)
            .then((response) => {
                this.loaderPage = false;
                this.userList = response.data.data;
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>