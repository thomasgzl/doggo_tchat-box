import { defineComponent, defineAsyncComponent } from 'vue';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../gql-client';

const MessageDisplayer = defineAsyncComponent(() => import(/* webpackChunkName: "components_message-displayer" */
'@/components/message-displayer/message-displayer.vue'));

export default defineComponent({
  name: 'TchatBox',
  components: { MessageDisplayer },
  props: {},
  data() { return { messages: [] as any[] }; },
  computed: {},
  created: function() { /* possible init API call */ },
  mounted: function() { this.getMessages() },
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {
    async getMessages() {
      const query = gql`
      {
        message {
          author_id
          channel_id
          content
          date
          id
        }
      }
    `
    
    const data = await graphQLClient.request(query)
    if (data) { this.messages = data.message }
    }
  }
});
