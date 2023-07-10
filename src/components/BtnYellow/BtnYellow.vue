<template>
    <button class="px-4 py-2 bg-yellow-500 flex gap-2 items-center hover:bg-yellow-600">{{ content }}
        <i class="fa-solid fa-circle-exclamation"></i>
    </button>
</template>

<script>

export default{
    name: 'BtnYellow',
    props:{
        content: String
    },
}

</script>

<style>

</style>