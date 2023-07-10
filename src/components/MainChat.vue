<template>

    <div class="flex flex-col border-b-2 border-zinc-400 gap-5 py-5">
        <div class="flex flex-col">
            <h1 class="text-3xl border-b-4 border-yellow-500 font-semibold w-min">Chat</h1>
        </div>

        <div class="flex gap-3">
            <BtnYellow content="Not Viewed" />
            <BtnNormal content="All"/>
        </div>

        <div id="chatBox" class="py-4 bg-zinc-300">
            <div class="flex justify-between bg-zinc-200 items-center py-2 border-2 border-y-zinc-400 px-4">
                <p>John</p>
                <span class="font-light text-xs">00:00</span>
            </div>
            <div class="flex justify-between bg-zinc-200 items-center py-2 border-2 border-y-zinc-400 px-4">
                <p>Maria</p>
                <span class="font-light text-xs">00:00</span>
            </div>
        </div>

    </div>

</template>

<script>

import BtnYellow from './BtnYellow/BtnYellow.vue'
import BtnNormal from './BtnNormal/BtnNormal.vue'

export default{
    name: 'MainChat',
    components:{
        BtnYellow,
        BtnNormal
    }
}

</script>

<style>

</style>