<template>
    <div class="bg-zinc-200 h-full w-full">
        <div id="Eform" class="absolute z-30 backdrop-brightness-50 w-full h-full flex items-center justify-center">
        <div class="bg-zinc-300 w-2/3 p-10 shadow-2xl rounded-xl gap-10">    
            <FormPost :Etitle="Etitle" :Emessage="Emessage"/>
            <div class="flex gap-5">
                <button class="mt-3 px-4 py-2 bg-yellow-500 flex gap-2 items-center hover:bg-yellow-600" type="submit" 
                            value="Finalizar">Finalizar</button>
                <button @click="closePost()" class="mt-3 px-4 py-2 bg-zinc-400 flex gap-2 items-center hover:bg-zinc-500">Cancel</button>
            </div>
        </div>
    </div>

    <div class="flex flex-col border-b-2 border-zinc-400 gap-5 py-5 z-20 h-full w-full  px-10">
        <div class="flex flex-col">
            <h1 class="text-3xl border-b-4 border-yellow-500 font-semibold w-min">Posts</h1>
        </div>

        <div class="flex gap-3">
            <BtnYellow content="Not Ansewring" />
            <BtnNormal content="All"/>
        </div>

        <div class="flex justify-between border-none">
                <button class="flex gap-3 items-center" v-on:click="openPost()"><i class="fa-solid fa-plus"></i>Create a new Post</button>
                <a href="">Show all Tickets</a>
        </div>
        

        <div id="chatBox" class="py-4 bg-zinc-300">
            <div v-for="p in posts" :key="p.id" :value="p.title" class="flex justify-between bg-zinc-200 items-center py-2 border-2 border-y-zinc-400 px-4">
                <div class="flex gap-2 items-center">
                    <p>{{ p.createBy }}</p>
                    <p class="font-semibold">{{p.title}}</p>
                </div>
                <div class="flex gap-2 items-center">
                    <span class="font-light text-xs">{{p.createDate}}</span>
                    <span class="font-light text-xs">{{p.createTime}}</span>
                    <button class="" @click="editPost(p.id, p.title, p.message)">Responder</button>
                </div>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
import BtnYellow from '../components/BtnYellow/BtnYellow.vue'
import BtnNormal from '../components/BtnNormal/BtnNormal.vue'
import FormPost from '../components/FormPost.vue'

export default{
    name: 'Post',
    data(){
        return{
            posts: String,
            Etitle : String,
            Emessage : String
        }
    },
    components:{
        BtnYellow,
        BtnNormal,
        FormPost
    },methods:{
        async getPosts(){

            const req = await fetch('http://localhost:3000/posts');
            const data = await req.json();

            const posts = data.valueOf();
            this.posts = posts;

        },async openPost(){
            document.getElementById("form").style.display = "flex";
        },
        async closePost(){
            document.getElementById("Eform").style.display = "none";
            this.getTickets();
        },async editPost(id, title, message){

            this.Eid = id;
            this.Etitle = title;
            this.Emessage = message;
            document.getElementById("Eform").style.display = "flex";
        }
    },mounted(){
        this.getPosts();
    }
}


</script>

<style>
#Eform{
    display: none;
}


</style>