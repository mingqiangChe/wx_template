"use strict";
const common_vendor = require("./common/vendor.js");
const swiperimg = () => "./pages/component/components/swiperImg.js";
const addresss = () => "./pages/component/components/index/addresss.js";
const _sfc_main = {
  data() {
    return {
      // 自定义首页轮播图传入
      swiper1: [{
        url: "../../../static/iu_01.webp"
      }, {
        url: "../../../static/iu_02.webp"
      }, {
        url: "../../../static/iu_03.webp"
      }, {
        url: "../../../static/iu_04.webp"
      }],
      swiper2: [{
        url: "../../../static/yun_01.webp"
      }, {
        url: "../../../static/yun_02.webp"
      }, {
        url: "../../../static/yun_03.webp"
      }, {
        url: "../../../static/yun_04.jpeg"
      }]
    };
  },
  components: {
    swiperimg,
    addresss
  },
  methods: {}
};
if (!Array) {
  const _component_swiperimg = common_vendor.resolveComponent("swiperimg");
  const _component_addresss = common_vendor.resolveComponent("addresss");
  (_component_swiperimg + _component_addresss)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      imglist: $data.swiper1
    }),
    b: common_vendor.p({
      imglist: $data.swiper2
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chemingqiang/Downloads/github/thomasv/pages/component/index/index.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
