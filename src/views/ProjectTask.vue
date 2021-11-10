<template>
    <div class="app project-task">
        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="loader-page flex justify-center" v-if="loaderPage">
                <Loader />
            </div>
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        <span>
                            {{projectDetail.title ? projectDetail.title : 'Title'}}
                        </span>
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        {{projectDetail.description}}
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <router-link :to="`/projects/${projectDetail.id}/progress`" class="bg-purple-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link :to="`/projects/${projectDetail.id}/documents`" class="bg-red-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >document</span>
                        </router-link>
                        <router-link :to="'/projects/'+projectDetail.id" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >overview</span>
                        </router-link>
                    </div>
                </div>
                <div class="footer-bot text-base font-bold px-4 py-3 rounded-b bg-gray-100 flex lg:flex-row flex-col lg:items-center justify-between">

                    <div class="image-left flex items-center justify-start lg:mb-0 mb-2">
                        <div class="img-gojek flex-shrink-0 rounded-full">
                            <img src="https://pbs.twimg.com/media/EAKvmBZUIAUeWSN.jpg" class="rounded-full w-12">
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                Gojek Indonesia
                            </div>
                            <div class="client text-xs font-bold">
                                Client
                            </div>
                        </div>
                    </div>

                    <div class="image-right flex items-center justify-start">
                        <div class="garis-samping lg:border-r border-gray-400 lg:border-dashed h-12 lg:mr-8"></div>
                        <div class="img-gojek flex-shrink-0 rounded-full bg-blue-300 w-12 h-12 flex items-center justify-center px-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                Ongoing
                            </div>
                            <div class="client text-xs font-bold mr-24">
                                Overall Progress
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="garis border-t border-gray-300 mt-16 my-14 lg:mx-28"></div>
        <div class="wrap-second-content grid lg:grid-cols-4 grid-cols-1 gap-8 lg:px-28">
            <!-- SIDEBAR -->
            <MiniSidebarComponent :taskId="id" />
            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">
                <!-- SEARCH -->
                <div v-if="tasks.length" class="search flex items-center w-full">
                    <button 
                        @click="searchTask()"
                        class="bg-red-400 text-white flex items-center px-4 py-2 rounded-tl rounded-bl shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        v-model="keyword"
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>
                <!-- DAFTAR TUGAS -->
                <div
                    v-if="tasks.length" 
                    class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                    <!-- loop this -->
                    <div 
                        v-for="(item, i) in tasks"
                        :key="i"
                        class="flex lg:flex-row flex-col justify-between w-full border-b py-4">

                        <div class="img-ket flex lg:flex-col">
                            <div class="flex-shrink-0 shadow rounded-full">
                                <img class="h-8 w-8 rounded-full" src="../assets/users/user-1.jpeg" alt="">
                            </div>
                            <div class="flex-shrink-0 shadow rounded-full lg:mt-5 lg:mx-0 mx-3">
                                <img class="h-8 w-8 rounded-full" src="../assets/users/user-1.jpeg" alt="">
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
                                3 responses
                            </div>
                            <div class="archive-button my-2">
                                <button
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
export default {
    components: {
        MiniSidebarComponent,
        Loader
    },
    props: ['id'],
    data() {
        return {
            loaderPage: false,
            projectDetail: '',
            tasks: '',
            // participants: 0,
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
            if(this.keyword)
                this.$swal(this.keyword);
            else
                return false;
        },
        getProjectDetail(){
            this.loaderPage = true;
            axios.get(`/projects/${this.id}`)
            .then((response) => {
                this.loaderPage = false;
                this.projectDetail = response.data.data;
                this.tasks = response.data.data.tasks;
                // if(response.data.data.participants)
                //     this.participants = response.data.data.participants;
                // else
                //     this.participants = 5;
                console.log(response.data);
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