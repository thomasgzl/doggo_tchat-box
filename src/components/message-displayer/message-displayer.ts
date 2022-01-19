import { defineComponent } from 'vue';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../gql-client';

export default defineComponent({
  name: 'MessageDisplayer',
  components: {},
  props: {
    authorId: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },    
    channelId: {
      type: String,
      default: ''
    },
  },
  data() { 
    return {
      users: [],
      userByMsg: null
    }; 
  },
  computed: {},
  watch: {},
  created: function() { },
  mounted: function() { this.getUsers() },
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: { 
    async getUsers() {
      const query = gql`
      {
        user {
          id
          name
        }
      }
    `
    
    const data = await graphQLClient.request(query)
    if (data) { 
      this.users = data.user;
     this.$nextTick(() => { this.findUser(data.user) })
    }
    },

    findUser(users: any) {
      this.userByMsg = users.find((us: any) => { return us.id === this.authorId })
    }
  }
});
