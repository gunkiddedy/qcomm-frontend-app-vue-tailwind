<template>
    <div id="app" class="group-form">

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
                        <span class="text-2xl font-semibold leading-3">Add Group</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Group User Project atau Broadcast
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <!--
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path v-if="!isMenuOpen" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                        </svg>
                        <span class="block text-white font-semibold">List</span>
                    </button>
                </div>

                <div class="search flex items-center w-full lg:my-8 my-2 lg:px-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-1/3 shadow leading-thight">
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
                        Tambah Group
                    </div>

                    <div class="txt-area px-4 py-6">
                        <label for="" class="font-semibold text-gray-400">Title</label>
                        <input
                            v-model="group.title"
                            type="text"
                            placeholder="Enter group title" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2">
                    </div>

                    <div class="txt-area px-4 pb-6">
                        <label for="" class="font-semibold text-gray-400">Description</label>
                        <textarea
                            v-model="group.description"
                            placeholder="Type your Description..." 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2">
                        </textarea>
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class=" text-gray-400 font-semibold">Status</label>
                            <select
                                v-model="group.status"
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
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400 lg:px-4 my-1">Group Picture</label>
                            <div class="attachment lg:px-4">
                                <div class="border shadow px-2 py-2 rounded lg:mr-2">
                                    <input @change="onFileChange" type="file" name="" id="" class="rounded text-sm">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="select-file flex items-center justify-start py-4 px-4 mb-4">
                        <button 
                            @click="addGroup"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none mr-4">
                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>


                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Simpan Group' }}
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
const appToken = 'adadasd';
import Loader from '@/components/Loader.vue'
import appMixins from '../mixins/appMixins'
export default {
    components: {
        Loader,
    },
    mixins: [appMixins],
    data() {
        return {
            isSubmitting: false,
            status: [
                {
                    name: 'ACTIVE',
                },
                {
                    name: 'DISABLED',
                },
            ],
            selected: '',
            group: {
                userId: 1,
                title: '',
                description: '',
                profilePicture: '',
                status: '',
            },
            userMenu: localStorage.userMenuAdd.split(','),
        }
    },
    created() {
        this.allowedHere('groupAdd')
    },      
    mounted(){
        const find_menu = this.userMenu.find(menu => menu == "groupAdd");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.group.userId = localStorage.userId;
    },
    methods: {
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            // this.createImage(files[0]);
            this.group.profilePicture = files[0].name;
            console.log(files[0].name);
        },
        addGroup(){
            this.isSubmitting = true;
            axios.post(`/groups?userId=${localStorage.userId}&title=${this.group.title}&description=${this.group.description}&profilePicture=${this.group.profilePicture}&status=${this.group.status}`)
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Group berhasil disimpan!`, "success");
                this.$router.push('/groups');
                console.log(response.data);
            })
            .catch((error) => {
                this.isSubmitting = false;
                this.$swal("Error!", `${error}`, "error");
                console.log('woooo...'+error);
            });
        },
        canceling(){
            this.$router.go(-1);
        }
    },
}
</script>