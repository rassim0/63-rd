import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$6 = publicAssetsURL("/Logo.svg");
const _imports_1$6 = publicAssetsURL("/navbarBTT.svg");
const _imports_2$4 = publicAssetsURL("/Burger-li.png");
const _imports_2$3 = publicAssetsURL("/FF.svg");
const _imports_3$3 = publicAssetsURL("/IN.svg");
const _imports_4$2 = publicAssetsURL("/TWW.svg");
const _imports_5$2 = publicAssetsURL("/YYT.svg");
const _imports_7 = publicAssetsURL("/Emailup.svg");
const _imports_8 = publicAssetsURL("/HeroIMG.png");
const _sfc_main$9 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper" }, _attrs))} data-v-c5f9c4d5><div class="layout-content" data-v-c5f9c4d5><nav class="navbar" data-v-c5f9c4d5><div class="navbar-inner" data-v-c5f9c4d5><div class="logo" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_0$6)} alt="Logo" data-v-c5f9c4d5></div><div class="nav-links" data-v-c5f9c4d5><span data-v-c5f9c4d5>Features</span><span data-v-c5f9c4d5>Pricing</span><span data-v-c5f9c4d5>Support</span></div><button class="button-1" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_1$6)} alt="Open Menu" data-v-c5f9c4d5></button><button class="burger-button" data-v-c5f9c4d5><img${ssrRenderAttr("src", isMenuOpen.value ? "/Xbb.svg" : "/Hamburger.svg")}${ssrRenderAttr("alt", isMenuOpen.value ? "Close Menu" : "Open Menu")} data-v-c5f9c4d5></button></div><div class="${ssrRenderClass([{ "show": isMenuOpen.value }, "menu-overlay"])}" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_2$4)} alt="Decorative BG" class="burger-decoration" data-v-c5f9c4d5><div class="menu-links" data-v-c5f9c4d5><span data-v-c5f9c4d5>Features</span><span class="colors" data-v-c5f9c4d5>Pricing</span><span data-v-c5f9c4d5>FAQs</span><span data-v-c5f9c4d5>Support</span></div><div class="bottom-icons" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_2$3)} alt="icon1" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_3$3)} alt="icon2" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_4$2)} alt="icon3" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_5$2)} alt="icon4" data-v-c5f9c4d5></div></div></nav><div class="container" data-v-c5f9c4d5><section class="hero" data-v-c5f9c4d5><h1 class="hero-title" data-v-c5f9c4d5><span class="col" data-v-c5f9c4d5>Intelligent </span> cloud-based <span class="col" data-v-c5f9c4d5>note-taking</span> and collaboration tool</h1><p class="hero-description" data-v-c5f9c4d5> Experience the power of smart note-taking and transform the way you work today. </p><div class="email-form" data-v-c5f9c4d5><input type="email" placeholder="Enter your email " class="email-input" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_7)} class="submit-button" data-v-c5f9c4d5></div><div class="hero-right" data-v-c5f9c4d5><img${ssrRenderAttr("src", _imports_8)} alt="Hero" class="hero-image" data-v-c5f9c4d5></div></section></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c5f9c4d5"]]);
const _imports_0$5 = publicAssetsURL("/Logos.svg");
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-row" }, _attrs))} data-v-4ba516a9><div class="side-fade left-fade" data-v-4ba516a9></div><img${ssrRenderAttr("src", _imports_0$5)} alt="Partner Logos" data-v-4ba516a9><div class="side-fade right-fade" data-v-4ba516a9></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Promo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-4ba516a9"]]);
const _imports_0$4 = publicAssetsURL("/hh.svg");
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonial-section" }, _attrs))} data-v-73ef0dce><div class="quote-block" data-v-73ef0dce><img${ssrRenderAttr("src", _imports_0$4)} alt="Quote Icon" class="quote-icon" data-v-73ef0dce><p class="quote-text" data-v-73ef0dce> The real-time synchronization and AI-powered organization have made our workflow more efficient than ever. </p><div class="quote-meta" data-v-73ef0dce><p class="quote-author" data-v-73ef0dce>Sarah Johnson</p><p class="quote-book" data-v-73ef0dce>TechSavvy Solutions</p></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SecndHea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-73ef0dce"]]);
const _imports_0$3 = publicAssetsURL("/Grid-sh.png");
const _imports_1$5 = publicAssetsURL("/G1.svg");
const _imports_2$2 = publicAssetsURL("/G2.svg");
const _imports_3$2 = publicAssetsURL("/G3.svg");
const _imports_4$1 = publicAssetsURL("/G4.svg");
const _imports_5$1 = publicAssetsURL("/G5.svg");
const _imports_6 = publicAssetsURL("/G6.svg");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "info-grid-container" }, _attrs))} data-v-57865918><div class="info-section" data-v-57865918><h2 class="info-title" data-v-57865918>Discover the Power of <span class="tit" data-v-57865918>SmartNotes</span></h2><p class="info-text" data-v-57865918> SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others, and stay organized. </p></div><div class="grid-section" data-v-57865918><img${ssrRenderAttr("src", _imports_0$3)} alt="Grid Shadow" class="grid-background-decoration" data-v-57865918><div class="grid-box area-1" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_1$5)} alt="Icon 1" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>Cross-Platform Accessibility</h3><p class="box-desc" data-v-57865918>Whether you&#39;re on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.</p></div></div><div class="grid-box area-2" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_2$2)} alt="Icon 2" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>Customizable Templates</h3><p class="box-desc" data-v-57865918>Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.</p></div></div><div class="grid-box area-3" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_3$2)} alt="Icon 3" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>Secure Cloud Storage</h3><p class="box-desc" data-v-57865918>Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.</p></div></div><div class="grid-box area-4" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_4$1)} alt="Icon 4" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>Real-Time Collaboration</h3><p class="box-desc" data-v-57865918>Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.</p></div></div><div class="grid-box area-5" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_5$1)} alt="Icon 5" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>AI-Powered Organization</h3><p class="box-desc" data-v-57865918>Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.</p></div></div><div class="grid-box area-6" data-v-57865918><div class="box-content" data-v-57865918><img${ssrRenderAttr("src", _imports_6)} alt="Icon 6" class="box-icon" data-v-57865918><h3 class="box-title" data-v-57865918>Integrations</h3><p class="box-desc" data-v-57865918>Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c</p></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grid.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-57865918"]]);
const _imports_0$2 = publicAssetsURL("/effect.png");
const _imports_1$4 = publicAssetsURL("/BG.png");
const _imports_2$1 = publicAssetsURL("/supercar.mp4");
const _imports_3$1 = publicAssetsURL("/Oval.svg");
const _imports_4 = publicAssetsURL("/Path.png");
const _sfc_main$5 = {
  __name: "Video",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-wrapper" }, _attrs))} data-v-cb36d9ee><img${ssrRenderAttr("src", _imports_0$2)} alt="Decorative Top Left" class="decorative-image top-left" data-v-cb36d9ee><img${ssrRenderAttr("src", _imports_0$2)} alt="Decorative Bottom Right" class="decorative-image bottom-right" data-v-cb36d9ee><div class="video-container" data-v-cb36d9ee><div class="video-overlay" data-v-cb36d9ee></div><video class="custom-video"${ssrRenderAttr("poster", _imports_1$4)} preload="metadata" data-v-cb36d9ee><source${ssrRenderAttr("src", _imports_2$1)} type="video/mp4" data-v-cb36d9ee> Your browser does not support the video tag. </video><button class="play-button" data-v-cb36d9ee><img${ssrRenderAttr("src", _imports_3$1)} alt="Background Button" class="jj" data-v-cb36d9ee><img${ssrRenderAttr("src", _imports_4)} alt="Foreground Icon" class="hh" data-v-cb36d9ee></button></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Video.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-cb36d9ee"]]);
