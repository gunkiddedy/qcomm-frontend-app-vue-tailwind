<template>
    <div class="app project-document">

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full my-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        {{projectDetail.title}}
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        {{projectDetail.description}}
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <router-link :to="'/tasks/'+projectDetail.id" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link :to="'/documents/'+projectDetail.id" class="bg-purple-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </router-link>
                        <router-link :to="'/projects/'+projectDetail.id" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >overview</span>
                        </router-link>
                    </div>
                </div>
                <div class="footer-bot text-base font-bold px-4 py-3 rounded-b bg-gray-100 flex lg:flex-row flex-col lg:items-center justify-between">

                    <div class="image-left flex items-center justify-start lg:mb-0 mb-2">
                        <div class="img-gojek flex-shrink-0 rounded-full">
                            <img src="https://pbs.twimg.com/media/EAKvmBZUIAUeWSN.jpg" class="rounded-full w-12">
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                Gojek Indonesia
                            </div>
                            <div class="client text-xs font-bold">
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
                                Ongoing
                            </div>
                            <div class="client text-xs font-bold mr-24">
                                Overall Progress
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TAMBAHKAN DOKUMEN -->
        <div class="tambahkan-dokumen w-full my-4 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded pb-1">
                <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                    Tambahkan Dokumen
                </div>
                <div class="txt-area px-4">
                    <textarea
                        v-model="document.title"
                        placeholder="Deskripsi dokumen..." 
                        rows="5" 
                        class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2">
                    </textarea>
                </div>
                <div v-if="document.rawFile" class="px-4">
                    <span>{{document.rawFile.name}}</span>
                </div>
                <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start py-4 px-4 mb-4">
                    <label 
                        class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:mr-4 lg:my-0 my-2">
                        <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                        <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">
                            Select file
                        </span>
                        <input hidden type="file" id="file" @change="onFileChange">
                    </label>
                    
                    <button 
                        @click="uploadDocument"
                        class="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500 flex items-center justify-center">

                        <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                        <span class="font-semibold text-gray-50 text-sm leading-loose">
                            {{ isSubmitting ? 'Processing...' : 'Upload Document' }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="garis border-t border-gray-300 mt-16 mb-8 mx-28"></div>


        <!-- SEARCH -->
        <div class="documents flex items-center w-full my-4 lg:px-28 justify-between">
            <div class="font-bold text-lg">Documents</div>
            <div class="bg-blue-200 text-blue-500 rounded px-4 py-1 text-sm font-semibold">
                {{countDocuments}} files
            </div>
        </div>
        <div class="search flex items-center w-full my-8 lg:px-28">
            <button class="bg-red-400 text-white flex items-center px-4 py-2 rounded-tl rounded-bl shadow leading-thight">
                <span class="block mr-2 font-semibold text-md">Search</span>
                <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <input 
                type="search" 
                class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                placeholder="Masukkan kata kunci...">
        </div>
        <div class="rincian w-full my-4 lg:px-28 justify-between bg-indigo-50">
            <div class="sidebar bg-white rounded px-0 py-4 shadow-lg">
                <div 
                    v-for="(item, i) in documents"
                    :key="i"
                    class="loop border-b py-2">
                    <div class="sidebar-contain flex items-center justify-between px-4">
                        <div class="title text-md">
                            {{item.title}}
                        </div>
                        <div class="flex items-center">
                            <div class="mr-2">{{item.rawFile}}</div>
                            <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                                <svg class="w-6 h-6 text-purple-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
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
import Loader from '@/components/Loader.vue'
export default {
    components: {Loader},
    props: ['id'],
    data() {
        return {
            loaderPage: false,
            isSubmitting: false,
            projectDetail: '',
            documents: '',
            document: {
                projectId: this.id,
                taskId: '',
                discussionId: '',
                title: '',
                rawFile: '',
            },
            selectedFile: '',
        }
    },
    mounted(){
        this.getProjectDetail();
    },
    computed: {
        countDocuments(){
            return this.documents.length;
        }
    },
    methods: {
        onFileChange(e){
            const file = e.target.files[0] || e.dataTransfer.files[0];
            this.document.rawFile = file;
            console.log(this.document.rawFile);
        },
        uploadDocument(){
            this.isSubmitting = true;
            const formData = new FormData();
            formData.append('rawFile', this.document.rawFile);
            axios.post(`/documents?projectId=${this.document.projectId}&title=${this.document.title}`)
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Document berhasil diupload!`, "success");
                this.getProjectDetail();
                console.log(response.data);
            })
            .catch((error) => {
                this.isSubmitting = false;
                this.$swal("Error!", `${error}`, "error");
                console.log('woooo...'+error);
            });
        },
        getProjectDetail(){
            this.loaderPage = true;
            axios.get(`/projects/${this.id}`)
            .then((response) => {
                this.loaderPage = false;
                this.projectDetail = response.data.data;
                this.documents = response.data.data.documents;
                this.document.projectId = response.data.data.id;
                this.document.taskId = response.data.data.documents.taskId;
                this.document.discussionId = response.data.data.documents.discussionId;
                this.document.title = response.data.data.documents.title;
                this.document.rawFile = response.data.data.documents.rawFile;
                console.log(response.data);
            })
            .catch((error) => {
                this.loaderPage = false;
                this.$swal("Error!", `${error}`, "error");
                console.log(error);
            });
        },
    },
}
</script>