// WhatsApp click-to-chat link:
const WHATSAPP_NUMBER = "972524559888";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function initWhatsappLinks() {
  const mainBtn = document.getElementById("whatsapp-btn");
  const inlineLink = document.getElementById("whatsapp-link-inline");

  if (mainBtn) mainBtn.href = WHATSAPP_URL;
  if (inlineLink) inlineLink.href = WHATSAPP_URL;
}

// Simple i18n
const translations = {
  he: {
    brand: "CAR2U",
    navServices: "השירותים שלנו",
    navSocial: "רשתות חברתיות",
    navContact: "צור קשר",

    heroTitle: "טרייד אין לרכב ב־CAR2U",
    heroSubtitle: "קנייה, מכירה והחלפת רכבים בתנאים הוגנים ושקופים.",
    heroWhatsapp: "כתבו לנו ב־WhatsApp",
    heroVisit: "איך להגיע אלינו",

    heroHighlightTitle: "הערכת מחיר מהירה",
    heroHighlightText:
      "שלחו לנו פרטי רכב ותמונה ב־WhatsApp וקבלו הערכת מחיר ללא התחייבות.",

    servicesTitle: "מה אנחנו מציעים",
    serviceTradeInTitle: "טרייד אין נוח",
    serviceTradeInText:
      "מחליפים את הרכב הישן בחדש - עם ליווי צמוד בכל שלב העסקה.",
    serviceBuyTitle: "קניית רכבים",
    serviceBuyText:
      "קונים רכבים במצב טוב, מטפלים בכל הניירת בשבילכם.",
    serviceSellTitle: "מכירת רכבים",
    serviceSellText:
      "מציעים מבחר רכבים שעברו בדיקות קפדניות והיסטוריית טיפולים.",

    socialTitle: "עקבו אחרינו ברשתות",
    instagramHint: "הפיד המלא מופיע באינסטגרם. כאן תוכלו לראות פוסט נבחר.",
    instagramPlaceholder: "כאן יופיע פוסט מוטמע מאינסטגרם.",
    facebookHint: "עדכונים שוטפים מהעמוד הרשמי שלנו.",

    contactTitle: "יצירת קשר",
    contactPhoneLabel: "טלפון / WhatsApp:",
    contactAddressLabel: "כתובת:",
    contactAddressText: "רחוב מאיר אריאל 14, כפר סבא",
    contactWorkingHours:
      "נא לתאם הגעה מראש בטלפון או ב־WhatsApp.",

    mapTitle: "איך להגיע",

    footerCopyright: "© 2025 CAR2U - כל הזכויות שמורות."
  },

  ru: {
    brand: "CAR2U",
    navServices: "Наши услуги",
    navSocial: "Мы в соцсетях",
    navContact: "Контакты",

    heroTitle: "Трейд-ин автомобилей в CAR2U",
    heroSubtitle:
      "Покупка, продажа и обмен автомобилей на понятных и честных условиях.",
    heroWhatsapp: "Написать в WhatsApp",
    heroVisit: "Как добраться",

    heroHighlightTitle: "Быстрая оценка автомобиля",
    heroHighlightText:
      "Отправьте детали и фото автомобиля в WhatsApp и получите предварительную оценку без обязательств.",

    servicesTitle: "Что мы предлагаем",
    serviceTradeInTitle: "Удобный трейд-ин",
    serviceTradeInText:
      "Обмен старого автомобиля на новый с сопровождением на всех этапах сделки.",
    serviceBuyTitle: "Покупка авто",
    serviceBuyText:
      "Покупаем автомобили в хорошем состоянии и берём на себя оформление документов.",
    serviceSellTitle: "Продажа авто",
    serviceSellText:
      "Предлагаем автомобили после тщательной технической проверки и проверки истории.",

    socialTitle: "Мы в соцсетях",
    instagramHint:
      "Полную ленту вы можете увидеть в Instagram. Здесь отображается выбранный пост.",
    instagramPlaceholder: "Здесь будет встроенный пост из Instagram.",
    facebookHint: "Актуальные новости с нашей официальной страницы.",

    contactTitle: "Связаться с нами",
    contactPhoneLabel: "Телефон / WhatsApp:",
    contactAddressLabel: "Адрес:",
    contactAddressText: "Улица Меир Ариэль 14, Кфар-Сава",
    contactWorkingHours:
      "Пожалуйста, договаривайтесь о визите заранее по телефону или WhatsApp.",

    mapTitle: "Как добраться",

    footerCopyright: "© 2025 CAR2U - все права защищены."
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "he" ? "he" : "ru";
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Default language: Hebrew
  setLanguage("he");
}

document.addEventListener("DOMContentLoaded", () => {
  initWhatsappLinks();
  initLanguageSwitcher();
});
