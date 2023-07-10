<template>
    <div class="flex flex-col bg-zinc-300 h-full">
        <div id="link">
            <i class="fa-solid fa-hashtag"></i><router-link to="/ticket">Ticket</router-link>
        </div>
        <div id="link">
            <i class="fa-solid fa-comments"></i><router-link to="/chat">Chat</router-link>
        </div>
        <div id="link">
            <i class="fa-solid fa-house"></i><router-link to="/main">Main</router-link>
        </div>
        <div id="link">
            <i class="fa-solid fa-message"></i><router-link to="/posts">Post</router-link>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Nav'
}

</script>

<style>

#link{
    padding: 10px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

#link:hover{
    background-color: yellow;
}

</style>