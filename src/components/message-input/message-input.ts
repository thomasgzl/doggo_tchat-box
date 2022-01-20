import { defineComponent } from 'vue';
import { gql } from 'graphql-request'
import { graphQLClient } from '../../gql-client';
import EventBus from '@/event-bus';

export default defineComponent({
    name: 'MessageInput',
    components: {},
    props: {},
    emits: ['newMsg'],
    data() { 
        return { 
            userMessage: ''
        }; 
     },
    computed: {},
    watch: {},
    created: function() {},
    mounted: function() {},
    beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
    methods: {
        async sendMessage(message: string) {
            const mutation = gql`
            mutation MyMutation {
                insert_message(objects: {
                                        author_id: "9549e69d-4640-4a5e-82db-e4bc4a274fd0",
                                        content: "${message}",
                                        date: "${new Date().toJSON()}",
                                        channel_id: "${this.$store.state.channelId}"}) {
                  returning {
                    id
                  }
                }
              }
            `

        const data = await graphQLClient.request(mutation)
        EventBus.$emit('newMsg', data);
     }
 }
})