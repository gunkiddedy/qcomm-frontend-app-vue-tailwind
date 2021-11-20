<template>
    <div id="app" class="user-kpi">

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col lg:items-center justify-between mt-10">

            <div class="flex lg:flex-row flex-col lg:items-center justify-start lg:mb-0 mb-4">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Update User KPI</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Update KPI User
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start lg:mb-0 mb-4">
                <!--
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
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
                -->
            </div>

        </div>

        <!-- ############ FORM PROJEk ############# -->
        <div class="form-project mt-8 bg-gray-200">
            <!-- TAMBAHKAN DOKUMEN -->
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Update User KPI
                    </div>

                    <div class="start-date px-4 py-6 flex items-center justify-start w-full">
                        <div class="w-full">
                            <label for="" class="font-semibold text-gray-400">Select Employee</label>
                            <multiselect label="fullName" class="text-large" placeholder="Select employee for KPI updating" :multiple="false" v-model="selectedUser" :options="users"></multiselect>
                        </div>
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Select Project</label>
                            <multiselect @select="loadTasks" label="title" class="text-large" placeholder="Select project" :multiple="false" v-model="selectedProject" :options="projects"></multiselect>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Task (Optional)</label>
                            <multiselect label="title" class="text-large" placeholder="Select task" :multiple="false" v-model="selectedTask" :options="tasks"></multiselect>
                        </div>
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="w-full mr-4">
                            <label for="" class="font-semibold text-gray-400">Quality</label>
                            <input
                                v-model="user.quality"
                                type="number"
                                min="1"
                                placeholder="eg:100" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                        <div class="w-full mr-4">
                            <label for="" class="font-semibold text-gray-400">Design</label>
                            <input
                                v-model="user.design"
                                type="number"
                                min="1"
                                placeholder="eg:100" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                        <div class="w-full">
                            <label for="" class="font-semibold text-gray-400">Idea</label>
                            <input
                                v-model="user.idea"
                                type="number"
                                min="1"
                                placeholder="eg:100" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                    </div>

                    <div class="select-file flex items-center justify-start py-4 px-4 mb-4">
                        <button
                            @click="updateUserKpi"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none mr-4">

                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>

                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Update KPI' }}
                            </span>
                        </button>
                        <button 
                            @click="canceling"
                            class="bg-gray-100 px-4 py-1 rounded hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none flex items-center justify-start">
                            <svg class="w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span class="font-semibold text-gray-600 text-sm leading-loose" >Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import Multiselect from 'vue-multiselect'
import appMixins from '../mixins/appMixins'

export default {
    components: {
        Multiselect,
    },
    mixins: [ appMixins ],
    data() {
        return {
            isSubmitting: false,
            user: {
                fullName: '',
                userId: '',
                projectId: '',
                taskId: '',
                scope: 'IDEA',
                quality: 0,
                design: 0,
                idea: 0,
            },
            selectedProject: {},
            selectedTask: {},
            selectedUser: {},
            users: [],
            projects: [],
            tasks: [],
        }
    },
    created() {
        this.allowedHere('kpiUpdate')
    },    
    computed: {
        getScore(){
            let quality = parseInt(this.user.quality);
            let design = parseInt(this.user.design);
            let idea = parseInt(this.user.idea);
            return  quality + design + idea;
        }
    },
    mounted(){
        let userdata = this.$store.getters['currentUser/userData'];
        userdata.forEach(user => {
            this.user.userId = user.data.data.user.id;
            console.log(user.data.data.user.id);
        });
        this.getUserDetail();
        this.getUsers();
        this.getProjects();
    },
    methods: {
        updateUserKpi(){
            this.isSubmitting = true;
            axios.put(`/users?userId=${this.user.userId}&projectId=${this.user.projectId}&taskId=${this.user.taskId}&scope=${this.user.scope}&score=${this.getScore}`)
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Data berhasil diupdate`, "success");
                console.log(response.data);
            })
            .catch((error) => {
                this.$swal("Error!", `${error}`, "error");
                this.isSubmitting = false;
                console.log(error);
            });
        },
        getUserDetail(){
            axios.get(`/users/${this.user.userId}`)
            .then((response) => {
                this.user.fullName = response.data.data.fullName;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getUsers(){
            axios.get(`/users`)
            .then((response) => {
                this.users = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },   
        getProjects(){
            axios.get(`/projects`)
            .then((response) => {
                this.projects = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },    
        loadTasks(){
            axios.get(`/projects/${this.selectedProject.id}`)
            .then((response) => {
                this.tasks = response.data.data.tasks;
            })
            .catch((error) => {
                console.log(error);
            });
        },                         
        canceling(){
            this.$router.go(-1);
        }
    }
}
</script>