import { defineComponent, defineAsyncComponent } from 'vue';

const HelloWorld = defineAsyncComponent(() => import(/* webpackChunkName: "components_hello-world" */
  '@/components/hello-world/HelloWorld.vue'));
  const Header = defineAsyncComponent(() => import(/* webpackChunkName: "components_header" */
  '@/components/header/header.vue'));

export default defineComponent({
  name: 'App',
  components: { HelloWorld, Header },
  props: {},
  data() { return {}; },
  computed: {},
  watch: {},
  created: function() {},
  mounted: function() {},
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {}
});
