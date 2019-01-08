  <template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">{{title}}</h3>
    </div>
    <v-breadcrumbs divider="-" :items="breadcurmbs">

    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>  
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import menu from "@/api/menu";

@Component({})
export default class PageHeader extends Vue {
  title = "";

  get breadcurmbs() {
    let breadcrumbs: any[] = [
      {
        tag: "v-icon",
        text: "home"
      }
    ];
    menu.forEach(item => {
      if (item.items) {
        let child = (item.items as any).find((i: any) => {
          return i.component === this.$route.name;
        }) as any;
        if (child) {
          breadcrumbs.push({ text: item.title });
          breadcrumbs.push({ text: child.title, disabled: true });
          this.title = child.title;
        }
      } else {
        if (item.name === this.$route.name) {
          this.title = item.title as string;
          breadcrumbs.push({ text: item.title });
        }
      }
    });

    return breadcrumbs;
  }
}
</script>
