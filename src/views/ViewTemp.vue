            <!-- ########## PAGINATION ########## -->
            <!--
            <div class="pagination flex justify-center my-8">
                <nav class="relative z-0 inline-flex shadow-sm space-x-1" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center justify-center px-2 py-2  rounded bg-white text-purple-500 hover:bg-gray-50 font-bold w-10">
                        <span class="sr-only">Previous</span>
                        <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-3 bg-yellow-500 text-sm text-white hover:bg-gray-50 font-bold  rounded">
                    1
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 hover:bg-gray-50 font-bold  rounded">
                    2
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 font-bold  rounded">
                    ...
                    </span>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 hover:bg-gray-50 font-bold  rounded">
                    12
                    </a>
                    <a href="#" class="relative inline-flex items-center justify-center px-2 py-2  rounded bg-white text-purple-500 hover:bg-gray-50 font-bold w-10">
                        <span class="sr-only">Next</span>
                        <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </a>
                </nav>
            </div>
            -->
            
<template>
    <div class="app project-task-detail">
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        {{taskDetail.title}}
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        {{taskDetail.message}}
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <router-link :to="`/projects/${projectDetail.id}/progress`" class="bg-purple-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link :to="`/projects/${projectDetail.id}/documents`" class="bg-red-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </router-link>
                        <router-link :to="'/projects/'+projectDetail.id" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >overview</span>
                        </router-link>
                    </div>
                </div>
                <div class="footer-bot text-base font-bold px-4 py-3 rounded-b bg-gray-100 flex lg:flex-row flex-col lg:items-center justify-between">
                    <div class="image-left flex items-center justify-start lg:mb-0 mb-2">
                        <div class="img-gojek flex-shrink-0 rounded-full bg-blue-300 w-12 h-12 flex items-center justify-center px-2">
                            <svg class="w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                {{ projectDetail.company.title }}
                            </div>
                            <div class="client text-xs">
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
                                {{ projectDetail.status }}
                            </div>
                            <div class="client text-xs mr-24">
                                Overall Progress
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="garis border-t border-gray-300 mt-16 mb-8 lg:mx-28"></div>

        <div class="wrap-second-content grid lg:grid-cols-4 grid-cols-1 gap-8 lg:px-28">

            <!-- SIDEBAR -->
            <MiniSidebarComponent :projectId="taskDetail.projectId" />

            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">
                <div class="tambahkan-dokumen w-full bg-indigo-50">
                    <!-- MENGIRIM DOKUMEN PENDING -->
                    <div class="pending-wrap flex lg:flex-row flex-col lg:items-center lg:justify-between pb-4">
                        <div class="big-title text-xl font-bold text-gray-600">
                            {{ taskDetail.title }}
                        </div>
                        <div class="pending bg-green-200 px-4 py-0 rounded lg:w-auto w-1/3 lg:mt-0 mt-2">
                            <span class="text-green-500 text-sm font-bold">{{ taskDetail.status }}</span>
                        </div>
                    </div>
                    <div class="bg-white shadow-lg rounded" v-if="taskDetail.discussions">
                        <div
                            v-for="(item, i) in taskDetail.discussions"
                            :key="i" 
                            class="pesan-user">
                            <div class="title px-4 py-3 rounded-t bg-gray-100">
                                <div class="isi flex items-center justify-between">
                                    <div class="nama flex flex-col">
                                        <div class="nama-saja text-gray-500 text-md font-bold">
                                            {{item.userFullName}}
                                        </div>
                                        <div class="waktu text-gray-400 text-xs">
                                            {{item.createdAt|momentRelativeTime}}
                                        </div>
                                    </div>
                                    <div class="img">
                                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="isi-pesan px-4 py-4 flex flex-col">
                                <div class="isi">
                                    {{item.message}}
                                </div>
                                <div class="content-end btn-archive py-2 flex justify-end">
                                    <button class="flex items-center justify-between bg-red-500 hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none px-2 py-1 rounded">
                                        <svg class="w-4 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                        <span class="text-white">Archive</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BUAT TASK BARU -->
                <div class="tambahkan-dokumen w-full justify-between bg-indigo-50 my-8">
                    <div class="bg-white shadow-lg rounded pb-1">
                        <div class="title text-purple-700 text-md font-bold px-4 py-3 rounded-t bg-gray-100">
                            Tambahkan Balasan (Komentar)
                        </div>
                        <div class="txt-area px-4">
                            <textarea
                                v-model="message"
                                placeholder="Tulis komentar disini..." 
                                rows="5" 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2 py-2">
                            </textarea>
                        </div>
                        <div v-if="attachment.length" class="flex flex-col px-4 pt-2 pb-4">
                            <span class="text-xs">
                                {{attachment}}
                                <span @click="clearFiles" class="text-xs text-red-400 cursor-pointer">clear files</span>
                            </span>
                            
                        </div>
                        <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start px-4 mb-4">
                            <button
                                @click="replyTask" 
                                class="bg-red-400 text-white px-4 py-1 rounded hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none">
                                <span class="font-semibold text-gray-50 text-sm leading-loose" >
                                    {{isReply ? 'Processing...' : 'Reply To This Task' }}
                                </span>
                            </button>
                            <label 
                                class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:ml-4 lg:mt-0 mt-2">
                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                <input multiple @change="onFileChange" type="file" id="fileid" hidden class="rounded text-sm">
                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">
                                    Attach Files (multiple)
                                </span>
                            </label>
                            <label
                                @click="isResolved"
                                class="bg-purple-500 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-400 lg:ml-4 lg:mt-0 mt-2">
                                <svg v-if="resolved" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span
                                    class="font-semibold text-sm ml-2 text-white leading-loose">
                                    {{resolved ? 'Resolved' : 'Mark as Completed'}}
                                </span>
                            </label>
                        </div>
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
    mixins: [ appMixins ],
    props: ['id'],
    data() {
        return {
            userId: localStorage.userId,
            taskId: '',
            projectId: '',
            title: '',
            taskDetail: '',
            projectDetail: {},
            attachment: [],
            message: '',
            progress: 'on going',
            isReply: false,
            resolved: false,            
        }
    },
    mounted(){
        this.getTaskDetail();
    },
    watch: {
        id(){
            this.getTaskDetail()
        },
        deep: true
    },
    methods: {
        clearFiles(){
            this.attachment = [];
        },
        isResolved(){
            this.resolved = !this.resolved;
        },
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if(this.attachment.length > 3) {
                this.$swal('Maksimal 3 file saja..');
                return false;
            }            
            if (!files.length) return;
            files.forEach(el => {
                this.attachment.push(el.name)
            });
        },
        replyTask(){
            this.isReply = true;
            if(!this.message) {
                this.$swal('Komentar tidak boleh kosong');
                this.isReply = false;
                return false;
            }

            const formData = new FormData();
            formData.append('attachment', this.attachment);
            formData.append('taskId', this.taskId);
            formData.append('userId', this.userId);
            formData.append('projectId', this.projectId);
            formData.append('title', this.title);
            formData.append('message', this.message);
            formData.append('progress', this.progress);
            formData.append('resolved', this.resolved);

            axios.post("/tasks/reply", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + this.getAppToken()
                    }
            })
            .then((response) => {
                this.isReply = false;
                this.message = '';
                this.attachment = [];
                this.resolved = false;
                this.getTaskDetail();
            })
            .catch((error) => {
                this.isReply = false;
                this.$swal('Error!', `${error}`, 'error');
                console.log(error);
            });
        },
        async getTaskDetail(){
            await axios.get(`/tasks/${this.id}`)
            .then((response) => {
                this.taskDetail = response.data.data;
                this.loaderPage = true;
                axios.get(`/projects/${this.taskDetail.projectId}`)
                .then((response) => {
                    this.loaderPage = false;
                    this.projectDetail = response.data.data;
                })
                .catch((error) => {
                    this.$swal('Error!', `${error}`, 'error');
                    this.loaderPage = false;
                    console.log(error);
                });                
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getProjectDetail(pid){
            this.loaderPage = true;
            axios.get(`/projects/${pid}`)
            .then((response) => {
                this.loaderPage = false;
                this.projectDetail = response.data.data;
            })
            .catch((error) => {
                this.$swal('Error!', `${error}`, 'error');
                this.loaderPage = false;
                console.log(error);
            });
        },        
    },
}
</script>