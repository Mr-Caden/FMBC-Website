/**
 * Forest Meadow Baptist Church — Shared Layout & Page Interactions
 * Injects the single shared Header, Mobile Drawer, and Footer directly into <body>
 * so sticky headers stay pinned for the full page height, and powers interactive
 * filters, accordions, ministry detail views, and forms.
 */

(function () {
  'use strict';

  const CHURCH = {
    name: 'Forest Meadow Baptist Church',
    phoneDisplay: '505.281.4105',
    phoneHref: 'tel:5052814105',
    email: 'info@forestmeadow.church',
    adminEmail: 'kathymg@forestmeadow.church',
    youtubeUrl: 'https://www.youtube.com/@forestmeadowbaptistchurch8394',
    youtubeLiveUrl: 'https://www.youtube.com/@forestmeadowbaptistchurch8394/streams',
    bulletinUrl: 'https://forestmeadowchurch.updates.church'
  };

  /**
   * Shared SVG Crest Symbol + Utility Bar + Sticky Header + Mobile Drawer
   */
  const HEADER_HTML = `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;">
      <defs>
        <g id="fmbc-crest-mono">
          <path d="M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z" fill="none" stroke="currentColor" stroke-width="5.2" stroke-linejoin="round" />
          <path d="M50.5 11.5 L83.5 30.5 L83.5 69.5 L57 84.8 C55.2 85.8 53.5 84.8 53.5 82.8 L53.5 74.5 C61.5 73.9 69.5 71.2 75.5 66.8 L72.2 59.5 C67.6 59.2 63.8 58 60.2 55.8 C64.2 55.3 67.8 54.4 70.8 53 L64.5 38.6 C61.4 37.9 58.6 36.8 56.2 35.4 C58.8 35 61.2 34.4 63 33.6 L56.8 21.8 C55.2 21.4 53.8 20.9 52.8 20.2 L55.4 19.6 L50.5 11.5 Z" fill="currentColor" />
          <path d="M50 14.5 L44.6 26.2 L47.2 26.8 C46.2 27.5 44.8 28 43.2 28.4 L37 40.2 C38.8 41 41.2 41.6 43.8 42 C41.4 43.4 38.6 44.5 35.5 45.2 L29.2 59.6 C32.2 61 35.8 61.9 39.8 62.4 C36.2 64.6 32.4 65.8 27.8 66.1 L24.5 73.4 C30.5 77.8 38.5 80.5 46.5 81.1 L46.5 89.2 C46.5 91.2 44.8 92.2 43 91.2 L46.5 93.2 L50 94.5 L50 14.5 Z" fill="currentColor" transform="translate(0, -6.5)" />
        </g>
      </defs>
    </svg>

    <div class="utility-bar">
      <div class="container utility-bar__inner">
        <p class="utility-bar__text">
          <strong>Sundays in Tijeras:</strong> 9:30 AM Bible Classes &bull; 11:00 AM Worship Service &bull; 12:30 PM Potluck
        </p>
        <div class="utility-bar__links">
          <a href="${CHURCH.bulletinUrl}" target="_blank" rel="noopener noreferrer">Weekly Bulletin</a>
          <span aria-hidden="true">|</span>
          <a href="${CHURCH.youtubeLiveUrl}" target="_blank" rel="noopener noreferrer">Watch Live</a>
          <span aria-hidden="true">|</span>
          <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a>
        </div>
      </div>
    </div>

    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a href="index.html" class="brand-lockup" aria-label="Forest Meadow Baptist Church Home">
          <svg class="brand-crest" viewBox="0 0 100 100" aria-hidden="true">
            <use href="#fmbc-crest-mono"></use>
          </svg>
          <span class="brand-text">
            <span class="brand-text__main">FOREST MEADOW</span>
            <span class="brand-text__sub">BAPTIST CHURCH</span>
          </span>
        </a>

        <nav class="primary-nav" aria-label="Primary Navigation">
          <ul class="nav-list">
            <li><a class="nav-link" href="index.html" data-nav="home">Home</a></li>

            <li class="nav-dropdown">
              <a class="nav-link" href="about.html" data-nav="about">About Us</a>
              <ul class="dropdown-menu">
                <li><a href="about.html">Our Story &amp; Beliefs</a></li>
                <li><a href="leadership.html">Staff &amp; Leadership</a></li>
              </ul>
            </li>

            <li class="nav-dropdown">
              <a class="nav-link" href="order-of-services.html" data-nav="sundays">Sundays</a>
              <ul class="dropdown-menu">
                <li><a href="im-new.html">I'm New</a></li>
                <li><a href="order-of-services.html">Order of Services</a></li>
                <li><a href="online.html">Watch Online</a></li>
              </ul>
            </li>

            <li class="nav-dropdown">
              <a class="nav-link" href="connect.html" data-nav="connect">Connect</a>
              <ul class="dropdown-menu">
                <li><a href="connect.html">All Ministries</a></li>
                <li><a href="connect.html?ministry=prayer">Prayer Ministry</a></li>
                <li><a href="connect.html?ministry=missions">Missions &amp; Outreach</a></li>
                <li><a href="connect.html?ministry=womens">Women's Ministry</a></li>
                <li><a href="connect.html?ministry=mens">Men's Bible Study</a></li>
                <li><a href="connect.html?ministry=children">Children's Ministry &amp; Pathfinders</a></li>
                <li><a href="connect.html?ministry=youth">Themelios Youth</a></li>
                <li><a href="connect.html?ministry=college">Kaleo College &amp; Young Adult</a></li>
                <li><a href="connect.html?ministry=parents">Parents Bible Study</a></li>
              </ul>
            </li>

            <li class="nav-dropdown">
              <a class="nav-link" href="resources.html" data-nav="resources">Resources</a>
              <ul class="dropdown-menu">
                <li><a href="resources.html">Past Services &amp; Study Tools</a></li>
                <li><a href="calendar.html">Events Calendar</a></li>
                <li><a href="${CHURCH.bulletinUrl}" target="_blank" rel="noopener noreferrer">Online Bulletin</a></li>
              </ul>
            </li>

            <li><a class="nav-link" href="contact.html" data-nav="contact">Contact</a></li>
            <li><a class="btn btn--gold btn--sm nav-give" href="give.html" data-nav="give">Give</a></li>
          </ul>
        </nav>

        <button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="mobile-drawer" aria-label="Open navigation menu">
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
          <span class="menu-toggle__bar"></span>
        </button>
      </div>
    </header>

    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer__header">
        <span class="mobile-drawer__title">FOREST MEADOW</span>
        <button class="drawer-close" id="drawer-close" aria-label="Close navigation menu">&times;</button>
      </div>
      <nav class="mobile-nav" aria-label="Mobile Navigation">
        <a href="index.html">Home</a>
        <div class="mobile-group">
          <span class="mobile-group__label">About Us</span>
          <a href="about.html">Our Story &amp; Beliefs</a>
          <a href="leadership.html">Staff &amp; Leadership</a>
        </div>
        <div class="mobile-group">
          <span class="mobile-group__label">Sundays</span>
          <a href="im-new.html">I'm New</a>
          <a href="order-of-services.html">Order of Services</a>
          <a href="online.html">Watch Online</a>
        </div>
        <div class="mobile-group">
          <span class="mobile-group__label">Connect &amp; Ministries</span>
          <a href="connect.html">All Ministries</a>
          <a href="connect.html?ministry=prayer">Prayer Ministry</a>
          <a href="connect.html?ministry=missions">Missions &amp; Outreach</a>
          <a href="connect.html?ministry=womens">Women's Ministry</a>
          <a href="connect.html?ministry=mens">Men's Bible Study</a>
          <a href="connect.html?ministry=children">Children's Ministry &amp; Pathfinders</a>
          <a href="connect.html?ministry=youth">Themelios Youth</a>
          <a href="connect.html?ministry=college">Kaleo College &amp; Young Adult</a>
          <a href="connect.html?ministry=parents">Parents Bible Study</a>
        </div>
        <div class="mobile-group">
          <span class="mobile-group__label">Resources</span>
          <a href="resources.html">Past Services &amp; Study Tools</a>
          <a href="calendar.html">Events Calendar</a>
          <a href="${CHURCH.bulletinUrl}" target="_blank" rel="noopener noreferrer">Weekly Online Bulletin</a>
        </div>
        <a href="contact.html">Contact Us</a>
        <a class="btn btn--gold btn--block" href="give.html" style="margin-top: 0.75rem;">Give Online</a>
      </nav>
    </div>
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
  `;

  /**
   * Shared Site Footer + Toast Notification
   */
  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo-box">
            <svg class="footer-crest" viewBox="0 0 100 100" aria-hidden="true">
              <use href="#fmbc-crest-mono"></use>
            </svg>
            <span>
              <span class="footer-logo-box__main">FOREST MEADOW</span>
              <span class="footer-logo-box__sub">BAPTIST CHURCH</span>
            </span>
          </a>
          <p class="footer-mission">
            Encouraging, instructing, and equipping the body of Christ, making disciples, and seeing the East Mountains renewed by the Gospel.
          </p>
        </div>

        <div class="footer-col">
          <h3>Visit Us</h3>
          <address class="footer-address">
            <strong>Forest Meadow Baptist Church</strong><br />
            54 Highway 217<br />
            Tijeras, New Mexico 87059<br />
            <span class="footer-hint">(1/2 mile east of Highway 337)</span>
          </address>
          <p class="footer-contact-line">
            <strong>Call:</strong> <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a><br />
            <strong>Email:</strong> <a href="mailto:${CHURCH.email}">${CHURCH.email}</a>
          </p>
        </div>

        <div class="footer-col">
          <h3>Sundays at the Meadow</h3>
          <ul class="footer-times">
            <li><span>9:30 AM</span> Bible Classes &amp; Nursery</li>
            <li><span>10:25 AM</span> Coffee &amp; Fellowship</li>
            <li><span>11:00 AM</span> Worship Service &amp; Livestream</li>
            <li><span>12:30 PM</span> All-Church Potluck</li>
          </ul>
          <a class="footer-text-link" href="im-new.html">Plan Your First Visit &rarr;</a>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="about.html">Our Story &amp; Beliefs</a></li>
            <li><a href="leadership.html">Staff &amp; Leadership</a></li>
            <li><a href="order-of-services.html">Order of Services</a></li>
            <li><a href="connect.html">Ministries</a></li>
            <li><a href="resources.html">Study Resources</a></li>
            <li><a href="calendar.html">Events Calendar</a></li>
            <li><a href="${CHURCH.youtubeLiveUrl}" target="_blank" rel="noopener noreferrer">FMBC YouTube Live</a></li>
            <li><a href="${CHURCH.bulletinUrl}" target="_blank" rel="noopener noreferrer">Online Bulletin &amp; Connect Card</a></li>
            <li><a href="give.html">Give &amp; Benevolence</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom__inner">
          <p>&copy; <span id="footer-year">${new Date().getFullYear()}</span> Forest Meadow Baptist Church &bull; Tijeras, New Mexico</p>
          <p>Partnering with the Southern Baptist Convention of New Mexico</p>
        </div>
      </div>
    </footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;

  // Replace mount placeholders directly so sticky header is a direct child of <body>
  const headerMount = document.getElementById('site-header-mount');
  if (headerMount) headerMount.outerHTML = HEADER_HTML;

  const footerMount = document.getElementById('site-footer-mount');
  if (footerMount) footerMount.outerHTML = FOOTER_HTML;

  // Highlight Active Nav Item based on <body data-page="...">
  const activePage = document.body.getAttribute('data-page') || 'home';
  document.querySelectorAll('.primary-nav .nav-link').forEach((link) => {
    if (link.getAttribute('data-nav') === activePage) {
      link.classList.add('is-active');
    }
  });

  // Close desktop dropdowns immediately after click
  document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
      const clickedLink = e.target.closest('a');
      if (!clickedLink) return;
      clickedLink.blur();
      dropdown.classList.add('is-closed');
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('is-closed');
    });
  });

  // Mobile Drawer Controls
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function setDrawerOpen(open) {
    if (!mobileDrawer) return;
    mobileDrawer.classList.toggle('is-open', open);
    drawerBackdrop.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', String(!open));
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuToggle) menuToggle.addEventListener('click', () => setDrawerOpen(true));
  if (drawerClose) drawerClose.addEventListener('click', () => setDrawerOpen(false));
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => setDrawerOpen(false));
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target.closest('a')) setDrawerOpen(false);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      setDrawerOpen(false);
    }
  });

  // Toast Notification Helper
  let toastTimeout;
  function showToast(message) {
    const toastEl = document.getElementById('toast');
    if (!toastEl) return;
    clearTimeout(toastTimeout);
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    toastTimeout = setTimeout(() => toastEl.classList.remove('is-visible'), 5200);
  }

  // FAQ Accordion
  const accordion = document.getElementById('faq-accordion');
  if (accordion) {
    accordion.addEventListener('click', (e) => {
      const trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;
      const item = trigger.parentElement;
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Calendar Event Filters
  const eventBtns = document.querySelectorAll('[data-event-filter]');
  if (eventBtns.length) {
    eventBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-event-filter');
        eventBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        document.querySelectorAll('[data-event-card]').forEach((card) => {
          const cat = card.getAttribute('data-event-card');
          card.style.display = filter === 'All' || cat === filter ? '' : 'none';
        });
      });
    });
  }

  // Connect Page: Ministry Filter (?filter=Adults) & Detail View (?ministry=...)
  const connectMount = document.getElementById('connect-page-mount');
  if (connectMount) {
    const MINISTRIES = [
      {
        id: 'prayer',
        category: 'Ministry',
        title: 'Prayer Ministry',
        schedule: 'Ongoing Private Prayer Team',
        leader: 'Tammy Lambert',
        contactEmail: CHURCH.adminEmail,
        contactLabel: 'kathymg@forestmeadow.church',
        summary: 'Prayer is a commission that Forest Meadow is faithfully committed to, and our active prayer team is honored and humbled to pray for you.',
        detailsHtml: `
          <div class="grid-2" style="align-items: start;">
            <div>
              <h3>How We Pray Together</h3>
              <p>Requests may be submitted electronically through the form below, through the link in our weekly online bulletin, or in person on Sunday mornings.</p>
              <p>To reach Prayer Ministry Coordinator <strong>Tammy Lambert</strong> or join our prayer team, please contact Administrative Officer <strong>Kathy Moore-Gregory</strong> at <a href="mailto:${CHURCH.adminEmail}">${CHURCH.adminEmail}</a> or call the Church Office at <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a>.</p>
            </div>
            <div class="card card--cream card--charcoal-top">
              <div>
                <span class="pill pill--charcoal">Privacy Assurance</span>
                <h4 style="margin-top: 0.75rem;">Confidential Care</h4>
                <p style="margin-bottom: 0;">We value your privacy and never publish prayer requests publicly on the website. Requests submitted here remain confidential and are distributed internally to our Pastor, Elders, and prayer team.</p>
              </div>
            </div>
          </div>
        `,
        includePrayerForm: true
      },
      {
        id: 'missions',
        category: 'Ministry',
        title: 'Missions & Outreach',
        schedule: 'Local & Global Gospel Partnerships',
        leader: 'John Shadid, Chair of Missions Committee',
        contactEmail: CHURCH.adminEmail,
        contactLabel: 'kathymg@forestmeadow.church',
        summary: 'We partner with local and international churches and support missionary families physically, financially, and through continual prayer.',
        detailsHtml: `
          <blockquote class="scripture-quote" style="margin-top: 0;">
            "How beautiful upon the mountains are the feet of the messenger who brings good news, the good news of peace and salvation, the news that the God of Israel reigns."
            <cite>Isaiah 52:7</cite>
          </blockquote>
          <div class="grid-2" style="margin-top: 1.5rem;">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Mexico</span>
                <h4 style="margin-top: 0.75rem;">Tarahumara (Rar&aacute;muri) Ministry</h4>
                <p style="margin-bottom: 0;">The Tarahumara people live in the rugged Sierra Madre Mountains and Copper Canyon of Mexico. Despite extreme terrain and language barriers, our local connections with believers have helped establish growing church groups and discipleship training.</p>
              </div>
            </div>
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Mexico</span>
                <h4 style="margin-top: 0.75rem;">YWAM Creel &amp; Cuauht&eacute;moc Church</h4>
                <p style="margin-bottom: 0;">Youth With A Mission maintains a fruitful Gospel witness in Creel, ministering to local residents and indigenous communities through evangelism, discipleship, leadership training, Bible translation, and meeting physical needs.</p>
              </div>
            </div>
            <div class="card card--cream card--gold-top">
              <div>
                <span class="pill pill--charcoal">Medical &amp; Literacy</span>
                <h4 style="margin-top: 0.75rem;">La Mesa Clinic (Pioneers)</h4>
                <p style="margin-bottom: 0;">La Mesa Clinic engages in a multifaceted ministry among the Tarahumara people, providing medical services, literacy training, education, translation, and faithful Gospel witness in an isolated region.</p>
              </div>
            </div>
            <div class="card card--cream card--charcoal-top">
              <div>
                <span class="pill pill--charcoal">Southern Africa</span>
                <h4 style="margin-top: 0.75rem;">TransWorld Radio — Eswatini</h4>
                <p style="margin-bottom: 0;">Sent from our very own congregation, <strong>Tyler and Beverly LeMoine</strong> serve in Eswatini, Africa with TransWorld Radio (TWR). Tyler serves as an engineer broadcasting the Gospel across Africa while Beverly ministers face-to-face and supports the regional team.</p>
              </div>
            </div>
          </div>
          <div class="card card--sage-tint" style="margin-top: 1.5rem;">
            <h4>How You Can Intercede &amp; Get Involved</h4>
            <ul style="margin-bottom: 0;">
              <li>Pray that the Tarahumara people would know the one true God as Creator and Savior, and that local believers mature into strong leaders.</li>
              <li>Pray for courage and bold Gospel witness for YWAM Creel, Cuauht&eacute;moc Church, La Mesa Clinic, and TWR Ministries.</li>
              <li>Provide prayer and financial support for Tyler and Beverly LeMoine in Eswatini.</li>
              <li>To connect with Missions Chair <strong>John Shadid</strong>, please contact our Administrative Officer at <a href="mailto:${CHURCH.adminEmail}">${CHURCH.adminEmail}</a> or call <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a>.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'womens',
        category: 'Adults',
        title: "Women's Ministry",
        schedule: 'Tuesdays at 9:00 AM (Exercise) & 10:00 AM (Bible Study)',
        leader: 'Jamie Selleck, Coordinator',
        contactEmail: 'jamies@forestmeadow.church',
        contactLabel: 'jamies@forestmeadow.church',
        summary: "An active sisterhood committed to encouraging one another, studying God's Word, praying together, and caring for our church and community.",
        detailsHtml: `
          <div class="grid-3">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Tuesdays</span>
                <h4 style="margin-top: 0.65rem;">Morning Bible Study &amp; Exercise</h4>
                <p><strong>9:00 AM Exercise:</strong> Chair Exercise in the Fellowship Hall or a walk up Lovato Rd.</p>
                <p style="margin-bottom: 0;"><strong>10:00 AM Bible Study:</strong> Teaching and prayer in the Fellowship Hall, led by <strong>Kathy Miller</strong> (contact via <a href="mailto:jamies@forestmeadow.church">jamies@forestmeadow.church</a> or <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a>). We follow local school weather delays and cancellations.</p>
              </div>
            </div>
            <div class="card card--cream card--gold-top">
              <div>
                <span class="pill pill--charcoal">Seasonal</span>
                <h4 style="margin-top: 0.65rem;">Virtual Book Club &amp; Brunch</h4>
                <p style="margin-bottom: 0;">Several times a year we read a book together with study questions and periodic encouragement emails, culminating in a Book Club Brunch and discussion at a member's home. Check the Church Center App for current titles.</p>
              </div>
            </div>
            <div class="card card--cream card--charcoal-top">
              <div>
                <span class="pill">Hospitality</span>
                <h4 style="margin-top: 0.65rem;">Meal Ministry</h4>
                <p style="margin-bottom: 0;">Faithfully providing meals for families navigating illness, injury, loss, or welcoming a new baby—meeting practical needs with Christlike love and compassion.</p>
              </div>
            </div>
          </div>
          <div class="card card--sage-tint" style="margin-top: 1.5rem;">
            <p style="margin-bottom: 0;"><strong>Women's Ministry Leadership Team:</strong> Jamie Selleck (<a href="mailto:jamies@forestmeadow.church">jamies@forestmeadow.church</a>), Kathy Miller, Kathy Moore-Gregory (<a href="mailto:${CHURCH.adminEmail}">${CHURCH.adminEmail}</a>), Kim LeMoine, Raquell Ramacciotti, and Janice Gustafson.</p>
          </div>
        `
      },
      {
        id: 'mens',
        category: 'Adults',
        title: "Men's Bible Study",
        schedule: 'Tuesdays at 6:30 PM & Periodic Breakfast Fellowship',
        leader: 'Pastor Tom Lambert',
        contactEmail: CHURCH.adminEmail,
        contactLabel: 'kathymg@forestmeadow.church',
        summary: 'Brotherhood rooted in Scripture, prayer, and mutual encouragement for men across the East Mountains.',
        detailsHtml: `
          <div class="grid-2">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Weekly Study</span>
                <h4 style="margin-top: 0.75rem;">Tuesday Evening Bible Study</h4>
                <p style="margin-bottom: 0;">Our Men's Bible Study meets every <strong>Tuesday evening at 6:30 PM</strong> in the Fellowship Hall. Join Pastor Tom Lambert for warm fellowship, prayer, and verse-by-verse Bible study.</p>
              </div>
            </div>
            <div class="card card--cream card--gold-top">
              <div>
                <span class="pill pill--charcoal">Fellowship</span>
                <h4 style="margin-top: 0.75rem;">Men's Breakfast &amp; Connection</h4>
                <p style="margin-bottom: 0;">We also gather periodically for <strong>Men's Breakfast Fellowship</strong>. Check our <a href="calendar.html">Events Calendar</a> or contact the Church Office at <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a> or <a href="mailto:${CHURCH.adminEmail}">${CHURCH.adminEmail}</a> to reach Pastor Tom Lambert.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'children',
        category: 'Kids & Youth',
        title: "Children's Ministry & Pathfinders",
        schedule: 'Sundays 9:30 AM & Wednesdays 6:00 - 7:45 PM',
        leader: "Rebecca Parks, Children's Director",
        contactEmail: 'parks@forestmeadow.church',
        contactLabel: 'parks@forestmeadow.church',
        summary: 'Engaging, Scripture-centered biblical instruction equipping families to raise children in the love of Jesus and confidence in His Word.',
        detailsHtml: `
          <p>From Sunday morning Bible classes (Nursery through 5th Grade) to our midweek Pathfinders program and annual VBS outreach, our dedicated teachers partner with parents to lay a firm biblical foundation.</p>
          <p>Children of all ages are always welcome in our 11:00 AM Sunday Worship Service. We also livestream the service into both the Nursery and Youth Room for nursing mothers and parents with restless little ones.</p>
          <div class="card card--cream card--accent-top" style="margin-top: 1.5rem;">
            <div>
              <span class="pill pill--charcoal">2026-2027 Theme: Finding the Path to Knowing God</span>
              <h4 style="margin-top: 0.75rem;">Pathfinders Midweek Program (Ages 3-12)</h4>
              <p>Pathfinders meets <strong>Wednesdays from 6:00 PM to 7:45 PM</strong> at the church. Children learn core Christian doctrines in a fun, engaging environment that builds lasting friendships and a love of worship.</p>
              <div class="age-group-grid">
                <div class="age-chip"><strong>Wanderers</strong><span>Ages 3-5</span></div>
                <div class="age-chip"><strong>Seekers</strong><span>Ages 6-7</span></div>
                <div class="age-chip"><strong>Explorers</strong><span>Ages 8-10</span></div>
                <div class="age-chip"><strong>Trailblazers</strong><span>Ages 11-12</span></div>
              </div>
              <p><strong>Guiding Scriptures:</strong> John 14:6, 2 Timothy 2:15, and Matthew 7:7-8. Pathfinders songs and sign-language videos are hosted on our <a href="${CHURCH.youtubeUrl}" target="_blank" rel="noopener noreferrer">FMBC YouTube Channel</a>.</p>
              <p style="margin-bottom: 0;">Contact Children's Director <strong>Rebecca Parks</strong> at <a href="mailto:parks@forestmeadow.church">parks@forestmeadow.church</a>. For Sunday Nursery (ages 0-3), contact Nursery Coordinator <strong>Lisa Bell</strong> via the Church Office at <a href="${CHURCH.phoneHref}">${CHURCH.phoneDisplay}</a>.</p>
            </div>
          </div>
        `
      },
      {
        id: 'youth',
        category: 'Kids & Youth',
        title: 'Themelios Youth Ministry',
        schedule: 'Wednesdays at 6:00 PM & Sundays at 9:30 AM',
        leader: 'Alex McKee, Youth Pastor',
        contactEmail: 'alexm@forestmeadow.church',
        contactLabel: 'alexm@forestmeadow.church',
        summary: 'A Christ-centered community for teens ages 13-18 featuring Bible study, games, snacks, fellowship, and local outreach.',
        detailsHtml: `
          <div class="grid-2">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Wednesdays &bull; 6:00 PM</span>
                <h4 style="margin-top: 0.75rem;">Midweek Youth Night</h4>
                <p style="margin-bottom: 0;"><strong>Themelios</strong> welcomes teens ages 13 to 18 every Wednesday night in the Youth Room for biblical teaching, honest discussion, games, snacks, and local community outreach.</p>
              </div>
            </div>
            <div class="card card--cream card--charcoal-top">
              <div>
                <span class="pill pill--charcoal">Sundays &bull; 9:30 AM</span>
                <h4 style="margin-top: 0.75rem;">Sunday Bible Classes &amp; Forms</h4>
                <p style="margin-bottom: 0;">Middle School (grades 6-8) and High School Bible classes meet every Sunday morning at 9:30 AM. For upcoming youth trips and permission forms, email Youth Pastor <strong>Alex McKee</strong> at <a href="mailto:alexm@forestmeadow.church">alexm@forestmeadow.church</a>.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'college',
        category: 'Adults',
        title: 'Kaleo College & Young Adult',
        schedule: 'Regular Gatherings & Bible Fellowship',
        leader: 'Pastor Mike Hernandez',
        contactEmail: 'mikeh@forestmeadow.church',
        contactLabel: 'mikeh@forestmeadow.church',
        summary: 'Encouraging college students and young adults to walk boldly with Christ through authentic community, discipleship, and Scripture.',
        detailsHtml: `
          <div class="grid-2">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Young Adults</span>
                <h4 style="margin-top: 0.75rem;">Discipleship &amp; Community</h4>
                <p style="margin-bottom: 0;"><strong>Kaleo</strong> connects college students and young adults in the East Mountains and greater Albuquerque area for authentic fellowship, practical biblical discussion, and shared mission.</p>
              </div>
            </div>
            <div class="card card--cream card--gold-top">
              <div>
                <span class="pill pill--charcoal">Get Plugged In</span>
                <h4 style="margin-top: 0.75rem;">Current Gatherings</h4>
                <p style="margin-bottom: 0;">Check the Church Center App for the next meeting time or reach out directly to Lead Pastor <strong>Mike Hernandez</strong> at <a href="mailto:mikeh@forestmeadow.church">mikeh@forestmeadow.church</a>.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'parents',
        category: 'Adults',
        title: 'Parents Bible Study',
        schedule: 'Weekly & Seasonal Group Sessions',
        leader: 'Isaac Parks, Bible Study Director',
        contactEmail: 'parks@forestmeadow.church',
        contactLabel: 'parks@forestmeadow.church',
        summary: 'Equipping mothers and fathers with biblical encouragement, prayer support, and practical discipleship for the home.',
        detailsHtml: `
          <div class="grid-2">
            <div class="card card--cream card--accent-top">
              <div>
                <span class="pill">Family Discipleship</span>
                <h4 style="margin-top: 0.75rem;">Walking Together as Parents</h4>
                <p style="margin-bottom: 0;">Parenting was never meant to be walked alone. Our Parents Bible Study gathers mothers and fathers to study Scripture together, pray for one another's children, and build Christ-centered homes.</p>
              </div>
            </div>
            <div class="card card--cream card--gold-top">
              <div>
                <span class="pill pill--charcoal">Join a Group</span>
                <h4 style="margin-top: 0.75rem;">Session Details</h4>
                <p style="margin-bottom: 0;">For current session times and Sunday morning 9:30 AM Adult Study options, please contact Bible Study Director <strong>Isaac Parks</strong> at <a href="mailto:parks@forestmeadow.church">parks@forestmeadow.church</a>.</p>
              </div>
            </div>
          </div>
        `
      }
    ];

    const params = new URLSearchParams(window.location.search);
    const ministryId = params.get('ministry');
    const initialFilter = params.get('filter') || 'All';
    const selected = MINISTRIES.find((m) => m.id === ministryId);

    if (selected) {
      document.title = `${selected.title} | ${CHURCH.name}`;
      connectMount.innerHTML = `
        <div class="sticky-subbar">
          <div class="container sticky-subbar__inner">
            <a class="subbar-back" href="connect.html">&larr; All Ministries</a>
            <div class="subbar-meta">
              <span><strong>${selected.title}</strong></span>
              <a class="btn btn--sage btn--sm" href="mailto:${selected.contactEmail}">Email Ministry Contact</a>
            </div>
          </div>
        </div>

        <section class="page-banner">
          <div class="container page-banner__grid">
            <div>
              <span class="eyebrow">Connect &bull; ${selected.category}</span>
              <h1>${selected.title}</h1>
              <p>${selected.summary}</p>
            </div>
            <div class="banner-quick-panel">
              <div class="banner-meta-list">
                <div class="banner-meta-row">
                  <span>When</span>
                  <strong>${selected.schedule}</strong>
                </div>
                <div class="banner-meta-row">
                  <span>Leader</span>
                  <strong>${selected.leader}</strong>
                </div>
                <div class="banner-meta-row">
                  <span>Contact</span>
                  <a href="mailto:${selected.contactEmail}">${selected.contactLabel}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="card">
              <div>${selected.detailsHtml}</div>
            </div>
            ${
              selected.includePrayerForm
                ? `
              <div class="form-card" style="margin-top: 2rem;">
                <span class="eyebrow">Confidential Request</span>
                <h3>Submit a Private Prayer Request</h3>
                <p style="color: var(--text-muted);">Requests are never published publicly. They are shared internally with our Pastor, Elders, and prayer team.</p>
                <form id="prayer-form">
                  <div class="form-grid">
                    <div class="form-group">
                      <label for="prayer-name">Your Name (Optional)</label>
                      <input id="prayer-name" type="text" placeholder="Your name" />
                    </div>
                    <div class="form-group">
                      <label for="prayer-email">Email (If you'd like follow-up)</label>
                      <input id="prayer-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div class="form-group form-group--full">
                      <label for="prayer-body">How Can We Pray For You?</label>
                      <textarea id="prayer-body" rows="4" required placeholder="Share your prayer need here..."></textarea>
                    </div>
                  </div>
                  <button class="btn btn--sage" type="submit">Send Confidential Prayer Request</button>
                </form>
              </div>
            `
                : ''
            }
          </div>
        </section>
      `;
    } else {
      const categories = ['All', 'Ministry', 'Adults', 'Kids & Youth'];
      const validFilter = categories.includes(initialFilter) ? initialFilter : 'All';

      const filterButtons = categories
        .map(
          (cat) =>
            `<button class="filter-btn ${cat === validFilter ? 'is-active' : ''}" type="button" data-ministry-filter="${cat}">${cat}</button>`
        )
        .join('');

      const cards = MINISTRIES.map(
        (m) => `
        <a class="card card--clickable card--accent-top" href="connect.html?ministry=${m.id}" data-ministry-card="${m.category}" style="${validFilter === 'All' || m.category === validFilter ? '' : 'display: none;'}">
          <div>
            <span class="pill">${m.category}</span>
            <h3 style="margin-top: 0.85rem;">${m.title}</h3>
            <p style="font-size: 0.88rem; color: var(--sage-text); font-weight: 600; margin-bottom: 0.65rem;">${m.schedule}</p>
            <p>${m.summary}</p>
          </div>
          <span class="card-link">Learn More &rarr;</span>
        </a>
      `
      ).join('');

      connectMount.innerHTML = `
        <section class="page-banner">
          <div class="container page-banner__grid">
            <div>
              <span class="eyebrow">Get Involved</span>
              <h1>Connect &amp; Ministries</h1>
              <p>Whether you are seeking biblical community, youth and children's programs, prayer support, or ways to serve in the East Mountains and around the world, find your place here.</p>
            </div>
            <div class="banner-quick-panel">
              <span class="banner-quick-panel__label">Quick Shortcuts</span>
              <div class="banner-quick-links">
                <a class="btn btn--sage btn--sm" href="connect.html?ministry=prayer">Request Prayer</a>
                <a class="btn btn--outline-dark btn--sm" href="calendar.html">Weekly Schedule</a>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="filter-bar" role="group" aria-label="Filter ministries by category">
              ${filterButtons}
            </div>
            <div class="grid-3" id="ministry-grid">${cards}</div>
          </div>
        </section>

        <section class="section section--sage">
          <div class="container">
            <span class="eyebrow eyebrow--light">Community Care</span>
            <h2 style="margin-bottom: 0.75rem;">Benevolence &amp; 1.1.12 Fellowship</h2>
            <p style="max-width: 72ch; margin-bottom: 1.5rem;">
              We care for neighbors facing practical needs through our Benevolence outreach and nurture deeper friendships across the congregation on the first Sunday of each month through <strong>1.1.12</strong> (one-on-one fellowship once a month, twelve times a year).
            </p>
            <div class="hero__actions">
              <a class="btn btn--gold" href="give.html">Support Benevolence</a>
              <a class="btn btn--outline-light" href="contact.html">Contact the Church Office</a>
            </div>
          </div>
        </section>
      `;

      const ministryBtns = connectMount.querySelectorAll('[data-ministry-filter]');
      ministryBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-ministry-filter');
          ministryBtns.forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          connectMount.querySelectorAll('[data-ministry-card]').forEach((card) => {
            const cat = card.getAttribute('data-ministry-card');
            card.style.display = filter === 'All' || cat === filter ? '' : 'none';
          });
        });
      });
    }
  }

  // Interactive Form Handlers
  const visitForm = document.getElementById('visit-form');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visit-name').value.trim();
      const service = document.getElementById('visit-service').value;
      visitForm.reset();
      showToast(`Thank you, ${name}! We look forward to welcoming you for ${service}. You can also email info@forestmeadow.church anytime.`);
    });
  }

  const prayerForm = document.getElementById('prayer-form');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      prayerForm.reset();
      showToast('Your confidential prayer request has been received. Our Pastor, Elders, and prayer team are honored to pray for you.');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      contactForm.reset();
      showToast(`Thank you, ${name}! Your message for Forest Meadow Baptist Church has been prepared. For immediate assistance, call 505.281.4105.`);
    });
  }
})();