/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
(function() {
    var f = function(a, b) {
            function d() {}
            d.prototype = b.prototype;
            a.prototype = new d;
            for (var c in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, c);
                    e && Object.defineProperty(a, c, e)
                } else a[c] = b[c]
        },
        g = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
            if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = d.value)
        },
        k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global &&
        null != global ? global : this,
        l = function(a, b) {
            if (b) {
                var d = k;
                a = a.split(".");
                for (var c = 0; c < a.length - 1; c++) {
                    var e = a[c];
                    e in d || (d[e] = {});
                    d = d[e]
                }
                a = a[a.length - 1];
                c = d[a];
                b = b(c);
                b != c && null != b && g(d, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        },
        n = function() {
            n = function() {};
            k.Symbol || (k.Symbol = q)
        },
        t = 0,
        q = function(a) {
            return "jscomp_symbol_" + (a || "") + t++
        },
        v = function() {
            n();
            var a = k.Symbol.iterator;
            a || (a = k.Symbol.iterator = k.Symbol("iterator"));
            "function" != typeof Array.prototype[a] && g(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return u(this)
                }
            });
            v = function() {}
        },
        u = function(a) {
            var b = 0;
            return w(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        },
        w = function(a) {
            v();
            a = {
                next: a
            };
            a[k.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        x = function(a) {
            v();
            var b = a[Symbol.iterator];
            return b ? b.call(a) : u(a)
        };
    l("Promise", function(a) {
        function b() {
            this.a = null
        }
        if (a) return a;
        b.prototype.b = function(a) {
            null == this.a && (this.a = [], this.f());
            this.a.push(a)
        };
        b.prototype.f = function() {
            var a = this;
            this.c(function() {
                a.h()
            })
        };
        var d = k.setTimeout;
        b.prototype.c = function(a) {
            d(a, 0)
        };
        b.prototype.h = function() {
            for (; this.a && this.a.length;) {
                var a = this.a;
                this.a = [];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    delete a[b];
                    try {
                        c()
                    } catch (r) {
                        this.g(r)
                    }
                }
            }
            this.a = null
        };
        b.prototype.g = function(a) {
            this.c(function() {
                throw a;
            })
        };
        var c = function(a) {
            this.b =
                0;
            this.h = void 0;
            this.a = [];
            var b = this.f();
            try {
                a(b.resolve, b.reject)
            } catch (p) {
                b.reject(p)
            }
        };
        c.prototype.f = function() {
            function a(a) {
                return function(d) {
                    c || (c = !0, a.call(b, d))
                }
            }
            var b = this,
                c = !1;
            return {
                resolve: a(this.aa),
                reject: a(this.g)
            }
        };
        c.prototype.aa = function(a) {
            if (a === this) this.g(new TypeError("A Promise cannot resolve to itself"));
            else if (a instanceof c) this.ba(a);
            else {
                var b;
                a: switch (typeof a) {
                    case "object":
                        b = null != a;
                        break a;
                    case "function":
                        b = !0;
                        break a;
                    default:
                        b = !1
                }
                b ? this.$(a) : this.m(a)
            }
        };
        c.prototype.$ =
            function(a) {
                var b = void 0;
                try {
                    b = a.then
                } catch (p) {
                    this.g(p);
                    return
                }
                "function" == typeof b ? this.ca(b, a) : this.m(a)
            };
        c.prototype.g = function(a) {
            this.o(2, a)
        };
        c.prototype.m = function(a) {
            this.o(1, a)
        };
        c.prototype.o = function(a, b) {
            if (0 != this.b) throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.b);
            this.b = a;
            this.h = b;
            this.v()
        };
        c.prototype.v = function() {
            if (null != this.a) {
                for (var a = this.a, b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
                this.a = null
            }
        };
        var e = new b;
        c.prototype.ba = function(a) {
            var b = this.f();
            a.c(b.resolve, b.reject)
        };
        c.prototype.ca = function(a, b) {
            var c = this.f();
            try {
                a.call(b, c.resolve, c.reject)
            } catch (r) {
                c.reject(r)
            }
        };
        c.prototype.then = function(a, b) {
            function d(a, b) {
                return "function" == typeof a ? function(b) {
                    try {
                        e(a(b))
                    } catch (V) {
                        h(V)
                    }
                } : b
            }
            var e, h, m = new c(function(a, b) {
                e = a;
                h = b
            });
            this.c(d(a, e), d(b, h));
            return m
        };
        c.prototype.catch = function(a) {
            return this.then(void 0, a)
        };
        c.prototype.c = function(a, b) {
            function c() {
                switch (d.b) {
                    case 1:
                        a(d.h);
                        break;
                    case 2:
                        b(d.h);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            d.b);
                }
            }
            var d = this;
            null == this.a ? e.b(c) : this.a.push(function() {
                e.b(c)
            })
        };
        c.resolve = function(a) {
            return a instanceof c ? a : new c(function(b) {
                b(a)
            })
        };
        c.reject = function(a) {
            return new c(function(b, c) {
                c(a)
            })
        };
        c.b = function(a) {
            return new c(function(b, d) {
                for (var e = x(a), h = e.next(); !h.done; h = e.next()) c.resolve(h.value).c(b, d)
            })
        };
        c.a = function(a) {
            var b = x(a),
                d = b.next();
            return d.done ? c.resolve([]) : new c(function(a, e) {
                function h(b) {
                    return function(c) {
                        m[b] = c;
                        p--;
                        0 == p && a(m)
                    }
                }
                var m = [],
                    p = 0;
                do m.push(void 0), p++, c.resolve(d.value).c(h(m.length -
                    1), e), d = b.next(); while (!d.done)
            })
        };
        c.$jscomp$new$AsyncExecutor = function() {
            return new b
        };
        return c
    });
    l("Array.prototype.findIndex", function(a) {
        return a ? a : function(a, d) {
            a: {
                var b = this;b instanceof String && (b = String(b));
                for (var e = b.length, h = 0; h < e; h++)
                    if (a.call(d, b[h], h, b)) {
                        a = h;
                        break a
                    }
                a = -1
            }
            return a
        }
    });
    l("Object.assign", function(a) {
        return a ? a : function(a, d) {
            for (var b = 1; b < arguments.length; b++) {
                var e = arguments[b];
                if (e)
                    for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h])
            }
            return a
        }
    });
    var y = this,
        z = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var d = Object.prototype.toString.call(a);
                    if ("[object Window]" == d) return "object";
                    if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        A = function(a, b) {
            function d() {}
            d.prototype = b.prototype;
            a.ha = b.prototype;
            a.prototype = new d;
            a.da = function(a, d, h) {
                for (var c = Array(arguments.length - 2), e = 2; e < arguments.length; e++) c[e - 2] = arguments[e];
                return b.prototype[d].apply(a, c)
            }
        };
    var B = {
            i: "only-available-in-window",
            w: "only-available-in-sw",
            R: "should-be-overriden",
            j: "bad-sender-id",
            O: "permission-default",
            N: "permission-blocked",
            W: "unsupported-browser",
            J: "notifications-blocked",
            D: "failed-serviceworker-registration",
            l: "sw-registration-expected",
            G: "get-subscription-failed",
            I: "invalid-saved-token",
            s: "sw-reg-redundant",
            S: "token-subscribe-failed",
            U: "token-subscribe-no-token",
            T: "token-subscribe-no-push-set",
            X: "use-sw-before-get-token",
            H: "invalid-delete-token",
            C: "delete-token-not-found",
            A: "bg-handler-function-expected",
            M: "no-window-client-to-msg",
            V: "unable-to-resubscribe",
            L: "no-fcm-token-for-resubscribe",
            F: "failed-to-delete-token"
        },
        C = {},
        D = (C[B.i] = "This method is available in a Window context.", C[B.w] = "This method is available in a service worker context.", C[B.R] = "This method should be overriden by extended classes.", C[B.j] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", C[B.O] = "The required permissions were not granted and dismissed instead.",
            C[B.N] = "The required permissions were not granted and blocked instead.", C[B.W] = "This browser doesn't support the API's required to use the firebase SDK.", C[B.J] = "Notifications have been blocked.", C[B.D] = "We are unable to register the default service worker. {$browserErrorMessage}", C[B.l] = "A service worker registration was the expected input.", C[B.G] = "There was an error when trying to get any existing Push Subscriptions.", C[B.I] = "Unable to access details of the saved token.", C[B.s] = "The service worker being used for push was made redundant.",
            C[B.S] = "A problem occured while subscribing the user to FCM: {$message}", C[B.U] = "FCM returned no token when subscribing the user to push.", C[B.T] = "FCM returned an invalid response when getting an FCM token.", C[B.X] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", C[B.H] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", C[B.C] = "The deletion attempt for token could not be performed as the token was not found.", C[B.A] =
            "The input to setBackgroundMessageHandler() must be a function.", C[B.M] = "An attempt was made to message a non-existant window client.", C[B.V] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", C[B.L] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", C[B.F] = "Unable to delete the currently saved token.", C);
    var E = {
        userVisibleOnly: !0,
        applicationServerKey: new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110])
    };
    var F = {
            u: "firebase-messaging-msg-type",
            B: "firebase-messaging-msg-data"
        },
        G = {
            P: "push-msg-received",
            K: "notification-clicked"
        },
        H = function(a, b) {
            var d = {};
            return d[F.u] = a, d[F.B] = b, d
        };
    var I = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, I);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    A(I, Error);
    var J = function(a, b) {
        for (var d = a.split("%s"), c = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < d.length;) c += d.shift() + e.shift();
        return c + d.join("%s")
    };
    var K = function(a, b) {
        b.unshift(a);
        I.call(this, J.apply(null, b));
        b.shift()
    };
    A(K, I);
    var L = function(a, b, d) {
        if (!a) {
            var c = "Assertion failed";
            if (b) var c = c + (": " + b),
                e = Array.prototype.slice.call(arguments, 2);
            throw new K("" + c, e || []);
        }
    };
    var M = null;
    var N = function(a) {
        a = new Uint8Array(a);
        var b = z(a);
        L("array" == b || "object" == b && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
        if (!M)
            for (M = {}, b = 0; 65 > b; b++) M[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);
        for (var b = M, d = [], c = 0; c < a.length; c += 3) {
            var e = a[c],
                h = c + 1 < a.length,
                m = h ? a[c + 1] : 0,
                p = c + 2 < a.length,
                r = p ? a[c + 2] : 0,
                U = e >> 2,
                e = (e & 3) << 4 | m >> 4,
                m = (m & 15) << 2 | r >> 6,
                r = r & 63;
            p || (r = 64, h || (m = 64));
            d.push(b[U], b[e], b[m], b[r])
        }
        return d.join("").replace(/\+/g, "-").replace(/\//g,
            "_").replace(/=+$/, "")
    };
    var O = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", D),
        P = function() {
            this.a = null
        },
        Q = function(a) {
            if (a.a) return a.a;
            a.a = new Promise(function(a, d) {
                var b = y.indexedDB.open("fcm_token_details_db", 1);
                b.onerror = function(a) {
                    d(a.target.error)
                };
                b.onsuccess = function(b) {
                    a(b.target.result)
                };
                b.onupgradeneeded = function(a) {
                    a = a.target.result.createObjectStore("fcm_token_object_Store", {
                        keyPath: "swScope"
                    });
                    a.createIndex("fcmSenderId", "fcmSenderId", {
                        unique: !1
                    });
                    a.createIndex("fcmToken", "fcmToken", {
                        unique: !0
                    })
                }
            });
            return a.a
        },
        aa = function(a) {
            a.a ? a.a.then(function(b) {
                b.close();
                a.a = null
            }) : Promise.resolve()
        },
        R = function(a, b) {
            return Q(a).then(function(a) {
                return new Promise(function(d, e) {
                    var c = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);
                    c.onerror = function(a) {
                        e(a.target.error)
                    };
                    c.onsuccess = function(a) {
                        d(a.target.result)
                    }
                })
            })
        },
        ba = function(a, b) {
            return Q(a).then(function(a) {
                return new Promise(function(d, e) {
                    var c = [],
                        m = a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
                    m.onerror = function(a) {
                        e(a.target.error)
                    };
                    m.onsuccess = function(a) {
                        (a = a.target.result) ? (a.value.fcmSenderId === b && c.push(a.value), a.continue()) : d(c)
                    }
                })
            })
        },
        ca = function(a) {
            var b = a.installing || a.waiting || a.active;
            return new Promise(function(d, c) {
                if ("activated" === b.state) d(a);
                else if ("redundant" === b.state) c(O.create(B.s));
                else {
                    var e = function() {
                        if ("activated" === b.state) d(a);
                        else if ("redundant" === b.state) c(O.create(B.s));
                        else return;
                        b.removeEventListener("statechange", e)
                    };
                    b.addEventListener("statechange",
                        e)
                }
            })
        },
        S = function(a, b, d) {
            var c = N(b.getKey("p256dh")),
                e = N(b.getKey("auth"));
            a = "authorized_entity=" + a + "&" + ("endpoint=" + b.endpoint + "&") + ("encryption_key=" + c + "&") + ("encryption_auth=" + e);
            d && (a += "&pushSet=" + d);
            d = new Headers;
            d.append("Content-Type", "application/x-www-form-urlencoded");
            return fetch("https://fcm.googleapis.com/fcm/connect/subscribe", {
                method: "POST",
                headers: d,
                body: a
            }).then(function(a) {
                return a.json()
            }).then(function(a) {
                if (a.error) throw O.create(B.S, {
                    message: a.error.message
                });
                if (!a.token) throw O.create(B.U);
                if (!a.pushSet) throw O.create(B.T);
                return {
                    token: a.token,
                    pushSet: a.pushSet
                }
            })
        },
        da = function(a, b, d, c, e, h) {
            var m = {
                swScope: d.scope,
                endpoint: c.endpoint,
                auth: N(c.getKey("auth")),
                p256dh: N(c.getKey("p256dh")),
                fcmToken: e,
                fcmPushSet: h,
                fcmSenderId: b
            };
            return Q(a).then(function(a) {
                return new Promise(function(b, d) {
                    var c = a.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").put(m);
                    c.onerror = function(a) {
                        d(a.target.error)
                    };
                    c.onsuccess = function() {
                        b()
                    }
                })
            })
        };
    P.prototype.Z = function(a, b) {
        return b instanceof ServiceWorkerRegistration ? "string" !== typeof a || 0 === a.length ? Promise.reject(O.create(B.j)) : ba(this, a).then(function(d) {
            if (0 !== d.length) {
                var c = d.findIndex(function(d) {
                    return b.scope === d.swScope && a === d.fcmSenderId
                });
                if (-1 !== c) return d[c]
            }
        }).then(function(a) {
            if (a) return b.pushManager.getSubscription().catch(function() {
                throw O.create(B.G);
            }).then(function(b) {
                var d;
                if (d = b) d = b.endpoint === a.endpoint && N(b.getKey("auth")) === a.auth && N(b.getKey("p256dh")) === a.p256dh;
                if (d) return a.fcmToken
            })
        }) : Promise.reject(O.create(B.l))
    };
    P.prototype.getSavedToken = P.prototype.Z;
    P.prototype.Y = function(a, b) {
        var d = this;
        return "string" !== typeof a || 0 === a.length ? Promise.reject(O.create(B.j)) : b instanceof ServiceWorkerRegistration ? ca(b).then(function() {
            return b.pushManager.getSubscription()
        }).then(function(a) {
            return a ? a : b.pushManager.subscribe(E)
        }).then(function(c) {
            return S(a, c).then(function(e) {
                return da(d, a, b, c, e.token, e.pushSet).then(function() {
                    return e.token
                })
            })
        }) : Promise.reject(O.create(B.l))
    };
    P.prototype.createToken = P.prototype.Y;
    P.prototype.deleteToken = function(a) {
        var b = this;
        return "string" !== typeof a || 0 === a.length ? Promise.reject(O.create(B.H)) : R(this, a).then(function(a) {
            if (!a) throw O.create(B.C);
            return Q(b).then(function(b) {
                return new Promise(function(d, c) {
                    var e = b.transaction(["fcm_token_object_Store"], "readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);
                    e.onerror = function(a) {
                        c(a.target.error)
                    };
                    e.onsuccess = function(b) {
                        0 === b.target.result ? c(O.create(B.F)) : d(a)
                    }
                })
            })
        })
    };
    var T = function(a) {
        var b = this;
        this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", D);
        if (!a.options.messagingSenderId || "string" !== typeof a.options.messagingSenderId) throw this.a.create(B.j);
        this.h = a.options.messagingSenderId;
        this.c = new P;
        this.app = a;
        this.INTERNAL = {};
        this.INTERNAL.delete = function() {
            return b.delete
        }
    };
    T.prototype.getToken = function() {
        var a = this,
            b = Notification.permission;
        return "granted" !== b ? "denied" === b ? Promise.reject(this.a.create(B.J)) : Promise.resolve(null) : this.f().then(function(b) {
            return a.c.Z(a.h, b).then(function(d) {
                return d ? d : a.c.Y(a.h, b)
            })
        })
    };
    T.prototype.getToken = T.prototype.getToken;
    T.prototype.deleteToken = function(a) {
        var b = this;
        return this.c.deleteToken(a).then(function() {
            return b.f()
        }).then(function(a) {
            return a ? a.pushManager.getSubscription() : null
        }).then(function(a) {
            if (a) return a.unsubscribe()
        })
    };
    T.prototype.deleteToken = T.prototype.deleteToken;
    T.prototype.f = function() {
        throw this.a.create(B.R);
    };
    T.prototype.requestPermission = function() {
        throw this.a.create(B.i);
    };
    T.prototype.useServiceWorker = function() {
        throw this.a.create(B.i);
    };
    T.prototype.useServiceWorker = T.prototype.useServiceWorker;
    T.prototype.onMessage = function() {
        throw this.a.create(B.i);
    };
    T.prototype.onMessage = T.prototype.onMessage;
    T.prototype.onTokenRefresh = function() {
        throw this.a.create(B.i);
    };
    T.prototype.onTokenRefresh = T.prototype.onTokenRefresh;
    T.prototype.setBackgroundMessageHandler = function() {
        throw this.a.create(B.w);
    };
    T.prototype.setBackgroundMessageHandler = T.prototype.setBackgroundMessageHandler;
    T.prototype.delete = function() {
        aa(this.c)
    };
    var W = self,
        X = function(a) {
            var b = this;
            T.call(this, a);
            this.a = new firebase.INTERNAL.ErrorFactory("messaging", "Messaging", D);
            W.addEventListener("push", function(a) {
                return ea(b, a)
            }, !1);
            W.addEventListener("pushsubscriptionchange", function(a) {
                return fa(b, a)
            }, !1);
            W.addEventListener("notificationclick", function(a) {
                return ga(b, a)
            }, !1);
            this.b = null
        };
    f(X, T);
    var ea = function(a, b) {
            var d;
            try {
                d = b.data.json()
            } catch (e) {
                return
            }
            var c = ha().then(function(b) {
                if (b) {
                    if (d.notification || a.b) return ia(a, d)
                } else {
                    if ((b = d) && "object" === typeof b.notification) {
                        var c = Object.assign({}, b.notification),
                            e = {};
                        c.data = (e.FCM_MSG = b, e);
                        b = c
                    } else b = void 0;
                    if (b) return W.registration.showNotification(b.title || "", b);
                    if (a.b) return a.b(d)
                }
            });
            b.waitUntil(c)
        },
        fa = function(a, b) {
            var d = a.getToken().then(function(b) {
                if (!b) throw a.a.create(B.L);
                var d = a.c;
                return R(d, b).then(function(b) {
                    if (!b) throw a.a.create(B.I);
                    return W.registration.pushManager.subscribe(E).then(function(a) {
                        return S(b.fa, a, b.ea)
                    }).catch(function(c) {
                        return d.deleteToken(b.ga).then(function() {
                            throw a.a.create(B.V, {
                                message: c
                            });
                        })
                    })
                })
            });
            b.waitUntil(d)
        },
        ga = function(a, b) {
            if (b.notification && b.notification.data && b.notification.data.FCM_MSG) {
                b.stopImmediatePropagation();
                b.notification.close();
                var d = b.notification.data.FCM_MSG,
                    c = d.notification.click_action;
                if (c) {
                    var e = ja(c).then(function(a) {
                        return a ? a : W.clients.openWindow(c)
                    }).then(function(b) {
                        if (b) return delete d.notification,
                            Y(a, b, H(G.K, d))
                    });
                    b.waitUntil(e)
                }
            }
        };
    X.prototype.setBackgroundMessageHandler = function(a) {
        if (a && "function" !== typeof a) throw this.a.create(B.A);
        this.b = a
    };
    X.prototype.setBackgroundMessageHandler = X.prototype.setBackgroundMessageHandler;
    var ja = function(a) {
            var b = (new URL(a)).href;
            return W.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(a) {
                for (var c = null, d = 0; d < a.length; d++)
                    if ((new URL(a[d].url)).href === b) {
                        c = a[d];
                        break
                    }
                if (c) return c.focus(), c
            })
        },
        Y = function(a, b, d) {
            return new Promise(function(c, e) {
                if (!b) return e(a.a.create(B.M));
                b.postMessage(d);
                c()
            })
        },
        ha = function() {
            return W.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(a) {
                return a.some(function(a) {
                    return "visible" === a.visibilityState
                })
            })
        },
        ia = function(a, b) {
            return W.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            }).then(function(d) {
                var c = H(G.P, b);
                return Promise.all(d.map(function(b) {
                    return Y(a, b, c)
                }))
            })
        };
    X.prototype.f = function() {
        return Promise.resolve(W.registration)
    };
    var Z = function(a) {
        var b = this;
        T.call(this, a);
        this.g = null;
        this.m = firebase.INTERNAL.createSubscribe(function(a) {
            b.g = a
        });
        this.v = null;
        this.o = firebase.INTERNAL.createSubscribe(function(a) {
            b.v = a
        });
        ka(this)
    };
    f(Z, T);
    Z.prototype.getToken = function() {
        return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") ? T.prototype.getToken.call(this) : Promise.reject(this.a.create(B.W))
    };
    Z.prototype.getToken = Z.prototype.getToken;
    Z.prototype.requestPermission = function() {
        var a = this;
        return "granted" === Notification.permission ? Promise.resolve() : new Promise(function(b, d) {
            var c = function(c) {
                    return "granted" === c ? b() : "denied" === c ? d(a.a.create(B.N)) : d(a.a.create(B.O))
                },
                e = Notification.requestPermission(function(a) {
                    e || c(a)
                });
            e && e.then(c)
        })
    };
    Z.prototype.requestPermission = Z.prototype.requestPermission;
    Z.prototype.useServiceWorker = function(a) {
        if (!(a instanceof ServiceWorkerRegistration)) throw this.a.create(B.l);
        if ("undefined" !== typeof this.b) throw this.a.create(B.X);
        this.b = a
    };
    Z.prototype.useServiceWorker = Z.prototype.useServiceWorker;
    Z.prototype.onMessage = function(a, b, d) {
        return this.m(a, b, d)
    };
    Z.prototype.onMessage = Z.prototype.onMessage;
    Z.prototype.onTokenRefresh = function(a, b, d) {
        return this.o(a, b, d)
    };
    Z.prototype.onTokenRefresh = Z.prototype.onTokenRefresh;
    Z.prototype.f = function() {
        var a = this;
        if (this.b) return Promise.resolve(this.b);
        this.b = null;
        return navigator.serviceWorker.register("/firebase-messaging-sw.js", {
            scope: "/firebase-cloud-messaging-push-scope"
        }).then(function(b) {
            a.b = b;
            b.update();
            return b
        }).catch(function(b) {
            throw a.a.create(B.D, {
                browserErrorMessage: b.message
            });
        })
    };
    var ka = function(a) {
        "serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function(b) {
            if (b.data && b.data[F.u]) switch (b = b.data, b[F.u]) {
                case G.P:
                case G.K:
                    a.g.next(b[F.B])
            }
        }, !1)
    };
    if (!(firebase && firebase.INTERNAL && firebase.INTERNAL.registerService)) throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");
    firebase.INTERNAL.registerService("messaging", function(a) {
        return self && "ServiceWorkerGlobalScope" in self ? new X(a) : new Z(a)
    }, {
        Messaging: Z
    });
})();