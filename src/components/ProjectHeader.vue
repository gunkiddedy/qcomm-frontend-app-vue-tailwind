<template>
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        {{project.title}}
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        {{project.description}}
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <router-link :to="`/projects/${project.id}/progress`" :class="activeMenu('progress')">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link :to="`/projects/${project.id}/documents`" :class="activeMenu('document')">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </router-link>
                        <router-link :to="'/projects/'+project.id" :class="activeMenu('overview')">
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
                                {{ project.company && project.company.title }}
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
                                {{ project.status }}
                            </div>
                            <div class="client text-xs mr-24">
                                Overall Progress
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import appMixins from '../mixins/appMixins'

export default {
    name: 'ProjectHeader',
    props: ['project', 'currentMenu'],
    mixins: [ appMixins ],
    computed: {
    },
    methods: {
        activeMenu(menu) {
            if (this.currentMenu === menu) {
                return 'bg-purple-500 px-6 py-1 rounded-full lg:mr-4 hover:bg-purple-600'
            } else {
                return 'bg-red-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2'
            }
        }
    }
}
</script>