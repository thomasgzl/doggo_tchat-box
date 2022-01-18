<template>
  <div>
    <input v-model="userMessage" type="text" class="send-input" />
    <button type="button" @click="sendMessage(userMessage)">woof!</button>
  </div>
</template>

<script lang="ts" src="./HelloWorld.ts"></script>
<style scoped lang="css" src="./HelloWorld.css"></style>
