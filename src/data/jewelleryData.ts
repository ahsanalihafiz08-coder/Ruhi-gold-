export interface JewelleryCategory {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  materials: string[];
  specifications: Record<string, string>;
  curatedItems: string[];
  priceInfo: string;
  priceTag: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  materials: string;
  gemstone: string;
  specifications: {
    metal: string;
    gemstone: string;
    purity: string;
    craftsmanship: string;
    dimensions?: string;
  };
  priceInfo: string;
  priceTag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: string;
  highlights: string[];
}

export const BUSINESS_INFO = {
  name: 'RUHI GOLD',
  category: 'Jewellery Store',
  phoneDisplay: '+994 998 00 04 56',
  phoneDial: '+994998000456',
  address: '580 Fifth Avenue, Suite 821, New York, New York, 10017',
  rating: 5.0,
  description: 'A premium jewellery boutique presenting elegant jewellery collections and personalised customer enquiries.',
  tagline: 'FINE JEWELLERY • TIMELESS ELEGANCE',
  headline: 'Elegance, Crafted to Last',
  subheadline: 'Discover beautifully presented jewellery and timeless designs at RUHI GOLD.',
  heroVideoUrl: 'https://res.cloudinary.com/o82tprxi/video/upload/v1793154123/Gold_necklace_rotating_in_box_468f8e83.mp4',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=580%20Fifth%20Avenue,%20Suite%20821,%20New%20York,%20NY%2010017&t=&z=16&ie=UTF8&iwloc=&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=580+Fifth+Avenue+Suite+821+New+York+NY+10017',
  getWhatsAppUrl: (message?: string) => {
    const text = message || 'Hello RUHI GOLD, I would like to enquire about your jewellery collection.';
    return `https://wa.me/994998000456?text=${encodeURIComponent(text)}`;
  }
};

// Permanent, high-reliability CDN fallback image ensuring zero broken images on Netlify/deployment
export const JEWELLERY_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    target.src = JEWELLERY_FALLBACK_IMAGE;
  }
};

