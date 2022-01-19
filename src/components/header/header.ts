import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  components: {},
  props: {},
  data() { return {}; },
  computed: {},
  created: function() { /* possible init API call */ },
  mounted: function() { /* DOM accessible via this.$el */ },
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {
    displayUsers() {
      this.$store.commit('usersPanel', { display: true });
    }
  }
});
