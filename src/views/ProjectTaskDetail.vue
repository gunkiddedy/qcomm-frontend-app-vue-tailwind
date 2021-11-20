<template>
    <div class="app project-task-detail">
        
        <ProjectHeader :project="projectDetail" currentMenu="progress" />
        
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
                            <span class="text-green-500 text-sm font-bold">{{ status }}</span>
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
                                <div v-if="allowedTo('discussionArchive')" class="content-end btn-archive py-2 flex justify-end">
                                    <button v-if="0===1" class="flex items-center justify-between bg-red-500 hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none px-2 py-1 rounded">
                                        <svg class="w-4 mr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                        <span class="text-white">Archive</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BUAT TASK BARU -->
                <div v-if="allowedTo('taskReply')" class="tambahkan-dokumen w-full justify-between bg-indigo-50 my-8">
                    <div class="bg-white shadow-lg rounded pb-1">
                        <div v-if="status === 'ACTIVE'" class="title text-purple-700 text-md font-bold px-4 py-3 rounded-t bg-gray-100">
                            Tambahkan Balasan (Komentar)
                        </div>
                        <div class="txt-area px-4">
                            <textarea
                                v-if="status === 'ACTIVE'"
                                v-model="message"
                                placeholder="Tulis komentar disini..." 
                                rows="5" 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2 py-2">
                            </textarea>
                        </div>
                        <div v-if="attachment" class="flex flex-col px-4 pt-2 pb-4">
                            <span class="text-xs">
                                {{attachment.name}}
                                <span @click="clearFiles" class="text-xs text-red-400 cursor-pointer">clear file</span>
                            </span>
                        </div>
                        <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start px-4 mb-4 pt-5">
                            <button
                                v-if="status === 'ACTIVE'"
                                @click="replyTask" 
                                class="bg-red-400 text-white px-4 py-1 rounded hover:bg-green-600 focus:bg-green-600 focus:ring-4 focus:ring-green-200 focus:outline-none">
                                <span class="font-semibold text-gray-50 text-sm leading-loose" >
                                    {{isReply ? 'Processing...' : 'Reply To This Task' }}
                                </span>
                            </button>
                            <label 
                                v-if="status === 'ACTIVE'"
                                class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:ml-4 lg:mt-0 mt-2">
                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                <input multiple @change="onFileChange" type="file" id="fileid" hidden class="rounded text-sm">
                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">
                                    Attach Files (multiple)
                                </span>
                            </label>
                            <label
                                v-if="status === 'ACTIVE'"
                                @click="updateTaskStatus(1)"
                                class="bg-purple-500 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-400 lg:ml-4 lg:mt-0 mt-2">
                                
                                <span
                                    class="font-semibold text-sm ml-2 text-white leading-loose">
                                    {{resolved ? 'Closing..' : 'Close This Task'}}
                                </span>
                            </label>
                            <label
                                v-if="status === 'RESOLVED'"
                                @click="updateTaskStatus(0)"
                                class="bg-purple-500 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-400 lg:ml-4 lg:mt-0 mt-2">
                                
                                <span
                                    class="font-semibold text-sm ml-2 text-white leading-loose">
                                    {{resolved ? 'Open This Task' : 'Open This Task'}}
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
import ProjectHeader from '../components/ProjectHeader'

export default {
    components: {
        MiniSidebarComponent,
        ProjectHeader,
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
            attachment: '',
            message: '',
            progress: 'ONGOING',
            isReply: false,
            resolved: false,      
            status: 'RESOLVED',      
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
            this.attachment = '';
        },
        isResolved(){
            this.resolved = !this.resolved;
        },
        onFileChange(e){
            const file = e.target.files[0] || e.dataTransfer.files[0];
            this.attachment = file;
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
                this.attachment = '';
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
                this.projectId = this.taskDetail.projectId;
                this.taskId = this.id;
                this.status = this.taskDetail.status;
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
        updateTaskStatus(param) {
            axios.put(`/tasks/resolve?taskId=${this.taskId}&resolveStatus=${param}`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + this.getAppToken()
                    }
            })
            .then((response) => {
                this.status = response.data.data.status;
                this.resolved = this.status === 'RESOLVED';
            })
            .catch((error) => {
                this.isReply = false;
                this.$swal('Error!', `${error}`, 'error');
                console.log(error);
            });            
        }
    },
}
</script>