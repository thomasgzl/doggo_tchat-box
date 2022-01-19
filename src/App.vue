<template>
  <div class="font-barlow">

    <UsersPanel />

    <div class="mb-6">
      <Header />
    </div>

    <div>
      <div class="channels">
        <ChannelsDisplay />
      </div>
      <div class="messages">
        <TchatBox />
        <MessageInput />
      </div>
    </div>

  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="css" src="./App.css"></style>
