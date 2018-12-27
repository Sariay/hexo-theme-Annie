"use strict";
var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
	"function" == typeof define && define.amd ? define(function() {
		return t
	}) : "object" === ("undefined" == typeof exports ? "undefined" : y(exports)) ? module.exports = t : e.katelog = t
}(window, function(e) {
	function f(e, t) {
		return !!e.className && e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
	}

	function u(e, t) {
		if(f(e, t)) {
			var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
			e.className = e.className.replace(n, " ")
		}
	}

	function t(e) {
		for(var t, n = void 0, o = [], i = {}, a = {
				id: -1
			}, l = null, r = void 0, c = 0; c < e.length; c++) r = "heading-" + c, i = {
			name: e[c].innerText || e[c].textContent,
			tagName: n = e[c].tagName,
			id: e[c].id = r,
			level: (t = n, t ? t.slice(1) : 0),
			parent: a
		}, l && (d(i.tagName) < d(l.tagName) ? i.parent = l : i.parent = s(i, l)), l = i, o.push(i);
		return o
	}

	function s(e, t) {
		for(var n = t.parent; n && d(e.tagName) >= d(n.tagName);) n = n.parent;
		return n || {
			id: -1
		}
	}

	function d(e) {
		var t = 0;
		if(e) switch(e.toLowerCase()) {
			case "h1":
				t = 6;
				break;
			case "h2":
				t = 5;
				break;
			case "h3":
				t = 4;
				break;
			case "h4":
				t = 3;
				break;
			case "h5":
				t = 2;
				break;
			case "h6":
				t = 1
		}
		return t
	}

	function n(e, t, n) {
		e && (e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
			e["e" + t + n](window.event)
		}, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1))
	}

	function r(e, t) {
		var n, o, i = void 0,
			a = !1;
		if(e) {
			i = "<ul>";
			for(var l = 0; l < e.length; l++) n = e[l].parent, o = t, n && o && "object" === (void 0 === n ? "undefined" : y(n)) && "object" === (void 0 === o ? "undefined" : y(o)) && n.id === o.id && (a = !0, i += '<li><div class="' + p.linkClass + " k-catelog-level-" + e[l].level + '" data-target="' + e[l].id + '">' + e[l].name + "</div>", i += r(e, e[l]), i += "</li>");
			i += "</ul>"
		}
		return a ? i : ""
	}
	"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
		value: function(e, t) {
			if(null == e) throw new TypeError("Cannot convert undefined or null to object");
			for(var n = Object(e), o = 1; o < arguments.length; o++) {
				var i = arguments[o];
				if(null != i)
					for(var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
			}
			return n
		},
		writable: !0,
		configurable: !0
	});
	var p = Object.assign({}, {
			linkClass: "k-catelog-link",
			linkActiveClass: "k-catelog-link-active",
			supplyTop: 0,
			selector: ["h1", "h2", "h3", "h4", "h5", "h6"],
			active: null
		}, e),
		o = this.contentEl = document.getElementById(p.contentEl),
		g = document.getElementById(p.catelogEl),
		i = o.querySelectorAll(p.selector.join()),
		a = t(i),
		l = !1;
	g.innerHTML = r(a, {
		id: -1
	});
	var c = "\n        .k-catelog-list { overflow: hidden !important; }\n        .k-catelog-list > ul { position: relative; }    \n    ",
		h = document.createElement("style");

	function v(e) {
		var t, n = g.querySelectorAll("[data-target]");
		t = n, n = Array.prototype.slice.call(t);
		for(var o, i, a, l, r = null, c = void 0, s = 0; s < n.length; s++) c = n[s], l = "target", ((a = c).dataset ? a.dataset[l] : a.getAttribute("data-" + l)) === e ? (o = c, i = p.linkActiveClass, f(o, i) || (o.className += " " + i), r = c, g.children[0].offsetHeight > g.offsetHeight && (c.offsetTop > g.offsetHeight / 2 ? g.children[0].offsetHeight - c.offsetTop - c.offsetHeight < g.offsetHeight / 2 ? g.children[0].style.marginTop = -g.children[0].offsetHeight + g.offsetHeight + "px" : g.children[0].style.marginTop = g.offsetHeight / 2 - c.offsetTop + "px" : g.children[0].style.marginTop = "0px")) : u(c, p.linkActiveClass);
		"function" == typeof p.active && p.active.call(this, r)
	}

	function m(e) {
		for(var t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
		return t
	}
	h.type = "text/css", h.styleSheet ? h.styleSheet.cssText = c : h.innerHTML = c, document.getElementsByTagName("head")[0].appendChild(h), n(g, "click", function(e) {
		var t = (e.target || e.srcElement).getAttribute("data-target");
		if(t) {
			var n = document.getElementById(t);
			l = !0, window.scrollTo(0, n.offsetTop - p.supplyTop), v(t)
		}
	}), n(window, "scroll", function(e) {
		if(!l) {
			for(var t = (document.documentElement.scrollTop || document.body.scrollTop) + p.supplyTop, n = null, o = i.length - 1; 0 <= o; o--)
				if(m(i[o]) <= t) {
					n = i[o];
					break
				}
			v(n ? n.id : null)
		}
		l = !1
	}), this.rebuild = function() {
		var e = t(i = o.querySelectorAll(p.selector.join()));
		g.innerHTML = r(e, {
			id: -1
		})
	}
});