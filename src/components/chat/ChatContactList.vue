<template>
<div class="chat-contact">
  <v-toolbar flat dense class="chat-contact--toolbar">
    <v-text-field flat solo full-width prepend-inner-icon="search" label="Search"></v-text-field>
  </v-toolbar>               
  <vue-perfect-scrollbar class="chat-history--scrollbar">
    <v-divider></v-divider>
    <v-list two-line class="chat-contact--list">
      <v-subheader>Contacts</v-subheader>
      <template v-for="(item, index) in users">
        <v-divider :key="index"></v-divider>
        <v-list-tile avatar :key="item.name + index" :to="contactRoute(item.uuid)">
          <v-list-tile-avatar color="primary">
            <img :src="item.avatar" v-if="item.avatar">
            <span v-else class="white--text headline">{{ firstLetter(item.name)}}</span>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> 
              {{item.name}}
            </v-list-tile-title>
            <v-list-tile-sub-title>{{item.jobTitle}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-circle dot small :color="userStatusColor(item)"></v-circle>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>  
  </vue-perfect-scrollbar>  
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getUser } from "@/api/user";
import VCircle from "@/components/circle/VCircle";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

@Component({
  components: {
    VuePerfectScrollbar,
    VCircle
  }
})
export default class ChatContactList extends Vue {
  chat: string | null = null;
  selectedTab: string | null = null;

  get users() {
    return getUser();
  }

  contactRoute(id: string) {
    return "/chat/contact/" + id;
  }

  firstLetter(name: string) {
    return name.charAt(0);
  }

  userStatusColor(item: any) {
    // console.log(item)
    return item.active ? "green" : "grey";
  }
}
</script>

<style lang="stylus" scoped>
  .chat-contact--toolbar
    >>>.v-toolbar__content
      padding: 0 !important;
      
    >>>.v-input__prepend-inner
      margin-right: 12px;

    >>>.v-input__slot
      margin-bottom: 0;

</style>
