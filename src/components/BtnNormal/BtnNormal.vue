<template>
    <button class="hover:bg-zinc-300 px-4 py-2 bg-white">{{content}}</button>
</template>

<script>

export default{
    name: 'BtnNormal',
    props:{
        content: String
    },
}

</script>

<style>

</style>