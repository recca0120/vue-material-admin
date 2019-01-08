<template>
  <div id="pageEditor">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3 class="pa-0">Awesome Quill Editor &nbsp;&nbsp;<a href="https://quilljs.com">Offical Website</a></h3>
        </v-flex>
        <v-flex sm12>
          <quill-editor 
            class="quill"
            :content="content"
            :options="editorOption"
          >
          </quill-editor>      
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    quillEditor
  }
})
export default class BasicForms extends Vue {
  content = "Compose Epic Story...";
  editorOption: any = {};
}
</script>

<style lang="stylus" scoped>
  .quill
    height : 520px
</style>
