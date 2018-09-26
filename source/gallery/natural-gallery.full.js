(function(e, t) {
	'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define('NaturalGallery', [], t) : 'object' == typeof exports ? exports.NaturalGallery = t() : e.NaturalGallery = t();
})(this, function() {
	var t = Math.round,
		e = Math.max,
		n = Math.floor;
	return function(e) {
		function t(i) {
			if(n[i])
				return n[i].exports;
			var o = n[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function(e, n, i) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: i
			});
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e['default'];
			} : function() {
				return e;
			};
			return t.d(n, 'a', n), n;
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}, t.p = '', t(t.s = 2);
	}([function(e, t) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var n;
		(function(e) {
			e.getIcon = function(e) {
				var t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				return t.setAttribute('viewBox', '0 0 100 100'), t.innerHTML = '<use xlink:href="#' + e + '"></use>', t;
			}, e.toggleClass = function(e, t) {
				e && t && (this.hasClass(e, t) ? this.removeClass(e, t) : this.addClass(e, t));
			}, e.removeClass = function(e, t) {
				var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
				e.className = e.className.replace(n, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
			}, e.addClass = function(e, t) {
				this.hasClass(t) || (e.className += (e.className ? ' ' : '') + t);
			}, e.hasClass = function(e, t) {
				return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
			}, e.uniqBy = function(e, t) {
				var n = [];
				return e.forEach(function(e) {
					var i = n.some(function(n) {
						return e[t] === n[t];
					});
					i || n.push(e);
				}), n;
			}, e.differenceBy = function(e, t, n) {
				var i = [];
				return e.forEach(function(e) {
					var o = t.some(function(t) {
						return e[n] === t[n];
					});
					o || i.push(e);
				}), i;
			}, e.intersectionBy = function(e, t, n) {
				var i = [];
				return e.forEach(function(e) {
					var o = t.some(function(t) {
						return e[n] === t[n];
					});
					o && i.push(e);
				}), i;
			};
			var t = [{
				base: 'A',
				letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
			}, {
				base: 'AA',
				letters: /[\uA732]/g
			}, {
				base: 'AE',
				letters: /[\u00C6\u01FC\u01E2]/g
			}, {
				base: 'AO',
				letters: /[\uA734]/g
			}, {
				base: 'AU',
				letters: /[\uA736]/g
			}, {
				base: 'AV',
				letters: /[\uA738\uA73A]/g
			}, {
				base: 'AY',
				letters: /[\uA73C]/g
			}, {
				base: 'B',
				letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
			}, {
				base: 'C',
				letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
			}, {
				base: 'D',
				letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
			}, {
				base: 'DZ',
				letters: /[\u01F1\u01C4]/g
			}, {
				base: 'Dz',
				letters: /[\u01F2\u01C5]/g
			}, {
				base: 'E',
				letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
			}, {
				base: 'F',
				letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
			}, {
				base: 'G',
				letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
			}, {
				base: 'H',
				letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
			}, {
				base: 'I',
				letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
			}, {
				base: 'J',
				letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
			}, {
				base: 'K',
				letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
			}, {
				base: 'L',
				letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
			}, {
				base: 'LJ',
				letters: /[\u01C7]/g
			}, {
				base: 'Lj',
				letters: /[\u01C8]/g
			}, {
				base: 'M',
				letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
			}, {
				base: 'N',
				letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
			}, {
				base: 'NJ',
				letters: /[\u01CA]/g
			}, {
				base: 'Nj',
				letters: /[\u01CB]/g
			}, {
				base: 'O',
				letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
			}, {
				base: 'OI',
				letters: /[\u01A2]/g
			}, {
				base: 'OO',
				letters: /[\uA74E]/g
			}, {
				base: 'OU',
				letters: /[\u0222]/g
			}, {
				base: 'P',
				letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
			}, {
				base: 'Q',
				letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
			}, {
				base: 'R',
				letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
			}, {
				base: 'S',
				letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
			}, {
				base: 'T',
				letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
			}, {
				base: 'TZ',
				letters: /[\uA728]/g
			}, {
				base: 'U',
				letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
			}, {
				base: 'V',
				letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
			}, {
				base: 'VY',
				letters: /[\uA760]/g
			}, {
				base: 'W',
				letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
			}, {
				base: 'X',
				letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
			}, {
				base: 'Y',
				letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
			}, {
				base: 'Z',
				letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
			}, {
				base: 'a',
				letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
			}, {
				base: 'aa',
				letters: /[\uA733]/g
			}, {
				base: 'ae',
				letters: /[\u00E6\u01FD\u01E3]/g
			}, {
				base: 'ao',
				letters: /[\uA735]/g
			}, {
				base: 'au',
				letters: /[\uA737]/g
			}, {
				base: 'av',
				letters: /[\uA739\uA73B]/g
			}, {
				base: 'ay',
				letters: /[\uA73D]/g
			}, {
				base: 'b',
				letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
			}, {
				base: 'c',
				letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
			}, {
				base: 'd',
				letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
			}, {
				base: 'dz',
				letters: /[\u01F3\u01C6]/g
			}, {
				base: 'e',
				letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
			}, {
				base: 'f',
				letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
			}, {
				base: 'g',
				letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
			}, {
				base: 'h',
				letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
			}, {
				base: 'hv',
				letters: /[\u0195]/g
			}, {
				base: 'i',
				letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
			}, {
				base: 'j',
				letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
			}, {
				base: 'k',
				letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
			}, {
				base: 'l',
				letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
			}, {
				base: 'lj',
				letters: /[\u01C9]/g
			}, {
				base: 'm',
				letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
			}, {
				base: 'n',
				letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
			}, {
				base: 'nj',
				letters: /[\u01CC]/g
			}, {
				base: 'o',
				letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
			}, {
				base: 'oi',
				letters: /[\u01A3]/g
			}, {
				base: 'ou',
				letters: /[\u0223]/g
			}, {
				base: 'oo',
				letters: /[\uA74F]/g
			}, {
				base: 'p',
				letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
			}, {
				base: 'q',
				letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
			}, {
				base: 'r',
				letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
			}, {
				base: 's',
				letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
			}, {
				base: 't',
				letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
			}, {
				base: 'tz',
				letters: /[\uA729]/g
			}, {
				base: 'u',
				letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
			}, {
				base: 'v',
				letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
			}, {
				base: 'vy',
				letters: /[\uA761]/g
			}, {
				base: 'w',
				letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
			}, {
				base: 'x',
				letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
			}, {
				base: 'y',
				letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
			}, {
				base: 'z',
				letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
			}];
			e.removeDiacritics = function(e) {
				for(var n = 0; n < t.length; n++)
					e = e.replace(t[n].letters, t[n].base);
				return e;
			};
		})(n = t.Utility || (t.Utility = {}));
	}, function(e, t) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var n = function() {
			function e(e) {
				this.header = e, this._collection = null;
			}
			return e.prototype.isActive = function() {
				return null !== this.collection;
			}, Object.defineProperty(e.prototype, 'collection', {
				get: function() {
					return this._collection;
				},
				set: function(e) {
					this._collection = e;
				},
				enumerable: !0,
				configurable: !0
			}), e;
		}();
		t.AbstractFilter = n;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		}), n(3), n(4);
		var i = n(5);
		t.Gallery = i.Gallery;
	}, function() {}, function() {}, function(t, i, o) {
		'use strict';
		Object.defineProperty(i, '__esModule', {
			value: !0
		});
		var l = o(6),
			a = o(9),
			r = o(10),
			s = o(11),
			d = o(0),
			p = o(13),
			c = function() {
				function t(e, t, i, o) {
					for(var l in void 0 === o && (o = null), this.scrollElement = o, this._options = {
							rowHeight: 350,
							format: 'natural',
							round: 3,
							margin: 3,
							limit: 0,
							showLabels: 'hover',
							lightbox: !0,
							minRowsAtStart: 2,
							showCount: !1,
							searchFilter: !1,
							categoriesFilter: !1,
							showNone: !1,
							showOthers: !1,
							labelCategories: 'Category',
							labelNone: 'None',
							labelOthers: 'Others',
							labelSearch: 'Search',
							labelImages: 'Images',
							selectable: !1,
							zoomRotation: !0,
							infiniteScrollOffset: 0
						}, this._events = {}, this.old_scroll_top = 0, this._pswpContainer = [], this._collection = [], this._categories = [], this._selected = [], this.defaultImageRatio = .7, this.pswpElement = t, this.options)
						'undefined' == typeof i.options[l] && (i.options[l] = this.options[l]);
					this.options = i.options, this.categories = i.categories ? i.categories : [], this.rootElement = e, d.Utility.addClass(this.rootElement, 'natural-gallery'), this._events = i.events ? i.events : {}, this._events.select && (this.options.selectable = !0), (this.options.searchFilter || this.options.categoriesFilter || this.options.showCount) && (this.header = new a.Header(this), this.options.searchFilter && this.header.addFilter(new r.SearchFilter(this.header)), this.options.categoriesFilter && this.header.addFilter(new s.CategoryFilter(this.header))), this.render(), this.bodyWidth = n(this.bodyElement.getBoundingClientRect().width), i.images ? this.collection = i.images : this.pagination(), 0 === this.options.limit && this.bindScroll(null === o ? document : o);
				}
				return t.prototype.render = function() {
					var t = this;
					this.noResults = document.createElement('div'), d.Utility.addClass(this.noResults, 'natural-gallery-noresults'), this.noResults.appendChild(d.Utility.getIcon('icon-noresults')), this.noResults.style.display = 'block', this.nextButton = document.createElement('div'), d.Utility.addClass(this.nextButton, 'natural-gallery-next'), this.nextButton.appendChild(d.Utility.getIcon('icon-next')), this.nextButton.style.display = 'none', this.nextButton.addEventListener('click', function(n) {
						n.preventDefault();
						var e = t.getRowsPerPage();
						t.addElements(e), t.pagination(e);
					});
					var e = document.createElement('iframe');
					this.rootElement.appendChild(e);
					var n = null;
					e.contentWindow.addEventListener('resize', function() {
						clearTimeout(n), n = setTimeout(function() {
							t.resize();
						}, 100);
					}), this.bodyElement = document.createElement('div'), d.Utility.addClass(this.bodyElement, 'natural-gallery-body'), this.bodyElement.appendChild(this.noResults), this.header && this.rootElement.appendChild(this.header.render()), this.rootElement.appendChild(this.bodyElement), this.rootElement.appendChild(this.nextButton);
				}, t.prototype.addItems = function(e) {
					if(e.constructor === Array && e.length) {
						var t = 0 === this.collection.length || this.collection.length === this.pswpContainer.length;
						e.forEach(function(e) {
							this._collection.push(new l.Item(e, this));
						}, this), p.Organizer.organize(this), this.header && this.header.refresh(), t && this.addElements(this.getRowsPerPage());
					}
				}, t.prototype.style = function() {
					this.collection.forEach(function(e) {
						e.style();
					});
				}, t.prototype.addElements = function(e) {
					void 0 === e && (e = null);
					var t = this.collection;
					if(this.nextButton.style.display = 'block', this.pswpContainer.length === t.length)
						return this.nextButton.style.display = 'none', void(0 === t.length && (this.noResults.style.display = 'block', this.rootElement.getElementsByClassName('natural-gallery-images')[0].style.display = 'none'));
					for(var n, o = this.pswpContainer.length, l = this.pswpContainer.length ? t[o].row + e : e, a = o; a < t.length; a++)
						n = t[a], n.row < l && (this.pswpContainer.push(n.getPswpItem()), this.bodyElement.appendChild(n.loadElement()), n.bindClick(), n.flash()), this.pswpContainer.length === t.length && (this.nextButton.style.display = 'none');
					this.noResults.style.display = 'none';
					var i = this.rootElement.getElementsByClassName('natural-gallery-images')[0];
					i && (i.style.display = 'block');
					var r = this.rootElement.getElementsByClassName('natural-gallery-visible')[0];
					r && (r.textContent = this.pswpContainer.length + '');
					var s = this.rootElement.getElementsByClassName('natural-gallery-total')[0];
					s && (s.textContent = t.length + '');
				}, t.prototype.getRowsPerPage = function() {
					if(this.options.limit)
						return this.options.limit;
					var e = this.scrollElement ? this.scrollElement.clientHeight : document.documentElement.clientHeight,
						t = e - this.bodyElement.offsetTop,
						i = n(t / (0.55 * this.options.rowHeight));
					return i < this.options.minRowsAtStart ? this.options.minRowsAtStart : i;
				}, t.prototype.resize = function() {
					var e = n(this.bodyElement.getBoundingClientRect().width);
					if(e !== this.bodyWidth) {
						this.bodyWidth = e, p.Organizer.organize(this);
						var t = this.collection[this.pswpContainer.length - 1],
							i = t ? t.row + 1 : this.getRowsPerPage();
						this.reset(), this.addElements(i);
					}
				}, t.prototype.refresh = function() {
					this.reset(), p.Organizer.organize(this), this.addElements(this.getRowsPerPage());
				}, t.prototype.reset = function() {
					this.pswpContainer = [], this._collection.forEach(function(e) {
						e.remove();
					}), this.noResults.style.display = 'block';
				}, t.prototype.bindScroll = function(e) {
					var t = this,
						n = null;
					n = e instanceof Document ? e.documentElement : e, e.addEventListener('scroll', function() {
						var e = t.rootElement.offsetTop + t.rootElement.offsetHeight + t.options.infiniteScrollOffset,
							i = n.scrollTop - (n.clientTop || 0),
							o = n.clientHeight,
							l = i - t.old_scroll_top;
						t.old_scroll_top = i, 0 < l && i + o >= e && (t.addElements(1), t.pagination(1));
					});
				}, t.prototype.pagination = function(e) {
					if(void 0 === e && (e = 1), this.events.pagination)
						if(this.collection.length) {
							var t = this.getMaxImagesPerRow();
							this._events.pagination(this.collection.length, t * e);
						}
					else {
						var n = p.Organizer.simulatePagination(this);
						this._events.pagination(this.collection.length, 2 * (n * this.getRowsPerPage()));
					}
				}, t.prototype.getMaxImagesPerRow = function() {
					return e.apply(null, function(e) {
						return e.reduce(function(t, n) {
							return t[n.row] = -1 < t[n.row] ? t[n.row] + 1 : 1, t;
						}, []);
					}(this.collection));
				}, t.prototype.select = function(e) {
					var t = this._selected.indexOf(e); -
					1 === t && (this._selected.push(e), this._events.select(this._selected.map(function(e) {
						return e.fields;
					})));
				}, t.prototype.unselect = function(e) {
					var t = this._selected.indexOf(e); -
					1 < t && (this._selected.splice(t, 1), this._events.select(this._selected.map(function(e) {
						return e.fields;
					})));
				}, t.prototype.unselectAll = function() {
					for(var e = this._selected.length - 1; 0 <= e; e--)
						this._selected[e].toggleSelect();
					this._selected = [];
				}, Object.defineProperty(t.prototype, 'events', {
					get: function() {
						return this._events;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpContainer', {
					get: function() {
						return this._pswpContainer;
					},
					set: function(e) {
						this._pswpContainer = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'collection', {
					get: function() {
						return this.header && this.header.isFiltered() ? this.header.collection : this._collection;
					},
					set: function(e) {
						this.reset(), this._collection = [], this.addItems(e);
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.getOriginalCollection = function() {
					return this._collection;
				}, Object.defineProperty(t.prototype, 'bodyWidth', {
					get: function() {
						return this._bodyWidth;
					},
					set: function(e) {
						this._bodyWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'bodyElement', {
					get: function() {
						return this._bodyElement;
					},
					set: function(e) {
						this._bodyElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'rootElement', {
					get: function() {
						return this._rootElement;
					},
					set: function(e) {
						this._rootElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpApi', {
					get: function() {
						return this._pswpApi;
					},
					set: function(e) {
						this._pswpApi = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'pswpElement', {
					get: function() {
						return this._pswpElement;
					},
					set: function(e) {
						this._pswpElement = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'options', {
					get: function() {
						return this._options;
					},
					set: function(e) {
						this._options = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'header', {
					get: function() {
						return this._header;
					},
					set: function(e) {
						this._header = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), t;
			}();
		i.Gallery = c;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = n(7),
			l = n(8),
			a = function() {
				function e(e, t) {
					this.gallery = t, this._binded = !1, this.selected = !1, this._fields = e, this.id = e.id, this.thumbnail = e.thumbnail, this.enlarged = e.enlarged, this.title = this.getTitle(e), this.link = this.getLink(e), this.linkTarget = this.getLinkTarget(e), this.tWidth = e.tWidth, this.tHeight = e.tHeight, this.eWidth = e.eWidth, this.eHeight = e.eHeight, this.categories = e.categories, this.last = e.last, this.createElement();
				}
				return e.prototype.getTitle = function(e) {
					return e.title ? this.getTitleDetails(e.title).title : null;
				}, e.prototype.getLink = function(e) {
					return e.link ? e.link : this.getTitleDetails(e.title).link;
				}, e.prototype.getLinkTarget = function(e) {
					return e.linkTarget ? e.linkTarget : this.getTitleDetails(e.title).linkTarget;
				}, e.prototype.getTitleDetails = function(e) {
					var t = document.createElement('div');
					t.innerHTML = e;
					var n = t.getElementsByTagName('a'),
						i = {
							title: t.textContent,
							link: null,
							linkTarget: null
						};
					return n[0] && (i.link = n[0].getAttribute('href'), i.linkTarget = n[0].getAttribute('target')), i;
				}, e.prototype.createElement = function() {
					var t = this,
						e = this.gallery.options,
						n = null;
					this.title && -1 < ['true', 'hover'].indexOf(e.showLabels) && (n = !0);
					var o = document.createElement('div'),
						l = document.createElement('div'),
						a = this.getLinkElement(),
						r = null;
					if(e.lightbox && n && a ? (n = a, i.Utility.addClass(n, 'button'), r = l) : e.lightbox && n && !a ? (n = document.createElement('div'), r = o) : e.lightbox && !n ? r = o : !e.lightbox && n && a ? (o = a, n = document.createElement('div'), n.classList.add('button')) : e.lightbox || !n || a ? !e.lightbox && !n && a && (o = a) : n = document.createElement('div'), r && (i.Utility.addClass(r, 'zoomable'), e.zoomRotation && i.Utility.addClass(r, 'rotation')), i.Utility.addClass(l, 'image'), i.Utility.addClass(o, 'figure loading visible'), l.style.backgroundImage = 'url(' + this.thumbnail + ')', o.appendChild(l), e.round) {
						var s = e.round + 'px';
						o.style.borderRadius = s, l.style.borderRadius = s;
					}
					if(this.element = o, this.image = l, n && (n.textContent = this.title, i.Utility.addClass(n, 'title'), 'hover' === e.showLabels && i.Utility.addClass(n, 'hover'), o.appendChild(n)), this.gallery.options.selectable) {
						this.selectBtn = document.createElement('div');
						var d = i.Utility.getIcon('icon-select');
						this.selectBtn.appendChild(d), this.selectBtn.classList.add('selectBtn'), d.addEventListener('click', function(n) {
							n.stopPropagation(), t.toggleSelect();
						}), this.element.appendChild(this.selectBtn);
					}
				}, e.prototype.toggleSelect = function() {
					this.selected = !this.selected, this.selected ? (this.element.classList.add('selected'), this.gallery.select(this)) : (this.element.classList.remove('selected'), this.gallery.unselect(this));
				}, e.prototype.getLinkElement = function() {
					var e = this,
						t = null;
					return this.link && (t = document.createElement('a'), this.gallery.events.link ? t.addEventListener('click', function(t) {
						e.gallery.events.link.preventDefault && t.preventDefault(), e.gallery.events.link.callback(e._fields);
					}) : (t.setAttribute('href', this.link), i.Utility.addClass(t, 'link'), this.linkTarget && t.setAttribute('target', this.linkTarget))), t;
				}, e.prototype.style = function() {
					i.Utility.removeClass(this.element, 'visible'), this.element.style.width = this.width + 'px', this.element.style.height = this.height + 'px', this.element.style.marginRight = this.gallery.options.margin + 'px', this.element.style.marginBottom = this.gallery.options.margin + 'px', this.last && (this.element.style.marginRight = '0');
					var e = this;
					window.setTimeout(function() {
						i.Utility.addClass(e.element, 'visible');
					}, 0);
				}, e.prototype.flash = function() {
					var e = this;
					i.Utility.removeClass(this.element, 'visible'), window.setTimeout(function() {
						i.Utility.addClass(e.element, 'visible');
					}, 0);
				}, e.prototype.bindClick = function() {
					if(this.gallery.options.lightbox) {
						var t = this;
						if(!this.binded) {
							this.binded = !0;
							var e = function(n) {
									t.openPhotoSwipe.call(t, n, t.element);
								},
								n = null;
							n = this.link ? this.image : this.element, n.addEventListener('click', e);
						}
					}
				}, e.prototype.openPhotoSwipe = function(t, e) {
					t.preventDefault();
					var n = this;
					if(this.gallery.options.lightbox) {
						var i = Array.prototype.slice.call(e.parentNode.children),
							a = i.indexOf(e) - 1,
							r = new o(this.gallery.pswpElement, l, this.gallery.pswpContainer, {
								index: a,
								bgOpacity: 0.85,
								showHideOpacity: !0,
								loop: !1
							});
						this.gallery.pswpApi = r, r.init();
						var s = null;
						r.listen('beforeChange', function(e) {
							0 < e && r.getCurrentIndex() === r.items.length - 1 ? n.gallery.addElements() : e === -1 * (r.items.length - 1) && (s = r.items.length, n.gallery.addElements());
						}), r.listen('afterChange', function() {
							s && (r.goTo(s), s = null);
						});
					}
				}, e.prototype.getPswpItem = function() {
					return {
						src: this._enlarged,
						w: this._eWidth,
						h: this._eHeight,
						title: this._title
					};
				}, e.prototype.getElement = function() {
					return this.element;
				}, e.prototype.loadElement = function() {
					var e = this,
						t = document.createElement('img');
					return t.setAttribute('src', this.thumbnail), t.addEventListener('load', function() {
						i.Utility.removeClass(e.element, 'loading'), i.Utility.addClass(e.element, 'loaded');
					}), t.addEventListener('error', function() {
						i.Utility.addClass(e.element, 'errored');
					}), this.element;
				}, e.prototype.remove = function() {
					this.getElement().parentNode && this.getElement().parentNode.removeChild(this.getElement());
				}, Object.defineProperty(e.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'thumbnail', {
					get: function() {
						return this._thumbnail;
					},
					set: function(e) {
						this._thumbnail = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'enlarged', {
					get: function() {
						return this._enlarged;
					},
					set: function(e) {
						this._enlarged = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'title', {
					get: function() {
						return this._title;
					},
					set: function(e) {
						this._title = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'tWidth', {
					get: function() {
						return this._tWidth;
					},
					set: function(e) {
						this._tWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'tHeight', {
					get: function() {
						return this._tHeight;
					},
					set: function(e) {
						this._tHeight = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'eWidth', {
					get: function() {
						return this._eWidth;
					},
					set: function(e) {
						this._eWidth = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'eHeight', {
					get: function() {
						return this._eHeight;
					},
					set: function(e) {
						this._eHeight = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'last', {
					get: function() {
						return this._last;
					},
					set: function(e) {
						this._last = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'row', {
					get: function() {
						return this._row;
					},
					set: function(e) {
						this._row = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'height', {
					get: function() {
						return this._height;
					},
					set: function(e) {
						this._height = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'width', {
					get: function() {
						return this._width;
					},
					set: function(e) {
						this._width = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'description', {
					get: function() {
						return this._description;
					},
					set: function(e) {
						this._description = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'binded', {
					get: function() {
						return this._binded;
					},
					set: function(e) {
						this._binded = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'link', {
					get: function() {
						return this._link;
					},
					set: function(e) {
						this._link = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'linkTarget', {
					get: function() {
						return this._linkTarget;
					},
					set: function(e) {
						this._linkTarget = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'fields', {
					get: function() {
						return this._fields;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Item = a;
	}, function(n, i, o) {
		var l, a;
		(function(e, t) {
			l = t, a = 'function' == typeof l ? l.call(i, o, i, n) : l, !(a !== void 0 && (n.exports = a));
		})(this, function() {
			'use strict';
			return function(n, o, i, l) {
				var a = Math.min,
					r = Math.abs,
					s = Math.PI,
					d = {
						features: null,
						bind: function(e, t, n, o) {
							var l = (o ? 'remove' : 'add') + 'EventListener';
							t = t.split(' ');
							for(var a = 0; a < t.length; a++)
								t[a] && e[l](t[a], n, !1);
						},
						isArray: function(e) {
							return e instanceof Array;
						},
						createEl: function(e, t) {
							var n = document.createElement(t || 'div');
							return e && (n.className = e), n;
						},
						getScrollY: function() {
							var e = window.pageYOffset;
							return void 0 === e ? document.documentElement.scrollTop : e;
						},
						unbind: function(e, t, n) {
							d.bind(e, t, n, !0);
						},
						removeClass: function(e, t) {
							var n = new RegExp('(\\s|^)' + t + '(\\s|$)');
							e.className = e.className.replace(n, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
						},
						addClass: function(e, t) {
							d.hasClass(e, t) || (e.className += (e.className ? ' ' : '') + t);
						},
						hasClass: function(e, t) {
							return e.className && new RegExp('(^|\\s)' + t + '(\\s|$)').test(e.className);
						},
						getChildByClass: function(e, t) {
							for(var n = e.firstChild; n;) {
								if(d.hasClass(n, t))
									return n;
								n = n.nextSibling;
							}
						},
						arraySearch: function(e, t, n) {
							for(var o = e.length; o--;)
								if(e[o][n] === t)
									return o;
							return -1;
						},
						extend: function(e, t, n) {
							for(var i in t)
								if(t.hasOwnProperty(i)) {
									if(n && e.hasOwnProperty(i))
										continue;
									e[i] = t[i];
								}
						},
						easing: {
							sine: {
								out: function(e) {
									return Math.sin(e * (s / 2));
								},
								inOut: function(e) {
									return -(Math.cos(s * e) - 1) / 2;
								}
							},
							cubic: {
								out: function(e) {
									return --e * e * e + 1;
								}
							}
						},
						detectFeatures: function() {
							if(d.features)
								return d.features;
							var t = d.createEl(),
								n = t.style,
								o = '',
								l = {};
							if(l.oldIE = document.all && !document.addEventListener, l.touch = 'ontouchstart' in window, window.requestAnimationFrame && (l.raf = window.requestAnimationFrame, l.caf = window.cancelAnimationFrame), l.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !l.pointerEvent) {
								var r = navigator.userAgent;
								if(/iP(hone|od)/.test(navigator.platform)) {
									var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
									s && 0 < s.length && (s = parseInt(s[1], 10), 1 <= s && 8 > s && (l.isOldIOSPhone = !0));
								}
								var p = r.match(/Android\s([0-9\.]*)/),
									c = p ? p[1] : 0;
								c = parseFloat(c), 1 <= c && (4.4 > c && (l.isOldAndroid = !0), l.androidVersion = c), l.isMobileOpera = /opera mini|opera mobi/i.test(r);
							}
							for(var m, u, g = ['transform', 'perspective', 'animationName'], h = ['', 'webkit', 'Moz', 'ms', 'O'], y = 0; 4 > y; y++) {
								o = h[y];
								for(var i = 0; 3 > i; i++)
									m = g[i], u = o + (o ? m.charAt(0).toUpperCase() + m.slice(1) : m), !l[m] && u in n && (l[m] = u);
								o && !l.raf && (o = o.toLowerCase(), l.raf = window[o + 'RequestAnimationFrame'], l.raf && (l.caf = window[o + 'CancelAnimationFrame'] || window[o + 'CancelRequestAnimationFrame']));
							}
							if(!l.raf) {
								var a = 0;
								l.raf = function(t) {
									var n = new Date().getTime(),
										i = e(0, 16 - (n - a)),
										o = window.setTimeout(function() {
											t(n + i);
										}, i);
									return a = n + i, o;
								}, l.caf = function(e) {
									clearTimeout(e);
								};
							}
							return l.svg = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect, d.features = l, l;
						}
					};
				d.detectFeatures(), d.features.oldIE && (d.bind = function(e, t, n, o) {
					t = t.split(' ');
					for(var l, a = (o ? 'detach' : 'attach') + 'Event', r = function() {
							n.handleEvent.call(n);
						}, s = 0; s < t.length; s++)
						if(l = t[s], l)
							if('object' == typeof n && n.handleEvent) {
								if(!o)
									n['oldIE' + l] = r;
								else if(!n['oldIE' + l])
									return !1;
								e[a]('on' + l, n['oldIE' + l]);
							}
					else
						e[a]('on' + l, n);
				});
				var c = this,
					m = 25,
					u = 3,
					g = {
						allowPanToNext: !0,
						spacing: 0.12,
						bgOpacity: 1,
						mouseUsed: !1,
						loop: !0,
						pinchToClose: !0,
						closeOnScroll: !0,
						closeOnVerticalDrag: !0,
						verticalDragRange: 0.75,
						hideAnimationDuration: 333,
						showAnimationDuration: 333,
						showHideOpacity: !1,
						focus: !0,
						escKey: !0,
						arrowKeys: !0,
						mainScrollEndFriction: 0.35,
						panEndFriction: 0.35,
						isClickableElement: function(e) {
							return 'A' === e.tagName;
						},
						getDoubleTapZoom: function(e, t) {
							return e ? 1 : 0.7 > t.initialZoomLevel ? 1 : 1.33;
						},
						maxSpreadZoom: 1.33,
						modal: !0,
						scaleMode: 'fit'
					};
				d.extend(g, l);
				var h, y, f, b, w, x, C, _, v, E, I, k, P, T, S, O, A, D, R, F, L, z, U, N, Z, B, M, H, W, K, q, G, Y, V, X, j, $, J, Q, ee, te, ne, ie, oe, le, ae, re, se, de, pe, ce, me, ue, ge, he, ye, fe, be = function() {
						return {
							x: 0,
							y: 0
						};
					},
					xe = be(),
					we = be(),
					Ce = be(),
					_e = {},
					ve = 0,
					Ee = {},
					Ie = be(),
					ke = 0,
					Pe = !0,
					Te = [],
					Se = {},
					Oe = !1,
					Ae = function(e, t) {
						d.extend(c, t.publicMethods), Te.push(e);
					},
					De = function(e) {
						var t = ln();
						if(e > t - 1)
							return e - t;
						return 0 > e ? t + e : e;
					},
					Re = {},
					Fe = function(e, t) {
						return Re[e] || (Re[e] = []), Re[e].push(t);
					},
					Le = function(e) {
						var t = Re[e];
						if(t) {
							var n = Array.prototype.slice.call(arguments);
							n.shift();
							for(var o = 0; o < t.length; o++)
								t[o].apply(c, n);
						}
					},
					ze = function() {
						return new Date().getTime();
					},
					Ue = function(e) {
						he = e, c.bg.style.opacity = e * g.bgOpacity;
					},
					Ne = function(e, t, n, i, o) {
						(!Oe || o && o !== c.currItem) && (i /= o ? o.fitRatio : c.currItem.fitRatio), e[z] = k + t + 'px, ' + n + 'px' + P + ' scale(' + i + ')';
					},
					Ze = function(e) {
						pe && (e && (E > c.currItem.fitRatio ? !Oe && (fn(c.currItem, !1, !0), Oe = !0) : Oe && (fn(c.currItem), Oe = !1)), Ne(pe, Ce.x, Ce.y, E));
					},
					Be = function(e) {
						e.container && Ne(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e);
					},
					Me = function(e, t) {
						t[z] = k + e + 'px, 0px' + P;
					},
					He = function(e, n) {
						if(!g.loop && n) {
							var i = b + (Ie.x * ve - e) / Ie.x,
								o = t(e - vt.x);
							(0 > i && 0 < o || i >= ln() - 1 && 0 > o) && (e = vt.x + o * g.mainScrollEndFriction);
						}
						vt.x = e, Me(e, w);
					},
					We = function(e, t) {
						var n = Et[e] - Ee[e];
						return we[e] + xe[e] + n - n * (t / I);
					},
					Ke = function(e, t) {
						e.x = t.x, e.y = t.y, t.id && (e.id = t.id);
					},
					qe = function(e) {
						e.x = t(e.x), e.y = t(e.y);
					},
					Ge = null,
					Ye = function() {
						Ge && (d.unbind(document, 'mousemove', Ye), d.addClass(n, 'pswp--has_mouse'), g.mouseUsed = !0, Le('mouseUsed')), Ge = setTimeout(function() {
							Ge = null;
						}, 100);
					},
					Ve = function() {
						d.bind(document, 'keydown', c), q.transform && d.bind(c.scrollWrap, 'click', c), g.mouseUsed || d.bind(document, 'mousemove', Ye), d.bind(window, 'resize scroll orientationchange', c), Le('bindEvents');
					},
					Xe = function() {
						d.unbind(window, 'resize scroll orientationchange', c), d.unbind(window, 'scroll', v.scroll), d.unbind(document, 'keydown', c), d.unbind(document, 'mousemove', Ye), q.transform && d.unbind(c.scrollWrap, 'click', c), Q && d.unbind(window, C, c), clearTimeout(G), Le('unbindEvents');
					},
					je = function(e, t) {
						var n = un(c.currItem, _e, e);
						return t && (de = n), n;
					},
					$e = function(e) {
						return e || (e = c.currItem), e.initialZoomLevel;
					},
					Je = function(e) {
						return e || (e = c.currItem), 0 < e.w ? g.maxSpreadZoom : 1;
					},
					Qe = function(e, t, n, i) {
						return i === c.currItem.initialZoomLevel ? (n[e] = c.currItem.initialPosition[e], !0) : (n[e] = We(e, i), n[e] > t.min[e]) ? (n[e] = t.min[e], !0) : !!(n[e] < t.max[e]) && (n[e] = t.max[e], !0);
					},
					et = function() {
						if(z) {
							var e = q.perspective && !N;
							return k = 'translate' + (e ? '3d(' : '('), void(P = q.perspective ? ', 0px)' : ')');
						}
						z = 'left', d.addClass(n, 'pswp--ie'), Me = function(e, t) {
							t.left = e + 'px';
						}, Be = function(e) {
							var t = 1 < e.fitRatio ? 1 : e.fitRatio,
								n = e.container.style,
								i = t * e.w,
								o = t * e.h;
							n.width = i + 'px', n.height = o + 'px', n.left = e.initialPosition.x + 'px', n.top = e.initialPosition.y + 'px';
						}, Ze = function() {
							if(pe) {
								var e = pe,
									t = c.currItem,
									n = 1 < t.fitRatio ? 1 : t.fitRatio,
									i = n * t.w,
									o = n * t.h;
								e.width = i + 'px', e.height = o + 'px', e.left = Ce.x + 'px', e.top = Ce.y + 'px';
							}
						};
					},
					tt = function(t) {
						var e = '';
						g.escKey && 27 === t.keyCode ? e = 'close' : g.arrowKeys && (37 === t.keyCode ? e = 'prev' : 39 === t.keyCode && (e = 'next')), !e || t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, c[e]());
					},
					nt = function(t) {
						!t || (ne || te || ce || $) && (t.preventDefault(), t.stopPropagation());
					},
					it = function() {
						c.setScrollOffset(0, d.getScrollY());
					},
					ot = {},
					lt = 0,
					at = function(e) {
						ot[e] && (ot[e].raf && B(ot[e].raf), lt--, delete ot[e]);
					},
					rt = function(e) {
						ot[e] && at(e), ot[e] || (lt++, ot[e] = {});
					},
					st = function() {
						for(var e in ot)
							ot.hasOwnProperty(e) && at(e);
					},
					dt = function(e, n, i, o, l, a, r) {
						var s, t = ze();
						rt(e);
						var d = function() {
							if(ot[e]) {
								if(s = ze() - t, s >= o)
									return at(e), a(i), void(r && r());
								a((i - n) * l(s / o) + n), ot[e].raf = Z(d);
							}
						};
						d();
					},
					pt = 30,
					ct = 10,
					mt = {},
					p = {},
					ut = {},
					gt = {},
					ht = {},
					yt = [],
					ft = {},
					bt = [],
					xt = {},
					wt = 0,
					Ct = be(),
					_t = 0,
					vt = be(),
					Et = be(),
					It = be(),
					kt = function(e, t) {
						return e.x === t.x && e.y === t.y;
					},
					Pt = function(e, t) {
						return r(e.x - t.x) < m && r(e.y - t.y) < m;
					},
					Tt = function(e, t) {
						return xt.x = r(e.x - t.x), xt.y = r(e.y - t.y), Math.sqrt(xt.x * xt.x + xt.y * xt.y);
					},
					St = function() {
						ie && (B(ie), ie = null);
					},
					Ot = function() {
						Q && (ie = Z(Ot), Gt());
					},
					At = function() {
						return 'fit' !== g.scaleMode || E !== c.currItem.initialZoomLevel;
					},
					Dt = function(e, t) {
						return e && e !== document && (e.getAttribute('class') && -1 < e.getAttribute('class').indexOf('pswp__scroll-wrap') ? !1 : t(e) ? e : Dt(e.parentNode, t));
					},
					Rt = {},
					Ft = function(t, e) {
						return Rt.prevent = !Dt(t.target, g.isClickableElement), Le('preventDragEvent', t, e, Rt), Rt.prevent;
					},
					Lt = function(e, t) {
						return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t;
					},
					zt = function(e, t, n) {
						n.x = 0.5 * (e.x + t.x), n.y = 0.5 * (e.y + t.y);
					},
					Ut = function(e, t, n) {
						if(50 < e - V) {
							var i = 2 < bt.length ? bt.shift() : {};
							i.x = t, i.y = n, bt.push(i), V = e;
						}
					},
					Nt = function() {
						var e = Ce.y - c.currItem.initialPosition.y;
						return 1 - r(e / (_e.y / 2));
					},
					Zt = {},
					Bt = {},
					Mt = [],
					Ht = function(t) {
						for(; 0 < Mt.length;)
							Mt.pop();
						return U ? (fe = 0, yt.forEach(function(e) {
							0 === fe ? Mt[0] = e : 1 === fe && (Mt[1] = e), fe++;
						})) : -1 < t.type.indexOf('touch') ? t.touches && 0 < t.touches.length && (Mt[0] = Lt(t.touches[0], Zt), 1 < t.touches.length && (Mt[1] = Lt(t.touches[1], Bt))) : (Zt.x = t.pageX, Zt.y = t.pageY, Zt.id = '', Mt[0] = Zt), Mt;
					},
					Wt = function(e, t) {
						var n, i, o, l, a = 0,
							r = Ce[e] + t[e],
							s = 0 < t[e],
							d = vt.x + t.x,
							p = vt.x - ft.x;
						return n = r > de.min[e] || r < de.max[e] ? g.panEndFriction : 1, r = Ce[e] + t[e] * n, (g.allowPanToNext || E === c.currItem.initialZoomLevel) && (pe ? 'h' === me && 'x' === e && !te && (s ? (r > de.min[e] && (n = g.panEndFriction, a = de.min[e] - r, i = de.min[e] - we[e]), (0 >= i || 0 > p) && 1 < ln() ? (l = d, 0 > p && d > ft.x && (l = ft.x)) : de.min.x !== de.max.x && (o = r)) : (r < de.max[e] && (n = g.panEndFriction, a = r - de.max[e], i = we[e] - de.max[e]), (0 >= i || 0 < p) && 1 < ln() ? (l = d, 0 < p && d < ft.x && (l = ft.x)) : de.min.x !== de.max.x && (o = r))) : l = d, 'x' === e) ? (void 0 !== l && (He(l, !0), oe = l !== ft.x), de.min.x !== de.max.x && (void 0 === o ? !oe && (Ce.x += t.x * n) : Ce.x = o), void 0 !== l) : void(!ce && !oe && E > c.currItem.fitRatio && (Ce[e] += t[e] * n));
					},
					Kt = function(t) {
						if(!('mousedown' === t.type && 0 < t.button)) {
							if(nn)
								return void t.preventDefault();
							if(!(J && 'mousedown' === t.type)) {
								if(Ft(t, !0) && t.preventDefault(), Le('pointerDown'), U) {
									var e = d.arraySearch(yt, t.pointerId, 'id');
									0 > e && (e = yt.length), yt[e] = {
										x: t.pageX,
										y: t.pageY,
										id: t.pointerId
									};
								}
								var n = Ht(t),
									i = n.length;
								le = null, st(), Q && 1 !== i || (Q = ue = !0, d.bind(window, C, c), j = ye = ge = $ = oe = ne = ee = te = !1, me = null, Le('firstTouchStart', n), Ke(we, Ce), xe.x = xe.y = 0, Ke(gt, n[0]), Ke(ht, gt), ft.x = Ie.x * ve, bt = [{
									x: gt.x,
									y: gt.y
								}], V = Y = ze(), je(E, !0), St(), Ot()), ae || !(1 < i) || ce || oe || (I = E, te = !1, ae = ee = !0, xe.y = xe.x = 0, Ke(we, Ce), Ke(mt, n[0]), Ke(p, n[1]), zt(mt, p, It), Et.x = r(It.x) - Ce.x, Et.y = r(It.y) - Ce.y, re = se = Tt(mt, p));
							}
						}
					},
					qt = function(t) {
						if(t.preventDefault(), U) {
							var e = d.arraySearch(yt, t.pointerId, 'id');
							if(-1 < e) {
								var n = yt[e];
								n.x = t.pageX, n.y = t.pageY;
							}
						}
						if(Q) {
							var i = Ht(t);
							if(me || ne || ae)
								le = i;
							else if(vt.x !== Ie.x * ve)
								me = 'h';
							else {
								var o = r(i[0].x - gt.x) - r(i[0].y - gt.y);
								r(o) >= ct && (me = 0 < o ? 'h' : 'v', le = i);
							}
						}
					},
					Gt = function() {
						if(le) {
							var e = le.length;
							if(0 !== e)
								if(Ke(mt, le[0]), ut.x = mt.x - gt.x, ut.y = mt.y - gt.y, ae && 1 < e) {
									if(gt.x = mt.x, gt.y = mt.y, !ut.x && !ut.y && kt(le[1], p))
										return;
									Ke(p, le[1]), te || (te = !0, Le('zoomGestureStarted'));
									var t = Tt(mt, p),
										n = $t(t);
									n > c.currItem.initialZoomLevel + c.currItem.initialZoomLevel / 15 && (ye = !0);
									var i = 1,
										o = $e(),
										l = Je();
									if(!(n < o))
										n > l && (i = (n - l) / (6 * o), 1 < i && (i = 1), n = l + i * o);
									else if(g.pinchToClose && !ye && I <= c.currItem.initialZoomLevel) {
										var a = o - n,
											s = 1 - a / (o / 1.2);
										Ue(s), Le('onPinchClose', s), ge = !0;
									} else
										i = (o - n) / o, 1 < i && (i = 1), n = o - i * (o / 3);
									0 > i && (i = 0), re = t, zt(mt, p, Ct), xe.x += Ct.x - It.x, xe.y += Ct.y - It.y, Ke(It, Ct), Ce.x = We('x', n), Ce.y = We('y', n), j = n > E, E = n, Ze();
								}
							else {
								if(!me)
									return;
								if(ue && (ue = !1, r(ut.x) >= ct && (ut.x -= le[0].x - ht.x), r(ut.y) >= ct && (ut.y -= le[0].y - ht.y)), gt.x = mt.x, gt.y = mt.y, 0 === ut.x && 0 === ut.y)
									return;
								if('v' === me && g.closeOnVerticalDrag && !At()) {
									xe.y += ut.y, Ce.y += ut.y;
									var d = Nt();
									return $ = !0, Le('onVerticalDrag', d), Ue(d), void Ze();
								}
								Ut(ze(), mt.x, mt.y), ne = !0, de = c.currItem.bounds;
								var m = Wt('x', ut);
								m || (Wt('y', ut), qe(Ce), Ze());
							}
						}
					},
					Yt = function(t) {
						if(q.isOldAndroid) {
							if(J && 'mouseup' === t.type)
								return; -
							1 < t.type.indexOf('touch') && (clearTimeout(J), J = setTimeout(function() {
								J = 0;
							}, 600));
						}
						Le('pointerUp'), Ft(t, !1) && t.preventDefault();
						var e;
						if(U) {
							var n = d.arraySearch(yt, t.pointerId, 'id');
							if(-1 < n)
								if(e = yt.splice(n, 1)[0], navigator.pointerEnabled)
									e.type = t.pointerType || 'mouse';
								else {
									e.type = {
										2: 'touch',
										3: 'pen',
										4: 'mouse'
									}[t.pointerType], e.type || (e.type = t.pointerType || 'mouse');
								}
						}
						var i, o = Ht(t),
							l = o.length;
						if('mouseup' === t.type && (l = 0), 2 === l)
							return le = null, !0;
						1 === l && Ke(ht, o[0]), 0 !== l || me || ce || (!e && ('mouseup' === t.type ? e = {
							x: t.pageX,
							y: t.pageY,
							type: 'mouse'
						} : t.changedTouches && t.changedTouches[0] && (e = {
							x: t.changedTouches[0].pageX,
							y: t.changedTouches[0].pageY,
							type: 'touch'
						})), Le('touchRelease', t, e));
						var a = -1;
						if(0 === l && (Q = !1, d.unbind(window, C, c), St(), ae ? a = 0 : -1 != _t && (a = ze() - _t)), _t = 1 === l ? ze() : -1, i = -1 != a && 150 > a ? 'zoom' : 'swipe', ae && 2 > l && (ae = !1, 1 === l && (i = 'zoomPointerUp'), Le('zoomGestureEnded')), le = null, ne || te || ce || $) {
							if(st(), X || (X = Vt()), X.calculateSwipeSpeed('x'), $) {
								var r = Nt();
								if(r < g.verticalDragRange)
									c.close();
								else {
									var s = Ce.y,
										p = he;
									dt('verticalDrag', 0, 1, 300, d.easing.cubic.out, function(e) {
										Ce.y = (c.currItem.initialPosition.y - s) * e + s, Ue((1 - p) * e + p), Ze();
									}), Le('onVerticalDrag', 1);
								}
								return;
							}
							if((oe || ce) && 0 === l) {
								var m = jt(i, X);
								if(m)
									return;
								i = 'zoomPointerUp';
							}
							return ce ? void 0 : 'swipe' === i ? void(!oe && E > c.currItem.fitRatio && Xt(X)) : void Jt();
						}
					},
					Vt = function() {
						var e, n, i = {
							lastFlickOffset: {},
							lastFlickDist: {},
							lastFlickSpeed: {},
							slowDownRatio: {},
							slowDownRatioReverse: {},
							speedDecelerationRatio: {},
							speedDecelerationRatioAbs: {},
							distanceOffset: {},
							backAnimDestination: {},
							backAnimStarted: {},
							calculateSwipeSpeed: function(t) {
								1 < bt.length ? (e = ze() - V + 50, n = bt[bt.length - 2][t]) : (e = ze() - Y, n = ht[t]), i.lastFlickOffset[t] = gt[t] - n, i.lastFlickDist[t] = r(i.lastFlickOffset[t]), i.lastFlickSpeed[t] = 20 < i.lastFlickDist[t] ? i.lastFlickOffset[t] / e : 0, 0.1 > r(i.lastFlickSpeed[t]) && (i.lastFlickSpeed[t] = 0), i.slowDownRatio[t] = 0.95, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatio[t] = 1;
							},
							calculateOverBoundsAnimOffset: function(e, t) {
								i.backAnimStarted[e] || (Ce[e] > de.min[e] ? i.backAnimDestination[e] = de.min[e] : Ce[e] < de.max[e] && (i.backAnimDestination[e] = de.max[e]), i.backAnimDestination[e] !== void 0 && (i.slowDownRatio[e] = 0.7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], 0.05 > i.speedDecelerationRatioAbs[e] && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, dt('bounceZoomPan' + e, Ce[e], i.backAnimDestination[e], t || 300, d.easing.sine.out, function(t) {
									Ce[e] = t, Ze();
								}))));
							},
							calculateAnimOffset: function(e) {
								i.backAnimStarted[e] || (i.speedDecelerationRatio[e] *= i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10, i.speedDecelerationRatioAbs[e] = r(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, Ce[e] += i.distanceOffset[e]);
							},
							panAnimLoop: function() {
								if(ot.zoomPan && (ot.zoomPan.raf = Z(i.panAnimLoop), i.now = ze(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset('x'), i.calculateAnimOffset('y'), Ze(), i.calculateOverBoundsAnimOffset('x'), i.calculateOverBoundsAnimOffset('y'), 0.05 > i.speedDecelerationRatioAbs.x && 0.05 > i.speedDecelerationRatioAbs.y))
									return Ce.x = t(Ce.x), Ce.y = t(Ce.y), Ze(), void at('zoomPan');
							}
						};
						return i;
					},
					Xt = function(e) {
						return e.calculateSwipeSpeed('y'), de = c.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, 0.05 >= r(e.lastFlickSpeed.x) && 0.05 >= r(e.lastFlickSpeed.y) ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset('x'), e.calculateOverBoundsAnimOffset('y'), !0) : void(rt('zoomPan'), e.lastNow = ze(), e.panAnimLoop());
					},
					jt = function(t, n) {
						var i;
						ce || (wt = b);
						var o;
						if('swipe' === t) {
							var l = gt.x - ht.x,
								s = 10 > n.lastFlickDist.x;
							l > pt && (s || 20 < n.lastFlickOffset.x) ? o = -1 : l < -pt && (s || -20 > n.lastFlickOffset.x) && (o = 1);
						}
						var p;
						o && (b += o, 0 > b ? (b = g.loop ? ln() - 1 : 0, p = !0) : b >= ln() && (b = g.loop ? 0 : ln() - 1, p = !0), (!p || g.loop) && (ke += o, ve -= o, i = !0));
						var m, u = Ie.x * ve,
							h = r(u - vt.x);
						return i || u > vt.x == 0 < n.lastFlickSpeed.x ? (m = 0 < r(n.lastFlickSpeed.x) ? h / r(n.lastFlickSpeed.x) : 333, m = a(m, 400), m = e(m, 250)) : m = 333, wt === b && (i = !1), ce = !0, Le('mainScrollAnimStart'), dt('mainScroll', vt.x, u, m, d.easing.cubic.out, He, function() {
							st(), ce = !1, wt = -1, (i || wt !== b) && c.updateCurrItem(), Le('mainScrollAnimComplete');
						}), i && c.updateCurrItem(!0), i;
					},
					$t = function(e) {
						return 1 / se * e * I;
					},
					Jt = function() {
						var e = E,
							t = $e(),
							n = Je();
						E < t ? e = t : E > n && (e = n);
						var i, o = he;
						return ge && !j && !ye && E < t ? (c.close(), !0) : (ge && (i = function(e) {
							Ue((1 - o) * e + o);
						}), c.zoomTo(e, 0, 200, d.easing.cubic.out, i), !0);
					};
				Ae('Gestures', {
					publicMethods: {
						initGestures: function() {
							var e = function(e, t, n, i, o) {
								D = e + t, R = e + n, F = e + i, L = o ? e + o : '';
							};
							U = q.pointerEvent, U && q.touch && (q.touch = !1), U ? navigator.pointerEnabled ? e('pointer', 'down', 'move', 'up', 'cancel') : e('MSPointer', 'Down', 'Move', 'Up', 'Cancel') : q.touch ? (e('touch', 'start', 'move', 'end', 'cancel'), N = !0) : e('mouse', 'down', 'move', 'up'), C = R + ' ' + F + ' ' + L, _ = D, U && !N && (N = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), c.likelyTouchDevice = N, v[D] = Kt, v[R] = qt, v[F] = Yt, L && (v[L] = v[F]), q.touch && (_ += ' mousedown', C += ' mousemove mouseup', v.mousedown = v[D], v.mousemove = v[R], v.mouseup = v[F]), N || (g.allowPanToNext = !1);
						}
					}
				});
				var Qt, en, tn, nn, on, ln, an, rn = function(e, t, i, o) {
						Qt && clearTimeout(Qt), nn = !0, tn = !0;
						var l;
						e.initialLayout ? (l = e.initialLayout, e.initialLayout = null) : l = g.getThumbBoundsFn && g.getThumbBoundsFn(b);
						var a = i ? g.hideAnimationDuration : g.showAnimationDuration,
							r = function() {
								at('initialZoom'), i ? (c.template.removeAttribute('style'), c.bg.removeAttribute('style')) : (Ue(1), t && (t.style.display = 'block'), d.addClass(n, 'pswp--animated-in'), Le('initialZoom' + (i ? 'OutEnd' : 'InEnd'))), o && o(), nn = !1;
							};
						if(!a || !l || void 0 === l.x)
							return Le('initialZoom' + (i ? 'Out' : 'In')), E = e.initialZoomLevel, Ke(Ce, e.initialPosition), Ze(), n.style.opacity = i ? 0 : 1, Ue(1), void(a ? setTimeout(function() {
								r();
							}, a) : r());
						(function() {
							var t = f,
								o = !c.currItem.src || c.currItem.loadError || g.showHideOpacity;
							e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = 'hidden'), i || (E = l.w / e.w, Ce.x = l.x, Ce.y = l.y - H, c[o ? 'template' : 'bg'].style.opacity = 1e-3, Ze()), rt('initialZoom'), i && !t && d.removeClass(n, 'pswp--animated-in'), o && (i ? d[(t ? 'remove' : 'add') + 'Class'](n, 'pswp--animate_opacity') : setTimeout(function() {
								d.addClass(n, 'pswp--animate_opacity');
							}, 30)), Qt = setTimeout(function() {
								if(Le('initialZoom' + (i ? 'Out' : 'In')), !i)
									E = e.initialZoomLevel, Ke(Ce, e.initialPosition), Ze(), Ue(1), o ? n.style.opacity = 1 : Ue(1), Qt = setTimeout(r, a + 20);
								else {
									var s = l.w / e.w,
										p = {
											x: Ce.x,
											y: Ce.y
										},
										c = E,
										m = he,
										u = function(e) {
											1 === e ? (E = s, Ce.x = l.x, Ce.y = l.y - K) : (E = (s - c) * e + c, Ce.x = (l.x - p.x) * e + p.x, Ce.y = (l.y - K - p.y) * e + p.y), Ze(), o ? n.style.opacity = 1 - e : Ue(m - e * m);
										};
									t ? dt('initialZoom', 0, 1, a, d.easing.cubic.out, u, r) : (u(1), Qt = setTimeout(r, a + 20));
								}
							}, i ? 25 : 90);
						})();
					},
					sn = {},
					dn = [],
					pn = {
						index: 0,
						errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
						forceProgressiveLoading: !1,
						preload: [1, 1],
						getNumItemsFn: function() {
							return en.length;
						}
					},
					cn = function() {
						return {
							center: {
								x: 0,
								y: 0
							},
							max: {
								x: 0,
								y: 0
							},
							min: {
								x: 0,
								y: 0
							}
						};
					},
					mn = function(e, n, i) {
						var o = e.bounds;
						o.center.x = t((sn.x - n) / 2), o.center.y = t((sn.y - i) / 2) + e.vGap.top, o.max.x = n > sn.x ? t(sn.x - n) : o.center.x, o.max.y = i > sn.y ? t(sn.y - i) + e.vGap.top : o.center.y, o.min.x = n > sn.x ? 0 : o.center.x, o.min.y = i > sn.y ? e.vGap.top : o.center.y;
					},
					un = function(e, t, n) {
						if(e.src && !e.loadError) {
							var i = !n;
							if(i && (!e.vGap && (e.vGap = {
									top: 0,
									bottom: 0
								}), Le('parseVerticalMargin', e)), sn.x = t.x, sn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
								var o = sn.x / e.w,
									l = sn.y / e.h;
								e.fitRatio = o < l ? o : l;
								var a = g.scaleMode;
								'orig' === a ? n = 1 : 'fit' === a && (n = e.fitRatio), 1 < n && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = cn());
							}
							return n ? (mn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds) : void 0;
						}
						return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = cn(), e.initialPosition = e.bounds.center, e.bounds;
					},
					gn = function(e, t, n, i, o, l) {
						t.loadError || i && (t.imageAppended = !0, fn(t, i, t === c.currItem && Oe), n.appendChild(i), l && setTimeout(function() {
							t && t.loaded && t.placeholder && (t.placeholder.style.display = 'none', t.placeholder = null);
						}, 500));
					},
					hn = function(e) {
						e.loading = !0, e.loaded = !1;
						var t = e.img = d.createEl('pswp__img', 'img'),
							n = function() {
								e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null;
							};
						return t.onload = n, t.onerror = function() {
							e.loadError = !0, n();
						}, t.src = e.src, t;
					},
					yn = function(e, t) {
						if(e.src && e.loadError && e.container)
							return t && (e.container.innerHTML = ''), e.container.innerHTML = g.errorMsg.replace('%url%', e.src), !0;
					},
					fn = function(e, n, i) {
						if(e.src) {
							n || (n = e.container.lastChild);
							var o = i ? e.w : t(e.w * e.fitRatio),
								l = i ? e.h : t(e.h * e.fitRatio);
							e.placeholder && !e.loaded && (e.placeholder.style.width = o + 'px', e.placeholder.style.height = l + 'px'), n.style.width = o + 'px', n.style.height = l + 'px';
						}
					},
					bn = function() {
						if(dn.length) {
							for(var e, t = 0; t < dn.length; t++)
								e = dn[t], e.holder.index === e.index && gn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
							dn = [];
						}
					};
				Ae('Controller', {
					publicMethods: {
						lazyLoadItem: function(e) {
							e = De(e);
							var t = on(e);
							t && (!t.loaded && !t.loading || S) && (Le('gettingData', e, t), t.src && hn(t));
						},
						initController: function() {
							d.extend(g, pn, !0), c.items = en = i, on = c.getItemAt, ln = g.getNumItemsFn, an = g.loop, 3 > ln() && (g.loop = !1), Fe('beforeChange', function(e) {
								var t, n = g.preload,
									i = !(null !== e) || 0 <= e,
									o = a(n[0], ln()),
									l = a(n[1], ln());
								for(t = 1; t <= (i ? l : o); t++)
									c.lazyLoadItem(b + t);
								for(t = 1; t <= (i ? o : l); t++)
									c.lazyLoadItem(b - t);
							}), Fe('initialLayout', function() {
								c.currItem.initialLayout = g.getThumbBoundsFn && g.getThumbBoundsFn(b);
							}), Fe('mainScrollAnimComplete', bn), Fe('initialZoomInEnd', bn), Fe('destroy', function() {
								for(var e, t = 0; t < en.length; t++)
									e = en[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
								dn = null;
							});
						},
						getItemAt: function(e) {
							return !!(0 <= e) && void 0 !== en[e] && en[e];
						},
						allowProgressiveImg: function() {
							return g.forceProgressiveLoading || !N || g.mouseUsed || 1200 < screen.width;
						},
						setContent: function(e, t) {
							g.loop && (t = De(t));
							var n = c.getItemAt(e.index);
							n && (n.container = null);
							var i, o = c.getItemAt(t);
							if(!o)
								return void(e.el.innerHTML = '');
							Le('gettingData', t, o), e.index = t, e.item = o;
							var l = o.container = d.createEl('pswp__zoom-wrap');
							if(!o.src && o.html && (o.html.tagName ? l.appendChild(o.html) : l.innerHTML = o.html), yn(o), un(o, _e), o.src && !o.loadError && !o.loaded) {
								if(o.loadComplete = function(n) {
										if(h) {
											if(e && e.index === t) {
												if(yn(n, !0))
													return n.loadComplete = n.img = null, un(n, _e), Be(n), void(e.index === b && c.updateCurrZoomItem());
												n.imageAppended ? !nn && n.placeholder && (n.placeholder.style.display = 'none', n.placeholder = null) : q.transform && (ce || nn) ? dn.push({
													item: n,
													baseDiv: l,
													img: n.img,
													index: t,
													holder: e,
													clearPlaceholder: !0
												}) : gn(t, n, l, n.img, ce || nn, !0);
											}
											n.loadComplete = null, n.img = null, Le('imageLoadComplete', t, n);
										}
									}, d.features.transform) {
									var a = 'pswp__img pswp__img--placeholder';
									a += o.msrc ? '' : ' pswp__img--placeholder--blank';
									var r = d.createEl(a, o.msrc ? 'img' : '');
									o.msrc && (r.src = o.msrc), fn(o, r), l.appendChild(r), o.placeholder = r;
								}
								o.loading || hn(o), c.allowProgressiveImg() && (!tn && q.transform ? dn.push({
									item: o,
									baseDiv: l,
									img: o.img,
									index: t,
									holder: e
								}) : gn(t, o, l, o.img, !0, !0));
							} else
								o.src && !o.loadError && (i = d.createEl('pswp__img', 'img'), i.style.opacity = 1, i.src = o.src, fn(o, i), gn(t, o, l, i, !0));
							tn || t !== b ? Be(o) : (pe = l.style, rn(o, i || o.img)), e.el.innerHTML = '', e.el.appendChild(l);
						},
						cleanSlide: function(e) {
							e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1;
						}
					}
				});
				var xn, wn = {},
					Cn = function(t, n, i) {
						var o = document.createEvent('CustomEvent'),
							e = {
								origEvent: t,
								target: t.target,
								releasePoint: n,
								pointerType: i || 'touch'
							};
						o.initCustomEvent('pswpTap', !0, !0, e), t.target.dispatchEvent(o);
					};
				Ae('Tap', {
					publicMethods: {
						initTap: function() {
							Fe('firstTouchStart', c.onTapStart), Fe('touchRelease', c.onTapRelease), Fe('destroy', function() {
								wn = {}, xn = null;
							});
						},
						onTapStart: function(e) {
							1 < e.length && (clearTimeout(xn), xn = null);
						},
						onTapRelease: function(t, e) {
							if(e && !ne && !ee && !lt) {
								var n = e;
								if(xn && (clearTimeout(xn), xn = null, Pt(n, wn)))
									return void Le('doubleTap', n);
								if('mouse' === e.type)
									return void Cn(t, e, 'mouse');
								var i = t.target.tagName.toUpperCase();
								if('BUTTON' === i || d.hasClass(t.target, 'pswp__single-tap'))
									return void Cn(t, e);
								Ke(wn, n), xn = setTimeout(function() {
									Cn(t, e), xn = null;
								}, 300);
							}
						}
					}
				});
				var _n;
				Ae('DesktopZoom', {
					publicMethods: {
						initDesktopZoom: function() {
							W || (N ? Fe('mouseUsed', function() {
								c.setupDesktopZoom();
							}) : c.setupDesktopZoom(!0));
						},
						setupDesktopZoom: function(e) {
							_n = {};
							var t = 'wheel mousewheel DOMMouseScroll';
							Fe('bindEvents', function() {
								d.bind(n, t, c.handleMouseWheel);
							}), Fe('unbindEvents', function() {
								_n && d.unbind(n, t, c.handleMouseWheel);
							}), c.mouseZoomedIn = !1;
							var i, o = function() {
									c.mouseZoomedIn && (d.removeClass(n, 'pswp--zoomed-in'), c.mouseZoomedIn = !1), 1 > E ? d.addClass(n, 'pswp--zoom-allowed') : d.removeClass(n, 'pswp--zoom-allowed'), l();
								},
								l = function() {
									i && (d.removeClass(n, 'pswp--dragging'), i = !1);
								};
							Fe('resize', o), Fe('afterChange', o), Fe('pointerDown', function() {
								c.mouseZoomedIn && (i = !0, d.addClass(n, 'pswp--dragging'));
							}), Fe('pointerUp', l), e || o();
						},
						handleMouseWheel: function(t) {
							if(E <= c.currItem.fitRatio)
								return g.modal && (!g.closeOnScroll || lt || Q ? t.preventDefault() : z && 2 < r(t.deltaY) && (f = !0, c.close())), !0;
							if(t.stopPropagation(), _n.x = 0, 'deltaX' in t)
								1 === t.deltaMode ? (_n.x = 18 * t.deltaX, _n.y = 18 * t.deltaY) : (_n.x = t.deltaX, _n.y = t.deltaY);
							else if('wheelDelta' in t)
								t.wheelDeltaX && (_n.x = -0.16 * t.wheelDeltaX), _n.y = t.wheelDeltaY ? -0.16 * t.wheelDeltaY : -0.16 * t.wheelDelta;
							else if('detail' in t)
								_n.y = t.detail;
							else
								return;
							je(E, !0);
							var e = Ce.x - _n.x,
								n = Ce.y - _n.y;
							(g.modal || e <= de.min.x && e >= de.max.x && n <= de.min.y && n >= de.max.y) && t.preventDefault(), c.panTo(e, n);
						},
						toggleDesktopZoom: function(e) {
							e = e || {
								x: _e.x / 2 + Ee.x,
								y: _e.y / 2 + Ee.y
							};
							var t = g.getDoubleTapZoom(!0, c.currItem),
								i = E === t;
							c.mouseZoomedIn = !i, c.zoomTo(i ? c.currItem.initialZoomLevel : t, e, 333), d[(i ? 'remove' : 'add') + 'Class'](n, 'pswp--zoomed-in');
						}
					}
				});
				var vn, En, In, kn, Pn, Tn, Sn, On, An, Dn, Rn, Fn, Ln = {
						history: !0,
						galleryUID: 1
					},
					zn = function() {
						return Rn.hash.substring(1);
					},
					Un = function() {
						vn && clearTimeout(vn), In && clearTimeout(In);
					},
					Nn = function() {
						var e = zn(),
							t = {};
						if(5 > e.length)
							return t;
						var n, i = e.split('&');
						for(n = 0; n < i.length; n++)
							if(i[n]) {
								var o = i[n].split('=');
								2 > o.length || (t[o[0]] = o[1]);
							}
						if(g.galleryPIDs) {
							var l = t.pid;
							for(t.pid = 0, n = 0; n < en.length; n++)
								if(en[n].pid === l) {
									t.pid = n;
									break;
								}
						} else
							t.pid = parseInt(t.pid, 10) - 1;
						return 0 > t.pid && (t.pid = 0), t;
					},
					Zn = function() {
						if(In && clearTimeout(In), lt || Q)
							return void(In = setTimeout(Zn, 500));
						kn ? clearTimeout(En) : kn = !0;
						var e = b + 1,
							t = on(b);
						t.hasOwnProperty('pid') && (e = t.pid);
						var n = Sn + '&gid=' + g.galleryUID + '&pid=' + e;
						On || -1 !== Rn.hash.indexOf(n) || (Dn = !0);
						var i = Rn.href.split('#')[0] + '#' + n;
						Fn ? '#' + n !== window.location.hash && history[On ? 'replaceState' : 'pushState']('', document.title, i) : On ? Rn.replace(i) : Rn.hash = n, On = !0, En = setTimeout(function() {
							kn = !1;
						}, 60);
					};
				Ae('History', {
					publicMethods: {
						initHistory: function() {
							if(d.extend(g, Ln, !0), !!g.history) {
								Rn = window.location, Dn = !1, An = !1, On = !1, Sn = zn(), Fn = 'pushState' in history, -1 < Sn.indexOf('gid=') && (Sn = Sn.split('&gid=')[0], Sn = Sn.split('?gid=')[0]), Fe('afterChange', c.updateURL), Fe('unbindEvents', function() {
									d.unbind(window, 'hashchange', c.onHashChange);
								});
								var e = function() {
									Tn = !0, An || (Dn ? history.back() : Sn ? Rn.hash = Sn : Fn ? history.pushState('', document.title, Rn.pathname + Rn.search) : Rn.hash = ''), Un();
								};
								Fe('unbindEvents', function() {
									f && e();
								}), Fe('destroy', function() {
									Tn || e();
								}), Fe('firstUpdate', function() {
									b = Nn().pid;
								});
								var t = Sn.indexOf('pid='); -
								1 < t && (Sn = Sn.substring(0, t), '&' === Sn.slice(-1) && (Sn = Sn.slice(0, -1))), setTimeout(function() {
									h && d.bind(window, 'hashchange', c.onHashChange);
								}, 40);
							}
						},
						onHashChange: function() {
							return zn() === Sn ? (An = !0, void c.close()) : void(!kn && (Pn = !0, c.goTo(Nn().pid), Pn = !1));
						},
						updateURL: function() {
							Un();
							Pn || (On ? vn = setTimeout(Zn, 800) : Zn());
						}
					}
				}), d.extend(c, {
					shout: Le,
					listen: Fe,
					viewportSize: _e,
					options: g,
					isMainScrollAnimating: function() {
						return ce;
					},
					getZoomLevel: function() {
						return E;
					},
					getCurrentIndex: function() {
						return b;
					},
					isDragging: function() {
						return Q;
					},
					isZooming: function() {
						return ae;
					},
					setScrollOffset: function(e, t) {
						Ee.x = e, K = Ee.y = t, Le('updateScrollOffset', Ee);
					},
					applyZoomPan: function(e, t, n, i) {
						Ce.x = t, Ce.y = n, E = e, Ze(i);
					},
					init: function() {
						if(!(h || y)) {
							var e;
							c.framework = d, c.template = n, c.bg = d.getChildByClass(n, 'pswp__bg'), M = n.className, h = !0, q = d.detectFeatures(), Z = q.raf, B = q.caf, z = q.transform, W = q.oldIE, c.scrollWrap = d.getChildByClass(n, 'pswp__scroll-wrap'), c.container = d.getChildByClass(c.scrollWrap, 'pswp__container'), w = c.container.style, c.itemHolders = O = [{
								el: c.container.children[0],
								wrap: 0,
								index: -1
							}, {
								el: c.container.children[1],
								wrap: 0,
								index: -1
							}, {
								el: c.container.children[2],
								wrap: 0,
								index: -1
							}], O[0].el.style.display = O[2].el.style.display = 'none', et(), v = {
								resize: c.updateSize,
								orientationchange: function() {
									clearTimeout(G), G = setTimeout(function() {
										_e.x !== c.scrollWrap.clientWidth && c.updateSize();
									}, 500);
								},
								scroll: it,
								keydown: tt,
								click: nt
							};
							var t = q.isOldIOSPhone || q.isOldAndroid || q.isMobileOpera;
							for(q.animationName && q.transform && !t || (g.showAnimationDuration = g.hideAnimationDuration = 0), e = 0; e < Te.length; e++)
								c['init' + Te[e]]();
							if(o) {
								var i = c.ui = new o(c, d);
								i.init();
							}
							Le('firstUpdate'), b = b || g.index || 0, (isNaN(b) || 0 > b || b >= ln()) && (b = 0), c.currItem = on(b), (q.isOldIOSPhone || q.isOldAndroid) && (Pe = !1), n.setAttribute('aria-hidden', 'false'), g.modal && (Pe ? n.style.position = 'fixed' : (n.style.position = 'absolute', n.style.top = d.getScrollY() + 'px')), void 0 === K && (Le('initialLayout'), K = H = d.getScrollY());
							var l = 'pswp--open ';
							for(g.mainClass && (l += g.mainClass + ' '), g.showHideOpacity && (l += 'pswp--animate_opacity '), l += N ? 'pswp--touch' : 'pswp--notouch', l += q.animationName ? ' pswp--css_animation' : '', l += q.svg ? ' pswp--svg' : '', d.addClass(n, l), c.updateSize(), x = -1, ke = null, e = 0; e < u; e++)
								Me((e + x) * Ie.x, O[e].el.style);
							W || d.bind(c.scrollWrap, _, c), Fe('initialZoomInEnd', function() {
								c.setContent(O[0], b - 1), c.setContent(O[2], b + 1), O[0].el.style.display = O[2].el.style.display = 'block', g.focus && n.focus(), Ve();
							}), c.setContent(O[1], b), c.updateCurrItem(), Le('afterInit'), Pe || (T = setInterval(function() {
								lt || Q || ae || E !== c.currItem.initialZoomLevel || c.updateSize();
							}, 1e3)), d.addClass(n, 'pswp--visible');
						}
					},
					close: function() {
						h && (h = !1, y = !0, Le('close'), Xe(), rn(c.currItem, null, !0, c.destroy));
					},
					destroy: function() {
						Le('destroy'), Qt && clearTimeout(Qt), n.setAttribute('aria-hidden', 'true'), n.className = M, T && clearInterval(T), d.unbind(c.scrollWrap, _, c), d.unbind(window, 'scroll', c), St(), st(), Re = null;
					},
					panTo: function(e, t, n) {
						n || (e > de.min.x ? e = de.min.x : e < de.max.x && (e = de.max.x), t > de.min.y ? t = de.min.y : t < de.max.y && (t = de.max.y)), Ce.x = e, Ce.y = t, Ze();
					},
					handleEvent: function(t) {
						t = t || window.event, v[t.type] && v[t.type](t);
					},
					goTo: function(e) {
						e = De(e);
						var t = e - b;
						ke = t, b = e, c.currItem = on(b), ve -= t, He(Ie.x * ve), st(), ce = !1, c.updateCurrItem();
					},
					next: function() {
						c.goTo(b + 1);
					},
					prev: function() {
						c.goTo(b - 1);
					},
					updateCurrZoomItem: function(e) {
						if(e && Le('beforeChange', 0), O[1].el.children.length) {
							var t = O[1].el.children[0];
							pe = d.hasClass(t, 'pswp__zoom-wrap') ? t.style : null;
						} else
							pe = null;
						de = c.currItem.bounds, I = E = c.currItem.initialZoomLevel, Ce.x = de.center.x, Ce.y = de.center.y, e && Le('afterChange');
					},
					invalidateCurrItems: function() {
						S = !0;
						for(var e = 0; e < u; e++)
							O[e].item && (O[e].item.needsUpdate = !0);
					},
					updateCurrItem: function(e) {
						if(0 !== ke) {
							var t, n = r(ke);
							if(!(e && 2 > n)) {
								c.currItem = on(b), Oe = !1, Le('beforeChange', ke), n >= u && (x += ke + (0 < ke ? -u : u), n = u);
								for(var o = 0; o < n; o++)
									0 < ke ? (t = O.shift(), O[u - 1] = t, x++, Me((x + 2) * Ie.x, t.el.style), c.setContent(t, b - n + o + 1 + 1)) : (t = O.pop(), O.unshift(t), x--, Me(x * Ie.x, t.el.style), c.setContent(t, b + n - o - 1 - 1));
								if(pe && 1 === r(ke)) {
									var i = on(A);
									i.initialZoomLevel !== E && (un(i, _e), fn(i), Be(i));
								}
								ke = 0, c.updateCurrZoomItem(), A = b, Le('afterChange');
							}
						}
					},
					updateSize: function(e) {
						if(!Pe && g.modal) {
							var o = d.getScrollY();
							if(K !== o && (n.style.top = o + 'px', K = o), !e && Se.x === window.innerWidth && Se.y === window.innerHeight)
								return;
							Se.x = window.innerWidth, Se.y = window.innerHeight, n.style.height = Se.y + 'px';
						}
						if(_e.x = c.scrollWrap.clientWidth, _e.y = c.scrollWrap.clientHeight, it(), Ie.x = _e.x + t(_e.x * g.spacing), Ie.y = _e.y, He(Ie.x * ve), Le('beforeResize'), void 0 !== x) {
							for(var l, a, r, s = 0; s < u; s++)
								l = O[s], Me((s + x) * Ie.x, l.el.style), r = b + s - 1, g.loop && 2 < ln() && (r = De(r)), a = on(r), a && (S || a.needsUpdate || !a.bounds) ? (c.cleanSlide(a), c.setContent(l, r), 1 === s && (c.currItem = a, c.updateCurrZoomItem(!0)), a.needsUpdate = !1) : -1 === l.index && 0 <= r && c.setContent(l, r), a && a.container && (un(a, _e), fn(a), Be(a));
							S = !1;
						}
						I = E = c.currItem.initialZoomLevel, de = c.currItem.bounds, de && (Ce.x = de.center.x, Ce.y = de.center.y, Ze(!0)), Le('resize');
					},
					zoomTo: function(e, t, n, i, o) {
						t && (I = E, Et.x = r(t.x) - Ce.x, Et.y = r(t.y) - Ce.y, Ke(we, Ce));
						var l = je(e, !1),
							a = {};
						Qe('x', l, a, e), Qe('y', l, a, e);
						var s = E,
							p = {
								x: Ce.x,
								y: Ce.y
							};
						qe(a);
						var c = function(t) {
							1 === t ? (E = e, Ce.x = a.x, Ce.y = a.y) : (E = (e - s) * t + s, Ce.x = (a.x - p.x) * t + p.x, Ce.y = (a.y - p.y) * t + p.y), o && o(t), Ze(1 === t);
						};
						n ? dt('customZoomTo', 0, 1, n, i || d.easing.sine.inOut, c) : c(1);
					}
				});
			};
		});
	}, function(e, n, i) {
		var o, l;
		(function(t, a) {
			o = a, l = 'function' == typeof o ? o.call(n, i, n, e) : o, !(l !== void 0 && (e.exports = l));
		})(this, function() {
			'use strict';
			return function(n, o) {
				var i, l, e, a, r, s, d, p, c, m, u, g, h, y, f, b, x, w, C = this,
					_ = !1,
					v = !0,
					E = !0,
					I = {
						barsSize: {
							top: 44,
							bottom: 'auto'
						},
						closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
						timeToIdle: 4e3,
						timeToIdleOutside: 1e3,
						loadingIndicatorDelay: 1e3,
						addCaptionHTMLFn: function(e, t) {
							return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = '', !1);
						},
						closeEl: !0,
						captionEl: !0,
						fullscreenEl: !0,
						zoomEl: !0,
						shareEl: !0,
						counterEl: !0,
						arrowEl: !0,
						preloaderEl: !0,
						tapToClose: !1,
						tapToToggleControls: !0,
						clickToCloseNonZoomable: !0,
						shareButtons: [{
							id: 'facebook',
							label: 'Share on Facebook',
							url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
						}, {
							id: 'twitter',
							label: 'Tweet',
							url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
						}, {
							id: 'pinterest',
							label: 'Pin it',
							url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
						}, {
							id: 'download',
							label: 'Download image',
							url: '{{raw_image_url}}',
							download: !0
						}],
						getImageURLForShare: function() {
							return n.currItem.src || '';
						},
						getPageURLForShare: function() {
							return window.location.href;
						},
						getTextForShare: function() {
							return n.currItem.title || '';
						},
						indexIndicatorSep: ' / ',
						fitControlsWidth: 1200
					},
					k = function(t) {
						if(b)
							return !0;
						t = t || window.event, f.timeToIdle && f.mouseUsed && !c && z();
						for(var e, n, l = t.target || t.srcElement, a = l.getAttribute('class') || '', r = 0; r < K.length; r++)
							e = K[r], e.onTap && -1 < a.indexOf('pswp__' + e.name) && (e.onTap(), n = !0);
						if(n) {
							t.stopPropagation && t.stopPropagation(), b = !0;
							var i = o.features.isOldAndroid ? 600 : 30;
							setTimeout(function() {
								b = !1;
							}, i);
						}
					},
					P = function() {
						return !n.likelyTouchDevice || f.mouseUsed || screen.width > f.fitControlsWidth;
					},
					T = function(e, t, n) {
						o[(n ? 'add' : 'remove') + 'Class'](e, 'pswp__' + t);
					},
					S = function() {
						var e = 1 === f.getNumItemsFn();
						e !== y && (T(l, 'ui--one-slide', e), y = e);
					},
					O = function() {
						T(d, 'share-modal--hidden', E);
					},
					A = function() {
						return E = !E, E ? (o.removeClass(d, 'pswp__share-modal--fade-in'), setTimeout(function() {
							E && O();
						}, 300)) : (O(), setTimeout(function() {
							E || o.addClass(d, 'pswp__share-modal--fade-in');
						}, 30)), E || R(), !1;
					},
					D = function(i) {
						i = i || window.event;
						var e = i.target || i.srcElement;
						return(n.shout('shareLinkClick', i, e), !!e.href) && (!!e.hasAttribute('download') || (window.open(e.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' + (window.screen ? t(screen.width / 2 - 275) : 100)), E || A(), !1));
					},
					R = function() {
						for(var e, t, n, o, l, a = '', r = 0; r < f.shareButtons.length; r++)
							e = f.shareButtons[r], n = f.getImageURLForShare(e), o = f.getPageURLForShare(e), l = f.getTextForShare(e), t = e.url.replace('{{url}}', encodeURIComponent(o)).replace('{{image_url}}', encodeURIComponent(n)).replace('{{raw_image_url}}', n).replace('{{text}}', encodeURIComponent(l)), a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? 'download' : '') + '>' + e.label + '</a>', f.parseShareButtonOut && (a = f.parseShareButtonOut(e, a));
						d.children[0].innerHTML = a, d.children[0].onclick = D;
					},
					F = function(e) {
						for(var t = 0; t < f.closeElClasses.length; t++)
							if(o.hasClass(e, 'pswp__' + f.closeElClasses[t]))
								return !0;
					},
					L = 0,
					z = function() {
						clearTimeout(w), L = 0, c && C.setIdle(!1);
					},
					U = function(t) {
						t = t ? t : window.event;
						var e = t.relatedTarget || t.toElement;
						e && 'HTML' !== e.nodeName || (clearTimeout(w), w = setTimeout(function() {
							C.setIdle(!0);
						}, f.timeToIdleOutside));
					},
					N = function() {
						f.fullscreenEl && !o.features.isOldAndroid && (!i && (i = C.getFullscreenAPI()), i ? (o.bind(document, i.eventK, C.updateFullscreen), C.updateFullscreen(), o.addClass(n.template, 'pswp--supports-fs')) : o.removeClass(n.template, 'pswp--supports-fs'));
					},
					Z = function() {
						f.preloaderEl && (B(!0), m('beforeChange', function() {
							clearTimeout(h), h = setTimeout(function() {
								n.currItem && n.currItem.loading ? (!n.allowProgressiveImg() || n.currItem.img && !n.currItem.img.naturalWidth) && B(!1) : B(!0);
							}, f.loadingIndicatorDelay);
						}), m('imageLoadComplete', function(e, t) {
							n.currItem === t && B(!0);
						}));
					},
					B = function(e) {
						g !== e && (T(u, 'preloader--active', !e), g = e);
					},
					M = function(t) {
						var n = t.vGap;
						if(P()) {
							var i = f.barsSize;
							if(!(f.captionEl && 'auto' === i.bottom))
								n.bottom = 'auto' === i.bottom ? 0 : i.bottom;
							else if(a || (a = o.createEl('pswp__caption pswp__caption--fake'), a.appendChild(o.createEl('pswp__caption__center')), l.insertBefore(a, e), o.addClass(l, 'pswp__ui--fit')), f.addCaptionHTMLFn(t, a, !0)) {
								var r = a.clientHeight;
								n.bottom = parseInt(r, 10) || 44;
							} else
								n.bottom = i.top;
							n.top = i.top;
						} else
							n.top = n.bottom = 0;
					},
					H = function() {
						f.timeToIdle && m('mouseUsed', function() {
							o.bind(document, 'mousemove', z), o.bind(document, 'mouseout', U), x = setInterval(function() {
								L++, 2 == L && C.setIdle(!0);
							}, f.timeToIdle / 2);
						});
					},
					W = function() {
						m('onVerticalDrag', function(e) {
							v && 0.95 > e ? C.hideControls() : !v && 0.95 <= e && C.showControls();
						});
						var e;
						m('onPinchClose', function(t) {
							v && 0.9 > t ? (C.hideControls(), e = !0) : e && !v && 0.9 < t && C.showControls();
						}), m('zoomGestureEnded', function() {
							e = !1, e && !v && C.showControls();
						});
					},
					K = [{
						name: 'caption',
						option: 'captionEl',
						onInit: function(t) {
							e = t;
						}
					}, {
						name: 'share-modal',
						option: 'shareEl',
						onInit: function(e) {
							d = e;
						},
						onTap: function() {
							A();
						}
					}, {
						name: 'button--share',
						option: 'shareEl',
						onInit: function(e) {
							s = e;
						},
						onTap: function() {
							A();
						}
					}, {
						name: 'button--zoom',
						option: 'zoomEl',
						onTap: n.toggleDesktopZoom
					}, {
						name: 'counter',
						option: 'counterEl',
						onInit: function(e) {
							r = e;
						}
					}, {
						name: 'button--close',
						option: 'closeEl',
						onTap: n.close
					}, {
						name: 'button--arrow--left',
						option: 'arrowEl',
						onTap: n.prev
					}, {
						name: 'button--arrow--right',
						option: 'arrowEl',
						onTap: n.next
					}, {
						name: 'button--fs',
						option: 'fullscreenEl',
						onTap: function() {
							i.isFullscreen() ? i.exit() : i.enter();
						}
					}, {
						name: 'preloader',
						option: 'preloaderEl',
						onInit: function(e) {
							u = e;
						}
					}],
					q = function() {
						var e, t, n, i = function(r) {
							if(r)
								for(var s = r.length, l = 0; l < s; l++) {
									e = r[l], t = e.className;
									for(var i = 0; i < K.length; i++)
										n = K[i], -1 < t.indexOf('pswp__' + n.name) && (f[n.option] ? (o.removeClass(e, 'pswp__element--disabled'), n.onInit && n.onInit(e)) : o.addClass(e, 'pswp__element--disabled'));
								}
						};
						i(l.children);
						var a = o.getChildByClass(l, 'pswp__top-bar');
						a && i(a.children);
					};
				C.init = function() {
					o.extend(n.options, I, !0), f = n.options, l = o.getChildByClass(n.scrollWrap, 'pswp__ui'), m = n.listen, W(), m('beforeChange', C.update), m('doubleTap', function(e) {
						var t = n.currItem.initialZoomLevel;
						n.getZoomLevel() === t ? n.zoomTo(f.getDoubleTapZoom(!1, n.currItem), e, 333) : n.zoomTo(t, e, 333);
					}), m('preventDragEvent', function(n, e, i) {
						var o = n.target || n.srcElement;
						o && o.getAttribute('class') && -1 < n.type.indexOf('mouse') && (0 < o.getAttribute('class').indexOf('__caption') || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (i.prevent = !1);
					}), m('bindEvents', function() {
						o.bind(l, 'pswpTap click', k), o.bind(n.scrollWrap, 'pswpTap', C.onGlobalTap), n.likelyTouchDevice || o.bind(n.scrollWrap, 'mouseover', C.onMouseOver);
					}), m('unbindEvents', function() {
						E || A(), x && clearInterval(x), o.unbind(document, 'mouseout', U), o.unbind(document, 'mousemove', z), o.unbind(l, 'pswpTap click', k), o.unbind(n.scrollWrap, 'pswpTap', C.onGlobalTap), o.unbind(n.scrollWrap, 'mouseover', C.onMouseOver), i && (o.unbind(document, i.eventK, C.updateFullscreen), i.isFullscreen() && (f.hideAnimationDuration = 0, i.exit()), i = null);
					}), m('destroy', function() {
						f.captionEl && (a && l.removeChild(a), o.removeClass(e, 'pswp__caption--empty')), d && (d.children[0].onclick = null), o.removeClass(l, 'pswp__ui--over-close'), o.addClass(l, 'pswp__ui--hidden'), C.setIdle(!1);
					}), f.showAnimationDuration || o.removeClass(l, 'pswp__ui--hidden'), m('initialZoomIn', function() {
						f.showAnimationDuration && o.removeClass(l, 'pswp__ui--hidden');
					}), m('initialZoomOut', function() {
						o.addClass(l, 'pswp__ui--hidden');
					}), m('parseVerticalMargin', M), q(), f.shareEl && s && d && (E = !0), S(), H(), N(), Z();
				}, C.setIdle = function(e) {
					c = e, T(l, 'ui--idle', e);
				}, C.update = function() {
					v && n.currItem ? (C.updateIndexIndicator(), f.captionEl && (f.addCaptionHTMLFn(n.currItem, e), T(e, 'caption--empty', !n.currItem.title)), _ = !0) : _ = !1, E || A(), S();
				}, C.updateFullscreen = function(t) {
					t && setTimeout(function() {
						n.setScrollOffset(0, o.getScrollY());
					}, 50), o[(i.isFullscreen() ? 'add' : 'remove') + 'Class'](n.template, 'pswp--fs');
				}, C.updateIndexIndicator = function() {
					f.counterEl && (r.innerHTML = n.getCurrentIndex() + 1 + f.indexIndicatorSep + f.getNumItemsFn());
				}, C.onGlobalTap = function(t) {
					t = t || window.event;
					var e = t.target || t.srcElement;
					if(!b)
						if(t.detail && 'mouse' === t.detail.pointerType) {
							if(F(e))
								return void n.close();
							o.hasClass(e, 'pswp__img') && (1 === n.getZoomLevel() && n.getZoomLevel() <= n.currItem.fitRatio ? f.clickToCloseNonZoomable && n.close() : n.toggleDesktopZoom(t.detail.releasePoint));
						}
					else if(f.tapToToggleControls && (v ? C.hideControls() : C.showControls()), f.tapToClose && (o.hasClass(e, 'pswp__img') || F(e)))
						return void n.close();
				}, C.onMouseOver = function(t) {
					t = t || window.event;
					var e = t.target || t.srcElement;
					T(l, 'ui--over-close', F(e));
				}, C.hideControls = function() {
					o.addClass(l, 'pswp__ui--hidden'), v = !1;
				}, C.showControls = function() {
					v = !0, _ || C.update(), o.removeClass(l, 'pswp__ui--hidden');
				}, C.supportsFullscreen = function() {
					var e = document;
					return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen);
				}, C.getFullscreenAPI = function() {
					var e, t = document.documentElement,
						i = 'fullscreenchange';
					return t.requestFullscreen ? e = {
						enterK: 'requestFullscreen',
						exitK: 'exitFullscreen',
						elementK: 'fullscreenElement',
						eventK: i
					} : t.mozRequestFullScreen ? e = {
						enterK: 'mozRequestFullScreen',
						exitK: 'mozCancelFullScreen',
						elementK: 'mozFullScreenElement',
						eventK: 'moz' + i
					} : t.webkitRequestFullscreen ? e = {
						enterK: 'webkitRequestFullscreen',
						exitK: 'webkitExitFullscreen',
						elementK: 'webkitFullscreenElement',
						eventK: 'webkit' + i
					} : t.msRequestFullscreen && (e = {
						enterK: 'msRequestFullscreen',
						exitK: 'msExitFullscreen',
						elementK: 'msFullscreenElement',
						eventK: 'MSFullscreenChange'
					}), e && (e.enter = function() {
						return p = f.closeOnScroll, f.closeOnScroll = !1, 'webkitRequestFullscreen' === this.enterK ? void n.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) : n.template[this.enterK]();
					}, e.exit = function() {
						return f.closeOnScroll = p, document[this.exitK]();
					}, e.isFullscreen = function() {
						return document[this.elementK];
					}), e;
				};
			};
		});
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = function() {
				function e(e) {
					this._collection = null, this._filters = [], this.gallery = e;
				}
				return e.prototype.addFilter = function(e) {
					this.filters.push(e);
				}, e.prototype.refresh = function() {
					this.filters.forEach(function(e) {
						e.render();
					});
				}, e.prototype.render = function() {
					var e = document.createElement('div');
					i.Utility.addClass(e, 'natural-gallery-images sectionContainer'), e.appendChild(i.Utility.getIcon('icon-pict'));
					var t = document.createElement('div');
					i.Utility.addClass(t, 'sectionName'), t.textContent = this.gallery.options.labelImages, e.appendChild(t);
					var n = document.createElement('span');
					e.appendChild(n), i.Utility.addClass(n, 'natural-gallery-visible');
					var o = document.createElement('span');
					o.textContent = ' / ', e.appendChild(o);
					var l = document.createElement('span');
					return i.Utility.addClass(l, 'natural-gallery-total'), e.appendChild(l), this.element = document.createElement('div'), this.filters.forEach(function(e) {
						this.element.appendChild(e.render());
					}, this), i.Utility.addClass(this.element, 'natural-gallery-header'), this.element.appendChild(e), this.element;
				}, e.prototype.isFiltered = function() {
					return null !== this.collection;
				}, e.prototype.filter = function() {
					var e = null;
					this.filters.forEach(function(t) {
						t.isActive() && (null == e ? e = t.collection : e = i.Utility.intersectionBy(e, t.collection, 'id'));
					}), this.collection = e, this.gallery.refresh();
				}, Object.defineProperty(e.prototype, 'collection', {
					get: function() {
						return this._collection;
					},
					set: function(e) {
						this._collection = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'gallery', {
					get: function() {
						return this._gallery;
					},
					set: function(e) {
						this._gallery = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'filters', {
					get: function() {
						return this._filters;
					},
					set: function(e) {
						this._filters = e;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Header = o;
	}, function(e, t, n) {
		'use strict';
		var i = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for(var n in t)
					t.hasOwnProperty(n) && (e[n] = t[n]);
			};
			return function(t, n) {
				function i() {
					this.constructor = t;
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i);
			};
		}();
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var o = n(0),
			l = n(1),
			a = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this;
				}
				return i(t, e), t.prototype.render = function() {
					var e = document.createElement('div');
					o.Utility.addClass(e, 'natural-gallery-searchTerm sectionContainer'), e.appendChild(o.Utility.getIcon('icon-search')), e.appendChild(this.getInput());
					var t = document.createElement('label');
					o.Utility.addClass(t, 'sectionName'), t.textContent = this.header.gallery.options.labelSearch, e.appendChild(t);
					var n = document.createElement('span');
					return o.Utility.addClass(n, 'bar'), e.appendChild(n), e;
				}, t.prototype.getInput = function() {
					var e = this,
						t = document.createElement('input');
					return t.setAttribute('required', ''), t.addEventListener('keyup', function(t) {
						var n = this;
						27 === t.keyCode && (n.value = ''), e.filter(n.value);
					}), t;
				}, t.prototype.filter = function(e) {
					this.collection = null;
					var t = o.Utility.removeDiacritics(e).toLowerCase();
					0 < t.length && (this.collection = [], this.header.gallery.getOriginalCollection().forEach(function(e) {
						var n = o.Utility.removeDiacritics(e.title + ' ' + (e.description ? e.description : '')).toLowerCase(); -
						1 !== n.search(t) && this.collection.push(e);
					}, this)), this.header.filter();
				}, t;
			}(l.AbstractFilter);
		t.SearchFilter = a;
	}, function(e, t, n) {
		'use strict';
		var i = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for(var n in t)
					t.hasOwnProperty(n) && (e[n] = t[n]);
			};
			return function(t, n) {
				function i() {
					this.constructor = t;
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i);
			};
		}();
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var o = n(1),
			l = n(12),
			a = n(0),
			r = function(e) {
				function t(t) {
					var n = e.call(this, t) || this;
					return n.header = t, n._categories = [], n;
				}
				return i(t, e), Object.defineProperty(t.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.render = function() {
					if(this.prepare(), !this.element) {
						this.element = document.createElement('div'), a.Utility.addClass(this.element, 'natural-gallery-categories sectionContainer');
						var e = document.createElement('div');
						a.Utility.addClass(e, 'sectionName'), e.textContent = this.header.gallery.options.labelCategories, this.element.appendChild(e);
					} else
						for(var t = this.element.getElementsByTagName('label'), n = t.length - 1; 0 < n; n--)
							this.element.removeChild(t.item(n));
					var i = this.element.getElementsByTagName('label')[0];
					return i && i.parentNode.removeChild(i), this.categories.forEach(function(e) {
						this.element.appendChild(e.render());
					}, this), this.element;
				}, t.prototype.prepare = function() {
					var e = [];
					this.header.gallery.categories.forEach(function(t) {
						e.push(new l.Category(t.id, t.title, this));
					}, this), this.none = new l.Category(-1, this.header.gallery.options.labelNone, this), this.others = new l.Category(-2, this.header.gallery.options.labelOthers, this), this.header.gallery.options.showNone && e.length && e.push(this.none), this.header.gallery.options.showOthers && e.length && e.push(this.others);
					var t = [];
					this.header.gallery.getOriginalCollection().forEach(function(n) {
						(!n.categories || n.categories && 0 === n.categories.length && this.header.gallery.options.showNone) && (n.categories = [this.none]), e.length && a.Utility.differenceBy(n.categories, e, 'id').length === n.categories.length && this.header.gallery.options.showOthers && (n.categories = [this.others]), n.categories.forEach(function(e) {
							t.push(new l.Category(e.id, e.title, this));
						}, this);
					}, this), e = a.Utility.uniqBy(e, 'id'), t = a.Utility.uniqBy(t, 'id'), this.categories = e.length ? a.Utility.intersectionBy(e, t, 'id') : t;
				}, t.prototype.filter = function() {
					var e = this.categories.filter(function(e) {
						return e.isActive;
					});
					if(e.length === this.categories.length)
						this.collection = null;
					else if(0 === e.length)
						this.collection = [];
					else {
						var t = [];
						this.header.gallery.getOriginalCollection().forEach(function(n) {
							!n.categories || n.categories && 0 === n.categories.length ? this.none && t.push(n) : n.categories.some(function(i) {
								var o = e.some(function(e) {
									return i.id === e.id;
								});
								if(o)
									return t.push(n), !0;
							});
						}, this), this.collection = t;
					}
					this.header.filter();
				}, Object.defineProperty(t.prototype, 'categories', {
					get: function() {
						return this._categories;
					},
					set: function(e) {
						this._categories = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'others', {
					get: function() {
						return this._others;
					},
					set: function(e) {
						this._others = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, 'none', {
					get: function() {
						return this._none;
					},
					set: function(e) {
						this._none = e;
					},
					enumerable: !0,
					configurable: !0
				}), t;
			}(o.AbstractFilter);
		t.CategoryFilter = r;
	}, function(e, t, n) {
		'use strict';
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var i = n(0),
			o = function() {
				function e(e, t, n) {
					this.filter = n, this._isActive = !0, this.id = e, this.title = t;
				}
				return e.prototype.render = function() {
					var e = this;
					this.element = document.createElement('label');
					var t = document.createElement('input');
					t.setAttribute('type', 'checkbox'), t.setAttribute('checked', 'checked'), t.addEventListener('change', function() {
						e.isActive = !e.isActive, e.filter.filter();
					}), this.element.appendChild(t);
					var n = document.createElement('span');
					n.textContent = this.title;
					var o = document.createElement('span');
					i.Utility.addClass(o, 'label'), o.appendChild(i.Utility.getIcon('icon-category')), o.appendChild(n), this.element.appendChild(o);
					var l = document.createElement('span');
					return i.Utility.addClass(l, 'bar'), this.element.appendChild(l), this.element;
				}, Object.defineProperty(e.prototype, 'id', {
					get: function() {
						return this._id;
					},
					set: function(e) {
						this._id = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'title', {
					get: function() {
						return this._title;
					},
					set: function(e) {
						this._title = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'isActive', {
					get: function() {
						return this._isActive;
					},
					set: function(e) {
						this._isActive = e;
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, 'element', {
					get: function() {
						return this._element;
					},
					set: function(e) {
						this._element = e;
					},
					enumerable: !0,
					configurable: !0
				}), e;
			}();
		t.Category = o;
	}, function(e, i) {
		'use strict';
		Object.defineProperty(i, '__esModule', {
			value: !0
		});
		var o;
		(function(e) {
			var o = Math.ceil;
			e.organize = function(e) {
				'natural' === e.options.format ? this.organizeNatural(e.collection, e.bodyWidth, e.options.rowHeight, e.options.margin) : 'square' === e.options.format && e.options.imagesPerRow ? this.organizeSquareByImagesPerRow(e.collection, e.bodyWidth, e.options.imagesPerRow, e.options.margin) : 'square' === e.options.format && e.options.rowHeight && this.organizeSquareByRowHeight(e.collection, e.bodyWidth, e.options.rowHeight, e.options.margin), e.style();
			}, e.simulatePagination = function(e) {
				var t = e.options.margin ? e.options.margin : 0,
					n = o(e.options.rowHeight * e.defaultImageRatio + t),
					i = (e.bodyWidth + t) / (n + t);
				return o(i);
			}, e.organizeSquareByRowHeight = function(e, l, a, r) {
				r || (r = 0);
				for(var s, d = o((l + r) / (a + r)), p = t((l + r - d * r) / d), c = l - d * p - (d - 1) * r, m = 0; m < e.length; m++)
					s = e[m], s.last = m % d == d - 1, s.row = n(m / d), s.width = n(p), s.height = n(p), s.last && (s.width = n(p + c));
			}, e.organizeSquareByImagesPerRow = function(e, t, o, l) {
				l || (l = 0), o || (o = 4);
				for(var a, r = (t - (o - 1) * l) / o, s = 0; s < e.length; s++)
					a = e[s], a.width = n(r), a.height = n(r), a.last = s % o == o - 1, a.row = n(s / o);
			}, e.organizeNatural = function(e, t, n, i, o) {
				void 0 === o && (o = null), o || (o = 0), i || (i = 0), n || (n = 300);
				for(var l = 1; l <= e.length; l++) {
					var a = e.slice(0, l),
						r = this.getRowWidth(n, i, a);
					if(r >= t) {
						this.computeSizes(a, t, i, o), this.organizeNatural(e.slice(l), t, n, i, o + 1);
						break;
					} else if(l === e.length) {
						this.computeSizes(a, null, i, o, n);
						break;
					}
				}
			}, e.computeSizes = function(e, o, l, a, r) {
				void 0 === r && (r = null);
				for(var s = o ? this.getRowHeight(o, l, e) : r, d = this.getRowWidth(s, l, e), p = o ? this.apportionExcess(e, o, d) : 0, c = 0, m = 0; m < e.length; m++) {
					var i = e[m],
						u = this.getImageRatio(i) * s - p;
					c += u - n(u), u = n(u), (1 <= c || m === e.length - 1 && 1 === t(c)) && (u++, c--), i.width = u, i.height = n(s), i.row = a, i.last = m === e.length - 1;
				}
			}, e.getRowWidth = function(e, t, n) {
				return t * (n.length - 1) + this.getRatios(n) * e;
			}, e.getRowHeight = function(e, t, n) {
				return e / this.getRatios(n) + t * (n.length - 1);
			}, e.getRatios = function(e) {
				for(var t = this, n = 0, o = 0; o < e.length; o++)
					n += t.getImageRatio(e[o]);
				return n;
			}, e.getImageRatio = function(e) {
				return +e.tWidth / +e.tHeight;
			}, e.apportionExcess = function(e, t, n) {
				var i = (n - t) / e.length;
				return i;
			};
		})(o = i.Organizer || (i.Organizer = {}));
	}]);
});