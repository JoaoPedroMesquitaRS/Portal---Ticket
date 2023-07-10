<template>
    <div id="card" class="bg-zinc-50 rounded-md flex flex-col items-center text-center px-16 py-4 shadow-lg hover:bg-zinc-300 hover:shadow-none transition">
        <p class="text-2xl font-semibold">{{title}}</p>
        <span class="text-3xl font-bold">{{dashValue}}</span>
    </div>
</template>

<script>

export default{
    name: 'DashCard',
    props:{
        title: String,
        dashValue: String
    }
}


</script>

<style>

</style>