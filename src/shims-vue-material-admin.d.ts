declare module "vue-perfect-scrollbar" {
  import { Vue, Component } from "vue-property-decorator";
  export default class VuePerfectScrollbar extends Vue {}
}

declare module "vuetify/es5/mixins/colorable" {
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class Colorable extends Vue {
    @Prop() light!: string;
    @Prop() dark!: string;
    @Prop() disabled: boolean;
  }
}

declare module "vue-quill-editor" {
  import { Vue, Component } from "vue-property-decorator";

  @Component
  export class quillEditor extends Vue {}
}

declare module "vue-fullcalendar" {
  import { Vue, Component } from "vue-property-decorator";

  @Component
  export default class FullCalendar extends Vue {}
}

declare module "vue-truncate-filter" {
  import Vue, { PluginObject } from "vue";
  const VueTruncate: PluginObject<any>;

  export default VueTruncate;
}
