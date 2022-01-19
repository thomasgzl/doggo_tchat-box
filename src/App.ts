import { defineComponent, defineAsyncComponent } from 'vue';

  const MessageInput = defineAsyncComponent(() => import(/* webpackChunkName: "components_message-input */
  '@/components/message-input/message-input.vue'));
  const Header = defineAsyncComponent(() => import(/* webpackChunkName: "components_header" */
  '@/components/header/header.vue'));
  const TchatBox = defineAsyncComponent(() => import(/* webpackChunkName: "views_tchat-box" */
  '@/views/tchat-box/tchat-box.vue'));
  const ChannelsDisplay = defineAsyncComponent(() => import(/* webpackChunkName: "views_channels-display" */
  '@/views/channels-display/channels-display.vue'));
  const UsersPanel = defineAsyncComponent(() => import(/* webpackChunkName: "views_users-panel" */
  '@/views/users-panel/users-panel.vue'));


export default defineComponent({
  name: 'App',
  components: { MessageInput, Header, TchatBox, ChannelsDisplay, UsersPanel },
  props: {},
  data() { 
    return { };
},
  computed: {},
  watch: {},
  created: function() { },
  mounted: function() {},
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {}
});
