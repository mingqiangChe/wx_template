"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 地址
      address: "福永同泰店",
      addressImg: "../../../../static/address.png",
      addressPeople: "../../../../static/bangbagn.webp"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.address),
    b: _ctx.dressPeople
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chemingqiang/Downloads/github/thomasv/pages/component/components/index/addresss.vue"]]);
wx.createComponent(Component);
