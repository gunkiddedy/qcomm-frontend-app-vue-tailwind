<template>
    <div class="sidebar-contain flex items-center justify-between px-4">
        <div class="title text-md">
            <p>{{this.document.title}}</p>
        </div>
        <div class="flex items-center">
            <div class="mr-2"><p>{{this.document.createdAt | momentDatetime}}</p></div>
            <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
            <a target="_blank" :href="assetUrl(this.document.rawFile)">
                <svg class="w-6 h-6 text-purple-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </a>
            </div>
        </div>
    </div>
</template>

<script>
import appMixins from '../mixins/appMixins'

export default {
    name: 'ItemDocument',
    props: ['document'],
    mixins: [ appMixins ],    
}
</script>