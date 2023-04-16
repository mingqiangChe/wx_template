"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  props: {
    imglist: {
      type: Array,
      default: function() {
        return [{
          id: 0,
          url: "../../../static/iu_01.webp"
        }, {
          id: 1,
          url: "../../../static/iu_01.webp"
        }, {
          id: 2,
          url: "../../../static/iu_01.webp"
        }, {
          id: 3,
          url: "../../../static/iu_01.webp"
        }];
      }
    }
  },
  // onload onshow 在这里不生效
  // onLoad() {
  // 	console.log('轮播页onload');
  // 	console.log(this.imglist, '列表数据');
  // },
  // onShow(){
  // 	console.log('轮播页onload');
  // },
  mounted() {
    console.log("哈哈哈哈");
    console.log(this.imglist, "列表数据");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.imglist, (item, k0, i0) => {
      return {
        a: item.url,
        b: item.id
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chemingqiang/Downloads/github/thomasv/pages/component/components/swiperImg.vue"]]);
wx.createComponent(Component);
