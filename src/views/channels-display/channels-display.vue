<template>
  <div class="bg-stone-700 channels-display">
    <div v-if="!channels.length">
      <img src="../../assets/loading.gif" alt="loading spinner">
    </div>
    <button v-else class="mb-2 ml-2 chan" v-for="chan in channels" :key="chan.id" @click="isChannel(chan.id)">
      <span class="font-black lowercase"># {{ chan.name }}</span>
    </button>
  </div>
</template>

<script lang="ts" src="./channels-display.ts"></script>
<style scoped lang="css" src="./channels-display.css"></style>
