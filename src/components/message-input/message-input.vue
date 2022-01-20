<template>
  <div class="message-input__container">
    <input v-model="userMessage" type="text" class="send-input pl-3 font-black" placeholder="Ton message" />
    <button class="btn" type="button" @click="sendMessage(userMessage)">woof!</button>
  </div>
</template>

<script lang="ts" src="./message-input.ts"></script>
<style scoped lang="css" src="./message-input.css"></style>
