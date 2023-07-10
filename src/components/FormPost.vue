<template>

    <div id="editForm" >
        <div class="">
            <form class="">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col justify-start">
                        <h2 class="text-2xl font-semibold">{{ Etitle }}</h2>
                    </div>
                    
                </div>
                <div class="mt-5">
                    <label for="">{{ Emessage }}</label>
                </div>
            </form>
            
        </div>
    </div>
    

</template>

<script>

export default{
    name: 'FormPost',
    props:{
        Etitle : String,
        Emessage : String
    }
}

</script>

<style>


</style>