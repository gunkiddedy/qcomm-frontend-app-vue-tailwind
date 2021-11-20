<template>
    <div id="app" class="project-form">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col lg:items-center justify-between mt-10">

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Add Project</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Tambah Project Baru
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
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
                        <svg class="w-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>
                -->
            </div>

        </div>

        <div class="loader-page flex justify-center" v-if="loadingPage">
            <Loader />
        </div>

        <!-- ############ FORM PROJEk ############# -->
        <div v-if="!loadingPage" class="form-project mt-8 bg-gray-200">
            <!-- TAMBAHKAN DOKUMEN -->
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Tambah Project
                    </div>

                    <div class="txt-area px-4 py-6">
                        <label for="" class="font-semibold text-gray-400">Title</label>
                        <input
                            v-model="project.title"
                            type="text"
                            placeholder="Enter project title" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2">
                    </div>

                    <div class="txt-area px-4 pb-6">
                        <label for="" class="font-semibold text-gray-400">Description</label>
                        <textarea
                            v-model="project.description"
                            placeholder="Deskripsi project..." 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2">
                        </textarea>
                    </div>

                    <div class="txt-area px-4">
                        <label for="" class="font-semibold text-gray-400">Project Brief</label>
                        <textarea
                            v-model="project.projectBrief"
                            placeholder="Type project brief" 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2">
                        </textarea>
                    </div>
                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Start Date</label>
                            <!-- <input
                                v-model="project.startDate"
                                type="text"
                                placeholder="Start Date" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            > -->
                            <date-picker v-model="project.startDate" :masks="masks">
								<template v-slot="{ inputValue, inputEvents }">
								  <input
									placeholder="Start Date"
									class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
									:value="inputValue"
									v-on="inputEvents"
								  />
								</template>
							</date-picker>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Completed Date</label>
                            <!-- <input
                                v-model="project.completedDate"
                                type="text"
                                placeholder="Completed Date" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            > -->
                            <date-picker v-model="project.completedDate" :masks="masks">
								<template v-slot="{ inputValue, inputEvents }">
								  <input
									placeholder="Completed Date"
									class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
									:value="inputValue"
									v-on="inputEvents"
								  />
								</template>
							</date-picker>
                        </div>                        
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/3 pr-2">
                            <label for="" class="font-semibold text-gray-400">Category</label>
                            <select
                                v-if="isCategoriesLoaded"
                                v-model="project.categoryId"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Category
                                </option>
                                <option v-for="(item, i) in categories" :key="i" :value="item.id">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                        <div class="lg:w-1/3 pr-2">
                            <label for="" class="font-semibold text-gray-400">Company</label>
                            <select
                                v-if="isCompaniesLoaded"
                                v-model="project.companyId"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Company
                                </option>
                                <option v-for="(item, i) in companies" :key="i" :value="item.id">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>                                            
                        <div class="lg:w-1/3 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Status</label>
                            <select
                                v-model="project.status"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Status
                                </option>
                                <option v-for="(item, i) in status" :key="i" :value="item.name">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="attachment px-4 py-8 grid lg:grid-cols-3 w-full">
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                            <label for="" class="font-semibold text-gray-400">Attachment 1</label>
                            <input type="file" name="attachment1" id="" class="rounded text-sm">
                        </div>
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                            <label for="" class="font-semibold text-gray-400">Attachment 2</label>
                            <input type="file" name="attachment2" id="" class="rounded text-sm">
                        </div>
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded mr">
                            <label for="" class="font-semibold text-gray-400">Attachment 3</label>
                            <input type="file" name="attachment3" id="" class="rounded text-sm">
                        </div>
                    </div>

                    <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start py-4 px-4 mb-4">
                        <button 
                            @click="addProject"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none mr-4">

                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>


                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Simpan Project' }}
                            </span>
                        </button>

                        <button
                            @click="canceling" 
                            class="bg-gray-100 px-4 py-1 rounded hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none flex items-center justify-start">
                            <svg class="w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span class="font-semibold text-gray-600 text-sm leading-loose" >Cancel</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import Loader from '@/components/Loader.vue'
// import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import appMixins from '../mixins/appMixins'
export default {
    components: {
        Loader,
        DatePicker,
        // Calendar
    },
    mixins: [ appMixins ],
    data() {
        return {
            masks: {
                input: 'DD-MM-YYYY',
            },
            loadingPage: true,
            isSubmitting: false,
            status: [
                {
                    id: 'ACTIVE',
                    name: 'ACTIVE',
                },
                {
                    id: 'DRAFT',
                    name: 'DRAFT',
                },
            ],
            companies: [],
            categories: [],
            selected: '',
            project: {
                userId : '',
                companyId  : '',
                categoryId  : '',
                title: '',
                description: '',
                projectBrief: '',
                startDate: null,
                completedDate: null,
                status: '',
                attachment1: '',
                attachment2: '',
                attachment3: '',
            },
            userMenu: localStorage.userMenuAdd.split(','),
        }
    },
    mounted(){
        this.getCompanies()
        this.getCategories()
        const find_menu = this.userMenu.find(menu => menu == "projectAdd");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }

        setTimeout(()=>{
            this.loadingPage = false;
        }, 1000)
        let userdata = this.$store.getters['currentUser/userData'];
        userdata.forEach(user => {
            this.project.userId = user.data.data.user.id;
            console.log(user.data.data.user.id);
        });
    },
    created() {
        this.allowedHere('projectAdd')
    },      
    computed: {
        fixStartDate(){
            let date = this.project.startDate.toLocaleDateString('en-GB').split('/');
			let fixDate = date[1]+'/'+date[0]+'/'+date[2];
            return fixDate;
        },
        fixCompletedDate(){
            let date = this.project.completedDate.toLocaleDateString('en-GB').split('/');
			let fixDate = date[1]+'/'+date[0]+'/'+date[2];
            return fixDate;
        },
        isCompaniesLoaded() {
            return this.companies.length > 0
        },      
        isCategoriesLoaded() {
            return this.categories.length > 0
        },            
    },
    methods: {
        addProject(){
            this.isSubmitting = true;
            axios.post(`/projects?userId=${localStorage.userId}&categoryId=${this.project.categoryId}&companyId=${this.project.companyId}&title=${this.project.title}&description=${this.project.description}&projectBrief=${this.project.projectBrief}&startDate=${this.fixStartDate}&completedDate=${this.fixCompletedDate}&status=${this.project.status}`)
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Project berhasil disimpan!`, "success");
                this.$router.push('/projects');
                console.log(response.data);
            })
            .catch((error) => {
                this.$swal("Error!", `${error}`, "error");
                this.isSubmitting = false;
                console.log('woooo...'+error);
            });
        },
        getCategories(){
            this.loadingPage = true;
            axios.get(`/categories`)
            .then((response) => {
                this.loaderPage = false;
                this.categories = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },           
        getCompanies(){
            this.loadingPage = true;
            axios.get(`/companies`)
            .then((response) => {
                this.loaderPage = false;
                this.companies = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },          
        canceling(){
            this.$router.go(-1);
        }
    },
}
</script>