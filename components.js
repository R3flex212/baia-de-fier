/* ═══════════════════════════════════════════
   Baia de Fier — Shared Components
   Nav + Footer injection + shared behaviour
   ═══════════════════════════════════════════ */
(function () {
  const page = document.body.dataset.page || 'index';
  const act  = (p) => p === page ? ' class="active"' : '';

  /* ── NAV ── */
  const NAV = `
<nav id="nav">
  <div class="wrap">
    <div class="nav-in">
      <a href="index.html" class="nav-logo">
        <div class="logo-box">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M3 17l5-8 4 5 3-4 5 7H3z"/></svg>
        </div>
        <span data-ro="Baia de Fier - Polovragi" data-en="Baia de Fier - Polovragi">Baia de Fier - Polovragi</span>
      </a>
      <ul class="nav-ul">
        <li><a href="index.html"${act('index')}             data-ro="Acasă"      data-en="Home">Acasă</a></li>
        <li><a href="regiune.html"${act('regiune')}         data-ro="Regiune"    data-en="Region">Regiune</a></li>
        <li><a href="activitati.html"${act('activitati')}   data-ro="Activități" data-en="Activities">Activități</a></li>
        <li><a href="trasee.html"${act('trasee')}           data-ro="Trasee"     data-en="Trails">Trasee</a></li>
        <li><a href="cazare.html"${act('cazare')}           data-ro="Cazare"     data-en="Accommodation">Cazare</a></li>
        <li><a href="galerie.html"${act('galerie')}         data-ro="Galerie"    data-en="Gallery">Galerie</a></li>
        <li><a href="blog.html"${act('blog')}               data-ro="Blog"       data-en="Blog">Blog</a></li>
      </ul>
      <div class="nav-r">
        <div class="ls">
          <button class="lb a" onclick="setLang('ro')">RO</button>
          <button class="lb"   onclick="setLang('en')">EN</button>
        </div>
        <div class="hb" id="hb-btn"><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>
</nav>
<div class="mm" id="mm">
  <a href="index.html"${act('index')}           data-ro="Acasă"               data-en="Home">Acasă</a>
  <a href="regiune.html"${act('regiune')}       data-ro="Informații Regiune"  data-en="Region Info">Informații Regiune</a>
  <a href="activitati.html"${act('activitati')} data-ro="Activități Sportive" data-en="Sports Activities">Activități Sportive</a>
  <a href="trasee.html"${act('trasee')}         data-ro="Trasee &amp; Hărți"  data-en="Trails &amp; Maps">Trasee &amp; Hărți</a>
  <a href="cazare.html"${act('cazare')}         data-ro="Cazare &amp; Servicii" data-en="Accommodation">Cazare &amp; Servicii</a>
  <a href="galerie.html"${act('galerie')}       data-ro="Galerie"             data-en="Gallery">Galerie</a>
  <a href="blog.html"${act('blog')}             data-ro="Blog"                data-en="Blog">Blog</a>
</div>`;

  /* ── FOOTER ── */
  const FOOTER = `
<div class="cta">
  <div class="wrap">
    <h2 data-ro="Gata să explorezi?" data-en="Ready to explore?">Gata să explorezi?</h2>
    <p data-ro="Baia de Fier &amp; Polovragi te așteaptă. Natură autentică, adrenalină și momente de neuitat." data-en="Baia de Fier &amp; Polovragi awaits. Authentic nature, adrenaline and unforgettable moments.">Baia de Fier &amp; Polovragi te așteaptă. Natură autentică, adrenalină și momente de neuitat.</p>
    <div class="cta-ctas">
      <a href="activitati.html" class="btn btn-w"  data-ro="Activități sportive" data-en="Sports activities">Activități sportive</a>
      <a href="cazare.html"     class="btn btn-wo" data-ro="Cazare &amp; Servicii" data-en="Accommodation">Cazare &amp; Servicii</a>
    </div>
  </div>
</div>
<footer>
  <div class="wrap">
    <div class="ft-g">
      <div>
        <div class="ft-brand">Baia de Fier &amp; Polovragi</div>
        <p class="ft-desc" data-ro="Destinația de sport și aventură din inima Gorjului. Baia de Fier &amp; Polovragi — natură, adrenalină, autenticitate." data-en="The sports &amp; adventure destination in the heart of Gorj. Baia de Fier &amp; Polovragi — nature, adrenaline, authenticity.">Destinația de sport și aventură din inima Gorjului. Baia de Fier &amp; Polovragi.</p>
      </div>
      <div>
        <div class="ft-h" data-ro="Navigare" data-en="Navigation">Navigare</div>
        <ul class="ft-ul">
          <li><a href="regiune.html"    data-ro="Informații Regiune" data-en="Region Info">Informații Regiune</a></li>
          <li><a href="activitati.html" data-ro="Activități Sportive" data-en="Sports Activities">Activități Sportive</a></li>
          <li><a href="trasee.html"     data-ro="Trasee &amp; Hărți" data-en="Trails &amp; Maps">Trasee &amp; Hărți</a></li>
          <li><a href="cazare.html"     data-ro="Cazare &amp; Servicii" data-en="Accommodation">Cazare &amp; Servicii</a></li>
          <li><a href="galerie.html"    data-ro="Galerie" data-en="Gallery">Galerie</a></li>
          <li><a href="blog.html"       data-ro="Blog" data-en="Blog">Blog</a></li>
        </ul>
      </div>
      <div>
        <div class="ft-h" data-ro="Activități" data-en="Activities">Activități</div>
        <ul class="ft-ul">
          <li><a href="activitati.html">Via Ferrata</a></li>
          <li><a href="activitati.html" data-ro="Escaladă"       data-en="Rock Climbing">Escaladă</a></li>
          <li><a href="activitati.html" data-ro="Drumeții"       data-en="Hiking">Drumeții</a></li>
          <li><a href="activitati.html">Body Rafting</a></li>
          <li><a href="activitati.html" data-ro="Moto-Parapantă" data-en="Motor Paragliding">Moto-Parapantă</a></li>
          <li><a href="activitati.html" data-ro="ATV &amp; MTB"  data-en="ATV &amp; MTB">ATV &amp; MTB</a></li>
        </ul>
      </div>
      <div>
        <div class="ft-h" data-ro="Contact" data-en="Contact">Contact</div>
        <ul class="ft-ul" style="line-height:2.1;font-size:.83rem">
          <li>📍 Baia de Fier, Gorj</li>
        </ul>
      </div>
    </div>
    <div class="ft-bot">
      <span data-ro="© 2026 Baia de Fier — prezentare turistică" data-en="© 2025 Baia de Fier — tourism presentation">© 2026 Baia de Fier — prezentare turistică</span>
      <span data-ro="Baia de Fier · Polovragi · Gorj, România" data-en="Baia de Fier · Polovragi · Gorj, Romania">Baia de Fier · Polovragi · Gorj, România</span>
    </div>
  </div>
</footer>`;

  /* ── INJECT ── */
  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  function checkScroll() { nav.classList.toggle('s', window.scrollY > 48); }
  window.addEventListener('scroll', checkScroll);
  checkScroll();

  /* ── MOBILE MENU ── */
  document.getElementById('hb-btn').addEventListener('click', () => {
    document.getElementById('mm').classList.toggle('on');
  });
  document.querySelectorAll('.mm a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mm').classList.remove('on'));
  });

  /* ── SCROLL FADE IN ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fi-in').forEach(el => obs.observe(el));

  /* ── LIGHTBOX (galerie) ── */
  window.openLb = function(el) {
    const src = el.querySelector('img').src;
    let lb = document.getElementById('lb');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lb';
      lb.innerHTML = '<button id="lb-x">✕</button><img id="lb-img" src="" alt="">';
      document.body.appendChild(lb);
      lb.addEventListener('click', closeLb);
      document.getElementById('lb-x').addEventListener('click', closeLb);
    }
    document.getElementById('lb-img').src = src;
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  };
  window.closeLb = function() {
    const lb = document.getElementById('lb');
    if (lb) lb.classList.remove('on');
    document.body.style.overflow = '';
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeLb(); });

  /* ── LANGUAGE SWITCHER ── */
  window.setLang = function(l) {
    document.querySelectorAll('[data-ro]').forEach(el => {
      const v = el.getAttribute('data-' + l);
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll('.lb').forEach(b => b.classList.toggle('a', b.textContent.toLowerCase() === l));
    document.documentElement.lang = l;
    localStorage.setItem('gorj-lang', l);
  };

  /* ── CAZARE FILTER ── */
  window.filtCazare = function(btn, type) {
    document.querySelectorAll('.ctab').forEach(b => b.classList.remove('a'));
    btn.classList.add('a');
    document.querySelectorAll('.cc').forEach(c => {
      c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none';
    });
  };

  /* restore lang on load */
  const saved = localStorage.getItem('gorj-lang');
  if (saved && saved !== 'ro') setTimeout(() => window.setLang(saved), 50);

})();
