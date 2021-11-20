<template>
    <div id="app" class="app">
        <div class="main lg:px-0 md:px-12">
            <div class="project flex items-center justify-between mt-10">
                <div class="project-title">
                    <span class="text-2xl font-semibold leading-3">Daftar Project</span>
                </div>
                <div class="btn-selengkapnya">
                    <router-link to="/project-form">
                        <button v-if="allowedTo('projectAdd')" class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-full px-6 py-2 shadow flex items-center leading-thight">
                            <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            <span class="block text-white font-semibold leading-none tracking-wider">Add Project</span>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="">
                <span class="text-md font-base">
                    Project aktif yang sedang berjalan
                </span>
            </div>
            <div class="loader-page flex justify-center" v-if="loaderPage">
                <Loader />
            </div>

            <div class="image-project mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
                <div
                    v-for="(item, i) in projectList"
                    :key="i" 
                    @click="goToProjectOverview(item.id)"
                    class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                    <div class="img-card-img">
                        <img src="" alt="" class="object-contain w-full rounded-t">
                    </div>
                    <div class="title-card max-h-40 h-40 bg-white flex flex-col py-6 px-6">
                        <div class="img-title text-lg font-semibold">
                            {{ item.title }}
                        </div>
                        <div class="img-desc text-xs font-base">
                            {{ item.description }}
                        </div>
                    </div>
                    <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                        <div class="footer-contain flex items-center justify-start">
                            <div class="flex-shrink-0 mr-2">
                        <div class="flex-shrink-0 rounded-full bg-blue-300 w-10 h-10 flex items-center justify-center px-2">
                            <svg class="w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        </div>                                
                            </div>
                            <div class="flex flex-col py-2">
                                <span class="text-sm font-semibold text-purple-500">
                                    {{ item.title }}
                                </span>
                                <span class="text-xs act-time ">
                                    Aktifitas terakhir {{ item.updatedAt|momentRelativeTime }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader'
import appMixins from '../mixins/appMixins'
export default {
    components: { Loader },
    mixins: [ appMixins ],
    data() {
        return {
            loaderPage: false,
            projectList: '',
            userMenu: localStorage.userMenuManage.split(','),
        }
    },
    created() {
        this.allowedHere('projectList')
    },
    mounted() {
        const find_menu = this.userMenu.find(menu => menu == "projectList");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getProjects();
    },
    methods: {
        getProjects(){
            this.loaderPage = true;
            
            if(localStorage.roleName === 'EMPLOYEE'){
                axios.get(`/users/${localStorage.userId}`)
                .then((response) => {
                    this.loaderPage = false;
                    this.projectList = response.data.data.user_projects;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }else {
                axios.get('/projects')
                .then((response) => {
                    this.loaderPage = false;
                    this.projectList = response.data.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            
        },
        goToProjectOverview(param){
            this.$router.push({
                name: 'ProjectOverview',
                params: {id: param}
            })
        }
    },
}
</script>