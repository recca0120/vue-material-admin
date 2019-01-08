import "./VCircle.styl";
import Colorable from "vuetify/es5/mixins/colorable";
import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { CreateElement } from "vue";

@Component
export default class VCircle extends mixins(Colorable) {
  @Prop() text!: string;
  @Prop() small!: boolean;
  @Prop() large!: boolean;
  @Prop() medium!: boolean;
  @Prop() dot!: boolean;
  @Prop() pill!: boolean;
  @Prop() ring!: boolean;

  get classes() {
    return {
      "circle-sm": this.small,
      "circle-lg": this.medium,
      "circle-xl": this.large,
      "circle-ring": this.ring,
      "circle-dot": this.dot,
      "circle-pill": this.pill,
      "theme--light": this.light,
      "theme--dark": this.dark
    };
  }

  protected render(h: CreateElement) {
    const data = {
      staticClass: "circle",
      class: this.classes,
      attrs: { tabindex: this.disabled ? -1 : 0 },
      on: this.$listeners
    };

    return h("span", data, [this.$slots.default]);
  }
}