// 9 About Jewellery Categories (Strictly 9 cards, 3x3) with reliable high-resolution jewellery image URLs
export const ABOUT_CATEGORIES: JewelleryCategory[] = [
  {
    id: 'gold-chain-necklaces',
    name: 'Gold Chain Necklaces',
    shortDescription: 'Master-crafted solid 18k gold curb and cable chains hand-burnished for radiant daily elegance.',
    detailedDescription: 'Handcrafted by Fifth Avenue master goldsmiths, each link is polished to mirror perfection, offering supple movement and timeless refinement.',
    image: 'https://i.ibb.co/62Zc8cY/Gold-chain-necklace-on-surface-89ed359a.jpg',
    materials: ['18k Solid Yellow Gold', 'Diamond-Cut Chamfers', 'Custom Tongue Clasp'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750 hallmark)',
      'Finishing': 'High-mirror hand burnish & diamond-cut edges',
      'Length Options': '18", 20", and 24" lengths available',
      'Weight': 'Approx. 28.5g solid weight'
    },
    curatedItems: ['Heritage Figaro Chain', 'Venetian Box Chain', 'Diamond-Cut Cuban Collar'],
    priceInfo: 'From $1,850 · Bespoke sizing available',
    priceTag: '$1,850'
  },
  {
    id: 'gold-charm-bracelets',
    name: 'Gold Charm Bracelets',
    shortDescription: 'Delicate interlocking solid gold links adorned with bespoke talismans and meaningful motifs.',
    detailedDescription: 'A celebratory collector piece designed to mark life milestones. Features durable soldered bail rings and an ergonomic spring lock.',
    image: 'https://i.ibb.co/1fMWN1wb/Gold-charm-bracelet-on-surface-fadc8e60.jpg',
    materials: ['18k Yellow Gold', 'Hand-Cast Charms', 'Double Safety Latch'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Closure Mechanism': 'Integrated safety lobster clasp',
      'Wrist Fit': 'Adjustable 6.75" to 7.5"',
      'Artisanship': 'Individually soldered keepsake charms'
    },
    curatedItems: ['Celestial Talisman Bracelet', 'Monogram Keepsake Chain', 'Botanical Charm Suite'],
    priceInfo: 'From $2,100 · Custom charms upon request',
    priceTag: '$2,100'
  },
  {
    id: 'gold-bridal-necklaces',
    name: 'Gold Bridal Necklaces',
    shortDescription: 'Opulent ceremonial bridal bibs and cascading gold collarettes crafted for milestone celebrations.',
    detailedDescription: 'Ornate goldsmithing with symmetrical filigree and cascading chandelier drops, engineered to drape seamlessly across the collarbone.',
    image: 'https://i.ibb.co/3YsMtXTW/Gold-bridal-necklace-on-background-20f78f98-1.jpg',
    materials: ['18k Solid Gold', 'Floral Pierced Filigree', 'Safety Omega Lock'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Suite Compatibility': 'Matching earrings and tikka available',
      'Crafting Hours': 'Over 85 hours master benchwork',
      'Presentation': 'Velvet archival bridal chest'
    },
    curatedItems: ['Royal Empress Collarette', 'Cascading Blossom Choker', 'Fifth Avenue Gala Suite'],
    priceInfo: 'From $4,900 · By private consultation',
    priceTag: '$4,900'
  },
  {
    id: 'minimalist-gold-bracelets',
    name: 'Minimalist Gold Bracelets',
    shortDescription: 'Sculptural polished wristwear with sleek geometric lines and comfortable daily contours.',
    detailedDescription: 'Clean modernist geometry in heavyweight 18k gold. Designed to be worn as a solo statement or stacked in harmonised yellow and rose gold alloys.',
    image: 'https://i.ibb.co/qYXLLrsY/Gold-bracelet-on-white-surface-e2dc865f.jpg',
    materials: ['18k Solid Yellow Gold', 'Ergonomic Oval Contour', 'Push-Button Release'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Profile': '4.2mm semi-flat bar profile',
      'Interior Diameter': '60mm x 50mm standard oval',
      'Finishing': 'Satin matte exterior with mirror interior'
    },
    curatedItems: ['Avenue Horizon Bangle', 'Flush Wire Cuff', 'Linear Bar Wristlet'],
    priceInfo: 'From $1,650 · Bespoke sizing available',
    priceTag: '$1,650'
  },
  {
    id: 'solid-gold-cuff-bangles',
    name: 'Solid Gold Cuff Bangles',
    shortDescription: 'Authoritative broad solid cuffs with architectural fluting and velvety hand-brushed finish.',
    detailedDescription: 'Hand-hammered and precision-formed from heavy gauge solid gold ingot. This cuff commands attention with substantial weight and effortless comfort.',
    image: 'https://i.ibb.co/pvdP1M97/Solid-gold-cuff-bangle-90bc35e3.jpg',
    materials: ['18k Heavy Gold Ingot', 'Micro-Ribbed Fluting', 'Tempered Flex Band'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Band Width': '16mm wide architectural cuff',
      'Weight': 'Approx. 42.0g solid gold weight',
      'Hallmarking': 'Hand-stamped Fifth Avenue atelier hallmark'
    },
    curatedItems: ['Imperial Fluted Cuff', 'Sovereign Ribbed Bangle', 'Brushed Ingot Torc'],
    priceInfo: 'From $2,750 · Made to order',
    priceTag: '$2,750'
  },
  {
    id: 'sculptural-gold-bangles',
    name: 'Sculptural Gold Bangles',
    shortDescription: 'High-lustre curved circular bangles with graduated thickness and seamless joint craftsmanship.',
    detailedDescription: 'Cast with precision balanced thickness, giving a fluid wave silhouette that catches and reflects ambient salon light with hypnotic brilliance.',
    image: 'https://i.ibb.co/9mxv4MJc/Gold-link-bracelet-displayed-5f4a5089.jpg',
    materials: ['18k Solid Gold', 'Mirror Finish', 'Precision Pressure Tongue'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Contour': 'Graduated undulating ribbon wave',
      'Security': 'Hidden hinge with twin safety catches',
      'Certification': 'Atelier provenance certificate included'
    },
    curatedItems: ['Aura Sculpted Bangle', 'Infinity Ribbon Torc', 'Twisted Wave Armlet'],
    priceInfo: 'From $2,350 · Boutique consultation',
    priceTag: '$2,350'
  },
  {
    id: 'gold-link-bracelets',
    name: 'Gold Link Bracelets',
    shortDescription: 'Interlocking oversized cable links hand-soldered with tactile rhythm and luxurious heft.',
    detailedDescription: 'A bold, iconic statement piece uniting vintage Italian chain craftsmanship with modern Fifth Avenue sophistication. Features an architectural clasp.',
    image: 'https://i.ibb.co/TqDnh4V0/Gold-bangle-bracelet-on-background-843ea160.jpg',
    materials: ['18k Solid Yellow Gold', 'Hand-Soldered Links', 'Signature Toggle Lock'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750)',
      'Link Gauge': '7.5mm diameter hollow-free links',
      'Total Length': '7.5 inches standard',
      'Weight': 'Approx. 34.0g pure 18k gold'
    },
    curatedItems: ['Monumental Cable Bracelet', 'Belcher Link Chain', 'Double Rolo Wristwear'],
    priceInfo: 'From $1,950 · Available now',
    priceTag: '$1,950'
  },
  {
    id: 'gemstone-solitaire-rings',
    name: 'Gemstone Solitaire Rings',
    shortDescription: 'Vivid emerald and gemstone solitaires framed by micro-pavé halos and 18k golden shanks.',
    detailedDescription: 'Natural deep saturated gemstones set in architectural bezels with optical open galleries to amplify fire, depth of hue, and scintillating sparkle.',
    image: 'https://i.ibb.co/ych31wxq/Gemstone-ring-on-surface-7911a9e7.jpg',
    materials: ['Natural Cut Gemstones', '18k Yellow Gold', 'VS1 Accent Diamonds'],
    specifications: {
      'Center Stone': 'Natural Emerald / Sapphire (approx. 2.00ct)',
      'Setting Style': 'Low-profile bezel with pavé under-gallery',
      'Shank Style': 'Comfort-fit tapered knife-edge band',
      'Certification': 'Full gemological laboratory dossier'
    },
    curatedItems: ['Regal Emerald Solitaire', 'Royal Blue Sapphire Ring', 'Sunburst Cushion Mount'],
    priceInfo: 'From $2,600 · Certified stones',
    priceTag: '$2,600'
  },
  {
    id: 'classic-gold-rings',
    name: 'Classic Gold Rings',
    shortDescription: 'Timeless comfort-fit bands and signets sculpted from rich yellow gold with enduring durability.',
    detailedDescription: 'The defining symbol of everlasting elegance. Meticulously burnished on the lathe for an ultra-smooth glide over knuckles and lifelong resilience.',
    image: 'https://i.ibb.co/spJ54S83/Gold-ring-on-surface-7284ea94.jpg',
    materials: ['18k Solid Yellow Gold (750)', 'Forged Ingot', 'Inner Comfort Curve'],
    specifications: {
      'Metal Purity': '18 Karat Solid Gold (750 hallmark)',
      'Profile': '5.0mm half-round classical dome',
      'Finishing': 'High-gloss mirror burnish',
      'Custom Engraving': 'Complimentary inside band inscription'
    },
    curatedItems: ['Heritage Dome Band', 'Fifth Avenue Signet Ring', 'Eternity Knife-Edge Band'],
    priceInfo: 'From $1,450 · Ready for custom sizing',
    priceTag: '$1,450'
  }
];

