<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex lg6>
            <message-list></message-list>
          </v-flex>
          <v-flex lg6>
            <notification-list></notification-list>
          </v-flex>
          <v-flex lg6>
            <plain-table></plain-table>
          </v-flex>
          <v-flex lg6>
            <plain-table-order></plain-table-order>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MessageList from "@/components/widgets/list/MessageList.vue";
import NotificationList from "@/components/widgets/list/NotificationList.vue";
import PlainTable from "@/components/widgets/list/PlainTable.vue";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder.vue";

@Component({
  components: {
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  }
})
export default class Post extends Vue {
  handleClick(e: Event) {
    console.log(e);
  }
}
</script>
