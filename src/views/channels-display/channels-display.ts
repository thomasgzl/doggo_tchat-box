import { defineComponent } from 'vue';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../gql-client';

export default defineComponent({
  name: 'ChannelsDisplay',
  components: {},
  props: {},
  data() { 
    return {
      channels: [] as any[]
    }; 
  },
  computed: {},
  created: function() {},
  mounted: function() { this.getChannels() },
  beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
  methods: {
    async getChannels() {
      const query = gql`
      {
        channel {
          id
          name
        }
      }
    `
    
    const data = await graphQLClient.request(query)
    if (data) { 
      console.log(data)
      this.channels = data.channel
    }
    }
  }
});
