<template>
    <div class="app project-document">

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <ProjectHeader :project="projectDetail" currentMenu="document" />

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
                        <input hidden type="file" name="rawFile" id="file" @change="onFileChange">
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
                    <ItemDocument :document="item" />
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
import appMixins from '../mixins/appMixins'
import ItemDocument from '../components/ItemDocument'
import ProjectHeader from '../components/ProjectHeader'

export default {
    components: {Loader, ItemDocument, ProjectHeader},
    props: ['id'],
    mixins: [ appMixins ],
    data() {
        return {
            loaderPage: false,
            isSubmitting: false,
            projectDetail: '',
            documents: [],
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
            if(!this.document.title) {
                this.$swal('Deskripsi dokumen tidak boleh kosong..');
                return false;
            }

            if(!this.document.rawFile) {
                this.$swal('Dokumen untuk diupload belum dipilih..');
                return false;
            }            

            this.isSubmitting = true;
            const formData = new FormData();
            formData.append('rawFile', this.document.rawFile);
            axios.post(`/documents?projectId=${this.document.projectId}&title=${this.document.title}`, formData, {
                headers: {
                    'Authorization': 'Bearer ' + this.getAppToken(),
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Document berhasil diupload!`, "success");
                this.documents.push(response.data.data);
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