import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageInput',
    components: {},
    props: {},
    data() { 
        return { 
            userMessage: ''
        }; 
     },
    computed: {},
    watch: {},
    created: function() {},
    mounted: function() { this.$store.commit('message', 'initialization') },
    beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
    methods: {
        sendMessage(message: string) {
            this.$store.commit('message', message)
        }
    }
})