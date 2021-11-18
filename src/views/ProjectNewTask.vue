<template>
    <div class="app project-new-task">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        {{projectDetail.title}}
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        {{projectDetail.message}}
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

        <div class="garis border-t border-gray-300 mt-16 my-14 lg:mx-28"></div>

        <div class="wrap-second-content grid lg:grid-cols-4 grid-cols-1 gap-8 lg:px-28">

            <!-- SIDEBAR -->
            <MiniSidebarComponent :projectId="id" />

            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">
                <!-- BUAT TASK BARU -->
                <div class="tambahkan-dokumen w-full justify-between bg-indigo-50">
                    <div class="bg-white shadow-lg rounded pb-1">
                        <div class="title text-purple-700 text-md font-bold px-4 py-3 rounded-t bg-gray-100">
                            Buat Task Baru
                        </div>
                        <div class="px-4 pt-4">
                            <multiselect label="fullName" class="text-large" placeholder="Add this task to someone" :allow-empty="false" :multiple="false" v-model="userMask" :options="users"></multiselect>
                        </div>
                        
                        <div class="txt-area px-4">
                            <textarea
                                v-model="task.message"
                                placeholder="Deskripsi task/tugas disini.." 
                                rows="8" 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded px-2">
                            </textarea>
                        </div>
                        <div class="judul kategori px-4">
                            <input
                                v-model="task.title"
                                type="text"
                                placeholder="Judul singkat task/tugas disini.." 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded px-2 py-2">
                        </div>

                        <div class="px-4 py-8 grid lg:grid-cols-3 w-full">
                            <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                                <date-picker v-model="task.startDate" :masks="dateMasks">
                                    <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        placeholder="Task Start Date"
                                        class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                                        :value="inputValue"
                                        v-on="inputEvents"
                                    />
                                    </template>
                                </date-picker>
                            </div>
                            <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                                <date-picker v-model="task.dueDate" :masks="dateMasks">
                                    <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        placeholder="Task Due Date"
                                        class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                                        :value="inputValue"
                                        v-on="inputEvents"
                                    />
                                    </template>
                                </date-picker>
                            </div>                            
                            <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                            <select
                                v-model="task.priority"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" value="NORMAL" selected>
                                    Normal
                                </option>
                                <option class="text-gray-700" value="Urgent">
                                    Urgent
                                </option> 
                                <option class="text-gray-700" value="Low">
                                    Low
                                </option>                                                               
                            </select>                                
                            </div>
                        </div>   

                        <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start py-4 px-4 mb-4">
                            <label @click="selectImage" class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:mr-4 lg:my-0 my-2">
                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Tambahkan dokumen (file)</span>
                            </label>
                            <button 
                                @click="addTask"
                                class="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500 flex items-center justify-center">
                                <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                                <span class="font-semibold text-gray-50 text-sm leading-loose">
                                    {{ isSubmitting ? 'Processing...' : 'Tambah Task' }}
                                </span>
                            </button>
                        </div>
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
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue';
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import Multiselect from 'vue-multiselect'
import appMixins from '../mixins/appMixins'

export default {
    components: {
        Loader,
        MiniSidebarComponent,
        DatePicker,
        Multiselect,
    },
    mixins: [ appMixins ],
    props: ['id'],
    data() {
        return {
            dateMasks: {
                input: 'DD-MM-YYYY',
            },
            userMask: {
                id: localStorage.userId,
                fullName: localStorage.fullName
            },
            isSubmitting: false,
            task: {
                userId: localStorage.userId,
                projectId: '',
                creatorId: '',
                categoryId: '',
                title: '',
                message: '',
                startDate: '',
                dueDate: '',
                priority: 'NORMAL',
                status: '',
            },
            users: [],
            projectDetail: {},
        }
    },
    mounted(){
        this.getProjectDetail();
        this.getUsers();
    },
    computed: {
        fixDueDate(){
            let date = this.task.dueDate.toLocaleDateString('en-GB').split('/');
			let fixDate = date[1]+'/'+date[0]+'/'+date[2];
            return fixDate;
        },
    },
    methods: {
        addTask(){
            console.log(this)
            this.task.creatorId = localStorage.userId
            this.userId = this.userMask.id
            this.isSubmitting = true;

            axios.post("/tasks", this.task, {
                headers: {
                    'Authorization': 'Bearer ' +appToken
                }
            })
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Tasks berhasil disimpan!`, "success");
                this.task = '';
                this.$router.push({
                    name: 'ProjectTask',
                    params: {id: this.id}
                });
            })
            .catch((error) => {
                console.log('woooo...'+error);
            });
        },
        getProjectDetail(){
            this.loaderPage = true
            this.task.projectId = this.id
            axios.get(`/projects/${this.id}`)
            .then((response) => {
                this.loaderPage = false;
                this.projectDetail = response.data.data;
            })
            .catch((error) => {
                this.$swal('Error!', `${error}`, 'error');
                this.loaderPage = false;
            });
        },      
        getUsers(){
            this.loaderPage = true
            axios.get(`/users`)
            .then((response) => {
                this.loaderPage = false;
                this.users = response.data.data;
            })
            .catch((error) => {
                this.$swal('Error!', `${error}`, 'error');
                this.loaderPage = false;
            });
        },            
        selectImage(){
            this.$swal("Success!", `Belum ada fungsi`, "success");
        },
    },
}
</script>