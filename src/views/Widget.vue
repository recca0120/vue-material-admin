<template>
  <div id="page-lists">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex lg4>
          <profile-card></profile-card>
        </v-flex>
        <v-flex lg4>
          <menu-card></menu-card>
        </v-flex>
        <v-flex lg4>
          <setting-card></setting-card>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import ProfileCard from "@/components/widgets/card/ProfileCard.vue";
import MenuCard from "@/components/widgets/card/MenuCard.vue";
import SettingCard from "@/components/widgets/card/SettingCard.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    ProfileCard,
    MenuCard,
    SettingCard
  }
})
export default class Widget extends Vue {}
</script>
