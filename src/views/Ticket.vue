<template>
    <div id="Eform" class="absolute z-30 backdrop-brightness-50 w-full h-full flex items-center justify-center">
        <div class="bg-zinc-300 w-2/3 p-10 shadow-2xl rounded-xl gap-10">    
            <FormTicket :Etitle="Etitle" :Epriority="Epriority"/>
            <div class="flex gap-5">
                <button @click="deleteTicket(Eid)" class="mt-3 px-4 py-2 bg-yellow-500 flex gap-2 items-center hover:bg-yellow-600" type="submit" 
                            value="Finalizar">Finalizar</button>
                <button class="mt-3 px-4 py-2 bg-zinc-400 flex gap-2 items-center hover:bg-zinc-500" @click="EcloseForm()">Cancel</button>
            </div>
        </div>
    </div>
    <div id="form" class="w-full h-full flex z-20 absolute justify-center items-center backdrop-brightness-50">
        <div class="bg-zinc-300 w-2/3 p-10 shadow-2xl rounded-xl gap-10">
            <div class="flex justify-between items-center">
                <h1 class="font-semibold text-xl">Create a new ticket:</h1>
                <button class="font-semibold text-xl" v-on:click="closeForm()">X</button>
            </div>
            <form @submit="createTicket" class="flex flex-col items-center mt-8 gap-3">
                <div class="grid grid-cols-3 w-2/3">
                    <label for="">Title:</label><input class="col-span-2" v-model="title" type="text" name="" id="" placeholder="Title...">
                </div>
                <div  class="w-2/3 grid grid-cols-3 grid-rows-2 items-center justify-between gap-3">
                    <label for="">Who can see:</label>
                    <select class="col-span-2" name="" id="">
                        <option v-for="u in usersList" :key="u.id" :value="u.name">{{u.name}}</option>
                    </select>
                    <label class="row-span-2 col-span-1" for="">Priority:</label>
                    <select class="row-span-2 col-span-2" v-model="priority" name="priority" id="priority">
                        <option>Select priority</option>
                        <option v-for="p in priorityList" :key="p.id" :value="p.type">{{p.type}}</option>
                    </select>
                </div>
                <div class="flex flex-col gap-3 justify-items-start h-auto w-2/3">
                    <label class="" for="">Message:</label>
                    <textarea class="h-36 w-full" v-model="message" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <input class="mt-3 px-4 py-2 bg-yellow-500 flex gap-2 items-center hover:bg-yellow-600" @click="EcloseForm()" type="submit" value="Salvar">
                </div>
            </form>
            
        </div>
    </div>

    <div class="bg-zinc-200 px-10 flex flex-col w-full z-10 h-full">
            
        <MainDashboard v-if="renderComponent"/>
        <div class="bg-zinc-200">
            <div class="flex justify-between border-none">
                <button class="flex gap-3 items-center" v-on:click="openForm()"><i class="fa-solid fa-plus"></i>Create a new Ticket</button>
                <a href="">Show all Tickets</a>
            </div>
        </div>
        <div id="chatBox" class="py-4 bg-zinc-300">
            <div v-for="t in tickets" :key="t.id" :value="t.title" class="hover:bg-zinc-300 flex justify-between bg-zinc-200 items-center py-2 border-2 border-y-zinc-400 px-4">
                <div class="flex items-center gap-2 w-4/5">
                    <div class="flex items-center gap-2 w-1/5 text-center justify-between">
                        <p class="text-sm text-zinc-700">#{{t.id}}</p>
                        <p class="text-sm text-zinc-700 px-5 text-center">{{t.priority}}</p>
                        <p class="">{{t.createBy}} |</p>
                    </div>
                    <div class="flex items-center w-3/4 gap-2">
                        <p class="font-semibold">{{t.title}}</p>
                        <p>{{ t.message }}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <span class="font-light text-xs">{{t.createDate}}</span>
                    <span class="font-light text-xs">{{t.createTime}}</span>
                    <button class="" @click="editTickets(t.id, t.title, t.priority)">Editar</button>
                    <button class="" @click="deleteTicket(t.id)">Excluir</button>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>

import MainDashboard from '../components/MainDashboad.vue';
import FormTicket from '../components/FormTicket.vue'

import { nextTick, ref } from 'vue';
const renderComponent = ref(true);


export default{
    name: 'Ticket',
    components:{
        MainDashboard,
        FormTicket
    },
    data(){
        return{
            renderComponent,
            /*ticketsdata: null,*/
            dataTotal : String,
            priority : null,
            tickets : String,
            ticket: null,
            message: null,
            title: null,
            usersList : String,
            priorityList : String,
            currentDate : String,
            currentTime : String,
            Epriority : String,
            Etitle : String,
            Eid : String
        }
    },
    methods: {
        async getTickets(){
            const req = await fetch("http://localhost:3000/tickets");
            const data = await req.json();

            const tickets = data.valueOf()
            this.tickets = tickets
        },
        async openForm(){
            document.getElementById("form").style.display = "flex";
        },
        async closeForm(){
            document.getElementById("form").style.display = "none";
            this.getTickets();
        },
        async createTicket(){

            const date = new Date();

            let currentHour = date.getHours();
            let currentMinutes = date.getMinutes()
            let currentTime = `${currentHour}:${currentMinutes}`;

            console.log(currentTime);

            let currentDay = String(date.getDate()).padStart(1, '0');
            let currentMonth = String(date.getMonth()+1).padStart(2, "0");
            let currentYear = date.getFullYear();

            let currentDate = `${currentMonth}-${currentDay}-${currentYear}`;
            console.log(currentDate);
            this.currentDate = currentDate;
            this.currentTime = currentTime;

            const data = {
                title : this.title,
                createTime : this.currentTime,
                createDate : this.currentDate,
                createBy : "João",
                status : "Open",
                priority : this.priority,
                message : this.message
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/tickets",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })
            this.forceRender();
            const res = await req.json()

        },
        async getUsers(){
            const req = await fetch("http://localhost:3000/user");
            const data = await req.json();

            const users = data.valueOf()
            this.usersList = users
        },
        async getPriority(){
            const req = await fetch("http://localhost:3000/priority");
            const data = await req.json();

            const priority = data.valueOf()
            this.priorityList = priority
        },async deleteTicket(id){
            
            const req = await fetch(`http://localhost:3000/tickets/${id}`,{
                method: 'DELETE'
            });

            document.getElementById("Eform").style.display = "none";

            const res = await req.json();
            
            this.getTickets();
            this.forceRender();

        },async forceRender(){
            // Here, we'll remove MyComponent
            renderComponent.value = false;

            await nextTick();

            // Add MyComponent back in
            renderComponent.value = true;
        },async editTickets(id, title, priority){
            
            this.Etitle = title;
            this.Epriority = priority;
            this.Eid = id;
            console.log(this.Eid);
            document.getElementById("Eform").style.display = "flex";
            
        },async EcloseForm(){
            document.getElementById("Eform").style.display = "none";
            this.getTickets();
        }, async EopenForm(){
            document.getElementById("Eform").style.display = "flex";
        },
    },
    mounted(){
        this.getTickets();
        this.getUsers();
        this.getPriority();
    }
}

</script>

<style>

#form, #Eform{
    display: none;
}

</style>