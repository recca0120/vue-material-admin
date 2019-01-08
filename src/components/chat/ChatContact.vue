<template>
    <v-container class="fill-height pa-0 ma-0 chat-drawer-container fluid">
      <template v-if="!$vuetify.breakpoint.smAndDown">
        <v-layout row>
          <v-flex lg3 class="chat-contact--sidebar white">
            <chat-contact-list></chat-contact-list>
          </v-flex>
          <v-flex lg9>
            <chat-contact-profile></chat-contact-profile>
          </v-flex>
        </v-layout>
      </template>
      <template v-else>
        <v-layout column>
          <v-flex sm12 class="white" v-if="showSidebar">
            <chat-contact-list></chat-contact-list>
          </v-flex>
          <v-flex sm12 v-if="showWindow">
            <chat-contact-profile></chat-contact-profile>
          </v-flex>
        </v-layout>        
      </template>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatContactList from "./ChatContactList.vue";
import ChatContactProfile from "./ChatContactProfile.vue";

@Component({
  components: {
    ChatContactList,
    ChatContactProfile
  }
})
export default class ChatContact extends Vue {
  chat: string | null = null;
  selectedTab: string | null = null;

  get showSidebar() {
    return this.$route.params.uuid === undefined;
  }

  get showWindow() {
    return this.$route.params.uuid !== undefined;
  }
}
</script>
