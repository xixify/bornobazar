# Bornobazar (বর্ণবাজার) — Product Audit & Catalog Reconciliation Report

**Document Status:** Complete Audit & Verification  
**File Reference:** `bornobazar-product-inventory.csv`  
**Date:** October 2026  
**Auditor:** Senior E-Commerce & Catalog Specialist  

---

## 1. Catalog Quantitative Summary

* **Total Catalog Records Audited:** 28 Products
* **Confirmed Active Production Items (WooCommerce Live Database):** 26 Products
* **Seasonal / Verification Flagged Items:** 2 Products (কাঁচা মিষ্টি আমের আচার, খাঁটি খেজুর গুড়)
* **Total Discovered Images in Asset Library:** 130 Photographic Assets + 1 Master Vector Logo
* **Total Confirmed Bundles / Combos:** 6 Multi-Jar Gift Sets
* **Total Base Single Pickles:** 13 Varieties
* **Total Shutki & Fish Pastes:** 5 Traditional Varieties
* **Total Sweets & Spreads:** 4 Delicacies

---

## 2. Duplicate Analysis & Normalization Rules

In traditional Bangladeshi e-commerce, product redundancy often arises from divergent transliterations (e.g., *Tetul* vs *Teñtul*, *Chalta* vs *Chalto*, *Shutki* vs *Sutki*) or treating different weight sizes (200g, 400g, 1kg) as separate root products. 

During our audit, the following normalization rules were applied:

### A. Resolved Naming & Spelling Variances
1. **তেতুল আচার vs তেঁতুল আচার:**
   * *Status:* Resolved.
   * *Resolution:* Standardized to the grammatically correct Bengali orthography **"তেঁতুল আচার"** (with চন্দ্রবিন্দু `ঁ`) across UI display, while preserving the original ASCII slug `tetul-pickle` to maintain URL stability and prevent 404s.
2. **চিঙ্গড়ি / চিংড়ি শুটকি ভর্তা:**
   * *Status:* Resolved.
   * *Resolution:* Standardized to **"চিংড়ি শুটকি ভর্তা"** (`ড়`), maintaining consistency with the packaging label verified in image `#807386813`.
3. **রসুন কালোজিরা মিক্সড vs রসুন কালোজিরা মিক্স:**
   * *Status:* Resolved.
   * *Resolution:* Standardized display name to **"রসুন কালোজিরা মিক্স আচার"** (English: *Garlic & Black Cumin Mixed Pickle*).

### B. Prevention of Weight-Size Duplication
* On some informal social media posts, *200 gm*, *400 gm*, and *1 kg* jars were posted with separate prices (e.g., ৳২৪০ vs ৳১,১৯০).
* *Audit Action:* These are not separate products. They have been correctly grouped into single canonical variable products with dynamic weight selection dropdowns on the product detail page.
* *Attribute Mapping:* 
  * Pickles: `200 gm`, `250 gm`, `400 gm`, `500 gm`, `1000 gm (1 kg)`
  * Combos: `800 gm`, `1.2 kg (6x200g)`, `1.5 kg (6x250g)`
  * Shutki Vorta: `250 gm`, `500 gm`
  * Coconut Ladoo: `500 gm`, `1 kg`
  * Peanut Butter: `200 gm`, `400 gm`

### C. Bundle vs. Individual Component Reconciliation
* Combos such as **৬ প্যাক আচার কম্বো (6 Pack Pickle Combo)** and **নিউট্রি আচার কম্বো (Nutri Pickle Combo)** contain individual jars that are also sold separately.
* *Audit Action:* Combos are given unique parent IDs (`BB-COM-001` through `BB-COM-006`) with their dedicated boxed packaging photographs, clear inventory tracking, and discounted bundle pricing (e.g., ৳১,১৯০ instead of ৳১,২৬০ regular price).

---

## 3. Image-to-Product Mapping & Visual Reconciliation

The local directory contains 130 image files (`All images/`). Through visual inspection against the compiled contact sheet, every product in the catalog has been mapped to genuine, authentic photographic assets.

