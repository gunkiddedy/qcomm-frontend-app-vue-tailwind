<template>
    <div class="header-component bg-white -mx-36 px-36">

        <div class="w-16 h-16 flex justify-center items-center text-gray-600 md:hidden">
            <button class="p-1 hover:text-blue-500" :class="{'text-gray-500': isMenuOpen}" @click="toggleMenu">
                <span class="pl-10 text-purple-500 text-2xl text-bold">ProManager</span>
            </button>

            <transition enter-active-class="transition duration-200 ease-in-out transform" enter-class="-translate-x-full opacity-0" leave-active-class="transition duration-200 ease-in-out transform" leave-to-class="-translate-x-full opacity-0">
                <div v-show="isMenuOpen" class="absolute inset-0 h-screen" @click.self="toggleMenu">
                    <div ref="menu" class="mt-16 absolute inset-0 z-40 overflow-y-auto">
                        <div class="py-0 w-full min-h-full bg-purple-500">
                            <div class="px-6 py-3 flex items-center border-b border-gray-100 sm:flex-col">
                                <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                    <router-link to="/" class="text-white text-l sm:hidden">Dashboard</router-link>
                                </div>
                            </div>
                            <div class="px-6 py-3 flex items-center border-b border-gray-100 sm:flex-col">
                                <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                    <router-link to="/" class="text-white text-l sm:hidden">My Tasks</router-link>
                                </div>
                            </div>
                            <div class="px-6 py-3 flex items-center border-b border-gray-100 sm:flex-col">
                                <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                    <router-link to="/" class="text-white text-l sm:hidden">My Projects</router-link>
                                </div>
                            </div>        
                            <div class="px-6 py-3 flex items-center border-b border-gray-100 sm:flex-col">
                                <div @click="handleLogout" class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                    <div class="text-white text-l sm:hidden">Logout</div>
                                </div>
                            </div>                                                  
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <nav class="bg-white md:block hidden">
            <div class="max-w-7xl mx-auto">
                <div class="flex items-center justify-between h-20">
                        <div class="flex-shrink-0">
                            <router-link to="/">
                                <span class="company text-purple-700 hover:text-green-600 text-2xl font-bold">
                                    ProManager
                                </span>
                            </router-link>
                        </div>
                        <div class="hidden lg:block">
                            <div class="flex items-baseline space-x-4">
                                <router-link to="/" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Dashboard</router-link>
                                <div class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div
                                        @click="menuMyTask" 
                                        class="cursor-pointer flex items-center">
                                        <div class="mr-1">My Tasks</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconMyTask" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div 
                                        @click="clickMyTask = !clickMyTask"
                                        v-if="clickMyTask"
                                        class="dropdown bg-white rounded px-0 py-2 shadow z-20 w-1/4 absolute mt-8 h-96 overflow-y-auto">
                                        <router-link
                                            v-for="(item, i) in tasks.slice(0,6)"
                                            :key="i"
                                            :to="`/tasks/${item.id}`"
                                            style="border-bottom: 1px dashed #ccc"
                                            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 cursor-pointer">
                                            <div
                                                class="icon rounded-full bg-blue-200 px-1 py-1 mr-4">
                                                <svg class="w-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </div>
                                            <div class="title flex flex-col">
                                                <div class="small-title text-sm font-semibold">
                                                    {{item.title}}
                                                </div>
                                                <div class="text-xs text-gray-400">
                                                    {{item.createdAt | momentRelativeTime}}
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>

                                <router-link to="/projects" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Projects</router-link>
                                
                                <div v-if="showMenuManage && allowedTo('projectUpdate')" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div @click="menuManage" class="cursor-pointer flex items-center">
                                        <div class="mr-1">Manage</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconManage" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        @click="clickManage = !clickManage"
                                        v-if="clickManage" 
                                        class="dropdown bg-white rounded px-0 shadow z-20 w-1/6 absolute mt-8">
                                        <div class="sidebar-contain flex flex-col px-2 py-8">
                                            <div class="title flex flex-col items-center">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    Account
                                                </div>
                                                <router-link to="/users" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar User
                                                </router-link>
                                                <router-link to="/projects" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Project
                                                </router-link>
                                                <router-link to="/companies" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Company
                                                </router-link>
                                                <router-link to="/user-kpi" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Update KPI
                                                </router-link>
                                            </div>

                                            <div class="title flex flex-col items-center mt-4">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    setting
                                                </div>

                                                <router-link to="/groups" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Group
                                                </router-link>
                                                <router-link to="/categories" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Kategori
                                                </router-link>
                                            </div>
                                        </div>
                                                                               
                                    </div>
                                </div>

                                <div class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div @click="menuMyAccount" class="cursor-pointer flex items-center">
                                        <div class="mr-1">My Account</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconMyAccount" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div 
                                        @click="clickMyAccount = !clickMyAccount"
                                        v-if="clickMyAccount" 
                                        class="dropdown bg-white rounded px-0 shadow z-20 w-1/6 absolute mt-8">
                                        <div class="sidebar-contain flex flex-col px-2 py-8">
                                            <div class="title flex flex-col items-center">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    Account
                                                </div>
                                                <router-link :to="`/user-form-edit/${userId}`" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Update Akun
                                                </router-link>
                                                <router-link to="/user-password" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Ubah Password
                                                </router-link>
                                                <div
                                                    @click="handleLogout"
                                                    class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Logout
                                                </div>
                                            </div>

                                            <div class="title flex flex-col items-center mt-4">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    support
                                                </div>

                                                <router-link to="/" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Bantuan
                                                </router-link>
                                            </div>
                                        </div>
                                                                               
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="logout">
                            <button 
                                @click="handleLogout"
                                v-if="isLogin"
                                class="text-red-600 hover:text-green-600 focus:text-green-600 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                <span>LOGOUT</span>
                                <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                            <button 
                                @click="toLogin"
                                v-else 
                                class="text-red-600 hover:text-green-600 focus:text-green-600 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                <span>LOGIN</span>
                                <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>

                </div>
            </div>
        </nav>
        <div v-if="clickMyTask || clickManage || clickMyAccount" class="outside" @click="away"></div>
    </div>
