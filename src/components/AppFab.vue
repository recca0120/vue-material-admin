<template>
  <v-fab-transition>
    <v-btn fab="fab" small dark="dark" fixed="fixed" bottom="bottom" right="right" color="red"  v-show="fab" @click="toTop">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFab extends Vue {
  fab = false;

  onScroll() {
    if (typeof window === "undefined") {
      return;
    }

    this.fab = this.getTop() > 300;
  }

  toTop() {
    this.$router.push({ hash: "" });
    this.$vuetify.goTo(0);
  }

  private getTop() {
    if (window.pageXOffset) {
      return window.pageXOffset || 0;
    }

    if (window.document && window.document.documentElement) {
      return window.document.documentElement.offsetTop || 0;
    }

    return 0;
  }
}
</script>
