<template>
  <div id="box" class="flex tchat-box bg-stone-800 mr-5 shadow-lg">
    <ul class="w-full">
      <li v-for="msg in messages" :key="msg.id">    
      <MessageDisplayer :authorId="msg.author_id" 
      :message="msg.content" 
      :date="msg.date" 
      :channelId="msg.channel_id" />
  </li>
  </ul>
  </div>
</template>

<script lang="ts" src="./tchat-box.ts"></script>
<style scoped lang="css" src="./tchat-box.css"></style>
