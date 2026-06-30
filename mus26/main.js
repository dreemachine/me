// ============================================================
// MAIN.JS — Populates content from content.js, runs animations.
// Edit text in content.js, not here.
// ============================================================

(function () {
  "use strict";

  // ── HELPERS ─────────────────────────────────────────────────
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text != null) el.textContent = text;
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function buildArtistCard(artist) {
    var hasImage = artist.image;
    var card = document.createElement("div");
    card.className = "artist-card reveal-el" + (hasImage ? " artist-card--has-image" : "");

    var heroHTML = hasImage
      ? '<div class="artist-hero"><img class="artist-hero-img" src="' + artist.image + '" alt="' + artist.name + '" loading="lazy" /></div>'
      : "";

    var formerlyHTML = artist.formerly
      ? '<div class="artist-formerly">' + artist.formerly + "</div>"
      : "";

    var linksHTML = "";
    if (artist.links && artist.links.length) {
      linksHTML = '<div class="artist-links">' +
        artist.links.map(function (l) {
          return '<a class="artist-link" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + "</a>";
        }).join("") +
      "</div>";
    }

    var galleryHTML = "";
    if (artist.gallery && artist.gallery.length) {
      galleryHTML = '<div class="artist-gallery">' +
        artist.gallery.map(function (src) {
          return '<img class="artist-gallery-img" src="' + src + '" alt="" loading="lazy" />';
        }).join("") +
      "</div>";
    }

    var setHTML = "";
    var embedSrc = artist.featuredSet && toEmbedUrl(artist.featuredSet.url);
    if (embedSrc) {
      var setTitle = (artist.featuredSet && artist.featuredSet.title) || "";
      setHTML =
        '<div class="artist-set">' +
          '<div class="artist-set-label">Featured Set</div>' +
          (setTitle ? '<div class="artist-set-title">' + setTitle + "</div>" : "") +
          '<div class="embed-wrap"><iframe src="' + embedSrc + '" allow="autoplay; encrypted-media" allowfullscreen title="' + setTitle + '"></iframe></div>' +
        "</div>";
    }

    var mediaHTML = (galleryHTML || setHTML)
      ? '<div class="artist-media">' + galleryHTML + setHTML + "</div>"
      : "";

    card.innerHTML =
      heroHTML +
      '<div class="artist-card-meta">' +
        '<div class="artist-name">'   + artist.name   + "</div>" +
        formerlyHTML +
        '<div class="artist-slot">'   + artist.slot   + "</div>" +
        '<div class="artist-origin">' + artist.origin + "</div>" +
        '<div class="artist-genre">'  + artist.genre  + "</div>" +
        linksHTML +
      "</div>" +
      '<div class="artist-card-body">' +
        artist.body.map(function (p) { return "<p>" + parseTooltips(p) + "</p>"; }).join("") +
        '<div class="artist-relevance">' + parseTooltips(artist.relevance) + "</div>" +
      "</div>" +
      mediaHTML;

    return card;
  }

  function toEmbedUrl(url) {
    if (!url) return null;
    var ytFull  = url.match(/[?&]v=([^&]+)/);
    if (ytFull)  return "https://www.youtube.com/embed/" + ytFull[1]  + "?rel=0";
    var ytShort = url.match(/youtu\.be\/([^?&]+)/);
    if (ytShort) return "https://www.youtube.com/embed/" + ytShort[1] + "?rel=0";
    return url; // SoundCloud/Mixcloud embed URL passed through as-is
  }

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Replace {{term}} or {{term|custom definition}} with tooltip spans.
  // Falls back to the glossary for definitions; renders plain text if nothing found.
  function parseTooltips(text) {
    if (!text || text.indexOf("{{") === -1) return text;
    return text.replace(/\{\{([^|}]+?)(?:\|([^}]+?))?\}\}/g, function (_, term, inlineDef) {
      var def = inlineDef
        || (CONTENT.glossary && CONTENT.glossary[term.trim()])
        || "";
      if (!def) return escapeHTML(term.trim());
      return '<span class="tt" tabindex="0">'
        + escapeHTML(term.trim())
        + '<span class="tt-box" role="tooltip">' + escapeHTML(def) + "</span>"
        + "</span>";
    });
  }

  function paragraphs(arr) {
    return arr.map(function (p) { return "<p>" + parseTooltips(p) + "</p>"; }).join("");
  }

  // ── POPULATE DOM FROM CONTENT.JS ────────────────────────────
  function populateContent() {
    var C = CONTENT;

    // NAV
    var navList = document.getElementById("nav-links");
    C.nav.links.forEach(function (link) {
      var li = document.createElement("li");
      var a  = document.createElement("a");
      a.href        = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      navList.appendChild(li);
    });

    // HERO
    setText("hero-eyebrow",  C.hero.eyebrow);
    setText("hero-title",    C.hero.title);
    setText("hero-subtitle", C.hero.subtitle);
    setText("hero-tagline",  C.hero.tagline);
    setText("scroll-cue",    C.hero.scrollCue);

    var detailsEl = document.getElementById("hero-details");
    C.hero.details.forEach(function (d) {
      var row   = document.createElement("div");
      row.className = "hero-detail-row";
      var label = document.createElement("span");
      label.className   = "hero-detail-label";
      label.textContent = d.label;
      var value = document.createElement("span");
      value.className   = "hero-detail-value";
      value.textContent = d.value;
      row.appendChild(label);
      row.appendChild(value);
      detailsEl.appendChild(row);
    });

    // THEME
    setText("theme-label",      C.theme.sectionLabel);
    setText("theme-heading",    C.theme.heading);
    setText("theme-subheading", C.theme.subheading);
    setHTML("theme-body",       paragraphs(C.theme.body));
    setText("goals-heading",    C.theme.goals.heading);
    var goalsList = document.getElementById("goals-list");
    C.theme.goals.items.forEach(function (item) {
      var li = document.createElement("li");
      li.innerHTML = parseTooltips(item);
      goalsList.appendChild(li);
    });

    // AUDIENCE
    setText("audience-label",   C.audience.sectionLabel);
    setText("audience-heading", C.audience.heading);
    setHTML("audience-body",    paragraphs(C.audience.body));
    setText("audience-note",    C.audience.note);

    // VENUE
    setText("venue-label",   C.venue.sectionLabel);
    setText("venue-heading", C.venue.heading);
    var venueGrid = document.getElementById("venue-grid");
    C.venue.locations.forEach(function (loc) {
      var card = document.createElement("div");
      card.className = "venue-card reveal-el";
      card.innerHTML =
        '<div class="venue-card-role">'  + loc.role        + "</div>" +
        '<div class="venue-card-name">'  + loc.name        + "</div>" +
        '<div class="venue-card-city">'  + loc.city        + "</div>" +
        '<div class="venue-card-desc">'  + loc.description + "</div>" +
        '<div class="venue-meta">' +
          '<div class="venue-meta-row">' +
            '<span class="venue-meta-key">Capacity</span>' +
            '<span class="venue-meta-val">' + loc.capacity + "</span>" +
          "</div>" +
          '<div class="venue-meta-row">' +
            '<span class="venue-meta-key">Logistics</span>' +
            '<span class="venue-meta-val">' + loc.logistics + "</span>" +
          "</div>" +
        "</div>";
      venueGrid.appendChild(card);
    });

    // ARTISTS — header text
    setText("artists-label",   C.artists.sectionLabel);
    setText("artists-heading", C.artists.heading);
    setText("artists-intro",   C.artists.intro);

    // Group artists by venueIndex
    var artistsByVenue = {};
    C.artists.list.forEach(function (artist) {
      var vi = typeof artist.venueIndex === "number" ? artist.venueIndex : 0;
      if (!artistsByVenue[vi]) artistsByVenue[vi] = [];
      artistsByVenue[vi].push(artist);
    });

    // Inject venue banners + artist groups immediately after the #artists header section
    var artistsSection = document.getElementById("artists");
    var insertPoint = artistsSection;

    C.venue.locations.forEach(function (loc, vi) {
      // Venue banner
      var banner = document.createElement("div");
      banner.className = "venue-banner";
      banner.setAttribute("aria-label", loc.name);
      banner.innerHTML =
        (loc.bannerImage
          ? '<figure class="vb-bg"><img class="vb-img" src="' + loc.bannerImage + '" alt="" loading="lazy" /></figure>'
          : '<div class="vb-bg"></div>') +
        '<div class="vb-inner">' +
          '<p class="vb-role">'  + loc.role + "</p>" +
          '<h3 class="vb-name">' + loc.name + "</h3>" +
          '<p class="vb-city">'  + loc.city + "</p>" +
        "</div>";
      insertPoint.after(banner);
      insertPoint = banner;

      // Artist group
      var group   = document.createElement("div");
      group.className = "artists-group";
      var inner   = document.createElement("div");
      inner.className = "artists-inner";
      (artistsByVenue[vi] || []).forEach(function (artist) {
        inner.appendChild(buildArtistCard(artist));
      });
      group.appendChild(inner);
      insertPoint.after(group);
      insertPoint = group;
    });

    // EVENT DESIGN
    setText("event-label",   C.eventDesign.sectionLabel);
    setText("event-heading", C.eventDesign.heading);
    setHTML("event-body",    paragraphs(C.eventDesign.body));
    var elementsGrid = document.getElementById("elements-grid");
    C.eventDesign.elements.forEach(function (item) {
      var card = document.createElement("div");
      card.className = "element-card reveal-el";
      card.innerHTML =
        '<div class="element-card-name">' + item.name        + "</div>" +
        '<div class="element-card-desc">' + item.description + "</div>";
      elementsGrid.appendChild(card);
    });

    // CHALLENGES
    setText("challenges-label",   C.challenges.sectionLabel);
    setText("challenges-heading", C.challenges.heading);
    setText("challenges-intro",   C.challenges.intro);
    var challengesList = document.getElementById("challenges-list");
    C.challenges.items.forEach(function (item) {
      var el = document.createElement("div");
      el.className = "challenge-item reveal-el";
      el.innerHTML =
        '<div class="challenge-title">'    + item.challenge                  + "</div>" +
        '<div class="challenge-response">' + parseTooltips(item.response)    + "</div>";
      challengesList.appendChild(el);
    });

    // PUBLICITY
    setText("publicity-label",   C.publicity.sectionLabel);
    setText("publicity-heading", C.publicity.heading);
    setHTML("publicity-body",    paragraphs(C.publicity.body));
    var principlesList = document.getElementById("principles-list");
    C.publicity.principles.forEach(function (p) {
      var li = document.createElement("li");
      li.innerHTML = parseTooltips(p);
      principlesList.appendChild(li);
    });

    // QUOTE PANELS
    document.querySelectorAll(".quote-panel").forEach(function (panel) {
      var idx   = parseInt(panel.getAttribute("data-quote-index"), 10);
      var quote = C.quotes[idx];
      if (!quote) return;
      panel.querySelector(".qp-text").textContent = quote.text;
      panel.querySelector(".qp-attr").textContent = "— " + quote.attribution;
    });

    // FOOTER
    setText("footer-course", C.footer.course);
    setText("footer-uni",    C.footer.university + " · " + C.footer.year);
    setText("footer-note",   C.footer.note);
  }

  // ── GSAP ANIMATIONS ─────────────────────────────────────────
  function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance — fires once on load
    var heroTl = gsap.timeline({ delay: 0.15 });
    heroTl
      .to(".eyebrow",       { opacity: 1, duration: 0.55, ease: "power2.out" })
      .to(".hero-title",    { opacity: 1, duration: 0.75, ease: "power3.out" }, "-=0.2")
      .to(".hero-subtitle", { opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.4")
      .to(".hero-tagline",  { opacity: 1, duration: 0.55, ease: "power2.out" }, "-=0.25")
      .to(".hero-details",  { opacity: 1, duration: 0.5,  ease: "power2.out" }, "-=0.2")
      .to(".scroll-cue",    { opacity: 1, duration: 0.7,  ease: "power1.out" }, "+=0.5");

    // Decorative ring parallax on scroll
    gsap.to(".deco-ring--1", {
      yPercent: -28, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".deco-ring--2", {
      yPercent: -50, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".deco-ring--3", {
      yPercent: -80, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
    });

    // Section labels, headings, subheadings, intros
    document.querySelectorAll(
      ".section-label, .section-heading, .section-subheading, .section-intro"
    ).forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });

    // Body paragraphs
    document.querySelectorAll(".section-body p").forEach(function (p) {
      gsap.fromTo(p,
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0,
          duration: 0.55,
          ease: "power1.out",
          scrollTrigger: { trigger: p, start: "top 92%", toggleActions: "play none none none" },
        }
      );
    });

    // Pull quote slide in from left
    gsap.fromTo(".pull-quote",
      { opacity: 0, x: -28 },
      {
        opacity: 1, x: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".pull-quote", start: "top 88%", toggleActions: "play none none none" },
      }
    );

    // Goals block
    gsap.fromTo(".goals-block",
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".goals-block", start: "top 86%", toggleActions: "play none none none" },
      }
    );

    // Goals list items stagger
    gsap.fromTo(".goals-list li",
      { opacity: 0, x: -18 },
      {
        opacity: 1, x: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".goals-list", start: "top 88%", toggleActions: "play none none none" },
      }
    );

    // Generic .reveal-el cards (venue, artists, elements, challenges)
    document.querySelectorAll(".reveal-el").forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    });

    // Artist body paragraphs and relevance notes
    document.querySelectorAll(".artist-card-body p, .artist-relevance").forEach(function (p) {
      gsap.fromTo(p,
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: { trigger: p, start: "top 92%", toggleActions: "play none none none" },
        }
      );
    });

    // Principles list stagger
    gsap.fromTo(".principles-list li",
      { opacity: 0, x: -18 },
      {
        opacity: 1, x: 0,
        duration: 0.45,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".principles-list", start: "top 88%", toggleActions: "play none none none" },
      }
    );

    // Venue banners — same pin/scrub pattern as quote panels
    document.querySelectorAll(".venue-banner").forEach(function (banner) {
      var inner = banner.querySelector(".vb-inner");
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: banner,
          start: "top top",
          end:   "+=65%",
          pin:   true,
          scrub: 0.7,
        },
      });
      tl.fromTo(inner,
        { opacity: 0, y: 52 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0
      );
      tl.to(banner, { opacity: 0, duration: 0.35, ease: "power1.in" }, 0.65);
    });

    // Quote panels — pin, scrub quote in, then fade panel out to reveal next section
    document.querySelectorAll(".quote-panel").forEach(function (panel) {
      var inner = panel.querySelector(".quote-panel-inner");

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end:   "+=65%",   // pin for 65% of a viewport-height worth of scroll
          pin:   true,
          scrub: 0.7,
        },
      });

      // 0–30%  of scroll: inner content fades up into view
      tl.fromTo(inner,
        { opacity: 0, y: 52 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0
      );
      // 65–100% of scroll: entire panel fades to transparent, revealing next section
      tl.to(panel,
        { opacity: 0, duration: 0.35, ease: "power1.in" },
        0.65
      );
    });

    // Show nav after scrolling past the hero eyebrow
    ScrollTrigger.create({
      start: "180px top",
      onEnter:     function () { document.getElementById("site-nav").classList.add("is-visible"); },
      onLeaveBack: function () { document.getElementById("site-nav").classList.remove("is-visible"); },
    });

    // Active nav link highlight
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(function (section) {
      ScrollTrigger.create({
        trigger: section,
        start: "top 55%",
        end:   "bottom 55%",
        onEnter:     function () { updateNav(section.id); },
        onEnterBack: function () { updateNav(section.id); },
      });
    });

    function updateNav(activeId) {
      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + activeId);
      });
    }
  }

  // ── TOOLTIP EDGE DETECTION ──────────────────────────────────
  // Runs after populateContent() so all .tt elements exist in the DOM.
  function initTooltips() {
    document.querySelectorAll(".tt").forEach(function (trigger) {
      trigger.addEventListener("mouseenter", function () {
        var box = trigger.querySelector(".tt-box");
        if (!box) return;
        // Reset to default centered position
        box.style.left      = "";
        box.style.right     = "";
        box.style.transform = "translateX(-50%)";
        // Reposition if it would overflow the viewport
        var r = box.getBoundingClientRect();
        if (r.right > window.innerWidth - 12) {
          box.style.left      = "auto";
          box.style.right     = "0";
          box.style.transform = "none";
          var arrow = box.style;  // move arrow too via class
          trigger.classList.add("tt--right");
        } else if (r.left < 12) {
          box.style.left      = "0";
          box.style.right     = "auto";
          box.style.transform = "none";
          trigger.classList.add("tt--left");
        }
      });
      trigger.addEventListener("mouseleave", function () {
        trigger.classList.remove("tt--right", "tt--left");
      });
    });
  }

  // ── FLOATING PLAYLIST PLAYER ────────────────────────────────
  // Controls a hidden SoundCloud Widget iframe via their official API.
  // Called from window.load (not DOMContentLoaded) so the SC API script is ready.
  function initPlayer() {
    var C  = CONTENT;
    var pc = C.playlist;

    if (!pc || !pc.soundcloudUrl) return;  // not configured, stay hidden

    var playerEl  = document.getElementById("music-player");
    var headerEl  = document.getElementById("mp-header");
    var toggleEl  = headerEl.querySelector(".mp-toggle-icon");
    var titleEl   = document.getElementById("mp-title");
    var artistEl  = document.getElementById("mp-artist");
    var playBtn   = document.getElementById("mp-play");
    var prevBtn   = document.getElementById("mp-prev");
    var nextBtn   = document.getElementById("mp-next");
    var counterEl = document.getElementById("mp-counter");
    var listEl    = document.getElementById("mp-tracklist");
    var iframeEl  = document.getElementById("sc-widget");

    if (pc.label) document.getElementById("mp-label").textContent = pc.label;

    // Point the hidden iframe at the SoundCloud playlist widget URL
    iframeEl.src =
      "https://w.soundcloud.com/player/?url=" +
      encodeURIComponent(pc.soundcloudUrl) +
      "&color=%23e8d900&auto_play=false" +
      "&hide_related=true&show_comments=false" +
      "&show_user=false&show_reposts=false&show_teaser=false";

    playerEl.removeAttribute("hidden");

    if (typeof SC === "undefined") {
      titleEl.textContent = "Player unavailable";
      return;
    }

    var widget     = SC.Widget(iframeEl);
    var sounds     = [];
    var currentIdx = 0;
    var isPlaying  = false;

    function updateTrackUI(idx) {
      if (idx < 0 || idx >= sounds.length) return;
      currentIdx = idx;
      var s = sounds[idx];
      titleEl.textContent   = s.title || "—";
      artistEl.textContent  = (s.user && s.user.username) || "";
      counterEl.textContent = (idx + 1) + " / " + sounds.length;
      document.querySelectorAll(".mp-track-item").forEach(function (el, i) {
        el.classList.toggle("is-active", i === idx);
        if (i === idx) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    }

    function setPlayState(playing) {
      isPlaying = playing;
      playBtn.innerHTML = playing ? "&#9646;&#9646;" : "&#9654;";
      playBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
    }

    widget.bind(SC.Widget.Events.READY, function () {
      widget.getSounds(function (soundList) {
        sounds = soundList || [];
        if (!sounds.length) { titleEl.textContent = "No tracks found"; return; }

        sounds.forEach(function (s, i) {
          var btn = document.createElement("button");
          btn.className = "mp-track-item";
          btn.innerHTML =
            '<span class="mp-item-num">' + (i + 1) + "</span>" +
            '<span class="mp-item-info">' +
              '<span class="mp-item-title">'  + escapeHTML(s.title || "Untitled") + "</span>" +
              '<span class="mp-item-artist">' + escapeHTML((s.user && s.user.username) || "") + "</span>" +
            "</span>";
          btn.addEventListener("click", function () {
            widget.skip(i);
            if (!isPlaying) widget.play();
          });
          listEl.appendChild(btn);
        });

        updateTrackUI(0);
      });
    });

    widget.bind(SC.Widget.Events.PLAY, function () {
      setPlayState(true);
      widget.getCurrentSound(function (currentSound) {
        if (!currentSound) return;
        for (var i = 0; i < sounds.length; i++) {
          if (sounds[i].id === currentSound.id) { updateTrackUI(i); break; }
        }
      });
    });

    widget.bind(SC.Widget.Events.PAUSE,  function () { setPlayState(false); });
    widget.bind(SC.Widget.Events.FINISH, function () { setPlayState(false); });

    playBtn.addEventListener("click", function () {
      widget.isPaused(function (paused) {
        if (paused) { widget.play(); } else { widget.pause(); }
      });
    });

    prevBtn.addEventListener("click", function () { widget.prev(); });
    nextBtn.addEventListener("click", function () { widget.next(); });

    // Minimize / expand the whole player
    headerEl.addEventListener("click", function () {
      var collapsed = playerEl.classList.toggle("is-collapsed");
      headerEl.setAttribute("aria-expanded", String(!collapsed));
      toggleEl.textContent = collapsed ? "+" : "−";
    });
  }

  // ── INIT ────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    populateContent();
    initAnimations();
    initTooltips();
  });

  // initPlayer runs on load (not DOMContentLoaded) so the SC Widget API
  // script that loads after main.js is guaranteed to be available.
  window.addEventListener("load", initPlayer);

}());
