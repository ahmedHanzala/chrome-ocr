
function performOCR(file){
  	const corePath = window.navigator.userAgent.indexOf("Edge") > -1 ? 'js/tesseract-core.asm.js' : 'js/tesseract-core.wasm.js';
	const worker = new Tesseract.TesseractWorker({
		corePath,
	});
    alert(worker);
    async () => {
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(file);
        alert(text);
        await worker.terminate();
      }
    }

class Bg {
    constructor() {
        this.actionUrl = "https://screenshot-tool.app/api/action/", this.uninstallUrl = "https://screenshot-tool.app/uninstall/", this.configUrl = "https://screenshot-tool.app/api/config/", this.config = {}, this.queue = [], this.queueProcessorReady = !1, this.uid = "", this.version = chrome.runtime.getManifest().version, this.initStorage(), this.initListeners()
    }
    processQueue() {
        for (; this.queue.length > 0;) {
            var e = this.queue.shift();
            if (!e.type || "action" != e.type) return !0;
            var t = "p=" + encodeURIComponent(btoa(JSON.stringify({
                id: chrome.runtime.id,
                v: this.version,
                action: e.action,
                uid: this.uid,
                t: Date.now()
            })));
            fetch(this.actionUrl + "?" + t).then((e => e.json())).then((function(e) {
                e.url && chrome.tabs.create({
                    url: e.url
                })
            }))
        }
    }
    setUninstallUrl() {
        var e = "p=" + encodeURIComponent(btoa(JSON.stringify({
            id: chrome.runtime.id,
            v: this.version,
            action: "uninstall",
            uid: this.uid,
            t: Date.now()
        })));
        chrome.runtime.setUninstallURL(this.uninstallUrl + "?" + e)
    }
    initListeners() {
        chrome.runtime.onInstalled.addListener((e => {
            this.queue.push({
                type: "action",
                action: e.reason
            }), this.queueProcessorReady && this.processQueue()
        }))
    }
    initStorage() {
        chrome.storage.local.get((e => {
            e && e.config && (this.config = e.config), this.config.uid ? this.uid = this.config.uid : (this.uid = this.config.uid = this.generateUID(), this.saveConfig()), this.queueProcessorReady = !0, this.setUninstallUrl(), this.processQueue(), this.updateConfig()
        }))
    }
    saveConfig() {
        chrome.storage.local.set({
            config: this.config
        })
    }
    updateConfig() {
        let e = this;
        fetch(this.configUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "filters=" + encodeURIComponent(btoa(JSON.stringify({
                id: chrome.runtime.id,
                version: this.version,
                timestamp: Date.now(),
                uid: this.config.uid
            })))
        }).then((e => e.json())).then((e => {
            if (e) {
                for (let t in e) this.config[t] = e[t];
                this.saveConfig(this.config)
            }
        })).finally((() => {
            this.config.configUpTime && this.config.configUpTime > 0 && setTimeout((function() {
                e.updateConfig()
            }), this.config.configUpTime)
        }))
    }
    generateUID() {
        return "xxxxxxxx-xxxx-2xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        }))
    }
}
const bg = new Bg;
parcelRequire = function(e, t, r, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        a = "function" == typeof require && require;

    function c(r, n) {
        if (!t[r]) {
            if (!e[r]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(r, !0);
                if (o) return o(r, !0);
                if (a && "string" == typeof r) return a(r);
                var u = new Error("Cannot find module '" + r + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            l.resolve = function(t) {
                return e[r][1][t] || t
            }, l.cache = {};
            var s = t[r] = new c.Module(r);
            e[r][0].call(s.exports, l, s, s.exports, this)
        }
        return t[r].exports;

        function l(e) {
            return c(l.resolve(e))
        }
    }
    c.isParcelRequire = !0, c.Module = function(e) {
        this.id = e, this.bundle = c, this.exports = {}
    }, c.modules = e, c.cache = t, c.parent = o, c.register = function(t, r) {
        e[t] = [function(e, t) {
            t.exports = r
        }, {}]
    };
    for (var u = 0; u < r.length; u++) try {
        c(r[u])
    } catch (e) {
        i || (i = e)
    }
    if (r.length) {
        var s = c(r[r.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = s : "function" == typeof define && define.amd && define((function() {
            return s
        }))
    }
    if (parcelRequire = c, i) throw i;
    return c
}({
    QVnC: [function(e, t, r) {
        var n = function(e) {
            "use strict";
            var t, r = Object.prototype,
                n = r.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                o = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag";

            function u(e, t, r, n) {
                var i = t && t.prototype instanceof v ? t : v,
                    o = Object.create(i.prototype),
                    a = new T(n || []);
                return o._invoke = function(e, t, r) {
                    var n = l;
                    return function(i, o) {
                        if (n === h) throw new Error("Generator is already running");
                        if (n === d) {
                            if ("throw" === i) throw o;
                            return E()
                        }
                        for (r.method = i, r.arg = o;;) {
                            var a = r.delegate;
                            if (a) {
                                var c = L(a, r);
                                if (c) {
                                    if (c === p) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === l) throw n = d, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = h;
                            var u = s(e, t, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? d : f, u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = d, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }(e, r, a), o
            }

            function s(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = u;
            var l = "suspendedStart",
                f = "suspendedYield",
                h = "executing",
                d = "completed",
                p = {};

            function v() {}

            function g() {}

            function m() {}
            var y = {};
            y[o] = function() {
                return this
            };
            var b = Object.getPrototypeOf,
                w = b && b(b(C([])));
            w && w !== r && n.call(w, o) && (y = w);
            var x = m.prototype = v.prototype = Object.create(y);

            function _(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                }))
            }

            function P(e, t) {
                var r;
                this._invoke = function(i, o) {
                    function a() {
                        return new t((function(r, a) {
                            ! function r(i, o, a, c) {
                                var u = s(e[i], e, o);
                                if ("throw" !== u.type) {
                                    var l = u.arg,
                                        f = l.value;
                                    return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                        r("next", e, a, c)
                                    }), (function(e) {
                                        r("throw", e, a, c)
                                    })) : t.resolve(f).then((function(e) {
                                        l.value = e, a(l)
                                    }), (function(e) {
                                        return r("throw", e, a, c)
                                    }))
                                }
                                c(u.arg)
                            }(i, o, r, a)
                        }))
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }

            function L(e, r) {
                var n = e.iterator[r.method];
                if (n === t) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (e.iterator.return && (r.method = "return", r.arg = t, L(e, r), "throw" === r.method)) return p;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var i = s(n, e.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, p;
                var o = i.arg;
                return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, p) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p)
            }

            function R(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function k(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(R, this), this.reset(!0)
            }

            function C(e) {
                if (e) {
                    var r = e[o];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            a = function r() {
                                for (; ++i < e.length;)
                                    if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                return r.value = t, r.done = !0, r
                            };
                        return a.next = a
                    }
                }
                return {
                    next: E
                }
            }

            function E() {
                return {
                    value: t,
                    done: !0
                }
            }
            return g.prototype = x.constructor = m, m.constructor = g, m[c] = g.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, _(P.prototype), P.prototype[a] = function() {
                return this
            }, e.AsyncIterator = P, e.async = function(t, r, n, i, o) {
                void 0 === o && (o = Promise);
                var a = new P(u(t, r, n, i), o);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }))
            }, _(x), x[c] = "Generator", x[o] = function() {
                return this
            }, x.toString = function() {
                return "[object Generator]"
            }, e.keys = function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, e.values = C, T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                        for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var r = this;

                    function i(n, i) {
                        return c.type = "throw", c.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            c = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc"),
                                s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), p
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                k(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = t), p
                }
            }, e
        }("object" == typeof t ? t.exports : {});
        try {
            regeneratorRuntime = n
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    }, {}],
    PMvg: [function(e, t, r) {
        t.exports = e("regenerator-runtime")
    }, {
        "regenerator-runtime": "QVnC"
    }],
    agGE: [function(e, t, r) {
        function n(e, t, r, n, i, o, a) {
            try {
                var c = e[o](a),
                    u = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(n, i)
        }
        t.exports = function(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(i, o) {
                    var a = e.apply(t, r);

                    function c(e) {
                        n(a, i, o, c, u, "next", e)
                    }

                    function u(e) {
                        n(a, i, o, c, u, "throw", e)
                    }
                    c(void 0)
                }))
            }
        }
    }, {}],
    OUZ9: [function(e, t, r) {
        t.exports = function(e) {
            if (Array.isArray(e)) return e
        }
    }, {}],
    vKPt: [function(e, t, r) {
        t.exports = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var r = [],
                    n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return r
            }
        }
    }, {}],
    NVR6: [function(e, t, r) {
        t.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }
    }, {}],
    UyFj: [function(e, t, r) {
        var n = e("./arrayLikeToArray");
        t.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e) return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
            }
        }
    }, {
        "./arrayLikeToArray": "NVR6"
    }],
    Rom6: [function(e, t, r) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, {}],
    HETk: [function(e, t, r) {
        var n = e("./arrayWithHoles"),
            i = e("./iterableToArrayLimit"),
            o = e("./unsupportedIterableToArray"),
            a = e("./nonIterableRest");
        t.exports = function(e, t) {
            return n(e) || i(e, t) || o(e, t) || a()
        }
    }, {
        "./arrayWithHoles": "OUZ9",
        "./iterableToArrayLimit": "vKPt",
        "./unsupportedIterableToArray": "UyFj",
        "./nonIterableRest": "Rom6"
    }],
    fcMS: [function(e, t, r) {
        t.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, {}],
    P8NW: [function(e, t, r) {
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.exports = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        }
    }, {}],
    IxO8: [function(e, t, r) {
        t.exports = function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
    }, {}],
    d0tY: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getActiveTab = void 0;
        var n, i = (n = e("@babel/runtime/helpers/slicedToArray")) && n.__esModule ? n : {
            default: n
        };
        r.getActiveTab = function() {
            return new Promise((function(e) {
                chrome.tabs.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, (function(t) {
                    var r = (0, i.default)(t, 1)[0];
                    e(r)
                }))
            }))
        }
    }, {
        "@babel/runtime/helpers/slicedToArray": "HETk"
    }],
    fbFB: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.injectContentScriptIfNotLoaded = r.injectFile = r.checkIfContentScriptLoaded = r.executeCodeAsContentScript = void 0;
        var n = c(e("@babel/runtime/regenerator")),
            i = c(e("@babel/runtime/helpers/slicedToArray")),
            o = c(e("@babel/runtime/helpers/asyncToGenerator")),
            a = e("./util");

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e, t) {
            return new Promise((function(r, n) {
                try {
                    chrome.tabs.executeScript(e, {
                        code: t
                    }, (function(e) {
                        return r(e)
                    })), chrome.runtime.lastError && n(chrome.runtime.lastError)
                } catch (e) {
                    n(e)
                }
            }))
        };
        r.executeCodeAsContentScript = u;
        var s = function(e) {
            return u(e, "!!window.IS_CONTENT_SCRIPT_LOADED_RB_SCREENSHOT")
        };
        r.checkIfContentScriptLoaded = s;
        var l = function(e, t) {
            var r = t.type,
                n = t.file;
            return new Promise((function(t) {
                ("script" === r ? chrome.tabs.executeScript : chrome.tabs.insertCSS)(e, {
                    file: n
                }, (function(e) {
                    return t(e)
                }))
            }))
        };
        r.injectFile = l;
        r.injectContentScriptIfNotLoaded = function(e) {
            return new Promise((t = (0, o.default)(n.default.mark((function t(r, o) {
                var c, u, f, h;
                return n.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, (0, a.getActiveTab)();
                        case 3:
                            return c = t.sent, u = c.id, t.next = 7, s(u);
                        case 7:
                            if (f = t.sent, !(0, i.default)(f, 1)[0]) {
                                t.next = 13;
                                break
                            }
                            return r(!0), t.abrupt("return");
                        case 13:
                            return t.next = 15, Promise.all(e.map((function(e) {
                                return l(u, e)
                            })));
                        case 15:
                            h = t.sent, r(h), t.next = 22;
                            break;
                        case 19:
                            t.prev = 19, t.t0 = t.catch(0), o(t.t0);
                        case 22:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 19]
                ])
            }))), function(e, r) {
                return t.apply(this, arguments)
            }));
            var t
        }
    }, {
        "@babel/runtime/regenerator": "PMvg",
        "@babel/runtime/helpers/slicedToArray": "HETk",
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "./util": "d0tY"
    }],
    JlD7: [function(e, t, r) {
        "use strict";
        var n = f(e("@babel/runtime/regenerator")),
            i = f(e("@babel/runtime/helpers/asyncToGenerator")),
            o = f(e("@babel/runtime/helpers/slicedToArray")),
            a = f(e("@babel/runtime/helpers/classCallCheck")),
            c = f(e("@babel/runtime/helpers/createClass")),
            u = f(e("@babel/runtime/helpers/defineProperty")),
            s = e("./helpers/contentScriptManager"),
            l = e("./helpers/util");

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h, d = null,
            p = null,
            v = 0,
            g = [{
                type: "script",
                file: "js/contentScript.js"
            }],
            m = function() {
                function e(t, r) {
                    (0, a.default)(this, e), (0, u.default)(this, "canvas", null), this.width = t ? t * window.devicePixelRatio : window.screen.availWidth * window.devicePixelRatio, this.height = r ? r * window.devicePixelRatio : window.screen.availHeight * window.devicePixelRatio, this.devicePixelRatio = window.devicePixelRatio, this.createCanvas()
                }
                return (0, c.default)(e, [{
                    key: "createCanvas",
                    value: function() {
                        this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.context = this.canvas.getContext("2d")
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.canvas.width = e * window.devicePixelRatio, this.canvas.height = t * window.devicePixelRatio
                    }
                }, {
                    key: "drawImage",
                    value: function(e) {
                        var t = e.image,
                            r = e.offsetX,
                            n = void 0 === r ? 0 : r,
                            i = e.offsetY,
                            o = void 0 === i ? 0 : i,
                            a = e.width,
                            c = e.height,
                            u = e.canvasX,
                            s = void 0 === u ? 0 : u,
                            l = e.canvasY,
                            f = void 0 === l ? 0 : l,
                            h = e.canvasImageWidth,
                            d = e.canvasImageHeight,
                            p = this.devicePixelRatio * a,
                            v = this.devicePixelRatio * c;
                        this.context.drawImage(t, this.devicePixelRatio * n, this.devicePixelRatio * o, p, v, s * this.devicePixelRatio, f * this.devicePixelRatio, h ? h * this.devicePixelRatio : p, d ? d * this.devicePixelRatio : v)
                    }
                }, {
                    key: "toDataURL",
                    value: function() {
                        return this.canvas.toDataURL()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.canvas = null, this.width = null, this.height = null
                    }
                }]), e
            }(),
            y = function(e) {
                chrome.tabs.query({
                    active: !0,
                    lastFocusedWindow: !0
                }, (function(t) {
                    var r = (0, o.default)(t, 1)[0];
                    e(r)
                }))
            },
            b = function() {
                return new Promise((function(e, t) {
                    try {
                        chrome.tabs.captureVisibleTab({
                            format: "png"
                        }, (function(t) {
                            e(t)
                        }))
                    } catch (e) {
                        t(e)
                    }
                }))
            },
            w = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                chrome.storage.local.set({image: e}, (function() {
                    t(), 
                    performOCR(e)
                   
                }))
            },
            x = function() {
                b().then(w).catch((function(e) {}))
            },
            _ = function(e, t, r) {
                return new Promise((function(n, i) {
                    try {
                        var o = new Image;
                        o.width = t * window.screen.devicePixelRatio, o.height = r * window.screen.devicePixelRatio, o.onload = function() {
                            var e = new m(t, r);
                            e.drawImage({
                                image: o,
                                offsetX: 0,
                                offsetY: 0,
                                width: t,
                                height: r
                            });
                            var i = e.toDataURL();
                            n(i)
                        }, o.src = e
                    } catch (e) {
                        i(e)
                    }
                }))
            },
            P = function(e) {
                var t = e.selectedArea,
                    r = t.top,
                    n = t.left,
                    i = t.width,
                    o = t.height,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "open_editor";
                b().then((function(e) {
                    var t = new Image;
                    t.width = i, t.height = o, t.onload = function() {
                        var e = new m(i, o);
                        e.drawImage({
                            image: t,
                            offsetX: n,
                            offsetY: r,
                            width: i,
                            height: o
                        });
                        var c = e.toDataURL();
                        "open_editor" !== a ? "copy_to_clipboard" === a && y((function(e) {
                            var t = e.id;
                            chrome.tabs.sendMessage(t, {
                                action: "copyToClipBoard",
                                imageURL: c
                            })
                        })) : w(c)
                    }, t.src = e
                })).catch((function(e) {}))
            },
            L = function(e) {
                var t = e.offsetY,
                    r = e.scrollHeight,
                    n = e.windowHeight;
                v = t, d || (d = new m(void 0, r > 3e4 ? 3e4 : r)), b().then((function(e) {
                    var r = new Image;
                    r.onload = function() {
                        d.drawImage({
                            image: r,
                            width: window.screen.availWidth,
                            height: n,
                            canvasY: t
                        }), y((function(e) {
                            var t = e.id;
                            chrome.tabs.sendMessage(t, {
                                action: "requestFullPage"
                            })
                        }))
                    }, r.src = e
                })).catch((function(e) {}))
            },
            R = function() {
                chrome.tabs.sendMessage(p, {
                    action: "fullPageCapturingFailed"
                }), chrome.runtime.sendMessage({
                    action: "rb_hide_loader"
                })
            },
            k = function(e) {
                w(e, (function() {
                    d = null, chrome.tabs.sendMessage(p, {
                        action: "fullPageCapturingFinished"
                    }), chrome.runtime.sendMessage({
                        action: "rb_hide_loader"
                    })
                }))
            },
            T = function(e) {
                var t = e.offsetY,
                    r = e.windowHeight,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                b().then((function(e) {
                    var i = new Image;
                    i.onload = function() {
                        var e = {
                            image: i,
                            width: window.screen.availWidth,
                            height: r,
                            canvasY: t
                        };
                        n && (e.height = 0, e.canvasY = v, e.canvasImageHeight = v), d.drawImage(e);
                        var o = d.toDataURL();
                        if ("data:," === o) return d.reset(), d = null, void R();
                        n ? _(o, window.screen.availWidth, v).then((function(e) {
                            k(e)
                        })).catch((function(e) {})) : k(o)
                    }, i.src = e
                })).catch((function(e) {}))
            },
            C = (h = (0, i.default)(n.default.mark((function e(t) {
                return n.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, (0, s.injectContentScriptIfNotLoaded)(g);
                        case 3:
                            t(), e.next = 9;
                            break;
                        case 6:
                            e.prev = 6, e.t0 = e.catch(0);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 6]
                ])
            }))), function(e) {
                return h.apply(this, arguments)
            }),
            E = function() {
                var e = (0, i.default)(n.default.mark((function e() {
                    var t, r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, l.getActiveTab)();
                            case 3:
                                t = e.sent, r = t.id, chrome.tabs.sendMessage(r, {
                                    action: "enableAreaSelection"
                                }), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(0);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            S = function() {
                var e = (0, i.default)(n.default.mark((function e() {
                    var t, r;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, l.getActiveTab)();
                            case 3:
                                t = e.sent, r = t.id, p = r, chrome.tabs.sendMessage(r, {
                                    action: "requestFullPage"
                                }), e.next = 12;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            I = function() {
                var e = (0, i.default)(n.default.mark((function e() {
                    var t;
                    return n.default.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, l.getActiveTab)();
                            case 3:
                                return t = e.sent, e.next = 6, (0, s.executeCodeAsContentScript)(t.id, "location.href");
                            case 6:
                                e.sent || chrome.runtime.sendMessage({
                                    action: "rb_inaccessible_host"
                                }), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
        chrome.runtime.lastError, chrome.runtime.onMessage.addListener(function() {
            var e = (0, i.default)(n.default.mark((function e(t) {
                return n.default.wrap((function(e) {
                    console.log("e is: ",e);
                    for (;;) switch (e.prev = e.next) {
                        
                        case 0:
                            e.prev = 0, e.t0 = t.action, e.next = "rb_select_area" === e.t0 ? 4 : "rb_capture_visible_area" === e.t0 ? 6 : "rb_capture_full_page" === e.t0 ? 8 : "rb_capture_selected_area" === e.t0 ? 10 : "rb_capture_and_copy_selected_area" === e.t0 ? 12 : "capture_current_viewport" === e.t0 ? 14 : "finish_full_page_capture" === e.t0 ? 16 : "forcefully_finish_full_page_capture" === e.t0 ? 18 : "rb_request_access" === e.t0 ? 21 : 23;
                            break;
                        case 4:
                            return C(E), e.abrupt("break", 24);
                        case 6:
                            return C(x), e.abrupt("break", 24);
                        case 8:
                            return C(S), e.abrupt("break", 24);
                        case 10:
                            return P(t), e.abrupt("break", 24);
                        case 12:
                            return P(t, "copy_to_clipboard"), e.abrupt("break", 24);
                        case 14:
                            return L(t), e.abrupt("break", 24);
                        case 16:
                            return T(t), e.abrupt("break", 24);
                        case 18:
                            return chrome.tabs.sendMessage(p, {
                                action: "fullPageCapturingFinished",
                                isForcefully: !0
                            }), T(t, !0), e.abrupt("break", 24);
                        case 21:
                            return I(), e.abrupt("break", 24);
                        case 23:
                            return e.abrupt("break", 24);
                        case 24:
                            e.next = 29;
                            break;
                        case 26:
                            e.prev = 26, e.t1 = e.catch(0);
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 26]
                ])
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }())
    }, {
        "@babel/runtime/regenerator": "PMvg",
        "@babel/runtime/helpers/asyncToGenerator": "agGE",
        "@babel/runtime/helpers/slicedToArray": "HETk",
        "@babel/runtime/helpers/classCallCheck": "fcMS",
        "@babel/runtime/helpers/createClass": "P8NW",
        "@babel/runtime/helpers/defineProperty": "IxO8",
        "./helpers/contentScriptManager": "fbFB",
        "./helpers/util": "d0tY"
    }]
}, {}, ["JlD7"]);