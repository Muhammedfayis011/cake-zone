// CAKE ZONE QATAR — Data Store
// Aligned with the Brand & Content Brief: "Thoughtful Gifts. Beautiful Memories."
// Doha, Qatar

export const BUSINESS_CONFIG = {
  name: "Cake Zone Qatar",
  tagline: "Thoughtful Gifts. Beautiful Memories.",
  subTagline: "A gifting-first digital catalogue and enquiry boutique",
  positioning: "Gifting & Celebration Boutique",
  phoneDisplay: "+974 5500 1234",
  phoneRaw: "97455001234",
  email: "enquiries@cakezone.qa",
  instagramHandle: "@cakezoneqatar",
  instagramUrl: "https://instagram.com/cakezoneqatar",
  location: "Lusail Marina & The Pearl, Doha, Qatar",
  deliveryAreas: "Doha, Lusail, The Pearl, Al Wakrah, Al Rayyan, West Bay, Al Khor & all Qatar municipalities",
  openingHours: "Daily: 9:00 AM – 11:00 PM (WhatsApp orders accepted 24/7)"
};

// Standard WhatsApp message generator as specified in Page 7 of Developer Brief
export function getProductWhatsAppUrl(productName, price = "") {
  const message = `Hello Cake Zone Qatar! 🎂

I would like to order / enquire about: *${productName}*${price ? ` (QAR ${price})` : ""}.
Could you please confirm the availability, custom options, and delivery details to my area?

Thank you!`;
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(subject = "") {
  let message = "";
  const subLower = (subject || "").toLowerCase();

  if (!subject || subLower.includes("general") || subLower.includes("floating") || subLower.includes("header") || subLower.includes("footer")) {
    message = `Hello Cake Zone Qatar! 🎂

I would like to explore your collection and place an order.
Could you please share your latest catalogue and delivery availability in Qatar?

Thank you!`;
  } else if (subLower.includes("hero") || subLower.includes("hamper") || subLower.includes("gift")) {
    message = `Hello Cake Zone Qatar! 🎁

I would like to enquire about your luxury gift hampers, artisan cakes, and celebration packages.
Could you please share the available options, prices, and same-day delivery details in Qatar?

Thank you!`;
  } else if (subLower.includes("flower")) {
    message = `Hello Cake Zone Qatar! 🌸

I would like to enquire about your fresh flower arrangements and bouquets.
Could you please share the available floral designs and same-day delivery details in Qatar?

Thank you!`;
  } else if (subLower.includes("chocolate")) {
    message = `Hello Cake Zone Qatar! 🍫

I would like to enquire about your luxury Belgian chocolates and praline gift boxes.
Could you please share the available collections and delivery details in Qatar?

Thank you!`;
  } else if (subLower.includes("combo")) {
    message = `Hello Cake Zone Qatar! 🎁

I would like to enquire about your combo gift sets (Cake, Flowers & Chocolates).
Could you please share the available packages and same-day delivery availability in Qatar?

Thank you!`;
  } else if (subLower.includes("occasion") || subLower.includes("planning")) {
    message = `Hello Cake Zone Qatar! 🎉

I am planning a special celebration and would love your recommendations.
Could you please share your recommended cakes, gift hampers, and custom options?

Thank you!`;
  } else {
    message = `Hello Cake Zone Qatar! 🎂

I would like to enquire about: *${subject}*.
Could you please share the available options, prices, and delivery details in Qatar?

Thank you!`;
  }
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function getOccasionWhatsAppUrl(occasion) {
  const message = `Hello Cake Zone Qatar! 🎉

I am planning a celebration for: *${occasion}*.
Could you please share your recommended gift hampers, custom cake options, and delivery availability in Qatar?

Thank you!`;
  return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
}

// 4 Primary Category Discovery Cards (Homepage Section 02)
export const discoveryCategories = [
  {
    id: "birthday",
    title: "Birthday Hampers",
    tagline: "Make their special day unforgettable",
    description: "Curated gift boxes with artisan sweets, balloons, and fragrant blooms.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    itemCount: "12 Curated Hampers"
  },
  {
    id: "chocolate",
    title: "Chocolate Hampers",
    tagline: "Pure indulgence & Belgian delights",
    description: "Handcrafted pralines, luxury truffles, and gold-dusted chocolate arrangements.",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    itemCount: "8 Luxury Boxes"
  },
  {
    id: "personalised",
    title: "Personalised Gifts",
    tagline: "Custom crafted with sentimental touch",
    description: "Bespoke gift boxes with monogrammed ribbons, custom cards, and keepsake treasures.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    itemCount: "Custom to Order"
  },
  {
    id: "corporate",
    title: "Corporate Gifts",
    tagline: "Sophisticated corporate appreciation",
    description: "Impress business partners and VIP clients with branded, luxury presentation.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80",
    itemCount: "Bulk & VIP Sets"
  }
];

// Hampers & Gifts Catalogue (Primary Business Focus)
export const hampersCatalogue = [
  {
    id: "hamper-01",
    name: "The Celebration Box",
    category: "Birthday",
    badge: "Most Popular",
    price: 450,
    shortDescription: "A grand celebration hamper featuring artisanal chocolates, fragrant seasonal flowers, and festive keepsake decor.",
    included: [
      "24 pcs Handcrafted Belgian Chocolate Pralines",
      "Petite pastel floral bouquet (Ecuadorian roses & baby breath)",
      "Luxury rigid keepsake box with golden satin ribbon",
      "Custom gold-foil embossed calligraphy greeting card",
      "Celebration balloon topper"
    ],
    customization: "Choose ribbon color (Gold, Rose, Ivory), custom message on acrylic plaque.",
    leadTime: "Same-Day Delivery Available (Order before 3 PM in Doha)",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80"
    ],
    isFeatured: true
  },
  {
    id: "hamper-02",
    name: "Sweet Moments Hamper",
    category: "Personalised",
    badge: "Boutique Choice",
    price: 380,
    shortDescription: "Delicate and warm, designed to bring heartfelt happiness with assorted macarons, honey cookies, and scented candle.",
    included: [
      "12 Gourmet French Macarons (Vanilla, Pistachio, Raspberry)",
      "Wildflower organic honey jar with wooden dipper",
      "Handmade soy wax scented candle (Vanilla & Jasmine)",
      "Curated ceramic mug & luxury tea infusion tin",
      "Suede keepsake box with personalized gold monogram"
    ],
    customization: "Custom name or initials stamped on the box lid.",
    leadTime: "Available for same-day delivery across Qatar",
    image: "/hero3.jpg",
    additionalImages: [
      "/hero2.jpg"
    ],
    isFeatured: true
  },
  {
    id: "hamper-03",
    name: "The Chocolate Lover's Box",
    category: "Chocolate",
    badge: "Chocolatier Edition",
    price: 320,
    shortDescription: "An exquisite sensory voyage featuring rare cocoa truffles, roasted nuts, and chocolate-dipped Medjool dates.",
    included: [
      "16 Dark Cocoa & Salted Caramel Truffles",
      "12 Stuffed Organic Medjool Dates with Almond & Pistachio",
      "Crispy Belgian Chocolate-coated Hazelnut Dragees (150g)",
      "Premium matte espresso gift packaging with wax seal"
    ],
    customization: "Sugar-free chocolate substitutions available on request.",
    leadTime: "Instant delivery in Doha & Lusail (2-3 hours)",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=80"
    ],
    isFeatured: true
  },
  {
    id: "hamper-04",
    name: "Little Surprise Hamper",
    category: "Birthday",
    badge: "Sweet Gesture",
    price: 220,
    shortDescription: "The ideal charming pick-me-up or spontaneous gesture to make someone's everyday extraordinary.",
    included: [
      "Mini box of 6 handcrafted chocolate bonbons",
      "Petite flower posy in glass bud vase",
      "Handmade artisan butter cookies (100g)",
      "Cake Zone signature kraft gift bag with satin bow"
    ],
    customization: "Custom card message included.",
    leadTime: "Same-Day Delivery Available",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80",
    isFeatured: true
  },
  {
    id: "hamper-05",
    name: "Premium Signature Hamper",
    category: "Premium",
    badge: "Royal Luxury",
    price: 680,
    shortDescription: "Our flagship luxury creation showcasing royal dates, Arabian oud fragrance accents, fine confectionary, and garden roses.",
    included: [
      "Large handcrafted velvet trunk with gold brass hardware",
      "Premium Ecuadorian Long-Stem Preserved Rose arrangement",
      "Assorted gourmet chocolate truffles & pecan clusters (500g)",
      "Handmade French Nougat & caramelized nuts",
      "Mini artisanal home fragrance spray & scented reed diffuser",
      "Custom calligraphy greeting card with wax stamp"
    ],
    customization: "Full bespoke customization available for VIP gifting.",
    leadTime: "Please order 24 hours in advance",
    image: "/hero1.jpg",
    additionalImages: [
      "/hero2.jpg"
    ],
    isFeatured: true
  },
  {
    id: "hamper-06",
    name: "The Perfect Thank You Gift",
    category: "Corporate",
    badge: "Executive",
    price: 360,
    shortDescription: "A refined expression of sincere appreciation tailored for mentors, colleagues, clients, and dear hosts.",
    included: [
      "Specialty single-origin Arabica coffee beans (250g)",
      "Assorted Belgian chocolate wafers and almond biscotti",
      "Handmade porcelain tumbler",
      "Elegant wooden presentation box with slide lid",
      "Custom letterpress thank you card"
    ],
    customization: "Corporate logo placement available for orders of 5+",
    leadTime: "Same-day or scheduled business delivery",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80",
    isFeatured: true
  },
  {
    id: "hamper-07",
    name: "Newborn Blessing Basket",
    category: "Personalised",
    badge: "New Arrival",
    price: 490,
    shortDescription: "Welcoming the newest miracle with gentle organic keepsakes, celebration sweets for parents, and cute teddy plush.",
    included: [
      "Super-soft organic cotton newborn plush companion",
      "Baby announcement wooden plaque with birth stats details",
      "12 Celebration chocolate pralines for parents",
      "Natural baby bath essentials & gentle organic swaddle",
      "Woven keepsake wicker basket with satin pastel ribbon"
    ],
    customization: "Available in Powder Blue, Blush Rose, or Neutral Sand theme.",
    leadTime: "Hospital room or home delivery across Qatar",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",
    isFeatured: false
  },
  {
    id: "hamper-08",
    name: "Ramadan & Eid Mubarak Trunk",
    category: "Premium",
    badge: "Seasonal Special",
    price: 580,
    shortDescription: "Celebrate holy moments with premium stuffed dates, saffron sweets, Turkish delight, and Crescent brass adornments.",
    included: [
      "Crescent moon luxury brass display ornament",
      "Hand-selected Medjool dates stuffed with walnuts, candied orange & pistachios",
      "Artisanal saffron & cardamom shortbread biscuits",
      "Traditional Arabic coffee (Gahwa) curated blend",
      "Gold-embossed Eid Mubarak gift box with silk tassel"
    ],
    customization: "Custom Arabic calligraphy name tag.",
    leadTime: "Seasonal limited batch — pre-order recommended",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=80",
    isFeatured: false
  }
];

