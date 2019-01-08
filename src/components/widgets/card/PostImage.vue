<template>
  <v-card>

    <v-img src="/static/nature/n3.jpeg" class="white--text">
    <v-card-text>
 
    <v-divider></v-divider>
    <v-toolbar card color="white">
        <v-text-field
        flat
        solo
        label="Comment here"
        append-icon="photo_camera"
        hide-details=""
        ></v-text-field>
    </v-toolbar>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PostImage extends Vue {}
</script>