const _imports_0$1 = publicAssetsURL("/box-1.svg");
const _imports_1$3 = publicAssetsURL("/chek.svg");
const _imports_1$2 = publicAssetsURL("/box-1-btt.svg");
const _imports_3 = publicAssetsURL("/box-2.svg");
const _imports_1$1 = publicAssetsURL("/box-2-btt.svg");
const _imports_5 = publicAssetsURL("/box-3.svg");
const _sfc_main$4 = {
  __name: "Sube",
  __ssrInlineRender: true,
  setup(__props) {
    const isYearly = ref(false);
    const isMounted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mixture-container" }, _attrs))} data-v-f62a00b8><div class="section section-1" data-v-f62a00b8><h1 class="main-title" data-v-f62a00b8><span class="uu" data-v-f62a00b8>Pricing</span> &amp; Plans</h1><p class="description" data-v-f62a00b8> With lots of unique blocks, you can easily build a page without coding. Build your next landing page. </p></div><div class="section section-2" data-v-f62a00b8><span class="${ssrRenderClass([{ active: !isYearly.value }, "pricing-option"])}" data-v-f62a00b8>Monthly</span><div class="toggle-button" data-v-f62a00b8><label class="switch" data-v-f62a00b8><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isYearly.value) ? ssrLooseContain(isYearly.value, null) : isYearly.value) ? " checked" : ""} data-v-f62a00b8><span class="slider" data-v-f62a00b8></span></label></div><span class="${ssrRenderClass([{ active: isYearly.value }, "pricing-option"])}" data-v-f62a00b8>Yearly</span><span class="save-tag" data-v-f62a00b8><span class="et" data-v-f62a00b8>Save 25%</span></span></div>`);
      if (isMounted.value) {
        _push(`<div class="section section-3 grid-boxes" data-v-f62a00b8><div class="box box-1" style="${ssrRenderStyle({ "grid-area": "one" })}" data-v-f62a00b8><div class="box-header" data-v-f62a00b8><span class="icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_0$1)} data-v-f62a00b8></span><span class="box-title" data-v-f62a00b8>Individual Plan</span></div><h2 class="price-title" data-v-f62a00b8>${ssrInterpolate(isYearly.value ? "$99.99" : "$9.99")} <span class="month" data-v-f62a00b8>/ ${ssrInterpolate(isYearly.value ? "year" : "month")}</span></h2><ul class="features" data-v-f62a00b8><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Real-time collaboration</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> AI-powered organization</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Customizable templates</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> 5GB cloud storage</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Basic integrations</li></ul><button class="main-button" data-v-f62a00b8>Contact support <img${ssrRenderAttr("src", _imports_1$2)} data-v-f62a00b8></button><p class="footer-note" data-v-f62a00b8>No credit card required</p></div><div class="box box-two" style="${ssrRenderStyle({ "grid-area": "two" })}" data-v-f62a00b8><div class="box-header" data-v-f62a00b8><span class="icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_3)} data-v-f62a00b8></span><span class="box-title" data-v-f62a00b8>Team Plan</span></div><h2 class="price-title" data-v-f62a00b8>${ssrInterpolate(isYearly.value ? "$199.99" : "$19.99")} <span class="month" data-v-f62a00b8>/ ${ssrInterpolate(isYearly.value ? "year" : "month")}</span></h2><ul class="features" data-v-f62a00b8><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Everything in the Individual Plan</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Unlimited cloud storage</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Advanced integrations</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Team management and permissions</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Shared templates and note libraries</li></ul><button class="main-button" data-v-f62a00b8>Start Free Trial <img${ssrRenderAttr("src", _imports_1$1)} data-v-f62a00b8></button><p class="footer-note" data-v-f62a00b8>No credit card required</p></div><div class="box box-3" style="${ssrRenderStyle({ "grid-area": "three" })}" data-v-f62a00b8><div class="box-header" data-v-f62a00b8><span class="icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_5)} data-v-f62a00b8></span><span class="box-title" data-v-f62a00b8>Enterprise Plan</span></div><h2 class="price-title" data-v-f62a00b8>Custom</h2><ul class="features" data-v-f62a00b8><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Everything in the Team Plan</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Dedicated account manager</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Enterprise-grade security</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Customized onboarding</li><li data-v-f62a00b8><span class="feature-icon" data-v-f62a00b8><img${ssrRenderAttr("src", _imports_1$3)} data-v-f62a00b8></span> Advanced analytics</li></ul><button class="main-button" data-v-f62a00b8>Contact support <img${ssrRenderAttr("src", _imports_1$2)} data-v-f62a00b8></button><p class="footer-note" data-v-f62a00b8></p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sube.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f62a00b8"]]);
const _imports_1 = publicAssetsURL("/arr-ho.svg");
const _sfc_main$3 = {
  __name: "Ask",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "big-section" }, _attrs))} data-v-93ee0b4c><div class="header-section" data-v-93ee0b4c><h2 class="title" data-v-93ee0b4c>Frequently Asked <span class="tit" data-v-93ee0b4c>Questions</span></h2><p class="description" data-v-93ee0b4c>We&#39;ve compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team.</p></div><div class="boxes-grid" data-v-93ee0b4c><div class="box box-a" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>What is SmartNotes?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>SmartNotes is a digital platform designed to help you organize, store, and access your notes seamlessly from any device.</p></div></div><div class="box box-b" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>How do I get started with SmartNotes?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.</p></div></div><div class="box box-c" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>What are the key features of SmartNotes?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>It includes AI-powered organization, real-time sync, customizable tags, smart search, and collaborative note editing.</p></div></div><div class="box box-d" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>How much does SmartNotes cost?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>SmartNotes offers a free plan with core features and premium plans for advanced tools and additional storage.</p></div></div><div class="box box-e" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>Who is SmartNotes for?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>It\u2019s ideal for students, professionals, and teams who need a reliable way to manage and retrieve notes efficiently.</p></div></div><div class="box box-f" tabindex="0" data-v-93ee0b4c><div class="box-header" data-v-93ee0b4c><h3 class="box-title" data-v-93ee0b4c>What is SmartNotes?</h3><div class="icon-wrapper" data-v-93ee0b4c><img class="icon-default"${ssrRenderAttr("src", _imports_1$2)} alt="default icon" data-v-93ee0b4c><img class="icon-focus"${ssrRenderAttr("src", _imports_1)} alt="focused icon" data-v-93ee0b4c></div></div><div class="box-description" data-v-93ee0b4c><p data-v-93ee0b4c>A modern note-taking tool that simplifies capturing ideas, tracking tasks, and staying organized in one place.</p></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ask.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-93ee0b4c"]]);
const _imports_0 = publicAssetsURL("/sign-back.png");
const _imports_2 = publicAssetsURL("/sign-pic.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-7090d667><img${ssrRenderAttr("src", _imports_0)} alt="Decorative background" class="bg-image" data-v-7090d667><div class="hero-wrapper" data-v-7090d667><div class="content" data-v-7090d667><div class="text-content" data-v-7090d667><h1 class="title" data-v-7090d667>Unlock the Full Potential of <span class="tit" data-v-7090d667>SmartNotes</span></h1><p class="description" data-v-7090d667> Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking. </p></div><div class="action" data-v-7090d667><button class="cta-button" data-v-7090d667> Sign Up for Free <img${ssrRenderAttr("src", _imports_1$1)} data-v-7090d667></button></div></div><img${ssrRenderAttr("src", _imports_2)} alt="Hero Illustration" class="side-image" data-v-7090d667></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sign.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7090d667"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><footer class="footer" data-v-0eac5515><div class="footer-container" data-v-0eac5515><div class="footer-start" data-v-0eac5515><div class="footer-logo" data-v-0eac5515><img${ssrRenderAttr("src", _imports_0$6)} alt="Logo" data-v-0eac5515></div><div class="email-input-wrapper" data-v-0eac5515><input type="email" placeholder="email@smartnote.io" class="subscribe-input" data-v-0eac5515><img${ssrRenderAttr("src", _imports_1$2)} alt="Submit Icon" class="input-icon" data-v-0eac5515></div></div><div class="footer-links" data-v-0eac5515><div class="footer-column" data-v-0eac5515><h4 data-v-0eac5515>Product</h4><ul data-v-0eac5515><li data-v-0eac5515><a href="#" data-v-0eac5515>About</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Features</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Pricing</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Integrations</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>FAQs</a></li></ul></div><div class="footer-column" data-v-0eac5515><h4 data-v-0eac5515>Company</h4><ul data-v-0eac5515><li data-v-0eac5515><a href="#" data-v-0eac5515>Our Story</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Team</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Careers</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Press</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Contact Us</a></li></ul></div><div class="footer-column" data-v-0eac5515><h4 data-v-0eac5515>Resources</h4><ul data-v-0eac5515><li data-v-0eac5515><a href="#" data-v-0eac5515>Blog</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Webinars</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Case Studies</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Templates</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Help Center</a></li></ul></div><div class="footer-column" data-v-0eac5515><h4 data-v-0eac5515>Legal</h4><ul data-v-0eac5515><li data-v-0eac5515><a href="#" data-v-0eac5515>Terms of Service</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Privacy Policy</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Cookie Policy</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Acceptable Use</a></li><li data-v-0eac5515><a href="#" data-v-0eac5515>Refund Policy</a></li></ul></div></div></div></footer><div class="footer-bottom" data-v-0eac5515><div class="social-icons" data-v-0eac5515><a href="#" data-v-0eac5515><img${ssrRenderAttr("src", _imports_2$3)} alt="Facebook" data-v-0eac5515></a><a href="#" data-v-0eac5515><img${ssrRenderAttr("src", _imports_3$3)} alt="Twitter" data-v-0eac5515></a><a href="#" data-v-0eac5515><img${ssrRenderAttr("src", _imports_4$2)} alt="LinkedIn" data-v-0eac5515></a><a href="#" data-v-0eac5515><img${ssrRenderAttr("src", _imports_5$2)} alt="YouTube" data-v-0eac5515></a></div><p class="footer-copy" data-v-0eac5515>\xA92024 SmartNotesI. All Rights Reserved. <span class="under" data-v-0eac5515>@iamhervewabo</span></p></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0eac5515"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Promo = __nuxt_component_1;
  const _component_SecndHea = __nuxt_component_2;
  const _component_Grid = __nuxt_component_3;
  const _component_Video = __nuxt_component_4;
  const _component_Sube = __nuxt_component_5;
  const _component_Ask = __nuxt_component_6;
  const _component_Sign = __nuxt_component_7;
  const _component_Footer = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Promo, null, null, _parent));
  _push(ssrRenderComponent(_component_SecndHea, null, null, _parent));
  _push(ssrRenderComponent(_component_Grid, null, null, _parent));
  _push(ssrRenderComponent(_component_SecndHea, null, null, _parent));
  _push(ssrRenderComponent(_component_Video, null, null, _parent));
  _push(ssrRenderComponent(_component_SecndHea, null, null, _parent));
  _push(ssrRenderComponent(_component_Sube, null, null, _parent));
  _push(ssrRenderComponent(_component_SecndHea, null, null, _parent));
  _push(ssrRenderComponent(_component_Ask, null, null, _parent));
  _push(ssrRenderComponent(_component_Sign, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Be1SskzU.mjs.map
