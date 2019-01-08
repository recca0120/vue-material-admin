<template>
  <v-card>
    <v-card-text class="pa-0">
      <v-container class="pa-0">
        <div class="layout row ma-0">
          <div class="sm6 xs6 flex">
            <div class="layout column ma-0 justify-center align-center">
              <v-icon size="56px" :color="color">{{icon}}</v-icon>
            </div>
          </div>
          <div class="sm6 xs6 flex text-sm-center py-3 white--text" :class="color">
            <div class="headline">{{ title }}</div>
            <span class="caption">{{ subTitle }}</span>
          </div>
        </div>
      </v-container>
    </v-card-text>
  </v-card>    
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MiniStatistic extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() subTitle!: string;
  @Prop() color!: string;
}
</script>
