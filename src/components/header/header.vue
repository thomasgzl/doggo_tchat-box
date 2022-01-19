<template>
  <div class="flex sticky top-0 h-20 bg-red-600 justify-center border-b-2 border-white mb-5">
    <marquee class="font-black">🐕🐕 Bienvenue dans la conversation du futur ! 🐕🐕</marquee>
    <div class="logo-container absolute">
      <img alt="doggo tchat logo" src="@/assets/logo-shiba.png" />
    </div>

    <div class="mr-3 mt-3">
      <button class="btn" type="button" @click="displayUsers">
        <i class="material-icons" aria-hidden="true">people</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./header.ts"></script>
<style scoped lang="css" src="./header.css"></style>
