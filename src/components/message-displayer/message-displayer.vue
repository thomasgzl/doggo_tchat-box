<template>
  <div class="message-displayer">
    <div class="ml-2 mt-2">
      de <span class="font-black">{{ userByMsg?.name }} </span>
      le <span class="italic">{{ $filters.date(date) }}</span>
    </div>
    <p class="text-lg font-black ml-2 mt-2">{{ message }}</p>
  </div>
</template>

<script lang="ts" src="./message-displayer.ts"></script>
<style scoped lang="css" src="./message-displayer.css"></style>
