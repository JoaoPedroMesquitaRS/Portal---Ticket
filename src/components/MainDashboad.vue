<template>

    <div class="flex flex-col border-b-2 border-zinc-400 gap-5 py-5">
        <div class="flex flex-col">
            <h1 class="text-3xl border-b-4 border-yellow-500 font-semibold w-min">Welcome!</h1>
            <p>This is your Tickets Dashboard</p>
        </div>
        <div class="flex flex-col gap-3">
            <div v-if="dataTotal" id="#cards" class="grid grid-cols-4 gap-7">
                <DashCard title="TOTAL OPEN" :dashValue="dataTotal"/>
                <DashCard title="LOW" :dashValue="LowP"/>
                <DashCard title="NORMAL" :dashValue="NormalP"/>
                <DashCard title="CRITICAL" :dashValue="CriticalP"/>
            </div>
            
        </div>
    </div>

    

</template>

<script>

let dataTotal;

import DashCard from './DashCard/DashCard.vue'

export default{
    name: 'MainDashboard',
    components: {
        DashCard
    },
    data(){
        return{
            /*ticketsdata: null,*/
            dataTotal : String,
            priority: null,
            tickets : String,
            ticket: null,
            CriticalP: null,
            LowP : null,
            NormalP : null
        }
    },
    methods: {
        async getTicketsTotal(){
            this.dataTotal = " ";
            const req = await fetch("http://localhost:3000/tickets");
            const data = await req.json();

            const dataTotal = Object.keys(data).length;
            this.dataTotal = dataTotal;


            const tickets = data.valueOf()
            this.tickets = tickets
        },
        async getPriotity(){
            const req = await fetch("http://localhost:3000/tickets");
            const data = await req.json();

            /*const dataTotal = Object.values(data);*/

            // GET ALL THE VALUES FROM STATUS AND PUT INTO A ARRAY
            let priorityArray =  Object.values(data.map(x => x.priority));
            console.log(priorityArray);

            //ARRAY NUMBER OF ITEMS
            const totalItems = priorityArray.length;
            console.log(totalItems);

            let CriticalP = 0;
            let LowP = 0;
            let NormalP = 0;

            for(const i of priorityArray){
                if (i === 'Low') {
                    LowP = LowP + 1
                }
                if (i === 'Critical') {
                    CriticalP = CriticalP + 1
                }
                if (i === 'Normal') {
                    NormalP = NormalP + 1
                }
            }
            console.log(LowP);
            console.log(NormalP);
            console.log(CriticalP);

            this.CriticalP = CriticalP;
            this.LowP = LowP;
            this.NormalP = NormalP;
        }
    },
    mounted(){
        this.getTicketsTotal();
        this.getPriotity();
    }
}



</script>

<style>

</style>