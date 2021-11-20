<template>
    <div class="app project-task">
        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <ProjectHeader :project="projectDetail" currentMenu="progress" />
        
        <div class="garis border-t border-gray-300 mt-16 my-14 lg:mx-28"></div>
        <div class="wrap-second-content grid lg:grid-cols-4 grid-cols-1 gap-8 lg:px-28">

            <MiniSidebarComponent :taskId="id" :projectId="id" />
            <div class="col-span-3 search">
                <div v-if="tasks.length" class="search flex items-center w-full">
                    <input 
                        v-model="keyword"
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                    <button 
                        @click="searchTask()"
                        class="bg-red-400 text-white flex items-center px-4 py-2 rounded-tl rounded-bl shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </button>                        
                </div>
                <div
                    v-if="tasks.length" 
                    class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                    <div 
                        v-for="(item, i) in tasks"
                        :key="i"
                        class="flex lg:flex-row flex-col justify-between w-full border-b py-4">

                        <div class="img-ket flex lg:flex-col">
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        </div>
                        <router-link :to="`/tasks/${item.id}`" class="text flex flex-col w-3/4">
                            <div class="judul mb-2 font-semibold text-gray-500">
                                {{item.title}}
                            </div>
                            <div class="isi text-gray-500">
                                {{item.message}}
                            </div>
                        </router-link>
                        <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                            <div class="jam text-sm text-gray-300 font-semibold lg:mr-0 mr-2">
                                {{item.createdAt | momentDatetime}}
                            </div>

                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                {{ item.status }}
                            </div>
                            
                            <div v-if="allowedTo('taskArchive')" class="archive-button my-2">
                                <button
                                    v-if="0===1"
                                    @click="archiveThis" 
                                    class="flex items-center justify-between bg-red-500 hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none px-2 py-1 rounded">
                                    <svg class="w-4 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                    <span class="text-white">Archive</span>
                                </button>
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
import Loader from '@/components/Loader'
import appMixins from '../mixins/appMixins'
import ProjectHeader from '../components/ProjectHeader'

export default {
    components: {
        MiniSidebarComponent,
        Loader,
        ProjectHeader
    },
    mixins: [ appMixins ],
    props: ['id'],
    data() {
        return {
            loaderPage: false,
            projectDetail: '',
            tasks: '',
            keyword: '',
        }
    },
    watch: {
        id: function(){
            this.getProjectDetail();
        },
        deep: true
    },
    mounted(){
        this.getProjectDetail();
    },
    methods: {
        searchTask(){
            axios.get(`/tasks?projectId=${this.projectDetail.id}&userId=${localStorage.userId}&keyword=${this.keyword}`)
            .then((response) => {
                this.tasks = response.data.data;
                console.log(response.data.data)
            })
            .catch((error) => {
                this.$swal('Error! Sistem gagal merespon dengan data');
            });            
        },
        getProjectDetail(){
            this.loaderPage = true;
            axios.get(`/projects/${this.id}`)
            .then((response) => {
                this.loaderPage = false;
                this.projectDetail = response.data.data;
                this.tasks = response.data.data.tasks.reverse();
            })
            .catch((error) => {
                this.$swal('Error!', `${error}`, 'error');
                this.loaderPage = false;
                console.log(error);
            });
        },
        archiveThis(){
            alert('hello')
        }
    },
}
</script>