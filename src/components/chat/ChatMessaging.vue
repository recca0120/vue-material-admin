<template>
  <v-container class="fill-height pa-0 ma-0 messaging fluid" id="messaging">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-layout row>
        <v-flex lg3 class="white">
          <chat-history>
          </chat-history>
        </v-flex>
        <v-flex lg9>
          <chat-window></chat-window>
        </v-flex>
      </v-layout>
    </template>
    <template v-else>
      <v-layout column>
        <v-flex sm12 class="white" v-if="showSidebar">
          <chat-history>
          </chat-history>          
        </v-flex>
        <v-flex sm12 v-if="showWindow">
          <chat-window></chat-window>
        </v-flex>
      </v-layout>        
    </template>
  </v-container>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatHistory from "./ChatHistory.vue";
import ChatWindow from "./ChatWindow.vue";

@Component({
  components: {
    ChatHistory,
    ChatWindow
  }
})
export default class ChatMessaging extends Vue {
  get showSidebar() {
    return this.$route.params.uuid === undefined;
  }

  get showWindow() {
    return this.$route.params.uuid !== undefined;
  }
}
</script>
