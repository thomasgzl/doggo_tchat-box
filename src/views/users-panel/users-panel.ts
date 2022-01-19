import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../gql-client';

export default defineComponent({
  name: 'UsersPanel',
  components: {},
  props: {},
  data() { 
    return { 
    users: []
  }; 
},
  watch: {
    usersPanel: function(newValue, oldValue) {
      if (oldValue.display !== newValue.display) {
        if (newValue.display === true) {
          this.open();
        } else if (newValue.display === false) {
          this.close();
        }
      }
    }
  },
  computed: { ...mapState(['usersPanel']) },
  created: function() {},
  mounted: function() { this.getUsers() },
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {
    async getUsers() {
      const query = gql`
      {
        user {
          id
          avatar
          name
          online
        }
      }
    `
    
    const data = await graphQLClient.request(query)
    if (data) { this.users = data.user }
    },

    open() {
      this.$nextTick(() => {
        this.$store.commit('usersPanel', { display: true });
      })
    },

    close() {
      this.$store.commit('usersPanel', { display: false });
    }
  }
});