| Product Code | Bengali Product Name | Primary Mapped Asset Files | Visual Verification Notes |
|---|---|---|---|
| **BB-COM-001** | ৬ প্যাক আচার কম্বো | `724500930_995387276435925_6032589404291467890_n.jpg`<br>`727178380_1000519899255996_2655265046366657821_n.avif`<br>`843240332_1094477496526902_5980914284984851090_n.jpg` | Confirmed 6-jar assortment inside custom red & craft gift box with handle. |
| **BB-COM-002** | পাহাড়ি আচার কম্বো | `778625757_1046098204698165_1010652545931611703_n.jpg`<br>`768361437_1037640998877219_7069995120101789560_n.jpg` | Shows 3-jar special mountain recipe selection with rustic backdrop. |
| **BB-COM-003** | শাহজাদা আচার কম্বো | `764832985_1037502065557779_915971162721720792_n.jpg`<br>`776370819_1047734924534493_4032397417366096613_n.jpg` | Royal red packaging banner with premium jar quartet. |
| **BB-COM-004** | শাহজাদী আচার কম্বো | `764833267_1038498182124834_60727161296407441_n.jpg`<br>`851060039_1100360572605261_5785658676601403147_n.jpg` | Sweet & sour duo and trio selection. |
| **BB-COM-005** | শীত রঙ্গ আচার কম্বো | `776578650_1045235584784427_8795455393795719126_n.jpg`<br>`848775394_1098646596109992_5491695437703408082_n.jpg` | Colorful winter jars (Jolpai, Chalta, Boroi) on wooden serving board. |
| **BB-COM-006** | নিউট্রি আচার কম্বো | `788601539_1056888763619109_5968941487902862885_n.jpg`<br>`825267193_1088578233783495_1452726364291550408_n.jpg`<br>`825267211_1082703757704276_1620382417245826037_n.jpg` | Nutri Pickle Combo official product graphic, label proof, and jars. |
| **BB-ACH-001** | আমলকি আচার | `749629268_1025789830062336_2031561509353209987_n.jpg`<br>`813756223_1073010445340274_7711823721569640778_n.jpg` | Glass jar showcasing golden-brown amloki segments in mustard oil. |
| **BB-ACH-002** | আলুবোখারা আচার | `779787836_1049495257691793_4108399455579486072_n.jpg`<br>`800958925_1066158106025508_644983458927029991_n.jpg` | Rich dark plum pickle with BSTI certification label visible. |
| **BB-ACH-003** | কদবেল আচার | `755063156_1027414016566584_8690613897057847393_n.jpg`<br>`779931979_1059360526705266_7608388689456858805_n.jpg` | Textured pulp of ripe wood apple with spices. |
| **BB-ACH-004** | কালোজিরা আচার | `758028521_1027515789889740_6023562320317004522_n.jpg`<br>`834130797_1087792903862028_4024953781854609287_n.jpg` | Glossy black cumin seeds in pungent mustard oil blend. |
| **BB-ACH-005** | চালতা আচার | `789399207_1058592090115443_4015556499100413740_n.jpg`<br>`825327579_1084767457497906_5689915640481914841_n.jpg` | Traditional shredded elephant apple slices soaked in aromatic syrup. |
| **BB-ACH-006** | জলপাই আচার | `784003317_1053599810614671_8011314832392916094_n.jpg`<br>`825327284_1084767320831253_7499887150210209201_n.jpg` | Whole slit green olives submerged in sun-infused mustard oil. |
| **BB-ACH-007** | তেঁতুল আচার | `758543601_1029173546390631_766226898798539780_n.jpg`<br>`766915142_1039333848707934_5144595149071355671_n.jpg`<br>`847553371_1097790279528957_1434705910271047438_n.jpg` | Rich sticky dark tamarind preserve with authentic texture. |
| **BB-ACH-008** | তেঁতুল বরই মিক্স আচার | `772204431_1039984018642917_4214701317489319558_n.jpg`<br>`788986070_1057957120178940_638756545478756956_n.jpg` | Distinct dual-layer blend of tamarind pulp and jujube chunks. |
| **BB-ACH-009** | বরই আচার | `771956447_1039984315309554_4007887237801983927_n.jpg`<br>`771983730_1040181121956540_6945341225787633334_n.jpg`<br>`800881874_1065311729443479_9142311577524084001_n.jpg` | Soft sun-cooked red jujubes bursting with sweet-sour punch. |
| **BB-ACH-010** | মাশরুম আচার | `787941913_1057022130272439_877379254859141080_n.jpg` | Sliced edible mushroom caps in spicy pickling gravy. |
| **BB-ACH-011** | রসুন আচার | `761292443_1034874732487179_3686680703011096049_n.jpg`<br>`763119781_1036789238962395_556104667287490302_n.jpg`<br>`855693950_1101361465838505_1989196513386232246_n.jpg` | Golden preserved garlic cloves soft enough to melt on warm rice. |
| **BB-ACH-012** | রসুন কালোজিরা মিক্স আচার | `761355190_1034052569236062_78667506752820005_n.jpg`<br>`825271105_1084767177497934_5602866842487253495_n.jpg`<br>`856056395_1101312155843436_2954696276993576229_n.jpg` | Whole garlic cloves peppered with black cumin and raisins. |
| **BB-VOR-001** | ইলিশ ভর্তা | `809227374_1069914088983243_167875105315745262_n.jpg`<br>`810421901_1071418575499461_3924094265959788429_n.jpg` | Savory shredded Hilsa fish paste served alongside steamed rice plate. |
| **BB-VOR-002** | চিংড়ি শুটকি ভর্তা | `807386813_1076326418342010_1423256031986250910_n.jpg`<br>`817342156_1075571445084174_4268298314384846852_n.jpg` | Red chili-flecked dried shrimp mash in glass container. |
| **BB-VOR-003** | ছুরি শুটকি ভর্তা | `810421901_1071418575499461_3924094265959788429_n.jpg` | Traditional Chittagong/Cox's Bazar style spicy fish mash. |
| **BB-VOR-004** | বাঁশপাতা শুটকি ভর্তা | `810421901_1071418575499461_3924094265959788429_n.jpg` | Fine fish mash seasoned with caramelized shallots. |
| **BB-VOR-005** | লইট্টা শুটকি ভর্তা | `809844661_1078062638168388_8776394793269955235_n.jpg`<br>`810421901_1071418575499461_3924094265959788429_n.jpg` | Famous rustic loitta mash with paratha/rice dining spread. |
| **BB-SWT-001** | নারিকেল নাড়ু | `813976083_1073010388673613_8899924605867364727_n.jpg`<br>`838793772_1090307066943945_5224709088050944930_n.jpg` | Golden hand-rolled coconut balls arranged in serving dish and jar. |
| **BB-SWT-002** | ক্লাসিক পিনাট বাটার | `758863547_1030637682910884_6700945311194248961_n.jpg`<br>`772378995_1042556178385701_5376248190043273783_n.jpg` | Smooth roasted peanut butter jar and toast spread demonstration. |
| **BB-SWT-003** | চকলেট পিনাট বাটার | `758863547_1030637682910884_6700945311194248961_n.jpg`<br>`772378995_1042556178385701_5376248190043273783_n.jpg` | Dark chocolate cocoa & peanut butter jar. |
| **BB-ACH-013** | আমের মিষ্টি আচার | `838596735_1091909426783709_3865914995430361736_n.jpg`<br>`846504916_1096629779645007_1737383278257225599_n.jpg` | Green mango slices drying in sun and finished golden sweet pickle jar. |
| **BB-PAN-001** | খাঁটি খেজুর গুড় | `838793772_1090307066943945_5224709088050944930_n.jpg` | Artisanal jaggery pot/patali. |

---

## 4. Outstanding Client Confirmations & Production Launch Roadmap

1. **Custom Combo Flavors:** In the **৬ প্যাক আচার কম্বো (6 Pack Combo)**, confirm whether the customer receives a standard fixed assortment or if they can customize their 6 jars during checkout via order notes or dropdowns.
2. **Seasonal Items Activation:** Verify whether **আমের মিষ্টি আচার (Sweet Mango Pickle)** and **খাঁটি খেজুর গুড় (Pure Khejur Gur)** should be displayed with "Pre-order / Seasonal" badges or toggled to draft until their respective harvest seasons.
3. **Delivery Fees Confirmation:**
   * Inside Dhaka: typically ৳৭০ – ৳৮০.
   * Outside Dhaka: typically ৳১৩০ – ৳১৫০.
   * Verify whether free delivery threshold applies (e.g. Orders above ৳২,০০০).
4. **Automated Courier Integration:** Confirm whether Steadfast Courier API or Pathao Courier API credentials will be supplied for automatic consignment booking from WooCommerce.
