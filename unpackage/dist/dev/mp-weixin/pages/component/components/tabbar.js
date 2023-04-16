"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      defaultAcives: 0,
      list: [{
        url: "../../../static/star_01.png",
        active: "../../../static/star_02.png",
        title: "首页"
      }, {
        url: "../../../static/club_01.png",
        active: "../../../static/club_02.png",
        title: "星享俱乐部"
      }, {
        url: "../../../static/code.png",
        active: "",
        title: ""
      }, {
        url: "../../../static/goods_01.png",
        active: "../../../static/goods_02.png",
        title: "订单"
      }, {
        url: "../../../static/my_01.png",
        active: "../../../static/my_02.png",
        title: "我的"
      }]
    };
  },
  onLoad() {
    this.defaultAcives = this.defaultAcive;
  },
  props: {
    defaultAcive: {
      type: Number,
      default: 0
    }
  },
  watch: {
    defaultAcive: function(newValue, oldValue) {
      console.log(newValue, "监听tab");
      this.defaultAcives = newValue;
    }
  },
  computed: {},
  methods: {
    tabChange(i) {
      console.log(i, "点击下标");
      this.$emit("tabchanges", i);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.n(index == 2 ? "active2" : "imggg", index == $data.defaultAcives && index !== 2 ? "activeImg" : ""),
        b: index == $data.defaultAcives ? item.active : item.url,
        c: common_vendor.n(index == 2 ? "imgs" : ""),
        d: index !== 2
      }, index !== 2 ? {
        e: common_vendor.t(item.title),
        f: common_vendor.n(index == $data.defaultAcives ? "activeText" : "")
      } : {}, {
        g: common_vendor.o(($event) => $options.tabChange(index), index),
        h: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dc9cbcaa"], ["__file", "/Users/chemingqiang/Downloads/github/thomasv/pages/component/components/tabbar.vue"]]);
wx.createComponent(Component);
