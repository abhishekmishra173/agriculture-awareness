// --- 1. Scroll Reveal Animations ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// --- 2. Functional: Ask an Officer Form ---
function handleFormSubmit(event) {
  event.preventDefault(); // Prevents page reload

  // Simulate sending data
  const btn = event.target.querySelector("button");
  const originalText = btn.innerText;
  btn.innerText = "Sending...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    // Reset form and show success message
    event.target.reset();
    btn.innerText = originalText;
    btn.style.opacity = "1";
    document.getElementById("successMessage").style.display = "block";

    // Hide success message after 5 seconds
    setTimeout(() => {
      document.getElementById("successMessage").style.display = "none";
    }, 5000);
  }, 1500);
}

// --- 3. Functional: Marketplace Logic ---
const marketData = [
  {
    name: "Organic Tomatoes",
    type: "organic",
    price: "₹40 / kg",
    vendor: "Farmer Ramesh",
    phone: "+91 98765 43210",
    desc: "Chemical-free, locally grown.",
  },
  {
    name: "Wheat (Lokwan)",
    type: "regular",
    price: "₹30 / kg",
    vendor: "Farmer Suresh",
    phone: "+91 87654 32109",
    desc: "High yield, standard farming.",
  },
  {
    name: "Organic Turmeric",
    type: "organic",
    price: "₹150 / kg",
    vendor: "Farmer Geeta",
    phone: "+91 76543 21098",
    desc: "High curcumin content, pure.",
  },
  {
    name: "Onions",
    type: "regular",
    price: "₹25 / kg",
    vendor: "Farmer Patil",
    phone: "+91 65432 10987",
    desc: "Fresh harvest from local fields.",
  },
];

function renderMarket(filterType) {
  const grid = document.getElementById("marketGrid");
  grid.innerHTML = ""; // Clear existing items

  marketData.forEach((item) => {
    if (filterType === "all" || item.type === filterType) {
      const isOrganic = item.type === "organic";
      const card = document.createElement("div");
      card.className = "card market-item reveal active";
      card.innerHTML = `
                <span class="tag ${isOrganic ? "organic" : ""}">${isOrganic ? "🌿 Organic" : "🚜 Standard"}</span>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="market-price">${item.price}</div>
                <p><small>Sold by: ${item.vendor}</small></p>
                
                <button class="btn btn-primary w-100" style="margin-top:15px; padding:8px; transition: 0.3s;" onclick="revealContact(this, '${item.phone}')">Contact Seller</button>
            `;
      grid.appendChild(card);
    }
  });
}

function revealContact(buttonElement, phone) {
  // 1. Change the text to show the phone number
  buttonElement.innerHTML = `📞 ${phone}`;

  // 2. Change the background color so it looks "active"
  buttonElement.style.backgroundColor = "var(--dark)";

  // 3. Make it so clicking it a second time opens the phone dialer (great for mobile)
  buttonElement.onclick = function () {
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
  };
}

// Handle Filter Button Clicks
function filterMarket(type) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderMarket(type);
}

// Initialize Market on load
renderMarket("all");

