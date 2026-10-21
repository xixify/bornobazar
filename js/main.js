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

  // Shoppable Video Reels Configuration (8 Authentic Reels from F:\Projects\Pias vai\Video)
  const BORNOBAZAR_REELS = [
    {
      id: 'reel_1',
      title: 'আচার কিনতে কোনটা দেখেন? খাঁটি রসুনের আচার',
      shortTitle: 'রসুন আচার স্পেশাল',
      videoSrc: 'videos/reel_1.mp4',
      poster: 'videos/poster_1.jpg',
      productId: 'BB-ACH-012',
      productName: 'রসুন আচার (স্পেশাল)',
      productThumb: 'All images/761355190_1034052569236062_78667506752820005_n.jpg',
      price: 240,
      regularPrice: 280,
      weight: '200 gm'
    },
    {
      id: 'reel_2',
      title: 'খাঁটি আচারের সুবাস ও স্বাদ — আলুবোখারা আচার',
      shortTitle: 'আলুবোখারা আচার',
      videoSrc: 'videos/reel_2.mp4',
      poster: 'videos/poster_2.jpg',
      productId: 'BB-ACH-002',
      productName: 'আলুবোখারা আচার',
      productThumb: 'All images/779787836_1049495257691793_4108399455579486072_n.jpg',
      price: 240,
      regularPrice: 280,
      weight: '200 gm'
    },
    {
      id: 'reel_3',
      title: 'খাবারের টেবিলে ৩টি আচারের স্বাদ — নিউট্রি আচার কম্বো',
      shortTitle: 'নিউট্রি আচার কম্বো',
      videoSrc: 'videos/reel_3.mp4',
      poster: 'videos/poster_3.jpg',
      productId: 'BB-COM-006',
      productName: 'নিউট্রি আচার কম্বো',
      productThumb: 'All images/788601539_1056888763619109_5968941487902862885_n.jpg',
      price: 890,
      regularPrice: 1090,
      weight: '800 gm'
    },
    {
      id: 'reel_4',
      title: 'আচারের আসল মশলা ও ঝাঁজ — খাঁটি তেঁতুল আচার',
      shortTitle: 'তেঁতুল আচার প্রিমিয়াম',
      videoSrc: 'videos/reel_4.mp4',
      poster: 'videos/poster_4.jpg',
      productId: 'BB-ACH-016',
      productName: 'তেঁতুল আচার (প্রিমিয়াম জার)',
      productThumb: 'All images/813976083_1073010388673613_8899924605867364727_n.jpg',
      price: 380,
      regularPrice: 420,
      weight: '400 gm'
    },
    {
      id: 'reel_5',
      title: 'প্রতিদিন খাবারে আচারের তৃপ্তি — বরই আচার টক-মিষ্টি ক্রাশ',
      shortTitle: 'বরই আচার ক্রাশ',
      videoSrc: 'videos/reel_5.mp4',
      poster: 'videos/poster_5.jpg',
      productId: 'BB-ACH-018',
      productName: 'বরই আচার (টক-মিষ্টি ক্রাশ)',
      productThumb: 'All images/807386813_1076326418342010_1423256031986250910_n.jpg',
      price: 380,
      regularPrice: 420,
      weight: '400 gm'
    },
    {
      id: 'reel_6',
      title: 'খাবারে যদি আচার না থাকে... রসুন কালোজিরা আচার',
      shortTitle: 'রসুন কালোজিরা আচার',
      videoSrc: 'videos/reel_6.mp4',
      poster: 'videos/poster_6.jpg',
      productId: 'BB-ACH-025',
      productName: 'রসুন কালোজিরা প্রিমিয়াম জার',
      productThumb: 'All images/778279709_1047741551200497_8987538511452370084_n.jpg',
      price: 380,
      regularPrice: 450,
      weight: '400 gm'
    },
    {
      id: 'reel_7',
      title: 'ঘরোয়া আচারের আসল টেস্ট — তেঁতুল বরই মিক্স আচার',
      shortTitle: 'তেঁতুল বরই মিক্স',
      videoSrc: 'videos/reel_7.mp4',
      poster: 'videos/poster_7.jpg',
      productId: 'BB-ACH-008',
      productName: 'তেঁতুল বরই মিক্স আচার',
      productThumb: 'All images/810793616_1071418578832794_8576133246231267575_n.jpg',
      price: 190,
      regularPrice: 220,
      weight: '200 gm'
    },
    {
      id: 'reel_8',
      title: 'বাজারের আচার বনাম খাঁটি বর্ণবাজার — ৬ প্যাক কম্বো গিফট বক্স',
      shortTitle: '৬ প্যাক গিফট বক্স',
      videoSrc: 'videos/reel_8.mp4',
      poster: 'videos/poster_8.jpg',
      productId: 'BB-COM-001',
      productName: '৬ প্যাক আচার কম্বো গিফট বক্স',
      productThumb: 'All images/724500930_995387276435925_6032589404291467890_n.jpg',
      price: 1190,
      regularPrice: 1260,
      weight: '1.2 kg'
    }
  ];

  // Global App State
  window.Bornobazar = {
    products: MASTER_CATALOG,
    reels: BORNOBAZAR_REELS,
    cart: [],
    shippingRate: 70, // 70 BDT inside Dhaka, 130 BDT outside Dhaka
    deliveryArea: 'inside_dhaka',
    currentReelIndex: 0,
    _updateStickyBar: null,

    init: function () {
      this.loadCart();
      this.loadProductsSync();
      this.bindGlobalEvents();
      this.updateCartBadges();
      this.initReelsModalEvents();
      
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
      if (document.getElementById('home-combo-spotlight')) {
        this.renderComboSpotlight('home-combo-spotlight');
      }
      if (document.getElementById('home-reels-section')) {
        this.renderReelsSection('home-reels-section');
      }
      if (document.getElementById('shop-reels-section')) {
        this.renderReelsSection('shop-reels-section');
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
        const initialPrice = (p.weight_pricing && p.weight_pricing[firstWeight]) || p.sale_price;

        const variantPillsHtml = (p.weights && p.weights.length > 1)
          ? `<div class="bb-card-variant-pills">
              ${p.weights.map((w, wIdx) => {
                const wPrice = (p.weight_pricing && p.weight_pricing[w]) || p.sale_price;
                return `<button type="button" class="bb-card-pill ${wIdx === 0 ? 'active' : ''}" data-weight="${escHtml(w)}" data-price="${wPrice}" onclick="Bornobazar.selectCardVariant(this, '${p.id}', '${escHtml(w)}', ${wPrice})">${escHtml(w)}</button>`;
              }).join('')}
            </div>`
          : `<div class="bb-card-weights">
              <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 6a2 2 0 012-2h8a2 2 0 012 2v2H4V6zm-2 4a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z" clip-rule="evenodd"/>
              </svg>
              <span>${firstWeight || 'স্ট্যান্ডার্ড জার'}</span>
            </div>`;

        html += `
          <div class="bb-product-card" data-id="${p.id}" data-selected-weight="${escHtml(firstWeight)}" data-selected-price="${initialPrice}">
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
            <div class="bb-card-rating" style="display: flex; align-items: center; gap: 4px; margin-bottom: 6px;">
              <span class="bb-card-stars" style="color: #D97706; display: inline-flex; gap: 2px;">
                ${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}${SVG_STAR_SM}
              </span>
              <span class="bb-card-score" style="font-size: 16px; color: var(--bb-text-muted); font-weight: 600; margin-left: 4px;">৪.৯ (৩৬)</span>
            </div>
            ${variantPillsHtml}
            <div class="bb-card-price-row">
              <span class="bb-price-current">${fmtPrice(initialPrice)}</span>
              ${regPrice}
            </div>
            <div class="bb-card-actions-dual">
              <button type="button" class="bb-btn-cart-outline" onclick="Bornobazar.addCardSelectedToCart('${p.id}', this)" title="কার্টে যোগ করুন">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <span>কার্ট</span>
              </button>
              <button type="button" class="bb-btn-quick-buy" onclick="Bornobazar.openCardQuickOrder('${p.id}', this)" title="১ ক্লিকে সরাসরি ক্যাশ অন ডেলিভারি অর্ডার">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>১-ক্লিকে অর্ডার</span>
              </button>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    },

    selectCardVariant: function (btnEl, productId, weight, price) {
      const card = btnEl.closest('.bb-product-card');
      if (!card) return;
      card.querySelectorAll('.bb-card-pill').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
      card.setAttribute('data-selected-weight', weight);
      card.setAttribute('data-selected-price', price);
      const priceEl = card.querySelector('.bb-price-current');
      if (priceEl) priceEl.textContent = fmtPrice(price);
    },

    addCardSelectedToCart: function (productId, btnEl) {
      const card = btnEl.closest('.bb-product-card');
      const prod = this.findProduct(productId);
      if (!prod) return;
      const weight = card ? (card.getAttribute('data-selected-weight') || (prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড') : ((prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড');
      this.addToCart(productId, weight, 1);
    },

    openCardQuickOrder: function (productId, btnEl) {
      const card = btnEl.closest('.bb-product-card');
      const prod = this.findProduct(productId);
      if (!prod) return;
      const weight = card ? (card.getAttribute('data-selected-weight') || (prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড') : ((prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড');
      this.openQuickOrderModal(productId, weight, 1);
    },

    /* ==========================================================================
       1-CLICK EXPRESS CHECKOUT MODAL (HIGH CONVERSION LOCAL COD)
       ========================================================================== */
    openQuickOrderModal: function (productId, initialWeight, initialQty) {
      const prod = this.findProduct(productId);
      if (!prod) return;
      let modalBackdrop = document.getElementById('bb-quick-order-modal');
      if (!modalBackdrop) {
        modalBackdrop = document.createElement('div');
        modalBackdrop.id = 'bb-quick-order-modal';
        modalBackdrop.className = 'bb-quick-modal-backdrop';
        document.body.appendChild(modalBackdrop);
      }

      let selectedWeight = initialWeight || (prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড';
      let qty = Math.max(1, parseInt(initialQty, 10) || 1);
      let deliveryArea = 'inside_dhaka';

      const getUnitPrice = (w) => {
        if (prod.weight_pricing && prod.weight_pricing[w]) return prod.weight_pricing[w];
        return prod.sale_price;
      };

      const renderModal = () => {
        const unitPrice = getUnitPrice(selectedWeight);
        const subtotal = unitPrice * qty;
        const shipping = deliveryArea === 'inside_dhaka' ? 70 : 130;
        const total = subtotal + shipping;
        const regPrice = prod.regular_price > unitPrice ? prod.regular_price * qty : 0;

        const weightPillsHtml = (prod.weights && prod.weights.length > 1) ? `
          <div style="margin-top: 8px;">
            <div style="font-size: 16px; font-weight: 600; color: var(--bb-text-muted); margin-bottom: 6px;">ওজন / সাইজ নির্বাচন করুন:</div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${prod.weights.map(w => `
                <button type="button" class="bb-card-pill ${w === selectedWeight ? 'active' : ''}" onclick="Bornobazar._updateQuickModalWeight('${w}')">
                  ${w}
                </button>
              `).join('')}
            </div>
          </div>
        ` : '';

        modalBackdrop.innerHTML = `
          <div class="bb-quick-modal-dialog" onclick="event.stopPropagation()">
            <div class="bb-quick-modal-header">
              <div class="bb-quick-modal-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--bb-primary);">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>১-ক্লিকে সরাসরি অর্ডার (ক্যাশ অন ডেলিভারি)</span>
              </div>
              <button type="button" class="bb-quick-modal-close" onclick="Bornobazar.closeQuickOrderModal()" aria-label="বন্ধ করুন">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Product preview -->
            <div class="bb-quick-product-strip">
              <img src="${prod.primary_image || 'Logo/bornobazar-logo.png'}" alt="${escHtml(prod.name_bn)}" class="bb-quick-product-img">
              <div class="bb-quick-product-info">
                <div class="bb-quick-product-name">${escHtml(prod.name_bn)}</div>
                <div class="bb-quick-product-variant">${selectedWeight}</div>
                <div class="bb-quick-product-price">
                  ${fmtPrice(unitPrice)}
                  ${regPrice > subtotal ? `<s style="font-size: 16px; color: var(--bb-text-subtle); margin-left: 6px;">${fmtPrice(regPrice / qty)}</s>` : ''}
                </div>
              </div>
              <!-- Quantity stepper -->
              <div style="display: flex; align-items: center; border: 1.5px solid var(--bb-border-medium); border-radius: 8px; overflow: hidden; background: #fff;">
                <button type="button" onclick="Bornobazar._updateQuickModalQty(-1)" style="width: 32px; height: 32px; font-weight: 700; font-size: 16px; background: none; border: none; cursor: pointer;">&minus;</button>
                <span style="width: 32px; text-align: center; font-weight: 700; font-size: 16px;">${qty}</span>
                <button type="button" onclick="Bornobazar._updateQuickModalQty(1)" style="width: 32px; height: 32px; font-weight: 700; font-size: 16px; background: none; border: none; cursor: pointer;">&plus;</button>
              </div>
            </div>

            ${weightPillsHtml}

            <!-- Fast Form -->
            <form id="bb-quick-order-form" onsubmit="Bornobazar._submitQuickOrder(event, '${prod.id}')" style="margin-top: 16px;">
              <div class="bb-quick-form-group">
                <label class="bb-quick-label" for="qo_name">আপনার নাম *</label>
                <input type="text" id="qo_name" class="bb-quick-input" placeholder="যেমন: মোহাম্মদ রফিকুল ইসলাম" required>
              </div>

              <div class="bb-quick-form-group">
                <label class="bb-quick-label" for="qo_phone">মোবাইল নম্বর (১১ ডিজিট) *</label>
                <input type="tel" id="qo_phone" class="bb-quick-input" placeholder="01XXXXXXXXX" pattern="01[3-9][0-9]{8}" required>
              </div>

              <div class="bb-quick-form-group">
                <label class="bb-quick-label" for="qo_address">সম্পূর্ণ ডেলিভারি ঠিকানা *</label>
                <input type="text" id="qo_address" class="bb-quick-input" placeholder="বাড়ি/রোড নং, থানা/উপজেলা, জেলা" required>
              </div>

              <div class="bb-quick-form-group">
                <label class="bb-quick-label">ডেলিভারি এলাকা বাছাই করুন:</label>
                <div class="bb-quick-delivery-options">
                  <div class="bb-quick-delivery-card ${deliveryArea === 'inside_dhaka' ? 'active' : ''}" onclick="Bornobazar._updateQuickModalArea('inside_dhaka')">
                    <input type="radio" name="qo_area" value="inside_dhaka" ${deliveryArea === 'inside_dhaka' ? 'checked' : ''} style="accent-color: var(--bb-primary);">
                    <span>ঢাকার ভিতরে (৳৭০)</span>
                  </div>
                  <div class="bb-quick-delivery-card ${deliveryArea === 'outside_dhaka' ? 'active' : ''}" onclick="Bornobazar._updateQuickModalArea('outside_dhaka')">
                    <input type="radio" name="qo_area" value="outside_dhaka" ${deliveryArea === 'outside_dhaka' ? 'checked' : ''} style="accent-color: var(--bb-primary);">
                    <span>ঢাকার বাইরে (৳১৩০)</span>
                  </div>
                </div>
              </div>

              <!-- Live order summary -->
              <div class="bb-quick-order-summary">
                <div class="bb-quick-summary-row">
                  <span>পণ্যের মূল্য (${qty}টি)</span>
                  <span>${fmtPrice(subtotal)}</span>
                </div>
                <div class="bb-quick-summary-row">
                  <span>ডেলিভারি চার্জ</span>
                  <span>${fmtPrice(shipping)}</span>
                </div>
                <div class="bb-quick-summary-row total">
                  <span>সর্বমোট প্রদেয়</span>
                  <span>${fmtPrice(total)}</span>
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="bb-btn bb-btn-primary bb-btn-lg bb-btn-full" style="justify-content: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>অর্ডার নিশ্চিত করুন — ক্যাশ অন ডেলিভারি</span>
              </button>

              <div class="bb-quick-trust-notice">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                <span>কোনো অগ্রিম পেমেন্ট নেই &bull; পণ্য দেখে টাকা দিন</span>
              </div>

              <!-- Direct WhatsApp button -->
              <button type="button" class="bb-btn bb-btn-secondary bb-btn-sm bb-btn-full" style="margin-top: 10px; justify-content: center; gap: 8px; color: #128C7E;" onclick="Bornobazar._orderViaWhatsApp('${prod.name_bn}', '${selectedWeight}', ${qty}, ${total})">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp-এ সরাসরি অর্ডার করুন</span>
              </button>
            </form>
          </div>
        `;
      };

      this._updateQuickModalWeight = (w) => {
        selectedWeight = w;
        renderModal();
      };
      this._updateQuickModalQty = (delta) => {
        qty = Math.max(1, qty + delta);
        renderModal();
      };
      this._updateQuickModalArea = (area) => {
        deliveryArea = area;
        renderModal();
      };
      this._submitQuickOrder = (e, pId) => {
        e.preventDefault();
        const name = document.getElementById('qo_name').value.trim();
        const phone = document.getElementById('qo_phone').value.trim();
        const address = document.getElementById('qo_address').value.trim();
        if (!name || !phone || !address) return;

        const unitPrice = getUnitPrice(selectedWeight);
        const shipping = deliveryArea === 'inside_dhaka' ? 70 : 130;
        const subtotal = unitPrice * qty;
        const total = subtotal + shipping;
        const orderId = 'BB-' + Math.floor(100000 + Math.random() * 900000);

        const orderData = {
          orderId: orderId,
          customer: { name, phone, address, area: deliveryArea },
          items: [{
            id: prod.id,
            name_bn: prod.name_bn,
            weight: selectedWeight,
            price: unitPrice,
            qty: qty,
            image: prod.primary_image
          }],
          subtotal: subtotal,
          shipping: shipping,
          total: total,
          date: new Date().toLocaleDateString('bn-BD')
        };

        localStorage.setItem('bb_last_order', JSON.stringify(orderData));
        this.closeQuickOrderModal();
        window.location.href = 'order-success.html?order=' + orderId;
      };

      this._orderViaWhatsApp = (name, weight, q, tot) => {
        const text = `আসসালামু আলাইকুম! বর্ণবাজার-এ সরাসরি অর্ডার করতে চাই:\n\nপণ্য: ${name} (${weight})\nপরিমাণ: ${q}টি\nমোট: ${fmtPrice(tot)} (ক্যাশ অন ডেলিভারি)\n\nঅনুগ্রহ করে আমার অর্ডারটি গ্রহণ করুন।`;
        window.open('https://wa.me/8801922379382?text=' + encodeURIComponent(text), '_blank');
      };

      renderModal();
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';

      modalBackdrop.onclick = (e) => {
        if (e.target === modalBackdrop) {
          this.closeQuickOrderModal();
        }
      };
    },

    closeQuickOrderModal: function () {
      const modal = document.getElementById('bb-quick-order-modal');
      if (modal) {
        modal.classList.remove('open');
      }
      document.body.style.overflow = '';
    },

    /* ==========================================================================
       HOMEPAGE COMBO & BUNDLE SPOTLIGHT
       ========================================================================== */
    renderComboSpotlight: function (containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const combos = this.products.filter(p => p.category === 'স্পেশাল কম্বো').slice(0, 4);
      if (combos.length === 0) return;

      const comboBadges = [
        { top: 'বেস্টসেলার গিফট বক্স', save: 'সাশ্রয় ৳৭০', items: '৬টি কাঁচের জার: তেঁতুল, বরই, আলুবোখারা, রসুন, কালোজিরা ও রসুন-কালোজিরা মিক্স' },
        { top: 'রোগ প্রতিরোধক কম্বো', save: 'সাশ্রয় ৳২০০', items: '৪টি স্বাস্থ্যকর জার: প্রিমিয়াম রসুন আচার, কালোজিরা আচার ও মধু-কালোজিরা' },
        { top: 'পাহাড়ি ও দেশি কম্বো', save: 'সাশ্রয় ৳১৫০', items: 'পাহাড়ি জলপাই, চালতা, কাঁচা আম ও বরইয়ের টক-ঝাল-মিষ্টি অনন্য স্বাদ' },
        { top: 'শাহি আচার কম্বো', save: 'সাশ্রয় ৳১০০', items: 'পোলাও ও বিরিয়ানির সেরা সঙ্গ: আলুবোখারা, রসুন আচার ও ডালিম আচার' }
      ];

      let cardsHtml = '';
      combos.forEach((c, idx) => {
        const meta = comboBadges[idx] || comboBadges[0];
        const regPriceHtml = (c.regular_price > c.sale_price)
          ? `<span class="bb-combo-price-reg">${fmtPrice(c.regular_price)}</span>`
          : '';
        const weightText = (c.weights && c.weights.length > 0) ? c.weights.join(', ') : '১.২ কেজি';

        cardsHtml += `
          <div class="bb-combo-card">
            <div class="bb-combo-card-img-wrap">
              <a href="product.html?id=${c.id}">
                <img src="${c.primary_image || 'Logo/bornobazar-logo.png'}" alt="${escHtml(c.name_bn)}" loading="lazy">
              </a>
              <div class="bb-combo-badge-top">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>${meta.top}</span>
              </div>
              <div class="bb-combo-savings-badge">${meta.save}</div>
            </div>
            <div class="bb-combo-body">
              <h3 class="bb-combo-title">
                <a href="product.html?id=${c.id}">${escHtml(c.name_bn)}</a>
              </h3>
              <p class="bb-combo-desc">${escHtml(c.description || '')}</p>
              <div class="bb-combo-items-list">
                <strong>প্যাকে যা থাকছে:</strong>
                <span>${meta.items} (${weightText})</span>
              </div>
              <div class="bb-combo-footer">
                <div class="bb-combo-price-row">
                  <span class="bb-combo-price-current">${fmtPrice(c.sale_price)}</span>
                  ${regPriceHtml}
                </div>
                <div class="bb-card-actions-dual">
                  <button type="button" class="bb-btn-cart-outline" onclick="Bornobazar.addToCart('${c.id}', '${c.weights ? c.weights[0] : ''}', 1)">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <span>কার্ট</span>
                  </button>
                  <button type="button" class="bb-btn-quick-buy" onclick="Bornobazar.openQuickOrderModal('${c.id}', '${c.weights ? c.weights[0] : ''}', 1)">
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <span>১-ক্লিকে অর্ডার</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = `
        <div class="bb-container">
          <div class="bb-section-header" style="text-align: center; margin-bottom: 28px;">
            <span class="bb-badge bb-badge-primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 10px;">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              জনপ্রিয় অফার
            </span>
            <h2 class="bb-section-title">স্পেশাল কম্বো ও সেভার বান্ডেল</h2>
            <p class="bb-section-subtitle" style="font-size: 16px; color: var(--bb-text-muted); max-width: 680px; margin: 0 auto;">
              একসাথে একাধিক খাঁটি স্বাদের আনন্দ নিন — আকর্ষণীয় কম্বো ছাড়ে বেশি সাশ্রয় করুন ও ৬৪ জেলায় দ্রুত ক্যাশ অন ডেলিভারি সুবিধা নিন।
            </p>
          </div>
          <div class="bb-combo-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    },

    /* ==========================================================================
       PRODUCT PAGE: FREQUENTLY BOUGHT TOGETHER / BUNDLE BOX
       ========================================================================== */
    renderBundleBox: function (containerId, currentProduct) {
      const container = document.getElementById(containerId);
      if (!container || !currentProduct) return;

      const others = this.products.filter(p => p.id !== currentProduct.id);
      if (others.length < 2) return;

      const item1 = currentProduct;
      const item2 = others.find(p => p.id === 'BB-ACH-012') || others[0];
      const item3 = others.find(p => p.id === 'BB-ACH-009') || others[1];

      const price1 = item1.sale_price;
      const price2 = item2.sale_price;
      const price3 = item3.sale_price;
      const regularSum = price1 + price2 + price3;
      const discount = 150;
      const bundlePrice = Math.max(100, regularSum - discount);

      container.innerHTML = `
        <div class="bb-bundle-box">
          <div class="bb-bundle-header">
            <div>
              <span class="bb-badge bb-badge-primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 6px;">
                কম্বো অফার
              </span>
              <h3 class="bb-bundle-title">একসাথে কিনুন ও সাশ্রয় করুন (Bundle & Save)</h3>
            </div>
            <span class="bb-bundle-badge">বিশেষ ছাড় ৳${discount}</span>
          </div>

          <div class="bb-bundle-items-row">
            <div class="bb-bundle-single-item">
              <img src="${item1.primary_image || 'Logo/bornobazar-logo.png'}" alt="${escHtml(item1.name_bn)}" class="bb-bundle-item-img">
              <div>
                <div class="bb-bundle-item-title">${escHtml(item1.name_bn)}</div>
                <div class="bb-bundle-item-price">${fmtPrice(price1)}</div>
              </div>
            </div>

            <div class="bb-bundle-plus-icon">+</div>

            <div class="bb-bundle-single-item">
              <img src="${item2.primary_image || 'Logo/bornobazar-logo.png'}" alt="${escHtml(item2.name_bn)}" class="bb-bundle-item-img">
              <div>
                <div class="bb-bundle-item-title">${escHtml(item2.name_bn)}</div>
                <div class="bb-bundle-item-price">${fmtPrice(price2)}</div>
              </div>
            </div>

            <div class="bb-bundle-plus-icon">+</div>

            <div class="bb-bundle-single-item">
              <img src="${item3.primary_image || 'Logo/bornobazar-logo.png'}" alt="${escHtml(item3.name_bn)}" class="bb-bundle-item-img">
              <div>
                <div class="bb-bundle-item-title">${escHtml(item3.name_bn)}</div>
                <div class="bb-bundle-item-price">${fmtPrice(price3)}</div>
              </div>
            </div>
          </div>

          <div class="bb-bundle-checkout-bar">
            <div class="bb-bundle-pricing-info">
              <div>
                <div style="font-size: 16px; color: var(--bb-text-muted);">বান্ডেল মোট মূল্য (৩টি পণ্য):</div>
                <div style="display: flex; align-items: baseline; gap: 8px;">
                  <span class="bb-bundle-total-price">${fmtPrice(bundlePrice)}</span>
                  <span class="bb-bundle-old-price">${fmtPrice(regularSum)}</span>
                  <span class="bb-bundle-save-tag">(৳${discount} সাশ্রয়!)</span>
                </div>
              </div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button type="button" class="bb-btn bb-btn-secondary" style="font-size: 16px; padding: 10px 18px;" onclick="Bornobazar.addBundleToCart(['${item1.id}', '${item2.id}', '${item3.id}'], ${bundlePrice})">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <span>কার্টে যোগ করুন</span>
              </button>
              <button type="button" class="bb-btn bb-btn-primary" style="font-size: 16px; padding: 10px 20px;" onclick="Bornobazar.quickOrderBundle(['${item1.id}', '${item2.id}', '${item3.id}'], ${bundlePrice}, '${escHtml(item1.name_bn)} + ${escHtml(item2.name_bn)} + ${escHtml(item3.name_bn)}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>১-ক্লিকে বান্ডেল অর্ডার</span>
              </button>
            </div>
          </div>
        </div>
      `;
    },

    addBundleToCart: function (productIds, bundlePrice) {
      if (!Array.isArray(productIds)) return;
      const perItemDiscount = Math.floor(150 / productIds.length);
      productIds.forEach(id => {
        const prod = this.findProduct(id);
        if (prod) {
          const w = (prod.weights && prod.weights[0]) || 'স্ট্যান্ডার্ড';
          const p = Math.max(50, prod.sale_price - perItemDiscount);
          const existing = this.cart.find(x => x.id === prod.id && x.weight === w);
          if (existing) {
            existing.qty += 1;
          } else {
            this.cart.push({
              id: prod.id,
              name_bn: prod.name_bn + ' (বান্ডেল অফার)',
              name_en: prod.name_en,
              image: prod.primary_image,
              weight: w,
              price: p,
              qty: 1
            });
          }
        }
      });
      this.saveCart();
      this.showToast('৩-প্যাক স্পেশাল বান্ডেল কার্টে যোগ করা হয়েছে (৳১৫০ ছাড়)!');
      this.openCartDrawer();
    },

    quickOrderBundle: function (productIds, bundlePrice, bundleTitle) {
      const firstProd = this.findProduct(productIds[0]);
      if (!firstProd) return;
      const syntheticBundle = {
        id: 'BUNDLE-' + Date.now(),
        name_bn: '৩-প্যাক স্পেশাল আচার বান্ডেল (' + bundleTitle + ')',
        sale_price: bundlePrice,
        regular_price: bundlePrice + 150,
        primary_image: firstProd.primary_image,
        weights: ['৩টি জারের কম্বো সেট'],
        weight_pricing: { '৩টি জারের কম্বো সেট': bundlePrice }
      };

      this.products.unshift(syntheticBundle);
      this.openQuickOrderModal(syntheticBundle.id, '৩টি জারের কম্বো সেট', 1);
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

      // Gallery with Mobile Carousel & Bottom Dots
      const galEl = document.getElementById('pd-gallery');
      const images = (p.images && p.images.length > 0) ? p.images : [p.primary_image || 'Logo/bornobazar-logo.png'];
      if (galEl) {
        galEl.innerHTML = `
          <div class="pd-gal-sticky">
            <div class="main-img pd-main-slider" id="pd-main-slider">
              ${images.map((src, i) => `
                <div class="pd-slide" data-i="${i}">
                  <img src="${src}" alt="${escHtml(p.name_bn)} - ছবি ${i+1}" loading="${i === 0 ? 'eager' : 'lazy'}">
                </div>
              `).join('')}
            </div>
            ${images.length > 1 ? `
              <div class="pd-gallery-dots" id="pd-gallery-dots" aria-label="ছবি বাছাই ডটস">
                ${images.map((_, i) => `
                  <button type="button" class="pd-gallery-dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="ছবি ${i+1}"></button>
                `).join('')}
              </div>
              <div class="pd-thumbs" id="pd-thumbs-box">
                ${images.map((src, i) => `
                  <button type="button" class="${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="ছবি থাম্বনেইল ${i+1}">
                    <img src="${src}" alt="${escHtml(p.name_bn)} ${i+1}" loading="lazy">
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `;

        const slider = document.getElementById('pd-main-slider');
        const dots = galEl.querySelectorAll('.pd-gallery-dot');
        const thumbs = galEl.querySelectorAll('.pd-thumbs button');

        const setActiveSlide = (idx) => {
          if (!slider) return;
          slider.scrollTo({
            left: idx * slider.clientWidth,
            behavior: 'smooth'
          });
          dots.forEach((d, i) => d.classList.toggle('active', i === idx));
          thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
        };

        // Scroll listener on slider to update active dot on swipe/scroll
        if (slider && images.length > 1) {
          let scrollTimeout;
          slider.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
              const width = slider.clientWidth || 1;
              const activeIdx = Math.round(slider.scrollLeft / width);
              dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
              thumbs.forEach((t, i) => t.classList.toggle('active', i === activeIdx));
            }, 50);
          }, { passive: true });
        }

        dots.forEach(dot => {
          dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.i, 10);
            setActiveSlide(idx);
          });
        });

        thumbs.forEach(thumb => {
          thumb.addEventListener('click', () => {
            const idx = parseInt(thumb.dataset.i, 10);
            setActiveSlide(idx);
          });
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

          <!-- Goosebumps-Style Bundle & Save Selector (Replacing Subscription) -->
          <div class="bb-purchase-section">
            <div class="bb-purchase-label">
              <span>ক্রয় ও সেভার বান্ডেল অপশন</span>
              <span style="font-size: 16px; color: #059669; font-weight: 700;">বান্ডেল অফারে ১৫% পর্যন্ত ছাড়!</span>
            </div>
            <div class="bb-purchase-options" id="bb-purchase-modes">
              <!-- Option 1: Single Jar -->
              <label class="bb-purchase-card active" data-bundle-mode="single">
                <input type="radio" name="bb_bundle_select" value="single" checked style="display:none;">
                <div class="bb-purchase-card-content">
                  <div class="bb-purchase-card-left">
                    <span class="bb-radio-circle"></span>
                    <div>
                      <div class="bb-purchase-title">একক বয়াম (Standard Single Jar)</div>
                      <div class="bb-purchase-desc">১টি বয়াম &bull; স্ট্যান্ডার্ড মূল্য</div>
                    </div>
                  </div>
                  <div class="bb-purchase-pricing">
                    <span class="bb-purchase-price-now" id="bundle-single-price">৳০</span>
                  </div>
                </div>
              </label>

              <!-- Option 2: Duo Pack (Save 10%) -->
              <label class="bb-purchase-card" data-bundle-mode="duo">
                <span class="bb-purchase-badge">জনপ্রিয় &bull; ১০% ছাড়</span>
                <input type="radio" name="bb_bundle_select" value="duo" style="display:none;">
                <div class="bb-purchase-card-content">
                  <div class="bb-purchase-card-left">
                    <span class="bb-radio-circle"></span>
                    <div>
                      <div class="bb-purchase-title">বান্ডেল ও সেভ — ডাবল প্যাক (২টি বয়াম)</div>
                      <div class="bb-purchase-desc">১০% সাশ্রয় &bull; একই বা কমপ্লিমেন্টারি ফ্লেভার</div>
                    </div>
                  </div>
                  <div class="bb-purchase-pricing">
                    <span class="bb-purchase-price-now" id="bundle-duo-price">৳০</span>
                    <span class="bb-purchase-price-was" id="bundle-duo-was">৳০</span>
                  </div>
                </div>
              </label>

              <!-- Option 3: Trio Saver (Save 15%) -->
              <label class="bb-purchase-card" data-bundle-mode="trio">
                <span class="bb-purchase-badge best-value">সেরা ভ্যালু &bull; ১৫% ছাড়</span>
                <input type="radio" name="bb_bundle_select" value="trio" style="display:none;">
                <div class="bb-purchase-card-content">
                  <div class="bb-purchase-card-left">
                    <span class="bb-radio-circle"></span>
                    <div>
                      <div class="bb-purchase-title">মেগা সেভার বান্ডেল — ট্রায়ো প্যাক (৩টি বয়াম)</div>
                      <div class="bb-purchase-desc">১৫% বিশেষ ছাড় &bull; পরিবার ও উপহারের সেরা পছন্দ</div>
                    </div>
                  </div>
                  <div class="bb-purchase-pricing">
                    <span class="bb-purchase-price-now" id="bundle-trio-price">৳০</span>
                    <span class="bb-purchase-price-was" id="bundle-trio-was">৳০</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

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
            <button class="btn gold" id="buy-now">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>১-ক্লিকে ক্যাশ অন ডেলিভারি অর্ডার</span>
            </button>
            <button class="btn" id="add-cart">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>কার্টে যোগ করুন</span>
            </button>
            <button class="btn wa" id="buy-wa">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>হোয়াটসঅ্যাপে অর্ডার</span>
            </button>
          </div>

          <!-- Goosebumps 4-Item Trust Strip -->
          <div class="bb-goosebumps-trust-grid">
            <div class="bb-gb-trust-item">
              <div class="bb-gb-trust-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div class="bb-gb-trust-title">খাঁটি সরিষার তেল</div>
              <div class="bb-gb-trust-sub">১০০% ঘানিভাঙা তেল</div>
            </div>
            <div class="bb-gb-trust-item">
              <div class="bb-gb-trust-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div class="bb-gb-trust-title">রোদে শুকানো আচার</div>
              <div class="bb-gb-trust-sub">প্রাকৃতিক সূর্যের তাপে</div>
            </div>
            <div class="bb-gb-trust-item">
              <div class="bb-gb-trust-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="bb-gb-trust-title">বিএসটিআই অনুমোদিত</div>
              <div class="bb-gb-trust-sub">BDS:CAC-260 মানসম্মত</div>
            </div>
            <div class="bb-gb-trust-item">
              <div class="bb-gb-trust-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="bb-gb-trust-title">ক্যাশ অন ডেলিভারি</div>
              <div class="bb-gb-trust-sub">৬৪ জেলায় দ্রুত ডেলিভারি</div>
            </div>
          </div>
          <div class="sku-line">প্রোডাক্ট কোড: <b>${escHtml(p.sku || p.id)}</b> &bull; প্রস্তুতকারক: <b>বর্ণবাজার</b>, দাড়িয়াপুর, মুজিবনগর, মেহেরপুর</div>
        `;

        // Paint Price & Variants with Bundle & Save calculations
        const priceEl = document.getElementById('pd-price');
        const chipsEl = document.getElementById('wchips');
        const qtyEl = document.getElementById('qty');
        let bundleMode = 'single'; // 'single' | 'duo' | 'trio'

        const calcBundle = (v, q) => {
          const unitPrice = v.price;
          const unitReg = v.regular;
          const singleTotal = unitPrice * q;
          const singleReg = unitReg * q;

          const duoQty = 2 * q;
          const duoReg = unitPrice * duoQty;
          const duoTotal = Math.round(duoReg * 0.90); // 10% off

          const trioQty = 3 * q;
          const trioReg = unitPrice * trioQty;
          const trioTotal = Math.round(trioReg * 0.85); // 15% off

          return {
            single: { price: singleTotal, reg: singleReg, save: Math.max(0, singleReg - singleTotal), jars: 1 * q },
            duo: { price: duoTotal, reg: duoReg, save: Math.max(0, duoReg - duoTotal), jars: duoQty },
            trio: { price: trioTotal, reg: trioReg, save: Math.max(0, trioReg - trioTotal), jars: trioQty }
          };
        };

        const paintPrice = () => {
          const v = variants[vi];
          const bData = calcBundle(v, qty);
          const current = bData[bundleMode];

          // Paint Main Price
          priceEl.innerHTML = `
            <span class="price">${fmtPrice(current.price)}</span>
            ${current.save > 0 ? `<s>${fmtPrice(current.reg)}</s><span class="save-chip">সাশ্রয় ${fmtPrice(current.save)}</span>` : (current.reg > current.price ? `<s>${fmtPrice(current.reg)}</s><span class="save-chip">সাশ্রয় ${fmtPrice(current.reg - current.price)}</span>` : '')}
          `;

          // Paint Bundle Options
          const sPriceEl = document.getElementById('bundle-single-price');
          const dPriceEl = document.getElementById('bundle-duo-price');
          const dWasEl = document.getElementById('bundle-duo-was');
          const tPriceEl = document.getElementById('bundle-trio-price');
          const tWasEl = document.getElementById('bundle-trio-was');

          if (sPriceEl) sPriceEl.textContent = fmtPrice(bData.single.price);
          if (dPriceEl) dPriceEl.textContent = fmtPrice(bData.duo.price);
          if (dWasEl) dWasEl.textContent = fmtPrice(bData.duo.reg);
          if (tPriceEl) tPriceEl.textContent = fmtPrice(bData.trio.price);
          if (tWasEl) tWasEl.textContent = fmtPrice(bData.trio.reg);

          // Paint Weight Chips
          chipsEl.innerHTML = variants.map((x, i) => `
            <button class="wchip${i === vi ? ' active' : ''}" data-i="${i}">
              <b>${escHtml(x.w)}</b>
              <span>${fmtPrice(x.price)}</span>
            </button>
          `).join('');

          if (this._updateStickyBar) {
            this._updateStickyBar(current.price, bundleMode);
          }
        };

        // Bundle selector click handler
        const bundleOptionsEl = document.getElementById('bb-purchase-modes');
        if (bundleOptionsEl) {
          bundleOptionsEl.addEventListener('click', e => {
            const card = e.target.closest('.bb-purchase-card');
            if (!card) return;
            const mode = card.dataset.bundleMode;
            if (!mode) return;
            bundleMode = mode;
            bundleOptionsEl.querySelectorAll('.bb-purchase-card').forEach(c => {
              const active = c.dataset.bundleMode === bundleMode;
              c.classList.toggle('active', active);
              const radio = c.querySelector('input[type="radio"]');
              if (radio) radio.checked = active;
            });
            paintPrice();
          });
        }

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

        // CTAs with Bundle & Save payload
        document.getElementById('add-cart').onclick = () => {
          const v = variants[vi];
          const bData = calcBundle(v, qty);
          const current = bData[bundleMode];
          if (bundleMode === 'single') {
            this.addToCart(p.id, v.w, qty);
          } else {
            const label = bundleMode === 'duo' ? 'ডাবল প্যাক কম্বো (২টি বয়াম - ১০% ছাড়)' : 'মেগা সেভার ট্রায়ো (৩টি বয়াম - ১৫% ছাড়)';
            this.cart.push({
              id: `${p.id}-${bundleMode}`,
              name_bn: `${p.name_bn} — ${label}`,
              name_en: p.name_en,
              image: p.primary_image,
              weight: `${v.w} [${current.jars}টি বয়াম]`,
              price: Math.round(current.price / qty),
              qty: qty
            });
            this.saveCart();
            this.showToast(`${label} কার্টে যোগ করা হয়েছে (${fmtPrice(current.save)} সাশ্রয়)!`);
            this.openCartDrawer();
          }
        };

        document.getElementById('buy-now').onclick = () => {
          const v = variants[vi];
          const bData = calcBundle(v, qty);
          const current = bData[bundleMode];
          const label = bundleMode === 'single' ? v.w : `${v.w} (${current.jars}টি বয়ামের ${bundleMode === 'duo' ? 'ডাবল প্যাক' : 'ট্রায়ো সেভার'} সেট)`;
          this.openQuickOrderModal(p.id, label, qty);
        };

        document.getElementById('buy-wa').onclick = () => {
          const v = variants[vi];
          const bData = calcBundle(v, qty);
          const current = bData[bundleMode];
          const modeLabel = bundleMode === 'single' ? 'একক বয়াম' : (bundleMode === 'duo' ? 'ডাবল প্যাক কম্বো (১০% ছাড়)' : 'ট্রায়ো সেভার বান্ডেল (১৫% ছাড়)');
          const txt = `আসসালামু আলাইকুম! বর্ণবাজার-এ অর্ডার করতে চাই:\n\nপণ্য: ${p.name_bn}\nঅপশন: ${modeLabel} (${v.w} × ${current.jars}টি বয়াম)\nপরিমাণ: ${qty}\nসর্বমোট মূল্য: ${fmtPrice(current.price)}\nপেমেন্ট: ক্যাশ অন ডেলিভারি\n\nঅনুগ্রহ করে কনফার্ম করবেন।`;
          window.open('https://wa.me/8801922379382?text=' + encodeURIComponent(txt), '_blank');
        };

        paintPrice();

        // Ensure call-mini is completely removed
        document.querySelectorAll('.call-mini').forEach(el => el.remove());

        // Product Detailed Specifications & Accordions (Placed before FAQ)
        const specsRows = [
          ['পণ্যের নাম', `${p.name_bn} ${p.name_en ? `(${p.name_en})` : ''}`],
          ['ক্যাটাগরি', p.category],
          ['প্রোডাক্ট কোড (SKU)', p.sku || p.id],
          ['প্যাকেজিং ধরন', 'ফুড-গ্রেড প্রিমিয়াম এয়ারটাইট কাঁচের বয়াম'],
          ['উপলব্ধ সাইজ / ওজন', variants.map(v => v.w).join(', ')],
          ['সংরক্ষণ প্রণালী', p.category === 'শুটকি ও ভর্তা' ? 'খোলার পর ফ্রিজের নরমাল চেম্বারে রাখুন' : 'তেল ও মশলায় রোদে সংরক্ষিত'],
          ['প্রস্তুতকারক ও মোড়কজাতকারী', 'বর্ণবাজার — দাড়িয়াপুর, মুজিবনগর, মেহেরপুর']
        ];
        if (p.bsti_certified) {
          specsRows.splice(4, 0, ['গুণগত মান সনদ', 'BSTI অনুমোদিত (BDS:CAC-260)']);
        }

        const secItem = (title, body, open = false, iconSvg = '') => `
          <details class="pd-sec-item"${open ? ' open' : ''}>
            <summary>
              <span class="sec-title-wrap">
                ${iconSvg}
                <span>${title}</span>
              </span>
            </summary>
            <div class="sec-body">${body}</div>
          </details>
        `;

        const specsEl = document.getElementById('pd-detailed-specs-section');
        if (specsEl) {
          const sections = [
            secItem('বিস্তারিত', `
              <p style="font-size: 17px; line-height: 1.7; color: var(--bb-text-main); margin-bottom: 16px;">
                ${escHtml(p.description || 'মেহেরপুরের ঐতিহাসিক মুজিবনগরের ঘরোয়া রেসিপিতে তৈরি খাঁটি স্বাদের আচার।')}
              </p>
              <div class="bb-highlights-grid">
                <div class="bb-hl-card">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <div><b>১০০% খাঁটি ও নির্ভেজাল:</b> কোনো ক্ষতিকর রাসায়নিক প্রিজারভেটিভ বা কৃত্রিম রঙ ব্যবহার করা হয় না।</div>
                </div>
                <div class="bb-hl-card">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  <div><b>প্রাকৃতিক রোদে শুকানো:</b> মিষ্টি কড়া রোদে দীর্ঘ সময় ধরে মশলা ও তেলের রসায়ন পরিপক্ব করা হয়।</div>
                </div>
                <div class="bb-hl-card">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <div><b>বিএসটিআই সনদপ্রাপ্ত:</b> জাতীয় মান নিয়ন্ত্রণ সংস্থা বিএসটিআই কর্তৃক অনুমোদিত (BDS:CAC-260)।</div>
                </div>
              </div>
            `, true, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'),

            secItem('ডেলিভারি ও রিটার্ন পলিসি', `
              <div class="bb-policy-grid">
                <div class="bb-policy-card">
                  <h4 style="margin-top:0; font-size:17px; color:var(--bb-text-main); font-weight:700;">ডেলিভারি সময় ও চার্জ</h4>
                  <p style="margin:6px 0;">• <b>ঢাকা সিটির ভিতরে:</b> ডেলিভারি চার্জ ৳৭০। ১-২ কার্যদিবসের মধ্যে দ্রুততম সময়ে ডেলিভারি।</p>
                  <p style="margin:6px 0;">• <b>ঢাকা সিটির বাইরে (সারা দেশ):</b> ডেলিভারি চার্জ ৳১৩০। ২-৩ কার্যদিবসের মধ্যে জেলা বা থানা পর্যায়ে হোম ডেলিভারি।</p>
                  <p style="margin:6px 0;">• <b>ক্যাশ অন ডেলিভারি:</b> পণ্য হাতে পেয়ে পরীক্ষা করে সম্পূর্ণ মূল্য পরিশোধ করুন।</p>
                </div>
                <div class="bb-policy-card">
                  <h4 style="margin-top:0; font-size:17px; color:var(--bb-text-main); font-weight:700;">রিটার্ন ও রিপ্লেসমেন্ট পলিসি</h4>
                  <div class="rules-list">
                    <div class="rule"><span class="n">১</span><span>ডেলিভারিম্যানের উপস্থিতিতে পার্সেল খুলে জারের অক্ষত অবস্থা দেখে গ্রহণ করুন।</span></div>
                    <div class="rule"><span class="n">২</span><span>পরিবহনকালে জার ভাঙা বা ত্রুটিপূর্ণ পণ্য পৌঁছালে ছবি/ভিডিও সহ আমাদের জানান।</span></div>
                    <div class="rule"><span class="n">৩</span><span>আমাদের খরচে ২৪ ঘণ্টার মধ্যে নতুন পণ্য বদলে দেওয়া হবে। খাদ্যপণ্য হওয়ায় সিল খোলার পর ফেরতযোগ্য নয়।</span></div>
                  </div>
                </div>
              </div>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 114 0m-8 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>'),

            secItem('উপকরণ', `
              <p style="font-size: 16px; line-height: 1.6; color: var(--bb-text-main);">
                <b>মূল উপাদানসমূহ:</b> ${escHtml(p.ingredients || p.facts || 'খাঁটি ঘানিভাঙা সরিষার তেল, বাছাইকৃত তাজা উপাদান, ভাজা পাঁচফোড়ন, মেথি, মৌরি, বিট লবণ, জিরা, কালোজিরা, কাশ্মীরি মরিচ ও ভিনেগার।')}
              </p>
              <div class="bb-ingr-badges">
                <span class="bb-ingr-tag"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>১০০% খাঁটি সরিষার তেল</span>
                <span class="bb-ingr-tag"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>কোনো কেমিক্যাল প্রিজারভেটিভ নেই</span>
                <span class="bb-ingr-tag"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>কোনো কৃত্রিম রঙ নেই</span>
                <span class="bb-ingr-tag"><svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#059669" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>সূর্যের তাপে প্রাকৃতিকভাবে তৈরি</span>
              </div>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>'),

            secItem('পরিচিতি', `
              <p style="font-size: 16px; line-height: 1.7; color: var(--bb-text-main); margin-bottom: 12px;">
                <b>বর্ণবাজার ও মেহেরপুরের আচার ঐতিহ্য:</b> ঐতিহাসিকভাবে বিখ্যাত মেহেরপুরের মুজিবনগর থেকে উঠে আসা এক নিখাদ স্বাদ। আমাদের প্রতিটি আচার তৈরি হয় গ্রামীণ গৃহিণীদের পরম মমতায় ও আদি ঘরোয়া রেসিপির নিখুঁত অনুকরণে।
              </p>
              <p style="font-size: 16px; line-height: 1.7; color: var(--bb-text-muted);">
                বাণিজ্যিক কারখানার যান্ত্রিক বাষ্প প্রক্রিয়ার বদলে বর্ণবাজার আস্থা রেখেছে শত বছরের বাঙালি গৃহস্থালী রীতিতে — মাটির কলস ও কাঁচের বয়ামে রেখে মিষ্টি কড়া রোদে মশলার প্রতিটি দানা ফলের সাথে মিশে তৈরি করে এই রাজকীয় স্বাদ। আপনি যখন এই জারের ঢাকনা খুলবেন, পাবেন খাঁটি ঘানিভাঙা সরিষার তেল আর ভাজা পাঁচফোড়নের মনমাতানো সুবাস।
              </p>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'),

            secItem('স্পেসিফিকেশন', `
              <table class="specs">
                ${specsRows.map(r => `<tr><td>${r[0]}</td><td>${escHtml(r[1])}</td></tr>`).join('')}
              </table>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>'),

            secItem('সংরক্ষণ বিধি', `
              <ul class="bb-storage-list">
                <li><strong>চামচের পরিচ্ছন্নতা:</strong> আচার বয়াম থেকে তোলার সময় সর্বদা সম্পূর্ণ শুকনো ও পরিষ্কার স্টিল বা কাঠের চামচ ব্যবহার করুন। কখনো হাত বা ভেজা চামচ ব্যবহার করবেন না।</li>
                <li><strong>তেলের সুরক্ষা স্তর:</strong> আচারের ফল বা মশলার উপরিভাগে সর্বদা খাঁটি সরিষার তেলের একটি পাতলা স্তর রাখুন। তেল কমে গেলে সামান্য গরম করে ঠান্ডা করা সরিষার তেল ঢেলে দিন।</li>
                <li><strong>রোদে শুকানো:</strong> স্বাদ ও সুবাস দীর্ঘস্থায়ী রাখতে মাসে অন্তত ১-২ বার উজ্জ্বল মিষ্টি রোদে কয়েক ঘণ্টার জন্য বয়ামটি রাখুন।</li>
                <li><strong>স্টোরেজ টেম্পারেচার:</strong> সরাসরি স্যাঁতসেঁতে পরিবেশ বা চুলার তাপ থেকে দূরে ঠান্ডা ও ছায়াযুক্ত স্থানে রাখুন।</li>
                <li><strong>সেলফ-লাইফ:</strong> সঠিক নিয়ম মেনে সংরক্ষণ করলে সাধারণ তাপমাত্রায় ১২ মাস পর্যন্ত আচারের আসল স্বাদ ও সৌরভ পুরোপুরি অক্ষত থাকে।</li>
              </ul>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>'),

            secItem('প্রস্তুতকারক, মোড়কজাত ও বাজারজাতকারী', `
              <div class="bb-company-info-card">
                <h4 style="margin-top:0; font-size:18px; color:var(--bb-primary); font-weight:700;">বর্ণবাজার খাদ্য পণ্যসম্ভার (Bornobazar Food Products)</h4>
                <p style="margin:6px 0; font-size:16px; color:var(--bb-text-main);"><b>উৎপাদন ও মোড়কজাতকরণ কেন্দ্র:</b> দাড়িয়াপুর, ডাকঘর: মুজিবনগর, জেলা: মেহেরপুর — ৭১১০, খুলনা বিভাগ, বাংলাদেশ।</p>
                <p style="margin:6px 0; font-size:16px; color:var(--bb-text-main);"><b>বিপণন ও অনলাইন ডেলিভারি সেল:</b> বর্ণবাজার ডিজিটাল ই-কমার্স ইউনিট, ঢাকা ও মেহেরপুর।</p>
                <div class="bb-company-contact-row">
                  <div><strong>হটলাইন নম্বর:</strong> <a href="tel:09617334422" style="color:var(--bb-primary); font-weight:700;">09617-334422</a></div>
                  <div><strong>সরাসরি মোবাইল:</strong> <a href="tel:01922379382" style="color:var(--bb-primary); font-weight:700;">01922-379382</a></div>
                  <div><strong>অফিসিয়াল হোয়াটসঅ্যাপ:</strong> <a href="https://wa.me/8801922379382" target="_blank" rel="noopener" style="color:#059669; font-weight:700;">01922-379382</a></div>
                  <div><strong>বিএসটিআই সনদ:</strong> BDS:CAC-260 মানসম্মত লাইসেন্সিং</div>
                </div>
              </div>
            `, false, '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>')
          ];

          specsEl.innerHTML = `
            <div class="bb-specs-header">
              <span class="bb-specs-badge">পূর্ণাঙ্গ বিবরণ ও তথ্যাবলী</span>
              <h2 class="bb-specs-title">পণ্যের বিস্তারিত ও স্পেসিফিকেশন</h2>
              <p class="bb-specs-subtitle">ঐতিহ্যবাহী মেহেরপুরের ঘরোয়া স্বাদ, শুদ্ধতা, সংরক্ষণ ও প্রস্তুত প্রণালীর তথ্যাবলী</p>
            </div>
            <div class="bb-specs-accordion">
              ${sections.join('')}
            </div>
          `;
        }
      }

      // Below the Fold: FAQs and Verified Reviews
      const descEl = document.getElementById('pd-desc');
      if (descEl) {
        const storageFaq = p.category === 'শুটকি ও ভর্তা'
          ? 'খোলার পর ফ্রিজের নরমাল চেম্বারে রাখুন এবং ৩ মাসের মধ্যে ব্যবহার করুন।'
          : 'শুকনো-পরিষ্কার চামচ ব্যবহার করুন, মাঝে মাঝে রোদে দিন এবং প্রয়োজনে ফ্রিজে রাখুন।';

        const FAQS = [
          ['অর্ডার কীভাবে করবো?', 'ওয়েবসাইটে পছন্দের পণ্য কার্টে যোগ করে চেকআউট করুন — ক্যাশ অন ডেলিভারিতে পণ্য হাতে পেয়ে টাকা দিবেন। চাইলে সরাসরি কল করুন 09617-334422 নম্বরে অথবা হোয়াটসঅ্যাপে মেসেজ দিন।'],
          ['ডেলিভারি চার্জ কত?', 'ঢাকার ভিতরে ৳৭০, ঢাকার বাইরে ৳১৩০। চেকআউটের সময় আপনার জেলা বাছাই করলেই সঠিক ডেলিভারি চার্জ স্বয়ংক্রিয়ভাবে হিসাব হবে।'],
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

      // Render Frequently Bought Together / Bundle & Save
      if (document.getElementById('pd-bundle-wrap')) {
        this.renderBundleBox('pd-bundle-wrap', p);
      }

      // Render Shoppable Video Reels (Alpino & Instagram Reels)
      if (document.getElementById('pd-reels-section')) {
        this.renderReelsSection('pd-reels-section');
      }

      // Render Alpino Comparison Matrix
      if (document.getElementById('pd-comparison-section')) {
        this.renderComparisonSection('pd-comparison-section', p);
      }

      // Render Alpino 4-Step Heritage Artisan Process
      if (document.getElementById('pd-artisan-section')) {
        this.renderArtisanSection('pd-artisan-section');
      }

      // Initialize Alpino Sticky Buy Bar
      this.initStickyBuyBar(p, variants, () => vi, () => qty);
    },

    /* ==========================================================================
       SHOPPABLE VIDEO REELS & ALPINO / GOOSEBUMPS COMPONENTS
       ========================================================================== */
    renderReelsSection: function (containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const carouselId = 'carousel-' + containerId;
      let cardsHtml = '';

      BORNOBAZAR_REELS.forEach((r, idx) => {
        const regPriceHtml = (r.regularPrice && r.regularPrice > r.price)
          ? ` <s style="font-size: 16px; color: var(--bb-text-subtle); margin-left: 4px;">${fmtPrice(r.regularPrice)}</s>`
          : '';

        cardsHtml += `
          <div class="bb-reel-card" data-reel-idx="${idx}" onclick="if(!event.target.closest('.bb-reel-product-card')) Bornobazar.openReelModal(${idx})">
            <img class="bb-reel-poster" src="${r.poster}" alt="${escHtml(r.title)}" loading="lazy">
            <div class="bb-reel-overlay"></div>
            <div class="bb-reel-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
              <span>ভিডিও রিভিউ</span>
            </div>
            <button type="button" class="bb-reel-play-btn" aria-label="ভিডিও চালান" onclick="Bornobazar.openReelModal(${idx}); event.stopPropagation();">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="8 5 19 12 8 19 8 5"/>
              </svg>
            </button>
            <div class="bb-reel-product-card" onclick="event.stopPropagation()">
              <div class="bb-reel-product-top">
                <img class="bb-reel-product-thumb" src="${r.productThumb}" alt="${escHtml(r.productName)}" loading="lazy">
                <div class="bb-reel-product-details">
                  <div class="bb-reel-product-title" title="${escHtml(r.productName)}">${escHtml(r.shortTitle || r.productName)}</div>
                  <div class="bb-reel-product-price">${fmtPrice(r.price)}${regPriceHtml}</div>
                </div>
                <a href="product.html?id=${r.productId}" class="bb-reel-ext-btn" title="বিস্তারিত দেখুন" aria-label="বিস্তারিত দেখুন">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
              <div class="bb-reel-btn-row">
                <button type="button" class="bb-reel-add-cart-btn" onclick="Bornobazar.addToCart('${r.productId}', '${r.weight}')">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                  </svg>
                  <span>কার্টে যোগ করুন</span>
                </button>
                <button type="button" class="bb-reel-cart-icon-btn" onclick="Bornobazar.addToCart('${r.productId}', '${r.weight}')" aria-label="কার্টে যোগ করুন">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = `
        <div class="bb-container">
          <div class="bb-reels-header">
            <div class="bb-reels-header-left">
              <span class="bb-reels-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
                ভিডিও গ্যালারি ও কাস্টমার রিভিউ
              </span>
              <h2 class="bb-reels-title">আমাদের তৈরি আচার ও কাস্টমারদের গল্প</h2>
              <p class="bb-reels-subtitle" style="font-size: 16px; color: var(--bb-text-muted); margin-top: 4px;">সরাসরি ভিডিও দেখে যাচাই করে অর্ডার করুন মেহেরপুরের খাঁটি স্বাদের ঘরোয়া আচার</p>
            </div>
            <div class="bb-reels-nav-btns" style="display: flex; gap: 8px;">
              <button type="button" class="bb-reels-nav-btn bb-reels-prev" data-carousel="${carouselId}" aria-label="পূর্ববর্তী ভিডিও">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button type="button" class="bb-reels-nav-btn bb-reels-next" data-carousel="${carouselId}" aria-label="পরবর্তী ভিডিও">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          <div class="bb-reels-carousel" id="${carouselId}">
            ${cardsHtml}
          </div>
        </div>
      `;

      this.initReelsControls(carouselId);
    },

    initReelsControls: function (carouselId) {
      const carousel = document.getElementById(carouselId);
      if (!carousel) return;
      const prevBtn = document.querySelector(`.bb-reels-prev[data-carousel="${carouselId}"]`);
      const nextBtn = document.querySelector(`.bb-reels-next[data-carousel="${carouselId}"]`);

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: -260, behavior: 'smooth' });
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          carousel.scrollBy({ left: 260, behavior: 'smooth' });
        });
      }
    },

    openReelModal: function (idx) {
      if (idx < 0) idx = BORNOBAZAR_REELS.length - 1;
      if (idx >= BORNOBAZAR_REELS.length) idx = 0;
      this.currentReelIndex = idx;
      const r = BORNOBAZAR_REELS[idx];
      if (!r) return;

      const modal = document.getElementById('reel-modal');
      const iframeWrap = document.getElementById('reel-iframe-container');
      const drawer = document.getElementById('reel-modal-drawer');
      if (!modal || !iframeWrap) return;

      // Native HTML5 Video playback (High-Performance 720x1280 Video)
      iframeWrap.innerHTML = `
        <video id="reel-native-video" src="${r.videoSrc}" poster="${r.poster}" controls autoplay loop playsinline preload="auto" style="width:100%; height:100%; object-fit:cover; display:block; background:#000;">
          <source src="${r.videoSrc}" type="video/mp4">
          আপনার ব্রাউজার ভিডিও প্লে করতে পারছে না।
        </video>
      `;

      const videoEl = document.getElementById('reel-native-video');
      if (videoEl) {
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoEl.muted = true;
            videoEl.play();
          });
        }
      }

      if (drawer) {
        drawer.innerHTML = `
          <div class="bb-reel-modal-p-info">
            <img src="${r.productThumb}" alt="${escHtml(r.productName)}" class="bb-reel-modal-p-img">
            <div>
              <div style="font-size: 16px; font-weight: 700; color: var(--bb-text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px;">
                ${escHtml(r.productName)}
              </div>
              <div style="font-size: 16px; font-weight: 700; color: var(--bb-primary); font-family: var(--font-english);">
                ${fmtPrice(r.price)}
                ${r.regularPrice > r.price ? `<s style="font-size: 16px; color: var(--bb-text-subtle); margin-left: 4px;">${fmtPrice(r.regularPrice)}</s>` : ''}
              </div>
            </div>
          </div>
          <div class="bb-reel-modal-actions">
            <button type="button" class="bb-btn bb-btn-primary bb-btn-sm" style="font-size: 16px; padding: 8px 14px; border-radius: 8px;" onclick="Bornobazar.addToCart('${r.productId}', '${r.weight}')">
              কার্টে যোগ করুন
            </button>
            <a href="product.html?id=${r.productId}" class="bb-btn bb-btn-secondary bb-btn-sm" style="font-size: 16px; padding: 8px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;" title="বিস্তারিত দেখুন">
              বিস্তারিত
            </a>
          </div>
        `;
      }

      modal.classList.add('open');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    },

    closeReelModal: function () {
      const modal = document.getElementById('reel-modal');
      const iframeWrap = document.getElementById('reel-iframe-container');
      const videoEl = document.getElementById('reel-native-video');
      if (videoEl) {
        try {
          videoEl.pause();
          videoEl.removeAttribute('src');
          videoEl.load();
        } catch (e) {}
      }
      if (modal) {
        modal.classList.remove('open');
        modal.classList.remove('active');
      }
      if (iframeWrap) iframeWrap.innerHTML = '';
      document.body.style.overflow = '';
    },

    initReelsModalEvents: function () {
      const modal = document.getElementById('reel-modal');
      if (!modal) return;
      const closeBtn = document.getElementById('reel-modal-close');
      const prevBtn = document.getElementById('reel-modal-prev');
      const nextBtn = document.getElementById('reel-modal-next');

      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.closeReelModal();
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openReelModal(this.currentReelIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openReelModal(this.currentReelIndex + 1);
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeReelModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open') && !modal.classList.contains('active')) return;
        if (e.key === 'Escape') this.closeReelModal();
        if (e.key === 'ArrowLeft') this.openReelModal(this.currentReelIndex - 1);
        if (e.key === 'ArrowRight') this.openReelModal(this.currentReelIndex + 1);
      });
    },

    renderComparisonSection: function (containerId, p) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const checkIcon = `<span class="bb-comp-icon check"><svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span>`;
      const crossIcon = `<span class="bb-comp-icon cross"><svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg></span>`;

      const rows = [
        {
          num: "১",
          feature: "তেলের বিশুদ্ধতা",
          bornobazar: "১০০% কাঠের ঘানিভাঙা খাঁটি সরিষার তেল",
          others: "সস্তা পাম তেল অথবা ক্ষতিকর মিশ্র তেল"
        },
        {
          num: "২",
          feature: "রোদে শুকানোর পদ্ধতি",
          bornobazar: "স্বাভাবিক উজ্জ্বল রোদে ধীরে শুকানো ও জারণ",
          others: "কৃত্রিম বয়লার বা গ্যাস ওভেনে দ্রুত সেদ্ধ"
        },
        {
          num: "৩",
          feature: "সংরক্ষণ ও প্রিজারভেটিভ",
          bornobazar: "সম্পূর্ণ কেমিক্যাল ও ক্ষতিকর ভিনেগার মুক্ত",
          others: "বাণিজ্যিক সিন্থেটিক কেমিক্যাল ও কৃত্রিম রং"
        },
        {
          num: "৪",
          feature: "বিএসটিআই লাইসেন্স",
          bornobazar: "বিএসটিআই অনুমোদিত মান (BDS:CAC-260)",
          others: "অনুমোদনহীন বা অস্বাস্থ্যকর উৎপাদন উৎস"
        },
        {
          num: "৫",
          feature: "প্যাকেজিং ও জার",
          bornobazar: "প্রিমিয়াম ফুড-গ্রেড কাঁচের জার ও সুরক্ষিত সিল",
          others: "পাতলা ক্ষতিকর প্লাস্টিক কৌটা"
        },
        {
          num: "৬",
          feature: "স্বাদের নিশ্চয়তা",
          bornobazar: "মেহেরপুরের গ্রামীণ মা-খালাদের ঐতিহ্যবাহী রেসিপি",
          others: "বাণিজ্যিক কৃত্রিম এসেন্স ও কেমিক্যাল ফ্লেভার"
        }
      ];

      const desktopRowsHtml = rows.map(r => `
        <tr>
          <td><strong>${r.feature}</strong></td>
          <td class="bb-highlight-col">
            <div style="display:flex; align-items:center;">
              ${checkIcon}<span>${r.bornobazar}</span>
            </div>
          </td>
          <td>
            <div style="display:flex; align-items:center;">
              ${crossIcon}<span>${r.others}</span>
            </div>
          </td>
        </tr>
      `).join('');

      const mobileCardsHtml = rows.map(r => `
        <div class="bb-comp-mob-card">
          <div class="bb-comp-mob-criterion">
            <span class="bb-comp-num-pill">${r.num}</span>
            <span>${r.feature}</span>
          </div>
          <div class="bb-comp-mob-grid">
            <div class="bb-comp-mob-cell winner">
              <div class="bb-comp-mob-cell-header">
                ${checkIcon}
                <span class="cell-tag">বর্ণবাজার</span>
              </div>
              <div class="bb-comp-mob-text">${r.bornobazar}</div>
            </div>
            <div class="bb-comp-mob-cell others">
              <div class="bb-comp-mob-cell-header">
                ${crossIcon}
                <span class="cell-tag">অন্যান্য ব্র্যান্ড</span>
              </div>
              <div class="bb-comp-mob-text">${r.others}</div>
            </div>
          </div>
        </div>
      `).join('');

      container.innerHTML = `
        <div class="bb-container">
          <div class="bb-section-header" style="text-align: center; margin-bottom: 24px;">
            <span class="bb-badge bb-badge-primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 10px;">
              গুণগত মানের তুলনামূলক পর্যালোচনা
            </span>
            <h2 class="bb-section-title">কেন বর্ণবাজার সবার চেয়ে সেরা ও আলাদা?</h2>
            <p class="bb-section-subtitle" style="font-size: 16px; color: var(--bb-text-muted); max-width: 680px; margin: 0 auto;">
              খাঁটি সরিষার তেলের ঝাঁজ, স্বাভাবিক সূর্যের আলোয় জারণ ও শতভাগ স্বাস্থ্যসম্মত ঘরোয়া বিশুদ্ধতা।
            </p>
          </div>

          <!-- DESKTOP TABLE VIEW (>= 768px) -->
          <div class="bb-comparison-table-wrap">
            <table class="bb-comp-table">
              <thead>
                <tr>
                  <th style="width: 28%;">উপাদান ও উৎপাদন মানদণ্ড</th>
                  <th class="bb-highlight-col" style="width: 40%;">
                    <div style="font-size: 18px; font-weight: 700;">বর্ণবাজার (Bornobazar)</div>
                    <div style="font-size: 14px; font-weight: 400; opacity: 0.95; margin-top: 2px;">ঐতিহ্যবাহী খাঁটি আচার</div>
                  </th>
                  <th style="width: 32%;">সাধারণ বাজার ও অন্যান্য ব্র্যান্ড</th>
                </tr>
              </thead>
              <tbody>
                ${desktopRowsHtml}
              </tbody>
            </table>
          </div>

          <!-- MOBILE RESPONSIVE CARD VIEW (< 768px, ZERO HORIZONTAL SCROLL) -->
          <div class="bb-comparison-mobile-wrap">
            <div class="bb-comp-mob-banner">
              <div class="bb-comp-mob-brand winner">
                <div class="bb-brand-badge-pill gold">সেরা মান</div>
                <div class="bb-brand-name">বর্ণবাজার</div>
                <div class="bb-brand-tagline">ঐতিহ্যবাহী খাঁটি আচার</div>
              </div>
              <div class="bb-comp-mob-vs">VS</div>
              <div class="bb-comp-mob-brand others">
                <div class="bb-brand-badge-pill muted">বাজারের সাধারণ</div>
                <div class="bb-brand-name">অন্যান্য ব্র্যান্ড</div>
                <div class="bb-brand-tagline">বাণিজ্যিক মিশ্র আচার</div>
              </div>
            </div>

            <div class="bb-comp-mob-list">
              ${mobileCardsHtml}
            </div>
          </div>
        </div>
      `;
    },

    renderArtisanSection: function (containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = `
        <div class="bb-container">
          <div class="bb-section-header" style="text-align: center; margin-bottom: 24px;">
            <span class="bb-badge bb-badge-primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-weight: 700; font-size: 16px; margin-bottom: 10px;">
              প্রস্তুতপ্রণালী ও বিশুদ্ধতা
            </span>
            <h2 class="bb-section-title">যেভাবে তৈরি হয় আপনার পছন্দের বর্ণবাজার আচার</h2>
            <p class="bb-section-subtitle" style="font-size: 16px; color: var(--bb-text-muted); max-width: 650px; margin: 0 auto;">
              ঐতিহ্য আর আধুনিক খাদ্যমানের নিখুঁত সমন্বয়ে ৪টি সুনির্দিষ্ট ধাপে প্রস্তুত হয় আমাদের প্রতিটি জার।
            </p>
          </div>

          <div class="bb-artisan-grid">
            <div class="bb-artisan-card">
              <div class="bb-artisan-step-num">১</div>
              <h3 class="bb-artisan-card-title">বাছাইকৃত দেশি ফল সংগ্রহ</h3>
              <p class="bb-artisan-card-desc">মেহেরপুরের নিজস্ব ও স্থানীয় কৃষকদের বাগান থেকে পরিপক্ক আম, বরই, রসুন, জলপাই ও তেঁতুল সরাসরি সংগ্রহ করা হয়।</p>
            </div>

            <div class="bb-artisan-card">
              <div class="bb-artisan-step-num">২</div>
              <h3 class="bb-artisan-card-title">খোলা রোদে প্রাকৃতিক জারণ</h3>
              <p class="bb-artisan-card-desc">কোনো বয়লার নয়—খোলা আকাশের নিচে মিষ্টি কড়া রোদে শুকিয়ে উপাদানের প্রাকৃতিক আর্দ্রতা দূর করে স্বাদ বহুগুণ বৃদ্ধি করা হয়।</p>
            </div>

            <div class="bb-artisan-card">
              <div class="bb-artisan-step-num">৩</div>
              <h3 class="bb-artisan-card-title">ঘানিভাঙা সরিষার তেল ও মশলা</h3>
              <p class="bb-artisan-card-desc">১০০% খাঁটি ঝাঁজালো ঘানিভাঙা সরিষার তেল ও ঘরে ভাজা পাঁচফোড়ন মশলায় মাখিয়ে দীর্ঘস্থায়ী প্রাকৃতিক সংরক্ষণ নিশ্চিত করা হয়।</p>
            </div>

            <div class="bb-artisan-card">
              <div class="bb-artisan-step-num">৪</div>
              <h3 class="bb-artisan-card-title">ফুড-গ্রেড এয়ার-টাইট গ্লাস জার</h3>
              <p class="bb-artisan-card-desc">পরিশোধিত কাঁচের জারে সিলপ্যাক করে স্বাস্থ্যসম্মত উপায়ে সারা দেশে ক্যাশ অন ডেলিভারিতে পৌঁছে দেওয়া হয়।</p>
            </div>
          </div>
        </div>
      `;
    },

    initStickyBuyBar: function (p, variants, getVi, getQty) {
      const bar = document.getElementById('sticky-buy-bar');
      if (!bar || !p) return;

      const imgEl = document.getElementById('sticky-bar-img');
      const titleEl = document.getElementById('sticky-bar-title');
      const weightEl = document.getElementById('sticky-bar-weight');
      const priceEl = document.getElementById('sticky-bar-price');
      const addBtn = document.getElementById('sticky-bar-add');
      const buyBtn = document.getElementById('sticky-bar-buy');

      if (imgEl) imgEl.src = p.primary_image || 'Logo/bornobazar-logo.png';
      if (titleEl) titleEl.textContent = p.name_bn;

      const updateStickyMeta = (dynamicPrice, activeBundleMode) => {
        const vi = getVi();
        const qty = getQty();
        const v = variants[vi] || variants[0];
        const mode = activeBundleMode || 'single';
        const label = mode === 'single' ? v.w : `${v.w} (${mode === 'duo' ? '২-প্যাক কম্বো' : '৩-প্যাক বান্ডেল'})`;
        if (weightEl) weightEl.textContent = label;
        if (priceEl) priceEl.textContent = fmtPrice(dynamicPrice || (v.price * qty));
      };

      updateStickyMeta();
      this._updateStickyBar = updateStickyMeta;

      if (addBtn) {
        addBtn.onclick = () => {
          const vi = getVi();
          const qty = getQty();
          this.addToCart(p.id, variants[vi].w, qty);
        };
      }

      if (buyBtn) {
        buyBtn.onclick = () => {
          const vi = getVi();
          const qty = getQty();
          const v = variants[vi] || variants[0];
          this.openQuickOrderModal(p.id, v.w, qty);
        };
      }

      // Scroll listener: show sticky bar once past main buy buttons
      const triggerEl = document.getElementById('buy-now') || document.getElementById('pd-price');
      if (!triggerEl) return;

      window.addEventListener('scroll', () => {
        const rect = triggerEl.getBoundingClientRect();
        if (rect.bottom < 0) {
          bar.classList.add('visible');
        } else {
          bar.classList.remove('visible');
        }
      }, { passive: true });
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
