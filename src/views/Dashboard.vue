<template>
    <div id="app" class="aa">
        <!-- ############ PROJECT SAYA ############# -->
        <div class="project flex items-center justify-between mt-10">
            <div class="project-title">
                <span class="text-2xl font-semibold leading-3">Project Saya</span>
            </div>
            <div class="btn-selengkapnya">
                <router-link to="/projects">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white rounded-full px-6 py-2 shadow flex items-center leading-thight">
                        <span class="block text-white font-semibold leading-none tracking-wider">Selengkapnya</span>
                        <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </router-link>
            </div>
        </div>
        <!-- ############ PROJECT AKTIF TITLE SMALL ############# -->
        <div class="">
            <span class="text-md font-base">
                Project aktif yang sedang berjalan
            </span>
        </div>
        <!-- ############ IMAGE PROJEk ############# -->
        <div class="image-project mt-8 grid xl:grid-cols-4 lg:grid-cols-2 gap-12">
            <!-- CARD LOOP-->
            <div 
                v-for="(item, i) in projects"
                :key="i"
                @click="toProjectOverview(item.id)" 
                class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div class="img-card-img">
                    <img src="" alt="" class="object-contain w-full rounded-t">
                </div>
                <div class="title-card max-h-40 h-40 flex flex-col py-6 px-6 bg-white">
                    <div class="img-title text-lg font-semibold">
                        {{item.title}}
                    </div>
                    <div class="img-desc text-xs font-base">
                        {{item.description.substring(0,90)}}
                    </div>
                </div>
                <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                    <div class="footer-contain flex items-center justify-start">
                        <div class="flex-shrink-0 shadow rounded-full mr-2">
                            <svg class="w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        </div>
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold">
                                {{ item.companyName }}
                            </span>
                            <span class="text-xs act-time">
                                Aktifitas terakhir {{item.createdAt | momentRelativeTime}}
                            </span>
                        </div>
                    </div>
                </div>
            </div><!-- end loop-->
        </div>

        <!-- ############ GARIS ############# -->
        <div class="garis border-t border-gray-300 mt-24 mb-12"></div>

        <!-- ############ SIDEBAR AND SEARCH ############# -->
        <div class="wrap-second-content grid gap-12">
            <!-- SIDEBAR -->
            <!-- SECOND CONTENT -->
            <div class="lg:col-span-3 search">
                <!-- SEARCH -->
                <div class="search flex items-center w-full">
                    <input 
                        type="search" 
                        v-model="keyword"
                        @change="searchTask"
                        class="w-full rounded-tl rounded-bl py-2 px-2 shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Masukkan kata kunci...">
                    <button
                        @click="searchTask" 
                        class="bg-red-400 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-2 py-2 rounded-tr rounded-br w-auto shadow leading-thight">
                        <span class="block mr-1 font-semibold text-md">Search</span>
                        <svg class="w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                <!-- TASKS -->
                <div class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                    <!-- LOOP -->
                    <div 
                        v-for="(item, i) in tasks"
                        :key="i"
                        class="flex lg:flex-row flex-col lg:justify-between w-full border-b py-4">
                        <div class="img-ket flex lg:flex-col">
                            <div class="flex-shrink-0 shadow rounded-full">
                                <img class="h-8 w-8 rounded-full" src="../assets/users/user-1.jpeg" alt="">
                            </div>
                        </div>
                        <div class="text flex flex-wrap w-3/4">
                            <router-link :to="`/tasks/${item.id}`"> 
                                <div class="judul mb-2 text-lg font-semibold text-gray-500 cursor-pointer hover:text-blue-500">
                                    {{item.title}}
                                </div>
                                <div class="isi text-gray-500 cursor-pointer hover:text-blue-500 text-md">
                                    {{item.message}}
                                </div>
                            </router-link>
                        </div>
                        <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                            <div class="jam text-sm text-gray-300 font-semibold lg:mr-0 mr-2">
                                {{item.createdAt | momentDatetime}}
                            </div>
                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                {{ item.status }}
                            </div>
                        </div>
                    </div><!-- end loop-->
                    <div class="tampilkan justify-center flex mt-4">
                        <button class=" flex items-center">
                            <span class="text-gray-500 text-sm font-semibold leading-thight">Tampilkan selanjutnya</span>
                            <svg class="w-4 text-gray-500 mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue'
import appMixins from '../mixins/appMixins'
export default {
    components: {
        MiniSidebarComponent,
    },
    mixins: [appMixins],
    data() {
        return {
            projects: '',
            tasks: '',
            keyword: '',
        }
    },
    mounted(){
        if(localStorage.userId == undefined)
            this.$router.push('/login');
        this.getUserDetail();
    },
    methods: {
        searchTask(){
            this.$swal('belum ada');
        },
        getUserDetail(){
            axios.get(`/users/${localStorage.userId}`)
            .then((response) => {
                this.projects = response.data.data.user_projects;
                this.tasks = response.data.data.tasks.reverse();
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        toProjectOverview(param){
            this.$router.push({
                name: 'ProjectTask',
                params: {id: param}
            });
        }
    },
}
</script>