// --- 4. Multi-Language Translations ---
const translations = {
  en: {
    nav_home: "Home",
    nav_aware: "Awareness",
    nav_expert: "Expert Connect",
    nav_market: "Marketplace",
    nav_docs: "Architecture",
    hero_title: "Sustainable Farming for a Better Tomorrow",
    hero_desc:
      "Empowering farmers with technology, expert advice, and direct market access.",
    btn_start: "Get Started",
    feat_organic: "Organic Farming",
    desc_organic:
      "Transitioning to chemical-free agriculture for better health and soil.",
    feat_bio: "Bio-Diversity",
    desc_bio: "Promoting local crops and protecting indigenous plant species.",
    feat_soil: "Soil Protection",
    desc_soil: "Techniques to prevent erosion and maintain soil fertility.",
    form_desc:
      "Ask a question regarding plantation, soil, or government schemes.",
    form_select: "Select Issue Type",
    nav_logistics: "Logistics/Sales",
    form_submit: "Send to Officer",
    form_success:
      "Your request has been sent to the regional officer! They will contact you soon.",
    desc_sales: "Direct sales and logistics for agro products.",
    filter_all: "All",
    filter_org: "Organic",
    filter_reg: "Standard",
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_aware: "जागरूकता",
    nav_expert: "विशेषज्ञ संपर्क",
    nav_market: "बाज़ार",
    nav_docs: "संरचना",
    hero_title: "बेहतर कल के लिए टिकाऊ खेती",
    hero_desc:
      "तकनीक, विशेषज्ञ सलाह और सीधे बाजार पहुंच के साथ किसानों को सशक्त बनाना।",
    btn_start: "शुरू करें",
    feat_organic: "जैविक खेती",
    desc_organic: "बेहतर स्वास्थ्य और मिट्टी के लिए रसायन मुक्त कृषि अपनाएं।",
    feat_bio: "जैव विविधता",
    desc_bio: "स्थानीय फसलों को बढ़ावा देना और पौधों की रक्षा करना।",
    feat_soil: "मिट्टी की सुरक्षा",
    desc_soil: "क्षरण को रोकने और उर्वरता बनाए रखने की तकनीकें।",
    form_desc:
      "वृक्षारोपण, मिट्टी या सरकारी योजनाओं के बारे में एक प्रश्न पूछें।",
    form_select: "समस्या का प्रकार चुनें",
    nav_logistics: "रसद/बिक्री",
    form_submit: "अधिकारी को भेजें",
    form_success:
      "आपका अनुरोध क्षेत्रीय अधिकारी को भेज दिया गया है! वे जल्द ही आपसे संपर्क करेंगे।",
    desc_sales: "कृषि उत्पादों के लिए सीधी बिक्री और रसद।",
    filter_all: "सभी",
    filter_org: "जैविक",
    filter_reg: "सामान्य",
  },
  mr: {
    nav_home: "मुख्यपृष्ठ",
    nav_aware: "जागरूकता",
    nav_expert: "तज्ञ संपर्क",
    nav_market: "बाजारपेठ",
    nav_docs: "आर्किटेक्चर",
    hero_title: "चांगल्या भविष्यासाठी शाश्वत शेती",
    hero_desc:
      "तंत्रज्ञान, तज्ञ सल्ला आणि थेट बाजारपेठ प्रवेशासह शेतकऱ्यांना सक्षम करणे.",
    btn_start: "सुरुवात करा",
    feat_organic: "सेंद्रिय शेती",
    desc_organic: "उत्तम आरोग्य आणि मातीसाठी रसायने मुक्त शेतीकडे वळणे.",
    feat_bio: "जैव-विविधता",
    desc_bio: "स्थानिक पिकांना प्रोत्साहन देणे आणि वनस्पतींचे रक्षण करणे.",
    feat_soil: "मृदा संरक्षण",
    desc_soil: "धूप टाळण्यासाठी आणि सुपीकता राखण्यासाठी तंत्र.",
    form_desc: "वृक्षारोपण, माती किंवा सरकारी योजनांबाबत प्रश्न विचारा.",
    form_select: "समस्येचा प्रकार निवडा",
    nav_logistics: "लॉजिस्टिक्स/विक्री",
    form_submit: "अधिकाऱ्याला पाठवा",
    form_success:
      "तुमची विनंती प्रादेशिक अधिकाऱ्याला पाठवली गेली आहे! ते लवकरच तुमच्याशी संपर्क साधतील.",
    desc_sales: "कृषी उत्पादनांसाठी थेट विक्री आणि लॉजिस्टिक.",
    filter_all: "सर्व",
    filter_org: "सेंद्रिय",
    filter_reg: "सामान्य",
  },
};

document.getElementById("langSelect").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
});
