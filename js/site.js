(() => {
  "use strict";
  const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* header elevation */
  const hdr = document.getElementById("hdr");
  if (hdr) {
    const onScroll = () => hdr.classList.toggle("is-stuck", window.scrollY > 12);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
  }

  /* mobile sheet */
  const burger = document.getElementById("burger");
  const sheet = document.getElementById("sheet");
  if (burger && sheet) {
    const setOpen = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      sheet.classList.toggle("is-open", open);
      sheet.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("is-locked", open);
      burger.setAttribute("aria-label", open ? "Sulge menüü" : "Ava menüü");
    };
    burger.addEventListener("click", () =>
      setOpen(burger.getAttribute("aria-expanded") !== "true")
    );
    sheet.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        burger.focus();
      }
    });
  }

  /* header dropdown */
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menubtn");
  if (menu && menuBtn) {
    const setMenu = (open) => {
      menu.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("click", (e) => {
      if (menuBtn.getAttribute("aria-expanded") !== "true") return;
      if (!menu.contains(e.target) || e.target.closest(".menu__pop a")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* scroll reveals */
  const targets = document.querySelectorAll(".rv, .rv-s, .step");
  if (!targets.length) return;
  if (rm || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  targets.forEach((el) => io.observe(el));
})();
