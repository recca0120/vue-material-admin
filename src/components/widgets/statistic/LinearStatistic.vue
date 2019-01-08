<template>
  <v-card>
    <v-card-title>
      <div class="layout row ma-0 justify-space-between pb-1">
        <div class="subheading">{{title}}</div>
        <div class="icon">
          <v-icon mini :color="color">{{icon}}</v-icon>
        </div>
      </div>
    </v-card-title>
    <v-card-text class="pt-2">
      <h3 class="headline">{{subTitle}}</h3>
      <v-progress-linear :value="value" height="5" :color="color"></v-progress-linear>
      <span class="caption">{{caption}}</span>
    </v-card-text>
  </v-card>   
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LinearStatistic extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop() value!: number;
  @Prop() color!: string;

  get caption() {
    return this.value + "% " + this.subTitle;
  }
}
</script>
