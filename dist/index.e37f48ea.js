// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kYpTN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
// Importing everything from the model, and making it accesible through the
// model namespace.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
// Importing the default export of the recipe view.
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
// Importing the default export of the search view.
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
// Importing the default export of the results view.
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
// Importing the default export of the pagination view.
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
// Importing the default export of the bookmarks view.
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
// Importing the modules required for polyfilling.
// Polyfilling everything else.
// import 'core-js/stable';
// // Polyfilling async/await.
// import 'regenerator-runtime/runtime.js';
///////////////////////////////////////
// Test request for getting a recipe.
const controlRecipes = async function() {
    try {
        // Getting the id of the recipe from the hash on the URL.
        const id = window.location.hash.slice(1);
        // If there is no id on the URL (e.g. we have not selected any recipe), then
        // no recipe should me shown and this function must be exited.
        if (!id) return;
        // Showing the spinner.
        (0, _recipeViewJsDefault.default).renderSpinner();
        // Updating the results view to mark the selected one.
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        // Updating the bookmarks view to mark the selected one.
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // Loading the recipe.
        await _modelJs.loadRecipe(id);
        // Rendering the recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        // Showing the error message on screen.
        (0, _recipeViewJsDefault.default).renderError();
        console.error(err);
    }
};
const controlSearchResults = async function() {
    try {
        // Getting the query present on the search bar.
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // Rendering a spinner on the results section.
        (0, _resultsViewJsDefault.default).renderSpinner();
        // Loading the results.
        await _modelJs.loadSearchResults(query);
        // Rendering the results.
        // resultsView.render(model.state.search.results);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        // Render the initial pagination buttons.
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    // Going to the selected page.
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    // Rendering the buttons.
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // Updating the recipie servings in state.
    _modelJs.updateServings(newServings);
    // Updating the recipe view.
    // recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // If the recipe is not bookmarked, we bookmark it. Else, we un-bookmark it.
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // Updating the recipe view.
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // Rendering the bookmarks.
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
// This function is part of the publisher-subscriber pattern, and acts as the subscriber.
const init = function() {
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
};
init();

},{"./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _config.RES_PER_PAGE)
    },
    bookmarks: []
};
const loadRecipe = async function(id) {
    // Error handling.
    try {
        // Fetching the data from the API.
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}${id}`);
        // Since the API returns data with underscore-named variables, we can create
        // a new object and integrate the JS naming conventions there.
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        // If there's in the actual state a bookmarked recipe, we need to set that property to
        // true on the data obtained from the API.
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (error) {
        console.error(`${error} \u{1F616}`);
        // Throwing the error again so that it can be propagated to the controller.
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        // Storing the query in the state.
        state.search.query = query;
        // Making a request to the API to get the basic info of all recipes
        // that match the query.
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}?search=${query}`);
        // console.log(data);
        // Storing the search results on the state object.
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
        // Whenever we load new results, the page state is reset to 1.
        state.search.page = 1;
    } catch (error) {
        console.error(`${error} \u{1F616}`);
        // Throwing the error again so that it can be propagated to the controller.
        throw error;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    // Saving the current page into the state.
    state.search.page = page;
    // Dynamically calculating the start and end points.
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    // Returning the desired results.
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    });
    state.recipe.servings = newServings;
};
const addBookmark = function(recipe) {
    // Adding a recipe to the state bookmarks array.
    state.bookmarks.push(recipe);
    // Marking current recipe bookmarked.
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};
const deleteBookmark = function(id) {
    // Getting the index of the element that has the target ID.
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    // Deleting said element form the bookmarks array.
    state.bookmarks.splice(index, 1);
    // Marking current recipe as not bookmarked.
    if (id === state.recipe.id) state.recipe.bookmarked = false;
};

},{"./config":"k5Hzs","./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
// Here, we place the variables that define important aspects of our application.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SECONDS", ()=>TIMEOUT_SECONDS);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SECONDS = 10;
const RES_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _config = require("./config");
// Function that returns a promise that automatically rejects after a certain amount of time.
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        // Fetching the data from the API, considering a timeout.
        const response = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SECONDS))
        ]);
        const data = await response.json();
        // If the response is not ok, we need to throw an error so that the
        // catch statement is activated.
        if (!response.ok) throw new Error(`${data.message} ${response.status}`);
        return data;
    } catch (err) {
        // Re-throwing the error so that we can handle it on the model.
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
// Importing parent class.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
// Importing the module that allows us to work with fractions.
var _fractional = require("fractional");
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
const icons = new URL(require("c11290a51c3b65b5"));
class RecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".recipe");
    // Defining a default error message.
    _errorMessage = "We could not find that recipe. Please try another one!";
    // Defining a default success message.
    _message = "";
    // This function is part of the publisher-subscriber pattern, and acts as the publisher.
    addHandlerRender(handler) {
        // A better way of implementing multiple triggers for the same function, in the same object.
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    // This function is part of the publisher-subscriber pattern, and acts as the publisher.
    addHandlerUpdateServings(handler) {
        // Event delegation.
        this._parentElement.addEventListener("click", function(e) {
            // Getting the button that was clicked.
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            // console.log(btn);
            // Determining the servings requested.
            const { updateTo } = btn.dataset;
            // console.log(updateTo);
            // Re-rendering the recipe with the new values. This should only be
            // called if the number of servings is greater than 0. Also, the value
            // should be transformed into an integer.
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    // This function is part of the publisher-subscriber pattern, and acts as the publisher.
    addHandlerAddBookmark(handler) {
        // We use event delegation because, by the time the page is loaded, the button that
        // we are interested in does not exist yet. Thus, event delegation proves useful in these
        // cases.
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    // Method that generates the markup.
    _generateMarkup() {
        // Rendering the recipe.
        return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
    }
    // Method that generates the markup for an ingredient.
    _generateMarkupIngredient(ing) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity).toString() : ""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
    }
}
exports.default = new RecipeView();

},{"./View":"5cUXS","c11290a51c3b65b5":"cMpiy","fractional":"3SU56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const icons = new URL(require("fcd5427331ff87b4"));
class View {
    _data;
    // Method that renders a recipe.
    render(data, render = true) {
        // In case there is no data, or the data is an empty array, render an error.
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        // Generating the markup.
        const markup = this._generateMarkup();
        // If the render parameter is false, we return the markup generated, instead of
        // inserting it on the screen.
        if (!render) return markup;
        this._clear();
        // Inserting the object.
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // Method that updates certain parts of the view, without updating also the data that stays
    // static.
    update(data) {
        // In case there is no data, or the data is an empty array, render an error.
        // if (!data || (Array.isArray(data) && data.length === 0))
        // 	return this.renderError();
        this._data = data;
        // Generating the markup.
        const newMarkup = this._generateMarkup();
        // Converting the string to a DOM Object, to be then used to make a comparison between itself
        // and what's currently on the page.
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        // Selecting all of the elements on the new virtual DOM, and converting the object into
        // an array.
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        // Selecting all of the elements on the current DOM, and converting the object into
        // an array.
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        // Comparing the elements between the arrays. This is an O(n^2) alg. time-wise from the Big-O
        // perspective.
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Checking whether or not both nodes have the same content. If the content is different,
            // we update the current DOM accordingly. Also, this only should be done if the content
            // of the node is text, thus avoiding updating entire containers and breaking the UI.
            // This updates changed text.
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // console.log('😖', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // This updates changed attributes.
            if (!newEl.isEqualNode(curEl)) // console.log(Array.from(newEl.attributes));
            Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    // Method that clears the HTML from the container.
    _clear() {
        // Cleaning the present markup.
        this._parentElement.innerHTML = "";
    }
    // Spinner used when waiting for data to be loaded.
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
        // Clearing and inserting the spinner as a child of the selected parent element.
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // Function that renders an error on screen.
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        // Clearing and inserting the error message as a child of the selected parent element.
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // Function that renders a success message on screen.
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        // Clearing and inserting the error message as a child of the selected parent element.
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"fcd5427331ff87b4":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require("17cff2908589362b").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"17cff2908589362b":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector(".search");
    // Gets the query inserted on the searchbar.
    getQuery() {
        // Returning the query.
        const query = this._parentElement.querySelector(".search__field").value;
        // Clearing the searchbar.
        this._clearInput();
        // Returning the query.
        return query;
    }
    // Method that clears the searchbar.
    _clearInput() {
        this._parentElement.querySelector(".search__field").value = "";
    }
    // This function is part of the publisher-subscriber pattern, and acts as the publisher.
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            // Preventing the default behavior of the form.
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Importing parent class.
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
// Importing the preview class.
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
const icons = new URL(require("2e4da4353ae8e631"));
class ResultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No recipies found for your query! Please try again.";
    // Defining a default success message.
    _message = "";
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"2e4da4353ae8e631":"cMpiy","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView":"1FDQ6"}],"1FDQ6":[function(require,module,exports) {
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Importing parent class.
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
const icons = new URL(require("728fe66ab2a858af"));
class PreviewView extends (0, _viewDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        // Determining the id of the current page.
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewView();

},{"728fe66ab2a858af":"cMpiy","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Importing parent class.
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
const icons = new URL(require("d937d4480f9ab689"));
class PaginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        // Using event delegation.
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            // Getting the target page.
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkupButtonNext(page) {
        return `
			<button data-goto=${page + 1} class="btn--inline pagination__btn--next">
				<span>Page ${page + 1}</span>
				<svg class="search__icon">
					<use href="${icons}#icon-arrow-right"></use>
				</svg>
			</button>
		`;
    }
    _generateMarkupButtonPrev(page) {
        return `
				<button data-goto=${page - 1} class="btn--inline pagination__btn--prev">
					<svg class="search__icon">
						<use href="${icons}#icon-arrow-left"></use>
					</svg>
					<span>Page ${page - 1}</span>
				</button>
			`;
    }
    _generateMarkup() {
        // Getting the total number of pages.
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // console.log(numPages);
        // Page 1, and there are other pages.
        if (curPage === 1 && numPages > 1) return this._generateMarkupButtonNext(curPage);
        // Last page.
        if (curPage === numPages && numPages > 1) return this._generateMarkupButtonPrev(curPage);
        // Other page.
        if (curPage < numPages) return this._generateMarkupButtonPrev(curPage) + this._generateMarkupButtonNext(curPage);
        // Page 1, and there are no other pages.
        return "";
    }
}
exports.default = new PaginationView();

},{"d937d4480f9ab689":"cMpiy","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
// Importing the icons.
// These two are the same, but the second one is the one shown in the docs.
// import icons from 'url:../img/icons.svg';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Importing parent class.
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
// Importing the preview class.
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
const icons = new URL(require("ecec98f88bc492d4"));
class BookmarksView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nive recipe and bookmark it c:";
    // Defining a default success message.
    _message = "";
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewDefault.default).render(bookmark, false)).join("");
    }
}
exports.default = new BookmarksView();

},{"ecec98f88bc492d4":"cMpiy","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./previewView":"1FDQ6"}]},["kYpTN","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
