(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./resources/js/views/pdf/content.js":
/*!*******************************************!*\
  !*** ./resources/js/views/pdf/content.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar title = 'Plans for the Next Iteration of Vue.js';\nvar content = \"<p>Last week at<a href=\\\"https://vuejs.london/summary\\\" rel=\\\"nofollow\\\">Vue.js London</a>I gave a brief sneak peek of what\\u2019s coming in the next major version of Vue. This post provides an in-depth overview of the plan.</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/b8a1d7be-0b73-41b8-be8c-7c01c93cab66.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"742\\\" data-wscnw=\\\"692\\\" /></p>\\n<h3>Why a new majorversion?</h3>\\n<p>Vue 2.0 was released<a href=\\\"https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8\\\" rel=\\\"nofollow\\\">exactly two years ago</a>(how time flies!). During this period, the core has remained backwards compatible with five minor releases. We\\u2019ve accumulated a number of ideas that would bring improvements, but they were held off because they would result in breaking changes. At the same time, the JavaScript ecosystem and the language itself has been evolving rapidly. There are greatly improved tools that could enhance our workflow, and many new language features that could unlock simpler, more complete, and more efficient solutions to the problems Vue is trying to solve. What\\u2019s more exciting is that we are seeing ES2015 support becoming a baseline for all major evergreen browsers. Vue 3.0 aims to leverage these new language features to make Vue core smaller, faster, and more powerful.</p>\\n<p>Vue 3.0 is currently in prototyping phase, and we have already implemented a runtime close to feature-parity with 2.x.<strong>Many of the items listed below are either already implemented, or confirmed to be feasible. Ones that are not yet implemented or still in exploration phase are marked with a *.</strong></p>\\n<h3>The Details</h3>\\n<h4>High-Level APIChanges</h4>\\n<blockquote>TL;DR: Everything except render function API and scoped-slots syntax will either remain the same or can be made 2.x compatible via a compatibility build.</blockquote>\\n<p>Since it\\u2019s a new major, there is going to be some breaking changes. However, we take backwards compatibility seriously, so we want to start communicating these changes as soon as possible. Here\\u2019s the currently planned public API changes:</p>\\n<ul><li>Template syntax will remain 99% the same. There may be small tweaks in scoped slots syntax, but other than that we have no plans to change anything else for templates.</li><li>3.0 will support class-based components natively, with the aim to provide an API that is pleasant to use in native ES2015 without requiring any transpilation or stage-x features. Most current options will have a reasonable mapping in the class-based API. Stage-x features such as class fields and decorators can still be used optionally to enhance the authoring experience. In addition, the API is designed with TypeScript type inference in mind. The 3.x codebase will itself be written in TypeScript, and providing improved TypeScript support. (That said, usage of TypeScript in an application is still entirely optional.)</li><li>The 2.x object-based component format will still be supported by internally transforming the object to a corresponding class.</li><li>Mixins will still be supported.*</li><li>Top level APIs will likely receive an overhaul to avoid globally mutating the Vue runtime when installing plugins. Instead, plugins will be applied and scoped to a component tree. This will make it easier to test components that rely on specific plugins, and also make it possible to mount multiple Vue applications on the same page with different plugins, but using the same Vue runtime.*</li><li>Functional components can finally be plain functions \\u2014however, async components will now need to be explicitly created via a helper function.</li><li>The part that will receive the most changes is the Virtual DOM format used in render functions. We are currently collecting feedback from major library authors and will be sharing more details as we are more confident of the changes, but as long as you don\\u2019t heavily rely on hand-written (non-JSX) render functions in your app, upgrading should be a reasonably straightforward process.</li></ul>\\n<h4>Source Code Architecture</h4>\\n<blockquote>TL;DR: better decoupled internal modules, TypeScript, and a codebase that is easier to contribute to.</blockquote>\\n<p>We are re-writing 3.0 from the ground up for a cleaner and more maintainable architecture, in particular trying to make it easier to contribute to. We are breaking some internal functionalities into individual packages in order to isolate the scope of complexity. For example, the observer module will become its own package, with its own public API and tests. Note this does not affect framework-level API\\u2014 you will not have to manually import individual bits from multiple packages in order to use Vue. Instead, the final Vue package is assembled using these internal packages.</p>\\n<p>The codebase is also now written in TypeScript. Although this will make proficiency in TypeScript a pre-requisite for contributing to the new codebase, we believe the type information and IDE support will actually make it easier for a new contributor to make meaningful contributions.</p>\\n<p>Decoupling the observer and scheduler into separate packages also allows us to easily experiment with alternative implementations of these parts. For example, we can implement an IE11 compatible observer implementation with the same API, or an alternative scheduler that leverages<code>requestIdleCallback</code>to yield to the browser during long updates.*</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/4d0b5fb2-d7f9-48fd-8f1b-03362b534dd9.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"716\\\" data-wscnw=\\\"460\\\" /></p>\\n<h4>Observation Mechanism</h4>\\n<blockquote>TL;DR: more complete, precise, efficient and debuggable reactivity tracking &amp; API for creating observables.</blockquote>\\n<p>3.0 will ship with a Proxy-based observer implementation that provides reactivity tracking with full language coverage. This eliminates a number of limitations of Vue 2\\u2019s current implementation based on<code>Object.defineProperty</code>:</p>\\n<p>The new observer also features the following:</p>\\n<p>Easily understand why a component is re-rendering</p>\\n<p><img class=\\\" wscnph\\\" src=\\\"https://wpimg.wallstcn.com/a0c9d811-1ef9-4628-8976-f7c1aaa66da0.png\\\" data-wscntype=\\\"image\\\" data-wscnh=\\\"540\\\" data-wscnw=\\\"789\\\" /></p>\\n<h4>Other Runtime Improvements</h4>\\n<blockquote>TL;DR: smaller, faster, tree-shakable features, fragments &amp; portals, custom renderer API.</blockquote>\\n<h4>Compiler Improvements*</h4>\\n<blockquote>TL;DR: tree-shaking friendly output, more AOT optimizations, parser with better error info and source map support.</blockquote>\\n<h4>IE11 Support*</h4>\\n<blockquote>TL;DR: it will be supported, but in a separate build with the same reactivity limitations of Vue 2.x.</blockquote>\\n<p>The new codebase currently targets evergreen browsers only and assumes baseline native ES2015 support. But alas, we know a lot of our users still need to support IE11 for the foreseeable future. Most of the ES2015 features used can be transpiled / polyfilled for IE11, with the exception for Proxies. Our plan is to implement an alternative observer with the same API, but using the good old ES5<code>Object.defineProperty</code>API. A separate build of Vue 3.x will be distributed using this observer implementation. However, this build will be subject to the same change detection caveats of Vue 2.x and thus not fully compatible with the \\u201Cmodern\\u201D build of 3.x. We are aware that this imposes some inconvenience for library authors as they will need to be aware of compatibility for two different builds, but we will make sure to provide clear guidelines on this when we reach that stage.</p>\\n<h3>How Do We GetThere</h3>\\n<p>First of all, although we are announcing it today, we do not have a definitive timeline yet. What we do know at the moment is the steps we will be taking to get there:</p>\\n<h4>1. Internal Feedback for the Runtime Prototype</h4>\\n<p>This is the phase we are in right now. Currently, we already have a working runtime prototype that includes the new observer, Virtual DOM and component implementation. We have invited a group of authors of influential community projects to provide feedback for the internal changes, and would like to make sure they are comfortable with the changes before moving forward. We want to ensure that important libraries in the ecosystem will be ready at the same time when we release 3.0, so that users relying on those projects can upgrade easily.</p>\\n<h4>2. Public Feedback viaRFCs</h4>\\n<p>Once we gain a certain level of confidence in the new design, for each breaking change we will be opening a dedicated RFC issue which includes:</p>\\n<p>We will anticipate public feedback from the wider community to help us consolidate these ideas.</p>\\n<h4>3. Introduce Compatible Features in 2.x &amp;2.x-next</h4>\\n<p>We are not forgetting about 2.x! In fact, we plan to use 2.x to progressively accustom users to the new changes. We will be gradually introducing confirmed API changes into 2.x via opt-in adaptors, and 2.x-next will allow users to try out the new Proxy-based observer.</p>\\n<p>The last minor release in 2.x will become LTS and continue to receive bug and security fixes for 18 months when 3.0 is released.</p>\\n<h4>4. AlphaPhase</h4>\\n<p>Next, we will finish up the compiler and server-side rendering parts of 3.0 and start making alpha releases. These will mostly be for stability testing purposes in small greenfield apps.</p>\\n<h4>5. BetaPhase</h4>\\n<p>During beta phase, our main goal is updating support libraries and tools like Vue Router, Vuex, Vue CLI, Vue DevTools and make sure they work smoothly with the new core. We will also be working with major library authors from the community to help them get ready for 3.0.</p>\\n<h4>6. RCPhase</h4>\\n<p>Once we consider the API and codebase stable, we will enter RC phase with API freeze. During this phase we will also work on a \\u201Ccompat build\\u201D: a build of 3.0 that includes compatibility layers for 2.x API. This build will also ship with a flag you can turn on to emit deprecation warnings for 2.x API usage in your app. The compat build can be used as a guide to upgrade your app to 3.0.</p>\\n<h4>7. IE11build</h4>\\n<p>The last task before the final release will be the IE11 compatibility build as mentioned above.</p>\\n<h4>8. FinalRelease</h4>\\n<p>In all honesty, we don\\u2019t know when this will happen yet, but likely in 2019. Again, we care more about shipping something that is solid and stable rather than hitting specific dates. There is a lot of work to be done, but we are excited for what\\u2019s coming next!</p>\";\nvar data = {\n  title: title,\n  content: content\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdmlld3MvcGRmL2NvbnRlbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvcGRmL2NvbnRlbnQuanM/ZjA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGl0bGUgPSAnUGxhbnMgZm9yIHRoZSBOZXh0IEl0ZXJhdGlvbiBvZiBWdWUuanMnO1xudmFyIGNvbnRlbnQgPSBcIjxwPkxhc3Qgd2VlayBhdDxhIGhyZWY9XFxcImh0dHBzOi8vdnVlanMubG9uZG9uL3N1bW1hcnlcXFwiIHJlbD1cXFwibm9mb2xsb3dcXFwiPlZ1ZS5qcyBMb25kb248L2E+SSBnYXZlIGEgYnJpZWYgc25lYWsgcGVlayBvZiB3aGF0XFx1MjAxOXMgY29taW5nIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgVnVlLiBUaGlzIHBvc3QgcHJvdmlkZXMgYW4gaW4tZGVwdGggb3ZlcnZpZXcgb2YgdGhlIHBsYW4uPC9wPlxcbjxwPjxpbWcgY2xhc3M9XFxcIiB3c2NucGhcXFwiIHNyYz1cXFwiaHR0cHM6Ly93cGltZy53YWxsc3Rjbi5jb20vYjhhMWQ3YmUtMGI3My00MWI4LWJlOGMtN2MwMWM5M2NhYjY2LnBuZ1xcXCIgZGF0YS13c2NudHlwZT1cXFwiaW1hZ2VcXFwiIGRhdGEtd3Njbmg9XFxcIjc0MlxcXCIgZGF0YS13c2Nudz1cXFwiNjkyXFxcIiAvPjwvcD5cXG48aDM+V2h5IGEgbmV3IG1ham9ydmVyc2lvbj88L2gzPlxcbjxwPlZ1ZSAyLjAgd2FzIHJlbGVhc2VkPGEgaHJlZj1cXFwiaHR0cHM6Ly9tZWRpdW0uY29tL3RoZS12dWUtcG9pbnQvdnVlLTItMC1pcy1oZXJlLWVmMWYyNmFjZjRiOFxcXCIgcmVsPVxcXCJub2ZvbGxvd1xcXCI+ZXhhY3RseSB0d28geWVhcnMgYWdvPC9hPihob3cgdGltZSBmbGllcyEpLiBEdXJpbmcgdGhpcyBwZXJpb2QsIHRoZSBjb3JlIGhhcyByZW1haW5lZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoIGZpdmUgbWlub3IgcmVsZWFzZXMuIFdlXFx1MjAxOXZlIGFjY3VtdWxhdGVkIGEgbnVtYmVyIG9mIGlkZWFzIHRoYXQgd291bGQgYnJpbmcgaW1wcm92ZW1lbnRzLCBidXQgdGhleSB3ZXJlIGhlbGQgb2ZmIGJlY2F1c2UgdGhleSB3b3VsZCByZXN1bHQgaW4gYnJlYWtpbmcgY2hhbmdlcy4gQXQgdGhlIHNhbWUgdGltZSwgdGhlIEphdmFTY3JpcHQgZWNvc3lzdGVtIGFuZCB0aGUgbGFuZ3VhZ2UgaXRzZWxmIGhhcyBiZWVuIGV2b2x2aW5nIHJhcGlkbHkuIFRoZXJlIGFyZSBncmVhdGx5IGltcHJvdmVkIHRvb2xzIHRoYXQgY291bGQgZW5oYW5jZSBvdXIgd29ya2Zsb3csIGFuZCBtYW55IG5ldyBsYW5ndWFnZSBmZWF0dXJlcyB0aGF0IGNvdWxkIHVubG9jayBzaW1wbGVyLCBtb3JlIGNvbXBsZXRlLCBhbmQgbW9yZSBlZmZpY2llbnQgc29sdXRpb25zIHRvIHRoZSBwcm9ibGVtcyBWdWUgaXMgdHJ5aW5nIHRvIHNvbHZlLiBXaGF0XFx1MjAxOXMgbW9yZSBleGNpdGluZyBpcyB0aGF0IHdlIGFyZSBzZWVpbmcgRVMyMDE1IHN1cHBvcnQgYmVjb21pbmcgYSBiYXNlbGluZSBmb3IgYWxsIG1ham9yIGV2ZXJncmVlbiBicm93c2Vycy4gVnVlIDMuMCBhaW1zIHRvIGxldmVyYWdlIHRoZXNlIG5ldyBsYW5ndWFnZSBmZWF0dXJlcyB0byBtYWtlIFZ1ZSBjb3JlIHNtYWxsZXIsIGZhc3RlciwgYW5kIG1vcmUgcG93ZXJmdWwuPC9wPlxcbjxwPlZ1ZSAzLjAgaXMgY3VycmVudGx5IGluIHByb3RvdHlwaW5nIHBoYXNlLCBhbmQgd2UgaGF2ZSBhbHJlYWR5IGltcGxlbWVudGVkIGEgcnVudGltZSBjbG9zZSB0byBmZWF0dXJlLXBhcml0eSB3aXRoIDIueC48c3Ryb25nPk1hbnkgb2YgdGhlIGl0ZW1zIGxpc3RlZCBiZWxvdyBhcmUgZWl0aGVyIGFscmVhZHkgaW1wbGVtZW50ZWQsIG9yIGNvbmZpcm1lZCB0byBiZSBmZWFzaWJsZS4gT25lcyB0aGF0IGFyZSBub3QgeWV0IGltcGxlbWVudGVkIG9yIHN0aWxsIGluIGV4cGxvcmF0aW9uIHBoYXNlIGFyZSBtYXJrZWQgd2l0aCBhICouPC9zdHJvbmc+PC9wPlxcbjxoMz5UaGUgRGV0YWlsczwvaDM+XFxuPGg0PkhpZ2gtTGV2ZWwgQVBJQ2hhbmdlczwvaDQ+XFxuPGJsb2NrcXVvdGU+VEw7RFI6IEV2ZXJ5dGhpbmcgZXhjZXB0IHJlbmRlciBmdW5jdGlvbiBBUEkgYW5kIHNjb3BlZC1zbG90cyBzeW50YXggd2lsbCBlaXRoZXIgcmVtYWluIHRoZSBzYW1lIG9yIGNhbiBiZSBtYWRlIDIueCBjb21wYXRpYmxlIHZpYSBhIGNvbXBhdGliaWxpdHkgYnVpbGQuPC9ibG9ja3F1b3RlPlxcbjxwPlNpbmNlIGl0XFx1MjAxOXMgYSBuZXcgbWFqb3IsIHRoZXJlIGlzIGdvaW5nIHRvIGJlIHNvbWUgYnJlYWtpbmcgY2hhbmdlcy4gSG93ZXZlciwgd2UgdGFrZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBzZXJpb3VzbHksIHNvIHdlIHdhbnQgdG8gc3RhcnQgY29tbXVuaWNhdGluZyB0aGVzZSBjaGFuZ2VzIGFzIHNvb24gYXMgcG9zc2libGUuIEhlcmVcXHUyMDE5cyB0aGUgY3VycmVudGx5IHBsYW5uZWQgcHVibGljIEFQSSBjaGFuZ2VzOjwvcD5cXG48dWw+PGxpPlRlbXBsYXRlIHN5bnRheCB3aWxsIHJlbWFpbiA5OSUgdGhlIHNhbWUuIFRoZXJlIG1heSBiZSBzbWFsbCB0d2Vha3MgaW4gc2NvcGVkIHNsb3RzIHN5bnRheCwgYnV0IG90aGVyIHRoYW4gdGhhdCB3ZSBoYXZlIG5vIHBsYW5zIHRvIGNoYW5nZSBhbnl0aGluZyBlbHNlIGZvciB0ZW1wbGF0ZXMuPC9saT48bGk+My4wIHdpbGwgc3VwcG9ydCBjbGFzcy1iYXNlZCBjb21wb25lbnRzIG5hdGl2ZWx5LCB3aXRoIHRoZSBhaW0gdG8gcHJvdmlkZSBhbiBBUEkgdGhhdCBpcyBwbGVhc2FudCB0byB1c2UgaW4gbmF0aXZlIEVTMjAxNSB3aXRob3V0IHJlcXVpcmluZyBhbnkgdHJhbnNwaWxhdGlvbiBvciBzdGFnZS14IGZlYXR1cmVzLiBNb3N0IGN1cnJlbnQgb3B0aW9ucyB3aWxsIGhhdmUgYSByZWFzb25hYmxlIG1hcHBpbmcgaW4gdGhlIGNsYXNzLWJhc2VkIEFQSS4gU3RhZ2UteCBmZWF0dXJlcyBzdWNoIGFzIGNsYXNzIGZpZWxkcyBhbmQgZGVjb3JhdG9ycyBjYW4gc3RpbGwgYmUgdXNlZCBvcHRpb25hbGx5IHRvIGVuaGFuY2UgdGhlIGF1dGhvcmluZyBleHBlcmllbmNlLiBJbiBhZGRpdGlvbiwgdGhlIEFQSSBpcyBkZXNpZ25lZCB3aXRoIFR5cGVTY3JpcHQgdHlwZSBpbmZlcmVuY2UgaW4gbWluZC4gVGhlIDMueCBjb2RlYmFzZSB3aWxsIGl0c2VsZiBiZSB3cml0dGVuIGluIFR5cGVTY3JpcHQsIGFuZCBwcm92aWRpbmcgaW1wcm92ZWQgVHlwZVNjcmlwdCBzdXBwb3J0LiAoVGhhdCBzYWlkLCB1c2FnZSBvZiBUeXBlU2NyaXB0IGluIGFuIGFwcGxpY2F0aW9uIGlzIHN0aWxsIGVudGlyZWx5IG9wdGlvbmFsLik8L2xpPjxsaT5UaGUgMi54IG9iamVjdC1iYXNlZCBjb21wb25lbnQgZm9ybWF0IHdpbGwgc3RpbGwgYmUgc3VwcG9ydGVkIGJ5IGludGVybmFsbHkgdHJhbnNmb3JtaW5nIHRoZSBvYmplY3QgdG8gYSBjb3JyZXNwb25kaW5nIGNsYXNzLjwvbGk+PGxpPk1peGlucyB3aWxsIHN0aWxsIGJlIHN1cHBvcnRlZC4qPC9saT48bGk+VG9wIGxldmVsIEFQSXMgd2lsbCBsaWtlbHkgcmVjZWl2ZSBhbiBvdmVyaGF1bCB0byBhdm9pZCBnbG9iYWxseSBtdXRhdGluZyB0aGUgVnVlIHJ1bnRpbWUgd2hlbiBpbnN0YWxsaW5nIHBsdWdpbnMuIEluc3RlYWQsIHBsdWdpbnMgd2lsbCBiZSBhcHBsaWVkIGFuZCBzY29wZWQgdG8gYSBjb21wb25lbnQgdHJlZS4gVGhpcyB3aWxsIG1ha2UgaXQgZWFzaWVyIHRvIHRlc3QgY29tcG9uZW50cyB0aGF0IHJlbHkgb24gc3BlY2lmaWMgcGx1Z2lucywgYW5kIGFsc28gbWFrZSBpdCBwb3NzaWJsZSB0byBtb3VudCBtdWx0aXBsZSBWdWUgYXBwbGljYXRpb25zIG9uIHRoZSBzYW1lIHBhZ2Ugd2l0aCBkaWZmZXJlbnQgcGx1Z2lucywgYnV0IHVzaW5nIHRoZSBzYW1lIFZ1ZSBydW50aW1lLio8L2xpPjxsaT5GdW5jdGlvbmFsIGNvbXBvbmVudHMgY2FuIGZpbmFsbHkgYmUgcGxhaW4gZnVuY3Rpb25zIFxcdTIwMTRob3dldmVyLCBhc3luYyBjb21wb25lbnRzIHdpbGwgbm93IG5lZWQgdG8gYmUgZXhwbGljaXRseSBjcmVhdGVkIHZpYSBhIGhlbHBlciBmdW5jdGlvbi48L2xpPjxsaT5UaGUgcGFydCB0aGF0IHdpbGwgcmVjZWl2ZSB0aGUgbW9zdCBjaGFuZ2VzIGlzIHRoZSBWaXJ0dWFsIERPTSBmb3JtYXQgdXNlZCBpbiByZW5kZXIgZnVuY3Rpb25zLiBXZSBhcmUgY3VycmVudGx5IGNvbGxlY3RpbmcgZmVlZGJhY2sgZnJvbSBtYWpvciBsaWJyYXJ5IGF1dGhvcnMgYW5kIHdpbGwgYmUgc2hhcmluZyBtb3JlIGRldGFpbHMgYXMgd2UgYXJlIG1vcmUgY29uZmlkZW50IG9mIHRoZSBjaGFuZ2VzLCBidXQgYXMgbG9uZyBhcyB5b3UgZG9uXFx1MjAxOXQgaGVhdmlseSByZWx5IG9uIGhhbmQtd3JpdHRlbiAobm9uLUpTWCkgcmVuZGVyIGZ1bmN0aW9ucyBpbiB5b3VyIGFwcCwgdXBncmFkaW5nIHNob3VsZCBiZSBhIHJlYXNvbmFibHkgc3RyYWlnaHRmb3J3YXJkIHByb2Nlc3MuPC9saT48L3VsPlxcbjxoND5Tb3VyY2UgQ29kZSBBcmNoaXRlY3R1cmU8L2g0PlxcbjxibG9ja3F1b3RlPlRMO0RSOiBiZXR0ZXIgZGVjb3VwbGVkIGludGVybmFsIG1vZHVsZXMsIFR5cGVTY3JpcHQsIGFuZCBhIGNvZGViYXNlIHRoYXQgaXMgZWFzaWVyIHRvIGNvbnRyaWJ1dGUgdG8uPC9ibG9ja3F1b3RlPlxcbjxwPldlIGFyZSByZS13cml0aW5nIDMuMCBmcm9tIHRoZSBncm91bmQgdXAgZm9yIGEgY2xlYW5lciBhbmQgbW9yZSBtYWludGFpbmFibGUgYXJjaGl0ZWN0dXJlLCBpbiBwYXJ0aWN1bGFyIHRyeWluZyB0byBtYWtlIGl0IGVhc2llciB0byBjb250cmlidXRlIHRvLiBXZSBhcmUgYnJlYWtpbmcgc29tZSBpbnRlcm5hbCBmdW5jdGlvbmFsaXRpZXMgaW50byBpbmRpdmlkdWFsIHBhY2thZ2VzIGluIG9yZGVyIHRvIGlzb2xhdGUgdGhlIHNjb3BlIG9mIGNvbXBsZXhpdHkuIEZvciBleGFtcGxlLCB0aGUgb2JzZXJ2ZXIgbW9kdWxlIHdpbGwgYmVjb21lIGl0cyBvd24gcGFja2FnZSwgd2l0aCBpdHMgb3duIHB1YmxpYyBBUEkgYW5kIHRlc3RzLiBOb3RlIHRoaXMgZG9lcyBub3QgYWZmZWN0IGZyYW1ld29yay1sZXZlbCBBUElcXHUyMDE0IHlvdSB3aWxsIG5vdCBoYXZlIHRvIG1hbnVhbGx5IGltcG9ydCBpbmRpdmlkdWFsIGJpdHMgZnJvbSBtdWx0aXBsZSBwYWNrYWdlcyBpbiBvcmRlciB0byB1c2UgVnVlLiBJbnN0ZWFkLCB0aGUgZmluYWwgVnVlIHBhY2thZ2UgaXMgYXNzZW1ibGVkIHVzaW5nIHRoZXNlIGludGVybmFsIHBhY2thZ2VzLjwvcD5cXG48cD5UaGUgY29kZWJhc2UgaXMgYWxzbyBub3cgd3JpdHRlbiBpbiBUeXBlU2NyaXB0LiBBbHRob3VnaCB0aGlzIHdpbGwgbWFrZSBwcm9maWNpZW5jeSBpbiBUeXBlU2NyaXB0IGEgcHJlLXJlcXVpc2l0ZSBmb3IgY29udHJpYnV0aW5nIHRvIHRoZSBuZXcgY29kZWJhc2UsIHdlIGJlbGlldmUgdGhlIHR5cGUgaW5mb3JtYXRpb24gYW5kIElERSBzdXBwb3J0IHdpbGwgYWN0dWFsbHkgbWFrZSBpdCBlYXNpZXIgZm9yIGEgbmV3IGNvbnRyaWJ1dG9yIHRvIG1ha2UgbWVhbmluZ2Z1bCBjb250cmlidXRpb25zLjwvcD5cXG48cD5EZWNvdXBsaW5nIHRoZSBvYnNlcnZlciBhbmQgc2NoZWR1bGVyIGludG8gc2VwYXJhdGUgcGFja2FnZXMgYWxzbyBhbGxvd3MgdXMgdG8gZWFzaWx5IGV4cGVyaW1lbnQgd2l0aCBhbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2UgcGFydHMuIEZvciBleGFtcGxlLCB3ZSBjYW4gaW1wbGVtZW50IGFuIElFMTEgY29tcGF0aWJsZSBvYnNlcnZlciBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZSBzYW1lIEFQSSwgb3IgYW4gYWx0ZXJuYXRpdmUgc2NoZWR1bGVyIHRoYXQgbGV2ZXJhZ2VzPGNvZGU+cmVxdWVzdElkbGVDYWxsYmFjazwvY29kZT50byB5aWVsZCB0byB0aGUgYnJvd3NlciBkdXJpbmcgbG9uZyB1cGRhdGVzLio8L3A+XFxuPHA+PGltZyBjbGFzcz1cXFwiIHdzY25waFxcXCIgc3JjPVxcXCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS80ZDBiNWZiMi1kN2Y5LTQ4ZmQtOGYxYi0wMzM2MmI1MzRkZDkucG5nXFxcIiBkYXRhLXdzY250eXBlPVxcXCJpbWFnZVxcXCIgZGF0YS13c2NuaD1cXFwiNzE2XFxcIiBkYXRhLXdzY253PVxcXCI0NjBcXFwiIC8+PC9wPlxcbjxoND5PYnNlcnZhdGlvbiBNZWNoYW5pc208L2g0PlxcbjxibG9ja3F1b3RlPlRMO0RSOiBtb3JlIGNvbXBsZXRlLCBwcmVjaXNlLCBlZmZpY2llbnQgYW5kIGRlYnVnZ2FibGUgcmVhY3Rpdml0eSB0cmFja2luZyAmYW1wOyBBUEkgZm9yIGNyZWF0aW5nIG9ic2VydmFibGVzLjwvYmxvY2txdW90ZT5cXG48cD4zLjAgd2lsbCBzaGlwIHdpdGggYSBQcm94eS1iYXNlZCBvYnNlcnZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IHByb3ZpZGVzIHJlYWN0aXZpdHkgdHJhY2tpbmcgd2l0aCBmdWxsIGxhbmd1YWdlIGNvdmVyYWdlLiBUaGlzIGVsaW1pbmF0ZXMgYSBudW1iZXIgb2YgbGltaXRhdGlvbnMgb2YgVnVlIDJcXHUyMDE5cyBjdXJyZW50IGltcGxlbWVudGF0aW9uIGJhc2VkIG9uPGNvZGU+T2JqZWN0LmRlZmluZVByb3BlcnR5PC9jb2RlPjo8L3A+XFxuPHA+VGhlIG5ldyBvYnNlcnZlciBhbHNvIGZlYXR1cmVzIHRoZSBmb2xsb3dpbmc6PC9wPlxcbjxwPkVhc2lseSB1bmRlcnN0YW5kIHdoeSBhIGNvbXBvbmVudCBpcyByZS1yZW5kZXJpbmc8L3A+XFxuPHA+PGltZyBjbGFzcz1cXFwiIHdzY25waFxcXCIgc3JjPVxcXCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS9hMGM5ZDgxMS0xZWY5LTQ2MjgtODk3Ni1mN2MxYWFhNjZkYTAucG5nXFxcIiBkYXRhLXdzY250eXBlPVxcXCJpbWFnZVxcXCIgZGF0YS13c2NuaD1cXFwiNTQwXFxcIiBkYXRhLXdzY253PVxcXCI3ODlcXFwiIC8+PC9wPlxcbjxoND5PdGhlciBSdW50aW1lIEltcHJvdmVtZW50czwvaDQ+XFxuPGJsb2NrcXVvdGU+VEw7RFI6IHNtYWxsZXIsIGZhc3RlciwgdHJlZS1zaGFrYWJsZSBmZWF0dXJlcywgZnJhZ21lbnRzICZhbXA7IHBvcnRhbHMsIGN1c3RvbSByZW5kZXJlciBBUEkuPC9ibG9ja3F1b3RlPlxcbjxoND5Db21waWxlciBJbXByb3ZlbWVudHMqPC9oND5cXG48YmxvY2txdW90ZT5UTDtEUjogdHJlZS1zaGFraW5nIGZyaWVuZGx5IG91dHB1dCwgbW9yZSBBT1Qgb3B0aW1pemF0aW9ucywgcGFyc2VyIHdpdGggYmV0dGVyIGVycm9yIGluZm8gYW5kIHNvdXJjZSBtYXAgc3VwcG9ydC48L2Jsb2NrcXVvdGU+XFxuPGg0PklFMTEgU3VwcG9ydCo8L2g0PlxcbjxibG9ja3F1b3RlPlRMO0RSOiBpdCB3aWxsIGJlIHN1cHBvcnRlZCwgYnV0IGluIGEgc2VwYXJhdGUgYnVpbGQgd2l0aCB0aGUgc2FtZSByZWFjdGl2aXR5IGxpbWl0YXRpb25zIG9mIFZ1ZSAyLnguPC9ibG9ja3F1b3RlPlxcbjxwPlRoZSBuZXcgY29kZWJhc2UgY3VycmVudGx5IHRhcmdldHMgZXZlcmdyZWVuIGJyb3dzZXJzIG9ubHkgYW5kIGFzc3VtZXMgYmFzZWxpbmUgbmF0aXZlIEVTMjAxNSBzdXBwb3J0LiBCdXQgYWxhcywgd2Uga25vdyBhIGxvdCBvZiBvdXIgdXNlcnMgc3RpbGwgbmVlZCB0byBzdXBwb3J0IElFMTEgZm9yIHRoZSBmb3Jlc2VlYWJsZSBmdXR1cmUuIE1vc3Qgb2YgdGhlIEVTMjAxNSBmZWF0dXJlcyB1c2VkIGNhbiBiZSB0cmFuc3BpbGVkIC8gcG9seWZpbGxlZCBmb3IgSUUxMSwgd2l0aCB0aGUgZXhjZXB0aW9uIGZvciBQcm94aWVzLiBPdXIgcGxhbiBpcyB0byBpbXBsZW1lbnQgYW4gYWx0ZXJuYXRpdmUgb2JzZXJ2ZXIgd2l0aCB0aGUgc2FtZSBBUEksIGJ1dCB1c2luZyB0aGUgZ29vZCBvbGQgRVM1PGNvZGU+T2JqZWN0LmRlZmluZVByb3BlcnR5PC9jb2RlPkFQSS4gQSBzZXBhcmF0ZSBidWlsZCBvZiBWdWUgMy54IHdpbGwgYmUgZGlzdHJpYnV0ZWQgdXNpbmcgdGhpcyBvYnNlcnZlciBpbXBsZW1lbnRhdGlvbi4gSG93ZXZlciwgdGhpcyBidWlsZCB3aWxsIGJlIHN1YmplY3QgdG8gdGhlIHNhbWUgY2hhbmdlIGRldGVjdGlvbiBjYXZlYXRzIG9mIFZ1ZSAyLnggYW5kIHRodXMgbm90IGZ1bGx5IGNvbXBhdGlibGUgd2l0aCB0aGUgXFx1MjAxQ21vZGVyblxcdTIwMUQgYnVpbGQgb2YgMy54LiBXZSBhcmUgYXdhcmUgdGhhdCB0aGlzIGltcG9zZXMgc29tZSBpbmNvbnZlbmllbmNlIGZvciBsaWJyYXJ5IGF1dGhvcnMgYXMgdGhleSB3aWxsIG5lZWQgdG8gYmUgYXdhcmUgb2YgY29tcGF0aWJpbGl0eSBmb3IgdHdvIGRpZmZlcmVudCBidWlsZHMsIGJ1dCB3ZSB3aWxsIG1ha2Ugc3VyZSB0byBwcm92aWRlIGNsZWFyIGd1aWRlbGluZXMgb24gdGhpcyB3aGVuIHdlIHJlYWNoIHRoYXQgc3RhZ2UuPC9wPlxcbjxoMz5Ib3cgRG8gV2UgR2V0VGhlcmU8L2gzPlxcbjxwPkZpcnN0IG9mIGFsbCwgYWx0aG91Z2ggd2UgYXJlIGFubm91bmNpbmcgaXQgdG9kYXksIHdlIGRvIG5vdCBoYXZlIGEgZGVmaW5pdGl2ZSB0aW1lbGluZSB5ZXQuIFdoYXQgd2UgZG8ga25vdyBhdCB0aGUgbW9tZW50IGlzIHRoZSBzdGVwcyB3ZSB3aWxsIGJlIHRha2luZyB0byBnZXQgdGhlcmU6PC9wPlxcbjxoND4xLiBJbnRlcm5hbCBGZWVkYmFjayBmb3IgdGhlIFJ1bnRpbWUgUHJvdG90eXBlPC9oND5cXG48cD5UaGlzIGlzIHRoZSBwaGFzZSB3ZSBhcmUgaW4gcmlnaHQgbm93LiBDdXJyZW50bHksIHdlIGFscmVhZHkgaGF2ZSBhIHdvcmtpbmcgcnVudGltZSBwcm90b3R5cGUgdGhhdCBpbmNsdWRlcyB0aGUgbmV3IG9ic2VydmVyLCBWaXJ0dWFsIERPTSBhbmQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uLiBXZSBoYXZlIGludml0ZWQgYSBncm91cCBvZiBhdXRob3JzIG9mIGluZmx1ZW50aWFsIGNvbW11bml0eSBwcm9qZWN0cyB0byBwcm92aWRlIGZlZWRiYWNrIGZvciB0aGUgaW50ZXJuYWwgY2hhbmdlcywgYW5kIHdvdWxkIGxpa2UgdG8gbWFrZSBzdXJlIHRoZXkgYXJlIGNvbWZvcnRhYmxlIHdpdGggdGhlIGNoYW5nZXMgYmVmb3JlIG1vdmluZyBmb3J3YXJkLiBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IGltcG9ydGFudCBsaWJyYXJpZXMgaW4gdGhlIGVjb3N5c3RlbSB3aWxsIGJlIHJlYWR5IGF0IHRoZSBzYW1lIHRpbWUgd2hlbiB3ZSByZWxlYXNlIDMuMCwgc28gdGhhdCB1c2VycyByZWx5aW5nIG9uIHRob3NlIHByb2plY3RzIGNhbiB1cGdyYWRlIGVhc2lseS48L3A+XFxuPGg0PjIuIFB1YmxpYyBGZWVkYmFjayB2aWFSRkNzPC9oND5cXG48cD5PbmNlIHdlIGdhaW4gYSBjZXJ0YWluIGxldmVsIG9mIGNvbmZpZGVuY2UgaW4gdGhlIG5ldyBkZXNpZ24sIGZvciBlYWNoIGJyZWFraW5nIGNoYW5nZSB3ZSB3aWxsIGJlIG9wZW5pbmcgYSBkZWRpY2F0ZWQgUkZDIGlzc3VlIHdoaWNoIGluY2x1ZGVzOjwvcD5cXG48cD5XZSB3aWxsIGFudGljaXBhdGUgcHVibGljIGZlZWRiYWNrIGZyb20gdGhlIHdpZGVyIGNvbW11bml0eSB0byBoZWxwIHVzIGNvbnNvbGlkYXRlIHRoZXNlIGlkZWFzLjwvcD5cXG48aDQ+My4gSW50cm9kdWNlIENvbXBhdGlibGUgRmVhdHVyZXMgaW4gMi54ICZhbXA7Mi54LW5leHQ8L2g0PlxcbjxwPldlIGFyZSBub3QgZm9yZ2V0dGluZyBhYm91dCAyLnghIEluIGZhY3QsIHdlIHBsYW4gdG8gdXNlIDIueCB0byBwcm9ncmVzc2l2ZWx5IGFjY3VzdG9tIHVzZXJzIHRvIHRoZSBuZXcgY2hhbmdlcy4gV2Ugd2lsbCBiZSBncmFkdWFsbHkgaW50cm9kdWNpbmcgY29uZmlybWVkIEFQSSBjaGFuZ2VzIGludG8gMi54IHZpYSBvcHQtaW4gYWRhcHRvcnMsIGFuZCAyLngtbmV4dCB3aWxsIGFsbG93IHVzZXJzIHRvIHRyeSBvdXQgdGhlIG5ldyBQcm94eS1iYXNlZCBvYnNlcnZlci48L3A+XFxuPHA+VGhlIGxhc3QgbWlub3IgcmVsZWFzZSBpbiAyLnggd2lsbCBiZWNvbWUgTFRTIGFuZCBjb250aW51ZSB0byByZWNlaXZlIGJ1ZyBhbmQgc2VjdXJpdHkgZml4ZXMgZm9yIDE4IG1vbnRocyB3aGVuIDMuMCBpcyByZWxlYXNlZC48L3A+XFxuPGg0PjQuIEFscGhhUGhhc2U8L2g0PlxcbjxwPk5leHQsIHdlIHdpbGwgZmluaXNoIHVwIHRoZSBjb21waWxlciBhbmQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHBhcnRzIG9mIDMuMCBhbmQgc3RhcnQgbWFraW5nIGFscGhhIHJlbGVhc2VzLiBUaGVzZSB3aWxsIG1vc3RseSBiZSBmb3Igc3RhYmlsaXR5IHRlc3RpbmcgcHVycG9zZXMgaW4gc21hbGwgZ3JlZW5maWVsZCBhcHBzLjwvcD5cXG48aDQ+NS4gQmV0YVBoYXNlPC9oND5cXG48cD5EdXJpbmcgYmV0YSBwaGFzZSwgb3VyIG1haW4gZ29hbCBpcyB1cGRhdGluZyBzdXBwb3J0IGxpYnJhcmllcyBhbmQgdG9vbHMgbGlrZSBWdWUgUm91dGVyLCBWdWV4LCBWdWUgQ0xJLCBWdWUgRGV2VG9vbHMgYW5kIG1ha2Ugc3VyZSB0aGV5IHdvcmsgc21vb3RobHkgd2l0aCB0aGUgbmV3IGNvcmUuIFdlIHdpbGwgYWxzbyBiZSB3b3JraW5nIHdpdGggbWFqb3IgbGlicmFyeSBhdXRob3JzIGZyb20gdGhlIGNvbW11bml0eSB0byBoZWxwIHRoZW0gZ2V0IHJlYWR5IGZvciAzLjAuPC9wPlxcbjxoND42LiBSQ1BoYXNlPC9oND5cXG48cD5PbmNlIHdlIGNvbnNpZGVyIHRoZSBBUEkgYW5kIGNvZGViYXNlIHN0YWJsZSwgd2Ugd2lsbCBlbnRlciBSQyBwaGFzZSB3aXRoIEFQSSBmcmVlemUuIER1cmluZyB0aGlzIHBoYXNlIHdlIHdpbGwgYWxzbyB3b3JrIG9uIGEgXFx1MjAxQ2NvbXBhdCBidWlsZFxcdTIwMUQ6IGEgYnVpbGQgb2YgMy4wIHRoYXQgaW5jbHVkZXMgY29tcGF0aWJpbGl0eSBsYXllcnMgZm9yIDIueCBBUEkuIFRoaXMgYnVpbGQgd2lsbCBhbHNvIHNoaXAgd2l0aCBhIGZsYWcgeW91IGNhbiB0dXJuIG9uIHRvIGVtaXQgZGVwcmVjYXRpb24gd2FybmluZ3MgZm9yIDIueCBBUEkgdXNhZ2UgaW4geW91ciBhcHAuIFRoZSBjb21wYXQgYnVpbGQgY2FuIGJlIHVzZWQgYXMgYSBndWlkZSB0byB1cGdyYWRlIHlvdXIgYXBwIHRvIDMuMC48L3A+XFxuPGg0PjcuIElFMTFidWlsZDwvaDQ+XFxuPHA+VGhlIGxhc3QgdGFzayBiZWZvcmUgdGhlIGZpbmFsIHJlbGVhc2Ugd2lsbCBiZSB0aGUgSUUxMSBjb21wYXRpYmlsaXR5IGJ1aWxkIGFzIG1lbnRpb25lZCBhYm92ZS48L3A+XFxuPGg0PjguIEZpbmFsUmVsZWFzZTwvaDQ+XFxuPHA+SW4gYWxsIGhvbmVzdHksIHdlIGRvblxcdTIwMTl0IGtub3cgd2hlbiB0aGlzIHdpbGwgaGFwcGVuIHlldCwgYnV0IGxpa2VseSBpbiAyMDE5LiBBZ2Fpbiwgd2UgY2FyZSBtb3JlIGFib3V0IHNoaXBwaW5nIHNvbWV0aGluZyB0aGF0IGlzIHNvbGlkIGFuZCBzdGFibGUgcmF0aGVyIHRoYW4gaGl0dGluZyBzcGVjaWZpYyBkYXRlcy4gVGhlcmUgaXMgYSBsb3Qgb2Ygd29yayB0byBiZSBkb25lLCBidXQgd2UgYXJlIGV4Y2l0ZWQgZm9yIHdoYXRcXHUyMDE5cyBjb21pbmcgbmV4dCE8L3A+XCI7XG52YXIgZGF0YSA9IHtcbiAgdGl0bGU6IHRpdGxlLFxuICBjb250ZW50OiBjb250ZW50XG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/views/pdf/content.js\n");

/***/ })

}]);