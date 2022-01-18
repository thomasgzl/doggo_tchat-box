import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    components: {},
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() { 
        return { 
            userMessage: ''
        }; 
     },
    computed: {},
    watch: {},
    created: function() { this.userMessage = this.msg },
    mounted: function() {},
    beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
    methods: {
        sendMessage(message: string) {
            console.log('send', message)
        }
    }
})