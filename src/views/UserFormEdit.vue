<template>
    <div id="app" class="user-form">

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
                        <span class="text-2xl font-semibold leading-3">Update Account</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Update informasi akun
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

        <div class="loader-page flex justify-center" v-if="loadingPage">
            <Loader />
        </div>

        <!-- ############ FORM PROJEk ############# -->
        <div v-show="!loadingPage" class="form-project mt-8 bg-gray-200">
            <!-- TAMBAHKAN DOKUMEN -->
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Update Profile
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Full name</label>
                            <input
                                v-model="user.fullName"
                                type="text"
                                placeholder="Full Name" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Title</label>
                            <input
                                v-model="user.title"
                                type="text"
                                placeholder="Project Manager" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>                        
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Phone number</label>
                            <input
                                v-model="user.phoneNumber"
                                type="text"
                                placeholder="098778900987" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Email</label>
                            <input
                                v-model="user.email"
                                type="text"
                                placeholder="name@example.com" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2"
                            >
                        </div>                        
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Company (Institution)</label>
                            <select
                                v-if="isCompaniesLoaded"
                                v-model="user.companyId"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Company
                                </option>
                                <option v-for="(item, i) in companies" :key="i" :value="item.id">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Group</label>
                            <select
                                v-if="isGroupsLoaded"
                                v-model="user.groupId"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Group
                                </option>
                                <option v-for="(item, i) in groups" :key="i" :value="item.id">
                                    {{ item.title }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="status px-4 pb-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Role {{user.role}}</label>
                            <select
                                v-model="user.role"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option 
                                    v-for="(item, i) in roles" 
                                    :key="i" 
                                    :value="item.name"
                                    :selected="user.role == item.name">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Status</label>
                            <select
                                v-model="user.status"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option 
                                    v-for="(item, i) in status" 
                                    :key="i" 
                                    :value="item.name"
                                    :selected="user.status == item.name">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="select-file flex items-center justify-start py-4 px-4 mb-4">
                        <button 
                            @click="updateUserProfile"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none mr-4">

                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>


                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Update Profile' }}
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
export default {
    components: {
        Loader,
    },
    props: ['id'],
    data() {
        return {
            loadingPage: true,
            isSubmitting: false,
            roles: [
                {
                    id: 'EMPLOYEE',
                    name: 'EMPLOYEE',
                },
                {
                    id: 'MANAGEMENT',
                    name: 'MANAGEMENT',
                },
                {
                    id: 'MEDIA',
                    name: 'MEDIA',
                },
                {
                    id: 'COMPANY',
                    name: 'COMPANY',
                },
                {
                    id: 'PARTNER',
                    name: 'PARTNER',
                }                
            ],
            status: [
                {
                    id: 'ACTIVE',
                    name: 'ACTIVE',
                },
                {
                    id: 'INACTIVE',
                    name: 'INACTIVE',
                },
                {
                    id: 'SUSPENDED',
                    name: 'SUSPENDED',
                },
                {
                    id: 'BLOCKED',
                    name: 'BLOCKED',
                }
            ],
            companies: [],
            groups: [],
            selected: '',
            user: {
                companyId: '',
                groupId : '',
                fullName : '',
                email : '',
                phoneNumber: '',
                title: '',
                role: '',
                status: '',
            },
            userMenu: localStorage.userMenuEdit.split(','),
        }
    },
    mounted() {
        this.getGroups()
        this.getCompanies()        
        const find_menu = this.userMenu.find(menu => menu == "userUpdate");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        setTimeout(()=>{
            this.loadingPage = false;
        }, 1000)
        this.getUserDetail();
    },
    computed: {
        isGroupsLoaded() {
            return this.groups.length > 0
        },
        isCompaniesLoaded() {
            return this.companies.length > 0
        },                
    },    
    methods: {
        updateUserProfile(){
            this.isSubmitting = true;
            axios.put(`/users?userId=${this.id}&companyId=${this.user.companyId}&groupId=${this.user.groupId}&fullName=${this.user.fullName}&email=${this.user.email}&title=${this.user.title}&phoneNumber=${this.user.phoneNumber}&role=${this.user.role}&status=${this.user.status}`)
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Data berhasil diupdate`, "success");
                this.$router.push({
                    name: 'UserProfile',
                    params: {id: this.id}
                });
                console.log(response.data.data);
            })
            .catch((error) => {
                this.$swal("Error!", `${error}`, "error");
                this.isSubmitting = false;
                console.log(error);
            });
        },
        getUserDetail(){
            axios.get(`/users/${this.id}`)
            .then((response) => {
                this.user.companyId = response.data.data.companyId;
                this.user.groupId = response.data.data.groupId;
                this.user.fullName = response.data.data.fullName;
                this.user.email = response.data.data.email;
                this.user.phoneNumber = response.data.data.phoneNumber;
                this.user.title = response.data.data.title;
                this.user.role = response.data.data.roleName;
                this.user.status = response.data.data.status;
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getGroups(){
            this.loadingPage = true;
            axios.get(`/groups`)
            .then((response) => {
                this.loaderPage = false;
                this.groups = response.data.data;
                console.log(this.groups)
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
                console.log(this.companies)
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