// Exactly 18 Portfolio items (Strictly 18 cards, 3x6) with exact required image URLs
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    name: 'Classic Dual Gold Bands',
    category: 'Gold Rings',
    shortDescription: 'Pair of half-round 18k solid gold bands with seamless mirror polish and ergonomic silk interiors.',
    detailedDescription: 'Crafted as a timeless duo for lifelong wear. Each ring is forged from solid 18k gold ingot and hand-burnished for a smooth glide and high-voltage gold lustre.',
    image: 'https://i.ibb.co/JF5BxtDM/Gold-rings-on-background-17e87411.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None (Pure High-Lustre Gold)',
    specifications: {
      metal: '18k Solid Yellow Gold (750)',
      gemstone: 'Solid Gold Surface',
      purity: '75.0% Fine Gold Alloy',
      craftsmanship: 'Hand-burnished comfort fit',
      dimensions: '4.5mm width, 1.9mm profile'
    },
    priceInfo: '$1,250',
    priceTag: '$1,250'
  },
  {
    id: 'port-2',
    name: 'Solitaire Emerald Cut Gemstone Ring',
    category: 'Diamond & Gemstone Rings',
    shortDescription: 'Step-cut deep green natural gemstone mounted in a four-claw 18k gold cathedral basket.',
    detailedDescription: 'Featuring an exceptional emerald step cut that showcases vibrant saturation, raised to welcome ambient light through open side gallery windows.',
    image: 'https://i.ibb.co/HLF75ncB/Gemstone-ring-on-surface-319f14a9.jpg',
    materials: '18k Yellow Gold & Platinum Prongs',
    gemstone: 'Natural Emerald-Cut Gemstone (1.95ct)',
    specifications: {
      metal: '18k Solid Gold & Pt950 Head',
      gemstone: 'Natural Emerald Cut Gemstone',
      purity: '750 Gold / Pt950',
      craftsmanship: 'Hand-notched claws under microscope',
      dimensions: '8.5mm x 6.5mm gem mounting'
    },
    priceInfo: '$2,850',
    priceTag: '$2,850'
  },
  {
    id: 'port-3',
    name: 'Diamond Pavé Eternity Band',
    category: 'Wedding & Fine Rings',
    shortDescription: 'Full eternity ribbon set with calibrated brilliant diamonds between micro-beaded borders.',
    detailedDescription: 'Continuous fire wrapping the entire circumference. Each diamond is microscopically aligned to ensure seamless reflection and silky smooth skin feel.',
    image: 'https://i.ibb.co/VYGk1ws0/Diamond-pave-wedding-band-0d865356.jpg',
    materials: 'Platinum 950 & 18k Gold Inner Core',
    gemstone: 'Calibrated Round Brilliant Diamonds (1.45 ctw)',
    specifications: {
      metal: 'Platinum 950 & 18k Yellow Gold',
      gemstone: 'F-G Color, VS1 Clarity Diamonds',
      purity: 'Hallmarked Pt950 and 750',
      craftsmanship: 'Micro-scallop pavé setting',
      dimensions: '3.2mm band width'
    },
    priceInfo: '$1,950',
    priceTag: '$1,950'
  },
  {
    id: 'port-4',
    name: 'Sculpted Solid Gold Signet Band',
    category: 'Gold Rings',
    shortDescription: 'Substantial dome signet ring in heavyweight solid 18k gold with hand-beveled shoulders.',
    detailedDescription: 'An authoritative family heirloom piece. The flat top surface is ideal for personalized monogram or coat-of-arms hand engraving in our Manhattan workshop.',
    image: 'https://i.ibb.co/yF7s3b8s/Gold-band-ring-positioned-centrally-70cfa182.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None (Engravable Solid Gold)',
    specifications: {
      metal: '18k Solid Yellow Gold',
      gemstone: 'None',
      purity: '750 Fine Gold',
      craftsmanship: 'Die-struck solid forging',
      dimensions: '12mm x 10mm top face'
    },
    priceInfo: '$1,100',
    priceTag: '$1,100'
  },
  {
    id: 'port-5',
    name: 'Fluted Gold Ring with Diamond Accents',
    category: 'Gold Rings',
    shortDescription: 'Architectural radial fluting crowned with flush-set diamond accents for subtle brilliance.',
    detailedDescription: 'Inspired by Art Deco column facades of Fifth Avenue. Alternating polished ribs and recessed channels catch dramatic light shadows throughout the day.',
    image: 'https://i.ibb.co/KcshppVN/Gold-ring-with-diamond-accents-16deba26.jpg',
    materials: '18k Yellow Gold & Natural Diamonds',
    gemstone: 'Round Brilliant Accent Diamonds (0.35 ctw)',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'VS Brilliant Cut Diamonds',
      purity: '750 Gold Fineness',
      craftsmanship: 'Precision CNC fluting & hand burnish',
      dimensions: '6.0mm wide contour band'
    },
    priceInfo: '$1,650',
    priceTag: '$1,650'
  },
  {
    id: 'port-6',
    name: 'Articulated Diamond & Gold Tennis Bracelet',
    category: 'Gold Bracelets',
    shortDescription: 'Continuous four-prong diamond links in 18k yellow gold with invisible double-safety lock.',
    detailedDescription: 'Engineered for fluid wrist drape with zero twisting. Over forty matched diamonds individually secured in protective gold prong baskets.',
    image: 'https://i.ibb.co/HpdfLBnk/Gold-tennis-bracelet-displayed-0aff1f49.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'Matched Round Diamonds (3.20 ctw)',
    specifications: {
      metal: '18k Yellow Gold (750)',
      gemstone: 'Colorless F/G, VS Diamonds',
      purity: '750 Gold',
      craftsmanship: 'Articulated box hinge links',
      dimensions: '7.0 inches length, 2.8mm width'
    },
    priceInfo: '$3,400',
    priceTag: '$3,400'
  },
  {
    id: 'port-7',
    name: 'Heritage Polished Gold Solitaire Ring',
    category: 'Gold Rings',
    shortDescription: 'Classical six-prong engagement solitaire with tapered shoulders and brilliant center stone.',
    detailedDescription: 'The defining silhouette of eternal love. The knife-edge band tapers gracefully toward the center diamond, creating an optical illusion of greater stone presence.',
    image: 'https://i.ibb.co/LzMKt8Yq/Gold-ring-on-light-background-53144ee5.jpg',
    materials: '18k Solid Gold & Platinum Prongs',
    gemstone: 'Round Brilliant Solitaire Diamond (1.05ct)',
    specifications: {
      metal: '18k Gold Shank / Pt950 Crown',
      gemstone: 'Triple Excellent Cut Diamond',
      purity: '750 Gold / 950 Platinum',
      craftsmanship: 'High cathedral six-claw setting',
      dimensions: 'Bespoke finger sizing included'
    },
    priceInfo: '$1,450',
    priceTag: '$1,450'
  },
  {
    id: 'port-8',
    name: 'Interlocking Oval Link Gold Bracelet',
    category: 'Gold Bracelets',
    shortDescription: 'Substantial oval cable links cast in heavy 18k gold with silky smooth interior finishing.',
    detailedDescription: 'A modern classic offering satisfying tactile weight and effortless elegance. Features our hand-stamped signature boutique emblem on the end link.',
    image: 'https://i.ibb.co/1fnBy6yh/Gold-bracelet-on-surface-266c29a0.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'None',
      purity: '750 Fine Gold',
      craftsmanship: 'Individual link soldering and tumble finish',
      dimensions: '7.5 inches length'
    },
    priceInfo: '$2,100',
    priceTag: '$2,100'
  },
  {
    id: 'port-9',
    name: 'Fine Gold Charm Pendant Bracelet',
    category: 'Gold Bracelets',
    shortDescription: 'Delicate open-link chain suspending handcrafted gold droplets and protective medallions.',
    detailedDescription: 'Playful yet profoundly elegant. Each charm is cast in solid gold and hand-soldered, designed to chime softly with natural arm gestures.',
    image: 'https://i.ibb.co/qz26hfX/Gold-charm-bracelet-on-surface-8de5089f.jpg',
    materials: '18k Solid Gold',
    gemstone: 'Micro diamond accents in charms',
    specifications: {
      metal: '18k Solid Yellow Gold',
      gemstone: 'Natural Accent Diamonds',
      purity: '750 Gold',
      craftsmanship: 'Modular charms on safety jump rings',
      dimensions: 'Adjustable 6.5" to 7.25"'
    },
    priceInfo: '$1,850',
    priceTag: '$1,850'
  },
  {
    id: 'port-10',
    name: 'Celestial Medallion Gold Pendant Necklace',
    category: 'Pendants',
    shortDescription: 'Intricate openwork celestial talisman with radiating rays and a central diamond accent.',
    detailedDescription: 'A symbolic emblem of protection and brilliance. Cast in warm yellow gold and strung on an Italian diamond-cut wheat chain for maximum twinkle.',
    image: 'https://i.ibb.co/gFVrkyK8/Gold-pendant-necklace-on-background-2a87b32a.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'Center Brilliant Diamond (0.15ct)',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'Round Brilliant Diamond',
      purity: '750 Fineness',
      craftsmanship: 'Lost-wax casting with pierced relief',
      dimensions: '22mm diameter medallion'
    },
    priceInfo: '$2,200',
    priceTag: '$2,200'
  },
  {
    id: 'port-11',
    name: 'Grand Bridal Cascading Gold Necklace',
    category: 'Fine Jewellery Sets',
    shortDescription: 'Magnificent multi-tiered ceremonial necklace with delicate golden arches and drop pendants.',
    detailedDescription: 'Haute joaillerie bridal masterpiece. Designed for matrimonial majesty, contouring naturally over bridal attire with breathtaking grandeur.',
    image: 'https://i.ibb.co/rfmLHfS2/Gold-bridal-necklace-on-background-20f78f98-1.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'Chandelier gold drops with diamond accents',
    specifications: {
      metal: '18k Solid Yellow Gold',
      gemstone: 'Diamond Highlights',
      purity: '750 Gold Alloy',
      craftsmanship: 'Over 100 hours artisanal assembly',
      dimensions: 'Triple tier 17-inch drape'
    },
    priceInfo: '$4,800',
    priceTag: '$4,800'
  },
  {
    id: 'port-12',
    name: 'Architectural Linear Gold Bar Necklace',
    category: 'Gold Necklaces',
    shortDescription: 'Sleek horizontal gold ingot bar suspended between delicate cable chain segments.',
    detailedDescription: 'The pinnacle of minimalist luxury. Perfectly calibrated to rest right at the collarbone hollow with pure geometric balance and mirror shine.',
    image: 'https://i.ibb.co/WNT9252Y/Gold-bar-necklace-displayed-a9fad7a6.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None (Pure Geometric Bar)',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'None',
      purity: '750 Hallmark',
      craftsmanship: 'Precision wire EDM cut & hand chamfer',
      dimensions: '38mm x 4mm bar on 16" chain'
    },
    priceInfo: '$1,750',
    priceTag: '$1,750'
  },
  {
    id: 'port-13',
    name: 'Imperial Gold Necklace & Earrings Parure',
    category: 'Fine Jewellery Sets',
    shortDescription: 'Grand gold necklace with matching chandelier drop earrings in ornate Persian lattice work.',
    detailedDescription: 'A synchronized two-piece suite celebrating royal heritage goldsmithing. Balanced weight distribution ensures effortless comfort throughout evening galas.',
    image: 'https://i.ibb.co/fV0szrFk/Gold-necklace-and-earrings-set-b31437a3.jpg',
    materials: '18k Solid Gold & Platinum Elements',
    gemstone: 'Diamond highlights and natural gems',
    specifications: {
      metal: '18k Solid Yellow Gold',
      gemstone: 'Selected Accent Gemstones',
      purity: '750 Fine Gold',
      craftsmanship: 'Matched 2-piece synchronized set',
      dimensions: '16" necklace + 45mm earrings'
    },
    priceInfo: '$5,600',
    priceTag: '$5,600'
  },
  {
    id: 'port-14',
    name: 'Royal Filigree Necklace & Earring Suite',
    category: 'Fine Jewellery Sets',
    shortDescription: 'Delicate openwork lace necklace paired with matching sculpted tear-shaped earrings.',
    detailedDescription: 'Exquisite filigree wirework handcrafted thread by thread by master jewellers. Reflects light with an ethereal, fabric-like glow.',
    image: 'https://i.ibb.co/XfRz0wt5/Gold-necklace-and-earrings-set-d44eb113.jpg',
    materials: '18k Yellow Gold Wirework',
    gemstone: 'Micro-faceted gold beads',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'None',
      purity: '750 Gold Fineness',
      craftsmanship: 'Hand-twisted wire filigree lace',
      dimensions: 'Suite in custom leather case'
    },
    priceInfo: '$5,200',
    priceTag: '$5,200'
  },
  {
    id: 'port-15',
    name: 'Sculpted Hoop Earrings & Chain Necklace Set',
    category: 'Earrings & Necklaces',
    shortDescription: 'Tapered ribbed creole hoops paired with a complementary twisted rope chain necklace.',
    detailedDescription: 'The essential daily luxury pairing. Both pieces feature matched fluting and balanced proportions, blending effortlessly into any luxury wardrobe.',
    image: 'https://i.ibb.co/ksqwSXB7/Gold-hoop-earrings-and-necklace-9faacb3d.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'None',
      purity: '750 Fine Gold',
      craftsmanship: 'Hollow-core technology with snap closure',
      dimensions: '26mm hoop + 18" rope chain'
    },
    priceInfo: '$3,100',
    priceTag: '$3,100'
  },
  {
    id: 'port-16',
    name: 'Diamond Halo Gold Teardrop Pendant',
    category: 'Pendants',
    shortDescription: 'Scalloped pear-cut drop suspended inside a diamond-encrusted yellow gold frame.',
    detailedDescription: 'Designed to capture romantic movement. The articulated center motif sways gently with the wearer, continuously catching and refracting ambient light.',
    image: 'https://i.ibb.co/DDZ0nDKk/Gold-pendant-necklace-displayed-42c37f98.jpg',
    materials: '18k Yellow Gold & Platinum',
    gemstone: 'Pear-Cut Diamond Center with Pavé Halo',
    specifications: {
      metal: '18k Gold & Platinum Bail',
      gemstone: '0.90ct Pear Diamond + 0.30ctw Halo',
      purity: '750 Gold / 950 Platinum',
      craftsmanship: 'Micro-prong setting with safety bail',
      dimensions: '24mm x 14mm pendant motif'
    },
    priceInfo: '$2,450',
    priceTag: '$2,450'
  },
  {
    id: 'port-17',
    name: 'Heavy Gauge Diamond-Cut Gold Link Chain',
    category: 'Gold Necklaces',
    shortDescription: 'Substantial curb links with precision diamond-cut bevels on all four facets.',
    detailedDescription: 'Striking, bold, and authoritative. The bevelled edges give an intense mirror reflection that creates an electric brilliance with every turn of the head.',
    image: 'https://i.ibb.co/6RSqZHbj/Gold-link-chain-displayed-6a827b57.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'None',
    specifications: {
      metal: '18k Solid Gold',
      gemstone: 'None',
      purity: '750 Hallmark',
      craftsmanship: 'Diamond-faceted mechanical links',
      dimensions: '22 inches, 7mm link width'
    },
    priceInfo: '$2,900',
    priceTag: '$2,900'
  },
  {
    id: 'port-18',
    name: 'Signature Blossom Gold Necklace & Earring Set',
    category: 'Fine Jewellery Sets',
    shortDescription: 'RUHI GOLD hallmark floral motif suite with matching stud drops in solid 18k gold.',
    detailedDescription: 'Our flagship collector parure. Botanical elegance transformed into eternal yellow gold, finished with satin petals and mirror-burnished stamen tips.',
    image: 'https://i.ibb.co/yKtvBBQ/Gold-necklace-and-earrings-displ-9aa39e8c.jpg',
    materials: '18k Solid Yellow Gold',
    gemstone: 'Diamond Core Highlights',
    specifications: {
      metal: '18k Solid Gold (750)',
      gemstone: 'VS Diamonds in Blossom Centers',
      purity: '750 Fine Gold Alloy',
      craftsmanship: 'Sculpted repoussé and chase technique',
      dimensions: 'Full presentation suite'
    },
    priceInfo: '$4,950',
    priceTag: '$4,950'
  }
];

