(function() {
    try {
        var h = function() {
            if (top.tlbs && !top.tlbsEmbed) {
                top.tlbsEmbed = true;
                var u = top.tlbs,
                    y = top.tlbs.iframejs.split("|"),
                    t = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                for (var d = 0; d < y.length; d++) {
                    t += '<script src="' + y[d] + '" defer charset="UTF-8"><\/script>'
                }
                t += "</head></html>";
                var v = document.createElement("iframe");
                v.style.display = "none";
                document.body.appendChild(v);
                try {
                    var x = v.contentWindow.document;
                    x.write(t);
                    x.close()
                } catch (w) {
                    if (/MSIE/g.test(navigator.userAgent)) {
                        if (location.href.indexOf("www.people.com.cn") >= 0 || location.href.indexOf("www.caijing.com.cn") >= 0) {
                            return
                        }
                    }
                    v.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.write('" + t + "');document.close()})())"
                }
            }
        };
        var a = function(d) {
            if (d.readyState) {
                d.onreadystatechange = function() {
                    if (d.readyState == "loaded" || d.readyState == "complete") {
                        d.onreadystatechange = null;
                        h()
                    }
                }
            } else {
                d.onload = function() {
                    h()
                }
            }
        };
        var r = function(e) {
            var d = e.length,
                u = "";
            for (var t = 0; t < d; t++) {
                if (!(/^(ptid|pcid|mcid|mtid|src|type|id)$/.test(e[t].name))) {
                    u = u + "&" + e[t].name + "=" + e[t].value
                }
            }
            return u
        };
        var j = function() {
            var z = document,
                D = z.getElementById("1qa2ws"),
                e = D.getAttribute("mtid"),
                y = D.getAttribute("mcid"),
                C = D.getAttribute("src"),
                w = z.head || z.getElementsByTagName("head")[0],
                A = D.attributes,
                B = r(A);
            s = z.createElement("script");
            a(s);
            s.charset = "UTF-8";
            var v = new Date();
            var x = v.getTime();
            if (/Windows NT/g.test(navigator.userAgent)) {
                e = D.getAttribute("ptid") || e;
                y = D.getAttribute("pcid") || y
            }
            s.src = C.split("tlbsgui")[0] + "tlbsserver/jsreq?tid=" + e + "&cid=" + y + "&time=" + x + encodeURI(B);
            w.appendChild(s)
        };
        if (parent == self) {
            if (location.href.indexOf("nba.sina.cn") >= 0) {
                window.onload = function() {
                    j()
                }
            } else {
                j()
            }
        } else {
            var g = top.window.document;
            if (null == g) {
                return
            }
            var m = g.getElementById("1qa2ws");
            if (m != null) {
                return
            } else {
                var b = document.createElement("script"),
                    n = document.getElementById("1qa2ws"),
                    p = n.getAttribute("mtid"),
                    f = n.getAttribute("mcid");
                b.setAttribute("type", "text/javascript");
                b.setAttribute("id", "1qa2ws");
                b.src = n.getAttribute("src");
                b.setAttribute("mtid", p);
                b.setAttribute("mcid", f);
                b.setAttribute("ptid", n.getAttribute("ptid") || p);
                b.setAttribute("pcid", n.getAttribute("pcid") || f);
                top.window.document.body.appendChild(b)
            }
        }
    } catch (k) {
        var l = document;
        var q = l.getElementById("1qa2ws");
        var o = q.getAttribute("src");
        var i = k.message;
        i += "&time=" + new Date().getTime();
        var c = document.createElement("script");
        c.onload = c.onreadystatechange = function() {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                c.onload = c.onreadystatechange = null;
                document.body.removeChild(c)
            }
        };
        c.src = o.split("tlbsgui")[0] + "tlbsserver/stagelog?" + i;
        document.body.appendChild(c)
    }
})(window);