<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex lg6 sm12 xs12>
            <message-list></message-list>
          </v-flex>
          <v-flex lg6 sm12 xs12>
            <notification-list></notification-list>
          </v-flex>
          <v-flex lg7 sm12 xs12>
            <plain-table></plain-table>
          </v-flex>
          <v-flex lg5 sm12 xs12>
            <plain-table-order></plain-table-order>
          </v-flex>
          <v-flex lg12 sm12 xs12>
            <post-list-card :items="posts"></post-list-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getPost } from "@/api/post";
import MessageList from "@/components/widgets/list/MessageList.vue";
import NotificationList from "@/components/widgets/list/NotificationList.vue";
import PlainTable from "@/components/widgets/list/PlainTable.vue";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder.vue";
import PostListCard from "@/components/widgets/card/PostListCard.vue";

@Component({
  components: {
    PostListCard,
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  }
})
export default class List extends Vue {
  get posts() {
    return getPost();
  }

  handleClick(e: Event) {
    console.log(e);
  }
}
</script>