</template>

<script>
import axios from 'axios'
import appMixins from '../mixins/appMixins'
export default {
    name: 'HeaderComponent',
    mixins: [
        appMixins,
    ],
    data(){
        return {
            isMenuOpen: false,
            clickMyTask: false,
            clickManage: false,
            clickMyAccount: false,
            isLogin: false,
            userId: 1,
            showMenuManage: false,
            tasks: '',
        }
    },
    watch: {
        isMenuOpen: isOpen => {
            if (isOpen) {
                document.body.style.setProperty("overflow", "hidden");
                document.body.style.setProperty("position", "relative");
            } else {
                document.body.style.removeProperty("overflow");
                document.body.style.removeProperty("position");
            }
        }
    },
    computed: {
        rotateIconMyAccount(){
            return {
                transform: this.clickMyAccount, 
                'rotate-90': this.clickMyAccount,
                transition: this.clickMyAccount,
                'duration-300': this.clickMyAccount, 
                'ease-in-out': this.clickMyAccount
            }
        },
        rotateIconManage(){
            return {
                transform: this.clickManage, 
                'rotate-90': this.clickManage,
                transition: this.clickManage,
                'duration-300': this.clickManage, 
                'ease-in-out': this.clickManage
            }
        },
        rotateIconMyTask(){
            return {
                transform: this.clickMyTask, 
                'rotate-90': this.clickMyTask,
                transition: this.clickMyTask,
                'duration-300': this.clickMyTask, 
                'ease-in-out': this.clickMyTask
            }
        }
    },
    mounted() {
        if(localStorage.status == '200'){
            this.isLogin = true;
            this.userId = localStorage.userId;
            if(localStorage.menuManage != 'undefinned') {
                this.showMenuManage = true;
            }else{
                this.showMenuManage = false;
            }
        }else{
            this.isLogin = false;
            // this.$router.push('/login');
        }
        this.getUserDetail();
    },

    methods: {
        toTasks(param){
            this.$router.push({
                path: `/tasks/${param}`,
            });
        },
        getUserDetail(){
            axios.get(`/users/${localStorage.userId}`)
            .then((response) => {
                this.tasks = response.data.data?.tasks;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        toggleMenu() {
            this.$refs.menu.scrollTo(0, 0)
            this.isMenuOpen = !this.isMenuOpen;
        },
        away() {
            this.clickManage = false;
            this.clickMyAccount = false;
            this.clickMyTask = false;
        },
        menuMyTask(){
            this.clickMyTask = !this.clickMyTask;
            this.clickManage = false;
            this.clickMyAccount = false;
        },
        menuManage(){
            this.clickManage = !this.clickManage;
            this.clickMyTask = false;
            this.clickMyAccount = false;
        },
        menuMyAccount(){
            this.clickMyAccount = !this.clickMyAccount;
            this.clickMyTask = false;
            this.clickManage = false;
        },
        toLogin(){
            this.$router.push("/login");
        },
        handleLogout(){
            this.$swal({
                text: "Anda yakin akan logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#6b7280",
                confirmButtonText: "Ya, logout!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('currentUser/afterLogout');
                    this.$swal("Success!", "Anda berhasil logout", "success");
                    this.$router.push('/login');
                }
                else if (result.isDismissed) {
                  this.$swal("Logout Dibatalkan!");
                }
            });
        }
    },
}
</script>

<style scoped>
.outside {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
}
.router-link-exact-active {
    color: #EF4444;
    cursor: pointer;
}
</style>