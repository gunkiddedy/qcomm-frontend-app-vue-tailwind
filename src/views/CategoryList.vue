<template>
    <div id="app" class="category-list">
        <div class="project flex lg:flex-row flex-col items-center justify-between mt-10">
            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Category</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Daftar Kategori Project
                        </span>
                    </div>
                </div>
            </div>

            <div v-if="allowedTo('categoryAdd')" class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button 
                        @click="goToCategoryForm"
                        class="bg-red-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <div class="form-project mt-8">
            <div class="w-full my-4 justify-between">
                <div 
                    v-for="(item, i) in categoryList"
                    :key="i"
                    class="mb-6 px-4 advocacy bg-white shadow-lg rounded" :class="{'pb-20': showProjects == i && showPro}">
                    <div class="title-category-list px-4 py-8 flex justify-between items-center">
                        <div class="flex flex-col title-list w-3/4">
                            <div class="mb-2">
                                <button 
                                    @click="editCategory(item.id)"
                                    class="bg-gray-200 hover:bg-gray-300 rounded lg:px-6 px-2 py-1 text-gray-500 font-semibold text-xs mr-4 flex items-center">
                                    <span class="mr-1">Edit</span>
                                    <svg class="w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="title text-lg text-gray-500 font-semibold">
                                {{ item.title }}
                            </div>
                            <div class="sub text-gray-400 text-sm font-semibold">
                                {{ item.description }}
                            </div>
                        </div>
                        <div class="tag flex flex-wrap justify-start mt-2 w-1/4">
                        </div>
                    </div>

                    <div 
                        @click="clickProjectsDropdown(i)" 
                        class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t border-b">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                {{ item.projects.length }} projects
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                    <transition name="slide">
                        <div class="isi" v-if="showProjects == i && showPro">
                        <div
                            v-for="(project, i) in item.projects"
                            :key="i">
                            <div class="hide flex items-center justify-between px-8 py-4 border-b">
                                <div class="text">
                                    {{ project.title }}
                                </div>
                                <div class="icon flex items-center justify-start">
                                    <div class="text mr-2">
                                        {{ project.status }}
                                    </div>
                                    <div class="icon mr-2 rounded-full bg-blue-200 px-2 py-2">
                                        <svg class="w-5 text-purple-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                    </div>
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
import appMixins from '../mixins/appMixins'
export default {
    components: {
        Loader,
    },
    mixins: [appMixins],
    data() {
        return {
            loaderPage: false,
            categoryList: [],
            showProjects: null,
            showPro: false,
            keyword: '',
            userMenu: localStorage.userMenuManage.split(','),
        }
    },
    created() {
        this.allowedHere('categoryList')
    },    
    mounted() {
        const find_menu = this.userMenu.find(menu => menu == "categoryList");
        if (!find_menu) {
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getCategories();
    },
    methods: {
        searchCategory(){
            this.loaderPage = true;
            axios.get(`/categories?sort=ASC&order&limit&keyword=${this.keyword}`, {
                headers: {
                    'Authorization': 'Bearer ' + getAppToken()
                }
            }).then((response) => {
                this.loaderPage = false;
                this.categoryList = response.data.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        editCategory(param){
            // alert(param)
            this.$router.push({
                path: `/category-edit/${param}`
            })
        },
        clickProjectsDropdown(param){
            this.showProjects = param;
            this.showPro = !this.showPro;
        },
        goToCategoryForm(){
            this.$router.push('/category-form');
        },
        getCategories(){
            this.loaderPage = true;
            axios.get('/categories', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.categoryList = response.data.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
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