<template>

    <div id="editForm" >
        <div class="">
            <form class="">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col justify-start">
                        <h2 class="text-2xl font-semibold">{{ Etitle }}</h2>
                        <p>{{ Epriority }}</p>
                    </div>
                    
                </div>
                <div class="mt-5">
                    <label class="mt-3" for="">Type the resolution:</label>
                    <textarea class="h-36 w-full" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </form>
            
        </div>
    </div>
    

</template>

<script>

export default{
    name: 'FormTicket',
    props:{
        Etitle : String,
        Epriority : String
    }
}

</script>

<style>


</style>