/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      797: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, s = 1, i = arguments.length; s < i; s++)
                      for (var n in (t = arguments[s]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              fullScreen: !0,
              fullscreenPluginStrings: {
                toggleFullscreen: "Toggle Fullscreen",
              },
            };
          return (function () {
            function s(s, i) {
              return (
                (this.core = s),
                (this.$LG = i),
                (this.settings = e(e({}, t), this.core.settings)),
                this
              );
            }
            return (
              (s.prototype.init = function () {
                var e = "";
                if (this.settings.fullScreen) {
                  if (
                    !(
                      document.fullscreenEnabled ||
                      document.webkitFullscreenEnabled ||
                      document.mozFullScreenEnabled ||
                      document.msFullscreenEnabled
                    )
                  )
                    return;
                  (e =
                    '<button type="button" aria-label="' +
                    this.settings.fullscreenPluginStrings.toggleFullscreen +
                    '" class="lg-fullscreen lg-icon"></button>'),
                    this.core.$toolbar.append(e),
                    this.fullScreen();
                }
              }),
              (s.prototype.isFullScreen = function () {
                return (
                  document.fullscreenElement ||
                  document.mozFullScreenElement ||
                  document.webkitFullscreenElement ||
                  document.msFullscreenElement
                );
              }),
              (s.prototype.requestFullscreen = function () {
                var e = document.documentElement;
                e.requestFullscreen
                  ? e.requestFullscreen()
                  : e.msRequestFullscreen
                  ? e.msRequestFullscreen()
                  : e.mozRequestFullScreen
                  ? e.mozRequestFullScreen()
                  : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
              }),
              (s.prototype.exitFullscreen = function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.msExitFullscreen
                  ? document.msExitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              }),
              (s.prototype.fullScreen = function () {
                var e = this;
                this.$LG(document).on(
                  "fullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            webkitfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            mozfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            MSFullscreenChange.lg.global" +
                    this.core.lgId,
                  function () {
                    e.core.lgOpened &&
                      e.core.outer.toggleClass("lg-fullscreen-on");
                  }
                ),
                  this.core.outer
                    .find(".lg-fullscreen")
                    .first()
                    .on("click.lg", function () {
                      e.isFullScreen()
                        ? e.exitFullscreen()
                        : e.requestFullscreen();
                    });
              }),
              (s.prototype.closeGallery = function () {
                this.isFullScreen() && this.exitFullscreen();
              }),
              (s.prototype.destroy = function () {
                this.$LG(document).off(
                  "fullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            webkitfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            mozfullscreenchange.lg.global" +
                    this.core.lgId +
                    " \n            MSFullscreenChange.lg.global" +
                    this.core.lgId
                );
              }),
              s
            );
          })();
        })();
      },
      571: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t, s = 1, i = arguments.length; s < i; s++)
                    for (var n in (t = arguments[s]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  return e;
                }),
              e.apply(this, arguments)
            );
          };
          function t() {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
              e += arguments[t].length;
            var i = Array(e),
              n = 0;
            for (t = 0; t < s; t++)
              for (var o = arguments[t], r = 0, l = o.length; r < l; r++, n++)
                i[n] = o[r];
            return i;
          }
          var s = {
            share: !0,
            facebook: !0,
            facebookDropdownText: "Facebook",
            twitter: !0,
            twitterDropdownText: "Twitter",
            pinterest: !0,
            pinterestDropdownText: "Pinterest",
            additionalShareOptions: [],
            sharePluginStrings: { share: "Share" },
          };
          function i(e) {
            return (
              "//www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(e.facebookShareUrl || window.location.href)
            );
          }
          function n(e) {
            var t = "//twitter.com/intent/tweet?text=",
              s = encodeURIComponent(e.twitterShareUrl || window.location.href);
            return t + e.tweetText + "&url=" + s;
          }
          function o(e) {
            var t = "http://www.pinterest.com/pin/create/button/?url=",
              s = e.pinterestText,
              i = encodeURIComponent(e.src);
            return (
              t +
              encodeURIComponent(e.pinterestShareUrl || window.location.href) +
              "&media=" +
              i +
              "&description=" +
              s
            );
          }
          var r = {
            afterAppendSlide: "lgAfterAppendSlide",
            init: "lgInit",
            hasVideo: "lgHasVideo",
            containerResize: "lgContainerResize",
            updateSlides: "lgUpdateSlides",
            afterAppendSubHtml: "lgAfterAppendSubHtml",
            beforeOpen: "lgBeforeOpen",
            afterOpen: "lgAfterOpen",
            slideItemLoad: "lgSlideItemLoad",
            beforeSlide: "lgBeforeSlide",
            afterSlide: "lgAfterSlide",
            posterClick: "lgPosterClick",
            dragStart: "lgDragStart",
            dragMove: "lgDragMove",
            dragEnd: "lgDragEnd",
            beforeNextSlide: "lgBeforeNextSlide",
            beforePrevSlide: "lgBeforePrevSlide",
            beforeClose: "lgBeforeClose",
            afterClose: "lgAfterClose",
            rotateLeft: "lgRotateLeft",
            rotateRight: "lgRotateRight",
            flipHorizontal: "lgFlipHorizontal",
            flipVertical: "lgFlipVertical",
            autoplay: "lgAutoplay",
            autoplayStart: "lgAutoplayStart",
            autoplayStop: "lgAutoplayStop",
          };
          return (function () {
            function l(t) {
              return (
                (this.shareOptions = []),
                (this.core = t),
                (this.settings = e(e({}, s), this.core.settings)),
                this
              );
            }
            return (
              (l.prototype.init = function () {
                this.settings.share &&
                  ((this.shareOptions = t(
                    this.getDefaultShareOptions(),
                    this.settings.additionalShareOptions
                  )),
                  this.setLgShareMarkup(),
                  this.core.outer
                    .find(".lg-share .lg-dropdown")
                    .append(this.getShareListHtml()),
                  this.core.LGel.on(
                    r.afterSlide + ".share",
                    this.onAfterSlide.bind(this)
                  ));
              }),
              (l.prototype.getShareListHtml = function () {
                var e = "";
                return (
                  this.shareOptions.forEach(function (t) {
                    e += t.dropdownHTML;
                  }),
                  e
                );
              }),
              (l.prototype.setLgShareMarkup = function () {
                var e = this;
                this.core.$toolbar.append(
                  '<button type="button" aria-label="' +
                    this.settings.sharePluginStrings.share +
                    '" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">\n                <ul class="lg-dropdown" style="position: absolute;"></ul></button>'
                ),
                  this.core.outer.append(
                    '<div class="lg-dropdown-overlay"></div>'
                  ),
                  this.core.outer
                    .find(".lg-share")
                    .first()
                    .on("click.lg", function () {
                      e.core.outer.toggleClass("lg-dropdown-active"),
                        e.core.outer.hasClass("lg-dropdown-active")
                          ? e.core.outer.attr("aria-expanded", !0)
                          : e.core.outer.attr("aria-expanded", !1);
                    }),
                  this.core.outer
                    .find(".lg-dropdown-overlay")
                    .first()
                    .on("click.lg", function () {
                      e.core.outer.removeClass("lg-dropdown-active"),
                        e.core.outer.attr("aria-expanded", !1);
                    });
              }),
              (l.prototype.onAfterSlide = function (e) {
                var t = this,
                  s = e.detail.index,
                  i = this.core.galleryItems[s];
                setTimeout(function () {
                  t.shareOptions.forEach(function (e) {
                    var s = e.selector;
                    t.core.outer.find(s).attr("href", e.generateLink(i));
                  });
                }, 100);
              }),
              (l.prototype.getShareListItemHTML = function (e, t) {
                return (
                  '<li><a class="lg-share-' +
                  e +
                  '" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                  t +
                  "</span></a></li>"
                );
              }),
              (l.prototype.getDefaultShareOptions = function () {
                return t(
                  this.settings.facebook
                    ? [
                        {
                          type: "facebook",
                          generateLink: i,
                          dropdownHTML: this.getShareListItemHTML(
                            "facebook",
                            this.settings.facebookDropdownText
                          ),
                          selector: ".lg-share-facebook",
                        },
                      ]
                    : [],
                  this.settings.twitter
                    ? [
                        {
                          type: "twitter",
                          generateLink: n,
                          dropdownHTML: this.getShareListItemHTML(
                            "twitter",
                            this.settings.twitterDropdownText
                          ),
                          selector: ".lg-share-twitter",
                        },
                      ]
                    : [],
                  this.settings.pinterest
                    ? [
                        {
                          type: "pinterest",
                          generateLink: o,
                          dropdownHTML: this.getShareListItemHTML(
                            "pinterest",
                            this.settings.pinterestDropdownText
                          ),
                          selector: ".lg-share-pinterest",
                        },
                      ]
                    : []
                );
              }),
              (l.prototype.destroy = function () {
                this.core.outer.find(".lg-dropdown-overlay").remove(),
                  this.core.outer.find(".lg-share").remove(),
                  this.core.LGel.off(".lg.share"),
                  this.core.LGel.off(".share");
              }),
              l
            );
          })();
        })();
      },
      205: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, s = 1, i = arguments.length; s < i; s++)
                      for (var n in (t = arguments[s]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              thumbnail: !0,
              animateThumb: !0,
              currentPagerPosition: "middle",
              alignThumbnails: "middle",
              thumbWidth: 100,
              thumbHeight: "80px",
              thumbMargin: 5,
              appendThumbnailsTo: ".lg-components",
              toggleThumb: !1,
              enableThumbDrag: !0,
              enableThumbSwipe: !0,
              thumbnailSwipeThreshold: 10,
              loadYouTubeThumbnail: !0,
              youTubeThumbSize: 1,
              thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" },
            },
            s = {
              afterAppendSlide: "lgAfterAppendSlide",
              init: "lgInit",
              hasVideo: "lgHasVideo",
              containerResize: "lgContainerResize",
              updateSlides: "lgUpdateSlides",
              afterAppendSubHtml: "lgAfterAppendSubHtml",
              beforeOpen: "lgBeforeOpen",
              afterOpen: "lgAfterOpen",
              slideItemLoad: "lgSlideItemLoad",
              beforeSlide: "lgBeforeSlide",
              afterSlide: "lgAfterSlide",
              posterClick: "lgPosterClick",
              dragStart: "lgDragStart",
              dragMove: "lgDragMove",
              dragEnd: "lgDragEnd",
              beforeNextSlide: "lgBeforeNextSlide",
              beforePrevSlide: "lgBeforePrevSlide",
              beforeClose: "lgBeforeClose",
              afterClose: "lgAfterClose",
              rotateLeft: "lgRotateLeft",
              rotateRight: "lgRotateRight",
              flipHorizontal: "lgFlipHorizontal",
              flipVertical: "lgFlipVertical",
              autoplay: "lgAutoplay",
              autoplayStart: "lgAutoplayStart",
              autoplayStop: "lgAutoplayStop",
            };
          return (function () {
            function i(e, t) {
              return (
                (this.thumbOuterWidth = 0),
                (this.thumbTotalWidth = 0),
                (this.translateX = 0),
                (this.thumbClickable = !1),
                (this.core = e),
                (this.$LG = t),
                this
              );
            }
            return (
              (i.prototype.init = function () {
                (this.settings = e(e({}, t), this.core.settings)),
                  (this.thumbOuterWidth = 0),
                  (this.thumbTotalWidth =
                    this.core.galleryItems.length *
                    (this.settings.thumbWidth + this.settings.thumbMargin)),
                  (this.translateX = 0),
                  this.setAnimateThumbStyles(),
                  this.core.settings.allowMediaOverlap ||
                    (this.settings.toggleThumb = !1),
                  this.settings.thumbnail &&
                    (this.build(),
                    this.settings.animateThumb
                      ? (this.settings.enableThumbDrag &&
                          this.enableThumbDrag(),
                        this.settings.enableThumbSwipe &&
                          this.enableThumbSwipe(),
                        (this.thumbClickable = !1))
                      : (this.thumbClickable = !0),
                    this.toggleThumbBar(),
                    this.thumbKeyPress());
              }),
              (i.prototype.build = function () {
                var e = this;
                this.setThumbMarkup(),
                  this.manageActiveClassOnSlideChange(),
                  this.$lgThumb
                    .first()
                    .on("click.lg touchend.lg", function (t) {
                      var s = e.$LG(t.target);
                      s.hasAttribute("data-lg-item-id") &&
                        setTimeout(function () {
                          if (e.thumbClickable && !e.core.lgBusy) {
                            var t = parseInt(s.attr("data-lg-item-id"));
                            e.core.slide(t, !1, !0, !1);
                          }
                        }, 50);
                    }),
                  this.core.LGel.on(s.beforeSlide + ".thumb", function (t) {
                    var s = t.detail.index;
                    e.animateThumb(s);
                  }),
                  this.core.LGel.on(s.beforeOpen + ".thumb", function () {
                    e.thumbOuterWidth = e.core.outer.get().offsetWidth;
                  }),
                  this.core.LGel.on(s.updateSlides + ".thumb", function () {
                    e.rebuildThumbnails();
                  }),
                  this.core.LGel.on(s.containerResize + ".thumb", function () {
                    e.core.lgOpened &&
                      setTimeout(function () {
                        (e.thumbOuterWidth = e.core.outer.get().offsetWidth),
                          e.animateThumb(e.core.index),
                          (e.thumbOuterWidth = e.core.outer.get().offsetWidth);
                      }, 50);
                  });
              }),
              (i.prototype.setThumbMarkup = function () {
                var e = "lg-thumb-outer ";
                this.settings.alignThumbnails &&
                  (e += "lg-thumb-align-" + this.settings.alignThumbnails);
                var t =
                  '<div class="' +
                  e +
                  '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                this.core.outer.addClass("lg-has-thumb"),
                  ".lg-components" === this.settings.appendThumbnailsTo
                    ? this.core.$lgComponents.append(t)
                    : this.core.outer.append(t),
                  (this.$thumbOuter = this.core.outer
                    .find(".lg-thumb-outer")
                    .first()),
                  (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                  this.settings.animateThumb &&
                    this.core.outer
                      .find(".lg-thumb")
                      .css(
                        "transition-duration",
                        this.core.settings.speed + "ms"
                      )
                      .css("width", this.thumbTotalWidth + "px")
                      .css("position", "relative"),
                  this.setThumbItemHtml(this.core.galleryItems);
              }),
              (i.prototype.enableThumbDrag = function () {
                var e = this,
                  t = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  },
                  s = !1;
                this.$thumbOuter.addClass("lg-grab"),
                  this.core.outer
                    .find(".lg-thumb")
                    .first()
                    .on("mousedown.lg.thumb", function (i) {
                      e.thumbTotalWidth > e.thumbOuterWidth &&
                        (i.preventDefault(),
                        (t.cords.startX = i.pageX),
                        (t.startTime = new Date()),
                        (e.thumbClickable = !1),
                        (s = !0),
                        (e.core.outer.get().scrollLeft += 1),
                        (e.core.outer.get().scrollLeft -= 1),
                        e.$thumbOuter
                          .removeClass("lg-grab")
                          .addClass("lg-grabbing"));
                    }),
                  this.$LG(window).on(
                    "mousemove.lg.thumb.global" + this.core.lgId,
                    function (i) {
                      e.core.lgOpened &&
                        s &&
                        ((t.cords.endX = i.pageX), (t = e.onThumbTouchMove(t)));
                    }
                  ),
                  this.$LG(window).on(
                    "mouseup.lg.thumb.global" + this.core.lgId,
                    function () {
                      e.core.lgOpened &&
                        (t.isMoved
                          ? (t = e.onThumbTouchEnd(t))
                          : (e.thumbClickable = !0),
                        s &&
                          ((s = !1),
                          e.$thumbOuter
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab")));
                    }
                  );
              }),
              (i.prototype.enableThumbSwipe = function () {
                var e = this,
                  t = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  };
                this.$lgThumb.on("touchstart.lg", function (s) {
                  e.thumbTotalWidth > e.thumbOuterWidth &&
                    (s.preventDefault(),
                    (t.cords.startX = s.targetTouches[0].pageX),
                    (e.thumbClickable = !1),
                    (t.startTime = new Date()));
                }),
                  this.$lgThumb.on("touchmove.lg", function (s) {
                    e.thumbTotalWidth > e.thumbOuterWidth &&
                      (s.preventDefault(),
                      (t.cords.endX = s.targetTouches[0].pageX),
                      (t = e.onThumbTouchMove(t)));
                  }),
                  this.$lgThumb.on("touchend.lg", function () {
                    t.isMoved
                      ? (t = e.onThumbTouchEnd(t))
                      : (e.thumbClickable = !0);
                  });
              }),
              (i.prototype.rebuildThumbnails = function () {
                var e = this;
                this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                  setTimeout(function () {
                    (e.thumbTotalWidth =
                      e.core.galleryItems.length *
                      (e.settings.thumbWidth + e.settings.thumbMargin)),
                      e.$lgThumb.css("width", e.thumbTotalWidth + "px"),
                      e.$lgThumb.empty(),
                      e.setThumbItemHtml(e.core.galleryItems),
                      e.animateThumb(e.core.index);
                  }, 50),
                  setTimeout(function () {
                    e.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                  }, 200);
              }),
              (i.prototype.setTranslate = function (e) {
                this.$lgThumb.css(
                  "transform",
                  "translate3d(-" + e + "px, 0px, 0px)"
                );
              }),
              (i.prototype.getPossibleTransformX = function (e) {
                return (
                  e > this.thumbTotalWidth - this.thumbOuterWidth &&
                    (e = this.thumbTotalWidth - this.thumbOuterWidth),
                  e < 0 && (e = 0),
                  e
                );
              }),
              (i.prototype.animateThumb = function (e) {
                if (
                  (this.$lgThumb.css(
                    "transition-duration",
                    this.core.settings.speed + "ms"
                  ),
                  this.settings.animateThumb)
                ) {
                  var t = 0;
                  switch (this.settings.currentPagerPosition) {
                    case "left":
                      t = 0;
                      break;
                    case "middle":
                      t =
                        this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                      break;
                    case "right":
                      t = this.thumbOuterWidth - this.settings.thumbWidth;
                  }
                  (this.translateX =
                    (this.settings.thumbWidth + this.settings.thumbMargin) * e -
                    1 -
                    t),
                    this.translateX >
                      this.thumbTotalWidth - this.thumbOuterWidth &&
                      (this.translateX =
                        this.thumbTotalWidth - this.thumbOuterWidth),
                    this.translateX < 0 && (this.translateX = 0),
                    this.setTranslate(this.translateX);
                }
              }),
              (i.prototype.onThumbTouchMove = function (e) {
                return (
                  (e.newTranslateX = this.translateX),
                  (e.isMoved = !0),
                  (e.touchMoveTime = new Date().valueOf()),
                  (e.newTranslateX -= e.cords.endX - e.cords.startX),
                  (e.newTranslateX = this.getPossibleTransformX(
                    e.newTranslateX
                  )),
                  this.setTranslate(e.newTranslateX),
                  this.$thumbOuter.addClass("lg-dragging"),
                  e
                );
              }),
              (i.prototype.onThumbTouchEnd = function (e) {
                (e.isMoved = !1),
                  (e.endTime = new Date()),
                  this.$thumbOuter.removeClass("lg-dragging");
                var t = e.endTime.valueOf() - e.startTime.valueOf(),
                  s = e.cords.endX - e.cords.startX,
                  i = Math.abs(s) / t;
                return (
                  i > 0.15 && e.endTime.valueOf() - e.touchMoveTime < 30
                    ? ((i += 1) > 2 && (i += 1),
                      (i += i * (Math.abs(s) / this.thumbOuterWidth)),
                      this.$lgThumb.css(
                        "transition-duration",
                        Math.min(i - 1, 2) + "settings"
                      ),
                      (s *= i),
                      (this.translateX = this.getPossibleTransformX(
                        this.translateX - s
                      )),
                      this.setTranslate(this.translateX))
                    : (this.translateX = e.newTranslateX),
                  Math.abs(e.cords.endX - e.cords.startX) <
                    this.settings.thumbnailSwipeThreshold &&
                    (this.thumbClickable = !0),
                  e
                );
              }),
              (i.prototype.getThumbHtml = function (e, t) {
                var s,
                  i = this.core.galleryItems[t].__slideVideoInfo || {};
                return (
                  (s =
                    i.youtube && this.settings.loadYouTubeThumbnail
                      ? "//img.youtube.com/vi/" +
                        i.youtube[1] +
                        "/" +
                        this.settings.youTubeThumbSize +
                        ".jpg"
                      : e),
                  '<div data-lg-item-id="' +
                    t +
                    '" class="lg-thumb-item ' +
                    (t === this.core.index ? " active" : "") +
                    '" \n        style="width:' +
                    this.settings.thumbWidth +
                    "px; height: " +
                    this.settings.thumbHeight +
                    ";\n            margin-right: " +
                    this.settings.thumbMargin +
                    'px;">\n            <img data-lg-item-id="' +
                    t +
                    '" src="' +
                    s +
                    '" />\n        </div>'
                );
              }),
              (i.prototype.getThumbItemHtml = function (e) {
                for (var t = "", s = 0; s < e.length; s++)
                  t += this.getThumbHtml(e[s].thumb, s);
                return t;
              }),
              (i.prototype.setThumbItemHtml = function (e) {
                var t = this.getThumbItemHtml(e);
                this.$lgThumb.html(t);
              }),
              (i.prototype.setAnimateThumbStyles = function () {
                this.settings.animateThumb &&
                  this.core.outer.addClass("lg-animate-thumb");
              }),
              (i.prototype.manageActiveClassOnSlideChange = function () {
                var e = this;
                this.core.LGel.on(s.beforeSlide + ".thumb", function (t) {
                  var s = e.core.outer.find(".lg-thumb-item"),
                    i = t.detail.index;
                  s.removeClass("active"), s.eq(i).addClass("active");
                });
              }),
              (i.prototype.toggleThumbBar = function () {
                var e = this;
                this.settings.toggleThumb &&
                  (this.core.outer.addClass("lg-can-toggle"),
                  this.core.$toolbar.append(
                    '<button type="button" aria-label="' +
                      this.settings.thumbnailPluginStrings.toggleThumbnails +
                      '" class="lg-toggle-thumb lg-icon"></button>'
                  ),
                  this.core.outer
                    .find(".lg-toggle-thumb")
                    .first()
                    .on("click.lg", function () {
                      e.core.outer.toggleClass("lg-components-open");
                    }));
              }),
              (i.prototype.thumbKeyPress = function () {
                var e = this;
                this.$LG(window).on(
                  "keydown.lg.thumb.global" + this.core.lgId,
                  function (t) {
                    e.core.lgOpened &&
                      e.settings.toggleThumb &&
                      (38 === t.keyCode
                        ? (t.preventDefault(),
                          e.core.outer.addClass("lg-components-open"))
                        : 40 === t.keyCode &&
                          (t.preventDefault(),
                          e.core.outer.removeClass("lg-components-open")));
                  }
                );
              }),
              (i.prototype.destroy = function () {
                this.settings.thumbnail &&
                  (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                  this.core.LGel.off(".lg.thumb"),
                  this.core.LGel.off(".thumb"),
                  this.$thumbOuter.remove(),
                  this.core.outer.removeClass("lg-has-thumb"));
              }),
              i
            );
          })();
        })();
      },
      578: function (e) {
        e.exports = (function () {
          "use strict";
          var e = function () {
              return (
                (e =
                  Object.assign ||
                  function (e) {
                    for (var t, s = 1, i = arguments.length; s < i; s++)
                      for (var n in (t = arguments[s]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                e.apply(this, arguments)
              );
            },
            t = {
              scale: 1,
              zoom: !0,
              actualSize: !0,
              showZoomInOutIcons: !1,
              actualSizeIcons: { zoomIn: "lg-zoom-in", zoomOut: "lg-zoom-out" },
              enableZoomAfter: 300,
              zoomPluginStrings: {
                zoomIn: "Zoom in",
                zoomOut: "Zoom out",
                viewActualSize: "View actual size",
              },
            },
            s = {
              afterAppendSlide: "lgAfterAppendSlide",
              init: "lgInit",
              hasVideo: "lgHasVideo",
              containerResize: "lgContainerResize",
              updateSlides: "lgUpdateSlides",
              afterAppendSubHtml: "lgAfterAppendSubHtml",
              beforeOpen: "lgBeforeOpen",
              afterOpen: "lgAfterOpen",
              slideItemLoad: "lgSlideItemLoad",
              beforeSlide: "lgBeforeSlide",
              afterSlide: "lgAfterSlide",
              posterClick: "lgPosterClick",
              dragStart: "lgDragStart",
              dragMove: "lgDragMove",
              dragEnd: "lgDragEnd",
              beforeNextSlide: "lgBeforeNextSlide",
              beforePrevSlide: "lgBeforePrevSlide",
              beforeClose: "lgBeforeClose",
              afterClose: "lgAfterClose",
              rotateLeft: "lgRotateLeft",
              rotateRight: "lgRotateRight",
              flipHorizontal: "lgFlipHorizontal",
              flipVertical: "lgFlipVertical",
              autoplay: "lgAutoplay",
              autoplayStart: "lgAutoplayStart",
              autoplayStop: "lgAutoplayStop",
            },
            i = 500;
          return (function () {
            function n(s, i) {
              return (
                (this.core = s),
                (this.$LG = i),
                (this.settings = e(e({}, t), this.core.settings)),
                this
              );
            }
            return (
              (n.prototype.buildTemplates = function () {
                var e = this.settings.showZoomInOutIcons
                  ? '<button id="' +
                    this.core.getIdName("lg-zoom-in") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.zoomIn +
                    '" class="lg-zoom-in lg-icon"></button><button id="' +
                    this.core.getIdName("lg-zoom-out") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.zoomIn +
                    '" class="lg-zoom-out lg-icon"></button>'
                  : "";
                this.settings.actualSize &&
                  (e +=
                    '<button id="' +
                    this.core.getIdName("lg-actual-size") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.viewActualSize +
                    '" class="' +
                    this.settings.actualSizeIcons.zoomIn +
                    ' lg-icon"></button>'),
                  this.core.outer.addClass("lg-use-transition-for-zoom"),
                  this.core.$toolbar.first().append(e);
              }),
              (n.prototype.enableZoom = function (e) {
                var t = this,
                  s = this.settings.enableZoomAfter + e.detail.delay;
                this.$LG("body").first().hasClass("lg-from-hash") &&
                e.detail.delay
                  ? (s = 0)
                  : this.$LG("body").first().removeClass("lg-from-hash"),
                  (this.zoomableTimeout = setTimeout(function () {
                    t.isImageSlide(t.core.index) &&
                      (t.core
                        .getSlideItem(e.detail.index)
                        .addClass("lg-zoomable"),
                      e.detail.index === t.core.index && t.setZoomEssentials());
                  }, s + 30));
              }),
              (n.prototype.enableZoomOnSlideItemLoad = function () {
                this.core.LGel.on(
                  s.slideItemLoad + ".zoom",
                  this.enableZoom.bind(this)
                );
              }),
              (n.prototype.getDragCords = function (e) {
                return { x: e.pageX, y: e.pageY };
              }),
              (n.prototype.getSwipeCords = function (e) {
                return { x: e.touches[0].pageX, y: e.touches[0].pageY };
              }),
              (n.prototype.getDragAllowedAxises = function (e, t) {
                var s = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first()
                    .get(),
                  i = 0,
                  n = 0,
                  o = s.getBoundingClientRect();
                e
                  ? ((i = s.offsetHeight * e), (n = s.offsetWidth * e))
                  : t
                  ? ((i = o.height + t * o.height), (n = o.width + t * o.width))
                  : ((i = o.height), (n = o.width));
                var r = i > this.containerRect.height;
                return { allowX: n > this.containerRect.width, allowY: r };
              }),
              (n.prototype.setZoomEssentials = function () {
                this.containerRect = this.core.$content
                  .get()
                  .getBoundingClientRect();
              }),
              (n.prototype.zoomImage = function (e, t, s, i) {
                if (!(Math.abs(t) <= 0)) {
                  var n,
                    o,
                    r = this.containerRect.width / 2 + this.containerRect.left,
                    l =
                      this.containerRect.height / 2 +
                      this.containerRect.top +
                      this.scrollTop;
                  1 === e && (this.positionChanged = !1);
                  var a = this.getDragAllowedAxises(0, t),
                    c = a.allowY,
                    d = a.allowX;
                  this.positionChanged &&
                    ((n = this.left / (this.scale - t)),
                    (o = this.top / (this.scale - t)),
                    (this.pageX = r - n),
                    (this.pageY = l - o),
                    (this.positionChanged = !1));
                  var u,
                    h,
                    g = this.getPossibleSwipeDragCords(t),
                    p = r - this.pageX,
                    m = l - this.pageY;
                  if (e - t > 1) {
                    var f = (e - t) / Math.abs(t);
                    (u =
                      (p =
                        (t < 0 ? -p : p) + this.left * (f + (t < 0 ? -1 : 1))) /
                      f),
                      (h =
                        (m =
                          (t < 0 ? -m : m) +
                          this.top * (f + (t < 0 ? -1 : 1))) / f);
                  } else (u = p * (f = (e - t) * t)), (h = m * f);
                  s &&
                    (d
                      ? this.isBeyondPossibleLeft(u, g.minX)
                        ? (u = g.minX)
                        : this.isBeyondPossibleRight(u, g.maxX) && (u = g.maxX)
                      : e > 1 &&
                        (u < g.minX
                          ? (u = g.minX)
                          : u > g.maxX && (u = g.maxX)),
                    c
                      ? this.isBeyondPossibleTop(h, g.minY)
                        ? (h = g.minY)
                        : this.isBeyondPossibleBottom(h, g.maxY) && (h = g.maxY)
                      : e > 1 &&
                        (h < g.minY
                          ? (h = g.minY)
                          : h > g.maxY && (h = g.maxY))),
                    this.setZoomStyles({ x: u, y: h, scale: e }),
                    (this.left = u),
                    (this.top = h),
                    i && this.setZoomImageSize();
                }
              }),
              (n.prototype.resetImageTranslate = function (e) {
                if (this.isImageSlide(e)) {
                  var t = this.core.getSlideItem(e).find(".lg-image").first();
                  (this.imageReset = !1),
                    t.removeClass(
                      "reset-transition reset-transition-y reset-transition-x"
                    ),
                    this.core.outer.removeClass("lg-actual-size"),
                    t.css("width", "auto").css("height", "auto"),
                    setTimeout(function () {
                      t.removeClass("no-transition");
                    }, 10);
                }
              }),
              (n.prototype.setZoomImageSize = function () {
                var e = this,
                  t = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first();
                setTimeout(function () {
                  var s = e.getCurrentImageActualSizeScale();
                  e.scale >= s &&
                    (t.addClass("no-transition"), (e.imageReset = !0));
                }, i),
                  setTimeout(function () {
                    var s = e.getCurrentImageActualSizeScale();
                    if (e.scale >= s) {
                      var i = e.getDragAllowedAxises(e.scale);
                      t
                        .css("width", t.get().naturalWidth + "px")
                        .css("height", t.get().naturalHeight + "px"),
                        e.core.outer.addClass("lg-actual-size"),
                        i.allowX && i.allowY
                          ? t.addClass("reset-transition")
                          : i.allowX && !i.allowY
                          ? t.addClass("reset-transition-x")
                          : !i.allowX &&
                            i.allowY &&
                            t.addClass("reset-transition-y");
                    }
                  }, i + 50);
              }),
              (n.prototype.setZoomStyles = function (e) {
                var t = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-img-wrap")
                    .first(),
                  s = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first(),
                  i = this.core.outer.find(".lg-current .lg-dummy-img").first();
                (this.scale = e.scale),
                  s.css(
                    "transform",
                    "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                  ),
                  i.css(
                    "transform",
                    "scale3d(" + e.scale + ", " + e.scale + ", 1)"
                  );
                var n = "translate3d(" + e.x + "px, " + e.y + "px, 0)";
                t.css("transform", n);
              }),
              (n.prototype.setActualSize = function (e, t) {
                var s = this,
                  i = this.core.galleryItems[this.core.index];
                this.resetImageTranslate(e),
                  setTimeout(function () {
                    if (
                      i.src &&
                      !s.core.outer.hasClass("lg-first-slide-loading")
                    ) {
                      var e = s.getCurrentImageActualSizeScale(),
                        n = s.scale;
                      s.core.outer.hasClass("lg-zoomed")
                        ? (s.scale = 1)
                        : (s.scale = s.getScale(e)),
                        s.setPageCords(t),
                        s.beginZoom(s.scale),
                        s.zoomImage(s.scale, s.scale - n, !0, !0),
                        setTimeout(function () {
                          s.core.outer
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab");
                        }, 10);
                    }
                  }, 50);
              }),
              (n.prototype.getNaturalWidth = function (e) {
                var t = this.core.getSlideItem(e).find(".lg-image").first(),
                  s = this.core.galleryItems[e].width;
                return s ? parseFloat(s) : t.get().naturalWidth;
              }),
              (n.prototype.getActualSizeScale = function (e, t) {
                return e >= t ? e / t || 2 : 1;
              }),
              (n.prototype.getCurrentImageActualSizeScale = function () {
                var e = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first()
                    .get().offsetWidth,
                  t = this.getNaturalWidth(this.core.index) || e;
                return this.getActualSizeScale(t, e);
              }),
              (n.prototype.getPageCords = function (e) {
                var t = {};
                if (e)
                  (t.x = e.pageX || e.touches[0].pageX),
                    (t.y = e.pageY || e.touches[0].pageY);
                else {
                  var s = this.core.$content.get().getBoundingClientRect();
                  (t.x = s.width / 2 + s.left),
                    (t.y = s.height / 2 + this.scrollTop + s.top);
                }
                return t;
              }),
              (n.prototype.setPageCords = function (e) {
                var t = this.getPageCords(e);
                (this.pageX = t.x), (this.pageY = t.y);
              }),
              (n.prototype.manageActualPixelClassNames = function () {
                this.core
                  .getElementById("lg-actual-size")
                  .removeClass(this.settings.actualSizeIcons.zoomIn)
                  .addClass(this.settings.actualSizeIcons.zoomOut);
              }),
              (n.prototype.beginZoom = function (e) {
                return (
                  this.core.outer.removeClass(
                    "lg-zoom-drag-transition lg-zoom-dragging"
                  ),
                  e > 1
                    ? (this.core.outer.addClass("lg-zoomed"),
                      this.manageActualPixelClassNames())
                    : this.resetZoom(),
                  e > 1
                );
              }),
              (n.prototype.getScale = function (e) {
                var t = this.getCurrentImageActualSizeScale();
                return e < 1 ? (e = 1) : e > t && (e = t), e;
              }),
              (n.prototype.init = function () {
                var e = this;
                if (this.settings.zoom) {
                  this.buildTemplates(), this.enableZoomOnSlideItemLoad();
                  var t = null;
                  this.core.outer.on("dblclick.lg", function (t) {
                    e.$LG(t.target).hasClass("lg-image") &&
                      e.setActualSize(e.core.index, t);
                  }),
                    this.core.outer.on("touchstart.lg", function (s) {
                      var i = e.$LG(s.target);
                      1 === s.touches.length &&
                        i.hasClass("lg-image") &&
                        (t
                          ? (clearTimeout(t),
                            (t = null),
                            s.preventDefault(),
                            e.setActualSize(e.core.index, s))
                          : (t = setTimeout(function () {
                              t = null;
                            }, 300)));
                    }),
                    this.core.LGel.on(
                      s.containerResize +
                        ".zoom " +
                        s.rotateRight +
                        ".zoom " +
                        s.rotateLeft +
                        ".zoom " +
                        s.flipHorizontal +
                        ".zoom " +
                        s.flipVertical +
                        ".zoom",
                      function () {
                        if (
                          e.core.lgOpened &&
                          e.isImageSlide(e.core.index) &&
                          !e.core.touchAction
                        ) {
                          var t = e.core
                            .getSlideItem(e.core.index)
                            .find(".lg-img-wrap")
                            .first();
                          (e.top = 0),
                            (e.left = 0),
                            e.setZoomEssentials(),
                            e.setZoomSwipeStyles(t, { x: 0, y: 0 }),
                            (e.positionChanged = !0);
                        }
                      }
                    ),
                    this.$LG(window).on(
                      "scroll.lg.zoom.global" + this.core.lgId,
                      function () {
                        e.core.lgOpened &&
                          (e.scrollTop = e.$LG(window).scrollTop());
                      }
                    ),
                    this.core
                      .getElementById("lg-zoom-out")
                      .on("click.lg", function () {
                        if (e.isImageSlide(e.core.index)) {
                          var t = 0;
                          e.imageReset &&
                            (e.resetImageTranslate(e.core.index), (t = 50)),
                            setTimeout(function () {
                              var t = e.scale - e.settings.scale;
                              t < 1 && (t = 1),
                                e.beginZoom(t),
                                e.zoomImage(t, -e.settings.scale, !0, !0);
                            }, t);
                        }
                      }),
                    this.core
                      .getElementById("lg-zoom-in")
                      .on("click.lg", function () {
                        e.zoomIn();
                      }),
                    this.core
                      .getElementById("lg-actual-size")
                      .on("click.lg", function () {
                        e.setActualSize(e.core.index);
                      }),
                    this.core.LGel.on(s.beforeOpen + ".zoom", function () {
                      e.core.outer.find(".lg-item").removeClass("lg-zoomable");
                    }),
                    this.core.LGel.on(s.afterOpen + ".zoom", function () {
                      (e.scrollTop = e.$LG(window).scrollTop()),
                        (e.pageX = e.core.outer.width() / 2),
                        (e.pageY = e.core.outer.height() / 2 + e.scrollTop),
                        (e.scale = 1);
                    }),
                    this.core.LGel.on(s.afterSlide + ".zoom", function (t) {
                      var s = t.detail.prevIndex;
                      (e.scale = 1),
                        (e.positionChanged = !1),
                        e.resetZoom(s),
                        e.resetImageTranslate(s),
                        e.isImageSlide(e.core.index) && e.setZoomEssentials();
                    }),
                    this.zoomDrag(),
                    this.pinchZoom(),
                    this.zoomSwipe(),
                    (this.zoomableTimeout = !1),
                    (this.positionChanged = !1);
                }
              }),
              (n.prototype.zoomIn = function () {
                if (this.isImageSlide(this.core.index)) {
                  var e = this.scale + this.settings.scale;
                  (e = this.getScale(e)),
                    this.beginZoom(e),
                    this.zoomImage(
                      e,
                      Math.min(this.settings.scale, e - this.scale),
                      !0,
                      !0
                    );
                }
              }),
              (n.prototype.resetZoom = function (e) {
                this.core.outer.removeClass(
                  "lg-zoomed lg-zoom-drag-transition"
                );
                var t = this.core.getElementById("lg-actual-size"),
                  s = this.core.getSlideItem(
                    void 0 !== e ? e : this.core.index
                  );
                t
                  .removeClass(this.settings.actualSizeIcons.zoomOut)
                  .addClass(this.settings.actualSizeIcons.zoomIn),
                  s.find(".lg-img-wrap").first().removeAttr("style"),
                  s.find(".lg-image").first().removeAttr("style"),
                  (this.scale = 1),
                  (this.left = 0),
                  (this.top = 0),
                  this.setPageCords();
              }),
              (n.prototype.getTouchDistance = function (e) {
                return Math.sqrt(
                  (e.touches[0].pageX - e.touches[1].pageX) *
                    (e.touches[0].pageX - e.touches[1].pageX) +
                    (e.touches[0].pageY - e.touches[1].pageY) *
                      (e.touches[0].pageY - e.touches[1].pageY)
                );
              }),
              (n.prototype.pinchZoom = function () {
                var e = this,
                  t = 0,
                  s = !1,
                  i = 1,
                  n = 0,
                  o = this.core.getSlideItem(this.core.index);
                this.core.outer.on("touchstart.lg", function (s) {
                  if (
                    ((o = e.core.getSlideItem(e.core.index)),
                    e.isImageSlide(e.core.index) && 2 === s.touches.length)
                  ) {
                    if (
                      (s.preventDefault(),
                      e.core.outer.hasClass("lg-first-slide-loading"))
                    )
                      return;
                    (i = e.scale || 1),
                      e.core.outer.removeClass(
                        "lg-zoom-drag-transition lg-zoom-dragging"
                      ),
                      e.setPageCords(s),
                      e.resetImageTranslate(e.core.index),
                      (e.core.touchAction = "pinch"),
                      (t = e.getTouchDistance(s));
                  }
                }),
                  this.core.$inner.on("touchmove.lg", function (r) {
                    if (
                      2 === r.touches.length &&
                      "pinch" === e.core.touchAction &&
                      (e.$LG(r.target).hasClass("lg-item") ||
                        o.get().contains(r.target))
                    ) {
                      r.preventDefault();
                      var l = e.getTouchDistance(r),
                        a = t - l;
                      if ((!s && Math.abs(a) > 5 && (s = !0), s)) {
                        n = e.scale;
                        var c = Math.max(1, i + 0.02 * -a);
                        e.scale = Math.round(100 * (c + Number.EPSILON)) / 100;
                        var d = e.scale - n;
                        e.zoomImage(
                          e.scale,
                          Math.round(100 * (d + Number.EPSILON)) / 100,
                          !1,
                          !1
                        );
                      }
                    }
                  }),
                  this.core.$inner.on("touchend.lg", function (i) {
                    if (
                      "pinch" === e.core.touchAction &&
                      (e.$LG(i.target).hasClass("lg-item") ||
                        o.get().contains(i.target))
                    ) {
                      if (((s = !1), (t = 0), e.scale <= 1)) e.resetZoom();
                      else {
                        var n = e.getCurrentImageActualSizeScale();
                        if (e.scale >= n) {
                          var r = n - e.scale;
                          0 === r && (r = 0.01), e.zoomImage(n, r, !1, !0);
                        }
                        e.manageActualPixelClassNames(),
                          e.core.outer.addClass("lg-zoomed");
                      }
                      e.core.touchAction = void 0;
                    }
                  });
              }),
              (n.prototype.touchendZoom = function (e, t, s, i, n) {
                var o = t.x - e.x,
                  r = t.y - e.y,
                  l = Math.abs(o) / n + 1,
                  a = Math.abs(r) / n + 1;
                l > 2 && (l += 1), a > 2 && (a += 1), (o *= l), (r *= a);
                var c = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-img-wrap")
                    .first(),
                  d = {};
                (d.x = this.left + o), (d.y = this.top + r);
                var u = this.getPossibleSwipeDragCords();
                (Math.abs(o) > 15 || Math.abs(r) > 15) &&
                  (i &&
                    (this.isBeyondPossibleTop(d.y, u.minY)
                      ? (d.y = u.minY)
                      : this.isBeyondPossibleBottom(d.y, u.maxY) &&
                        (d.y = u.maxY)),
                  s &&
                    (this.isBeyondPossibleLeft(d.x, u.minX)
                      ? (d.x = u.minX)
                      : this.isBeyondPossibleRight(d.x, u.maxX) &&
                        (d.x = u.maxX)),
                  i ? (this.top = d.y) : (d.y = this.top),
                  s ? (this.left = d.x) : (d.x = this.left),
                  this.setZoomSwipeStyles(c, d),
                  (this.positionChanged = !0));
              }),
              (n.prototype.getZoomSwipeCords = function (e, t, s, i, n) {
                var o = {};
                if (i) {
                  if (
                    ((o.y = this.top + (t.y - e.y)),
                    this.isBeyondPossibleTop(o.y, n.minY))
                  ) {
                    var r = n.minY - o.y;
                    o.y = n.minY - r / 6;
                  } else if (this.isBeyondPossibleBottom(o.y, n.maxY)) {
                    var l = o.y - n.maxY;
                    o.y = n.maxY + l / 6;
                  }
                } else o.y = this.top;
                if (s) {
                  if (
                    ((o.x = this.left + (t.x - e.x)),
                    this.isBeyondPossibleLeft(o.x, n.minX))
                  ) {
                    var a = n.minX - o.x;
                    o.x = n.minX - a / 6;
                  } else if (this.isBeyondPossibleRight(o.x, n.maxX)) {
                    var c = o.x - n.maxX;
                    o.x = n.maxX + c / 6;
                  }
                } else o.x = this.left;
                return o;
              }),
              (n.prototype.isBeyondPossibleLeft = function (e, t) {
                return e >= t;
              }),
              (n.prototype.isBeyondPossibleRight = function (e, t) {
                return e <= t;
              }),
              (n.prototype.isBeyondPossibleTop = function (e, t) {
                return e >= t;
              }),
              (n.prototype.isBeyondPossibleBottom = function (e, t) {
                return e <= t;
              }),
              (n.prototype.isImageSlide = function (e) {
                var t = this.core.galleryItems[e];
                return "image" === this.core.getSlideType(t);
              }),
              (n.prototype.getPossibleSwipeDragCords = function (e) {
                var t = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first(),
                  s = this.core.mediaContainerPosition.bottom,
                  i = t.get().getBoundingClientRect(),
                  n = i.height,
                  o = i.width;
                return (
                  e && ((n += e * n), (o += e * o)),
                  {
                    minY: (n - this.containerRect.height) / 2,
                    maxY: (this.containerRect.height - n) / 2 + s,
                    minX: (o - this.containerRect.width) / 2,
                    maxX: (this.containerRect.width - o) / 2,
                  }
                );
              }),
              (n.prototype.setZoomSwipeStyles = function (e, t) {
                e.css(
                  "transform",
                  "translate3d(" + t.x + "px, " + t.y + "px, 0)"
                );
              }),
              (n.prototype.zoomSwipe = function () {
                var e,
                  t,
                  s = this,
                  i = {},
                  n = {},
                  o = !1,
                  r = !1,
                  l = !1,
                  a = new Date(),
                  c = (new Date(), this.core.getSlideItem(this.core.index));
                this.core.$inner.on("touchstart.lg", function (n) {
                  if (
                    s.isImageSlide(s.core.index) &&
                    ((c = s.core.getSlideItem(s.core.index)),
                    (s.$LG(n.target).hasClass("lg-item") ||
                      c.get().contains(n.target)) &&
                      1 === n.touches.length &&
                      s.core.outer.hasClass("lg-zoomed"))
                  ) {
                    n.preventDefault(),
                      (a = new Date()),
                      (s.core.touchAction = "zoomSwipe"),
                      (t = s.core
                        .getSlideItem(s.core.index)
                        .find(".lg-img-wrap")
                        .first());
                    var o = s.getDragAllowedAxises(0);
                    (l = o.allowY),
                      ((r = o.allowX) || l) && (i = s.getSwipeCords(n)),
                      (e = s.getPossibleSwipeDragCords()),
                      s.core.outer.addClass(
                        "lg-zoom-dragging lg-zoom-drag-transition"
                      );
                  }
                }),
                  this.core.$inner.on("touchmove.lg", function (a) {
                    if (
                      1 === a.touches.length &&
                      "zoomSwipe" === s.core.touchAction &&
                      (s.$LG(a.target).hasClass("lg-item") ||
                        c.get().contains(a.target))
                    ) {
                      a.preventDefault(),
                        (s.core.touchAction = "zoomSwipe"),
                        (n = s.getSwipeCords(a));
                      var d = s.getZoomSwipeCords(i, n, r, l, e);
                      (Math.abs(n.x - i.x) > 15 || Math.abs(n.y - i.y) > 15) &&
                        ((o = !0), s.setZoomSwipeStyles(t, d));
                    }
                  }),
                  this.core.$inner.on("touchend.lg", function (e) {
                    if (
                      "zoomSwipe" === s.core.touchAction &&
                      (s.$LG(e.target).hasClass("lg-item") ||
                        c.get().contains(e.target))
                    ) {
                      if (
                        (e.preventDefault(),
                        (s.core.touchAction = void 0),
                        s.core.outer.removeClass("lg-zoom-dragging"),
                        !o)
                      )
                        return;
                      o = !1;
                      var t = new Date().valueOf() - a.valueOf();
                      s.touchendZoom(i, n, r, l, t);
                    }
                  });
              }),
              (n.prototype.zoomDrag = function () {
                var e,
                  t,
                  s,
                  i,
                  n = this,
                  o = {},
                  r = {},
                  l = !1,
                  a = !1,
                  c = !1,
                  d = !1;
                this.core.outer.on("mousedown.lg.zoom", function (t) {
                  if (n.isImageSlide(n.core.index)) {
                    var r = n.core.getSlideItem(n.core.index);
                    if (
                      n.$LG(t.target).hasClass("lg-item") ||
                      r.get().contains(t.target)
                    ) {
                      (e = new Date()),
                        (i = n.core
                          .getSlideItem(n.core.index)
                          .find(".lg-img-wrap")
                          .first());
                      var a = n.getDragAllowedAxises(0);
                      (d = a.allowY),
                        (c = a.allowX),
                        n.core.outer.hasClass("lg-zoomed") &&
                          n.$LG(t.target).hasClass("lg-object") &&
                          (c || d) &&
                          (t.preventDefault(),
                          (o = n.getDragCords(t)),
                          (s = n.getPossibleSwipeDragCords()),
                          (l = !0),
                          n.core.outer
                            .removeClass("lg-grab")
                            .addClass(
                              "lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"
                            ));
                    }
                  }
                }),
                  this.$LG(window).on(
                    "mousemove.lg.zoom.global" + this.core.lgId,
                    function (e) {
                      if (l) {
                        (a = !0), (r = n.getDragCords(e));
                        var t = n.getZoomSwipeCords(o, r, c, d, s);
                        n.setZoomSwipeStyles(i, t);
                      }
                    }
                  ),
                  this.$LG(window).on(
                    "mouseup.lg.zoom.global" + this.core.lgId,
                    function (s) {
                      if (l) {
                        if (
                          ((t = new Date()),
                          (l = !1),
                          n.core.outer.removeClass("lg-zoom-dragging"),
                          a && (o.x !== r.x || o.y !== r.y))
                        ) {
                          r = n.getDragCords(s);
                          var i = t.valueOf() - e.valueOf();
                          n.touchendZoom(o, r, c, d, i);
                        }
                        a = !1;
                      }
                      n.core.outer
                        .removeClass("lg-grabbing")
                        .addClass("lg-grab");
                    }
                  );
              }),
              (n.prototype.closeGallery = function () {
                this.resetZoom();
              }),
              (n.prototype.destroy = function () {
                this.$LG(window).off(".lg.zoom.global" + this.core.lgId),
                  this.core.LGel.off(".lg.zoom"),
                  this.core.LGel.off(".zoom"),
                  clearTimeout(this.zoomableTimeout),
                  (this.zoomableTimeout = !1);
              }),
              n
            );
          })();
        })();
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            o = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (t) {
              return e({}, r, t);
            },
            a = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            g = "llOriginalAttrs",
            p = "data",
            m = "loading",
            f = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            S = "data-",
            w = "ll-status",
            C = function (e, t) {
              return e.getAttribute(S + t);
            },
            T = function (e) {
              return C(e, w);
            },
            x = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            E = function (e) {
              return x(e, null);
            },
            I = function (e) {
              return null === T(e);
            },
            L = function (e) {
              return T(e) === y;
            },
            A = [m, f, v, b],
            M = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            O = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            z = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            k = function (e) {
              return e.llTempImage;
            },
            P = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            _ = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            $ = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            G = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && $(s).forEach(t);
            },
            B = function (e, t) {
              $(e).forEach(t);
            },
            F = [c],
            H = [c, h],
            R = [c, d, u],
            W = [p],
            X = function (e) {
              return !!e[g];
            },
            N = function (e) {
              return e[g];
            },
            V = function (e) {
              return delete e[g];
            },
            q = function (e, t) {
              if (!X(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[g] = s);
              }
            },
            j = function (e, t) {
              if (X(e)) {
                var s = N(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            Y = function (e, t, s) {
              O(e, t.class_applied),
                x(e, v),
                s &&
                  (t.unobserve_completed && P(e, t),
                  M(t.callback_applied, e, s));
            },
            Z = function (e, t, s) {
              O(e, t.class_loading),
                x(e, m),
                s && (_(s, 1), M(t.callback_loading, e, s));
            },
            U = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            K = function (e, t) {
              U(e, u, C(e, t.data_sizes)),
                U(e, d, C(e, t.data_srcset)),
                U(e, c, C(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                G(e, function (e) {
                  q(e, R), K(e, t);
                }),
                  q(e, R),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                q(e, F), U(e, c, C(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  q(e, F), U(e, c, C(e, t.data_src));
                }),
                  q(e, H),
                  U(e, h, C(e, t.data_poster)),
                  U(e, c, C(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                q(e, W), U(e, p, C(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                M(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            oe = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                _(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                z(e, t.class_loading),
                t.unobserve_completed && P(e, s);
            },
            re = function (e, t, s) {
              var i = k(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      oe(t, s, i),
                        O(t, s.class_loaded),
                        x(t, f),
                        M(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      oe(t, s, i),
                        O(t, s.class_error),
                        x(t, b),
                        M(s.callback_error, t, i),
                        s.restore_on_error && j(t, R),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            le = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, s),
                      (function (e) {
                        X(e) ||
                          (e[g] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = C(e, t.data_bg),
                          n = C(e, t.data_bg_hidpi),
                          r = o && n ? n : i;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          k(e).setAttribute(c, r),
                          Z(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = C(e, t.data_bg_multi),
                          n = C(e, t.data_bg_multi_hidpi),
                          r = o && n ? n : i;
                        r && ((e.style.backgroundImage = r), Y(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = C(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            o = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = o.join()),
                            "" === e.style.backgroundImage &&
                              ((o = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = o.join())),
                            Y(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    re(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), Z(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            ae = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              G(e, function (e) {
                j(e, R);
              }),
                j(e, R);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                j(e, F);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  j(e, F);
                }),
                  j(e, H),
                  e.load();
              },
              OBJECT: function (e) {
                j(e, W);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (X(e)) {
                        var t = N(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  I(e) ||
                    L(e) ||
                    (z(e, t.class_entered),
                    z(e, t.class_exited),
                    z(e, t.class_applied),
                    z(e, t.class_loading),
                    z(e, t.class_loaded),
                    z(e, t.class_error));
                })(e, t),
                E(e),
                V(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            ge = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            pe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return A.indexOf(T(e)) >= 0;
                      })(e);
                      x(e, "entered"),
                        O(e, s.class_entered),
                        z(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && P(e, s);
                        })(e, s, i),
                        M(s.callback_enter, e, t, i),
                        n || le(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      I(e) ||
                        (O(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return T(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              G(e, function (e) {
                                ae(e);
                              }),
                                ae(e);
                            })(e),
                            ce(e),
                            z(e, s.class_loading),
                            _(i, -1),
                            E(e),
                            M(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        M(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return T(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(I);
              })(e || fe(t));
            },
            ye = function (e, s) {
              var n = l(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !ge(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        pe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = fe(e)), me(s).filter(ve)).forEach(function (t) {
                          z(t, e.class_error), E(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  n,
                  o = this._settings,
                  r = be(e, o);
                D(this, r.length),
                  !s && i
                    ? ge(o)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  x(e, y);
                              })(e, t, s);
                          }),
                            D(s, 0);
                        })(r, o, this)
                      : ((n = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  fe(this._settings).forEach(function (e) {
                    V(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                be(e, s).forEach(function (e) {
                  P(e, t), le(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var s = l(t);
              le(e, s);
            }),
            (ye.resetStatus = function (e) {
              E(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) a(e, s);
                  else a(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, s), o.exports;
  }
  (() => {
    "use strict";
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      n = (e, s = 500) => (e.hidden ? i(e, s) : t(e, s)),
      o = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function a(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function c(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function d(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = c(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                o = s[2],
                r = window.matchMedia(s[0]),
                l = e.filter(function (e) {
                  if (e.value === i && e.type === o) return !0;
                });
              n.push({ itemsArray: l, matchMedia: r });
            }),
            n
          );
      }
    }
    let u = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let o = "",
          l = 0;
        t &&
          ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: s,
          header: o,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (r(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", c);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        a(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class h {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          o = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let l = "";
        return (
          (l += o
            ? `<a ${r} ${i} href="${o}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (l += this.getSelectElementContent(e)),
          (l += o ? "</a>" : "</button>"),
          l
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && p.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && a(`[select]: ${e}`);
      }
    }
    const g = { inputMaskModule: null, selectModule: null };
    let p = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                p.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (g.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  g.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function m(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function f(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : m(t[s]) && m(e[s]) && Object.keys(t[s]).length > 0 && f(e[s], t[s]);
      });
    }
    const v = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function b() {
      const e = "undefined" != typeof document ? document : {};
      return f(e, v), e;
    }
    const y = {
      document: v,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function S() {
      const e = "undefined" != typeof window ? window : {};
      return f(e, y), e;
    }
    function w(e, t = 0) {
      return setTimeout(e, t);
    }
    function C() {
      return Date.now();
    }
    function T(e, t = "x") {
      const s = S();
      let i, n, o;
      const r = (function (e) {
        const t = S();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((o =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = o.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? o.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? o.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function x(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function E(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const o = e[n];
        if (
          null != o &&
          ((i = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(o)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(o, i);
            void 0 !== n &&
              n.enumerable &&
              (x(t[i]) && x(o[i])
                ? o[i].__swiper__
                  ? (t[i] = o[i])
                  : E(t[i], o[i])
                : !x(t[i]) && x(o[i])
                ? ((t[i] = {}), o[i].__swiper__ ? (t[i] = o[i]) : E(t[i], o[i]))
                : (t[i] = o[i]));
          }
        }
      }
      var i;
      return t;
    }
    function I(e, t, s) {
      e.style.setProperty(t, s);
    }
    function L({ swiper: e, targetPosition: t, side: s }) {
      const i = S(),
        n = -e.translate;
      let o,
        r = null;
      const l = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const a = t > n ? "next" : "prev",
        c = (e, t) => ("next" === a && e >= t) || ("prev" === a && e <= t),
        d = () => {
          (o = new Date().getTime()), null === r && (r = o);
          const a = Math.max(Math.min((o - r) / l, 1), 0),
            u = 0.5 - Math.cos(a * Math.PI) / 2;
          let h = n + u * (t - n);
          if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [s]: h }), c(h, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: h });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(d);
        };
      d();
    }
    function A(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function M(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function O(e, t) {
      return S().getComputedStyle(e, null).getPropertyValue(t);
    }
    function z(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function k(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function P(e, t, s) {
      const i = S();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let _, D, $;
    function G() {
      return (
        _ ||
          (_ = (function () {
            const e = S(),
              t = b();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        _
      );
    }
    function B(e = {}) {
      return (
        D ||
          (D = (function ({ userAgent: e } = {}) {
            const t = G(),
              s = S(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              r = s.screen.width,
              l = s.screen.height,
              a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let g = "MacIntel" === i;
            return (
              !c &&
                g &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${l}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (g = !1)),
              a && !h && ((o.os = "android"), (o.android = !0)),
              (c || u || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        D
      );
    }
    function F() {
      return (
        $ ||
          ($ = (function () {
            const e = S();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        $
      );
    }
    const H = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const R = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        );
        if (s) {
          const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
          t && t.remove();
        }
      },
      W = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
      },
      X = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex,
          o = n + i - 1;
        if (e.params.rewind)
          for (let i = n - t; i <= o + t; i += 1) {
            const t = ((i % s) + s) % s;
            t !== n && t > o && W(e, t);
          }
        else
          for (let i = Math.max(o - t, 0); i <= Math.min(o + t, s - 1); i += 1)
            i !== n && i > o && W(e, i);
      };
    const N = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(O(i, "padding-left") || 0, 10) -
              parseInt(O(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(O(i, "padding-top") || 0, 10) -
              parseInt(O(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: o,
            size: r,
            rtlTranslate: l,
            wrongRTL: a,
          } = e,
          c = e.virtual && i.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          u = A(o, `.${e.params.slideClass}, swiper-slide`),
          h = c ? e.virtual.slides.length : u.length;
        let g = [];
        const p = [],
          m = [];
        let f = i.slidesOffsetBefore;
        "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
        let v = i.slidesOffsetAfter;
        "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          y = e.slidesGrid.length;
        let S = i.spaceBetween,
          w = -f,
          C = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof S && S.indexOf("%") >= 0
          ? (S = (parseFloat(S.replace("%", "")) / 100) * r)
          : "string" == typeof S && (S = parseFloat(S)),
          (e.virtualSize = -S),
          u.forEach((e) => {
            l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (I(n, "--swiper-centered-offset-before", ""),
            I(n, "--swiper-centered-offset-after", ""));
        const x = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        x && e.grid.initSlides(h);
        const L =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < h; n += 1) {
          let o;
          if (
            ((E = 0),
            u[n] && (o = u[n]),
            x && e.grid.updateSlide(n, o, h, t),
            !u[n] || "none" !== O(o, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              L && (u[n].style[t("width")] = "");
              const r = getComputedStyle(o),
                l = o.style.transform,
                a = o.style.webkitTransform;
              if (
                (l && (o.style.transform = "none"),
                a && (o.style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? P(o, "width", !0) : P(o, "height", !0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  l = s(r, "margin-right"),
                  a = r.getPropertyValue("box-sizing");
                if (a && "border-box" === a) E = e + n + l;
                else {
                  const { clientWidth: s, offsetWidth: r } = o;
                  E = e + t + i + n + l + (r - s);
                }
              }
              l && (o.style.transform = l),
                a && (o.style.webkitTransform = a),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * S) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                u[n] && (u[n].style[t("width")] = `${E}px`);
            u[n] && (u[n].swiperSlideSize = E),
              m.push(E),
              i.centeredSlides
                ? ((w = w + E / 2 + C / 2 + S),
                  0 === C && 0 !== n && (w = w - r / 2 - S),
                  0 === n && (w = w - r / 2 - S),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  T % i.slidesPerGroup == 0 && g.push(w),
                  p.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && g.push(w),
                  p.push(w),
                  (w = w + E + S)),
              (e.virtualSize += E + S),
              (C = E),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + v),
          l &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + S}px`),
          i.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + S}px`),
          x && e.grid.updateWrapperSize(E, g, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < g.length; s += 1) {
            let n = g[s];
            i.roundLengths && (n = Math.floor(n)),
              g[s] <= e.virtualSize - r && t.push(n);
          }
          (g = t),
            Math.floor(e.virtualSize - r) - Math.floor(g[g.length - 1]) > 1 &&
              g.push(e.virtualSize - r);
        }
        if (c && i.loop) {
          const t = m[0] + S;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              n = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) g.push(g[g.length - 1] + n);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && g.push(g[g.length - 1] + t),
              p.push(p[p.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === g.length && (g = [0]), 0 !== S)) {
          const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[s] = `${S}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (S || 0);
          }),
            (e -= S);
          const t = e - r;
          g = g.map((e) => (e < 0 ? -f : e > t ? t + v : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (S || 0);
            }),
            (e -= S),
            e < r)
          ) {
            const t = (r - e) / 2;
            g.forEach((e, s) => {
              g[s] = e - t;
            }),
              p.forEach((e, s) => {
                p[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: g,
            slidesGrid: p,
            slidesSizesGrid: m,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          I(n, "--swiper-centered-offset-before", -g[0] + "px"),
            I(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (h !== d && e.emit("slidesLengthChange"),
          g.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          h <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && (t.wrapperEl.style.height = `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
            s -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: o } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let l = s.spaceBetween;
        "string" == typeof l && l.indexOf("%") >= 0
          ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
          : "string" == typeof l && (l = parseFloat(l));
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let c = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (c -= i[0].swiperSlideOffset);
          const d =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + l),
            u =
              (r - o[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) /
              (a.swiperSlideSize + l),
            h = -(r - c),
            g = h + t.slidesSizesGrid[e];
          ((h >= 0 && h < t.size - 1) ||
            (g > 1 && g <= t.size) ||
            (h <= 0 && g >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (a.progress = n ? -d : d),
            (a.originalProgress = n ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: o, isEnd: r, progressLoop: l } = t;
        const a = o,
          c = r;
        if (0 === i) (n = 0), (o = !0), (r = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            l = Math.abs(e - t.maxTranslate()) < 1;
          (o = s || n <= 0), (r = l || n >= 1), s && (n = 0), l && (n = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[s],
            o = t.slidesGrid[i],
            r = t.slidesGrid[t.slidesGrid.length - 1],
            a = Math.abs(e);
          (l = a >= n ? (a - n) / r : (a + r - o) / r), l > 1 && (l -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: l,
          isBeginning: o,
          isEnd: r,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !a && t.emit("reachBeginning toEdge"),
          r && !c && t.emit("reachEnd toEdge"),
          ((a && !o) || (c && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          o = e.virtual && s.virtual.enabled,
          r = (e) => A(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          o)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = r(`[data-swiper-slide-index="${t}"]`));
          } else l = r(`[data-swiper-slide-index="${n}"]`);
        else l = t[n];
        if (l) {
          l.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(l, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: o,
            realIndex: r,
            snapIndex: l,
          } = t;
        let a,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          a = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, c);
          a = e + Math.floor((c - e) / n.slidesPerGroup);
        }
        if ((a >= i.length && (a = i.length - 1), c === o))
          return (
            a !== l && ((t.snapIndex = a), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: l,
            snapIndex: a,
            previousRealIndex: r,
            realIndex: u,
            previousIndex: o,
            activeIndex: c,
          }),
          t.initialized && X(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          r !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let n,
          o = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (o = !0), (n = e);
              break;
            }
        if (!i || !o)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const V = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let o = T(n, e);
        return (o += this.cssOverflowAdjustment()), s && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: o, progress: r } = s;
        let l,
          a = 0,
          c = 0;
        s.isHorizontal() ? (a = i ? -e : e) : (c = e),
          n.roundLengths && ((a = Math.floor(a)), (c = Math.floor(c))),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? a : c),
          n.cssMode
            ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -a : -c)
            : n.virtualTranslate ||
              (s.isHorizontal()
                ? (a -= s.cssOverflowAdjustment())
                : (c -= s.cssOverflowAdjustment()),
              (o.style.transform = `translate3d(${a}px, ${c}px, 0px)`));
        const d = s.maxTranslate() - s.minTranslate();
        (l = 0 === d ? 0 : (e - s.minTranslate()) / d),
          l !== r && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const o = this,
          { params: r, wrapperEl: l } = o;
        if (o.animating && r.preventInteractionOnTransition) return !1;
        const a = o.minTranslate(),
          c = o.maxTranslate();
        let d;
        if (
          ((d = i && e > a ? a : i && e < c ? c : e),
          o.updateProgress(d),
          r.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!o.support.smoothScroll)
              return (
                L({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            l.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(d),
              s &&
                (o.emit("beforeTransitionStart", t, n),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(d),
              s &&
                (o.emit("beforeTransitionStart", t, n),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.wrapperEl.removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      s && o.emit("transitionEnd"));
                  }),
                o.wrapperEl.addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function q({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: o } = e;
      let r = s;
      if (
        (r || (r = n > o ? "next" : n < o ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== o)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === r
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const j = {
      setTransition: function (e, t) {
        const s = this;
        s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
          s.emit("setTransition", e, t);
      },
      transitionStart: function (e = !0, t) {
        const s = this,
          { params: i } = s;
        i.cssMode ||
          (i.autoHeight && s.updateAutoHeight(),
          q({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
      },
      transitionEnd: function (e = !0, t) {
        const s = this,
          { params: i } = s;
        (s.animating = !1),
          i.cssMode ||
            (s.setTransition(0),
            q({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
      },
    };
    const Y = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        "string" == typeof e && (e = parseInt(e, 10));
        const o = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: l,
          snapGrid: a,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: g,
          enabled: p,
        } = o;
        if (
          (o.animating && l.preventInteractionOnTransition) ||
          (!p && !i && !n)
        )
          return !1;
        const m = Math.min(o.params.slidesPerGroupSkip, r);
        let f = m + Math.floor((r - m) / o.params.slidesPerGroup);
        f >= a.length && (f = a.length - 1);
        const v = -a[f];
        if (l.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (o.initialized && r !== u) {
          if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            v > o.translate &&
            v > o.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          (r !== (d || 0) && s && o.emit("beforeSlideChangeStart"),
          o.updateProgress(v),
          (b = r > u ? "next" : r < u ? "prev" : "reset"),
          (h && -v === o.translate) || (!h && v === o.translate))
        )
          return (
            o.updateActiveIndex(r),
            l.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== l.effect && o.setTranslate(v),
            "reset" !== b && (o.transitionStart(s, b), o.transitionEnd(s, b)),
            !1
          );
        if (l.cssMode) {
          const e = o.isHorizontal(),
            s = h ? v : -v;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              t && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
                ? ((o._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    g[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (g[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._immediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                L({ swiper: o, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            g.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(v),
          o.updateActiveIndex(r),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, i),
          o.transitionStart(s, b),
          0 === t
            ? o.transitionEnd(s, b)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.wrapperEl.removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(s, b));
                }),
              o.wrapperEl.addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const n = this;
        let o = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (o += n.virtual.slidesBefore)
              : (o = n.getSlideIndexByData(o))),
          n.slideTo(o, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: n, params: o, animating: r } = i;
        if (!n) return i;
        let l = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const a = i.activeIndex < o.slidesPerGroupSkip ? 1 : l,
          c = i.virtual && o.virtual.enabled;
        if (o.loop) {
          if (r && !c && o.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return o.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + a, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            snapGrid: o,
            slidesGrid: r,
            rtlTranslate: l,
            enabled: a,
            animating: c,
          } = i;
        if (!a) return i;
        const d = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (c && !d && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = u(l ? i.translate : -i.translate),
          g = o.map((e) => u(e));
        let p = o[g.indexOf(h) - 1];
        if (void 0 === p && n.cssMode) {
          let e;
          o.forEach((t, s) => {
            h >= t && (e = s);
          }),
            void 0 !== e && (p = o[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== p &&
            ((m = r.indexOf(p)),
            m < 0 && (m = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(m, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let o = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, o),
          l = r + Math.floor((o - r) / n.params.slidesPerGroup),
          a = n.rtlTranslate ? n.translate : -n.translate;
        if (a >= n.snapGrid[l]) {
          const e = n.snapGrid[l];
          a - e > (n.snapGrid[l + 1] - e) * i && (o += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[l - 1];
          a - e <= (n.snapGrid[l] - e) * i && (o -= n.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, n.slidesGrid.length - 1)),
          n.slideTo(o, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          o = e.clickedIndex;
        const r = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? o < e.loopedSlides - i / 2 ||
                o > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (o = e.getSlideIndex(
                    A(s, `${r}[data-swiper-slide-index="${n}"]`)[0]
                  )),
                  w(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - i
              ? (e.loopFix(),
                (o = e.getSlideIndex(
                  A(s, `${r}[data-swiper-slide-index="${n}"]`)[0]
                )),
                w(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    };
    const Z = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        A(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: n,
        byController: o,
        byMousewheel: r,
      } = {}) {
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: a,
          allowSlidePrev: c,
          allowSlideNext: d,
          slidesEl: u,
          params: h,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && h.virtual.enabled)
        )
          return (
            t &&
              (h.centeredSlides || 0 !== l.snapIndex
                ? h.centeredSlides && l.snapIndex < h.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = d),
            void l.emit("loopFix")
          );
        const g =
          "auto" === h.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let p = h.loopedSlides || g;
        p % h.slidesPerGroup != 0 &&
          (p += h.slidesPerGroup - (p % h.slidesPerGroup)),
          (l.loopedSlides = p);
        const m = [],
          f = [];
        let v = l.activeIndex;
        void 0 === n
          ? (n = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass)
              )[0]
            ))
          : (v = n);
        const b = "next" === s || !s,
          y = "prev" === s || !s;
        let S = 0,
          w = 0;
        if (n < p) {
          S = Math.max(p - n, h.slidesPerGroup);
          for (let e = 0; e < p - n; e += 1) {
            const t = e - Math.floor(e / a.length) * a.length;
            m.push(a.length - t - 1);
          }
        } else if (n > l.slides.length - 2 * p) {
          w = Math.max(n - (l.slides.length - 2 * p), h.slidesPerGroup);
          for (let e = 0; e < w; e += 1) {
            const t = e - Math.floor(e / a.length) * a.length;
            f.push(t);
          }
        }
        if (
          (y &&
            m.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                u.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          b &&
            f.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                u.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === h.slidesPerView && l.updateSlides(),
          h.watchSlidesProgress && l.updateSlidesOffset(),
          t)
        )
          if (m.length > 0 && y)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v + S] - e;
              r
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v + S, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else i && l.slideToLoop(e, 0, !1, !0);
          else if (f.length > 0 && b)
            if (void 0 === e) {
              const e = l.slidesGrid[v],
                t = l.slidesGrid[v - w] - e;
              r
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(v - w, 0, !1, !0),
                  i &&
                    (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
            } else l.slideToLoop(e, 0, !1, !0);
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = d),
          l.controller && l.controller.control && !o)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((e) => {
                !e.destroyed && e.params.loop && e.loopFix(t);
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix(t);
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    const U = {
      setGrabCursor: function (e) {
        const t = this;
        if (
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return;
        const s =
          "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        t.isElement && (t.__preventObserver__ = !0),
          (s.style.cursor = "move"),
          (s.style.cursor = e ? "grabbing" : "grab"),
          t.isElement &&
            requestAnimationFrame(() => {
              t.__preventObserver__ = !1;
            });
      },
      unsetGrabCursor: function () {
        const e = this;
        (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.isElement && (e.__preventObserver__ = !0),
          (e[
            "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
          ].style.cursor = ""),
          e.isElement &&
            requestAnimationFrame(() => {
              e.__preventObserver__ = !1;
            }));
      },
    };
    function K(e) {
      const t = this,
        s = b(),
        i = S(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: o, touches: r, enabled: l } = t;
      if (!l) return;
      if (!o.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      let c = a.target;
      if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in a && 3 === a.which) return;
      if ("button" in a && a.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const d = !!o.noSwipingClass && "" !== o.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      d && a.target && a.target.shadowRoot && u && (c = u[0]);
      const h = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        g = !(!a.target || !a.target.shadowRoot);
      if (
        o.noSwiping &&
        (g
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === b() || s === S()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(h, c)
          : c.closest(h))
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
      (r.currentX = a.pageX), (r.currentY = a.pageY);
      const p = r.currentX,
        m = r.currentY,
        f = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        v = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (f && (p <= v || p >= i.innerWidth - v)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (r.startX = p),
        (r.startY = m),
        (n.touchStartTime = C()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (n.allowThresholdMove = !1);
      let y = !0;
      c.matches(n.focusableElements) &&
        ((y = !1), "SELECT" === c.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== c &&
          s.activeElement.blur();
      const w = y && t.allowTouchMove && o.touchStartPreventDefault;
      (!o.touchStartForcePreventDefault && !w) ||
        c.isContentEditable ||
        a.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !o.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", a);
    }
    function J(e) {
      const t = b(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: o, rtlTranslate: r, enabled: l } = s;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let a = e;
      if ((a.originalEvent && (a = a.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", a)
        );
      const c = i.evCache.findIndex((e) => e.pointerId === a.pointerId);
      c >= 0 && (i.evCache[c] = a);
      const d = i.evCache.length > 1 ? i.evCache[0] : a,
        u = d.pageX,
        h = d.pageY;
      if (a.preventedByNestedSwiper) return (o.startX = u), void (o.startY = h);
      if (!s.allowTouchMove)
        return (
          a.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(o, {
              startX: u,
              startY: h,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: u,
              currentY: h,
            }),
            (i.touchStartTime = C()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (h < o.startY && s.translate <= s.maxTranslate()) ||
            (h > o.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < o.startX && s.translate <= s.maxTranslate()) ||
          (u > o.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        a.target === t.activeElement &&
        a.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", a),
        a.targetTouches && a.targetTouches.length > 1)
      )
        return;
      (o.currentX = u), (o.currentY = h);
      const g = o.currentX - o.startX,
        p = o.currentY - o.startY;
      if (s.params.threshold && Math.sqrt(g ** 2 + p ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && o.currentY === o.startY) ||
        (s.isVertical() && o.currentX === o.startX)
          ? (i.isScrolling = !1)
          : g * g + p * p >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(p), Math.abs(g))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", a),
        void 0 === i.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && a.cancelable && a.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
      let m = s.isHorizontal() ? g : p,
        f = s.isHorizontal()
          ? o.currentX - o.previousX
          : o.currentY - o.previousY;
      n.oneWayMovement &&
        ((m = Math.abs(m) * (r ? 1 : -1)), (f = Math.abs(f) * (r ? 1 : -1))),
        (o.diff = m),
        (m *= n.touchRatio),
        r && ((m = -m), (f = -f));
      const v = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = f > 0 ? "prev" : "next");
      const y = s.params.loop && !n.cssMode;
      if (!i.isMoved) {
        if (
          (y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", a);
      }
      let S;
      i.isMoved &&
        v !== s.touchesDirection &&
        y &&
        Math.abs(m) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (S = !0)),
        s.emit("sliderMove", a),
        (i.isMoved = !0),
        (i.currentTranslate = m + i.startTranslate);
      let w = !0,
        T = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (T = 0),
        m > 0
          ? (y &&
              !S &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + m) ** T)))
          : m < 0 &&
            (y &&
              !S &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((w = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - m) ** T))),
        w && (a.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (i.currentTranslate = i.startTranslate),
            void (o.diff = s.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Q(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: o,
        rtlTranslate: r,
        slidesGrid: l,
        enabled: a,
      } = t;
      if (!a) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = C(),
        u = d - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          u < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((s.lastClickTime = C()),
        w(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === o.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let h;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let g = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== l[e + t]
          ? h >= l[e] && h < l[e + t] && ((g = e), (p = l[e + t] - l[e]))
          : h >= l[e] && ((g = e), (p = l[l.length - 1] - l[l.length - 2]));
      }
      let m = null,
        f = null;
      n.rewind &&
        (t.isBeginning
          ? (f =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (m = 0));
      const v = (h - l[g]) / p,
        b = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? m : g + b)
            : t.slideTo(g)),
          "prev" === t.swipeDirection &&
            (v > 1 - n.longSwipesRatio
              ? t.slideTo(g + b)
              : null !== f && v < 0 && Math.abs(v) > n.longSwipesRatio
              ? t.slideTo(f)
              : t.slideTo(g));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(g + b)
            : t.slideTo(g)
          : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : g + b),
            "prev" === t.swipeDirection && t.slideTo(null !== f ? f : g));
      }
    }
    function ee() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: o } = e,
        r = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const l = r && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
        ? e.params.loop && !r
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    function te(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function se() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const o = e.maxTranslate() - e.minTranslate();
      (n = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function ie(e) {
      R(this, e.target), this.update();
    }
    let ne = !1;
    function oe() {}
    const re = (e, t) => {
      const s = b(),
        { params: i, el: n, wrapperEl: o, device: r } = e,
        l = !!i.nested,
        a = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      n[a]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        s[a]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[a]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[a]("click", e.onClick, !0),
        i.cssMode && o[a]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              r.ios || r.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              ee,
              !0
            )
          : e[c]("observerUpdate", ee, !0),
        n[a]("load", e.onLoad, { capture: !0 });
    };
    const le = {
        attachEvents: function () {
          const e = this,
            t = b(),
            { params: s } = e;
          (e.onTouchStart = K.bind(e)),
            (e.onTouchMove = J.bind(e)),
            (e.onTouchEnd = Q.bind(e)),
            s.cssMode && (e.onScroll = se.bind(e)),
            (e.onClick = te.bind(e)),
            (e.onLoad = ie.bind(e)),
            ne || (t.addEventListener("touchstart", oe), (ne = !0)),
            re(e, "on");
        },
        detachEvents: function () {
          re(this, "off");
        },
      },
      ae = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ce = {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: s, params: i, el: n } = e,
          o = i.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const r = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!r || e.currentBreakpoint === r) return;
        const l = (r in o ? o[r] : void 0) || e.originalParams,
          a = ae(e, i),
          c = ae(e, l),
          d = i.enabled;
        a && !c
          ? (n.classList.remove(
              `${i.containerModifierClass}grid`,
              `${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !a &&
            c &&
            (n.classList.add(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              n.classList.add(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const s = i[t] && i[t].enabled,
              n = l[t] && l[t].enabled;
            s && !n && e[t].disable(), !s && n && e[t].enable();
          });
        const u = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), E(e.params, l);
        const g = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          d && !g ? e.disable() : !d && g && e.enable(),
          (e.currentBreakpoint = r),
          e.emit("_beforeBreakpoint", l),
          h && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let i = !1;
        const n = S(),
          o = "window" === t ? n.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: o * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: o, value: l } = r[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = o)
            : l <= s.clientWidth && (i = o);
        }
        return i || "max";
      },
    };
    const de = {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: i, el: n, device: o } = e,
          r = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: o.android },
              { ios: o.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...r), n.classList.add(...t), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { el: e, classNames: t } = this;
        e.classList.remove(...t), this.emitContainerClasses();
      },
    };
    const ue = {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      he = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function ge(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                E(t, s))
              : E(t, s))
          : E(t, s);
      };
    }
    const pe = {
        eventsEmitter: H,
        update: N,
        translate: V,
        transition: j,
        slide: Y,
        loop: Z,
        grabCursor: U,
        events: le,
        breakpoints: ce,
        checkOverflow: ue,
        classes: de,
      },
      me = {};
    class fe {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = E({}, s)),
          t && !s.el && (s.el = t);
        const i = b();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = E({}, s, { el: t });
              e.push(new fe(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = G()),
          (n.device = B({ userAgent: s.userAgent })),
          (n.browser = F()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const o = {};
        n.modules.forEach((e) => {
          e({
            params: s,
            swiper: n,
            extendParams: ge(s, o),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = E({}, he, o);
        return (
          (n.params = E({}, r, me, s)),
          (n.originalParams = E({}, n.params)),
          (n.passedParams = E({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = z(A(t, `.${s.slideClass}, swiper-slide`)[0]);
        return z(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = A(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: o,
          size: r,
          activeIndex: l,
        } = this;
        let a = 1;
        if (s.centeredSlides) {
          let e,
            t = i[l].swiperSlideSize;
          for (let s = l + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (a += 1), t > r && (e = !0));
          for (let s = l - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (a += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = l + 1; e < i.length; e += 1) {
            (t ? n[e] + o[e] - n[l] < r : n[e] - n[l] < r) && (a += 1);
          }
        else
          for (let e = l - 1; e >= 0; e -= 1) {
            n[l] - n[e] < r && (a += 1);
          }
        return a;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && R(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled)
        )
          i(), e.params.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
          ) {
            const t =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides
                : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return A(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = M("div", t.params.wrapperClass)),
            s.append(n),
            A(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl: t.isElement ? s : n,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === O(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === O(s, "direction")),
            wrongRTL: "-webkit-box" === O(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? R(t, e)
                : e.addEventListener("load", (e) => {
                    R(t, e.target);
                  });
            }),
            X(t),
            (t.initialized = !0),
            X(t),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: n, wrapperEl: o, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              o.removeAttribute("style"),
              r &&
                r.length &&
                r.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(me, e);
      }
      static get extendedDefaults() {
        return me;
      }
      static get defaults() {
        return he;
      }
      static installModule(e) {
        fe.prototype.__modules__ || (fe.prototype.__modules__ = []);
        const t = fe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => fe.installModule(e)), fe)
          : (fe.installModule(e), fe);
      }
    }
    Object.keys(pe).forEach((e) => {
      Object.keys(pe[e]).forEach((t) => {
        fe.prototype[t] = pe[e][t];
      });
    }),
      fe.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = S();
          let n = null,
            o = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  o = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      o = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (o = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && o === i) || r();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", r),
                i.addEventListener("orientationchange", l));
          }),
            t("destroy", () => {
              o && i.cancelAnimationFrame(o),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", r),
                i.removeEventListener("orientationchange", l);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            o = S(),
            r = (t, s = {}) => {
              const r = new (o.MutationObserver || o.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const s = function () {
                    i("observerUpdate", t[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(s)
                    : o.setTimeout(s, 0);
                }
              );
              r.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                n.push(r);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = k(e.el);
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.el, { childList: e.params.observeSlideChildren }),
                  r(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const ve = fe;
    function be(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ye({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let o;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let r = 0;
      const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function c(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function d(t) {
        const s = t.target.closest(be(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = z(s) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          const t = e.getSlideIndexByData(i),
            s = e.getSlideIndexByData(e.realIndex);
          t > e.slides.length - e.loopedSlides &&
            e.loopFix({
              direction: t > s ? "next" : "prev",
              activeSlideIndex: t,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function u() {
        const t = e.rtl,
          s = e.params.pagination;
        if (a()) return;
        let n,
          d,
          u = e.pagination.el;
        u = l(u);
        const h =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          g = e.params.loop
            ? Math.ceil(h / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = e.previousRealIndex || 0),
              (n =
                e.params.slidesPerGroup > 1
                  ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                  : e.realIndex))
            : void 0 !== e.snapIndex
            ? ((n = e.snapIndex), (d = e.previousSnapIndex))
            : ((d = e.previousIndex || 0), (n = e.activeIndex || 0)),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let l, a, h;
          if (
            (s.dynamicBullets &&
              ((o = P(i[0], e.isHorizontal() ? "width" : "height", !0)),
              u.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  o * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== d &&
                ((r += n - (d || 0)),
                r > s.dynamicMainBullets - 1
                  ? (r = s.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (l = Math.max(n - r, 0)),
              (a = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (h = (a + l) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            u.length > 1)
          )
            i.forEach((e) => {
              const t = z(e);
              t === n && e.classList.add(...s.bulletActiveClass.split(" ")),
                s.dynamicBullets &&
                  (t >= l &&
                    t <= a &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  t === l && c(e, "prev"),
                  t === a && c(e, "next"));
            });
          else {
            const e = i[n];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets)
            ) {
              const e = i[l],
                t = i[a];
              for (let e = l; e <= a; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (o * n - o) / 2 - h * o,
              l = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        u.forEach((t, o) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(be(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(n + 1);
              }),
              t.querySelectorAll(be(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(g);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const o = (n + 1) / g;
            let r = 1,
              l = 1;
            "horizontal" === i ? (r = o) : (l = o),
              t.querySelectorAll(be(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, n + 1, g)),
              0 === o && i("paginationRender", t))
            : (0 === o && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function h() {
        const t = e.params.pagination;
        if (a()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let n = e.pagination.el;
        n = l(n);
        let o = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (o += t.renderBullet.call(e, s, t.bulletClass))
              : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (o = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (o = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          (e.pagination.bullets = []),
          n.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = o || ""),
              "bullets" === t.type &&
                e.pagination.bullets.push(
                  ...s.querySelectorAll(be(t.bulletClass))
                );
          }),
          "custom" !== t.type && i("paginationRender", n[0]);
      }
      function g() {
        e.params.pagination = (function (e, t, s, i) {
          return (
            e.params.createElements &&
              Object.keys(i).forEach((n) => {
                if (!s[n] && !0 === s.auto) {
                  let o = A(e.el, `.${i[n]}`)[0];
                  o ||
                    ((o = M("div", i[n])),
                    (o.className = i[n]),
                    e.el.append(o)),
                    (s[n] = o),
                    (t[n] = o);
                }
              }),
            s
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => k(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = l(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (r = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", d),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function p() {
        const t = e.params.pagination;
        if (a()) return;
        let s = e.pagination.el;
        s &&
          ((s = l(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", d);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(...t.bulletActiveClass.split(" "))
            );
      }
      s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const t = e.params.pagination;
        let { el: s } = e.pagination;
        (s = l(s)),
          s.forEach((s) => {
            s.classList.remove(t.horizontalClass, t.verticalClass),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              );
          });
      }),
        s("init", () => {
          !1 === e.params.pagination.enabled ? m() : (g(), h(), u());
        }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && u();
        }),
        s("snapIndexChange", () => {
          u();
        }),
        s("snapGridLengthChange", () => {
          h(), u();
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          u();
        }),
        s("click", (t, s) => {
          const n = s.target;
          let { el: o } = e.pagination;
          if (
            (Array.isArray(o) || (o = [o].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              o &&
              o.length > 0 &&
              !n.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = o[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              o.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const m = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = l(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          p();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = l(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            g(),
            h(),
            u();
        },
        disable: m,
        render: h,
        update: u,
        init: g,
        destroy: p,
      });
    }
    function Se({ swiper: e, extendParams: t, on: s }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let i = null;
      function n(e) {
        const t = i;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const o = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function r(e) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function l(e) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function a(e, t) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function c(e, t) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function d(e, t) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function h(e) {
        (e = o(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function g(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const s = e.params.a11y,
          i = t.target;
        (e.pagination &&
          e.pagination.el &&
          (i === e.pagination.el || e.pagination.el.contains(t.target)) &&
          !t.target.matches(be(e.params.pagination.bulletClass))) ||
          (e.navigation &&
            e.navigation.nextEl &&
            i === e.navigation.nextEl &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? n(s.lastSlideMessage) : n(s.nextSlideMessage)),
          e.navigation &&
            e.navigation.prevEl &&
            i === e.navigation.prevEl &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? n(s.firstSlideMessage) : n(s.prevSlideMessage)),
          e.pagination &&
            i.matches(be(e.params.pagination.bulletClass)) &&
            i.click());
      }
      function p() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function m() {
        return p() && e.params.pagination.clickable;
      }
      const f = (e, t, s) => {
          r(e),
            "BUTTON" !== e.tagName &&
              (a(e, "button"), e.addEventListener("keydown", g)),
            d(e, s),
            (function (e, t) {
              (e = o(e)).forEach((e) => {
                e.setAttribute("aria-controls", t);
              });
            })(e, t);
        },
        v = () => {
          e.a11y.clicked = !0;
        },
        b = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        y = (t) => {
          if (e.a11y.clicked) return;
          const s = t.target.closest(`.${e.params.slideClass}, swiper-slide`);
          if (!s || !e.slides.includes(s)) return;
          const i = e.slides.indexOf(s) === e.activeIndex,
            n =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(s);
          i ||
            n ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(s), 0));
        },
        S = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            c(e.slides, t.itemRoleDescriptionMessage),
            t.slideRole && a(e.slides, t.slideRole);
          const s = e.slides.length;
          t.slideLabelMessage &&
            e.slides.forEach((i, n) => {
              const o = e.params.loop
                ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                : n;
              d(
                i,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, o + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        w = () => {
          const t = e.params.a11y;
          e.isElement ? e.el.shadowEl.append(i) : e.el.append(i);
          const s = e.el;
          t.containerRoleDescriptionMessage &&
            c(s, t.containerRoleDescriptionMessage),
            t.containerMessage && d(s, t.containerMessage);
          const n = e.wrapperEl,
            r =
              t.id ||
              n.getAttribute("id") ||
              `swiper-wrapper-${(function (e = 16) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            l =
              e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var a;
          (a = r),
            o(n).forEach((e) => {
              e.setAttribute("id", a);
            }),
            (function (e, t) {
              (e = o(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(n, l),
            S();
          let { nextEl: u, prevEl: h } = e.navigation ? e.navigation : {};
          if (
            ((u = o(u)),
            (h = o(h)),
            u && u.forEach((e) => f(e, r, t.nextSlideMessage)),
            h && h.forEach((e) => f(e, r, t.prevSlideMessage)),
            m())
          ) {
            (Array.isArray(e.pagination.el)
              ? e.pagination.el
              : [e.pagination.el]
            ).forEach((e) => {
              e.addEventListener("keydown", g);
            });
          }
          e.el.addEventListener("focus", y, !0),
            e.el.addEventListener("pointerdown", v, !0),
            e.el.addEventListener("pointerup", b, !0);
        };
      s("beforeInit", () => {
        (i = M("span", e.params.a11y.notificationClass)),
          i.setAttribute("aria-live", "assertive"),
          i.setAttribute("aria-atomic", "true");
      }),
        s("afterInit", () => {
          e.params.a11y.enabled && w();
        }),
        s(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && S();
          }
        ),
        s("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { nextEl: t, prevEl: s } = e.navigation;
              s && (e.isBeginning ? (u(s), l(s)) : (h(s), r(s))),
                t && (e.isEnd ? (u(t), l(t)) : (h(t), r(t)));
            })();
        }),
        s("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              p() &&
                e.pagination.bullets.forEach((s) => {
                  e.params.pagination.clickable &&
                    (r(s),
                    e.params.pagination.renderBullet ||
                      (a(s, "button"),
                      d(
                        s,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          z(s) + 1
                        )
                      ))),
                    s.matches(be(e.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current");
                });
            })();
        }),
        s("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              i && i.remove();
              let { nextEl: t, prevEl: s } = e.navigation ? e.navigation : {};
              (t = o(t)),
                (s = o(s)),
                t && t.forEach((e) => e.removeEventListener("keydown", g)),
                s && s.forEach((e) => e.removeEventListener("keydown", g)),
                m() &&
                  (Array.isArray(e.pagination.el)
                    ? e.pagination.el
                    : [e.pagination.el]
                  ).forEach((e) => {
                    e.removeEventListener("keydown", g);
                  });
              e.el.removeEventListener("focus", y, !0),
                e.el.removeEventListener("pointerdown", v, !0),
                e.el.removeEventListener("pointerup", b, !0);
            })();
        });
    }
    let we, Ce;
    Ce = document.querySelector(".slider__btn-next");
    let Te,
      xe = 0;
    function Ee() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      Ee(),
        (Te = document.querySelectorAll(".swiper-slide")),
        document.querySelector(".slider") &&
          (we = new ve(".slider", {
            modules: [ye, Se],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            speed: 800,
            virtualTranslate: !0,
            loop: !0,
            pagination: { el: ".slider__pagination", clickable: !1 },
            navigation: { prevEl: ".swiper-button-prev" },
            a11y: {
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            },
            on: {},
          }));
    }),
      Ce &&
        Ce.addEventListener("click", function () {
          xe < Te.length - 1
            ? ((xe += 1), we.slideTo(xe))
            : ((xe = 0), we.slideTo(xe));
          we.slideTo(xe);
        });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class Ie {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            c(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                o = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, o);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && a(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    }
    let Le = !1;
    setTimeout(() => {
      if (Le) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var Ae = function () {
      return (
        (Ae =
          Object.assign ||
          function (e) {
            for (var t, s = 1, i = arguments.length; s < i; s++)
              for (var n in (t = arguments[s]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        Ae.apply(this, arguments)
      );
    };
    var Me = "lgAfterAppendSlide",
      Oe = "lgInit",
      ze = "lgHasVideo",
      ke = "lgContainerResize",
      Pe = "lgUpdateSlides",
      _e = "lgAfterAppendSubHtml",
      De = "lgBeforeOpen",
      $e = "lgAfterOpen",
      Ge = "lgSlideItemLoad",
      Be = "lgBeforeSlide",
      Fe = "lgAfterSlide",
      He = "lgPosterClick",
      Re = "lgDragStart",
      We = "lgDragMove",
      Xe = "lgDragEnd",
      Ne = "lgBeforeNextSlide",
      Ve = "lgBeforePrevSlide",
      qe = "lgBeforeClose",
      je = "lgAfterClose",
      Ye = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var Ze = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, s) {
          var i = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(i)
            ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
              (e.style["webkit" + i] = s),
              (e.style["moz" + i] = s),
              (e.style["ms" + i] = s),
              (e.style["o" + i] = s))
            : (e.style[i] = s);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var s = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== s.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (s) {
                s.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return Ue(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? Ue(this.selector[0])
            : Ue(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return Ue(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return Ue(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var s = this;
          return (
            this._each(function (i) {
              s._setCssVendorPrefix(i, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, s) {
          var i = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(s),
                  i.selector.addEventListener(t.split(".")[0], s);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var s = this;
          return (
            this.on(e, function () {
              s.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var s = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (i) {
                s.isEventMatched(t, i) &&
                  (e.eventListeners[i].forEach(function (e) {
                    s.selector.removeEventListener(i.split(".")[0], e);
                  }),
                  (e.eventListeners[i] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var s = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(s), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = Ue("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function Ue(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new Ze(e)
      );
    }
    var Ke = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Je(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Qe = function (e, t, s, i) {
        void 0 === s && (s = 0);
        var n = Ue(e).attr("data-lg-size") || i;
        if (n) {
          var o = n.split(",");
          if (o[1])
            for (var r = window.innerWidth, l = 0; l < o.length; l++) {
              var a = o[l];
              if (parseInt(a.split("-")[2], 10) > r) {
                n = a;
                break;
              }
              l === o.length - 1 && (n = a);
            }
          var c = n.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            h = t.width(),
            g = t.height() - s,
            p = Math.min(h, d),
            m = Math.min(g, u),
            f = Math.min(p / d, m / u);
          return { width: d * f, height: u * f };
        }
      },
      et = function (e, t, s, i, n) {
        if (n) {
          var o = Ue(e).find("img").first();
          if (o.get()) {
            var r = t.get().getBoundingClientRect(),
              l = r.width,
              a = t.height() - (s + i),
              c = o.width(),
              d = o.height(),
              u = o.style(),
              h =
                (l - c) / 2 -
                o.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                Ue(window).scrollLeft() +
                r.left,
              g =
                (a - d) / 2 -
                o.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                Ue(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (h *= -1) +
              "px, " +
              (g *= -1) +
              "px, 0) scale3d(" +
              c / n.width +
              ", " +
              d / n.height +
              ", 1)"
            );
          }
        }
      },
      tt = function (e, t, s, i, n, o) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          s +
          "; height: " +
          t +
          "; max-height:" +
          i +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (o ? 'title="' + o + '"' : "") +
          ' src="' +
          n +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      st = function (e, t, s, i, n, o) {
        var r =
            "<img " +
            s +
            " " +
            (i ? 'srcset="' + i + '"' : "") +
            "  " +
            (n ? 'sizes="' + n + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          l = "";
        o &&
          (l = ("string" == typeof o ? JSON.parse(o) : o).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (s) {
                t += " " + s + '="' + e[s] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + l + r;
      },
      it = function (e) {
        for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
          var o = e[n].split(" ");
          "" === o[0] && o.splice(0, 1), s.push(o[0]), t.push(o[1]);
        }
        for (var r = window.innerWidth, l = 0; l < t.length; l++)
          if (parseInt(t[l], 10) > r) {
            i = s[l];
            break;
          }
        return i;
      },
      nt = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      ot = function (e, t, s, i, n) {
        return (
          '<div class="lg-video-cont ' +
          (n && n.youtube
            ? "lg-has-youtube"
            : n && n.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          s +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          i +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          i +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      rt = function (e) {
        var t = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        return [].filter.call(t, function (e) {
          var t = window.getComputedStyle(e);
          return "none" !== t.display && "hidden" !== t.visibility;
        });
      },
      lt = function (e, t, s, i) {
        var n = [],
          o = (function () {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
              e += arguments[t].length;
            var i = Array(e),
              n = 0;
            for (t = 0; t < s; t++)
              for (var o = arguments[t], r = 0, l = o.length; r < l; r++, n++)
                i[n] = o[r];
            return i;
          })(Ke, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, r = 0; r < e.attributes.length; r++) {
              var l = e.attributes[r];
              if (l.specified) {
                var a = Je(l.name),
                  c = "";
                o.indexOf(a) > -1 && (c = a), c && (t[c] = l.value);
              }
            }
            var d = Ue(e),
              u = d.find("img").first().attr("alt"),
              h = d.attr("title"),
              g = i ? d.attr(i) : d.find("img").first().attr("src");
            (t.thumb = g),
              s && !t.subHtml && (t.subHtml = h || u || ""),
              (t.alt = u || h || ""),
              n.push(t);
          }),
          n
        );
      },
      at = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      ct = function (e, t, s) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (s + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var i = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          n = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          o = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return i
          ? { youtube: i }
          : n
          ? { vimeo: n }
          : o
          ? { wistia: o }
          : void 0;
      },
      dt = 0,
      ut = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (dt++,
            (this.lgId = dt),
            (this.el = e),
            (this.LGel = Ue(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = Ae(Ae({}, Ye), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : at())
            ) {
              var t = Ae(
                Ae({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = Ae(Ae({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(Oe, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var i = s.items[t],
                    n = Ue(i),
                    o = Ze.generateUUID();
                  n.attr("data-lg-id", o).on(
                    "click.lgcustom-item-" + o,
                    function (s) {
                      s.preventDefault();
                      var n = e.settings.index || t;
                      e.openGallery(n, i);
                    }
                  );
                },
                s = this,
                i = 0;
              i < this.items.length;
              i++
            )
              t(i);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, Ue));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return Ue(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return Ue("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                s = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var i = "";
              this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
              var n = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                o = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                r =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                l =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                a = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                c =
                  '\n        <div class="' +
                  r +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  n +
                  " " +
                  o +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  i +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  a +
                  "\n                    " +
                  l +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              Ue(this.settings.container).append(c),
                document.body !== this.settings.container &&
                  Ue(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                Ue(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                s = t.top,
                i = t.bottom;
              if (
                ((this.currentImageSize = Qe(
                  this.items[this.index],
                  this.outer,
                  s + i,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(ke);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var s = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var s = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var i = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === s && ((i = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                this.loadContent(i, !0),
                this.getSlideItem(i).addClass("lg-current"),
                (this.index = i),
                this.updateCurrentCounter(i),
                this.LGel.trigger(Pe);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = Ue(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return lt(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (e.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (e.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                Ue("body").style().paddingRight
              );
              var e = document.documentElement.getBoundingClientRect(),
                t = window.innerWidth - e.width;
              Ue(document.body).css(
                "padding-right",
                t + this.bodyPaddingRight + "px"
              ),
                Ue(document.body).addClass("lg-overlay-open");
            }
          }),
          (e.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (Ue(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px"
              ),
              Ue(document.body).removeClass("lg-overlay-open"));
          }),
          (e.prototype.openGallery = function (e, t) {
            var s = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var i = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = i;
              var n = "";
              i.forEach(function (e) {
                n = n + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(n),
                this.addHtml(e);
              var o = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var r = this.mediaContainerPosition,
                l = r.top,
                a = r.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(l, a);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Qe(
                  t,
                  this.outer,
                  l + a,
                  c && this.settings.videoMaxSize
                )),
                (o = et(t, this.outer, l, a, this.currentImageSize))),
                (this.zoomFromOrigin && o) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(De),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = Ue(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && o) {
                    var t = s.getSlideItem(e);
                    t.css("transform", o),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms"
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      s.settings.trapFocus &&
                        document.body === s.settings.container &&
                        s.trapFocus();
                    }, s.settings.backdropDuration + 50),
                    (s.zoomFromOrigin && o) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(e, !1, !1, !1),
                    s.LGel.trigger($e);
                }),
                document.body === this.settings.container &&
                  Ue("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              s =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              i = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (i ? i.clientHeight : 0) + s };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    }
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, s;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (s = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !s)
            )
              if (t) {
                var i = t.substring(0, 1);
                ("." !== i && "#" !== i) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? Ue(this.items).eq(e).find(t).first().html()
                      : Ue(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var n = Ue(this.getSlideItemId(e));
              s
                ? n.load(s)
                : n.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(_e, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
              this.loadContent(e - s, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, s) {
            var i;
            if ((this.settings.dynamic || (i = Ue(this.items).eq(t)), i)) {
              var n = void 0;
              if (
                !(n = this.settings.exThumbImage
                  ? i.attr(this.settings.exThumbImage)
                  : i.find("img").first().attr("src"))
              )
                return "";
              var o =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                n +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                o
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, s) {
            var i = this.galleryItems[s],
              n = i.alt,
              o = i.srcset,
              r = i.sizes,
              l = i.sources,
              a = n ? 'alt="' + n + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, s, a)
                  : st(s, e, a, o, r, l)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
            var n = e.find(".lg-object").first();
            nt(n.get()) || t
              ? s()
              : (n.on("load.lg error.lg", function () {
                  s && s();
                }),
                n.on("error.lg", function () {
                  i && i();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, s, i, n, o) {
            var r = this;
            this.onSlideObjectLoad(
              e,
              o,
              function () {
                r.triggerSlideItemLoad(e, t, s, i, n);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
            var o = this,
              r = this.galleryItems[t],
              l = n && "video" === this.getSlideType(r) && !r.poster ? i : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                o.LGel.trigger(Ge, {
                  index: t,
                  delay: s || 0,
                  isFirstSlide: n,
                });
            }, l);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, s) {
              (e.__slideVideoInfo = ct(e.src, !!e.video, s)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var s = this,
              i = this.galleryItems[e],
              n = Ue(this.getSlideItemId(e)),
              o = i.poster,
              r = i.srcset,
              l = i.sizes,
              a = i.sources,
              c = i.src,
              d = i.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (i.responsive) {
              var h = i.responsive.split(",");
              c = it(h) || c;
            }
            var g = i.__slideVideoInfo,
              p = "",
              m = !!i.iframe,
              f = !this.lGalleryOn,
              v = 0;
            if (
              (f &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !n.hasClass("lg-loaded"))
            ) {
              if (g) {
                var b = this.mediaContainerPosition,
                  y = b.top,
                  S = b.bottom,
                  w = Qe(
                    this.items[e],
                    this.outer,
                    y + S,
                    g && this.settings.videoMaxSize
                  );
                p = this.getVideoContStyle(w);
              }
              if (m) {
                var C = tt(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  i.iframeTitle
                );
                n.prepend(C);
              } else if (o) {
                var T = "";
                f &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (T = this.getDummyImageContent(n, e, ""));
                C = ot(o, T || "", p, this.settings.strings.playVideo, g);
                n.prepend(C);
              } else if (g) {
                C = '<div class="lg-video-cont " style="' + p + '"></div>';
                n.prepend(C);
              } else if ((this.setImgMarkup(c, n, e), r || a)) {
                var x = n.find(".lg-object");
                this.initPictureFill(x);
              }
              (o || g) &&
                this.LGel.trigger(ze, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!o,
                }),
                this.LGel.trigger(Me, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var E = 0;
            v && !Ue(document.body).hasClass("lg-from-hash") && (E = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  n.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                n.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === s.getSlideType(i)) {
                      var t = i.alt,
                        d = t ? 'alt="' + t + '"' : "";
                      if (
                        (n
                          .find(".lg-img-wrap")
                          .append(st(e, c, d, r, l, i.sources)),
                        r || a)
                      ) {
                        var u = n.find(".lg-object");
                        s.initPictureFill(u);
                      }
                    }
                    ("image" === s.getSlideType(i) ||
                      ("video" === s.getSlideType(i) && o)) &&
                      (s.onLgObjectLoad(n, e, v, E, !0, !1),
                      s.onSlideObjectLoad(
                        n,
                        !(!g || !g.html5 || o),
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, E);
                        },
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, E);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              n.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(i) || o)) ||
                this.onLgObjectLoad(n, e, v, E, f, !(!g || !g.html5 || o)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !n.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  n.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (n.hasClass("lg-complete_")
                  ? this.preload(e)
                  : n
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
            var i = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                i.outer.removeClass("lg-first-slide-loading"),
                (i.isDummyImageRemoved = !0),
                i.preload(e);
            }, s + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
            var i = this;
            void 0 === s && (s = 0);
            var n = [],
              o = Math.max(s, 3);
            o = Math.min(o, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  n.push("lg-item-" + i.lgId + "-" + t);
                }),
                n
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var l = e; l > e - o / 2 && l >= 0; l--)
                n.push("lg-item-" + this.lgId + "-" + l);
              var a = n.length;
              for (l = 0; l < o - a; l++)
                n.push("lg-item-" + this.lgId + "-" + (e + l + 1));
            } else {
              for (
                l = e;
                l <= this.galleryItems.length - 1 && l < e + o / 2;
                l++
              )
                n.push("lg-item-" + this.lgId + "-" + l);
              for (a = n.length, l = 0; l < o - a; l++)
                n.push("lg-item-" + this.lgId + "-" + (e - l - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t),
              n
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var s = this,
              i = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              i.forEach(function (e) {
                -1 === s.currentItemsInDom.indexOf(e) &&
                  s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === i.indexOf(e) && Ue("#" + e).remove();
              }),
              i
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  s.attr("href", t.downloadUrl || t.src),
                  t.download && s.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, s) {
            var i = this;
            this.lGalleryOn && s.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  i.outer.addClass("lg-no-trans"),
                    i.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        s.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        s.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      i.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        i.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (e.prototype.slide = function (e, t, s, i) {
            var n = this,
              o = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, o)),
              !this.lGalleryOn || o !== e)
            ) {
              var r = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var l = this.getSlideItem(e),
                  a = this.getSlideItem(o),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    h = u.top,
                    g = u.bottom,
                    p = Qe(
                      this.items[e],
                      this.outer,
                      h + g,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, p);
                }
                if (
                  (this.LGel.trigger(Be, {
                    prevIndex: o,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!s,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  i || (e < o ? (i = "prev") : e > o && (i = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var m = void 0,
                    f = void 0;
                  r > 2
                    ? ((m = e - 1),
                      (f = e + 1),
                      ((0 === e && o === r - 1) || (e === r - 1 && 0 === o)) &&
                        ((f = 0), (m = r - 1)))
                    : ((m = 0), (f = 1)),
                    "prev" === i
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(m).addClass("lg-prev-slide"),
                    l.addClass("lg-current");
                } else this.makeSlideAnimation(i, l, a);
                this.lGalleryOn
                  ? setTimeout(function () {
                      n.loadContent(e, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo &&
                          n.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (n.lgBusy = !1),
                      a.removeClass("lg-slide-progress"),
                      n.LGel.trigger(Fe, {
                        prevIndex: o,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay));
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, s) {
            var i = t.pageX - e.pageX,
              n = t.pageY - e.pageY,
              o = !1;
            if (
              (this.swipeDirection
                ? (o = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (o = !0))
                : Math.abs(n) > 15 &&
                  ((this.swipeDirection = "vertical"), (o = !0)),
              o)
            ) {
              var r = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == s || s.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(r, i, 0);
                var l = r.get().offsetWidth,
                  a = (15 * l) / 100 - Math.abs((10 * i) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -l + i - a,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    l + i + a,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == s || s.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var c = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                this.setTranslate(r, 0, n, d, d),
                  Math.abs(n) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, s) {
            var i,
              n = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                n.$container.removeClass("lg-dragging-vertical"),
                  n.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var o = !0;
                if ("horizontal" === n.swipeDirection) {
                  i = e.pageX - t.pageX;
                  var r = Math.abs(e.pageX - t.pageX);
                  i < 0 && r > n.settings.swipeThreshold
                    ? (n.goToNextSlide(!0), (o = !1))
                    : i > 0 &&
                      r > n.settings.swipeThreshold &&
                      (n.goToPrevSlide(!0), (o = !1));
                } else if ("vertical" === n.swipeDirection) {
                  if (
                    ((i = Math.abs(e.pageY - t.pageY)),
                    n.settings.closable && n.settings.swipeToClose && i > 100)
                  )
                    return void n.closeGallery();
                  n.$backdrop.css("opacity", 1);
                }
                if (
                  (n.outer.find(".lg-item").removeAttr("style"),
                  o && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var l = Ue(s.target);
                  n.isPosterElement(l) && n.LGel.trigger(He);
                }
                n.swipeDirection = void 0;
              }),
              setTimeout(function () {
                n.outer.hasClass("lg-dragging") ||
                  "lg-slide" === n.settings.mode ||
                  n.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var i = e.getSlideItem(e.index);
                (!Ue(s.target).hasClass("lg-item") &&
                  !i.get().contains(s.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== s.touches.length ||
                  ((n = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: s.touches[0].pageX,
                    pageY: s.touches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (o) {
                n &&
                  "swipe" === e.touchAction &&
                  1 === o.touches.length &&
                  ((s = {
                    pageX: o.touches[0].pageX,
                    pageY: o.touches[0].pageY,
                  }),
                  e.touchMove(t, s, o),
                  (i = !0));
              }),
              this.$inner.on("touchend.lg", function (o) {
                if ("swipe" === e.touchAction) {
                  if (i) (i = !1), e.touchEnd(s, t, o);
                  else if (n) {
                    var r = Ue(o.target);
                    e.isPosterElement(r) && e.LGel.trigger(He);
                  }
                  (e.touchAction = void 0), (n = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (Ue(s.target).hasClass("lg-item") ||
                  n.get().contains(s.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (s.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: s.pageX, pageY: s.pageY }),
                      (i = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(Re))));
              }),
              Ue(window).on("mousemove.lg.global" + this.lgId, function (o) {
                i &&
                  e.lgOpened &&
                  ((n = !0),
                  (s = { pageX: o.pageX, pageY: o.pageY }),
                  e.touchMove(t, s),
                  e.LGel.trigger(We));
              }),
              Ue(window).on("mouseup.lg.global" + this.lgId, function (o) {
                if (e.lgOpened) {
                  var r = Ue(o.target);
                  n
                    ? ((n = !1), e.touchEnd(s, t, o), e.LGel.trigger(Xe))
                    : e.isPosterElement(r) && e.LGel.trigger(He),
                    i &&
                      ((i = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(Ue(t.target)) &&
                e.LGel.trigger(He);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Ne, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : s
                  ? ((this.index = 0),
                    this.LGel.trigger(Ne, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Ve, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : s
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Ve, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            Ue(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                s = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? s.attr("disabled", "disabled").addClass("disabled")
                : s.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, s, i, n) {
            void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  s +
                  "px, 0px) scale3d(" +
                  i +
                  ", " +
                  n +
                  ", 1)"
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (s) {
              if (s.deltaY && !(e.galleryItems.length < 2)) {
                s.preventDefault();
                var i = new Date().getTime();
                i - t < 1e3 ||
                  ((t = i),
                  s.deltaY > 0
                    ? e.goToNextSlide()
                    : s.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = Ue(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.trapFocus = function () {
            var e = this;
            this.$container.get().focus({ preventScroll: !0 }),
              Ue(window).on("keydown.lg.global" + this.lgId, function (t) {
                if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                  var s = rt(e.$container.get()),
                    i = s[0],
                    n = s[s.length - 1];
                  t.shiftKey
                    ? document.activeElement === i &&
                      (n.focus(), t.preventDefault())
                    : document.activeElement === n &&
                      (i.focus(), t.preventDefault());
                }
              });
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var i = Ue(s.target);
                    t = !!e.isSlideElement(i);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var i = Ue(s.target);
                    e.isSlideElement(i) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(qe),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                Ue(window).scrollTop(this.prevScrollTop);
            var s,
              i = this.items[this.index];
            if (this.zoomFromOrigin && i) {
              var n = this.mediaContainerPosition,
                o = n.top,
                r = n.bottom,
                l = this.galleryItems[this.index],
                a = l.__slideVideoInfo,
                c = l.poster,
                d = Qe(
                  i,
                  this.outer,
                  o + r,
                  a && c && this.settings.videoMaxSize
                );
              s = et(i, this.outer, o, r, d);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              Ue("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  s &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.resetScrollBar(),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms"
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(je, { instance: t }),
                  t.$container.get() && t.$container.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(Pe);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroyGallery = function () {
            this.destroyModules(!0),
              this.settings.dynamic || this.invalidateItems(),
              Ue(window).off(".lg.global" + this.lgId),
              this.LGel.off(".lg"),
              this.$container.remove();
          }),
          (e.prototype.destroy = function () {
            var e = this.closeGallery(!0);
            return (
              e
                ? setTimeout(this.destroyGallery.bind(this), e)
                : this.destroyGallery(),
              e
            );
          }),
          e
        );
      })();
    const ht = function (e, t) {
      return new ut(e, t);
    };
    var gt = s(205),
      pt = s(578),
      mt = s(571),
      ft = s(797);
    const vt = document.querySelectorAll("[data-gallery]");
    let bt, yt;
    vt.length &&
      vt.forEach((e) => {
        ht(e, {
          plugins: [pt, ft, mt, gt],
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        });
      }),
      document.addEventListener("click", function (e) {
        (bt = e.target),
          (function () {
            if (bt.closest(".spollers__title"))
              if (
                ((yt = bt.parentElement),
                yt.classList.contains("spollers__item") &&
                  !yt.classList.contains("show-line"))
              ) {
                document.querySelectorAll(".show-line").forEach((e) => {
                  e.classList.contains("show-line") &&
                    e.classList.remove("show-line");
                }),
                  yt.classList.add("show-line");
              } else yt.classList.remove("show-line");
          })();
      }),
      (window.FLS = !1),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? r(e)
                  : l(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && o(s);
          let i = d(e, "spollers");
          function o(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    r(e),
                    e.addEventListener("click", l))
                  : (e.classList.remove("_spoller-init"),
                    r(e, !1),
                    e.removeEventListener("click", l));
            });
          }
          function r(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function l(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                o = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (o && !s.classList.contains("_spoller-active") && a(i),
                s.classList.toggle("_spoller-active"),
                n(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function a(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              }),
                o(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              p.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && p.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                p.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? p.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                o = new FormData(t);
              t.classList.add("_sending");
              const r = await fetch(e, { method: n, body: o });
              if (r.ok) {
                await r.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && u(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            p.formClean(e),
            a(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (g.selectModule = new h({})),
      new Ie({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                n = !!s.hasAttribute("data-goto-header"),
                o = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              u(i, n, o), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              let e = s.id;
              document.querySelector("[data-goto]._navigator-active");
              const i = document.querySelector(`[data-goto="#${e}"]`);
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        Le = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let n,
          o = 0;
        document.addEventListener("windowScroll", function (r) {
          const l = window.scrollY;
          clearTimeout(n),
            l >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (l > o
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (n = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (o = l <= 0 ? 0 : l);
        });
      })();
  })();
})();
