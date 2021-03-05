<template>
    <div class="app project-task-detail">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        Gojek Projeck Lorem ipsum dolor sit amet.
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi odit neque officiis nemo placeat iusto facere magnam, laudantium veniam et cupiditate dicta doloremque doloribus debitis veritatis, repellat minima consectetur autem temporibus maxime at porro reprehenderit! Deserunt, veritatis modi voluptatibus soluta cupiditate nesciunt esse reprehenderit praesentium dignissimos, pariatur atque ipsa?
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <router-link to="/project-task" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </router-link>
                        <router-link to="/project-document" class="bg-purple-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </router-link>
                        <router-link to="/project-overview" class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
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

        <div class="garis border-t border-gray-300 mt-16 mb-8 lg:mx-28"></div>

        <div class="wrap-second-content grid lg:grid-cols-4 grid-cols-1 gap-8 lg:px-28">

            <!-- SIDEBAR -->
            <MiniSidebarComponent />

            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">
                <!-- MENGIRIM DOKUMEN PENDING -->
                <div class="tambahkan-dokumen w-full bg-indigo-50">
                    <div class="pending-wrap flex lg:flex-row flex-col lg:items-center lg:justify-between pb-4">
                        <div class="big-title text-xl font-bold text-gray-600">
                            Mengirim Dokumen Laporan ke Klien
                        </div>
                        <div class="pending bg-yellow-200 px-4 py-0 rounded lg:w-auto w-1/3 lg:mt-0 mt-2">
                            <span class="text-yellow-500 text-sm font-bold">Pending</span>
                        </div>
                    </div>
                    <div class="bg-white shadow-lg rounded">
                        <div class="pesan-user">
                            <div class="title px-4 py-3 rounded-t bg-gray-100">
                                <div class="isi flex items-center justify-between">
                                    <div class="nama flex flex-col">
                                        <div class="nama-saja text-gray-500 text-md font-bold">
                                            Khairul Ikhwan
                                        </div>
                                        <div class="waktu text-gray-400 text-xs">
                                            Sekitar 3 jam yang lalu
                                        </div>
                                    </div>
                                    <div class="img">
                                        <div class="flex-shrink-0 shadow rounded-full">
                                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="isi-pesan px-4 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti accusantium quibusdam. Quam assumenda obcaecati nobis ex velit et laborum cupiditate nemo beatae accusantium! Aliquam soluta eligendi quisquam tempora odio labore officia saepe obcaecati facilis consectetur, beatae voluptatum dicta nam suscipit adipisci nesciunt nulla voluptatem quos illum? Tempora, explicabo quae.
                            </div>
                        </div>
                        <div class="pesan-user">
                            <div class="title px-4 py-3 rounded-t bg-gray-100">
                                <div class="isi flex items-center justify-between">
                                    <div class="nama flex flex-col">
                                        <div class="nama-saja text-gray-500 text-md font-bold">
                                            Khairul Ikhwan
                                        </div>
                                        <div class="waktu text-gray-400 text-xs">
                                            Sekitar 3 jam yang lalu
                                        </div>
                                    </div>
                                    <div class="img">
                                        <div class="flex-shrink-0 shadow rounded-full">
                                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="isi-pesan px-4 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti accusantium quibusdam. Quam assumenda obcaecati nobis ex velit et laborum cupiditate nemo beatae accusantium! Aliquam soluta eligendi quisquam tempora odio labore officia saepe obcaecati facilis consectetur, beatae voluptatum dicta nam suscipit adipisci nesciunt nulla voluptatem quos illum? Tempora, explicabo quae.
                            </div>
                        </div>
                        <div class="pesan-user">
                            <div class="title px-4 py-3 rounded-t bg-gray-100">
                                <div class="isi flex items-center justify-between">
                                    <div class="nama flex flex-col">
                                        <div class="nama-saja text-gray-500 text-md font-bold">
                                            Khairul Ikhwan
                                        </div>
                                        <div class="waktu text-gray-400 text-xs">
                                            Sekitar 3 jam yang lalu
                                        </div>
                                    </div>
                                    <div class="img">
                                        <div class="flex-shrink-0 shadow rounded-full">
                                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="isi-pesan px-4 py-4 flex flex-col">
                                <div class="isi">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aperiam.
                                </div>
                                <div class="kondisi-file my-2 lg:w-1/3">
                                    <label class="bg-gray-100 flex justify-center px-2 items-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4 mb-1">
                                        <svg class="w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                        <span class="font-semibold text-gray-600 text-sm leading-loose">Dokumen-lap.pdf</span>
                                    </label>
                                    <label class="bg-gray-100 flex justify-center px-2 items-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                        <svg class="w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                        <span class="font-semibold text-gray-600 text-sm leading-loose">Dokumen-terkait.pdf</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BUAT TASK BARU -->
                <div class="tambahkan-dokumen w-full justify-between bg-indigo-50 my-8">
                    <div class="bg-white shadow-lg rounded pb-1">
                        <div class="title text-purple-700 text-md font-bold px-4 py-3 rounded-t bg-gray-100">
                            Tambahkan Balasan (Komentar)
                        </div>
                        <div class="txt-area px-4">
                            <textarea
                                placeholder="Tulis komentar disini..." 
                                name="" 
                                rows="5" 
                                class="w-full border focus:outline-none focus:shadow-inner my-4 rounded font-semibold px-2 py-2">
                            </textarea>
                        </div>
                        <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start px-4 mb-4">
                            <button class="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500">
                                <span class="font-semibold text-gray-50 text-sm leading-loose" >Tambah Task</span>
                            </button>
                            <label @click="selectImage" class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:ml-4 lg:mt-0 mt-2">
                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Attach File</span>
                            </label>
                            <label @click="selectImage" class="bg-gray-100 flex justify-center px-4 items-center py-1 rounded cursor-pointer hover:bg-gray-200 lg:ml-4 lg:mt-0 mt-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Mark as Resolved</span>
                            </label>
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
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue';
export default {
    components: {
        MiniSidebarComponent,
    },
    data() {
        return {
            profileClicked: false,
        }
    },
    methods: {
        selectImage(){
            // this.loadingImage = true;
            // if(this.form.bukti_trasnfer){
            // 	this.loadingImage = false;
            // }
        },
    },
}
</script>