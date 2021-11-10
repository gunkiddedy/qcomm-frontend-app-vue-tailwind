<template>
    <div class="app project-new-task">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
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
                        <router-link :to="`/projects/${projectDetail.id}/progress`" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link :to="`/projects/${projectDetail.id}/documents`" class="bg-red-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </router-link>
                        <router-link :to="'/projects/'+projectDetail.id" class="bg-purple-500 px-6 py-1 rounded-full hover:bg-red-600">
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
            <MiniSidebarComponent />

            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">
                <!-- BUAT TASK BARU -->
                <div class="tambahkan-dokumen w-full justify-between bg-indigo-50">
                    <div class="bg-white shadow-lg rounded pb-1">
                        <div class="title text-purple-700 text-md font-bold px-4 py-3 rounded-t bg-gray-100">
                            Buat Task Baru
                        </div>
                        <div class="txt-area px-4">
                            <textarea

                                placeholder="Deskripsi task disini..." 
                                rows="5" 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2">
                            </textarea>
                        </div>
                        <div class="judul kategori px-4">
                            <input

                                type="text"
                                placeholder="Pilih judul atau kategori..." 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2 py-2">
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
                
                <!-- SEARCH -->
                <div class="search flex items-center w-full my-8">
                    <button class="bg-red-400 text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-28-persen shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>

                <!-- DAFTAR TUGAS -->
                <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                    <div class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                        <div class="flex lg:flex-row flex-col lg:items-center justify-between w-full">
                            <div class="img-ket flex lg:flex-col">
                                <div class="flex-shrink-0 shadow rounded-full">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                                <div class="flex-shrink-0 shadow rounded-full lg:mt-5 lg:mx-0 mx-3">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                            </div>
                            <div class="text flex flex-wrap w-3/4">
                                <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                                <div class="isi text-gray-500 text-md">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                                </div>
                            </div>
                            <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                                <div class="jam text-lg text-gray-300 font-semibold lg:mr-0 mr-2">12:12 PM</div>
                                <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                    3 responses
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b my-4"></div>
                        <div class="flex lg:flex-row flex-col lg:items-center justify-between w-full">
                            <div class="img-ket flex lg:flex-col">
                                <div class="flex-shrink-0 shadow rounded-full">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                                <div class="flex-shrink-0 shadow rounded-full lg:mt-5 lg:mx-0 mx-3">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                            </div>
                            <div class="text flex flex-wrap w-3/4">
                                <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                                <div class="isi text-gray-500 text-md">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                                </div>
                            </div>
                            <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                                <div class="jam text-lg text-gray-300 font-semibold lg:mr-0 mr-2">12:12 PM</div>
                                <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                    3 responses
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b my-4"></div>
                        <div class="flex lg:flex-row flex-col lg:items-center justify-between w-full">
                            <div class="img-ket flex lg:flex-col">
                                <div class="flex-shrink-0 shadow rounded-full">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                                <div class="flex-shrink-0 shadow rounded-full lg:mt-5 lg:mx-0 mx-3">
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                </div>
                            </div>
                            <div class="text flex flex-wrap w-3/4">
                                <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                                <div class="isi text-gray-500 text-md">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                                </div>
                            </div>
                            <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                                <div class="jam text-lg text-gray-300 font-semibold lg:mr-0 mr-2">12:12 PM</div>
                                <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                    3 responses
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-b my-4"></div>
                        <div class="tampilkan justify-center flex">
                            <button class=" flex items-center">
                                <span class="text-gray-500 text-sm font-semibold leading-thight">Tampilkan selanjutnya</span>
                                <svg class="w-4 text-gray-500 mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
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
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue';
export default {
    components: {
        Loader,
        MiniSidebarComponent
    },
    data() {
        return {
            isSubmitting: false,
            tasks: {
                userId: '',
                projectId: '',
                creatorId: '',
                categoryId: '',
                title: '',
                message: '',
                startDate: '',
                dueDate: '',
                priority: '',
                status: '',
            }
        }
    },
    methods: {
        addTask(){
            this.isSubmitting = true;
            axios.post("/tasks", this.tasks, {
                headers: {
                    'Authorization': 'Bearer ' +appToken
                }
            })
            .then((response) => {
                // this.$store.dispatch('currentUser/afterLogin', response);
                this.isSubmitting = false;
                this.$swal("Success!", `Tasks berhasil disimpan!`, "success");
                this.tasks = '';
                console.log(response.data);
            })
            .catch((error) => {
                console.log('woooo...'+error);
            });
        },
        selectImage(){
            this.$swal("Success!", `Belum ada fungsi`, "success");
        },
    },
}
</script>