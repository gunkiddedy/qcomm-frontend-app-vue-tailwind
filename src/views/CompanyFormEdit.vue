<template>
    <div id="app" class="company-form">

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
                        <span class="text-2xl font-semibold leading-3">Edit Company</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Perusahaan atau Institusi (Klien, Partner)
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
            </div>

        </div>

        <!-- ############ FORM PROJEk ############# -->
        <div class="form-project mt-8 bg-gray-200">
            <!-- TAMBAHKAN DOKUMEN -->
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Edit Company
                    </div>

                    <div class="txt-area px-4 py-6">
                        <label for="" class="font-semibold text-gray-400">Title</label>
                        <input
                            v-model="company.title"
                            type="text"
                            placeholder="Enter project title" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2">
                    </div>

                    <div class="txt-area px-4 pb-6">
                        <label for="" class="font-semibold text-gray-400">Description</label>
                        <textarea
                            v-model="company.description"
                            placeholder="Type your Description..." 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2">
                        </textarea>
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Status</label>
                            <select
                                v-model="company.status"
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded px-2 py-2 text-gray-400"
                            >
                                <option class="text-gray-700" :value="selected">
                                    Select Status
                                </option>
                                <option v-for="(item, i) in status" :key="i" :value="item.name" :selected="company.status == item.name">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400 lg:px-4 my-1">Company Picture</label>
                            <div class="attachment lg:px-4">
                                <div class="border shadow px-2 py-2 rounded lg:mr-2">
                                    <input type="file" name="" id="" class="rounded text-sm" @change="onFileChange">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start py-4 px-4 mb-4">
                        <button 
                            @click="updateCompany"
                            class="bg-red-400 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none lg:mr-4 lg:my-0 my-2">

                            <svg v-if="isSubmitting" class="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>

                            <svg v-else class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>


                            <span class="font-semibold text-white text-sm ml-2 leading-loose">
                                {{ isSubmitting ? 'Processing...' : 'Update Company' }}
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
    props: ['id'],
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
            company: {
                id: '',
                userId: '',
                title: '',
                description: '',
                profilePicture: '',
                status: '',
            },
            userMenu: localStorage.userMenuEdit.split(','),
        }
    },
    created() {
        this.allowedHere('companyUpdate')
    },      
    mounted(){
        const find_menu = this.userMenu.find(menu => menu == "companyUpdate");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getCompanyDetail();
    },
    methods: {
        getCompanyDetail(){
            axios.get(`/companies/${this.id}`)
            .then((response) => {
                this.company.id = response.data.data.id;
                this.company.title = response.data.data.title;
                this.company.description = response.data.data.description;
                this.company.profilePicture = response.data.data.profilePicture;
                this.company.status = response.data.data.status;
                this.company.userId = response.data.data.userId;
                console.log(response.data);
            })
            .catch((error) => {
                this.$swal("Error!", `${error}`, "error");
                console.log(error);
            });
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.company.profilePicture = file;
        },
        updateCompany(){
            this.isSubmitting = true;
            const formData = new FormData();
            formData.append('profilePicture', this.company.profilePicture);
            axios.put(`/companies?companyId=${this.company.id}&userId=${localStorage.userId}&title=${this.company.title}&description=${this.company.description}&status=${this.company.status}`, formData, {
                headers: {
                    'Authorization': 'Bearer ' +appToken,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                this.isSubmitting = false;
                this.$swal("Success!", `Data berhasil diupdate`, "success");
                this.$router.go(-1);
                console.log(response.data);
            })
            .catch((error) => {
                this.$swal("Error!", `${error}`, "error");
                this.isSubmitting = false;
                console.log(error);
            });
        },
        canceling(){
            this.$router.go(-1);
        }
    },
}
</script>