// Occasions Catalogue (Page 3 Section 04 & Page 5 Section 04)
export const occasionsData = [
  {
    id: "birthdays",
    title: "Birthdays",
    subtitle: "Make their yearly milestone unforgettable",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    description: "From cheerful surprise boxes packed with balloons and treats to luxury hampers that express just how much they mean to you.",
    recommendedHampers: ["The Celebration Box", "Little Surprise Hamper", "The Chocolate Lover's Box"]
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    subtitle: "Celebrate romance and shared journeys",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    description: "Romantic hampers paired with preserved roses, decadent chocolate truffles, and custom keepsake cards for that unforgettable evening.",
    recommendedHampers: ["Premium Signature Hamper", "Sweet Moments Hamper"]
  },
  {
    id: "newborn",
    title: "Newborn Celebrations",
    subtitle: "A heartfelt welcome to the little angel",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    description: "Gentle baby hampers delivered directly to maternity hospitals or homes in Doha, filled with sweet congratulations for mom and baby.",
    recommendedHampers: ["Newborn Blessing Basket", "Sweet Moments Hamper"]
  },
  {
    id: "corporate",
    title: "Corporate Gifting",
    subtitle: "Distinguished gestures for partners & teams",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80",
    description: "Elevate your brand presence across Qatar with tailored executive gift sets, VIP client appreciation boxes, and holiday distributions.",
    recommendedHampers: ["The Perfect Thank You Gift", "Premium Signature Hamper"]
  },
  {
    id: "eid-ramadan",
    title: "Eid & Ramadan",
    subtitle: "Cherished traditions of hospitality & blessings",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    description: "Gourmet dates, artisanal Arabic sweets, and elegant gold-accented trunks to honor family, friends, and esteemed colleagues.",
    recommendedHampers: ["Ramadan & Eid Mubarak Trunk", "The Chocolate Lover's Box"]
  },
  {
    id: "graduations",
    title: "Graduation & Success",
    subtitle: "Applaud ambition, dedication and triumph",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description: "Reward hard work and diploma milestones with triumphant celebration boxes, custom graduation toppers, and deluxe sweets.",
    recommendedHampers: ["The Celebration Box", "The Perfect Thank You Gift"]
  }
];

