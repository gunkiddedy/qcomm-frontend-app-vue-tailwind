<template>
    <div class="flex flex-col -mx-36 px-36">

        <div v-if="!isUserPage" class="footer-small lg:-mx-36 -mx-4 mt-0 text-gray-800 absolute w-full lg:h-12 h-6">
            <svg class="w-full lg:h-12 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>

        <div class="footer-app bg-gray-800 -mx-36 px-36 lg:mt-12 mt-6 text-gray-400 pb-8">
            <div class="grid lg:grid-cols-3 mt-12">
                <div class="qcom flex flex-col">
                    <router-link to="/">
                        <div class="text-xl font-bold">ProManager</div>
                    </router-link>
                    <div>QComm Project Manager</div>
                </div>
                <div class="qcom flex flex-col leading-loose lg:mt-0 mt-4">
                    <div class="mb-4 uppercase font-bold">PROYEK SAYA</div>
                    <router-link
                        v-for="(item, i) in projects"
                        :key="i" 
                        :to="`/projects/${item.id}`">
                        <div class="flex items-center justify-start">
                            <svg class="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <span class="ml-2 hover:ml-3 hover:text-gray-200">
                                {{ item.title }}
                            </span>
                        </div>
                    </router-link>
                </div>
                <div class="qcom flex flex-col leading-loose lg:mt-0 mt-4">
                    <div class="uppercase font-bold mb-4">Aktivitas Terakhir</div>
                    <router-link 
                        v-for="(item, i) in tasks"
                        :key="i"
                        :to="`/tasks/${item.id}`">
                        <div class="flex items-center justify-start">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <span class="ml-2 hover:ml-3 hover:text-gray-200">
                                {{ item.title }}
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="garis border-t border-gray-600 my-12"></div>
            <span hidden>{{checkRoute}}</span>

            <div class="flex lg:flex-row flex-col items-center justify-between text-sm">
                <div class="copy">
                    Copyright &copy; 2021. QComm
                </div>
                <div class="bantuan">
                    Whatsapp Support: +6281234567890
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FooterComponent',
    data() {
        return {
            isUserPage: false,
            projects: [],
            tasks: [],
        }
    },
    computed: {
        checkRoute(){
            if(this.$route.name == 'UserProfile'){
				this.isUserPage = true;
			}else{
				this.isUserPage = false;
			}
        }
    },
    mounted(){
        if(localStorage.userId == undefined)
            this.$router.push('/login');
        this.getUserDetail();
    },
    methods: {
        getUserDetail(){
            axios.get(`/users/${localStorage.userId}`)
            .then((response) => {
                this.projects = response.data.data?.projects;
                this.tasks = response.data.data.tasks.reverse().slice(0,5);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        toProjectOverview(param){
            this.$router.push({
                name: 'ProjectOverview',
                params: {id: param}
            });
        }
    },
}
</script>
