
parcelRequire = function(e, t, n, r) {
    var o, i = "function" == typeof parcelRequire && parcelRequire,
        a = "function" == typeof require && require;

    function s(n, r) {
        if (!t[n]) {
            if (!e[n]) {
                var o = "function" == typeof parcelRequire && parcelRequire;
                if (!r && o) return o(n, !0);
                if (i) return i(n, !0);
                if (a && "string" == typeof n) return a(n);
                var l = new Error("Cannot find module '" + n + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            u.resolve = function(t) {
                return e[n][1][t] || t
            }, u.cache = {};
            var c = t[n] = new s.Module(n);
            e[n][0].call(c.exports, u, c, c.exports, this)
        }
        return t[n].exports;

        function u(e) {
            return s(u.resolve(e))
        }
    }
    s.isParcelRequire = !0, s.Module = function(e) {
        this.id = e, this.bundle = s, this.exports = {}
    }, s.modules = e, s.cache = t, s.parent = i, s.register = function(t, n) {
        e[t] = [function(e, t) {
            t.exports = n
        }, {}]
    };
    for (var l = 0; l < n.length; l++) try {
        s(n[l])
    } catch (e) {
        o || (o = e)
    }
    if (n.length) {
        var c = s(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd && define((function() {
            return c
        }))
    }
    if (parcelRequire = s, o) throw o;
    return s
}({
    fcMS: [function(e, t, n) {
        t.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, {}],
    P8NW: [function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        t.exports = function(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }
    }, {}],
    pBGv: [function(e, t, n) {
        var r, o, i = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function l(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }

        function c(e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
            try {
                return o(e)
            } catch (t) {
                try {
                    return o.call(null, e)
                } catch (t) {
                    return o.call(this, e)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                r = a
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                o = s
            }
        }();
        var u, d = [],
            f = !1,
            p = -1;

        function h() {
            f && u && (f = !1, u.length ? d = u.concat(d) : p = -1, d.length && g())
        }

        function g() {
            if (!f) {
                var e = l(h);
                f = !0;
                for (var t = d.length; t;) {
                    for (u = d, d = []; ++p < t;) u && u[p].run();
                    p = -1, t = d.length
                }
                u = null, f = !1, c(e)
            }
        }

        function v(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new v(e, t)), 1 !== d.length || f || l(g)
        }, v.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, {}],
    juYr: [function(e, t, n) {
        var r;
        e("process"), e("process");
        ! function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, (function(e, t) {
            "use strict";
            var n = [],
                o = Object.getPrototypeOf,
                i = n.slice,
                a = n.flat ? function(e) {
                    return n.flat.call(e)
                } : function(e) {
                    return n.concat.apply([], e)
                },
                s = n.push,
                l = n.indexOf,
                c = {},
                u = c.toString,
                d = c.hasOwnProperty,
                f = d.toString,
                p = f.call(Object),
                h = {},
                g = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                v = function(e) {
                    return null != e && e === e.window
                },
                m = e.document,
                y = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function b(e, t, n) {
                var r, o, i = (n = n || m).createElement("script");
                if (i.text = e, t)
                    for (r in y)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i)
            }

            function x(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
            }
            var w = function(e, t) {
                return new w.fn.init(e, t)
            };

            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = x(e);
                return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            w.fn = w.prototype = {
                jquery: "3.5.1",
                constructor: w,
                length: 0,
                toArray: function() {
                    return i.call(this)
                },
                get: function(e) {
                    return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return w.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(w.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(i.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(w.grep(this, (function(e, t) {
                        return (t + 1) % 2
                    })))
                },
                odd: function() {
                    return this.pushStack(w.grep(this, (function(e, t) {
                        return t % 2
                    })))
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function() {
                var e, t, n, r, o, i, a = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (w.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, a[t] = w.extend(c, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }, w.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || f.call(n) !== p))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (T(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var r, o, i = 0,
                        s = [];
                    if (T(e))
                        for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o);
                    else
                        for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
                    return a(s)
                },
                guid: 1,
                support: h
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            }));
            var C = function(e) {
                var t, n, r, o, i, a, s, l, c, u, d, f, p, h, g, v, m, y, b, x = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    S = le(),
                    A = le(),
                    E = le(),
                    k = le(),
                    D = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    M = {}.hasOwnProperty,
                    j = [],
                    N = j.pop,
                    L = j.push,
                    q = j.push,
                    H = j.slice,
                    O = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    W = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    I = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
                    _ = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                    F = new RegExp(R + "+", "g"),
                    B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    Y = new RegExp("^" + R + "*," + R + "*"),
                    $ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    X = new RegExp(R + "|>"),
                    z = new RegExp(_),
                    U = new RegExp("^" + W + "$"),
                    V = {
                        ID: new RegExp("^#(" + W + ")"),
                        CLASS: new RegExp("^\\.(" + W + ")"),
                        TAG: new RegExp("^(" + W + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + _),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + P + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        f()
                    },
                    ae = xe((function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    q.apply(j = H.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: j.length ? function(e, t) {
                            L.apply(e, H.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, o) {
                    var i, s, c, u, d, h, m, y = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!o && (f(t), t = t || p, g)) {
                        if (11 !== w && (d = Z.exec(e)))
                            if (i = d[1]) {
                                if (9 === w) {
                                    if (!(c = t.getElementById(i))) return r;
                                    if (c.id === i) return r.push(c), r
                                } else if (y && (c = y.getElementById(i)) && b(t, c) && c.id === i) return r.push(c), r
                            } else {
                                if (d[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(i)), r
                            }
                        if (n.qsa && !k[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (m = e, y = t, 1 === w && (X.test(e) || $.test(e))) {
                                for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, oe) : t.setAttribute("id", u = x)), s = (h = a(e)).length; s--;) h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                                m = h.join(",")
                            }
                            try {
                                return q.apply(r, y.querySelectorAll(m)), r
                            } catch (t) {
                                k(e, !0)
                            } finally {
                                u === x && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(B, "$1"), t, r, o)
                }

                function le() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function ce(e) {
                    return e[x] = !0, e
                }

                function ue(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function fe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ge(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ve(e) {
                    return ce((function(t) {
                        return t = +t, ce((function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        }))
                    }))
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, i = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !G.test(t || n && n.nodeName || "HTML")
                    }, f = se.setDocument = function(e) {
                        var t, o, a = e ? e.ownerDocument || e : w;
                        return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ue((function(e) {
                            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        })), n.attributes = ue((function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        })), n.getElementsByTagName = ue((function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ue((function(e) {
                            return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                        })), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, m = [], v = [], (n.qsa = K.test(p.querySelectorAll)) && (ue((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                        })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                        }))), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", _)
                        })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, D = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : u ? O(u, e) - O(u, t) : 0;
                            if (o === i) return fe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? fe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }, p) : p
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if (f(e), n.matchesSelector && g && !k[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            k(t, !0)
                        }
                        return se(t, p, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) != p && f(e), b(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) != p && f(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && M.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                        return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), d) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return u = null, e
                    }, o = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                }))
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = se.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var c, u, d, f, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                                        v = t.parentNode,
                                        m = s && t.nodeName.toLowerCase(),
                                        y = !l && !s,
                                        b = !1;
                                    if (v) {
                                        if (i) {
                                            for (; g;) {
                                                for (f = t; f = f[g];)
                                                    if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                            for (b = (p = (c = (u = (d = (f = v)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++b && f === t) {
                                                    u[e] = [T, p, b];
                                                    break
                                                }
                                        } else if (y && (b = p = (c = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                            for (;
                                                (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [T, b]), f !== t)););
                                        return (b -= o) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = O(e, i[a])] = !(n[r] = i[a])
                                })) : function(e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ce((function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(B, "$1"));
                                return r[x] ? ce((function(e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            })),
                            has: ce((function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            })),
                            contains: ce((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) {
                                        return (t.textContent || o(t)).indexOf(e) > -1
                                    }
                            })),
                            lang: ce((function(e) {
                                return U.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve((function() {
                                return [0]
                            })),
                            last: ve((function(e, t) {
                                return [t - 1]
                            })),
                            eq: ve((function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            })),
                            even: ve((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            })),
                            odd: ve((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            })),
                            lt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            })),
                            gt: ve((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            }))
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ye() {}

                function be(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function xe(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function(t, n, l) {
                        var c, u, d, f = [T, s];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = u[i]) && c[0] === T && c[1] === s) return f[2] = c[2];
                                        if (u[i] = f, f[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function we(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, r, o) {
                    for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), c && t.push(s)));
                    return a
                }

                function Ce(e, t, n, r, o, i) {
                    return r && !r[x] && (r = Ce(r)), o && !o[x] && (o = Ce(o, i)), ce((function(i, a, s, l) {
                        var c, u, d, f = [],
                            p = [],
                            h = a.length,
                            g = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? g : Te(g, f, e, s, l),
                            m = n ? o || (i ? e : h || r) ? [] : a : v;
                        if (n && n(v, m, s, l), r)
                            for (c = Te(m, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (m[p[u]] = !(v[p[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = m.length; u--;)(d = m[u]) && c.push(v[u] = d);
                                    o(null, m = [], c, l)
                                }
                                for (u = m.length; u--;)(d = m[u]) && (c = o ? O(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else m = Te(m === a ? m.splice(h, m.length) : m), o ? o(null, a, m, l) : q.apply(a, m)
                    }))
                }

                function Se(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = xe((function(e) {
                            return e === t
                        }), s, !0), d = xe((function(e) {
                            return O(t, e) > -1
                        }), s, !0), f = [function(e, n, r) {
                            var o = !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                            return t = null, o
                        }]; l < i; l++)
                        if (n = r.relative[e[l].type]) f = [xe(we(f), n)];
                        else {
                            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                                return Ce(l > 1 && we(f), l > 1 && be(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(B, "$1"), n, l < o && Se(e.slice(l, o)), o < i && Se(e = e.slice(o)), o < i && be(e))
                            }
                            f.push(n)
                        }
                    return we(f)
                }
                return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) {
                    var n, o, i, a, s, l, c, u = A[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = r.preFilter; s;) {
                        for (a in n && !(o = Y.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(i = [])), n = !1, (o = $.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(B, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = V[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : A(e, l).slice(0)
                }, s = se.compile = function(e, t) {
                    var n, o = [],
                        i = [],
                        s = E[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Se(t[n]))[x] ? o.push(s) : i.push(s);
                        (s = E(e, function(e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                i = function(i, a, s, l, u) {
                                    var d, h, v, m = 0,
                                        y = "0",
                                        b = i && [],
                                        x = [],
                                        w = c,
                                        C = i || o && r.find.TAG("*", u),
                                        S = T += null == w ? 1 : Math.random() || .1,
                                        A = C.length;
                                    for (u && (c = a == p || a || u); y !== A && null != (d = C[y]); y++) {
                                        if (o && d) {
                                            for (h = 0, a || d.ownerDocument == p || (f(d), s = !g); v = e[h++];)
                                                if (v(d, a || p, s)) {
                                                    l.push(d);
                                                    break
                                                }
                                            u && (T = S)
                                        }
                                        n && ((d = !v && d) && m--, i && b.push(d))
                                    }
                                    if (m += y, n && y !== m) {
                                        for (h = 0; v = t[h++];) v(b, x, a, s);
                                        if (i) {
                                            if (m > 0)
                                                for (; y--;) b[y] || x[y] || (x[y] = N.call(l));
                                            x = Te(x)
                                        }
                                        q.apply(l, x), u && !i && x.length > 0 && m + t.length > 1 && se.uniqueSort(l)
                                    }
                                    return u && (T = S, c = w), b
                                };
                            return n ? ce(i) : i
                        }(i, o))).selector = e
                    }
                    return s
                }, l = se.select = function(e, t, n, o) {
                    var i, l, c, u, d, f = "function" == typeof e && e,
                        p = !o && a(e = f.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (i = V.needsContext.test(e) ? 0 : l.length; i-- && (c = l[i], !r.relative[u = c.type]);)
                            if ((d = r.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && me(t.parentNode) || t))) {
                                if (l.splice(i, 1), !(e = o.length && be(l))) return q.apply(n, o), n;
                                break
                            }
                    }
                    return (f || s(e, p))(o, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = x.split("").sort(D).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = ue((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                })), ue((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ue((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ue((function(e) {
                    return null == e.getAttribute("disabled")
                })) || de(P, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                })), se
            }(e);
            w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
            var S = function(e, t, n) {
                    for (var r = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && w(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                A = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                E = w.expr.match.needsContext;

            function k(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function M(e, t, n) {
                return g(t) ? w.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n
                })) : t.nodeType ? w.grep(e, (function(e) {
                    return e === t !== n
                })) : "string" != typeof t ? w.grep(e, (function(e) {
                    return l.call(t, e) > -1 !== n
                })) : w.filter(t, e, n)
            }
            w.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, (function(e) {
                    return 1 === e.nodeType
                })))
            }, w.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                        for (t = 0; t < r; t++)
                            if (w.contains(o[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, o[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(M(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(M(this, e || [], !0))
                },
                is: function(e) {
                    return !!M(this, "string" == typeof e && E.test(e) ? w(e) : e || [], !1).length
                }
            });
            var j, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || j, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), D.test(r[1]) && w.isPlainObject(t))
                            for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = m.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, j = w(m);
            var L = /^(?:parents|prev(?:Until|All))/,
                q = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function H(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            w.fn.extend({
                has: function(e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    }))
                },
                closest: function(e, t) {
                    var n, r = 0,
                        o = this.length,
                        i = [],
                        a = "string" != typeof e && w(e);
                    if (!E.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? w.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return S(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return S(e, "parentNode", n)
                },
                next: function(e) {
                    return H(e, "nextSibling")
                },
                prev: function(e) {
                    return H(e, "previousSibling")
                },
                nextAll: function(e) {
                    return S(e, "nextSibling")
                },
                prevAll: function(e) {
                    return S(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return S(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return S(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return A((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return A(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, (function(e, t) {
                w.fn[e] = function(n, r) {
                    var o = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = w.filter(r, o)), this.length > 1 && (q[e] || w.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o)
                }
            }));
            var O = /[^\x20\t\r\n\f]+/g;

            function P(e) {
                return e
            }

            function R(e) {
                throw e
            }

            function W(e, t, n, r) {
                var o;
                try {
                    e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return w.each(e.match(O) || [], (function(e, n) {
                        t[n] = !0
                    })), t
                }(e) : w.extend({}, e);
                var t, n, r, o, i = [],
                    a = [],
                    s = -1,
                    l = function() {
                        for (o = o || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                    },
                    c = {
                        add: function() {
                            return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                                w.each(n, (function(n, r) {
                                    g(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== x(r) && t(r)
                                }))
                            }(arguments), n && !t && l()), this
                        },
                        remove: function() {
                            return w.each(arguments, (function(e, t) {
                                for (var n;
                                    (n = w.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                            })), this
                        },
                        has: function(e) {
                            return e ? w.inArray(e, i) > -1 : i.length > 0
                        },
                        empty: function() {
                            return i && (i = []), this
                        },
                        disable: function() {
                            return o = a = [], i = n = "", this
                        },
                        disabled: function() {
                            return !i
                        },
                        lock: function() {
                            return o = a = [], n || t || (i = n = ""), this
                        },
                        locked: function() {
                            return !!o
                        },
                        fireWith: function(e, n) {
                            return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return c
            }, w.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        o = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return o.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return w.Deferred((function(t) {
                                    w.each(n, (function(n, r) {
                                        var o = g(e[r[4]]) && e[r[4]];
                                        i[r[1]]((function() {
                                            var e = o && o.apply(this, arguments);
                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            },
                            then: function(t, r, o) {
                                var i = 0;

                                function a(t, n, r, o) {
                                    return function() {
                                        var s = this,
                                            l = arguments,
                                            c = function() {
                                                var e, c;
                                                if (!(t < i)) {
                                                    if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? o ? c.call(e, a(i, n, P, o), a(i, n, R, o)) : (i++, c.call(e, a(i, n, P, o), a(i, n, R, o), a(i, n, P, n.notifyWith))) : (r !== P && (s = void 0, l = [e]), (o || n.resolveWith)(s, l))
                                                }
                                            },
                                            u = o ? c : function() {
                                                try {
                                                    c()
                                                } catch (e) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= i && (r !== R && (s = void 0, l = [e]), n.rejectWith(s, l))
                                                }
                                            };
                                        t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                                    }
                                }
                                return w.Deferred((function(e) {
                                    n[0][3].add(a(0, e, g(o) ? o : P, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : P)), n[2][3].add(a(0, e, g(r) ? r : R))
                                })).promise()
                            },
                            promise: function(e) {
                                return null != e ? w.extend(e, o) : o
                            }
                        },
                        i = {};
                    return w.each(n, (function(e, t) {
                        var a = t[2],
                            s = t[5];
                        o[t[1]] = a.add, s && a.add((function() {
                            r = s
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), i[t[0]] = function() {
                            return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[t[0] + "With"] = a.fireWith
                    })), o.promise(i), t && t.call(i, i), i
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        o = i.call(arguments),
                        a = w.Deferred(),
                        s = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = arguments.length > 1 ? i.call(arguments) : n, --t || a.resolveWith(r, o)
                            }
                        };
                    if (t <= 1 && (W(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(o[n] && o[n].then))) return a.then();
                    for (; n--;) W(o[n], s(n), a.reject);
                    return a.promise()
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, w.readyException = function(t) {
                e.setTimeout((function() {
                    throw t
                }))
            };
            var _ = w.Deferred();

            function F() {
                m.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready()
            }
            w.fn.ready = function(e) {
                return _.then(e).catch((function(e) {
                    w.readyException(e)
                })), this
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || _.resolveWith(m, [w]))
                }
            }), w.ready.then = _.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
            var B = function(e, t, n, r, o, i, a) {
                    var s = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === x(n))
                        for (s in o = !0, n) B(e, t, s, n[s], !0, i, a);
                    else if (void 0 !== r && (o = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                            return c.call(w(e), n)
                        })), t))
                        for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], n) : i
                },
                Y = /^-ms-/,
                $ = /-([a-z])/g;

            function X(e, t) {
                return t.toUpperCase()
            }

            function z(e) {
                return e.replace(Y, "ms-").replace($, X)
            }
            var U = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function V() {
                this.expando = w.expando + V.uid++
            }
            V.uid = 1, V.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[z(t)] = n;
                    else
                        for (r in t) o[z(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(O) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var G = new V,
                Q = new V,
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                K = /[A-Z]/g;

            function Z(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Q.set(e, t, n)
                    } else n = void 0;
                return n
            }
            w.extend({
                hasData: function(e) {
                    return Q.hasData(e) || G.hasData(e)
                },
                data: function(e, t, n) {
                    return Q.access(e, t, n)
                },
                removeData: function(e, t) {
                    Q.remove(e, t)
                },
                _data: function(e, t, n) {
                    return G.access(e, t, n)
                },
                _removeData: function(e, t) {
                    G.remove(e, t)
                }
            }), w.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0],
                        a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Q.get(i), 1 === i.nodeType && !G.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = z(r.slice(5)), Z(i, r, o[r]));
                            G.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each((function() {
                        Q.set(this, e)
                    })) : B(this, (function(t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) || void 0 !== (n = Z(i, e)) ? n : void 0;
                        this.each((function() {
                            Q.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        Q.remove(this, e)
                    }))
                }
            }), w.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!r || Array.isArray(n) ? r = G.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = w._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                        w.dequeue(e, t)
                    }), i)), !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return G.get(e, n) || G.access(e, n, {
                        empty: w.Callbacks("once memory").add((function() {
                            G.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), w.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        w.dequeue(this, e)
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        o = w.Deferred(),
                        i = this,
                        a = this.length,
                        s = function() {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ne = ["Top", "Right", "Bottom", "Left"],
                re = m.documentElement,
                oe = function(e) {
                    return w.contains(e.ownerDocument, e)
                },
                ie = {
                    composed: !0
                };
            re.getRootNode && (oe = function(e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
            });
            var ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
            };

            function se(e, t, n, r) {
                var o, i, a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return w.css(e, t, "")
                    },
                    l = s(),
                    c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; a--;) w.style(e, t, u + c), (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (a = 0), u /= i;
                    u *= 2, w.style(e, t, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = o)), o
            }
            var le = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    o = le[r];
                return o || (t = n.body.appendChild(n.createElement(r)), o = w.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[r] = o, o)
            }

            function ue(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = G.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ae(r) && (o[i] = ce(r))) : "none" !== n && (o[i] = "none", G.set(r, "display", n)));
                for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                return e
            }
            w.fn.extend({
                show: function() {
                    return ue(this, !0)
                },
                hide: function() {
                    return ue(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        ae(this) ? w(this).show() : w(this).hide()
                    }))
                }
            });
            var de, fe, pe = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ge = /^$|^module$|\/(?:java|ecma)script/i;
            de = m.createDocumentFragment().appendChild(m.createElement("div")), (fe = m.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), de.appendChild(fe), h.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", h.option = !!de.lastChild;
            var ve = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function me(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n
            }

            function ye(e, t) {
                for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, h.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
            var be = /<|&#?\w+;/;

            function xe(e, t, n, r, o) {
                for (var i, a, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                    if ((i = e[p]) || 0 === i)
                        if ("object" === x(i)) w.merge(f, i.nodeType ? [i] : i);
                        else if (be.test(i)) {
                    for (a = a || d.appendChild(t.createElement("div")), s = (he.exec(i) || ["", ""])[1].toLowerCase(), l = ve[s] || ve._default, a.innerHTML = l[1] + w.htmlPrefilter(i) + l[2], u = l[0]; u--;) a = a.lastChild;
                    w.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                } else f.push(t.createTextNode(i));
                for (d.textContent = "", p = 0; i = f[p++];)
                    if (r && w.inArray(i, r) > -1) o && o.push(i);
                    else if (c = oe(i), a = me(d.appendChild(i), "script"), c && ye(a), n)
                    for (u = 0; i = a[u++];) ge.test(i.type || "") && n.push(i);
                return d
            }
            var we = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function Se() {
                return !0
            }

            function Ae() {
                return !1
            }

            function Ee(e, t) {
                return e === function() {
                    try {
                        return m.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function ke(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae;
                else if (!o) return e;
                return 1 === i && (a = o, (o = function(e) {
                    return w().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
                    w.event.add(this, t, o, r, n)
                }))
            }

            function De(e, t, n) {
                n ? (G.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, o, a = G.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (a = i.call(arguments), G.set(this, t, a), r = n(this, t), this[t](), a !== (o = G.get(this, t)) || r ? G.set(this, t, !1) : o = {}, a !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                        } else a.length && (G.set(this, t, {
                            value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === G.get(e, t) && w.event.add(e, t, Se)
            }
            w.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, a, s, l, c, u, d, f, p, h, g, v = G.get(e);
                    if (U(e))
                        for (n.handler && (n = (i = n).handler, o = i.selector), o && w.find.matchesSelector(re, o), n.guid || (n.guid = w.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                            }), c = (t = (t || "").match(O) || [""]).length; c--;) p = g = (s = Ce.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = w.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = w.event.special[p] || {}, u = w.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && w.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), w.event.global[p] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, l, c, u, d, f, p, h, g, v = G.hasData(e) && G.get(e);
                    if (v && (l = v.events)) {
                        for (c = (t = (t || "").match(O) || [""]).length; c--;)
                            if (p = g = (s = Ce.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = w.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) u = f[i], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || w.removeEvent(e, p, v.handle), delete l[p])
                            } else
                                for (p in l) w.event.remove(e, p + t[c], n, r, !0);
                        w.isEmptyObject(l) && G.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, a, s = new Array(arguments.length),
                        l = w.event.fix(e),
                        c = (G.get(this, "events") || Object.create(null))[l.type] || [],
                        u = w.event.special[l.type] || {};
                    for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (a = w.event.handlers.call(this, l, c), t = 0;
                            (o = a[t++]) && !l.isPropagationStopped();)
                            for (l.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i, l.data = i.data, void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a, s = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (i = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length), a[o] && i.push(r);
                                i.length && s.push({
                                    elem: c,
                                    handlers: i
                                })
                            }
                    return c = this, l < t.length && s.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && k(t, "input") && De(t, "click", Se), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && k(t, "input") && De(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return pe.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, w.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, w.Event = function(e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp), w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                w.event.special[e] = {
                    setup: function() {
                        return De(this, e, Ee), !1
                    },
                    trigger: function() {
                        return De(this, e), !0
                    },
                    delegateType: t
                }
            })), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === this || w.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), w.fn.extend({
                on: function(e, t, n, r) {
                    return ke(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function() {
                        w.event.remove(this, e, n, t)
                    }))
                }
            });
            var Me = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Le(e, t) {
                return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
            }

            function qe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function He(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Oe(e, t) {
                var n, r, o, i, a, s;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (s = G.get(e).events))
                        for (o in G.remove(t, "handle events"), s)
                            for (n = 0, r = s[o].length; n < r; n++) w.event.add(t, o, s[o][n]);
                    Q.hasData(e) && (i = Q.access(e), a = w.extend({}, i), Q.set(t, a))
                }
            }

            function Pe(e, t, n, r) {
                t = a(t);
                var o, i, s, l, c, u, d = 0,
                    f = e.length,
                    p = f - 1,
                    v = t[0],
                    m = g(v);
                if (m || f > 1 && "string" == typeof v && !h.checkClone && je.test(v)) return e.each((function(o) {
                    var i = e.eq(o);
                    m && (t[0] = v.call(this, o, i.html())), Pe(i, t, n, r)
                }));
                if (f && (i = (o = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                    for (l = (s = w.map(me(o, "script"), qe)).length; d < f; d++) c = o, d !== p && (c = w.clone(c, !0, !0), l && w.merge(s, me(c, "script"))), n.call(e[d], c, d);
                    if (l)
                        for (u = s[s.length - 1].ownerDocument, w.map(s, He), d = 0; d < l; d++) c = s[d], ge.test(c.type || "") && !G.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, u) : b(c.textContent.replace(Ne, ""), c, u))
                }
                return e
            }

            function Re(e, t, n) {
                for (var r, o = t ? w.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && oe(r) && ye(me(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            w.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var r, o, i, a, s, l, c, u = e.cloneNode(!0),
                        d = oe(e);
                    if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (a = me(u), r = 0, o = (i = me(e)).length; r < o; r++) s = i[r], void 0, "input" === (c = (l = a[r]).nodeName.toLowerCase()) && pe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (i = i || me(e), a = a || me(u), r = 0, o = i.length; r < o; r++) Oe(i[r], a[r]);
                        else Oe(e, u);
                    return (a = me(u, "script")).length > 0 && ye(a, !d && me(e, "script")), u
                },
                cleanData: function(e) {
                    for (var t, n, r, o = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (U(n)) {
                            if (t = n[G.expando]) {
                                if (t.events)
                                    for (r in t.events) o[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[G.expando] = void 0
                            }
                            n[Q.expando] && (n[Q.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function(e) {
                    return Re(this, e, !0)
                },
                remove: function(e) {
                    return Re(this, e)
                },
                text: function(e) {
                    return B(this, (function(e) {
                        return void 0 === e ? w.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function() {
                    return Pe(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                    }))
                },
                prepend: function() {
                    return Pe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Le(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return w.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return B(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Me.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Pe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                w.fn[e] = function(e) {
                    for (var n, r = [], o = w(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), w(o[a])[t](n), s.apply(r, n.get());
                    return this.pushStack(r)
                }
            }));
            var We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                Ie = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                _e = function(e, t, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.call(e), t) e.style[o] = i[o];
                    return r
                },
                Fe = new RegExp(ne.join("|"), "i");

            function Be(e, t, n) {
                var r, o, i, a, s = e.style;
                return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Fe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
            }

            function Ye(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                        var t = e.getComputedStyle(u);
                        r = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", i = 12 === n(u.offsetWidth / 3), re.removeChild(c), u = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r, o, i, a, s, l, c = m.createElement("div"),
                    u = m.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(h, {
                    boxSizingReliable: function() {
                        return t(), o
                    },
                    pixelBoxStyles: function() {
                        return t(), a
                    },
                    pixelPosition: function() {
                        return t(), r
                    },
                    reliableMarginLeft: function() {
                        return t(), l
                    },
                    scrollboxSize: function() {
                        return t(), i
                    },
                    reliableTrDimensions: function() {
                        var t, n, r, o;
                        return null == s && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(r), o = e.getComputedStyle(n), s = parseInt(o.height) > 3, re.removeChild(t)), s
                    }
                }))
            }();
            var $e = ["Webkit", "Moz", "ms"],
                Xe = m.createElement("div").style,
                ze = {};

            function Ue(e) {
                return w.cssProps[e] || ze[e] || (e in Xe ? e : ze[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
                        if ((e = $e[n] + t) in Xe) return e
                }(e) || e)
            }
            var Ve = /^(none|table(?!-c[ea]).+)/,
                Ge = /^--/,
                Qe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Je = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Ke(e, t, n) {
                var r = te.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    l = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + ne[a], !0, o)), r ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[a], !0, o), "padding" !== n ? l += w.css(e, "border" + ne[a] + "Width", !0, o) : s += w.css(e, "border" + ne[a] + "Width", !0, o));
                return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5)) || 0), l
            }

            function et(e, t, n) {
                var r = Ie(e),
                    o = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                    i = o,
                    a = Be(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (We.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!h.boxSizingReliable() && o || !h.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === w.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
            }

            function tt(e, t, n, r, o) {
                return new tt.prototype.init(e, t, n, r, o)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Be(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = z(t),
                            l = Ge.test(t),
                            c = e.style;
                        if (l || (t = Ue(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                        "string" == (i = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o), i = "number"), null != n && n == n && ("number" !== i || l || (n += o && o[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, a, s = z(t);
                    return Ge.test(t) || (t = Ue(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Be(e, t, r)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                }
            }), w.each(["height", "width"], (function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Ve.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : _e(e, Qe, (function() {
                            return et(e, t, r)
                        }))
                    },
                    set: function(e, n, r) {
                        var o, i = Ie(e),
                            a = !h.scrollboxSize() && "absolute" === i.position,
                            s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, i),
                            l = r ? Ze(e, t, r, s, i) : 0;
                        return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ze(e, t, "border", !1, i) - .5)), l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, l)
                    }
                }
            })), w.cssHooks.marginLeft = Ye(h.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                w.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ne[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
            })), w.fn.extend({
                css: function(e, t) {
                    return B(this, (function(e, t, n) {
                        var r, o, i = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), o = t.length; a < o; a++) i[t[a]] = w.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), w.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (w.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, w.fx = tt.prototype.init, w.fx.step = {};
            var nt, rt, ot = /^(?:toggle|show|hide)$/,
                it = /queueHooks$/;

            function at() {
                rt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
            }

            function st() {
                return e.setTimeout((function() {
                    nt = void 0
                })), nt = Date.now()
            }

            function lt(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ne[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function ct(e, t, n) {
                for (var r, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function ut(e, t, n) {
                var r, o, i = 0,
                    a = ut.prefilters.length,
                    s = w.Deferred().always((function() {
                        delete l.elem
                    })),
                    l = function() {
                        if (o) return !1;
                        for (var t = nt || st(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
                        return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (function(e, t) {
                        var n, r, o, i, a;
                        for (n in e)
                            if (o = t[r = z(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                                for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                            else t[r] = o
                    }(u, c.opts.specialEasing); i < a; i++)
                    if (r = ut.prefilters[i].call(c, e, u, c.opts)) return g(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(u, ct, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            w.Animation = w.extend(ut, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return se(n.elem, e, te.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g(e) ? (t = e, e = ["*"]) : e = e.match(O);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, o, i, a, s, l, c, u, d = "width" in t || "height" in t,
                            f = this,
                            p = {},
                            h = e.style,
                            g = e.nodeType && ae(e),
                            v = G.get(e, "fxshow");
                        for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, f.always((function() {
                                f.always((function() {
                                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                                }))
                            }))), t)
                            if (o = t[r], ot.test(o)) {
                                if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                    if ("show" !== o || !v || void 0 === v[r]) continue;
                                    g = !0
                                }
                                p[r] = v && v[r] || w.style(e, r)
                            }
                        if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                            for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = G.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (ue([e], !0), c = e.style.display || c, u = w.css(e, "display"), ue([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (f.done((function() {
                                    h.display = c
                                })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function() {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                }))), l = !1, p) l || (v ? "hidden" in v && (g = v.hidden) : v = G.access(e, "fxshow", {
                                display: c
                            }), i && (v.hidden = !g), g && ue([e], !0), f.done((function() {
                                for (r in g || ue([e]), G.remove(e, "fxshow"), p) w.style(e, r, p[r])
                            }))), l = ct(g ? v[r] : 0, r, f), r in v || (v[r] = l.start, g && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                    }
                }), w.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? w.extend({}, e) : {
                        complete: n || !n && t || g(e) && e,
                        duration: e,
                        easing: n && t || t && !g(t) && t
                    };
                    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                    }, r
                }, w.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var o = w.isEmptyObject(e),
                            i = w.speed(t, n, r),
                            a = function() {
                                var t = ut(this, w.extend({}, e), i);
                                (o || G.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                i = w.timers,
                                a = G.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]);
                            else
                                for (o in a) a[o] && a[o].stop && it.test(o) && r(a[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                            !t && n || w.dequeue(this, e)
                        }))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = G.get(this),
                                r = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                i = w.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), w.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, o)
                    }
                })), w.each({
                    slideDown: lt("show"),
                    slideUp: lt("hide"),
                    slideToggle: lt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    w.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                })), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), nt = void 0
                }, w.fx.timer = function(e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function() {
                    rt || (rt = !0, at())
                }, w.fx.stop = function() {
                    rt = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function(t, n) {
                    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                        var o = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(o)
                        }
                    }))
                },
                function() {
                    var e = m.createElement("input"),
                        t = m.createElement("select").appendChild(m.createElement("option"));
                    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = m.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
                }();
            var dt, ft = w.expr.attrHandle;
            w.fn.extend({
                attr: function(e, t) {
                    return B(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        w.removeAttr(this, e)
                    }))
                }
            }), w.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === i && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!h.radioValue && "radio" === t && k(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        o = t && t.match(O);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) e.removeAttribute(n)
                }
            }), dt = {
                set: function(e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = ft[t] || w.find.attr;
                ft[t] = function(e, t, r) {
                    var o, i, a = t.toLowerCase();
                    return r || (i = ft[a], ft[a] = o, o = null != n(e, t, r) ? a : null, ft[a] = i), o
                }
            }));
            var pt = /^(?:input|select|textarea|button)$/i,
                ht = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(O) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function mt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
            }
            w.fn.extend({
                prop: function(e, t) {
                    return B(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[w.propFix[e] || e]
                    }))
                }
            }), w.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), h.optSelected || (w.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                w.propFix[this.toLowerCase()] = this
            })), w.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, a, s, l = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).addClass(e.call(this, t, vt(this)))
                    }));
                    if ((t = mt(e)).length)
                        for (; n = this[l++];)
                            if (o = vt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                                for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                o !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, a, s, l = 0;
                    if (g(e)) return this.each((function(t) {
                        w(this).removeClass(e.call(this, t, vt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = mt(e)).length)
                        for (; n = this[l++];)
                            if (o = vt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                                for (a = 0; i = t[a++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                o !== (s = gt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                        w(this).toggleClass(e.call(this, n, vt(this), t), t)
                    })) : this.each((function() {
                        var t, o, i, a;
                        if (r)
                            for (o = 0, i = w(this), a = mt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = vt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var yt = /\r/g;
            w.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = g(e), this.each((function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = r ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    }))) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : gt(w.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, o = e.options,
                                i = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                l = a ? i + 1 : o.length;
                            for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                                if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = w.makeArray(t), a = o.length; a--;)((r = o[a]).selected = w.inArray(w.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], (function() {
                w.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }, h.checkOn || (w.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), h.focusin = "onfocusin" in e;
            var bt = /^(?:focusinfocus|focusoutblur)$/,
                xt = function(e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function(t, n, r, o) {
                    var i, a, s, l, c, u, f, p, h = [r || m],
                        y = d.call(t, "type") ? t.type : t,
                        b = d.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = p = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                        if (!o && !f.noBubble && !v(r)) {
                            for (l = f.delegateType || y, bt.test(l + y) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                            s === (r.ownerDocument || m) && h.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0;
                            (a = h[i++]) && !t.isPropagationStopped();) p = a, t.type = i > 1 ? l : f.bindType || y, (u = (G.get(a, "events") || Object.create(null))[t.type] && G.get(a, "handle")) && u.apply(a, n), (u = c && a[c]) && u.apply && U(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                        return t.type = y, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !U(r) || c && g(r[y]) && !v(r) && ((s = r[c]) && (r[c] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, xt), r[y](), t.isPropagationStopped() && p.removeEventListener(y, xt), w.event.triggered = void 0, s && (r[c] = s)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t)
                }
            }), w.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        w.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0)
                }
            }), h.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this,
                            o = G.access(r, t);
                        o || r.addEventListener(e, n, !0), G.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this,
                            o = G.access(r, t) - 1;
                        o ? G.access(r, t, o) : (r.removeEventListener(e, n, !0), G.remove(r, t))
                    }
                }
            }));
            var wt = e.location,
                Tt = {
                    guid: Date.now()
                },
                Ct = /\?/;
            w.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
            };
            var St = /\[\]$/,
                At = /\r?\n/g,
                Et = /^(?:submit|button|image|reset|file)$/i,
                kt = /^(?:input|select|textarea|keygen)/i;

            function Dt(e, t, n, r) {
                var o;
                if (Array.isArray(t)) w.each(t, (function(t, o) {
                    n || St.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                }));
                else if (n || "object" !== x(t)) r(e, t);
                else
                    for (o in t) Dt(e + "[" + o + "]", t[o], n, r)
            }
            w.param = function(e, t) {
                var n, r = [],
                    o = function(e, t) {
                        var n = g(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
                    o(this.name, this.value)
                }));
                else
                    for (n in e) Dt(n, e[n], t, o);
                return r.join("&")
            }, w.fn.extend({
                serialize: function() {
                    return w.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !pe.test(e))
                    })).map((function(e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(At, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(At, "\r\n")
                        }
                    })).get()
                }
            });
            var Mt = /%20/g,
                jt = /#.*$/,
                Nt = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                qt = /^(?:GET|HEAD)$/,
                Ht = /^\/\//,
                Ot = {},
                Pt = {},
                Rt = "*/".concat("*"),
                Wt = m.createElement("a");

            function It(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(O) || [];
                    if (g(n))
                        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function _t(e, t, n, r) {
                var o = {},
                    i = e === Pt;

                function a(s) {
                    var l;
                    return o[s] = !0, w.each(e[s] || [], (function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || i || o[c] ? i ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    })), l
                }
                return a(t.dataTypes[0]) || !o["*"] && a("*")
            }

            function Ft(e, t) {
                var n, r, o = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e
            }
            Wt.href = wt.href, w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ft(Ft(e, w.ajaxSettings), t) : Ft(w.ajaxSettings, e)
                },
                ajaxPrefilter: It(Ot),
                ajaxTransport: It(Pt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var r, o, i, a, s, l, c, u, d, f, p = w.ajaxSetup({}, n),
                        h = p.context || p,
                        g = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                        v = w.Deferred(),
                        y = w.Callbacks("once memory"),
                        b = p.statusCode || {},
                        x = {},
                        T = {},
                        C = "canceled",
                        S = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (c) {
                                    if (!a)
                                        for (a = {}; t = Lt.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = a[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? i : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, x[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == c && (p.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (c) S.always(e[S.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return r && r.abort(t), A(0, t), this
                            }
                        };
                    if (v.promise(S), p.url = ((t || p.url || wt.href) + "").replace(Ht, wt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                        l = m.createElement("a");
                        try {
                            l.href = p.url, l.href = l.href, p.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), _t(Ot, p, n, S), c) return S;
                    for (d in (u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !qt.test(p.type), o = p.url.replace(jt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Mt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (Ct.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Nt, "$1"), f = (Ct.test(o) ? "&" : "?") + "_=" + Tt.guid++ + f), p.url = o + f), p.ifModified && (w.lastModified[o] && S.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && S.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || c)) return S.abort();
                    if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = _t(Pt, p, n, S)) {
                        if (S.readyState = 1, u && g.trigger("ajaxSend", [S, p]), c) return S;
                        p.async && p.timeout > 0 && (s = e.setTimeout((function() {
                            S.abort("timeout")
                        }), p.timeout));
                        try {
                            c = !1, r.send(x, A)
                        } catch (e) {
                            if (c) throw e;
                            A(-1, e)
                        }
                    } else A(-1, "No Transport");

                    function A(t, n, a, l) {
                        var d, f, m, x, T, C = n;
                        c || (c = !0, s && e.clearTimeout(s), r = void 0, i = l || "", S.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, a && (x = function(e, t, n) {
                            for (var r, o, i, a, s = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (o in s)
                                    if (s[o] && s[o].test(r)) {
                                        l.unshift(o);
                                        break
                                    }
                            if (l[0] in n) i = l[0];
                            else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        i = o;
                                        break
                                    }
                                    a || (a = o)
                                }
                                i = i || a
                            }
                            if (i) return i !== l[0] && l.unshift(i), n[i]
                        }(p, S, a)), !d && w.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), x = function(e, t, n, r) {
                            var o, i, a, s, l, c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                            for (i = u.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
                                    if ("*" === i) i = l;
                                    else if ("*" !== l && l !== i) {
                                if (!(a = c[l + " " + i] || c["* " + i]))
                                    for (o in c)
                                        if ((s = o.split(" "))[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, x, S, d), d ? (p.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = S.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, d = !(m = x.error))) : (m = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", d ? v.resolveWith(h, [f, C, S]) : v.rejectWith(h, [S, C, m]), S.statusCode(b), b = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? f : m]), y.fireWith(h, [S, C]), u && (g.trigger("ajaxComplete", [S, p]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return S
                },
                getJSON: function(e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }), w.each(["get", "post"], (function(e, t) {
                w[t] = function(e, n, r, o) {
                    return g(n) && (o = o || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e))
                }
            })), w.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), w._evalUrl = function(e, t, n) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        w.globalEval(e, t, n)
                    }
                })
            }, w.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each((function(t) {
                        w(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each((function(n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        w(this).replaceWith(this.childNodes)
                    })), this
                }
            }), w.expr.pseudos.hidden = function(e) {
                return !w.expr.pseudos.visible(e)
            }, w.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, w.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Bt = {
                    0: 200,
                    1223: 204
                },
                Yt = w.ajaxSettings.xhr();
            h.cors = !!Yt && "withCredentials" in Yt, h.ajax = Yt = !!Yt, w.ajaxTransport((function(t) {
                var n, r;
                if (h.cors || Yt && !t.crossDomain) return {
                    send: function(o, i) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout((function() {
                                n && r()
                            }))
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
            })), w.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            })), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), w.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(r, o) {
                        t = w("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), m.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }));
            var $t, Xt = [],
                zt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Xt.pop() || w.expando + "_" + Tt.guid++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
                var o, i, a, s = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + o) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return a || w.error(o + " was not called"), a[0]
                }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
                    a = arguments
                }, r.always((function() {
                    void 0 === i ? w(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Xt.push(o)), a && g(i) && i(a[0]), a = i = void 0
                })), "script"
            })), h.createHTMLDocument = (($t = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), w.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), i = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, i), i && i.length && w(i).remove(), w.merge([], o.childNodes)));
                var r, o, i
            }, w.fn.load = function(e, t, n) {
                var r, o, i, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && w.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    i = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, i || [e.responseText, t, e])
                    }))
                }), this
            }, w.expr.pseudos.animated = function(e) {
                return w.grep(w.timers, (function(t) {
                    return e === t.elem
                })).length
            }, w.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s, l, c = w.css(e, "position"),
                        u = w(e),
                        d = {};
                    "static" === c && (e.style.position = "relative"), s = u.offset(), i = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
                }
            }, w.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        w.offset.setOffset(this, e, t)
                    }));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - w.css(r, "marginTop", !0),
                            left: t.left - o.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                        return e || re
                    }))
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function(r) {
                    return B(this, (function(e, r, o) {
                        var i;
                        if (v(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                    }), e, r, arguments.length)
                }
            })), w.each(["top", "left"], (function(e, t) {
                w.cssHooks[t] = Ye(h.pixelPosition, (function(e, n) {
                    if (n) return n = Be(e, t), We.test(n) ? w(e).position()[t] + "px" : n
                }))
            })), w.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    w.fn[r] = function(o, i) {
                        var a = arguments.length && (n || "boolean" != typeof o),
                            s = n || (!0 === o || !0 === i ? "margin" : "border");
                        return B(this, (function(t, n, o) {
                            var i;
                            return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? w.css(t, n, s) : w.style(t, n, o, s)
                        }), t, a ? o : void 0, a)
                    }
                }))
            })), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                w.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), w.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                w.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.proxy = function(e, t) {
                var n, r, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = i.call(arguments, 2), (o = function() {
                    return e.apply(t || this, r.concat(i.call(arguments)))
                }).guid = e.guid = e.guid || w.guid++, o
            }, w.holdReady = function(e) {
                e ? w.readyWait++ : w.ready(!0)
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = g, w.isWindow = v, w.camelCase = z, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, w.trim = function(e) {
                return null == e ? "" : (e + "").replace(Ut, "")
            }, "function" == typeof r && r.amd && r("jquery", [], (function() {
                return w
            }));
            var Vt = e.jQuery,
                Gt = e.$;
            return w.noConflict = function(t) {
                return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Vt), w
            }, void 0 === t && (e.jQuery = e.$ = w), w
        }))
    }, {
        process: "pBGv"
    }],
    IxO8: [function(e, t, n) {
        t.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, {}],
    V44w: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = s(e("@babel/runtime/helpers/classCallCheck")),
            o = s(e("@babel/runtime/helpers/createClass")),
            i = s(e("@babel/runtime/helpers/defineProperty")),
            a = s(e("jquery"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function() {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, r.default)(this, e), (0, i.default)(this, "selectableAreaWrapper", null), (0, i.default)(this, "selectableArea", null), (0, i.default)(this, "isAreaSelected", !1), (0, i.default)(this, "clientX", 100), (0, i.default)(this, "clientY", 100), (0, i.default)(this, "mouseDowned", !1), (0, i.default)(this, "mouseDownedOnSelectedArea", !1), (0, i.default)(this, "selectedAreaX", 100), (0, i.default)(this, "selectedAreaY", 100), (0, i.default)(this, "mouseDownedOnEdge", !1), (0, i.default)(this, "handleWrapperMouseDown", (function(e) {
                    t.isAreaSelected || (t.isAreaSelected = !0), t.mouseDowned = !0, t.clientX = e.clientX, t.clientY = e.clientY, t.hideMarker(), t.showSelectedArea()
                })), (0, i.default)(this, "handleWrapperMouseRelease", (function(e) {
                    var n = Math.abs(t.clientX - e.clientX),
                        r = Math.abs(t.clientY - e.clientY);
                    n < 20 && r < 20 && t.showSelectedArea(!0), t.mouseDownedOnEdge && t.resetCropping(), t.mouseDowned && (t.mouseDowned = !1, setTimeout((function() {
                        t.showMarker()
                    }), 250))
                })), (0, i.default)(this, "handleWrapperMouseMove", (function(e) {
                    if (t.mouseDowned) {
                        var n = Math.abs(t.clientX - e.clientX),
                            r = Math.abs(t.clientY - e.clientY);
                        (0, a.default)(".rb-screenshot-selected-area").css({
                            width: n + "px",
                            height: r + "px"
                        }), t.drawBackdropShapes()
                    }
                })), (0, i.default)(this, "handleSelectedAreaMouseDown", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.mouseDownedOnSelectedArea = !0, t.selectedAreaX = e.clientX, t.selectedAreaY = e.clientY
                })), (0, i.default)(this, "handleSelectedAreaMouseMove", (function(e) {
                    if (e.preventDefault(), e.stopPropagation(), t.mouseDownedOnSelectedArea) {
                        var n = (0, a.default)(".rb-screenshot-selected-area").offset(),
                            r = n.top,
                            o = n.left;
                        (0, a.default)(".rb-screenshot-selected-area").css({
                            top: r + e.clientY - t.selectedAreaY,
                            left: o + e.clientX - t.selectedAreaX
                        }), t.drawBackdropShapes(), t.selectedAreaX = e.clientX, t.selectedAreaY = e.clientY
                    }
                })), (0, i.default)(this, "handleSelectedAreaMouseRelease", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.mouseDownedOnEdge && t.resetCropping(), t.mouseDowned && t.handleWrapperMouseRelease(e), setTimeout((function() {
                        t.mouseDownedOnSelectedArea = !1
                    }), 300)
                })), (0, i.default)(this, "handleSelectedAreaMouseLeave", (function() {
                    t.mouseDownedOnSelectedArea = !1
                })), (0, i.default)(this, "onEdgeDragStart", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.mouseDownedOnEdge = !0, t.selectedAreaX = e.clientX, t.selectedAreaY = e.clientY, t.direction = (0, a.default)(e.currentTarget).data("direction")
                })), (0, i.default)(this, "resetCropping", (function() {
                    t.mouseDownedOnEdge = !1, t.direction = null
                })), (0, i.default)(this, "onEdgeDragMove", (function(e) {
                    if (e.preventDefault(), e.stopPropagation(), t.mouseDownedOnEdge) {
                        var n = (0, a.default)(".rb-screenshot-selected-area").offset(),
                            r = n.top,
                            o = n.left,
                            i = t.getSelectedAreaSize(),
                            s = i.width,
                            l = i.height,
                            c = r,
                            u = o,
                            d = s,
                            f = l,
                            p = e.clientY - t.selectedAreaY,
                            h = e.clientX - t.selectedAreaX;
                        "top-left" == t.direction && (c = r + p, u = o + h, d = h < 0 ? s + Math.abs(h) : s - Math.abs(h), f = p < 0 ? l + Math.abs(p) : l - Math.abs(p)), "top-right" === t.direction && (c = r + p, d = h < 0 ? s - Math.abs(h) : s + Math.abs(h), f = p < 0 ? l + Math.abs(p) : l - Math.abs(p)), "bottom-right" === t.direction && (d = h < 0 ? s - Math.abs(h) : s + Math.abs(h), f = p < 0 ? l - Math.abs(p) : l + Math.abs(p)), "bottom-left" === t.direction && (u = o + h, d = h < 0 ? s + Math.abs(h) : s - Math.abs(h), f = p < 0 ? l - Math.abs(p) : l + Math.abs(p)), "left" === t.direction && (u = o + h, d = h < 0 ? s + Math.abs(h) : s - Math.abs(h)), "right" === t.direction && (d = h < 0 ? s - Math.abs(h) : s + Math.abs(h)), "top" === t.direction && (c = r + p, f = p < 0 ? l + Math.abs(p) : l - Math.abs(p)), "bottom" === t.direction && (f = p < 0 ? l - Math.abs(p) : l + Math.abs(p)), (0, a.default)(".rb-screenshot-selected-area").css({
                            top: c,
                            left: u,
                            width: d,
                            height: f
                        }), t.drawBackdropShapes(), t.updateSizeLabel(), t.selectedAreaY = e.clientY, t.selectedAreaX = e.clientX
                    }
                })), (0, i.default)(this, "onEdgeDragEnd", (function() {
                    event.preventDefault(), event.stopPropagation(), t.mouseDownedOnEdge = !1
                })), this.handleWrapperMouseDown = this.handleWrapperMouseDown.bind(this), this.handleWrapperMouseMove = this.handleWrapperMouseMove.bind(this), this.handleWrapperMouseRelease = this.handleWrapperMouseRelease.bind(this), this.handleSelectedAreaMouseDown = this.handleSelectedAreaMouseDown.bind(this), this.handleSelectedAreaMouseMove = this.handleSelectedAreaMouseMove.bind(this), this.handleSelectedAreaMouseRelease = this.handleSelectedAreaMouseRelease.bind(this), this.handleSelectedAreaMouseLeave = this.handleSelectedAreaMouseLeave.bind(this), this.onEdgeDragStart = this.onEdgeDragStart.bind(this), this.onEdgeDragMove = this.onEdgeDragMove.bind(this), this.onEdgeDragEnd = this.onEdgeDragEnd.bind(this), this.clearEvent = this.clearEvent.bind(this), this.unmountSelectableArea = this.unmountSelectableArea.bind(this), this.onCapture = this.onCapture.bind(this), this.onCopy = this.onCopy.bind(this), this.dependentServiceManager = n
            }
            return (0, o.default)(e, [{
                key: "getScrollAreaSize",
                value: function() {
                    return {
                        scrollWidth: document.scrollingElement.scrollWidth,
                        scrollHeight: document.scrollingElement.scrollHeight
                    }
                }
            }, {
                key: "drawBackdropShapes",
                value: function() {
                    if (this.isAreaSelected) {
                        var e = (0, a.default)(".rb-screenshot-selected-area").offset(),
                            t = e.top,
                            n = e.left,
                            r = (0, a.default)(".rb-screenshot-selected-area").width(),
                            o = (0, a.default)(".rb-screenshot-selected-area").height(),
                            i = this.getScrollAreaSize(),
                            s = i.scrollWidth,
                            l = i.scrollHeight;
                        ["left", "right", "top", "bottom"].forEach((function(e) {
                            "left" === e && (0, a.default)("".concat(".rb-screenshot-backdrop-").concat(e)).css({
                                top: 0,
                                left: 0,
                                width: "".concat(n, "px"),
                                height: "".concat(l, "px")
                            }), "right" === e && (0, a.default)("".concat(".rb-screenshot-backdrop-").concat(e)).css({
                                top: 0,
                                right: 0,
                                left: "auto",
                                width: "".concat(s - n - r, "px"),
                                height: "".concat(l, "px")
                            }), "top" === e && (0, a.default)("".concat(".rb-screenshot-backdrop-").concat(e)).css({
                                top: 0,
                                left: n,
                                width: "".concat(r, "px"),
                                height: "".concat(t, "px")
                            }), "bottom" === e && (0, a.default)("".concat(".rb-screenshot-backdrop-").concat(e)).css({
                                top: "".concat(t + o, "px"),
                                left: n,
                                width: "".concat(r, "px"),
                                height: "".concat(l - o - t, "px")
                            })
                        }))
                    }
                }
            }, {
                key: "getSelectedAreaSize",
                value: function() {
                    return {
                        width: (0, a.default)(".rb-screenshot-selected-area").width(),
                        height: (0, a.default)(".rb-screenshot-selected-area").height()
                    }
                }
            }, {
                key: "prepareArea",
                value: function() {
                    var e = this.getScrollAreaSize(),
                        t = e.scrollWidth,
                        n = e.scrollHeight;
                    return '<div class="rb-screenshot-selectable-area-wrapper" style="width:'.concat(t, "px;height: ").concat(n, 'px;">\n        <div class="rb-screenshot-backdrop-left"></div>\n        <div class="rb-screenshot-backdrop-top"></div>\n        <div class="rb-screenshot-backdrop-right"></div>\n        <div class="rb-screenshot-backdrop-bottom"></div>\n        <div class="rb-screenshot-selected-area">\n            <div class="rb-screenshot-selected-area-size"></div>\n            <div class="rb-screenshot-dot-top-left" data-direction="top-left"></div>\n            <div class="rb-screenshot-dot-top-right" data-direction="top-right"></div>\n            <div class="rb-screenshot-dot-bottom-right" data-direction="bottom-right"></div>\n            <div class="rb-screenshot-dot-bottom-left" data-direction="bottom-left"></div>\n            <div class="rb-screenshot-bottom-line" data-direction="bottom"></div>\n            <div class="rb-screenshot-top-line" data-direction="top"></div>\n            <div class="rb-screenshot-right-line" data-direction="right"></div>\n            <div class="rb-screenshot-left-line" data-direction="left"></div>\n            <div class="rb-screenshot-selectable-area-action-group">\n                <div class="rb-screenshot-btn rb-screenshot-cancel">Cancel</div>\n                <div class="rb-screenshot-btn rb-screenshot-copy">Copy</div>\n                <div class="rb-screenshot-btn rb-screenshot-capture">Copy Text</div>\n            </div>\n        </div>\n    </div>')
                }
            }, {
                key: "showSelectedArea",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = document.documentElement.scrollTop,
                        n = document.documentElement.scrollLeft;
                    (0, a.default)(".rb-screenshot-selected-area").width(0).height(0), (0, a.default)(".rb-screenshot-selected-area").css({
                        display: "block",
                        left: "".concat(n + this.clientX, "px"),
                        top: "".concat(t + this.clientY, "px")
                    }), (0, a.default)(".rb-screenshot-selectable-area-wrapper").css({
                        background: "transparent"
                    }), e && (0, a.default)(".rb-screenshot-selected-area").width(200).height(200), this.drawBackdropShapes()
                }
            }, {
                key: "hideMarker",
                value: function() {
                    (0, a.default)(".rb-screenshot-selectable-area-wrapper").removeClass("withMarker")
                }
            }, {
                key: "updateSizeLabel",
                value: function() {
                    var e = this.getSelectedAreaSize(),
                        t = e.width,
                        n = e.height;
                    (0, a.default)(".rb-screenshot-selected-area-size").text("".concat(parseInt(t), " X ").concat(parseInt(n)))
                }
            }, {
                key: "showMarker",
                value: function() {
                    this.hideMarker(), this.updateSizeLabel(), (0, a.default)(".rb-screenshot-selectable-area-wrapper").addClass("withMarker")
                }
            }, {
                key: "onCapture",
                value: function() {
                    var e = this,
                        t = this.getSelectedArea();
                    this.hideMarker(), setTimeout((function() {
                        e.unmountSelectableArea(), e.dependentServiceManager && "function" == typeof e.dependentServiceManager.onCapture && e.dependentServiceManager.onCapture(t)
                    }), 100)
                }
            }, {
                key: "onCopy",
                value: function() {
                    var e = this,
                        t = this.getSelectedArea();
                    this.hideMarker(), setTimeout((function() {
                        e.unmountSelectableArea(), e.dependentServiceManager && "function" == typeof e.dependentServiceManager.onCopy && e.dependentServiceManager.onCopy(t)
                    }), 100)
                }
            }, {
                key: "initEvent",
                value: function() {
                    (0, a.default)(document).on("mousedown", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseDown), (0, a.default)(document).on("mouseup", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseRelease), (0, a.default)(document).on("mousemove", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseMove), (0, a.default)(document).on("mousedown", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseDown), (0, a.default)(document).on("mousemove", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseMove), (0, a.default)(document).on("mouseup", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseRelease), (0, a.default)(document).on("mouseleave", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseLeave), (0, a.default)(document).on("mousedown", ".rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line\n            ", this.onEdgeDragStart), (0, a.default)(document).on("mousemove", ".rb-screenshot-selectable-area-wrapper,\n            .rb-screenshot-selected-area,\n            .rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line\n            ", this.onEdgeDragMove), (0, a.default)(document).on("mouseup", ".rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line\n            ", this.onEdgeDragEnd), (0, a.default)(document).on("click", ".rb-screenshot-cancel", this.unmountSelectableArea), (0, a.default)(document).on("click", ".rb-screenshot-capture", this.onCapture), (0, a.default)(document).on("click", ".rb-screenshot-copy", this.onCopy)
                }
            }, {
                key: "clearEvent",
                value: function() {
                    (0, a.default)(document).off("mousedown", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseDown), (0, a.default)(document).off("mouseup", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseRelease), (0, a.default)(document).off("mousemove", ".rb-screenshot-selectable-area-wrapper", this.handleWrapperMouseMove), (0, a.default)(document).off("mousedown", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseDown), (0, a.default)(document).off("mousemove", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseMove), (0, a.default)(document).off("mouseup", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseRelease), (0, a.default)(document).off("mouseleave", ".rb-screenshot-selected-area", this.handleSelectedAreaMouseLeave), (0, a.default)(document).off("mousedown", ".rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line\n            ", this.onEdgeDragStart), (0, a.default)(document).off("mousemove", ".rb-screenshot-selectable-area-wrapper,\n            .rb-screenshot-selected-area,\n            .rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line", this.onEdgeDragMove), (0, a.default)(document).off("mouseup", ".rb-screenshot-dot-top-left,\n            .rb-screenshot-dot-top-right,\n            .rb-screenshot-dot-bottom-left,\n            .rb-screenshot-dot-bottom-right,\n            .rb-screenshot-top-line,\n            .rb-screenshot-right-line,\n            .rb-screenshot-bottom-line,\n            .rb-screenshot-left-line", this.onEdgeDragEnd), (0, a.default)(document).off("click", ".rb-screenshot-cancel", this.unmountSelectableArea), (0, a.default)(document).off("click", ".rb-screenshot-capture", this.onCapture), (0, a.default)(document).off("click", ".rb-screenshot-copy", this.onCopy)
                }
            }, {
                key: "mountSelectableArea",
                value: function() {
                    (0, a.default)(".rb-screenshot-selectable-area-placeholder").length || ((0, a.default)("body").append('<div class="rb-screenshot-selectable-area-placeholder"></div>'), (0, a.default)(".rb-screenshot-selectable-area-placeholder").append(this.prepareArea()), this.initEvent(), this.dependentServiceManager && "function" == typeof this.dependentServiceManager.onMount && this.dependentServiceManager.onMount())
                }
            }, {
                key: "unmountSelectableArea",
                value: function() {
                    (0, a.default)(".rb-screenshot-selectable-area-placeholder").remove(), this.clearEvent(), this.hideMarker(), this.dependentServiceManager && "function" == typeof this.dependentServiceManager.onDestroy && this.dependentServiceManager.onDestroy()
                }
            }, {
                key: "getSelectedArea",
                value: function() {
                    var e = this.getSelectedAreaSize(),
                        t = e.width,
                        n = e.height,
                        r = (0, a.default)(".rb-screenshot-selected-area").offset(),
                        o = r.top,
                        i = r.left;
                    return {
                        width: t,
                        height: n,
                        top: o - window.scrollY,
                        left: i
                    }
                }
            }]), e
        }();
        n.default = l
    }, {
        "@babel/runtime/helpers/classCallCheck": "fcMS",
        "@babel/runtime/helpers/createClass": "P8NW",
        "@babel/runtime/helpers/defineProperty": "IxO8",
        jquery: "juYr"
    }],
    FFEG: [function(e, t, n) {
        "use strict";
        var r = s(e("@babel/runtime/helpers/classCallCheck")),
            o = s(e("@babel/runtime/helpers/createClass")),
            i = s(e("jquery")),
            a = s(e("./vendors/AreaSelectionManager"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }! function(e) {
            if (self.window === top.window) {
                var t, n, i = function() {
                        function t() {
                            (0, r.default)(this, t), this.showToastMessage = this.showToastMessage.bind(this)
                        }
                        return (0, o.default)(t, [{
                            key: "showToastMessage",
                            value: function(t) {
                                e(".rb-toast-message").text(t), e(".rb-toast-message").addClass("rb-message-shown"), setTimeout((function() {
                                    e(".rb-toast-message").removeClass("rb-message-shown")
                                }), 2e3)
                            }
                        }, {
                            key: "onCapture",
                            value: function(e) {
                                chrome.runtime.sendMessage({
                                    action: "rb_capture_selected_area",
                                    selectedArea: e
                                })
                            }
                        }, {
                            key: "onCopy",
                            value: function(e) {
                                this.showToastMessage("Screenshot has been Copied!"), chrome.runtime.sendMessage({
                                    action: "rb_capture_and_copy_selected_area",
                                    selectedArea: e
                                })
                            }
                        }]), t
                    }(),
                    s = new a.default(new i),
                    l = 0,
                    c = window.scrollX,
                    u = window.scrollY,
                    d = !1,
                    f = null,
                    p = 0,
                    h = [],
                    g = !1,
                    v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
                        setTimeout((function() {
                            chrome.runtime.sendMessage(e())
                        }), t)
                    },
                    m = function() {
                        e.each(e("*"), (function(e, t) {
                            var n = getComputedStyle(t).position;
                            if (n && ["fixed", "sticky"].includes(n)) {
                                var r = t.style.cssText,
                                    o = "fixed" === n ? "absolute" : "static";
                                t.style.cssText = r + " position:".concat(o, " !important"), h.push({
                                    element: t,
                                    cssText: r
                                })
                            }
                        }))
                    },
                    y = {
                        enableAreaSelection: function() {
                            ! function() {
                                if (e("head").length && !e("#rb-screenshot-style").length) {
                                    var t = chrome.extension.getURL("/css/injectable.css"),
                                        n = '<link rel="stylesheet" type="text/css" id="rb-screenshot-style" href="'.concat(t, '">');
                                    e("head").append(n)
                                }
                                e("body").length && !e(".rb-toast-message").length && e("body").append('<div class="rb-toast-message">Message</div>')
                            }(), s.mountSelectableArea()
                        },
                        requestFullPage: function() {
                            if (!0 !== g) {
                                if (e("#rb-reset-transition-css").length || e("head").append('<style id="rb-reset-transition-css" type="text/css">\n        *{transition: none !important; transition-delay: 0s !important; animation-duration: 0s !important; animation-delay: 0s !important;}body::-webkit-scrollbar {display: none;}\n        </style>'), m(), !d) return d = !0, l = document.scrollingElement.scrollHeight, c = window.scrollX, u = window.scrollY, f || (f = setInterval((function() {
                                    m()
                                }), 50)), window.scrollTo(0, 0), p = 0, void v((function() {
                                    return {
                                        action: "capture_current_viewport",
                                        offsetY: window.scrollY,
                                        scrollHeight: l,
                                        windowHeight: window.innerHeight
                                    }
                                }));
                                window.scrollTo(0, window.scrollY + window.innerHeight), window.scrollY + window.innerHeight >= l || p === window.scrollY || window.screenY > 3e4 ? v((function() {
                                    return d = !1, {
                                        action: "finish_full_page_capture",
                                        offsetY: window.scrollY,
                                        scrollHeight: l,
                                        windowHeight: window.innerHeight
                                    }
                                })) : v((function() {
                                    return p = window.scrollY, {
                                        action: "capture_current_viewport",
                                        offsetY: window.scrollY,
                                        scrollHeight: l,
                                        windowHeight: window.innerHeight
                                    }
                                }))
                            } else g = !1
                        },
                        fullPageCapturingFinished: function(t) {
                            var n = t.isForcefully;
                            f && clearInterval(f), n && (g = !0), h.forEach((function(e) {
                                var t = e.element,
                                    n = e.cssText;
                                t.style.cssText = n
                            })), h = [], e("#rb-reset-transition-css").length && e("#rb-reset-transition-css").remove(), p = 0, d && (d = !1), window.scrollTo(c, u)
                        },
                        copyToClipBoard: function(e) {
                            var t = e.imageURL;
                            if (t) {
                                var n = document.createElement("img"),
                                    r = document.createElement("canvas"),
                                    o = r.getContext("2d");
                                n.onload = function() {
                                    r.width = n.width, r.height = n.height, o.drawImage(n, 0, 0), r.toBlob((function(e) {
                                        var t = new ClipboardItem({
                                            "image/png": e
                                        });
                                        navigator.clipboard.write([t]).catch((function(e) {}))
                                    }))
                                }, n.src = t
                            }
                        },
                        fullPageCapturingFailed: function() {
                            var t = '\n            <div class="rb-screenshot-fullpage-capture-failed" style="position: absolute; top:'.concat(window.scrollY + 100, 'px; left: 50%; right:0;transform:translateX(-50%); width: 300px;border: 1px solid #ccc;padding: 20px;font-family:arial, sans-sarif;font-size:16px;background:#fff;box-shadow:0px 3px 5px 2px rgba(0,0,0,.4);z-index:9999999999;color:#fff;font-weight:bold;background:#bf0c0c;line-height:150%;text-shadow:1px 1px 1px rgba(0,0,0,.5);border-radius:4px;text-align:center">\n                 Oops!! Failed to capture the full page. Size of the screenshot was too large to process.\n            </div>\n            ');
                            e("body").append(t), setTimeout((function() {
                                e(".rb-screenshot-fullpage-capture-failed").remove()
                            }), 6e3)
                        }
                    };
                (t = function() {
                    window.IS_CONTENT_SCRIPT_LOADED_RB_SCREENSHOT = !0, chrome.runtime.onMessage.addListener((function(e) {
                        var t = e.action;
                        t in y && y[t](e)
                    }))
                }, n = !1, function() {
                    n || (t(), n = !0)
                })()
            }
        }(i.default)
    }, {
        "@babel/runtime/helpers/classCallCheck": "fcMS",
        "@babel/runtime/helpers/createClass": "P8NW",
        jquery: "juYr",
        "./vendors/AreaSelectionManager": "V44w"
    }]
}, {}, ["FFEG"]);