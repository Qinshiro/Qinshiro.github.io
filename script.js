/* ===== Helpers ===== */
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => [...el.querySelectorAll(q)];

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

/* ===== Theme Toggle (persist) ===== */
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

function setTheme(next){
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  const icon = $("#themeToggle .icon");
  if (icon) icon.textContent = next === "light" ? "☼" : "☾";
}

function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

/* ===== Clock WIB (Asia/Jakarta) ===== */
function startClock(){
  const el = $("#clock");
  if (!el) return;

  const fmt = new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit"
  });

  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 10_000);
}

/* ===== Typewriter ===== */
function typewriter(el, phrases, speed = 38, pause = 950){
  let i = 0, j = 0, deleting = false;

  const loop = () => {
    const word = phrases[i % phrases.length];
    const next = deleting ? word.slice(0, j - 1) : word.slice(0, j + 1);
    el.textContent = next;

    j = deleting ? j - 1 : j + 1;

    let delay = deleting ? speed * 0.8 : speed;

    if (!deleting && j === word.length){
      delay = pause;
      deleting = true;
    } else if (deleting && j === 0){
      deleting = false;
      i++;
      delay = 260;
    }
    setTimeout(loop, delay);
  };

  loop();
}

/* ===== Scroll reveal ===== */
function initReveal(){
  const items = $$(".reveal");
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("visible");
    }
  }, { threshold: 0.12 });

  items.forEach(x => io.observe(x));
}

/* ===== Counters ===== */
function animateCounters(){
  const counters = $$(".stat-value[data-count]");
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      const target = Number(el.getAttribute("data-count")) || 0;

      let cur = 0;
      const dur = 900;
      const start = performance.now();

      const step = (t) => {
        const p = clamp((t - start) / dur, 0, 1);
        cur = Math.round(target * (p * (2 - p))); // easeOutQuad-ish
        el.textContent = String(cur);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    }
  }, { threshold: 0.4 });

  counters.forEach(c => io.observe(c));
}

/* ===== Skill meter fill ===== */
function fillMeters(){
  const meters = $$(".meter span");
  meters.forEach((m) => {
    const card = m.closest(".card");
    if (!card) return;
    // width already set inline; animate when visible
    const targetWidth = m.style.width;
    m.style.width = "0%";

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        m.style.width = targetWidth;
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe(card);
  });
}

/* ===== Project filter + search ===== */
function initProjectFiltering(){
  const tabs = $$(".tab");
  const search = $("#projectSearch");
  const cards = $$(".project");
  if (!cards.length) return;

  let activeFilter = "all";
  let q = "";

  const apply = () => {
    const query = q.trim().toLowerCase();
    cards.forEach(card => {
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const hay = `${title} ${tags}`;

      const filterOk = activeFilter === "all" || tags.includes(activeFilter);
      const searchOk = !query || hay.includes(query);

      card.style.display = (filterOk && searchOk) ? "" : "none";
    });
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.dataset.filter || "all";
      apply();
    });
  });

  if (search) {
    search.addEventListener("input", () => {
      q = search.value || "";
      apply();
    });
  }
}

/* ===== Modal details ===== */
function initModal(){
  const modal = $("#modal");
  const title = $("#modalTitle");
  const body = $("#modalBody");
  if (!modal || !title || !body) return;

  const details = {
    moderation: {
      title: "Moderation Bot",
      body: `
        <p><strong>Highlights</strong></p>
        <ul>
          <li>Auto-filter (keywords/regex), anti-spam, cooldown per-user/per-command</li>
          <li>Warning ladder + escalation, audit log for staff</li>
          <li>Rate-limit safe patterns (retry-after aware) + structured logging</li>
        </ul>
        <p><strong>Stack</strong>: Node.js, discord.js, REST API, DB (Mongo/Postgres).</p>
      `
    },
    router: {
      title: "Webhook Router",
      body: `
        <p><strong>Highlights</strong></p>
        <ul>
          <li>Incoming webhook normalization → queue → worker</li>
          <li>Retries with backoff + idempotency keys</li>
          <li>Dead-letter handling + observability hooks</li>
        </ul>
        <p><strong>Stack</strong>: Node.js, Express/Fastify, queue (BullMQ/Redis style), logging.</p>
      `
    },
    utility: {
      title: "Community Utility Bot",
      body: `
        <p><strong>Highlights</strong></p>
        <ul>
          <li>Slash commands for roles/tools/reminders</li>
          <li>Status checks + graceful degradation on API failure</li>
          <li>Config-first design for multi-server setups</li>
        </ul>
        <p><strong>Stack</strong>: Node.js, discord.js, scheduler/worker patterns.</p>
      `
    }
  };

  $$("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open");
      const d = details[key];
      if (!d) return;
      title.textContent = d.title;
      body.innerHTML = d.body;
      modal.showModal();
    });
  });
}

/* ===== Copy actions ===== */
async function copyText(text){
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function initCopyButtons(){
  const github = $("#githubLink")?.textContent?.trim() || "https://github.com/USERNAME";
  const email = "gtpsash@gmail.com";

  $("#copyHandle")?.addEventListener("click", async () => {
    const ok = await copyText(github);
    $("#copyHandle").textContent = ok ? "Copied" : "Copy failed";
    setTimeout(() => { $("#copyHandle").textContent = "Copy GitHub"; }, 1100);
  });

  $("#copyEmail")?.addEventListener("click", async () => {
    const ok = await copyText(email);
    $("#copyEmail").textContent = ok ? "Copied" : "Copy failed";
    setTimeout(() => { $("#copyEmail").textContent = "Copy Email"; }, 1100);
  });
}

/* ===== Mobile drawer ===== */
function initDrawer(){
  const drawer = $("#drawer");
  const openBtn = $("#menuToggle");
  const closeBtn = $("#drawerClose");
  if (!drawer || !openBtn || !closeBtn) return;

  const open = () => {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  drawer.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.getAttribute && t.getAttribute("data-close") === "drawer") close();
  });

  $$(".drawer-link").forEach(a => a.addEventListener("click", close));
}

/* ===== Boot ===== */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = String(new Date().getFullYear());

  $("#themeToggle")?.addEventListener("click", toggleTheme);
  // set icon based on current theme
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current);

  startClock();

  const tw = $(".typewriter");
  if (tw) {
    typewriter(tw, [
      "Mid Bot Developer.",
      "JavaScript (Node.js) Specialist.",
      "Discord & Automation Builder.",
      "API Integrations Engineer."
    ]);
  }

  initReveal();
  animateCounters();
  fillMeters();
  initProjectFiltering();
  initModal();
  initCopyButtons();
  initDrawer();
});