// Cakes & Treats Secondary Catalogue (Page 3 Section 06 & Page 5 Section 05)
export const cakesCatalogue = [
  {
    id: "cake-01",
    name: "Classic Honey Cake (Medovik)",
    category: "Celebration Cakes",
    price: 180,
    description: "Layers of caramelized wildflower honey biscuit sponge infused with light sour cream frosting and toasted crumb finish.",
    leadTime: "Same-Day Delivery in Doha",
    servings: "6-8 Portions",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-02",
    name: "Belgian Dark Chocolate Ganache",
    category: "Birthday Cakes",
    price: 210,
    description: "Moist chocolate sponge filled with 70% Callebaut dark chocolate ganache, topped with cocoa curls and 24k edible gold flakes.",
    leadTime: "Order 4 Hours in advance",
    servings: "8-10 Portions",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-03",
    name: "Red Velvet & Rose Petal Cake",
    category: "Celebration Cakes",
    price: 195,
    description: "Silky crimson sponge layered with vanilla bean cream cheese frosting and adorned with crystallised rose petals.",
    leadTime: "Same-Day Delivery Available",
    servings: "8-10 Portions",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-04",
    name: "Bespoke Custom Milestone Cake",
    category: "Customised Cakes",
    price: 320,
    description: "Handcrafted personalized multi-tiered celebration cake tailored with customized themes, floral toppers, or acrylic plaques.",
    leadTime: "Order 24-48 Hours in advance",
    servings: "12-16 Portions",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-05",
    name: "Artisan Cupcake Dozen",
    category: "Cupcakes & Desserts",
    price: 130,
    description: "Box of 12 delicate cupcakes: Salted Caramel, Belgian Chocolate, Tahitian Vanilla, and Pistachio Berry.",
    leadTime: "Same-Day Delivery",
    servings: "12 Cupcakes",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cake-06",
    name: "Celebration Cake & Hamper Duo",
    category: "Cake & Gift Combos",
    price: 390,
    description: "The ultimate duo: A 1kg signature Honey Cake paired alongside our luxury flower box & chocolate bonbons.",
    leadTime: "Order 12 Hours in advance",
    servings: "Combo Gift Set",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
  }
];

