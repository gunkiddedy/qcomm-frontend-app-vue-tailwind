<template>
    <div id="app" class="company-list">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col items-center justify-between mt-10">
            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Companies</span>
                    </div>
                    <div class="">
                        <span class="text-md font-semibold text-gray-400">
                            Daftar perusahaan atau institusi sebagai klien atau partner
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button 
                        @click="goToCompanyForm"
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
                <div class="search flex items-center w-full lg:my-8 my-2 lg:px-2">
                    <input 
                        type="search"
                        v-model="keyword"
                        @change="searchCompanies" 
                        class="w-full rounded-tl rounded-bl py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                    <button
                        @click="searchCompanies" 
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-4 py-2 rounded-tr rounded-br w-1/3 shadow leading-thight">
                        <span class="block mr-1 font-semibold text-md">Search</span>
                        <svg class="w-8 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <!-- ############ ADVOCASY ############# -->
        <div class="form-project mt-8">
            <div class="w-full my-4 justify-between">

                <div 
                    v-for="(item, i) in companyList"
                    :key="i"
                    class="mb-6 advocacy bg-white shadow-lg rounded" :class="{'pb-20': clicked1, 'pb-0': !clicked1}">
                    <div class="title-category-list px-4 py-8 flex items-start justify-between">
                        <div class="flex flex-col title-list">
                            <!-- <div class="mb-2">
                                <button 
                                    @click="editCompany(item.id)"
                                    class="bg-gray-200 hover:bg-gray-300 rounded lg:px-6 px-2 py-1 text-gray-500 font-semibold text-xs mr-4 flex items-center">
                                    <span class="mr-1">Edit</span>
                                    <svg class="w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                            </div> -->
                            <div class="title text-lg text-gray-500 font-semibold">
                                {{ item.title }}
                            </div>
                            <div class="sub text-gray-400 text-sm font-semibold">
                                {{ item.description }} 
                            </div>
                            
                            <div class="btn flex items-center justify-start my-4">
                                <button
                                    @click="editCompany(item.id)" 
                                    class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none px-4 py-1 text-white rounded-full mr-2">
                                    Edit
                                </button>
                                <button @click="archiveCompany(item.id)" class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none px-4 py-1 text-white rounded-full mr-2">
                                    Archive
                                </button>
                            </div>
                            <div class="w-full">
                                <span class="waktu bg-green-200 text-green-600 text-xs rounded-full px-4">
                                    {{ item.createdAt | momentRelativeTime }}
                                </span>
                            </div>

                        </div>
                        <div class="logo-company w-1/4">
                            <img
                                class="object-contain" 
                                src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="">
                            <!-- <img
                                v-else 
                                class="rounded-lg"
                                :src="item.profilePictureUrl" 
                                :alt="item.profilePictureUrl"> -->
                        </div>
                    </div>

                    <div 
                        @click="clickProjects(i)" 
                        class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t border-b">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                4 Projects
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                    <transition name="slide">
                        <div class="isi" v-if="showProjects == i && showProj">
                            <div class="hide flex items-center justify-between px-8 py-4 border-b">
                                <div class="text">
                                    Sengketa Driver dan Perusahaan
                                </div>
                                <div class="icon flex items-center justify-start">
                                    <div class="text mr-2">
                                        Ongoing
                                    </div>
                                    <div class="icon mr-2 rounded-full bg-blue-200 px-2 py-2">
                                        <svg class="w-5 text-purple-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div class="hide flex items-center justify-between px-8 py-4 border-b">
                                <div class="text">
                                    Event Go-Food Di Kemang
                                </div>
                                <div class="icon flex items-center justify-start">
                                    <div class="text mr-2">
                                        Ongoing
                                    </div>
                                    <div class="icon mr-2 rounded-full bg-blue-200 px-2 py-2">
                                        <svg class="w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div class="hide flex items-center justify-between px-8 py-4 border-b">
                                <div class="text">
                                    Sengketa Driver dan Perusahaan
                                </div>
                                <div class="icon flex items-center justify-start">
                                    <div class="text mr-2">
                                        Ongoing
                                    </div>
                                    <div class="icon mr-2 rounded-full bg-blue-200 px-2 py-2">
                                        <svg class="w-5 text-purple-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    
                </div>
                
            </div>
        </div>

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
const appToken = 'dsadsadsad';
import Loader from '@/components/Loader.vue'
import axios from 'axios'
export default {
    components: {
        Loader,
    },
    data() {
        return {
            clicked1: false,
            clicked2: false,
            clicked3: false,
            companyList: [],
            loaderPage: false,
            keyword: '',
            showProjects: null,
            showProj: false,
            userMenu: localStorage.userMenuManage.split(','),
        }
    },
    mounted() {
        const find_menu = this.userMenu.find(menu => menu == "companyList");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getCompanies();
    },
    methods: {
        clickProjects(param){
            this.showProjects = param;
            this.showProj = !this.showProj;
        },
        searchCompanies(){
            this.loaderPage = true;
            axios.get(`/companies?sort=ASC&order&limit&keyword=${this.keyword}`, {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            }).then((response) => {
                this.loaderPage = false;
                this.companyList = response.data.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        },
        editCompany(param){
            this.$router.push({
                path: `/company-edit/${param}`
            })
        },
        goToCompanyForm(){
            this.$router.push('/company-form');
        },
        getCompanies(){
            this.loaderPage = true;
            axios.get('/companies', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.companyList = response.data.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        archiveCompany(companyId){
            this.loaderPage = true;
            axios.put('/archive?objectId='+companyId+'&objectType=COMPANY', {
                params: {
                    objectType: 'COMPANY',
                    objectId: companyId,
                },
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.companyList = this.companyList.filter(c => c.id != companyId);
                this.companyList.push(response.data.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });            
        }
    },
}
</script>

<style scoped>
    slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.6s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    }

    .slide-leave-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    }
</style>