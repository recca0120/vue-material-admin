<template>
<div class="name-card">
  <v-card :color="color" ref="card" :dark="dark" :img="cardBgImage">
    <v-img v-if="showTopNav">
      <v-layout row justify-space-between class="ma-0">
        <v-flex xs2>
          <v-icon color="pink">favorite</v-icon>
        </v-flex>
        <v-flex xs2 class="text-sm-right">
          <v-icon>more_vert</v-icon>
        </v-flex>
      </v-layout>
    </v-img>    
    <v-card-text>
      <div class="layout ma-0 align-center" :class="computeCardLayout">
        <v-avatar :size="computeAvatarSize" color="primary">
          <img v-bind:src="avatar.src" v-bind:alt="name" v-if="showAvatar">
          <span v-else class="white--text headline">{{ name.charAt(0) }}</span>
        </v-avatar>
        <div class="flex" :class="computeTextAlgin">
          <div class="subheading">{{name}}</div>
          <span class="caption">{{jobTitle}}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
  <v-bottom-nav :value="true" color="transparent" :height="64" v-if="showBottomNav">
    <v-btn flat color="teal" value="recent">
      <span>Recent</span>
      <v-icon>history</v-icon>
    </v-btn>
    <v-btn flat color="teal" value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn flat color="teal" value="nearby">
      <span>Nearby</span>
      <v-icon>place</v-icon>
    </v-btn>
  </v-bottom-nav>   
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MameCard extends Vue {
  @Prop({ default: "" }) name!: string;
  @Prop({ default: null }) avatar!: any | null;
  @Prop({ default: "" }) jobTitle!: string;
  @Prop() cardBgImage!: string;
  @Prop({ default: "" }) color!: string;
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: false }) bottomNav!: boolean;
  @Prop({ default: false }) topNav!: boolean;
  @Prop({ default: false }) mini!: boolean;

  computeCardLayout() {
    return this.mini ? "row" : "column";
  }

  computeTextAlgin() {
    return this.mini ? "text-sm-right" : "text-sm-center";
  }

  computeAvatarSize() {
    return this.mini ? "48" : "96";
  }

  showAvatar() {
    return this.avatar !== null && this.avatar.src;
  }

  showBottomNav() {
    return this.mini === false && this.bottomNav;
  }

  showTopNav() {
    return this.mini === false && this.topNav;
  }
}
</script>

<style lang="stylus" scoped>
  .caption, .subheading {
    font-weight:200;  
  }
</style>