// Why Choose Us (Page 3 Section 05 & Page 10)
export const whyChooseUs = [
  {
    icon: "sparkles",
    title: "Thoughtfully Curated",
    description: "Every item in our hampers is selected for sensory delight, supreme quality, and lasting emotional resonance."
  },
  {
    icon: "gift",
    title: "Beautiful Presentation",
    description: "Signature rigid boxes, custom ribbon artistry, wax seals, and handwritten calligraphy elevate your gift into an unboxing ritual."
  },
  {
    icon: "calendar",
    title: "Gifts for Every Occasion",
    description: "From intimate birthday surprises and anniversaries to dignified corporate relationships and sacred Eid greetings."
  },
  {
    icon: "heart",
    title: "Personalised Experience",
    description: "Direct one-on-one consultation on WhatsApp to customize cards, packaging colors, and contents to your exact desire."
  }
];

// Instagram Grid (Page 3 Section 07)
export const instagramPosts = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    caption: "The Celebration Box in soft nude & gold ribbon. Delivered with love in Lusail today.",
    likes: "248"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    caption: "Bespoke birthday surprise for a VIP client at The Pearl Qatar.",
    likes: "312"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    caption: "Our signature multi-layer Honey Cake straight from our artisan kitchen.",
    likes: "420"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
    caption: "Handcrafted dark chocolate truffles prepared for our Corporate Holiday hampers.",
    likes: "189"
  },
  {
    id: "ig-5",
    image: "/hero1.jpg",
    caption: "Unboxing luxury. Details matter down to the wax seal and satin texture.",
    likes: "530"
  },
  {
    id: "ig-6",
    image: "/hero3.jpg",
    caption: "Sweet Moments Hamper with French macarons and lavender infusions.",
    likes: "374"
  }
];


