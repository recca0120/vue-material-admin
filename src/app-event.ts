import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppEvents extends Vue {
  snackbar = {
    show: false,
    text: "",
    color: ""
  };
  events = [
    {
      name: "APP_LOGIN_SUCCESS",
      callback: (e: Event) => {
        this.$router.push({ path: "dashboard" });
      }
    },
    {
      name: "APP_LOGOUT",
      callback: (e: Event) => {
        this.snackbar = {
          show: true,
          color: "green",
          text: "Logout successfully."
        };
        this.$router.replace({ path: "/login" });
      }
    },
    {
      name: "APP_PAGE_LOADED",
      callback: (e: Event) => {}
    },
    {
      name: "APP_AUTH_FAILED",
      callback: (e: Event) => {
        this.$router.push("/login");
        // this.$message.error('Token has expired');
      }
    },
    {
      name: "APP_BAD_REQUEST",
      // @error api response data
      callback: (msg: string) => {
        // this.$message.error(msg);
      }
    },
    {
      name: "APP_ACCESS_DENIED",
      // @error api response data
      callback: (msg: string) => {
        // this.$message.error(msg);
        this.$router.push("/forbidden");
      }
    },
    {
      name: "APP_RESOURCE_DELETED",
      // @error api response data
      callback: (msg: string) => {
        // this.$message.success(msg);
      }
    },
    {
      name: "APP_RESOURCE_UPDATED",
      // @error api response data
      callback: (msg: string) => {
        // this.$message.success(msg);
      }
    }
  ];

  protected created() {
    this.events.forEach((item: any) => {
      this.$on(item.name, item.callback);
    });
  }
}
