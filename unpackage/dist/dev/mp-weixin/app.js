"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/main/index.js";
  "./pages/component/club/club.js";
  "./pages/component/scanCode/scanCode.js";
  "./pages/component/goods/goods.js";
  "./pages/component/my/my.js";
  "./pages/component/index/index.js";
  "./pages/component/components/index/loginCertificate.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/chemingqiang/Downloads/github/thomasv/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
