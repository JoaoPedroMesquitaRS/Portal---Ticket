<template>
    <div class="bg-zinc-200">
        <section class="px-10">
        <MainDashboard />
        <MainChat />
        
        </section>
        <MainPost />
    </div>
</template>

<script>

import MainDashboard from '../components/MainDashboad.vue'
import MainChat from '../components/MainChat.vue'
import MainPost from '../components/MainPost.vue'

export default{
    name: 'Main',
    components: {
        MainDashboard,
        MainChat,
        MainPost
    }
}

</script>

<style>

</style>