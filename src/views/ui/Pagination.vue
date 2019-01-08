<template>
  <div id="page-pagination">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="Default">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination v-model="page"></v-pagination>
            </div>
          </v-widget>
          <v-widget title="Visiable Limit" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="15" v-model="page" :total-visible="7"></v-pagination>
            </div>
          </v-widget>
          <v-widget title="Short" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="5" v-model="page"></v-pagination>
            </div>
          </v-widget>
          <v-widget title="Round" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-pagination :length="5" v-model="page" circle></v-pagination>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VWidget from "@/components/VWidget.vue";

@Component({
  components: {
    VWidget
  }
})
export default class Pagination extends Vue {
  page = 1;
}
</script>
