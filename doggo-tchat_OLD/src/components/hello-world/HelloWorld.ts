import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    components: {},
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    data() { return { count: ref(0) }; },
    computed: {},
    watch: {},
    created: function() {},
    mounted: function() {},
    beforeUnmount: function() { /* clean all non-Vue listeners/objects */ },
    methods: {}
})