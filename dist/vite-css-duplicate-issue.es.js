import { openBlock, createElementBlock, renderSlot } from "vue";
var component_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".button{appearance:none;font-weight:700;background-color:#00f;text-align:center;color:#fff;padding:0 4px;height:40px;border-radius:4px}\n")();
const _hoisted_1 = ["type", "disabled"];
const _sfc_main = {
  __name: "component",
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "button",
        type: __props.type,
        disabled: __props.disabled
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1);
    };
  }
};
export { _sfc_main as VButton };
