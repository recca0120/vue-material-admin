/**
 * ECharts Vue Wrapper
 * Michael Wang
 */
import colors from "vuetify/es5/util/colors";
import { set, merge } from "lodash";
import ECharts from "echarts";

// set color palette
const colorPalette: any[] = [];
Object.entries(colors).forEach(item => {
  const temp = item[1] as any;
  if (temp.base) {
    colorPalette.push(temp.base);
  }
});
// default
// const colorPalette = ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
// ECharts.registerTheme('material', {
//   color: colorPalette,
//   graph: {
//     color: colorPalette
//   }
//   textStyle: {

//   }
// });
(function() {
  const throttle = function(type: any, name: any, obj: any = null) {
    obj = obj || window;
    let running = false;
    let func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";

@Component
export default class VEchart extends Vue {
  // args of  ECharts.init(dom, theme, opts)
  @Prop({ default: "auto" }) width!: string;
  @Prop({ default: "400px" }) height!: string;
  @Prop({ default: true }) merged!: boolean;
  // instace.setOption
  @Prop() pathOption!: any[];
  @Prop() option!: any;
  // general config
  @Prop() textStyle!: any;
  @Prop() title!: any;
  @Prop() legend!: any[];
  @Prop() tooltip!: any;
  @Prop() grid!: any[];
  @Prop() xAxis!: any[];
  @Prop() yAxis!: any[];
  @Prop() series!: any[];
  @Prop() axisPointer!: any;
  @Prop({ default: () => { return {}; } }) dataset!: any[]; // option.dataSet
  @Prop() colors!: any; // echarts.option.color
  @Prop() backgroundColor!: any[];
  @Prop() toolbox!: any[];
  // resize delay
  @Prop({ default: 450 }) widthChangeDelay!: number;

  chartInstance: any | null = null;
  clientWidth = null;
  allowedOptions = [
    "textStyle",
    "title",
    "legend",
    "xAxis",
    "yAxis",
    "series",
    "tooltip",
    "axisPointer",
    "grid",
    "dataset",
    "colors",
    "backgroundColor"
  ];
  _defaultOption = {
    tooltip: {
      show: true
    },
    title: {
      show: true,
      textStyle: {
        color: "rgba(0, 0, 0 , .87)",
        fontFamily: "sans-serif"
      }
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      show: true,
      type: "category",
      axisLine: {
        lineStyle: {
          color: "rgba(0, 0, 0 , .54)",
          type: "dashed"
        }
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {
          show: true,
          color: "rgba(0, 0, 0 , .54)",
          type: "dashed"
        }
      },
      axisLabel: {
        show: false
      }
    },
    yAxis: {
      show: true,
      type: "value",
      axisLine: {
        lineStyle: {
          color: "rgba(0, 0, 0 , .54)",
          type: "dashed"
        }
      },
      axisLabel: {
        show: false
        // color: 'rgba(0, 0, 0 , .54)'
      },
      splitLine: {
        lineStyle: {
          type: "dashed"
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          show: true,
          color: "rgba(0, 0, 0 , .54)",
          type: "dashed"
        }
      }
    },
    series: [
      {
        type: "line"
      }
    ]
  };

  get canvasStyle() {
    return {
      width: this.width,
      height: this.height
    };
  }

  init() {
    // set
    if (this.pathOption) {
      this.pathOption.forEach(p => {
        set(this.$data._defaultOption, p[0], p[1]);
      });
    }
    this.chartInstance = ECharts.init(
      this.$refs.canvas as HTMLCanvasElement,
      "material"
    );
    this.chartInstance.setOption(merge(this.option, this.$data._defaultOption));

    window.addEventListener("optimizedResize", () => {
      setTimeout(() => {
        this.chartInstance.resize();
      }, this.widthChangeDelay);
    });
  }

  resize() {
    this.chartInstance.resize();
  }

  clean() {
    window.removeEventListener("resize", this.chartInstance.resize);
    this.chartInstance.clear();
  }

  render(h: CreateElement) {
    const data = {
      staticClass: "v-chart",
      style: this.canvasStyle,
      ref: "canvas",
      on: this.$listeners
    };
    return h("div", data);
  }

  protected mounted() {
    this.init();
  }

  protected beforeDestroy() {
    this.clean();
  }
}