// ============================================================
// CATEGORY CAROUSEL DATA — Cakes · Flowers · Chocolates · Combo Gifts
// ============================================================

export const cakesCarousel = [
  {
    id: "cc-1",
    name: "Classic Honey Cake (Medovik)",
    price: 180,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cc-2",
    name: "Belgian Dark Chocolate Ganache",
    price: 210,
    tag: "Chef's Choice",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cc-3",
    name: "Red Velvet & Rose Petal",
    price: 195,
    tag: "Romantic",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cc-4",
    name: "Bespoke Milestone Cake",
    price: 320,
    tag: "Custom",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cc-5",
    name: "Artisan Cupcake Dozen",
    price: 130,
    tag: "Party Pack",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cc-6",
    name: "Lemon Drizzle Celebration",
    price: 165,
    tag: "Fresh & Zesty",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
  },
];

export const flowersCarousel = [
  {
    id: "fc-1",
    name: "Ecuadorian Rose Bouquet",
    price: 220,
    tag: "Premium Roses",
    image: "https://images.unsplash.com/photo-1487530811015-780c0a3bb3a0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fc-2",
    name: "Pastel Peony & Baby Breath",
    price: 185,
    tag: "Soft & Dreamy",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7cf184b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fc-3",
    name: "Sunflower Sunshine Box",
    price: 160,
    tag: "Bright & Cheerful",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fc-4",
    name: "Preserved Forever Rose",
    price: 280,
    tag: "Lasts Forever",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fc-5",
    name: "Mixed Luxury Bloom Box",
    price: 310,
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1490750967868-88df5691cc5c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fc-6",
    name: "Tulips & Wildflowers",
    price: 145,
    tag: "Spring Vibes",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=600&q=80",
  },
];

export const chocolatesCarousel = [
  {
    id: "choc-1",
    name: "Belgian Truffle Collection",
    price: 145,
    tag: "16 Pcs",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "choc-2",
    name: "Gold-Dusted Praline Box",
    price: 195,
    tag: "24K Gold",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "choc-3",
    name: "Stuffed Medjool Dates",
    price: 120,
    tag: "Arabic Treat",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "choc-4",
    name: "Artisan Dark Cocoa Bar Set",
    price: 98,
    tag: "Single Origin",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "choc-5",
    name: "Hazelnut Dragée Tower",
    price: 175,
    tag: "Elegant Gift",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "choc-6",
    name: "Ramadan Chocolate Trunk",
    price: 265,
    tag: "Seasonal",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
  },
];

export const comboGiftsCarousel = [
  {
    id: "cg-1",
    name: "Cake & Roses Combo",
    price: 390,
    tag: "Most Loved",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cg-2",
    name: "Chocolate & Flowers Luxury",
    price: 450,
    tag: "Romantic",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cg-3",
    name: "Birthday Hamper Supreme",
    price: 520,
    tag: "Complete Set",
    image: "/hero2.jpg",
  },
  {
    id: "cg-4",
    name: "Sweet Moments Duo",
    price: 340,
    tag: "Value Pick",
    image: "/hero3.jpg",
  },
  {
    id: "cg-5",
    name: "Premium Signature Hamper",
    price: 680,
    tag: "Royal Luxury",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cg-6",
    name: "Eid Celebration Combo",
    price: 580,
    tag: "Seasonal Special",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
  },
];
