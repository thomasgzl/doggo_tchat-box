import { defineComponent, defineAsyncComponent } from 'vue';

  const HelloWorld = defineAsyncComponent(() => import(/* webpackChunkName: "components_hello-world" */
  '@/components/hello-world/HelloWorld.vue'));
  const Header = defineAsyncComponent(() => import(/* webpackChunkName: "components_header" */
  '@/components/header/header.vue'));
  const TchatBox = defineAsyncComponent(() => import(/* webpackChunkName: "views_tchat-box" */
  '@/views/tchat-box/tchat-box.vue'));

export default defineComponent({
  name: 'App',
  components: { HelloWorld, Header, TchatBox },
  props: {},
  data() { return {}; },
  computed: {},
  watch: {},
  created: function() {},
  mounted: function() {},
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {}
});
