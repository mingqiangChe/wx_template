"use strict";
const common_vendor = require("../../common/vendor.js");
const navbar = () => "../component/components/tabbar.js";
const index = () => "../component/index/index2.js";
const club = () => "../component/club/club2.js";
const scanCode = () => "../component/scanCode/scanCode2.js";
const goodsx = () => "../component/goods/goods2.js";
const my = () => "../component/my/my2.js";
getApp();
const _sfc_main = {
  data() {
    return {
      defaultAcive: 0
    };
  },
  components: {
    navbar,
    index,
    club,
    scanCode,
    goodsx,
    my
  },
  onLoad() {
  },
  methods: {
    tabchanges(v) {
      console.log(v, "787");
      if (v != 2) {
        this.defaultAcive = v;
      }
      console.log(this.defaultAcive, "777");
    }
  }
};
if (!Array) {
  const _component_index = common_vendor.resolveComponent("index");
  const _component_club = common_vendor.resolveComponent("club");
  const _component_scanCode = common_vendor.resolveComponent("scanCode");
  const _component_goodsx = common_vendor.resolveComponent("goodsx");
  const _component_my = common_vendor.resolveComponent("my");
  const _component_navbar = common_vendor.resolveComponent("navbar");
  (_component_index + _component_club + _component_scanCode + _component_goodsx + _component_my + _component_navbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.defaultAcive == 0
  }, $data.defaultAcive == 0 ? {} : $data.defaultAcive == 1 ? {} : $data.defaultAcive == 2 ? {} : $data.defaultAcive == 3 ? {} : $data.defaultAcive == 4 ? {} : {}, {
    b: $data.defaultAcive == 1,
    c: $data.defaultAcive == 2,
    d: $data.defaultAcive == 3,
    e: $data.defaultAcive == 4,
    f: common_vendor.o($options.tabchanges),
    g: common_vendor.p({
      defaultAcive: $data.defaultAcive
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d311227b"], ["__file", "/Users/chemingqiang/Downloads/github/thomasv/pages/main/index.vue"]]);
wx.createPage(MiniProgramPage);
