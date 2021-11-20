<template>
    <div class="sidebar-mini bg-white rounded-lg px-0 shadow-lg max-h-60" style="max-height:10rem">
        <router-link 
            v-if="allowedTo('taskAdd')"
            :to="'/project-new-task/'+this.projectId"
            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </div>
            <div class="title text-sm font-semibold">
                Buat Task Baru
            </div>
        </router-link>

        <router-link :to="'/projects/'+this.projectId+'/progress'" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div class="title text-sm font-semibold">
                Task Saya
            </div>
        </router-link>

        <router-link to="/" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
            </div>
            <div class="title text-sm font-semibold text-gray-700">
                Semua Task
            </div>
        </router-link>
    </div>
</template>

<script>
import appMixins from '../mixins/appMixins'

export default {
    props: ['taskId', 'projectId'],
    name: 'MiniSidebarComponent',
    mixins: [ appMixins ],
}
</script>

<style scoped>
.router-link-exact-active {
  color: rgba(37, 99, 235);
  cursor: pointer;
}
</style>