<template>
 <transition name="anim-side-panel">
  <div v-if="usersPanel.display" class="bg-stone-700 users-panel">
      <button class="btn close-btn" type="button" @click="close">
        <i class="material-icons" aria-hidden="true">close</i>
      </button>

      <div class="flex justify-center mt-3 users-list">
        <ul>
          <li class="mb-3" v-for="user in users" :key="user.id">
            <span :class="{'online': user.online }" class="font-black opacity-50">{{ user.name}}</span>
          </li>
        </ul>
      </div>
  </div>
 </transition>
</template>

<script lang="ts" src="./users-panel.ts"></script>
<style scoped lang="css" src="./users-panel.css"></style>
