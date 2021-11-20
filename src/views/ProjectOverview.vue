<template>
    <div class="app project-overview">

        <ProjectHeader :project="projectDetail" currentMenu="overview" />

        <div class="project-brief w-full my-10 lg:px-28">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start mb-2">
                    <div class="img-gojek flex-shrink-0 rounded-full bg-purple-700 w-10 h-10 flex items-center justify-center px-2">
                        <svg class="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div class="title text-lg font-bold ml-4 text-gray-600">
                        Project Brief
                    </div>
                </div>
                <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                    <button
                        v-if="allowedTo('projectUpdate')" 
                        @click="editProject(projectDetail.id)"
                        class="bg-gray-200 hover:bg-gray-300 rounded lg:px-6 px-2 py-1 text-gray-500 font-semibold text-xs mr-4 flex items-center">
                        <span class="mr-1">Edit Project</span>
                        <svg class="w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                    <button 
                        v-if="allowedTo('projectUpdate')" 
                        @click="editProject(projectDetail.id)"
                        class="bg-gray-200 hover:bg-gray-300 rounded lg:px-6 px-2 py-1 text-gray-500 font-semibold text-xs mr-4 flex items-center">
                        <span class="mr-1">Add Participant</span>
                        <svg class="w-4" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>                    
                </div>
            </div>
            <div class="text-justify text-gray-500 font-medium">
                {{projectDetail.projectBrief}}
            </div>
        </div>
        <div class="garis border-t border-gray-300 mt-16 mb-8 lg:mx-28"></div>
        <!-- PARTICIPANTS -->
        <div class="documents flex items-center w-full my-12 lg:px-28 justify-between">
            <div class="font-bold text-lg text-gray-600">Participants</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                {{countParticipants}} people
            </div>                    
        </div>
        <div class="rincian w-full my-4 lg:px-28 justify-between bg-indigo-50">
            <div class="sidebar bg-white rounded px-0 py-4 shadow-lg">
            <div 
                    v-for="(item, i) in projectDetail.users"
                    :key="i">
                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        {{ item.title }}
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-sm">{{ item.fullName }}</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="garis w-full border-t my-2"></div>
            </div>
            </div>
        </div>
        <!-- TASKS -->
        <div class="documents flex items-center w-full my-12 lg:px-28 justify-between">
            <div class="font-bold text-lg text-gray-600">Tasks</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                {{countTasks}} tasks
            </div>
        </div>
        <div 
            v-if="countTasks > 0"
            class="rincian w-full my-4 lg:px-28 justify-between bg-indigo-50">
            <div class="sidebar bg-white rounded px-0 py-4 shadow-lg">
                <!-- loop this -->
                <div 
                    v-for="(item, i) in tasks"
                    :key="i">
                    <div class="sidebar-contain flex items-center justify-between px-4">
                        <div class="title text-md hover:text-purple-500 cursor-pointer">
                            {{item.title}}
                        </div>
                        <div class="flex items-center">
                            <div class="mr-2 text-gray-400 text-sm">{{item.createdAt|momentRelativeTime}}</div>
                            <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div class="garis w-full border-t my-2"></div>
                </div><!-- end loop-->              
            </div>
        </div>
	</div><!--end DIV app -->
</template>

<script>
import axios from 'axios'
import appMixins from '../mixins/appMixins'
import ProjectHeader from '../components/ProjectHeader'

export default {
    components: {ProjectHeader},
    props: ['id'],
    data() {
        return {
            projectDetail: '',
            tasks: 0,
            participants: 0,
            users: 0,
        }
    },
    mixins: [ appMixins ],
    mounted(){
        this.getProjectDetail();
    },
    computed: {
        countParticipants(){
            return this.projectDetail.users.length;
        },
        countTasks(){
            return this.tasks.length;
        }
    },
    methods: {
        getProjectDetail(){
            axios.get(`/projects/${this.id}`)
            .then((response) => {
                this.projectDetail = response.data.data;
                this.tasks = response.data.data.tasks.reverse();
                if(response.data.data.participants)
                    this.participants = response.data.data.participants;
                else
                    this.participants = 5;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        editProject(param){
            this.$router.push({
                name: 'ProjectFormEdit',
                params: {id: param}
            })
        },
    },
}
</script>