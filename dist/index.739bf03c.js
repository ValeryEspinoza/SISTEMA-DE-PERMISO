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
})({"gHDMI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
//Imports
var _postRecuest = require("../server/PostRecuest");
var _getRecuest = require("../server/GetRecuest");
var _update = require("../server/update");
var _delete = require("../server/Delete");
//Inputs
const inputNombre = document.getElementById("nombre");
const inputID = document.getElementById("id");
const inputSede = document.getElementById("sede");
const inputLaptopCode = document.getElementById("laptopCode");
const inputFechaS = document.getElementById("fechaS");
const inputFechaR = document.getElementById("fechaR");
const checkTerminos = document.getElementById("terminos");
const textoMostradoAcceso = document.getElementById("textoMostrado");
//Botones
const btnAplicar = document.getElementById("aplicar");
const selectAcceso = document.getElementById("acceso");
const btnAdministrador1 = document.getElementById("btnAdmi1");
const btnAdministrador2 = document.getElementById("btnAdmi2");
const btnAdministrador3 = document.getElementById("btnAdmi3");
const btnColaboradorLogin = document.getElementById("btnColaborador");
//contenedores
const divPrincipal = document.getElementById("contenedorPrincipal");
const contenedorFondoSolicitudes = document.getElementById("contenedorFondoSolicitudes");
const contenedorTituloPagina = document.getElementById("contenedorTituloPagina");
const contenedorListaFormulario = document.getElementById("contenedorLista");
const contenedorItemsFormulario = document.getElementById("contenedorItems");
const men = document.getElementById("men");
//Acceso
selectAcceso.style.display = "None";
let user = JSON.parse(localStorage.getItem("usuario"));
let listaUsuario = Array(user);
console.log("lista usuario", listaUsuario);
tipoAcceso = listaUsuario[0].Roll;
selectAcceso.innerHTML = tipoAcceso;
let nombreMostrar = listaUsuario[0].Nombres;
textoMostradoAcceso.innerHTML = nombreMostrar;
//Validacion ingresar tipo de acceso
if (selectAcceso.textContent == "Acceso" || selectAcceso.textContent == "") {
    let modal3 = document.createElement("p");
    modal3.innerHTML = "Debe Ingresar un tipo de acceso";
    men.appendChild(modal3);
}
//Insetar nombre a formulario y bloquear input
function noModificar(item) {
    item.disabled = true;
}
let sumaNombreApellido = listaUsuario[0].Nombres + " " + listaUsuario[0].Apellidos;
inputNombre.value = sumaNombreApellido;
noModificar(inputNombre);
let inputcedula = listaUsuario[0].Cedula;
inputID.value = inputcedula;
noModificar(inputID);
//Seccion de Administrador
if (selectAcceso.textContent == "Administrador") {
    //Insertar titulo
    const etiquetaH2Admi = document.createElement("h2");
    etiquetaH2Admi.innerHTML = "Solicitudes Pendientes";
    contenedorTituloPagina.appendChild(etiquetaH2Admi);
    //OCULTAR FORMULARIO
    contenedorListaFormulario.style.display = "none";
    contenedorItemsFormulario.style.display = "none";
    console.log("Si puede usar Funciones Administrador");
    async function traerSolicitudes() {
        const solicitudes = await (0, _getRecuest.GetRecuest)();
        for(let index = 0; index < solicitudes.length; index++){
            //Get Nombre
            const contenedorSolicitud = document.createElement("div");
            const etiquetaNombre = document.createElement("h3");
            etiquetaNombre.innerHTML = solicitudes[index].nombre;
            contenedorSolicitud.appendChild(etiquetaNombre);
            divPrincipal.appendChild(contenedorSolicitud);
            //Get Fecha
            const sumaFechaS = "Fecha Salida: " + solicitudes[index].fechaSalida + " ";
            const datoFechaS = sumaFechaS;
            const etiquetaFechaS = document.createElement("p");
            etiquetaFechaS.innerHTML = datoFechaS;
            contenedorSolicitud.appendChild(etiquetaFechaS);
            const fechaR = "Fecha Regreso: " + solicitudes[index].fechaRegreso;
            const datoFechaR = fechaR;
            const etiquetaFechaR = document.createElement("p");
            etiquetaFechaR.innerHTML = datoFechaR;
            contenedorSolicitud.appendChild(etiquetaFechaR);
            //Get LaptopCode
            const etiquetaCode = document.createElement("p");
            etiquetaCode.innerHTML = "Codigo de Computadora: " + solicitudes[index].laptopCode;
            contenedorSolicitud.appendChild(etiquetaCode);
            //Get Status
            const etiquetaStatus = document.createElement("h6");
            etiquetaStatus.innerHTML = solicitudes[index].estatus;
            contenedorSolicitud.appendChild(etiquetaStatus);
            //boton Aceptar
            const btnAceptar = document.createElement("button");
            btnAceptar.innerHTML = "Aceptar";
            contenedorSolicitud.appendChild(btnAceptar);
            //Boton Rechazar
            const btnRechazar = document.createElement("button");
            btnRechazar.innerHTML = "Declinar";
            contenedorSolicitud.appendChild(btnRechazar);
            //id
            const id = solicitudes[index].id;
            const nombre = solicitudes[index].nombre;
            const cedula = solicitudes[index].cedula;
            const sede = solicitudes[index].sede;
            const laptopCode = solicitudes[index].laptopCode;
            const fechaS = solicitudes[index].fechaSalida;
            const fechaRe = solicitudes[index].fechaRegreso;
            //Evento Btn Aceptar
            btnAceptar.addEventListener("click", function() {
                (0, _update.editUsers)("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe);
                (0, _postRecuest.sendRecuestToHistory)("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe);
                (0, _postRecuest.sendRecuestToAcepted)("Aceptado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe);
                console.log(id);
                (0, _delete.deleteUser)(id);
                location.reload();
            });
            //Evento Btn Declinar
            btnRechazar.addEventListener("click", function() {
                (0, _update.editUsers)("Declinado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe);
                (0, _postRecuest.sendRecuestToHistory)("Declinado", id, nombre, cedula, sede, laptopCode, fechaS, fechaRe);
                (0, _delete.deleteUser)(id);
                location.reload();
            });
        }
    }
    traerSolicitudes();
}
//Acceso Colaborador
if (selectAcceso.textContent == "Colaborador") {
    //Insertar Titulo
    const etiquetaH2Formulario = document.createElement("h2");
    etiquetaH2Formulario.innerHTML = "Formulario de Solicitudes";
    contenedorTituloPagina.appendChild(etiquetaH2Formulario);
    //Oculta las funciones Administrador
    console.log("Ha ingresador como Colaborador");
    btnAdministrador1.style.display = "none";
    btnAdministrador2.style.display = "none";
    btnAdministrador3.style.display = "none";
    //Evento Aplicar
    btnAplicar.addEventListener("click", function() {
        console.log("Boton funciona");
        //Validacion de espacios vacios
        console.log("Sede", inputSede.textContent === "Sede");
        if (inputNombre.value == "" || inputID.value == "" || inputSede.value == "" || inputLaptopCode.value == "" || inputFechaS.value == "" || inputFechaR.value == "" || checkTerminos.checked === false || inputSede.value === "Sede") {
            console.log(1234);
            setTimeout(function() {
                let modal7 = document.createElement("p");
                modal7.innerHTML = "\xa1No puede quedar ningun espacio sin llenar";
                men.appendChild(modal7);
            }, 1000);
            console.log("Falta llenar espacios");
        } else {
            setTimeout(function() {
                let modal2 = document.createElement("p");
                modal2.innerHTML = "\xa1Solicitud Realizada con exito! Pronto se enviar\xe1 respuesta a su solicitud";
                men.appendChild(modal2);
            }, 1000);
            console.log("\xa1Solicitud Realizada con exito! Pronto se enviar\xe1 respuesta a su solicitud");
            (0, _postRecuest.sendRecuest)(inputNombre.value, inputID.value, inputSede.value, inputLaptopCode.value, inputFechaS.value, inputFechaR.value, "Pendiente");
        }
    });
}

},{"../server/PostRecuest":"39ZWR","../server/GetRecuest":"kq1Dl","../server/update":"bUBaq","../server/Delete":"47B0z"}],"39ZWR":[function(require,module,exports) {
//envio de solicitud a endpoint 3004
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendRecuest", ()=>sendRecuest);
parcelHelpers.export(exports, "sendRecuestToHistory", ()=>sendRecuestToHistory);
parcelHelpers.export(exports, "sendRecuestToAcepted", ()=>sendRecuestToAcepted);
async function sendRecuest(nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso, estatus) {
    try {
        const newRecuest = {
            nombre,
            cedula,
            sede,
            laptopCode,
            fechaSalida,
            fechaRegreso,
            estatus
        };
        const response = await fetch(`http://localhost:3003/Recuest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecuest)
        });
        console.log("Solicitud Aplicada");
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error(error);
    }
}
// Enviar Solicitud a Historial
async function sendRecuestToHistory(estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {
    try {
        const sendRecuest = {
            estatus,
            id,
            nombre,
            cedula,
            sede,
            laptopCode,
            fechaSalida,
            fechaRegreso
        };
        const respuesta = await fetch(`http://localhost:3003/History`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendRecuest)
        });
        console.log("Solicitud Enviada a Historial");
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
// Enviar Solicitud a Aceptadas
async function sendRecuestToAcepted(estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {
    try {
        const sendRecuestAcepted = {
            estatus,
            id,
            nombre,
            cedula,
            sede,
            laptopCode,
            fechaSalida,
            fechaRegreso
        };
        const respuesta = await fetch(`http://localhost:3003/AceptedRecuest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendRecuestAcepted)
        });
        console.log("Solicitud Enviada a Acepted Recuest");
        const dataAcepted = await respuesta.json();
        return dataAcepted;
    } catch (error) {
        console.error(error);
    }
}

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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"kq1Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GetRecuest", ()=>GetRecuest);
parcelHelpers.export(exports, "GetRecuestFromHistory", ()=>GetRecuestFromHistory);
parcelHelpers.export(exports, "GetRecuestFromAcepted", ()=>GetRecuestFromAcepted);
async function GetRecuest() {
    try {
        const response = await fetch(`http://localhost:3003/Recuest`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function GetRecuestFromHistory() {
    try {
        const response = await fetch(`http://localhost:3003/History`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
async function GetRecuestFromAcepted() {
    try {
        const response = await fetch(`http://localhost:3003/AceptedRecuest`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUBaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "editUsers", ()=>editUsers);
async function editUsers(estatus, id, nombre, cedula, sede, laptopCode, fechaSalida, fechaRegreso) {
    try {
        const usuarioEditar = {
            estatus,
            nombre,
            cedula,
            sede,
            laptopCode,
            fechaSalida,
            fechaRegreso
        };
        const respuesta = await fetch(`http://localhost:3003/Recuest/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarioEditar) // Convierte el objeto newUser a JSON para enviarlo en el cuerpo de la solicitud
        });
        console.log("Edicion Exitosa");
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47B0z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteUser", ()=>deleteUser);
parcelHelpers.export(exports, "deleteUserHistory", ()=>deleteUserHistory);
parcelHelpers.export(exports, "deleteHistory", ()=>deleteHistory);
async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3003/Recuest/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(`Error deleting user with id ${id}`);
        return {
            message: `Usuario con id ${id} ha sido eliminado correctamente`
        };
    } catch (error) {
        console.error("Error eliminando id:", error);
        throw error;
    }
}
async function deleteUserHistory(id) {
    try {
        const response = await fetch(`http://localhost:3003/History/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(`Error deleting user with id ${id}`);
        return {
            message: `Usuario con id ${id} ha sido eliminado correctamente`
        };
    } catch (error) {
        console.error("Error eliminando id:", error);
        throw error;
    }
}
async function deleteHistory(id) {
    try {
        const response = await fetch(`http://localhost:3003/History/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(`Error deleting user with id ${id}`);
        return {
            message: `Usuario con id ${id} ha sido eliminado correctamente`
        };
    } catch (error) {
        console.error("Error eliminando id:", error);
        throw error;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gHDMI","ebWYT"], "ebWYT", "parcelRequire6682")

//# sourceMappingURL=index.739bf03c.js.map
