(function () {
  'use strict';

  const LANG_KEY = 'rigino_lang';
  const STORAGE_KEY = 'rigino_cuts_appointments_v1';
  const SLOT_MINUTES = 20;
  const BOOKING_MINUTES = 40;
  const SHOP_OPEN_H = 9;
  const SHOP_CLOSE_H = 19;

  /** @type {'sk'|'de'|'en'} */
  let currentLang = 'sk';

  const I18N = {
    sk: {
      title: 'Rigino Cuts Barbershop Sabinov | Pánske strihy, fade, brada | Online termín',
      metaDescription:
        'Rigino Cuts – barbershop v Sabinove (Hlavné 19). Pánske strihy, fade, úprava brady. Rezervácia online alebo na Instagrame @rigino.cuts.',
      nav: {
        services: 'Služby',
        portfolio: 'Portfólio',
        video: 'Video',
        kontakt: 'Kontakt',
        termin: 'Termín',
      },
      langGroupAria: 'Výber jazyka',
      badge: 'Barbershop od 2025',
      hero: {
        title: 'Rigino Cuts<br>Čisté fade. Silný štýl.',
        lead:
          'Moderný barber look inšpirovaný tvojím Instagram štýlom. Presné fade, čisté línie a výraz, ktorý zareže.',
        btnInstagram: 'Pozrieť Instagram',
        btnBook: 'Rezervovať termín',
      },
      preview: {
        text: 'Sleduj nás pre nové strihy, reels a barber inšpiráciu.',
        imgAlt: 'Náhľad profilu Rigino Cuts na Instagrame',
      },
      services: {
        title: 'Čo ponúkame',
        subtitle: 'Všetko pre čistý, moderný pánsky look.',
        freshFade: { t: 'Fresh fade', d: 'Presný prechod s ostrými líniami a čistým finišom.' },
        scissor: { t: 'Strihanie nožnicami', d: 'Tvar a štruktúra podľa tvojho individuálneho štýlu.' },
        beard: { t: 'Úprava brady', d: 'Línie brady, symetria a starostlivosť pre perfektný záver.' },
        combo: { t: 'Combo', d: 'Strih + brada ako kompletný signature look.' },
      },
      portfolio: {
        title: 'Portfólio',
        subtitle: 'Reálna práca z feedu v štýle Rigino.',
        meta1: 'Čerstvé fade a čisté línie na zátylku.',
        meta2: 'Branding a social proof priamo z Instagramu.',
        alt1: 'Galeria moderných pánskych strihov a fade',
        alt2: 'Profil Rigino Cuts na Instagrame',
      },
      video: {
        title: 'Reel highlight',
        subtitle: 'Tvoje MP4 je priamo na stránke ako ukážka.',
        fallback: 'Tvoj prehliadač nevie prehrať toto video.',
        meta: 'Originálny reel: export SnapReels',
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Napíš nám ohľadom termínu.',
        phoneLine: 'Telefón: 0909 818 371',
        instaLine: 'Instagram: @rigino.cuts',
        card2Title: 'Termín priamo',
        card2Text: 'DM na Instagrame, hovor – alebo online rezervácia v kalendári.',
        onlineBtn: 'Online termín',
        callBtn: 'Zavolať',
      },
      footer: '© 2026 Rigino Cuts Barbershop',
      booking: {
        closeAria: 'Zavrieť',
        title: 'Rezervovať termín',
        hint:
          'Časy v <strong>20-minútovom intervale</strong>. Jeden termín zaberie <strong>40 minút</strong> (dva sloty) – ďalší voľný začiatok je preto neskôr.',
        pickDay: 'Vyber deň v kalendári.',
        slotHintPrefix: 'Časy pre ',
        slotHintSuffix: ' (iba voľné 40-min bloky)',
        prevMonthAria: 'Predchádzajúci mesiac',
        nextMonthAria: 'Ďalší mesiac',
        sundayTitle: 'Nedeľa zatvorená',
        formHeading: 'Tvoje údaje',
        firstName: 'Meno *',
        lastName: 'Priezvisko *',
        email: 'E-mail *',
        instagram: 'Instagram (voliteľné)',
        submit: 'Potvrdiť termín',
        errPick: 'Vyber deň a čas.',
        errRequired: 'Vyplň všetky povinné polia.',
        errEmail: 'Zadaj platný e-mail.',
        errTaken: 'Tento termín je už obsadený. Vyber iný čas.',
        success:
          'Termín je rezervovaný: {range} dňa {date}. (Demo – údaje len v tomto prehliadači.)',
        chosenPrefix: 'Vybrané: ',
        chosenMinutes: ' minút',
        slotDurationTitle: 'Trvanie: ',
        slotUntil: ' min (do ',
        slotTakenSuffix: ' (obsadené)',
        timeSuffix: '',
        timeSuffixClose: ')',
      },
      months: [
        'január',
        'február',
        'marec',
        'apríl',
        'máj',
        'jún',
        'júl',
        'august',
        'september',
        'október',
        'november',
        'december',
      ],
      calWeekdays: ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'],
    },
    de: {
      title: 'Rigino Cuts Barbershop Sabinov | Herrenhaarschnitt, Fade, Bart | Online-Termin',
      metaDescription:
        'Rigino Cuts Barbershop in Sabinov (Hlavné 19): Herrenhaarschnitt, Fade, Bartpflege. Termin online buchen oder per Instagram @rigino.cuts.',
      nav: {
        services: 'Leistungen',
        portfolio: 'Portfolio',
        video: 'Video',
        kontakt: 'Kontakt',
        termin: 'Termin',
      },
      langGroupAria: 'Sprachwahl',
      badge: 'Barbershop seit 2025',
      hero: {
        title: "Rigino Cuts<br>Cleane Fades. Starker Style.",
        lead:
          'Moderner Barber-Look inspiriert von deinem Insta-Style. Praezise Fades, saubere Konturen und ein Auftritt, der direkt auffaellt.',
        btnInstagram: 'Instagram ansehen',
        btnBook: 'Termin buchen',
      },
      preview: {
        text: 'Folge uns fuer neue Cuts, Reels und frische Barber-Inspiration.',
        imgAlt: 'Rigino Cuts Instagram Vorschau',
      },
      services: {
        title: 'Was wir anbieten',
        subtitle: 'Alles fuer einen sauberen, modernen Herrenlook.',
        freshFade: { t: 'Fresh Fade', d: 'Praeziser Uebergang mit exakter Kontur und cleanem Finish.' },
        scissor: { t: 'Scissor Cut', d: 'Form und Struktur fuer deinen individuellen Style.' },
        beard: { t: 'Beard Trim', d: 'Bartlinien, Symmetrie und Pflege fuer den perfekten Abschluss.' },
        combo: { t: 'Combo', d: 'Haircut plus Beard Service als kompletter Signature-Look.' },
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Echte Arbeiten aus deinem Feed im Rigino-Look.',
        meta1: 'Frische Fades und saubere Nackenlinien.',
        meta2: 'Branding und Social Proof direkt aus Instagram.',
        alt1: 'Galerie moderner Herrenhaarschnitte und Fades',
        alt2: 'Rigino Cuts Instagram Profil',
      },
      video: {
        title: 'Reel Highlight',
        subtitle: 'Dein MP4 ist als Showcase direkt integriert.',
        fallback: 'Dein Browser kann das Video nicht abspielen.',
        meta: 'Original Reel: SnapReels-Export',
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Schreib uns fuer deinen Termin.',
        phoneLine: 'Telefon: 0909 818 371',
        instaLine: 'Instagram: @rigino.cuts',
        card2Title: 'Termin direkt',
        card2Text: 'DM auf Instagram, Anruf - oder buche online mit Kalender.',
        onlineBtn: 'Online Termin',
        callBtn: 'Anrufen',
      },
      footer: '© 2026 Rigino Cuts Barbershop',
      booking: {
        closeAria: 'Schliessen',
        title: 'Termin buchen',
        hint:
          'Zeiten im <strong>20-Minuten-Raster</strong>. Ein Termin belegt <strong>40 Minuten</strong> (zwei Slots) - der naechste freie Start ist dementsprechend spaeter.',
        pickDay: 'Waehle einen Tag im Kalender.',
        slotHintPrefix: 'Uhrzeiten fuer ',
        slotHintSuffix: ' (nur freie 40-Min-Bloecke)',
        prevMonthAria: 'Vorheriger Monat',
        nextMonthAria: 'Naechster Monat',
        sundayTitle: 'Sonntag geschlossen',
        formHeading: 'Deine Daten',
        firstName: 'Vorname *',
        lastName: 'Nachname *',
        email: 'E-Mail *',
        instagram: 'Instagram (optional)',
        submit: 'Termin bestaetigen',
        errPick: 'Bitte Tag und Uhrzeit waehlen.',
        errRequired: 'Bitte alle Pflichtfelder ausfuellen.',
        errEmail: 'Bitte eine gueltige E-Mail eingeben.',
        errTaken: 'Dieser Termin ist gerade schon weg. Waehle bitte eine andere Zeit.',
        success:
          'Termin ist gebucht: {range} am {date}. (Demo – Daten nur in diesem Browser gespeichert.)',
        chosenPrefix: 'Gewaehlt: ',
        chosenMinutes: ' Minuten',
        slotDurationTitle: 'Dauer: ',
        slotUntil: ' Min (bis ',
        slotTakenSuffix: ' (belegt)',
        timeSuffix: ' Uhr',
        timeSuffixClose: ')',
      },
      months: [
        'Januar',
        'Februar',
        'Maerz',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
      ],
      calWeekdays: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    },
    en: {
      title: "Rigino Cuts Barbershop Sabinov | Men's cuts, fades, beard | Book online",
      metaDescription:
        "Rigino Cuts barbershop in Sabinov (Hlavné 19): men's haircuts, fades, beard trims. Book online or via Instagram @rigino.cuts.",
      nav: {
        services: 'Services',
        portfolio: 'Portfolio',
        video: 'Video',
        kontakt: 'Contact',
        termin: 'Booking',
      },
      langGroupAria: 'Language',
      badge: 'Barbershop since 2025',
      hero: {
        title: 'Rigino Cuts<br>Clean fades. Strong style.',
        lead:
          'A modern barber look inspired by your Instagram vibe. Sharp fades, clean lines, and a look that stands out.',
        btnInstagram: 'View Instagram',
        btnBook: 'Book a slot',
      },
      preview: {
        text: 'Follow us for new cuts, reels, and fresh barber inspiration.',
        imgAlt: 'Rigino Cuts Instagram preview',
      },
      services: {
        title: 'What we offer',
        subtitle: 'Everything for a clean, modern men\'s look.',
        freshFade: { t: 'Fresh fade', d: 'Precise blend, sharp lines, and a clean finish.' },
        scissor: { t: 'Scissor cut', d: 'Shape and structure tailored to your style.' },
        beard: { t: 'Beard trim', d: 'Beard lines, symmetry, and care for a polished finish.' },
        combo: { t: 'Combo', d: 'Haircut plus beard as a full signature look.' },
      },
      portfolio: {
        title: 'Portfolio',
        subtitle: 'Real work from the feed in the Rigino style.',
        meta1: 'Fresh fades and clean neckline work.',
        meta2: 'Branding and social proof straight from Instagram.',
        alt1: "Gallery of modern men's cuts and fades",
        alt2: 'Rigino Cuts Instagram profile',
      },
      video: {
        title: 'Reel highlight',
        subtitle: 'Your MP4 is embedded on the page as a showcase.',
        fallback: 'Your browser cannot play this video.',
        meta: 'Original reel: SnapReels export',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Message us about your appointment.',
        phoneLine: 'Phone: 0909 818 371',
        instaLine: 'Instagram: @rigino.cuts',
        card2Title: 'Book directly',
        card2Text: 'DM on Instagram, call – or book online with the calendar.',
        onlineBtn: 'Book online',
        callBtn: 'Call',
      },
      footer: '© 2026 Rigino Cuts Barbershop',
      booking: {
        closeAria: 'Close',
        title: 'Book an appointment',
        hint:
          'Times in <strong>20-minute</strong> steps. One booking uses <strong>40 minutes</strong> (two slots), so the next available start is later.',
        pickDay: 'Pick a day in the calendar.',
        slotHintPrefix: 'Times for ',
        slotHintSuffix: ' (only free 40-minute blocks)',
        prevMonthAria: 'Previous month',
        nextMonthAria: 'Next month',
        sundayTitle: 'Closed on Sundays',
        formHeading: 'Your details',
        firstName: 'First name *',
        lastName: 'Last name *',
        email: 'Email *',
        instagram: 'Instagram (optional)',
        submit: 'Confirm booking',
        errPick: 'Please pick a day and time.',
        errRequired: 'Please fill in all required fields.',
        errEmail: 'Please enter a valid email.',
        errTaken: 'That slot was just taken. Please choose another time.',
        success: 'Booking saved: {range} on {date}. (Demo – data stored only in this browser.)',
        chosenPrefix: 'Selected: ',
        chosenMinutes: ' minutes',
        slotDurationTitle: 'Duration: ',
        slotUntil: ' min (until ',
        slotTakenSuffix: ' (taken)',
        timeSuffix: '',
        timeSuffixClose: ')',
      },
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      calWeekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  };

  function pick(path) {
    const parts = path.split('.');
    let cur = /** @type {unknown} */ (I18N[currentLang]);
    for (const p of parts) {
      cur = cur[p];
    }
    return /** @type {string} */ (cur);
  }

  function pickMonths() {
    return I18N[currentLang].months;
  }

  function b() {
    return I18N[currentLang].booking;
  }

  function applyTemplate(str, vars) {
    let out = str;
    for (const k of Object.keys(vars)) {
      out = out.split('{' + k + '}').join(vars[k]);
    }
    return out;
  }

  function applyStaticI18n() {
    document.documentElement.lang = currentLang === 'sk' ? 'sk' : currentLang === 'de' ? 'de' : 'en';
    document.title = I18N[currentLang].title;

    const metaDesc = document.getElementById('meta-description');
    if (metaDesc && I18N[currentLang].metaDescription) {
      metaDesc.setAttribute('content', I18N[currentLang].metaDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = pick(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = pick(key);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      el.setAttribute('alt', pick(key));
    });

    const langGroup = document.getElementById('lang-switch');
    if (langGroup) {
      langGroup.setAttribute('aria-label', I18N[currentLang].langGroupAria);
    }

    const closeBtn = document.querySelector('.booking-modal__close');
    if (closeBtn) {
      closeBtn.setAttribute('aria-label', b().closeAria);
    }

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      const code = btn.getAttribute('data-set-lang');
      btn.classList.toggle('is-active', code === currentLang);
      btn.setAttribute('aria-pressed', code === currentLang ? 'true' : 'false');
    });

    const calWeekRow = document.querySelector('.cal-weekdays');
    if (calWeekRow) {
      const names = I18N[currentLang].calWeekdays;
      const spans = calWeekRow.querySelectorAll('span');
      names.forEach(function (name, i) {
        if (spans[i]) spans[i].textContent = name;
      });
    }

    if (calPrev) calPrev.setAttribute('aria-label', b().prevMonthAria);
    if (calNext) calNext.setAttribute('aria-label', b().nextMonthAria);
  }

  function loadLang() {
    try {
      const v = localStorage.getItem(LANG_KEY);
      if (v === 'sk' || v === 'de' || v === 'en') return v;
    } catch (_) {}
    return 'sk';
  }

  function saveLang(code) {
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch (_) {}
  }

  function setLang(code) {
    if (code !== 'sk' && code !== 'de' && code !== 'en') return;
    currentLang = code;
    saveLang(code);
    applyStaticI18n();
    renderMonth();
    if (selectedYmd) {
      renderSlots();
    } else {
      slotWrap.innerHTML = '';
      slotDayHint.textContent = b().pickDay;
    }
  }

  /** @returns {number} */
  function lastValidStartMinute() {
    return SHOP_CLOSE_H * 60 - BOOKING_MINUTES;
  }

  function allStartSlots() {
    const out = [];
    const startM = SHOP_OPEN_H * 60;
    const endM = lastValidStartMinute();
    for (let m = startM; m <= endM; m += SLOT_MINUTES) {
      out.push(m);
    }
    return out;
  }

  function pad2(n) {
    return String(n).padStart(2, '0');
  }

  function toYmd(d) {
    return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
  }

  function parseYmd(ymd) {
    const [y, m, day] = ymd.split('-').map(Number);
    return new Date(y, m - 1, day);
  }

  function formatTimeLabel(minutesFromMidnight) {
    const h = Math.floor(minutesFromMidnight / 60);
    const m = minutesFromMidnight % 60;
    return h + ':' + pad2(m) + b().timeSuffix;
  }

  function formatRange(startMin) {
    const endMin = startMin + BOOKING_MINUTES;
    return formatTimeLabel(startMin) + ' - ' + formatTimeLabel(endMin);
  }

  function intervalsOverlap(aStart, aLen, bStart, bLen) {
    return aStart < bStart + bLen && bStart < aStart + aLen;
  }

  function loadBookings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function saveBookings(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isStartTimeFree(ymd, startMin, bookings) {
    for (const b of bookings) {
      if (b.date !== ymd) continue;
      if (intervalsOverlap(startMin, BOOKING_MINUTES, b.startMin, BOOKING_MINUTES)) {
        return false;
      }
    }
    return true;
  }

  const modal = document.getElementById('booking-modal');
  const calGrid = document.getElementById('cal-grid');
  const calMonthLabel = document.getElementById('cal-month-label');
  const calPrev = document.getElementById('cal-prev');
  const calNext = document.getElementById('cal-next');
  const slotWrap = document.getElementById('slot-wrap');
  const slotDayHint = document.getElementById('slot-day-hint');
  const form = document.getElementById('booking-form');
  const formTimeDisplay = document.getElementById('form-time-display');
  const formError = document.getElementById('form-error');
  const formSuccess = document.getElementById('form-success');
  const btnSubmit = document.getElementById('btn-submit-booking');

  let viewYear = new Date().getFullYear();
  let viewMonth = new Date().getMonth();
  /** @type {string | null} */
  let selectedYmd = null;
  /** @type {number | null} */
  let selectedStartMin = null;

  function isPastDay(ymd) {
    const d = parseYmd(ymd);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    d.setHours(0, 0, 0, 0);
    return d < today;
  }

  function isSunday(ymd) {
    return parseYmd(ymd).getDay() === 0;
  }

  function openModal() {
    const today = new Date();
    viewYear = today.getFullYear();
    viewMonth = today.getMonth();
    selectedYmd = null;
    selectedStartMin = null;
    btnSubmit.disabled = true;
    formTimeDisplay.hidden = true;
    formSuccess.hidden = true;
    formError.hidden = true;
    form.reset();

    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
    applyStaticI18n();
    renderMonth();
    slotWrap.innerHTML = '';
    slotDayHint.textContent = b().pickDay;
  }

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
  }

  function renderMonth() {
    const months = pickMonths();
    calMonthLabel.textContent = months[viewMonth].charAt(0).toUpperCase() + months[viewMonth].slice(1) + ' ' + viewYear;

    const first = new Date(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0).getDate();
    const mondayOffset = (first.getDay() + 6) % 7;

    calGrid.innerHTML = '';
    for (let i = 0; i < mondayOffset; i++) {
      const el = document.createElement('div');
      el.className = 'cal-cell cal-cell--empty';
      calGrid.appendChild(el);
    }

    for (let day = 1; day <= lastDay; day++) {
      const d = new Date(viewYear, viewMonth, day);
      const ymd = toYmd(d);
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'cal-day';
      cell.textContent = String(day);
      cell.dataset.ymd = ymd;

      if (isPastDay(ymd) || isSunday(ymd)) {
        cell.disabled = true;
        cell.classList.add('cal-day--off');
        cell.title = isSunday(ymd) ? b().sundayTitle : '';
      } else {
        if (ymd === selectedYmd) cell.classList.add('is-selected');
        cell.addEventListener('click', function () {
          document.querySelectorAll('.cal-day.is-selected').forEach(function (n) {
            n.classList.remove('is-selected');
          });
          cell.classList.add('is-selected');
          selectedYmd = ymd;
          selectedStartMin = null;
          btnSubmit.disabled = true;
          formTimeDisplay.hidden = true;
          form.reset();
          formSuccess.hidden = true;
          formError.hidden = true;
          renderSlots();
        });
      }
      calGrid.appendChild(cell);
    }
  }

  function formatDayLabel(d) {
    const months = pickMonths();
    return pad2(d.getDate()) + '. ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  function renderSlots() {
    if (!selectedYmd) {
      slotWrap.innerHTML = '';
      return;
    }

    const bookings = loadBookings();
    const d = parseYmd(selectedYmd);
    const label = formatDayLabel(d);
    slotDayHint.textContent = b().slotHintPrefix + label + b().slotHintSuffix;

    slotWrap.innerHTML = '';
    const slots = allStartSlots();
    for (const startMin of slots) {
      const free = isStartTimeFree(selectedYmd, startMin, bookings);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-btn';
      btn.textContent = formatTimeLabel(startMin);
      btn.title =
        b().slotDurationTitle +
        BOOKING_MINUTES +
        b().slotUntil +
        formatTimeLabel(startMin + BOOKING_MINUTES) +
        b().timeSuffixClose;

      if (!free) {
        btn.disabled = true;
        btn.classList.add('slot-btn--taken');
        btn.textContent = formatTimeLabel(startMin) + b().slotTakenSuffix;
      } else {
        if (startMin === selectedStartMin) btn.classList.add('is-selected');
        btn.addEventListener('click', function () {
          document.querySelectorAll('.slot-btn.is-selected').forEach(function (n) {
            n.classList.remove('is-selected');
          });
          btn.classList.add('is-selected');
          selectedStartMin = startMin;
          formTimeDisplay.textContent =
            b().chosenPrefix +
            label +
            ', ' +
            formatRange(startMin) +
            ' (' +
            BOOKING_MINUTES +
            b().chosenMinutes +
            ')';
          formTimeDisplay.hidden = false;
          btnSubmit.disabled = false;
          formSuccess.hidden = true;
        });
      }
      slotWrap.appendChild(btn);
    }
  }

  calPrev.addEventListener('click', function () {
    if (viewMonth === 0) {
      viewMonth = 11;
      viewYear -= 1;
    } else {
      viewMonth -= 1;
    }
    selectedYmd = null;
    selectedStartMin = null;
    btnSubmit.disabled = true;
    formTimeDisplay.hidden = true;
    renderMonth();
    slotWrap.innerHTML = '';
    slotDayHint.textContent = b().pickDay;
  });

  calNext.addEventListener('click', function () {
    if (viewMonth === 11) {
      viewMonth = 0;
      viewYear += 1;
    } else {
      viewMonth += 1;
    }
    selectedYmd = null;
    selectedStartMin = null;
    btnSubmit.disabled = true;
    formTimeDisplay.hidden = true;
    renderMonth();
    slotWrap.innerHTML = '';
    slotDayHint.textContent = b().pickDay;
  });

  document.querySelectorAll('.js-open-booking').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  document.querySelectorAll('.js-close-booking').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.classList.contains('booking-modal__overlay')) e.preventDefault();
      closeModal();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formError.hidden = true;
    formSuccess.hidden = true;

    if (!selectedYmd || selectedStartMin == null) {
      formError.textContent = b().errPick;
      formError.hidden = false;
      return;
    }

    const vorname = document.getElementById('f-vorname').value.trim();
    const nachname = document.getElementById('f-nachname').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const instagram = document.getElementById('f-instagram').value.trim();

    if (!vorname || !nachname || !email) {
      formError.textContent = b().errRequired;
      formError.hidden = false;
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formError.textContent = b().errEmail;
      formError.hidden = false;
      return;
    }

    const bookings = loadBookings();
    if (!isStartTimeFree(selectedYmd, selectedStartMin, bookings)) {
      formError.textContent = b().errTaken;
      formError.hidden = false;
      renderSlots();
      return;
    }

    bookings.push({
      date: selectedYmd,
      startMin: selectedStartMin,
      vorname: vorname,
      nachname: nachname,
      email: email,
      instagram: instagram || '',
      createdAt: new Date().toISOString(),
    });
    saveBookings(bookings);

    formSuccess.textContent = applyTemplate(b().success, {
      range: formatRange(selectedStartMin),
      date: selectedYmd,
    });
    formSuccess.hidden = false;
    btnSubmit.disabled = true;
    selectedStartMin = null;
    form.reset();
    formTimeDisplay.hidden = true;
    renderSlots();
  });

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const code = btn.getAttribute('data-set-lang');
      if (code === 'sk' || code === 'de' || code === 'en') {
        setLang(code);
      }
    });
  });

  currentLang = loadLang();
  applyStaticI18n();
  renderMonth();
})();
