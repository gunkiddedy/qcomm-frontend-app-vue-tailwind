<template>
    <div id="app" class="group-list">
        <div class="project flex lg:flex-row flex-col items-center justify-between mt-10">
            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Daftar Group</span>
                    </div>
                    <div class="">
                        <span class="text-md text-gray-400">
                            Group User Project atau Broadcast
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button
                        @click="goToGroupForm" 
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
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
            <div class="w-full my-4">
                <div 
                    v-for="(item, i) in groupList"
                    :key="i"
                    class="main-wrap mb-6 bg-white shadow-lg rounded px-4">
                    <div class="title-wrap px-4 py-8 flex justify-between">

                        <div class="flex flex-col title-list w-4/5">
                            <div class="mb-2">
                                <button 
                                    @click="editGroup(item.id)"
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

                            <div class="sub text-gray-400 text-sm">
                                {{ item.description }} 
                            </div>

                            <div class="btn flex lg:flex-row flex-col lg:items-center justify-start my-4">
                                <button
                                    @click="toBroadcastForm(item.id)" 
                                    class="bg-red-500 hover:bg-purple-700 focus:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none px-4 py-1 text-white rounded lg:mr-2 mr-0 lg:my-0 my-1">
                                    Kirim Broadcast
                                </button>
                            </div>
                        </div>

                        <div class="w-1/6">
                            <div class="flex justify-end">
                                <span class="waktu bg-green-200 text-green-600 text-xs rounded-full px-4 text-right">
                                    {{ item.createdAt | momentRelativeTime}}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div 
                        @click="clickMember(i)" 
                        class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                {{ item.users.length }} Members
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>

                    <transition name="slide">
                        <div class="isi grid grid-cols-2 border-t" v-if="showMember == i && showMem">
                            <div class="hide py-4 px-4">
                            <div
                                v-for="(user, i) in item.users"
                                :key="i">                            
                                <div class="image-left flex items-center justify-start mb-2">
                                    <div class="img-gojek">
                                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </div>                                        
                                    </div>
                                    <div class="flex flex-col px-2 text-gray-400">
                                        <div class="title text-sm font-bold">
                                            {{ user.fullName }}
                                        </div>
                                        <div class="client text-xs">
                                            {{ user.title }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </transition>

                    <div @click="clickBroadcast(i)" class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t border-b">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                {{ item.broadcasts.length }} Broadcasts
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>

                    <transition name="slide">
                        <div class="wraper-broadcast" v-if="showBroadcast == i && showBrod">
                        <div
                            v-for="(broadcast, i) in item.broadcasts"
                            :key="i">

                            <div class="broadcast px-4 py-0">
                                <div class="hover hover:bg-indigo-50 border-b flex items-start justify-between px-4 py-4 cursor-pointer">
                                    <div class="kiri flex flex-col px-4 py-4 w-4/5">
                                        <div class="judul font-semibold text-gray-500">
                                            {{ broadcast.title }}
                                        </div>
                                        <div class="isi-berita text-gray-500 py-2">
                                            {{ broadcast.description }}
                                        </div>
                                        <div class="select-file w-30-persen max-w-xs py-2">
                                            <a :href="assetUrl(broadcast.attachment1)" v-if="broadcast.attachment1" class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Attachment 1</span>
                                            </a>
                                            <label v-if="assetUrl(broadcast.attachment2)" class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Attachment 2</span>
                                            </label>
                                            <label v-if="assetUrl(broadcast.attachment3)" class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Attachment 3</span>
                                            </label>                                                                                        
                                        </div>
                                    </div>
                                    <div class="kanan flex flex-wrap w-1/5 py-4 justify-end">
                                        <div class="datetime">
                                            <span class="text-gray-400 text-sm">
                                                {{ broadcast.createdAt | momentRelativeTime}}
                                            </span>
                                        </div>
                                        <div class="status w-30-persen max-w-xs">
                                            <span class="bg-green-200 text-green-600 rounded-full px-2 text-xs">
                                                {{ broadcast.status }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
	</div>
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
    mixins: [ appMixins ],
    data() {
        return {
            showBroadcast: null,
            showBrod: false,
            showMember: null,
            showMem: false,
            loaderPage: false,
            groupList: [],
            keyword: '',
            userMenu: localStorage.userMenuManage.split(','),
            assetHost: this.$assetHost
        }
    },
    created() {
        this.allowedHere('groupList')
    },    
    mounted() {
        const find_menu = this.userMenu.find(menu => menu == "groupList");
        if(!find_menu){
            this.$swal('Maaf, anda tidak punya hak akses untuk halaman ini!');
            this.$router.go(-1);
        }
        this.getGroups();
    },
    methods: {
        searchGroup(){
            this.loaderPage = true;
            axios.get(`/groups?sort=ASC&order&limit&keyword=${this.keyword}`, {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            }).then((response) => {
                this.loaderPage = false;
                this.groupList = response.data.data;
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
        },
        toBroadcastForm(param){
            this.$router.push(`/broadcast-form/${param}`);
        },
        editGroup(param){
            this.$router.push({
                path: `/group-edit/${param}`
            })
        },
        goToGroupForm(){
            this.$router.push('/group-form');
        },
        getGroups(){
            this.loaderPage = true;
            axios.get('/groups', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.groupList = response.data.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        archiveGroup(groupId){
            this.loaderPage = true;
            axios.put('/archive?objectId='+groupId+'&objectType=GROUP', {
                params: {
                    objectType: 'GROUP',
                    objectId: groupId,
                },
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.groupList = this.groupList.filter(c => c.id != groupId);
                this.groupList.push(response.data.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });            
        },       
        clickMember(param){
            this.showMember = param;
            this.showMem = !this.showMem;
        },
        clickBroadcast(param){
            this.showBroadcast = param;
            this.showBrod = !this.showBrod;
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