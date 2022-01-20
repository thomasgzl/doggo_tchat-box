import { defineComponent, defineAsyncComponent } from "vue";
import { gql } from "graphql-request";
import { graphQLClient } from "@/gql-client";
import EventBus from "@/event-bus";

const MessageDisplayer = defineAsyncComponent(
  () =>
    import(
      /* webpackChunkName: "components_message-displayer" */
      "@/components/message-displayer/message-displayer.vue"
    )
);

export default defineComponent({
  name: "TchatBox",
  components: { MessageDisplayer },
  props: {},
  data() {
    return {
      messages: [] as any[],
    };
  },
  computed: {},
  created: function () {
    EventBus.$on("newMsg", this.getMessages);
  },
  mounted: function () {
    this.getMessages();
  },
  beforeUnmount: function () {
    EventBus.$off("newMsg", this.getMessages);
  },
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
      `;

      const data = await graphQLClient.request(query);
      if (data) {
        this.messages = data.message;
      }

      let box: any = document.getElementById('box');

      if (data && box.scrollHeight > 592) {
        this.$nextTick(() => { this.scrollDown(box) })
      }

    },

    scrollDown(box: any) {
          console.log('box>>', box);
          console.log('box SH>>', box.scrollHeight);
          box.scrollTop = box.scrollHeight;
    },
  },
});
