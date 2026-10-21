/**
 * BORNOBAZAR (বর্ণবাজার) — MASTER CLIENT LOGIC
 * Dynamic Catalog Engine, Interactive Cart & 1-Page Checkout
 * Zero-CORS, Offline & file:/// Protocol Compatible
 */

(function () {
  'use strict';

  // Master Embedded Catalog for 100% Reliability on file:/// protocol
  const MASTER_CATALOG = [
  {
    "id": "BB-COM-001",
    "wc_id": 387,
    "sku": "BB-COM-001",
    "name_bn": "৬ প্যাক আচার কম্বো",
    "name_en": "6 Pack Pickle Combo Box",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 1190,
    "regular_price": 1260,
    "sale_price": 1190,
    "on_sale": true,
    "weights": [
      "1.2 kg",
      "1.5 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 1190,
      "1.5 kg": 1260
    },
    "primary_image": "All images/724500930_995387276435925_6032589404291467890_n.jpg",
    "images": [
      "All images/724500930_995387276435925_6032589404291467890_n.jpg",
      "All images/727178380_1000519899255996_2655265046366657821_n.avif",
      "All images/848697967_1097457239562261_3710376585781267984_n.jpg"
    ],
    "description": "৬টি ভিন্ন স্বাদের ঐতিহ্যবাহী আচারের আকর্ষণীয় গিফট বক্স কম্বো। এতে থাকে তেঁতুল, বরই, আলুবোখারা, রসুন, কালোজিরা ও রসুন-কালোজিরা মিক্স আচার।",
    "facts": "SKU: SIX. Contains 6 custom glass jars in presentation corrugated gift box. Certified pure mustard oil used.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-COM-006",
    "wc_id": 399,
    "sku": "BB-COM-006",
    "name_bn": "নিউট্রি আচার কম্বো",
    "name_en": "Nutri Pickle Combo",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 890,
    "regular_price": 1090,
    "sale_price": 890,
    "on_sale": true,
    "weights": [
      "800 gm",
      "1 kg"
    ],
    "weight_pricing": {
      "800 gm": 890,
      "1 kg": 1090
    },
    "primary_image": "All images/788601539_1056888763619109_5968941487902862885_n.jpg",
    "images": [
      "All images/788601539_1056888763619109_5968941487902862885_n.jpg",
      "All images/763119781_1036789238962395_556104667287490302_n.jpg",
      "All images/793948103_1062851059689546_71523500391952332_n.jpg",
      "All images/825267211_1082703757704276_1620382417245826037_n.jpg"
    ],
    "description": "স্বাস্থ্য ও পুষ্টিগুণে ভরপুর রসুনের আচার ও কালোজিরা আচারের স্বাস্থ্যকর কম্বিনেশন। রোগ প্রতিরোধ ক্ষমতা বাড়াতে অনন্য।",
    "facts": "SKU: NUT. High-immunity medicinal ingredients. Pure mustard oil, black cumin, garlic cloves.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-002",
    "wc_id": 318,
    "sku": "BB-ACH-002",
    "name_bn": "আলুবোখারা আচার",
    "name_en": "Alubokhara Pickle (Dried Plum)",
    "category": "আচার",
    "type": "variable",
    "base_price": 240,
    "regular_price": 1190,
    "sale_price": 240,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 240,
      "250 gm": 300,
      "400 gm": 480,
      "500 gm": 600,
      "1000 gm": 1190
    },
    "primary_image": "All images/779787836_1049495257691793_4108399455579486072_n.jpg",
    "images": [
      "All images/779787836_1049495257691793_4108399455579486072_n.jpg",
      "All images/749629268_1025789830062336_2031561509353209987_n.jpg",
      "All images/758028521_1027515789889740_6023562320317004522_n.jpg",
      "All images/770402908_1039143195393666_1150160617011956232_n.jpg",
      "All images/782385555_1051874154120570_6892737120570860453_n.jpg",
      "All images/811170792_1071210665520252_6179027633815444499_n.jpg"
    ],
    "description": "বিএসটিআই অনুমোদিত রাজকীয় স্বাদের আলুবোখারা আচার। পোলাও, বিরিয়ানি ও খিচুড়ির সাথে অনন্য স্বাদ।",
    "facts": "SKU: DPL. BSTI BDS:CAC-260 Certified. Ingredients: Alubokhara, mustard oil, sugar, dried chili, panch phoron.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-007",
    "wc_id": 298,
    "sku": "BB-ACH-007",
    "name_bn": "তেঁতুল আচার",
    "name_en": "Tamarind Pickle (Tetul)",
    "category": "আচার",
    "type": "variable",
    "base_price": 190,
    "regular_price": 850,
    "sale_price": 190,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 190,
      "250 gm": 240,
      "400 gm": 380,
      "500 gm": 480,
      "1000 gm": 850
    },
    "primary_image": "All images/758543601_1029173546390631_766226898798539780_n.jpg",
    "images": [
      "All images/758543601_1029173546390631_766226898798539780_n.jpg",
      "All images/745542001_1017265394248113_2536519780313150314_n.jpg",
      "All images/766915142_1039333848707934_5144595149071355671_n.jpg",
      "All images/778958074_1047028264605159_886539686199328965_n.jpg",
      "All images/813774081_1073010328673619_3149648999492113390_n.jpg",
      "All images/813976083_1073010388673613_8899924605867364727_n.jpg",
      "All images/847553371_1097790279528957_1434705910271047438_n.jpg"
    ],
    "description": "পাকা দেশি তেঁতুলের ঘন টক-ঝাল-মিষ্টি আচার। ছোটবেলার স্মৃতির মতো খাঁটি ও নস্টালজিক স্বাদ।",
    "facts": "SKU: TAM. Deshi ripe tamarind, mustard oil, bit laban (black salt), roasted chili, sugar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-012",
    "wc_id": 315,
    "sku": "BB-ACH-012",
    "name_bn": "রসুন আচার (স্পেশাল টুইস্ট)",
    "name_en": "Garlic & Black Cumin Mixed Pickle",
    "category": "আচার",
    "type": "variable",
    "base_price": 240,
    "regular_price": 1190,
    "sale_price": 240,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 240,
      "250 gm": 300,
      "400 gm": 480,
      "500 gm": 600,
      "1000 gm": 1190
    },
    "primary_image": "All images/761355190_1034052569236062_78667506752820005_n.jpg",
    "images": [
      "All images/761355190_1034052569236062_78667506752820005_n.jpg",
      "All images/778279709_1047741551200497_8987538511452370084_n.jpg",
      "All images/787941913_1057022130272439_877379254859141080_n.jpg",
      "All images/833907381_1087793733861945_4483365456992151835_n.jpg"
    ],
    "description": "বিএসটিআই অনুমোদিত প্রিমিয়াম রসুন ও কালোজিরার পুষ্টিকর মেলবন্ধন। সাদামাটা খাবারেও যোগ করে আচারের স্পেশাল টুইস্ট।",
    "facts": "SKU: GBCM. BSTI BDS:CAC-260 Certified. Whole peeled garlic, black cumin seeds, mustard oil, secret spices.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-009",
    "wc_id": 302,
    "sku": "BB-ACH-009",
    "name_bn": "বরই আচার",
    "name_en": "Boroi Pickle (Jujube / Plum)",
    "category": "আচার",
    "type": "variable",
    "base_price": 190,
    "regular_price": 850,
    "sale_price": 190,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 190,
      "250 gm": 240,
      "400 gm": 380,
      "500 gm": 480,
      "1000 gm": 850
    },
    "primary_image": "All images/809227374_1069914088983243_167875105315745262_n.jpg",
    "images": [
      "All images/809227374_1069914088983243_167875105315745262_n.jpg",
      "All images/771956447_1039984315309554_4007887237801983927_n.jpg",
      "All images/758863547_1030637682910884_6700945311194248961_n.jpg",
      "All images/768546189_1041829741791678_5365535759839355736_n.jpg",
      "All images/787060585_1054374293870556_1586153822625745645_n.jpg",
      "All images/800881874_1065311729443479_9142311577524084001_n.jpg",
      "All images/825266932_1081649441143041_4240575431710309842_n.jpg",
      "All images/834130797_1087792903862028_4024953781854609287_n.jpg"
    ],
    "description": "যে স্বাদে ভাত-ও লাগে স্পেশাল! রোদে শুকানো টক-ঝাল-মিষ্টি লাল বরইয়ের ঐতিহ্যবাহী আচার। মুখের রুচি ফিরিয়ে আনতে তুলনাহীন।",
    "facts": "SKU: JUJ. Deshi dried boroi, pure mustard oil, molasses, roasted cumin, chili.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-018",
    "wc_id": 328,
    "sku": "BB-ACH-018",
    "name_bn": "বরই আচার (টক-মিষ্টি ক্রাশ)",
    "name_en": "Boroi Pickle (Sweet & Sour Crush)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/807386813_1076326418342010_1423256031986250910_n.jpg",
    "images": [
      "All images/807386813_1076326418342010_1423256031986250910_n.jpg",
      "All images/855242904_1103166965657955_7439709472288619676_n.jpg"
    ],
    "description": "টক-মিষ্টির ক্রাশ! দেশি লাল বরইয়ের রসে টইটম্বুর আচারের বয়াম। প্রতিটি চামচেই মুখের স্বাদ বদলে দেয়।",
    "facts": "SKU: BCRU. 400g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-016",
    "wc_id": 326,
    "sku": "BB-ACH-016",
    "name_bn": "তেঁতুল আচার (প্রিমিয়াম জার)",
    "name_en": "Tamarind Pickle (Pedestal Edition)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/813976083_1073010388673613_8899924605867364727_n.jpg",
    "images": [
      "All images/813976083_1073010388673613_8899924605867364727_n.jpg",
      "All images/813774081_1073010328673619_3149648999492113390_n.jpg",
      "All images/815335416_1075572415084077_6971320997295000123_n.jpg"
    ],
    "description": "প্রকৃতির খাঁটি তেঁতুল আচার। ঘন টক-ঝাল-মিষ্টি ব্লেন্ড যা ছোটবেলার নস্টালজিক স্বাদের কথা মনে করিয়ে দেয়।",
    "facts": "SKU: TPED. 400g Net Weight Jar on presentation pedestal.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-008",
    "wc_id": 305,
    "sku": "BB-ACH-008",
    "name_bn": "তেঁতুল বরই মিক্স আচার",
    "name_en": "Tamarind Jujube Mixed Pickle",
    "category": "আচার",
    "type": "variable",
    "base_price": 190,
    "regular_price": 850,
    "sale_price": 190,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 190,
      "250 gm": 240,
      "400 gm": 380,
      "500 gm": 480,
      "1000 gm": 850
    },
    "primary_image": "All images/772204431_1039984018642917_4214701317489319558_n.jpg",
    "images": [
      "All images/772204431_1039984018642917_4214701317489319558_n.jpg",
      "All images/755063156_1027414016566584_8690613897057847393_n.jpg",
      "All images/789399207_1058592090115443_4015556499100413740_n.jpg",
      "All images/780104376_1052680837373235_8213604527045271637_n.jpg",
      "All images/800958925_1066158106025508_644983458927029991_n.jpg",
      "All images/810421901_1071418575499461_3924094265959788429_n.jpg"
    ],
    "description": "তেঁতুলের কড়া টক এবং বরইয়ের নরম মিষ্টতার দুর্দান্ত যুগলবন্দী। একবার খেলে জিভে জল আসে বারবার।",
    "facts": "SKU: TJM. Pure tamarind, dried boroi, mustard oil, blended whole spices.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-011",
    "wc_id": 309,
    "sku": "BB-ACH-011",
    "name_bn": "রসুন আচার",
    "name_en": "Garlic Pickle (Roshun)",
    "category": "আচার",
    "type": "variable",
    "base_price": 230,
    "regular_price": 1090,
    "sale_price": 230,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 230,
      "250 gm": 280,
      "400 gm": 450,
      "500 gm": 560,
      "1000 gm": 1090
    },
    "primary_image": "All images/761292443_1034874732487179_3686680703011096049_n.jpg",
    "images": [
      "All images/761292443_1034874732487179_3686680703011096049_n.jpg",
      "All images/780981553_1051872120787440_3864700635865596764_n.jpg",
      "All images/802702884_1067287135912605_3424537553320177428_n.jpg",
      "All images/802811535_1067061429268509_8951332887981184446_n.jpg",
      "All images/825327284_1084767320831253_7499887150210209201_n.jpg",
      "All images/825327579_1084767457497906_5689915640481914841_n.jpg",
      "All images/825271241_1084767260831259_8762084938068558427_n.jpg",
      "All images/844395125_1096628976311754_2044416591907975590_n.jpg",
      "All images/855693950_1101361465838505_1989196513386232246_n.jpg"
    ],
    "description": "আস্ত দেশি রসুনের কোয়া সরিষার তেল ও মসলায় জ্বালিয়ে তৈরি বিশেষ স্বাস্থ্যকর আচার। রক্তচাপ ও হজমে সহায়ক।",
    "facts": "SKU: GAR. Whole peeled garlic, mustard oil, turmeric, dry chili, panch phoron.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-COM-002",
    "wc_id": 390,
    "sku": "BB-COM-002",
    "name_bn": "পাহাড়ি আচার কম্বো",
    "name_en": "Pahari Pickle Combo",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 990,
    "regular_price": 1140,
    "sale_price": 990,
    "on_sale": true,
    "weights": [
      "1.2 kg",
      "1.5 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 990,
      "1.5 kg": 1140
    },
    "primary_image": "All images/778625757_1046098204698165_1010652545931611703_n.jpg",
    "images": [
      "All images/778625757_1046098204698165_1010652545931611703_n.jpg",
      "All images/780551200_1050332590941393_6286576067134980084_n.jpg",
      "All images/798317556_1064495642858421_2727757635587570260_n.jpg"
    ],
    "description": "পাহাড়ি অঞ্চলের বিশেষ ফল ও মসলার মিশ্রণে তৈরি বিশেষ আচার কম্বো প্যাক। ঘরে বা ট্যুরে স্বাদের সেরা সঙ্গী।",
    "facts": "SKU: PAH. 3 specialty jars in mountain rustic theme. Regular price: ৳1,140.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-COM-003",
    "wc_id": 393,
    "sku": "BB-COM-003",
    "name_bn": "শাহজাদা আচার কম্বো",
    "name_en": "Shahzada Pickle Combo",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 1275,
    "regular_price": 1275,
    "sale_price": 1275,
    "on_sale": false,
    "weights": [
      "1.2 kg",
      "1.5 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 1275,
      "1.5 kg": 1275
    },
    "primary_image": "All images/764832985_1037502065557779_915971162721720792_n.jpg",
    "images": [
      "All images/764832985_1037502065557779_915971162721720792_n.jpg",
      "All images/776370819_1047734924534493_4032397417366096613_n.jpg"
    ],
    "description": "অভিজাত ও রসনা তৃপ্তিদায়ক স্বাদে তৈরি প্রিমিয়াম শাহজাদা আচার কম্বো। এতে থাকে তেঁতুল, বরই ও আলুবোখারা আচারের রাজকীয় মেলবন্ধন।",
    "facts": "SKU: SHA. Fixed bundle price: ৳1,275. 3 full-size premium jars.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-COM-004",
    "wc_id": 396,
    "sku": "BB-COM-004",
    "name_bn": "শাহজাদী আচার কম্বো",
    "name_en": "Shahzadi Pickle Combo",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 1190,
    "regular_price": 1230,
    "sale_price": 1190,
    "on_sale": true,
    "weights": [
      "1.2 kg",
      "1.5 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 1190,
      "1.5 kg": 1230
    },
    "primary_image": "All images/764833267_1038498182124834_60727161296407441_n.jpg",
    "images": [
      "All images/764833267_1038498182124834_60727161296407441_n.jpg",
      "All images/759676775_1030929989548320_6335391002455141070_n.jpg",
      "All images/851060039_1100360572605261_5785658676601403147_n.jpg"
    ],
    "description": "মিষ্টি ও টক-ঝাল স্বাদের সমন্বয়ে তৈরি বিশেষ কম্বো প্যাক। শাহী মসলার মেলবন্ধনে এক চামচেই খাবারকে করে অসাধারণ।",
    "facts": "SKU: SHZ. Regular price: ৳1,230, Sale price: ৳1,190.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-COM-005",
    "wc_id": 404,
    "sku": "BB-COM-005",
    "name_bn": "শীত রঙ্গ আচার কম্বো",
    "name_en": "Shitrongo Pickle Combo",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 1090,
    "regular_price": 1300,
    "sale_price": 1090,
    "on_sale": true,
    "weights": [
      "1.2 kg",
      "1.5 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 1090,
      "1.5 kg": 1300
    },
    "primary_image": "All images/776578650_1045235584784427_8795455393795719126_n.jpg",
    "images": [
      "All images/776578650_1045235584784427_8795455393795719126_n.jpg",
      "All images/848775394_1098646596109992_5491695437703408082_n.jpg"
    ],
    "description": "বাগান থেকে সরাসরি বয়ামে! দেশি মৌসুমি ফল ও মশলার রকমারি স্বাদে সাজানো বর্ণিল শীত রঙ্গ আচার কম্বো।",
    "facts": "SKU: SHTR. Regular price: ৳1,300, Sale price: ৳1,090.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-COM-007",
    "wc_id": 415,
    "sku": "BB-COM-007",
    "name_bn": "৩ প্যাক আচার কম্বো",
    "name_en": "3 Pack Pickle Combo (Tamarind, Boroi, Mix)",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 750,
    "regular_price": 850,
    "sale_price": 750,
    "on_sale": true,
    "weights": [
      "1.2 kg (3x400g)"
    ],
    "weight_pricing": {
      "1.2 kg (3x400g)": 750
    },
    "primary_image": "All images/784003317_1053599810614671_8011314832392916094_n.jpg",
    "images": [
      "All images/784003317_1053599810614671_8011314832392916094_n.jpg",
      "All images/843240332_1094477496526902_5980914284984851090_n.jpg",
      "All images/811935727_1072092212098764_1966660610464595157_n.jpg"
    ],
    "description": "আচার এমন খেতে মন চায় সারাক্ষণ! এতে থাকে তেঁতুল আচার, তেঁতুল বরই মিক্স আচার ও বরই আচারের আকর্ষণীয় ট্রায়ো প্যাক।",
    "facts": "SKU: 3PC. Contains 3 full 400g jars: Tamarind, Jujube, Tamarind Jujube Mix.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-COM-008",
    "wc_id": 416,
    "sku": "BB-COM-008",
    "name_bn": "টক-ঝাল-মিষ্টি স্পেশাল কম্বো",
    "name_en": "Tok Jhal Mishti Special Trio",
    "category": "স্পেশাল কম্বো",
    "type": "variable",
    "base_price": 850,
    "regular_price": 950,
    "sale_price": 850,
    "on_sale": true,
    "weights": [
      "1.2 kg"
    ],
    "weight_pricing": {
      "1.2 kg": 850
    },
    "primary_image": "All images/771471980_1039984395309546_7809941999449118754_n.jpg",
    "images": [
      "All images/771471980_1039984395309546_7809941999449118754_n.jpg",
      "All images/787761574_1055279273780058_6354034025787215543_n.jpg",
      "All images/763980821_1035860025721983_710410629797863240_n.jpg"
    ],
    "description": "এক বক্সে স্বাদের এত আয়োজন! টক, ঝাল ও মিষ্টি স্বাদের সেরা তিনটি আচারের সমন্বয়ে প্রস্তুত করা আকর্ষণীয় উপহার প্যাক।",
    "facts": "SKU: TJM3. Special red presentation gift pack.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-004",
    "wc_id": 312,
    "sku": "BB-ACH-004",
    "name_bn": "কালোজিরা আচার",
    "name_en": "Kalojira Pickle (Black Cumin)",
    "category": "আচার",
    "type": "variable",
    "base_price": 230,
    "regular_price": 1090,
    "sale_price": 230,
    "on_sale": true,
    "weights": [
      "200 gm",
      "250 gm",
      "400 gm",
      "500 gm",
      "1000 gm"
    ],
    "weight_pricing": {
      "200 gm": 230,
      "250 gm": 280,
      "400 gm": 450,
      "500 gm": 560,
      "1000 gm": 1090
    },
    "primary_image": "All images/763831749_1035835945724391_7415548004360926556_n.jpg",
    "images": [
      "All images/763831749_1035835945724391_7415548004360926556_n.jpg",
      "All images/777868121_1046947437946575_3346146734872729218_n.jpg",
      "All images/833907381_1087793733861945_4483365456992151835_n.jpg"
    ],
    "description": "সর্বব্যাধির মহৌষধ কালোজিরা দিয়ে তৈরি পুষ্টিকর ও সুস্বাদু আচার। রোগ প্রতিরোধ ক্ষমতা বাড়াতে ও রক্ত সঞ্চালনে অত্যন্ত উপকারী।",
    "facts": "SKU: BLC. BSTI BDS:CAC-260 Certified. Premium black cumin seeds, mustard oil, garlic paste, spices.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-014",
    "wc_id": 324,
    "sku": "BB-ACH-014",
    "name_bn": "আলুবোখারা রাজকীয় আচার",
    "name_en": "Alubokhara Royal Pickle (400g Jar)",
    "category": "আচার",
    "type": "variable",
    "base_price": 480,
    "regular_price": 600,
    "sale_price": 480,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 480
    },
    "primary_image": "All images/749629268_1025789830062336_2031561509353209987_n.jpg",
    "images": [
      "All images/749629268_1025789830062336_2031561509353209987_n.jpg",
      "All images/782385555_1051874154120570_6892737120570860453_n.jpg"
    ],
    "description": "এক চামচেই পাল্টে যাবে স্বাদ! রাজকীয় স্বাদে তৈরি ৪০০ গ্রাম আলুবোখারা আচার কাচের বয়াম। বিরিয়ানি ও পোলাওয়ের স্বাদ বহুগুণ বাড়িয়ে দেয়।",
    "facts": "SKU: AROY. 400g Net Weight Jar. Pure Alubokhara, dried chili, mustard oil.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-015",
    "wc_id": 325,
    "sku": "BB-ACH-015",
    "name_bn": "রসুন আচার দোসা ও খিচুড়ি স্পেশাল",
    "name_en": "Garlic Pickle (Dosa & Khichuri Special)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/825327284_1084767320831253_7499887150210209201_n.jpg",
    "images": [
      "All images/825327284_1084767320831253_7499887150210209201_n.jpg",
      "All images/825327579_1084767457497906_5689915640481914841_n.jpg",
      "All images/825271241_1084767260831259_8762084938068558427_n.jpg"
    ],
    "description": "ট্রাই করুন দোসার সাথে অথবা চাপটির সাথে! খাঁটি সরিষার তেলে সংরক্ষিত রসুনের আস্ত কোয়া দিয়ে তৈরি বিশেষ মুখরোচক আচার।",
    "facts": "SKU: GDOS. 400g Net Weight Jar. Great with Dosa, Chapati, Khichuri.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-017",
    "wc_id": 327,
    "sku": "BB-ACH-017",
    "name_bn": "তেঁতুল বরই সুপার মিক্স আচার",
    "name_en": "Tamarind Jujube Super Mix (400g Jar)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/789399207_1058592090115443_4015556499100413740_n.jpg",
    "images": [
      "All images/789399207_1058592090115443_4015556499100413740_n.jpg",
      "All images/755063156_1027414016566584_8690613897057847393_n.jpg",
      "All images/810421901_1071418575499461_3924094265959788429_n.jpg"
    ],
    "description": "চাখতেই হবে নইলে মিস! তেঁতুল বরইয়ের সুপার মিক্স আচার। কাচের বয়ামে সংরক্ষিত খাঁটি সরিষার তেলে তৈরি অনন্য যুগলবন্দী।",
    "facts": "SKU: TSUP. 400g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-019",
    "wc_id": 329,
    "sku": "BB-ACH-019",
    "name_bn": "তেঁতুল আচার ভাত-খিচুড়ির সঙ্গী",
    "name_en": "Tamarind Pickle (Khichuri Companion)",
    "category": "আচার",
    "type": "variable",
    "base_price": 250,
    "regular_price": 300,
    "sale_price": 250,
    "on_sale": true,
    "weights": [
      "250 gm"
    ],
    "weight_pricing": {
      "250 gm": 250
    },
    "primary_image": "All images/813878300_1073010455340273_6461534967439002743_n.jpg",
    "images": [
      "All images/813878300_1073010455340273_6461534967439002743_n.jpg",
      "All images/778958074_1047028264605159_886539686199328965_n.jpg"
    ],
    "description": "ভাত-খিচুড়ির আসল টক সঙ্গী! খাঁটি দেশি তেঁতুলের আচার যা গরম ভাত কিংবা খিচুড়ির সাথে প্রতিটি লোকমায় এনে দেয় পরম তৃপ্তি।",
    "facts": "SKU: TKHI. 250g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-020",
    "wc_id": 330,
    "sku": "BB-ACH-020",
    "name_bn": "রসুন আচার পরোটা স্পেশাল",
    "name_en": "Garlic Pickle (Paratha Companion)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/809844661_1078062638168388_8776394793269955235_n.jpg",
    "images": [
      "All images/809844661_1078062638168388_8776394793269955235_n.jpg",
      "All images/825336651_1080898467884805_8140838280571860907_n.jpg"
    ],
    "description": "গরম পরোটা আর তার সাথে রসুনের আচার—নাস্তা জমে যাবে মুহূর্তে! আস্ত রসুনের কোয়া তেলে নরম করে জ্বাল দেওয়া।",
    "facts": "SKU: GPAR. 400g Jar.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-021",
    "wc_id": 331,
    "sku": "BB-ACH-021",
    "name_bn": "তেঁতুল বরই মিক্স খিচুড়ি জার",
    "name_en": "Tamarind Jujube Mix (Khichuri Edition)",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/810421901_1071418575499461_3924094265959788429_n.jpg",
    "images": [
      "All images/810421901_1071418575499461_3924094265959788429_n.jpg",
      "All images/780104376_1052680837373235_8213604527045271637_n.jpg"
    ],
    "description": "গরম খিচুড়ির টক-মিষ্টি সঙ্গী! তেঁতুল ও বরইয়ের ব্লেন্ডে প্রস্তুতকৃত আচারের স্বাদ খিচুড়ির তৃপ্তি দ্বিগুণ করে তোলে।",
    "facts": "SKU: TKHC. 400g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-022",
    "wc_id": 332,
    "sku": "BB-ACH-022",
    "name_bn": "তেঁতুল আচার পিওর এক্সট্র্যাক্ট",
    "name_en": "Pure Tamarind Pickle (Extract Jar)",
    "category": "আচার",
    "type": "variable",
    "base_price": 250,
    "regular_price": 300,
    "sale_price": 250,
    "on_sale": true,
    "weights": [
      "250 gm"
    ],
    "weight_pricing": {
      "250 gm": 250
    },
    "primary_image": "All images/847553371_1097790279528957_1434705910271047438_n.jpg",
    "images": [
      "All images/847553371_1097790279528957_1434705910271047438_n.jpg",
      "All images/745542001_1017265394248113_2536519780313150314_n.jpg"
    ],
    "description": "তেঁতুল একটু বেশিই প্রিয়! পাকা দেশি তেঁতুলের আসল টক ও মসলার রসালো ব্লেন্ড। খাঁটি সরিষার তেলে রোদে জারিত।",
    "facts": "SKU: TPUR. 250g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-023",
    "wc_id": 333,
    "sku": "BB-ACH-023",
    "name_bn": "আলুবোখারা আচার টেস্টিং বোল এডিশন",
    "name_en": "Alubokhara Pickle (Tasting Bowl Edition)",
    "category": "আচার",
    "type": "variable",
    "base_price": 480,
    "regular_price": 550,
    "sale_price": 480,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 480
    },
    "primary_image": "All images/758028521_1027515789889740_6023562320317004522_n.jpg",
    "images": [
      "All images/758028521_1027515789889740_6023562320317004522_n.jpg",
      "All images/811170792_1071210665520252_6179027633815444499_n.jpg"
    ],
    "description": "এটা না খাইলে আর কী খাইলেন! অর্ডার করুন আর চেটে পুটে খেয়ে নিন। আস্ত আলুবোখারা তেলে ভেজে তৈরি রাজকীয় আচার।",
    "facts": "SKU: ATST. 400g Net Weight Jar.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-024",
    "wc_id": 334,
    "sku": "BB-ACH-024",
    "name_bn": "রোদে শুকানো বরই আচার",
    "name_en": "Sun-Dried Boroi Pickle",
    "category": "আচার",
    "type": "variable",
    "base_price": 190,
    "regular_price": 250,
    "sale_price": 190,
    "on_sale": true,
    "weights": [
      "200 gm"
    ],
    "weight_pricing": {
      "200 gm": 190
    },
    "primary_image": "All images/758863547_1030637682910884_6700945311194248961_n.jpg",
    "images": [
      "All images/758863547_1030637682910884_6700945311194248961_n.jpg",
      "All images/800881874_1065311729443479_9142311577524084001_n.jpg"
    ],
    "description": "একবার খুললেই শেষ না করে থাকা কঠিন! মেহেরপুরের গ্রামীণ রোদে শুকানো লাল বরইয়ের মুখরোচক টক-মিষ্টি আচার।",
    "facts": "SKU: BDRY. 200g Jar.",
    "in_stock": true,
    "bsti_certified": false
  },
  {
    "id": "BB-ACH-025",
    "wc_id": 335,
    "sku": "BB-ACH-025",
    "name_bn": "রসুন কালোজিরা প্রিমিয়াম জার",
    "name_en": "Garlic & Black Cumin Premium Jar",
    "category": "আচার",
    "type": "variable",
    "base_price": 380,
    "regular_price": 450,
    "sale_price": 380,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 380
    },
    "primary_image": "All images/778279709_1047741551200497_8987538511452370084_n.jpg",
    "images": [
      "All images/778279709_1047741551200497_8987538511452370084_n.jpg",
      "All images/787941913_1057022130272439_877379254859141080_n.jpg"
    ],
    "description": "রসুন আর কালোজিরা পুষ্টিগুণে সেরা! বিএসটিআই সনদপ্রাপ্ত ফর্মুলায় ঘানিভাঙা খাঁটি সরিষার তেলে রোদে শুকিয়ে প্রস্তুত।",
    "facts": "SKU: GBPR. 400g Jar.",
    "in_stock": true,
    "bsti_certified": true
  },
  {
    "id": "BB-ACH-026",
    "wc_id": 336,
    "sku": "BB-ACH-026",
    "name_bn": "রসুন আচার ঝাঁজালো স্বাদ",
    "name_en": "Garlic Pickle Bold Pungent",
    "category": "আচার",
    "type": "variable",
    "base_price": 450,
    "regular_price": 500,
    "sale_price": 450,
    "on_sale": true,
    "weights": [
      "400 gm"
    ],
    "weight_pricing": {
      "400 gm": 450
    },
    "primary_image": "All images/780981553_1051872120787440_3864700635865596764_n.jpg",
    "images": [
      "All images/780981553_1051872120787440_3864700635865596764_n.jpg",
      "All images/802702884_1067287135912605_3424537553320177428_n.jpg"
    ],
    "description": "আচার এমন এক প্লেটে ভরবে না মন! রসুন প্রেমীদের জন্য দেশি রসুনের কোয়া ও খাঁটি সরিষার তেলের ঝাঁজালো মেলবন্ধন।",
    "facts": "SKU: GBLD. 400g Jar.",
    "in_stock": true,
    "bsti_certified": true
  }
];

  // Districts of Bangladesh
  const BB_DISTRICTS = [
    "ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ", "নরসিংদী", "মানিকগঞ্জ", "মুন্সিগঞ্জ", "টাঙ্গাইল", "কিশোরগঞ্জ", "ফরিদপুর", "মাদারীপুর",
    "শরীয়তপুর", "রাজবাড়ী", "গোপালগঞ্জ", "চট্টগ্রাম", "কক্সবাজার", "কুমিল্লা", "ব্রাহ্মণবাড়িয়া", "চাঁদপুর", "ফেনী", "লক্ষ্মীপুর",
    "নোয়াখালী", "খাগড়াছড়ি", "রাঙামাটি", "বান্দরবান", "রাজশাহী", "বগুড়া", "পাবনা", "সিরাজগঞ্জ", "নাটোর", "নওগাঁ",
    "জয়পুরহাট", "চাঁপাইনবাবগঞ্জ", "রংপুর", "দিনাজপুর", "ঠাকুরগাঁও", "পঞ্চগড়", "নীলফামারী", "কুড়িগ্রাম", "লালমনিরহাট", "গাইবান্ধা",
    "খুলনা", "যশোর", "ঝিনাইদহ", "মাগুরা", "নড়াইল", "সাতক্ষীরা", "কুষ্টিয়া", "চুয়াডাঙ্গা", "মেহেরপুর", "বাগেরহাট",
    "বরিশাল", "পটুয়াখালী", "ভোলা", "পিরোজপুর", "বরগুনা", "ঝালকাঠি", "সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ",
    "ময়মনসিংহ", "শেরপুর", "জামালপুর", "নেত্রকোণা"
  ];

  // Customer Reviews
  const BB_REVIEWS = [
    { n: "মোঃ সাইফুল ইসলাম", r: 5, d: "২০২৬-০৯-২৮", t: "মায়ের হাতের আচারের মতো খাঁটি স্বাদ। তেঁতুল আচার অর্ডার করেছিলাম, পুরো পরিবার খুব পছন্দ করেছে।" },
    { n: "নুসরাত জাহান", r: 5, d: "২০২৬-০৯-২১", t: "প্যাকেজিং খুব চমৎকার ছিল, জার অক্ষত পেয়েছি। খাঁটি সরিষার তেলের ঝাঁজ ও স্বাদ দারুণ লাগলো।" },
    { n: "তানভীর আহমেদ", r: 5, d: "২০২৬-০৯-১৫", t: "স্বাদ অসাধারণ, একদম ঘরোয়া রেসিপিতে রোদে শুকানো। ডেলিভারিও খুব দ্রুত ছিল।" },
    { n: "শারমিন আক্তার", r: 5, d: "২০২৬-০৯-০৮", t: "শুটকি ভর্তাটা একদম জিভে জল আনা স্বাদের। আবার অর্ডার করব ইনশাআল্লাহ।" },
    { n: "রাকিব হাসান", r: 5, d: "২০২৬-০৮-৩০", t: "৬ প্যাক আচার কম্বো উপহার দিয়েছিলাম, সবাই খুব প্রশংসা করেছে।" },
    { n: "ফারজানা হক", r: 5, d: "২০২৬-০৮-২২", t: "পিনাট বাটার বাচ্চারা খুব পছন্দ করেছে। খাঁটি দেশি খাদ্যপণ্যের জন্য বর্ণবাজারকে ধন্যবাদ।" }
  ];

  // Helper: Format price in Bengali numerals
  function fmtPrice(n) {
    return '৳' + Number(n).toLocaleString('bn-BD');
  }

  // Helper: Escape HTML
  function escHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // Pure SVG Web Vector Icons for Ratings (Zero Emojis)
  const SVG_STAR_SM = '<svg width="15" height="15" fill="#D97706" viewBox="0 0 20 20" style="display:inline-block; vertical-align:middle;"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  const SVG_STARS_5_SM = `<span class="stars" aria-label="5 out of 5 stars" style="display:inline-flex; gap:2px; vertical-align:middle;">${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}</span>`;

  const SVG_STAR_LG = '<svg width="22" height="22" fill="#D97706" viewBox="0 0 20 20" style="display:inline-block; vertical-align:middle;"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  const SVG_STARS_5_LG = `<div class="stars" style="display:flex; justify-content:center; gap:4px; margin: 6px 0;">${SVG_STAR_LG}${SVG_STAR_LG}${SVG_STAR_LG}${SVG_STAR_LG}${SVG_STAR_LG}</div>`;

  // Global App State
  window.Bornobazar = {
    products: MASTER_CATALOG,
    cart: [],
    shippingRate: 70, // 70 BDT inside Dhaka, 130 BDT outside Dhaka
    deliveryArea: 'inside_dhaka',

    init: function () {
      this.loadCart();
      this.loadProductsSync();
      this.bindGlobalEvents();
      this.updateCartBadges();
      
      // Page specific inits
      if (document.getElementById('bb-hero-slides')) {
        this.initHeroSlider();
      }
      if (document.getElementById('product-grid-container')) {
        this.initShopPage();
      }
      if (document.getElementById('home-featured-grid')) {
        this.initHomePage();
      }
      if (document.getElementById('pd-info') || document.getElementById('single-product-app')) {
        this.initProductPage();
      }
      if (document.getElementById('cart-page-app')) {
        this.initCartPage();
      }
      if (document.getElementById('checkout-form')) {
        this.initCheckoutPage();
      }
    },

    loadProductsSync: function () {
      if (window.BORNOBAZAR_PRODUCTS && Array.isArray(window.BORNOBAZAR_PRODUCTS) && window.BORNOBAZAR_PRODUCTS.length > 0) {
        this.products = window.BORNOBAZAR_PRODUCTS;
      } else {
        this.products = MASTER_CATALOG;
      }
    },

    loadCart: function () {
      try {
        const saved = localStorage.getItem('bornobazar_cart');
        this.cart = saved ? JSON.parse(saved) : [];
      } catch (e) {
        this.cart = [];
      }
    },

    saveCart: function () {
      localStorage.setItem('bornobazar_cart', JSON.stringify(this.cart));
      this.updateCartBadges();
      this.renderCartDrawer();
      if (document.getElementById('cart-page-app')) {
        this.initCartPage();
      }
      if (document.getElementById('checkout-form')) {
        this.updateCheckoutSummary();
      }
    },

    addToCart: function (productId, weight, qty) {
      qty = Math.max(1, parseInt(qty, 10) || 1);
      const prod = this.findProduct(productId);
      if (!prod) return;

      const selectedWeight = weight || (prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড';
      const price = (prod.weight_pricing && prod.weight_pricing[selectedWeight])
                    ? prod.weight_pricing[selectedWeight] 
                    : prod.sale_price;

      const existingIndex = this.cart.findIndex(item => item.id === prod.id && item.weight === selectedWeight);

      if (existingIndex > -1) {
        this.cart[existingIndex].qty += qty;
      } else {
        this.cart.push({
          id: prod.id,
          name_bn: prod.name_bn,
          name_en: prod.name_en,
          image: prod.primary_image,
          weight: selectedWeight,
          price: price,
          qty: qty
        });
      }

      this.saveCart();
      this.showToast('"' + prod.name_bn + '" কার্টে যোগ করা হয়েছে!');
      this.openCartDrawer();
    },

    updateCartQty: function (index, delta) {
      if (!this.cart[index]) return;
      this.cart[index].qty += delta;
      if (this.cart[index].qty <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    },

    removeFromCart: function (index) {
      if (!this.cart[index]) return;
      this.cart.splice(index, 1);
      this.saveCart();
    },

    getCartSubtotal: function () {
      return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },

    getCartItemCount: function () {
      return this.cart.reduce((sum, item) => sum + item.qty, 0);
    },

    updateCartBadges: function () {
      const count = this.getCartItemCount();
      document.querySelectorAll('.bb-cart-badge').forEach(b => {
        b.textContent = count;
      });
      const subtotal = this.getCartSubtotal();
      document.querySelectorAll('.bb-cart-total-val').forEach(el => {
        el.textContent = fmtPrice(subtotal);
      });
    },

    openCartDrawer: function () {
      const drawer = document.getElementById('cart-drawer');
      let backdrop = document.getElementById('drawer-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'drawer-backdrop';
        backdrop.className = 'bb-drawer-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', () => {
          this.closeCartDrawer();
          this.closeMobileMenu();
        });
      }
      if (drawer) {
        this.renderCartDrawer();
        backdrop.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    closeCartDrawer: function () {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer) {
        drawer.classList.remove('active');
      }
      const mobileNav = document.getElementById('mobile-nav-drawer');
      if (!mobileNav || !mobileNav.classList.contains('active')) {
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    openMobileMenu: function () {
      const drawer = document.getElementById('mobile-nav-drawer');
      let backdrop = document.getElementById('drawer-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'drawer-backdrop';
        backdrop.className = 'bb-drawer-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', () => {
          this.closeCartDrawer();
          this.closeMobileMenu();
        });
      }
      if (drawer) {
        backdrop.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    closeMobileMenu: function () {
      const drawer = document.getElementById('mobile-nav-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer) {
        drawer.classList.remove('active');
      }
      const cartDrawer = document.getElementById('cart-drawer');
      if (!cartDrawer || !cartDrawer.classList.contains('active')) {
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    renderCartDrawer: function () {
      const body = document.getElementById('cart-drawer-body');
      const subtotalEl = document.getElementById('drawer-subtotal-val');
      if (!body) return;

      if (this.cart.length === 0) {
        body.innerHTML = `
          <div class="bb-cart-empty" style="text-align: center; padding: 40px 16px;">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin: 0 auto 12px; color: var(--bb-text-subtle);">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <p style="font-size: 16px; color: var(--bb-text-muted);">আপনার কার্ট বর্তমানে খালি আছে</p>
            <a href="shop.html" class="bb-btn bb-btn-primary bb-btn-sm" style="margin-top: 16px;">পণ্য দেখুন</a>
          </div>
        `;
        if (subtotalEl) subtotalEl.textContent = '৳০';
        return;
      }

      let html = '';
      this.cart.forEach((item, idx) => {
        html += `
          <div class="bb-cart-item" style="display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px dashed var(--bb-border-hairline); align-items: center;">
            <img src="${item.image}" alt="${escHtml(item.name_bn)}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px; background: #F6E8CC;">
            <div style="flex: 1;">
              <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 2px;">${escHtml(item.name_bn)}</h4>
              <div style="font-size: 16px; color: var(--bb-text-muted);">${item.weight} &bull; ৳${item.price}</div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                <button onclick="Bornobazar.updateCartQty(${idx}, -1)" style="width: 28px; height: 28px; border: 1px solid var(--bb-border-medium); border-radius: 8px; font-weight: 700; font-size: 16px; background: #fff;">&minus;</button>
                <span style="font-weight: 700; font-size: 16px;">${item.qty}</span>
                <button onclick="Bornobazar.updateCartQty(${idx}, 1)" style="width: 28px; height: 28px; border: 1px solid var(--bb-border-medium); border-radius: 8px; font-weight: 700; font-size: 16px; background: #fff;">&plus;</button>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 700; font-size: 16px; color: var(--bb-primary);">${fmtPrice(item.price * item.qty)}</div>
              <button onclick="Bornobazar.removeFromCart(${idx})" style="color: var(--bb-primary); font-size: 16px; margin-top: 6px; text-decoration: underline; background: none; border: none; cursor: pointer;">মুছে ফেলুন</button>
            </div>
          </div>
        `;
      });
      body.innerHTML = html;
      if (subtotalEl) {
        subtotalEl.textContent = fmtPrice(this.getCartSubtotal());
      }
    },

    showToast: function (msg) {
      let toast = document.getElementById('bb-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'bb-toast';
        toast.className = 'bb-toast';
        toast.style.cssText = 'position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); background: #1C1917; color: #fff; padding: 12px 24px; border-radius: 8px; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 10px; z-index: 9999; box-shadow: 0 4px 20px rgba(0,0,0,0.2); transition: opacity 0.3s; opacity: 0; pointer-events: none;';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style="color: #4ADE80; flex-shrink: 0;">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>${msg}</span>
      `;
      toast.style.opacity = '1';
      toast.style.pointerEvents = 'auto';
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
      }, 3000);
    },

    bindGlobalEvents: function () {
      // Cart drawer toggles
      document.querySelectorAll('.js-open-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openCartDrawer();
        });
      });
      document.querySelectorAll('.js-close-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.closeCartDrawer();
        });
      });

      // Mobile Menu Toggle (header hamburger & bottom bar button)
      document.querySelectorAll('#mobile-menu-btn, .bb-mobile-menu-toggle, .js-open-mobile-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openMobileMenu();
        });
      });

      document.querySelectorAll('.js-close-mobile-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.closeMobileMenu();
        });
      });

      // Close mobile drawer on clicking any nav item inside
      document.querySelectorAll('#mobile-nav-drawer a').forEach(link => {
        link.addEventListener('click', () => {
          this.closeMobileMenu();
        });
      });

      // Backdrop close for both drawers
      const backdrop = document.getElementById('drawer-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', () => {
          this.closeCartDrawer();
          this.closeMobileMenu();
        });
      }

      // Keyboard Escape closes drawers
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeCartDrawer();
          this.closeMobileMenu();
        }
      });
    },

    findProduct: function (queryId) {
      if (!queryId) return this.products[0];
      const q = String(queryId).trim();
      const num = Number(q);
      if (!isNaN(num) && num > 0) {
        const byWc = this.products.find(p => p.wc_id === num);
        if (byWc) return byWc;
      }
      const byId = this.products.find(p => p.id === q);
      if (byId) return byId;
      const bySku = this.products.find(p => (p.sku && p.sku.toLowerCase() === q.toLowerCase()) || (p.slug && p.slug === q));
      if (bySku) return bySku;
      return this.products[0];
    },

    /* ==========================================================================
       HERO ROTATING BANNER SLIDER LOGIC
       ========================================================================== */
    initHeroSlider: function () {
      const slider = document.getElementById('hero-slider');
      const slides = document.querySelectorAll('.bb-hero-slide');
      const dots = document.querySelectorAll('.bb-hero-dot');
      if (!slides.length) return;

      let currentIndex = 0;
      let intervalId = null;
      const slideInterval = 5000; // 5 seconds per slide rotation

      const goToSlide = (index) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, i) => {
          if (i === currentIndex) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });

        dots.forEach((dot, i) => {
          if (i === currentIndex) {
            dot.classList.add('active');
            dot.setAttribute('aria-current', 'true');
          } else {
            dot.classList.remove('active');
            dot.removeAttribute('aria-current');
          }
        });
      };

      const nextSlide = () => {
        goToSlide(currentIndex + 1);
      };

      const startAutoPlay = () => {
        stopAutoPlay();
        intervalId = setInterval(nextSlide, slideInterval);
      };

      const stopAutoPlay = () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      };

      // Bind dot click events
      dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          goToSlide(index);
          startAutoPlay(); // Reset timer after manual interaction
        });
      });

      // Pause rotation on mouse hover, resume on mouse leave
      if (slider) {
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);
      }

      // Initialize auto play
      startAutoPlay();
    },

    /* ==========================================================================
       HOME PAGE COMPONENT LOGIC (IN-PAGE PRODUCT TABS)
       ========================================================================== */
    initHomePage: function () {
      const container = document.getElementById('home-featured-grid');
      if (!container || this.products.length === 0) return;

      const tabButtons = document.querySelectorAll('#home-product-tabs button, .bb-filter-bar button');

      const renderHomeCategory = (category) => {
        let list = [...this.products];
        if (category === 'bsti') {
          list = list.filter(p => p.bsti_certified === true);
        } else if (category && category !== 'all') {
          list = list.filter(p => {
            const cat = (p.category || '');
            if (category === 'আচার') return cat.includes('আচার');
            if (category === 'কম্বো' || category === 'কম্বো অফার' || category === 'স্পেশাল কম্বো') return cat.includes('কম্বো');
            if (category === 'শুটকি ভর্তা' || category === 'শুটকি ও ভর্তা') return cat.includes('শুটকি') || cat.includes('ভর্তা');
            if (category === 'নাড়ু ও স্প্রেড' || category === 'মিষ্টি ও স্প্রেড') return cat.includes('মিষ্টি') || cat.includes('স্প্রেড') || cat.includes('বাটার') || cat.includes('নাড়ু');
            return cat === category;
          });
        }
        const displayList = (category && category !== 'all') ? list : list.slice(0, 12);
        this.renderProductGrid(container, displayList);
      };

      tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          tabButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const target = btn.getAttribute('data-home-tab') || 'all';
          renderHomeCategory(target);
        });
      });

      // Initial load: top 8 matching items
      this.renderProductGrid(container, this.products.slice(0, 8));
    },

    /* ==========================================================================
       SHOP ARCHIVE LOGIC (FILTERS, LIVE SEARCH, SORTING)
       ========================================================================== */
    initShopPage: function () {
      const container = document.getElementById('product-grid-container');
      const filterPills = document.querySelectorAll('.bb-filter-pill');
      const sortSelect = document.getElementById('shop-sort-select');
      const searchInput = document.getElementById('shop-search-input');
      const resultCount = document.getElementById('shop-result-count');

      let currentCategory = 'all';
      let currentQuery = '';
      let currentSort = 'default';

      // Category normalizer so any variant ('আচার', 'ঐতিহ্যবাহী আচার', etc.) matches
      const normalizeCat = (cat) => {
        if (!cat || cat === 'all') return 'all';
        if (cat === 'bsti' || cat.includes('বিএসটিআই')) return 'bsti';
        if (cat.includes('আচার')) return 'আচার';
        if (cat.includes('কম্বো')) return 'স্পেশাল কম্বো';
        if (cat.includes('শুটকি') || cat.includes('ভর্তা')) return 'শুটকি ও ভর্তা';
        if (cat.includes('মিষ্টি') || cat.includes('স্প্রেড') || cat.includes('বাটার') || cat.includes('নাড়ু')) return 'মিষ্টি ও স্প্রেড';
        return cat;
      };

      // Check URL params for category
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('cat');
      if (catParam) {
        const normParam = normalizeCat(catParam);
        currentCategory = normParam;
        filterPills.forEach(p => {
          const pillCat = normalizeCat(p.getAttribute('data-cat'));
          if (pillCat === normParam) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      }

      const applyFilters = () => {
        let list = [...this.products];

        // Filter Category
        if (currentCategory === 'bsti') {
          list = list.filter(p => p.bsti_certified === true);
        } else if (currentCategory !== 'all') {
          list = list.filter(p => normalizeCat(p.category) === currentCategory);
        }

        // Filter Search
        if (currentQuery.trim()) {
          const q = currentQuery.toLowerCase().trim();
          list = list.filter(p => 
            (p.name_bn && p.name_bn.toLowerCase().includes(q)) || 
            (p.name_en && p.name_en.toLowerCase().includes(q)) ||
            (p.category && p.category.toLowerCase().includes(q)) ||
            (p.description && p.description.toLowerCase().includes(q))
          );
        }

        // Sort
        if (currentSort === 'price_asc') {
          list.sort((a, b) => a.sale_price - b.sale_price);
        } else if (currentSort === 'price_desc') {
          list.sort((a, b) => b.sale_price - a.sale_price);
        } else if (currentSort === 'name_asc') {
          list.sort((a, b) => a.name_bn.localeCompare(b.name_bn));
        }

        this.renderProductGrid(container, list);
        if (resultCount) {
          resultCount.textContent = 'মোট ' + list.length.toLocaleString('bn-BD') + ' টি পণ্য প্রদর্শিত হচ্ছে';
        }
      };

      filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          filterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          currentCategory = normalizeCat(pill.getAttribute('data-cat') || 'all');
          applyFilters();
        });
      });

      // Interactive Category Cards on shop.html
      const catCards = document.querySelectorAll('.bb-cat-card[data-cat-filter]');
      catCards.forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const targetCat = normalizeCat(card.getAttribute('data-cat-filter') || 'all');
          currentCategory = targetCat;
          filterPills.forEach(p => {
            const pillCat = normalizeCat(p.getAttribute('data-cat'));
            if (pillCat === targetCat) {
              p.classList.add('active');
            } else {
              p.classList.remove('active');
            }
          });
          applyFilters();
          if (container) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          currentSort = e.target.value;
          applyFilters();
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value;
          applyFilters();
        });
      }

      applyFilters();
    },

    renderProductGrid: function (container, productList) {
      if (!container) return;
      if (productList.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border: 1px solid var(--bb-border-hairline); border-radius: 8px;">
            <p style="font-size: 18px; font-weight: 700; color: var(--bb-text-muted); margin-bottom: 8px;">কোনো পণ্য পাওয়া যায়নি</p>
            <p style="font-size: 16px; color: var(--bb-text-subtle); margin-bottom: 16px;">অনুগ্রহ করে অন্য কোনো ক্যাটাগরি অথবা সার্চ কি-ওয়ার্ড দিয়ে চেষ্টা করুন।</p>
            <button onclick="window.location.href='shop.html'" class="bb-btn bb-btn-primary bb-btn-sm">সব পণ্য দেখুন</button>
          </div>
        `;
        return;
      }

      let html = '';
      productList.forEach(p => {
        const primaryImg = p.primary_image || 'Logo/bornobazar-logo.png';
        const saleBadge = p.on_sale ? '<span class="bb-card-badge bb-badge-sale">ছাড়ে</span>' : '';
        const bstiBadge = p.bsti_certified ? '<span class="bb-card-badge bb-badge-bsti">BSTI অনুমোদিত</span>' : '';
        const comboBadge = p.category === 'স্পেশাল কম্বো' ? '<span class="bb-card-badge bb-badge-combo">কম্বো প্যাক</span>' : '';
        const regPrice = (p.on_sale && p.regular_price > p.sale_price) ? '<span class="bb-price-regular">' + fmtPrice(p.regular_price) + '</span>' : '';
        const firstWeight = (p.weights && p.weights.length > 0) ? p.weights[0] : '';
        const weightText = (p.weights && p.weights.length > 0) ? p.weights.join(', ') : 'স্ট্যান্ডার্ড জার';

        html += `
          <div class="bb-product-card" data-id="${p.id}">
            <div class="bb-card-image-wrap">
              <div class="bb-badge-stack">
                ${saleBadge}
                ${bstiBadge}
                ${comboBadge}
              </div>
              <a href="product.html?id=${p.id}">
                <img src="${primaryImg}" alt="${escHtml(p.name_bn)}" loading="lazy">
              </a>
            </div>
            <div class="bb-card-cat">${escHtml(p.category)}</div>
            <h3 class="bb-card-title">
              <a href="product.html?id=${p.id}">${escHtml(p.name_bn)}</a>
            </h3>
            <div class="bb-card-weights">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 6a2 2 0 012-2h8a2 2 0 012 2v2H4V6zm-2 4a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd"/>
              </svg>
              <span>${weightText}</span>
            </div>
            <div class="bb-card-price-row">
              <span class="bb-price-current">${fmtPrice(p.sale_price)}</span>
              ${regPrice}
            </div>
            <div class="bb-card-actions">
              <button class="bb-btn bb-btn-primary bb-btn-sm bb-btn-full" onclick="Bornobazar.addToCart('${p.id}', '${firstWeight}')">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                অর্ডার করুন
              </button>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    },

    /* ==========================================================================
       SINGLE PRODUCT DETAIL PAGE (EXACT ZAI ARCHITECTURE)
       ========================================================================== */
    initProductPage: function () {
      const params = new URLSearchParams(window.location.search);
      const queryId = params.get('id') || '268';
      const p = this.findProduct(queryId);
      if (!p) return;

      document.title = p.name_bn + ' — বর্ণবাজার (Bornobazar)';

      let vi = 0; // selected variant index
      let qty = 1;

      // Variants resolution
      const variants = (p.weights || ['স্ট্যান্ডার্ড']).map(w => {
        const pr = (p.weight_pricing && p.weight_pricing[w]) ? p.weight_pricing[w] : p.sale_price;
        const reg = p.regular_price > pr ? p.regular_price : pr;
        return { w: w, price: pr, regular: reg };
      });

      // Breadcrumb
      const crumbsEl = document.getElementById('crumbs');
      if (crumbsEl) {
        crumbsEl.innerHTML = `
          <a href="index.html">হোম</a> &rsaquo; 
          <a href="shop.html">শপ</a> &rsaquo; 
          <a href="shop.html?cat=${encodeURIComponent(p.category)}">${escHtml(p.category)}</a> &rsaquo; 
          <span>${escHtml(p.name_bn)}</span>
        `;
      }

      // Gallery
      const galEl = document.getElementById('pd-gallery');
      const images = (p.images && p.images.length > 0) ? p.images : [p.primary_image || 'Logo/bornobazar-logo.png'];
      if (galEl) {
        galEl.innerHTML = `
          <div class="pd-gal-sticky">
            <div class="main-img">
              <img id="pd-main-img" src="${images[0]}" alt="${escHtml(p.name_bn)}">
            </div>
            ${images.length > 1 ? `
              <div class="pd-thumbs">
                ${images.map((src, i) => `
                  <button class="${i === 0 ? 'active' : ''}" data-i="${i}">
                    <img src="${src}" alt="${escHtml(p.name_bn)} ${i+1}" loading="lazy">
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `;

        galEl.addEventListener('click', e => {
          const b = e.target.closest('.pd-thumbs button');
          if (!b) return;
          const idx = parseInt(b.dataset.i, 10);
          document.getElementById('pd-main-img').src = images[idx];
          galEl.querySelectorAll('.pd-thumbs button').forEach(x => x.classList.toggle('active', x === b));
        });
      }

      // Product Info
      const infoEl = document.getElementById('pd-info');
      if (infoEl) {
        infoEl.innerHTML = `
          <h1>${escHtml(p.name_bn)}</h1>
          <div class="pd-sub">
            <span>${escHtml(p.name_en || '')}</span>
            <span>ক্যাটাগরি: <a href="shop.html?cat=${encodeURIComponent(p.category)}" style="color:var(--bb-primary); font-weight:600;">${escHtml(p.category)}</a></span>
            ${p.bsti_certified ? '<span class="badge bsti">BSTI অনুমোদিত BDS:CAC-260</span>' : ''}
          </div>
          <div class="rating-row">
            ${SVG_STARS_5_SM}
            <a href="#reviews">4.9 · ৩৬টি ভেরিফায়েড রিভিউ</a>
          </div>
          <div class="pd-price" id="pd-price"></div>
          <div class="stock-line">
            <span class="ok" style="display:inline-flex; align-items:center; gap:5px;">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              স্টকে আছে
            </span>
            <span class="fast" style="display:inline-flex; align-items:center; gap:5px;">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#D97706"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-8 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              দ্রুত ডেলিভারি — সারা বাংলাদেশে
            </span>
          </div>
          <div class="opt-label">ওজন / সাইজ বাছুন</div>
          <div class="weight-chips" id="wchips"></div>
          <div class="qty-row">
            <div>
              <div class="opt-label" style="margin-top:0">পরিমাণ</div>
              <div class="qty">
                <button id="q-minus" aria-label="কমান" style="display:inline-flex; align-items:center; justify-content:center;">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>
                </button>
                <input id="qty" value="1" inputmode="numeric" aria-label="পরিমাণ">
                <button id="q-plus" aria-label="বাড়ান" style="display:inline-flex; align-items:center; justify-content:center;">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="pd-cta-grid">
            <button class="btn" id="add-cart">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>কার্টে যোগ করুন</span>
            </button>
            <button class="btn gold" id="buy-now">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>এখনই অর্ডার করুন</span>
            </button>
            <button class="btn wa" id="buy-wa">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>হোয়াটসঅ্যাপে অর্ডার</span>
            </button>
            <a class="call-mini" href="tel:09617334422">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>09617-334422</span>
            </a>
          </div>
          <div class="estimator" id="estimator">
            <div class="e-label">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-8 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              <span>ডেলিভারি চার্জ যাচাই করুন</span>
            </div>
            <select id="district" aria-label="জেলা বাছাই করুন">
              <option value="">জেলা বাছাই করুন…</option>
              ${BB_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('')}
            </select>
            <div class="e-result" id="e-result"></div>
          </div>
          <div class="trust-chips">
            <div>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span>ক্যাশ অন ডেলিভারি</span>
            </div>
            <div>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-8 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>
              <span>সারা দেশে ডেলিভারি</span>
            </div>
            <div>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>${p.bsti_certified ? 'BSTI অনুমোদিত' : 'সরিষার তেলে তৈরি'}</span>
            </div>
            <div>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>হোয়াটসঅ্যাপ সাপোর্ট</span>
            </div>
          </div>
          <div class="sku-line">প্রোডাক্ট কোড: <b>${escHtml(p.sku || p.id)}</b> &bull; প্রস্তুতকারক: <b>বর্ণবাজার</b>, দাড়িয়াপুর, মুজিবনগর, মেহেরপুর</div>
          <div class="opt-label" style="margin-top:24px">বিস্তারিত</div>
          <div id="pd-sections"></div>
        `;

        // Paint Price & Variants
        const priceEl = document.getElementById('pd-price');
        const chipsEl = document.getElementById('wchips');
        const qtyEl = document.getElementById('qty');

        const paintPrice = () => {
          const v = variants[vi];
          const totalPr = v.price * qty;
          const totalReg = v.regular * qty;
          const save = totalReg > totalPr ? totalReg - totalPr : 0;

          priceEl.innerHTML = `
            <span class="price">${fmtPrice(totalPr)}</span>
            ${save > 0 ? `<s>${fmtPrice(totalReg)}</s><span class="save-chip">সাশ্রয় ${fmtPrice(save)}</span>` : ''}
          `;

          chipsEl.innerHTML = variants.map((v, i) => `
            <button class="wchip${i === vi ? ' active' : ''}" data-i="${i}">
              <b>${escHtml(v.w)}</b>
              <span>${fmtPrice(v.price)}</span>
            </button>
          `).join('');
        };

        chipsEl.addEventListener('click', e => {
          const ch = e.target.closest('.wchip');
          if (!ch) return;
          vi = parseInt(ch.dataset.i, 10);
          paintPrice();
        });

        const clampQty = (n) => Math.max(1, Math.min(99, parseInt(n, 10) || 1));

        qtyEl.addEventListener('change', () => {
          qty = clampQty(qtyEl.value);
          qtyEl.value = qty;
          paintPrice();
        });
        document.getElementById('q-minus').onclick = () => {
          qty = clampQty(qty - 1);
          qtyEl.value = qty;
          paintPrice();
        };
        document.getElementById('q-plus').onclick = () => {
          qty = clampQty(qty + 1);
          qtyEl.value = qty;
          paintPrice();
        };

        // CTAs
        document.getElementById('add-cart').onclick = () => {
          this.addToCart(p.id, variants[vi].w, qty);
        };
        document.getElementById('buy-now').onclick = () => {
          this.addToCart(p.id, variants[vi].w, qty);
          window.location.href = 'checkout.html';
        };
        document.getElementById('buy-wa').onclick = () => {
          this.addToCart(p.id, variants[vi].w, qty);
          const v = variants[vi];
          const txt = `আসসালামু আলাইকুম! বর্ণবাজার-এ অর্ডার করতে চাই:\n\n${p.name_bn} (${v.w}) × ${qty} = ${fmtPrice(v.price * qty)}\nপ্রোডাক্ট কোড: ${p.sku || p.id}\n\nপেমেন্ট: ক্যাশ অন ডেলিভারি`;
          window.open('https://wa.me/8801922379382?text=' + encodeURIComponent(txt), '_blank');
        };

        // Estimator
        document.getElementById('district').addEventListener('change', e => {
          const d = e.target.value;
          const res = document.getElementById('e-result');
          if (!d) {
            res.classList.remove('show');
            return;
          }
          const inside = (d === 'ঢাকা');
          res.innerHTML = inside
            ? `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669" style="vertical-align:middle; margin-right:4px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg><b>${d}</b> — ঢাকার ভিতরে &bull; ডেলিভারি চার্জ <span class="in">৳৭০</span>`
            : `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#D97706" style="vertical-align:middle; margin-right:4px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><b>${d}</b> — ঢাকার বাইরে &bull; ডেলিভারি চার্জ <span class="out">৳১৩০</span>`;
          res.classList.add('show');
        });

        paintPrice();

        // Collapsible Detail Sections
        const specsRows = [
          ['সাইজ অপশন', variants.map(v => v.w).join(', ')],
          ['ক্যাটাগরি', p.category],
          ['প্রোডাক্ট কোড (SKU)', p.sku || p.id],
          ['সংরক্ষণ', p.category === 'শুটকি ও ভর্তা' ? 'ফ্রিজের নরমাল চেম্বারে রাখুন' : 'তেল ও মশলায় রোদে সংরক্ষিত'],
          ['প্রস্তুতকারক', 'বর্ণবাজার — দাড়িয়াপুর, মুজিবনগর, মেহেরপুর']
        ];
        if (p.bsti_certified) {
          specsRows.splice(3, 0, ['সার্টিফিকেশন', 'BSTI অনুমোদিত (BDS:CAC-260)']);
        }

        const secItem = (title, body, open = false) => `
          <details class="pd-sec"${open ? ' open' : ''}>
            <summary>${title}</summary>
            <div class="sec-body">${body}</div>
          </details>
        `;

        const sections = [
          secItem('ডেলিভারি ও রিটার্ন পলিসি', `
            <div class="rules-list">
              <div class="rule"><span class="n">১</span><span>ডেলিভারির সময় পার্সেল খুলে জার ভাঙা বা ছিদ্র আছে কি না দেখে নিন।</span></div>
              <div class="rule"><span class="n">২</span><span>খাবার পণ্য হওয়ায় জারের সিল খোলার পর ফেরতযোগ্য নয়।</span></div>
              <div class="rule"><span class="n">৩</span><span>ভাঙা বা ভুল পণ্য পেলে ২৪ ঘণ্টার মধ্যে ছবি/ভিডিও সহ জানান — আমাদের খরচে নতুন পণ্য বদলে দেওয়া হবে।</span></div>
            </div>
          `),
          secItem('উপকরণ ও গুণাগুণ', `<p>${escHtml(p.ingredients || p.facts || 'খাঁটি সরিষার তেল, দেশি ফল, ভাজা মশলা, বিট লবণ ও প্রাকৃতিক প্রিজারভেটিভ।')}</p>`),
          secItem('পণ্য পরিচিতি', `<p>${escHtml(p.description || '')}</p>`, true),
          secItem('স্পেসিফিকেশন ও তথ্য', `
            <table class="specs">
              ${specsRows.map(r => `<tr><td>${r[0]}</td><td>${escHtml(r[1])}</td></tr>`).join('')}
            </table>
          `),
          secItem('সংরক্ষণ বিধি ও পরামর্শ', `
            <ul>
              <li>আচার হাত দিয়ে স্পর্শ করবেন না, সর্বদা পরিষ্কার শুকনো চামচ ব্যবহার করুন।</li>
              <li>মাঝে মাঝে উজ্জ্বল রোদে দিন।</li>
              <li>আচারের উপরিভাগে সরিষার তেলের একটি পাতলা স্তর বজায় রাখুন।</li>
              <li>প্রয়োজনে ফ্রিজে সংরক্ষণ করুন।</li>
            </ul>
          `),
          secItem('প্রস্তুতকারক ও বাজারজাতকারী তথ্য', `
            <p>বর্ণবাজার (Bornobazar)<br>দাড়িয়াপুর, মুজিবনগর, মেহেরপুর।<br><br>কাস্টমার কেয়ার হেল্পলাইন: 09617-334422<br>বিএসটিআই লাইসেন্স নম্বর: BDS:CAC-260</p>
          `)
        ];

        document.getElementById('pd-sections').innerHTML = sections.join('');
      }

      // Below the Fold: FAQs and Verified Reviews
      const descEl = document.getElementById('pd-desc');
      if (descEl) {
        const storageFaq = p.category === 'শুটকি ও ভর্তা'
          ? 'খোলার পর ফ্রিজের নরমাল চেম্বারে রাখুন এবং ৩ মাসের মধ্যে ব্যবহার করুন।'
          : 'শুকনো-পরিষ্কার চামচ ব্যবহার করুন, মাঝে মাঝে রোদে দিন এবং প্রয়োজনে ফ্রিজে রাখুন।';

        const FAQS = [
          ['অর্ডার কীভাবে করবো?', 'ওয়েবসাইটে পছন্দের পণ্য কার্টে যোগ করে চেকআউট করুন — ক্যাশ অন ডেলিভারিতে পণ্য হাতে পেয়ে টাকা দিবেন। চাইলে সরাসরি কল করুন 09617-334422 নম্বরে অথবা হোয়াটসঅ্যাপে মেসেজ দিন।'],
          ['ডেলিভারি চার্জ কত?', 'ঢাকার ভিতরে ৳৭০, ঢাকার বাইরে ৳১৩০। পণ্যের পাশের "ডেলিভারি চার্জ যাচাই করুন" অপশনে জেলা বাছলে সাথে সাথে চার্জ দেখাবে।'],
          ['কতদিনে ডেলিভারি পাবো?', 'সাধারণত ঢাকার ভিতরে ১-২ কর্মদিবস এবং ঢাকার বাইরে ২-৩ কর্মদিবস সময় লাগে।'],
          ['পণ্য কি সম্পূর্ণ নির্ভেজাল?', 'সব পণ্য খাঁটি সরিষার তেল, চিনি, লবণ ও ঘরোয়া মশলায় প্রাকৃতিকভাবে সংরক্ষিত — কোনো কৃত্রিম কেমিক্যাল বা ক্ষতিকর প্রিজারভেটিভ নেই। বর্ণবাজার বিএসটিআই অনুমোদিত (BDS:CAC-260)।'],
          ['জার খোলার পর কতদিন ভালো থাকে?', storageFaq],
          ['ভাঙা বা ভুল পণ্য পেলে কী করবো?', 'ডেলিভারির সময় পার্সেল খুলে দেখে নিন। ভাঙা বা ভুল পণ্য পেলে ২৪ ঘণ্টার মধ্যে আমাদের জানালে আমাদের খরচে সাথে সাথে বদলে দেওয়া হবে।']
        ];

        descEl.innerHTML = `
          <h2>সচরাচর জিজ্ঞাসা</h2>
          ${FAQS.map(f => `
            <details class="faq">
              <summary>${f[0]}</summary>
              <div class="fa-body">${f[1]}</div>
            </details>
          `).join('')}

          <h2 id="reviews" style="margin-top: 36px;">গ্রাহকদের মতামত</h2>
          <div class="white-card reviews-wrap">
            <div class="rev-avg">
              <div class="big">4.9</div>
              ${SVG_STARS_5_LG}
              <div class="cnt">৩৬টি ভেরিফায়েড রিভিউ</div>
              <div class="cnt" style="margin-top: 8px; font-size: 16px; color: var(--bb-text-subtle);">ডেলিভারি সম্পন্ন হলে গ্রাহকদের কাছ থেকে সংগৃহীত রিভিউ</div>
            </div>
            <div class="rev-grid">
              ${BB_REVIEWS.map(r => `
                <div class="rev-card">
                  <div class="rev-top">
                    <span class="rev-name">${escHtml(r.n)}</span>
                    <span class="rev-date">${escHtml(r.d)}</span>
                  </div>
                  <div class="rev-verified">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style="vertical-align:middle; margin-right:4px; color:#059669;">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>ভেরিফায়েড ক্রেতা
                  </div>
                  ${SVG_STARS_5_SM}
                  <p class="rev-txt" style="margin-top: 6px;">${escHtml(r.t)}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Related Products
      const relEl = document.getElementById('rel-wrap');
      if (relEl) {
        const related = this.products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
        if (related.length > 0) {
          relEl.innerHTML = `
            <div class="bb-section-header" style="text-align: center; margin-bottom: 24px;">
              <h2 style="font-size: 26px; font-weight: 700; color: var(--bb-text-main);">একসাথে অনেকেই নেন</h2>
            </div>
            <div class="bb-grid bb-grid-4">
              ${related.map(item => `
                <div class="bb-product-card" data-id="${item.id}">
                  <div class="bb-card-image-wrap">
                    <a href="product.html?id=${item.wc_id || item.id}">
                      <img src="${item.primary_image}" alt="${escHtml(item.name_bn)}" loading="lazy">
                    </a>
                  </div>
                  <div class="bb-card-cat">${item.category}</div>
                  <h3 class="bb-card-title">
                    <a href="product.html?id=${item.wc_id || item.id}">${escHtml(item.name_bn)}</a>
                  </h3>
                  <div class="bb-card-price-row">
                    <span class="bb-price-current">${fmtPrice(item.sale_price)}</span>
                    ${item.on_sale ? '<span class="bb-price-regular">' + fmtPrice(item.regular_price) + '</span>' : ''}
                  </div>
                  <div class="bb-card-actions">
                    <button class="bb-btn bb-btn-primary bb-btn-sm bb-btn-full" onclick="Bornobazar.addToCart('${item.id}', '${item.weights ? item.weights[0] : ''}')">
                      অর্ডার করুন
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }
      }
    },

    /* ==========================================================================
       CART & CHECKOUT HELPERS
       ========================================================================== */
    initCartPage: function () {
      const container = document.getElementById('cart-page-app');
      if (!container) return;

      if (this.cart.length === 0) {
        container.innerHTML = `
          <div class="bb-container" style="padding: 60px 20px; text-align: center;">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin: 0 auto 16px; color: var(--bb-text-subtle);">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">আপনার কার্ট বর্তমানে খালি</h2>
            <p style="font-size: 16px; color: var(--bb-text-muted); margin-bottom: 24px;">পছন্দের খাঁটি আচার ও শুটকি ভর্তা অর্ডার করতে আমাদের শপ ব্রাউজ করুন।</p>
            <a href="shop.html" class="bb-btn bb-btn-primary bb-btn-lg">শপিং শুরু করুন &rarr;</a>
          </div>
        `;
        return;
      }

      let rowsHtml = '';
      this.cart.forEach((item, idx) => {
        rowsHtml += `
          <tr style="border-bottom: 1px solid var(--bb-border-hairline);">
            <td style="padding: 16px; display: flex; align-items: center; gap: 14px;">
              <img src="${item.image}" alt="${escHtml(item.name_bn)}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px; background: #F6E8CC;">
              <div>
                <a href="product.html?id=${item.id}" style="font-size: 16px; font-weight: 700; color: var(--bb-text-main);">${escHtml(item.name_bn)}</a>
                <div style="font-size: 16px; color: var(--bb-text-muted);">${item.weight}</div>
              </div>
            </td>
            <td style="padding: 16px; font-size: 16px; font-weight: 600;">${fmtPrice(item.price)}</td>
            <td style="padding: 16px;">
              <div style="display: inline-flex; align-items: center; border: 1.5px solid var(--bb-border-medium); border-radius: 8px; overflow: hidden;">
                <button onclick="Bornobazar.updateCartQty(${idx}, -1)" style="width: 32px; height: 32px; font-weight: 700; font-size: 16px; background: #fff;">&minus;</button>
                <span style="width: 36px; text-align: center; font-weight: 700; font-size: 16px;">${item.qty}</span>
                <button onclick="Bornobazar.updateCartQty(${idx}, 1)" style="width: 32px; height: 32px; font-weight: 700; font-size: 16px; background: #fff;">&plus;</button>
              </div>
            </td>
            <td style="padding: 16px; font-size: 16px; font-weight: 700; color: var(--bb-primary);">${fmtPrice(item.price * item.qty)}</td>
            <td style="padding: 16px; text-align: right;">
              <button onclick="Bornobazar.removeFromCart(${idx})" style="color: var(--bb-primary); font-size: 16px; text-decoration: underline; background: none; border: none; cursor: pointer;">মুছে ফেলুন</button>
            </td>
          </tr>
        `;
      });

      const subtotal = this.getCartSubtotal();

      container.innerHTML = `
        <div class="bb-container" style="padding: 32px 0 60px;">
          <h1 style="font-size: 28px; font-weight: 700; margin-bottom: 24px;">আপনার শপিং ব্যাগ</h1>
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px;" class="bb-cart-grid">
            <div style="background: #fff; border: 1px solid var(--bb-border-hairline); border-radius: 8px; padding: 20px; overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; min-width: 500px;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--bb-border-hairline); text-align: left; font-size: 16px; color: var(--bb-text-muted);">
                    <th style="padding: 12px 16px;">পণ্য</th>
                    <th style="padding: 12px 16px;">মূল্য</th>
                    <th style="padding: 12px 16px;">পরিমাণ</th>
                    <th style="padding: 12px 16px;">মোট</th>
                    <th style="padding: 12px 16px; text-align: right;">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
              </table>
            </div>
            <div style="background: #fff; border: 1px solid var(--bb-border-hairline); border-radius: 8px; padding: 24px; height: fit-content;">
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 16px; border-bottom: 1px solid var(--bb-border-hairline); padding-bottom: 10px;">অর্ডার সামারি</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 16px;">
                <span style="color: var(--bb-text-muted);">সাবটোটাল</span>
                <span style="font-weight: 700;">${fmtPrice(subtotal)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-size: 16px;">
                <span style="color: var(--bb-text-muted);">ডেলিভারি চার্জ</span>
                <span>চেকআউট পেজে নির্ধারিত হবে</span>
              </div>
              <a href="checkout.html" class="bb-btn bb-btn-primary bb-btn-lg bb-btn-full" style="text-align: center; display: block;">চেকআউট করুন &rarr;</a>
              <a href="shop.html" style="display: block; text-align: center; margin-top: 14px; font-size: 16px; color: var(--bb-text-muted);">আরও পণ্য যোগ করুন</a>
            </div>
          </div>
        </div>
      `;
    },

    initCheckoutPage: function () {
      this.updateCheckoutSummary();

      const dhakaRadio = document.getElementById('ship_inside');
      const outsideRadio = document.getElementById('ship_outside');
      if (dhakaRadio && outsideRadio) {
        dhakaRadio.addEventListener('change', () => {
          this.deliveryArea = 'inside_dhaka';
          this.updateCheckoutSummary();
        });
        outsideRadio.addEventListener('change', () => {
          this.deliveryArea = 'outside_dhaka';
          this.updateCheckoutSummary();
        });
      }

      const form = document.getElementById('checkout-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (this.cart.length === 0) {
            alert('আপনার কার্ট খালি! অনুগ্রহ করে প্রথমে পণ্য যোগ করুন।');
            return;
          }
          const orderId = 'BB-' + Math.floor(100000 + Math.random() * 900000);
          localStorage.setItem('bb_last_order', JSON.stringify({
            orderId: orderId,
            items: this.cart,
            subtotal: this.getCartSubtotal(),
            shipping: this.deliveryArea === 'inside_dhaka' ? 70 : 130,
            date: new Date().toLocaleDateString('bn-BD')
          }));
          this.cart = [];
          this.saveCart();
          window.location.href = 'order-success.html?order=' + orderId;
        });
      }
    },

    updateCheckoutSummary: function () {
      const summaryContainer = document.getElementById('checkout-items-summary');
      const subtotalEl = document.getElementById('summary-subtotal');
      const shippingEl = document.getElementById('summary-shipping');
      const totalEl = document.getElementById('summary-total');

      if (!summaryContainer) return;

      if (this.cart.length === 0) {
        summaryContainer.innerHTML = '<p style="font-size: 16px; color: var(--bb-text-muted); padding: 12px 0;">কোনো পণ্য কার্টে নেই।</p>';
        if (subtotalEl) subtotalEl.textContent = '৳০';
        if (shippingEl) shippingEl.textContent = '৳০';
        if (totalEl) totalEl.textContent = '৳০';
        return;
      }

      let html = '';
      this.cart.forEach(item => {
        html += `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed var(--bb-border-hairline); font-size: 16px;">
            <div>
              <div style="font-weight: 700; color: var(--bb-text-main);">${escHtml(item.name_bn)}</div>
              <div style="font-size: 16px; color: var(--bb-text-muted);">${item.weight} &times; ${item.qty}</div>
            </div>
            <div style="font-weight: 700; color: var(--bb-primary);">${fmtPrice(item.price * item.qty)}</div>
          </div>
        `;
      });
      summaryContainer.innerHTML = html;

      const subtotal = this.getCartSubtotal();
      const shipping = this.deliveryArea === 'inside_dhaka' ? 70 : 130;
      const total = subtotal + shipping;

      if (subtotalEl) subtotalEl.textContent = fmtPrice(subtotal);
      if (shippingEl) shippingEl.textContent = fmtPrice(shipping);
      if (totalEl) totalEl.textContent = fmtPrice(total);
    }
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.Bornobazar.init();
    });
  } else {
    window.Bornobazar.init();
  }
})();
