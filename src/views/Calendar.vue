<template>
  <v-container fluid>
    <v-layout column>
      <v-flex>
        <full-calendar class="fullwidth" :events="fcEvents" @dayClick="handleDayClick" @eventClick="handleEventClick">
        </full-calendar>
      </v-flex>
    </v-layout>
      <v-dialog v-model="dialog" width="650">
        <event-form ref="eForm" v-bind="dialogData"></event-form>
      </v-dialog>  
  </v-container>
</template>


<script lang="ts">
import FullCalendar from "vue-fullcalendar";
import EventForm from "../components/widgets/form/EventForm.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    FullCalendar,
    EventForm
  }
})
export default class Calendar extends Vue {
  e = "sm";
  dialog = false;
  dialogData = null;
  fcEvents = [
    {
      title: "Sunny Out of Office",
      start: "2018-03-30",
      end: "2018-04-02"
    }
  ];

  handleDayClick() {
    this.dialog = true;
  }
  handleEventClick(e: any) {
    this.dialog = true;
    const form = this.$refs.eForm as any;
    form.title = e.title;
    form.startDate = e.start;
    form.endDate = e.end;
  }
}
</script>


<style scoped>
.fullwidth {
  width: 100% !important;
  max-width: 100%;
}
</style>