// Exactly 6 Services with exact required image URLs
export const BOUTIQUE_SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Jewellery Collection Enquiries',
    shortDescription: 'Explore our curated showcases and receive detailed guidance on rare stones, purity, and craftsmanship.',
    detailedDescription: 'Our private client advisors guide you through RUHI GOLD’s archive of gold, diamond, and precious gemstone collections. Receive transparent insights into gem provenance, hallmarking standards, and collection availability.',
    image: 'https://i.ibb.co/fG9hPbv6/Unboxing-fine-jewelry-gift-box-8f06329b.jpg',
    highlights: [
      'Comprehensive collection previews and material specifications',
      'High-resolution imagery and video inspection on request',
      'Bespoke curation tailored to client style and preference'
    ]
  },
  {
    id: 'serv-2',
    title: 'Personalised Jewellery Assistance',
    shortDescription: 'One-on-one dialogue with our master specialists to guide commissions, heirlooms, and bespoke creations.',
    detailedDescription: 'Whether dreaming of a custom signet ring or modifying an archival piece, our goldsmiths work with you from initial sketch to 3D wax model and final 18k hand casting.',
    image: 'https://i.ibb.co/5h7vhBLf/Gold-chains-and-luxury-ring-00d05745.jpg',
    highlights: [
      'Direct consultation with senior goldsmiths',
      'Hand-drawn sketches and metallurgical consultation',
      'Private salon appointments on Fifth Avenue'
    ]
  },
  {
    id: 'serv-3',
    title: 'Ring Selection Assistance',
    shortDescription: 'Dedicated guidance for diamond sizing, shank ergonomics, band pairing, and stone settings.',
    detailedDescription: 'Finding the right ring requires thoughtful consideration of finger anatomy, gemstone proportions, and daily wear factors. We guide you through the 4 Cs, metal durability, and comfortable contour profiles.',
    image: 'https://i.ibb.co/Mxdv5DPy/Crafting-gold-ring-with-tools-6de8ff5f.jpg',
    highlights: [
      'Precision finger measurement and caliper analysis',
      'Comprehensive 4 Cs education and diamond certificate review',
      'Matching wedding band coordination and shadow-fit styling'
    ]
  },
  {
    id: 'serv-4',
    title: 'Wedding Jewellery Enquiries',
    shortDescription: 'Curate your ceremonial bridal suite, commitment bands, and celebratory family heirlooms.',
    detailedDescription: 'From intimate vow exchanges to grand gala celebrations, our bridal advisors assist couples in coordinating matching bands, statement parures, and heirloom keepsakes.',
    image: 'https://i.ibb.co/Kc7KpdWM/Jewellery-consultation-services-07413f4c.jpg',
    highlights: [
      'His & Hers complementary wedding band styling',
      'Bridal suite harmonisation (necklace, earrings, bracelet)',
      'Custom ceremonial engraving and date inscriptions'
    ]
  },
  {
    id: 'serv-5',
    title: 'Gift Selection Assistance',
    shortDescription: 'Thoughtful concierge recommendations for anniversaries, milestones, and personal achievements.',
    detailedDescription: 'Allow our team to simplify the art of giving. We assist in selecting timeless pieces that celebrate life’s milestones, complete with signature velvet gift packaging.',
    image: 'https://i.ibb.co/jZLr2LY3/Jewelry-and-payment-terminal-dis-c1e455d4.jpg',
    highlights: [
      'Personalised milestone recommendations',
      'Luxury velvet and leather presentation boxing',
      'Discreet courier delivery or private in-boutique presentation'
    ]
  },
  {
    id: 'serv-6',
    title: 'Boutique Appointment Enquiries',
    shortDescription: 'Reserve a private viewing suite at 580 Fifth Avenue for an uninterrupted boutique experience.',
    detailedDescription: 'Immerse yourself in the tranquility of our private salon at 580 Fifth Avenue, Suite 821. Enjoy champagne hospitality and individualized attention from our boutique director.',
    image: 'https://i.ibb.co/N64bJYM4/Luxury-jewelry-store-payment-ins-c0b483cb.jpg',
    highlights: [
      'Private suite reservation at 580 Fifth Avenue, Suite 821',
      'Dedicated one-on-one attention without boutique crowds',
      'Curated tray preparation based on your pre-selected interests'
    ]
  }
];

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  occasion: string;
  rating: number;
  highlight: string;
  quote: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Katherine Sterling',
    location: 'Manhattan, New York',
    occasion: 'Bespoke Diamond Solitaire Consultation',
    rating: 5.0,
    highlight: 'Impeccable Fifth Avenue Experience',
    quote: 'The craftsmanship and personal attention at RUHI GOLD surpassed every expectation. From examining stones in the private suite to the finished 18k ring, the process was pure elegance.'
  },
  {
    id: 't-2',
    clientName: 'Alexander Hayes',
    location: 'New York, NY',
    occasion: 'Ceremonial Gold Suite',
    rating: 5.0,
    highlight: 'Exceptional Goldsmithing & Radiance',
    quote: 'Finding true solid gold craftsmanship with such timeless proportions is rare. The necklace and matching earrings wear like silk against the skin.'
  },
  {
    id: 't-3',
    clientName: 'Eleanor Vance',
    location: 'Greenwich, CT',
    occasion: 'Emerald Pendant Commission',
    rating: 5.0,
    highlight: 'Trustworthy & Refined Communication',
    quote: 'The boutique team provided clear gemstone certifications and guided me through every detail. The rating of 5.0 stars is thoroughly well deserved.'
  }
];
