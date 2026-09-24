import { JuteExportProduct, Currency } from '../types';

export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1.0, label: 'US Dollar (FOB Reference)' },
  { code: 'EUR', symbol: '€', rate: 0.92, label: 'Euro (EU Trade)' },
  { code: 'GBP', symbol: '£', rate: 0.78, label: 'British Pound' },
  { code: 'AUD', symbol: 'A$', rate: 1.52, label: 'Australian Dollar' },
  { code: 'JPY', symbol: '¥', rate: 154.0, label: 'Japanese Yen' },
  { code: 'BDT', symbol: '৳', rate: 120.5, label: 'Bangladeshi Taka' }
];

export const TOP_10_EXPORT_PRODUCTS: JuteExportProduct[] = [
  {
    id: 'export-sacking-bags-b-twill',
    rank: 1,
    name: 'Standard B. Twill Jute Sacking Bags (Food-Grade Burlap)',
    bengaliName: 'স্ট্যান্ডার্ড বি. টুইল পাটের বস্তা',
    tagline: 'The world\'s #1 heavy-duty agricultural export bag for cocoa, coffee, grains & sugar',
    category: 'packaging-sacks',
    categoryLabel: 'Agricultural Sacking',
    hsCode: '6305.10.00',
    fobPriceUsdPerUnit: 1.15,
    priceUnitLabel: 'per Bag (FOB CTG)',
    moq: '10,000 Bags (1x 20ft FCL)',
    rating: 4.95,
    reviewCount: 428,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The backbone of global agro-commodity shipping. Manufactured in high-volume mills along the Shitalakshya river basin, these traditional 2.25 lb B-Twill sacking bags are treated with food-grade vegetable oils complying with international IJO 98/01 standards to prevent hydrocarbon contamination of green coffee and cocoa beans.',
    exportHub: 'Narayanganj & Khulna Mill Belt, Bangladesh',
    leadTimeDays: 14,
    containerSpecs: {
      twentyFtFclCapacity: '18,000 - 20,000 Bags (~20 Metric Tons)',
      fortyFtHcCapacity: '36,000 Bags (~38 Metric Tons)',
      packagingType: 'Hydraulic compressed export bales (300 or 400 bags/bale wrapped in hessian)',
      cbmPerUnit: 0.0017,
      weightKgPerUnit: 1.02
    },
    technicalSpecs: {
      fiberType: '100% Bangladesh Golden Tossa & White Jute Blend',
      weaveOrStructure: '2/1 Twill Weave, 3 Blue Stripes (or plain / custom green stripes)',
      densityGSM: 780,
      tensileStrength: 'Warp: 180 kgf / Weft: 195 kgf',
      moistureRegain: 'Standard 16% (Ex-factory)',
      oilContent: 'Under 1.25% (IJO 98/01 Food Grade Certified / Hydrocarbon Free)',
      dimensions: '44" Length x 26.5" Width (112 cm x 67 cm)'
    },
    certifications: ['IJO 98/01 Food Grade', 'EPB Bangladesh Registered', 'SGS Pre-Shipment Inspected', 'ISO 9001:2015'],
    topExportDestinations: ['Ivory Coast', 'Ghana', 'Brazil', 'Sudan', 'Egypt', 'Australia'],
    sustainability: {
      biodegradableDays: 90,
      co2AbsorbedPerTon: 2400,
      plasticEquivalentReplaced: 'Replaces ~40 single-use woven polypropylene (PP) sacks per lifecycle'
    },
    sampleAvailable: true
  },
  {
    id: 'export-jute-yarn-twine',
    rank: 2,
    name: 'Precision-Spun Jute Yarn & Bobbin Twine (Single & Multi-Ply)',
    bengaliName: 'স্পান পাট সুতা ও টুইন ববিন',
    tagline: 'High-tensile industrial spinning bobbins for international carpet mills & macramé',
    category: 'raw-industrial',
    categoryLabel: 'Industrial Yarn & Cordage',
    hsCode: '5307.10.00',
    fobPriceUsdPerUnit: 1280.0,
    priceUnitLabel: 'per Metric Ton (FOB CTG)',
    moq: '15 Metric Tons (1x 20ft FCL)',
    rating: 4.92,
    reviewCount: 389,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1606744888344-493238955de9?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Spun from select long-staple Tossa jute fiber, this precision yarn is exported to major automated carpet-weaving hubs in Turkey, Belgium, and Iran. Available in count ranges from 4.8 lbs to 72 lbs/spindle, with low hairiness, balanced twist, and high breaking strength.',
    exportHub: 'Narsingdi & Sirajganj Spinners Belt, Bangladesh',
    leadTimeDays: 20,
    containerSpecs: {
      twentyFtFclCapacity: '15 Metric Tons (Carton / Palletized)',
      fortyFtHcCapacity: '26 Metric Tons',
      packagingType: 'Cylindrical spools or conical paper bobbins packed in export corrugated cartons',
      cbmPerUnit: 1.85,
      weightKgPerUnit: 1000.0
    },
    technicalSpecs: {
      fiberType: '100% Selected Tossa B-T-Special Fiber',
      weaveOrStructure: '1-Ply, 2-Ply, 3-Ply / Count: 8 lbs to 28 lbs (Tex 276 - 965)',
      densityGSM: 0,
      tensileStrength: 'Quality Ratio (QR): 100% to 125% High Tenacity',
      moistureRegain: '14% - 16%',
      oilContent: 'Batching oil emulsion < 2.0% (vegetable oil or standard mineral option)',
      dimensions: 'Bobbins: 1.5 kg to 5.0 kg traverse wound spools'
    },
    certifications: ['BJSA Certified Spooling', 'OEKO-TEX Standard 100', 'ISO 14001', 'REACH Compliant'],
    topExportDestinations: ['Turkey', 'Belgium', 'Iran', 'Netherlands', 'United States', 'Japan'],
    sustainability: {
      biodegradableDays: 120,
      co2AbsorbedPerTon: 2800,
      plasticEquivalentReplaced: 'Replaces nylon & polyester synthetic carpet backing yarns'
    },
    sampleAvailable: true
  },
  {
    id: 'export-carpet-backing-cloth-cbc',
    rank: 3,
    name: 'Carpet Backing Cloth (CBC / Primary & Secondary Rug Underlay)',
    bengaliName: 'কার্পেট ব্যাকিং ক্লথ (সিবিসি)',
    tagline: 'Wide-width precision loomed jute cloth for tufted, Wilton, and Axminster luxury carpets',
    category: 'raw-industrial',
    categoryLabel: 'Industrial Textiles',
    hsCode: '5310.10.00',
    fobPriceUsdPerUnit: 1420.0,
    priceUnitLabel: 'per Metric Ton (FOB CTG)',
    moq: '12 Metric Tons (1x 20ft FCL)',
    rating: 4.88,
    reviewCount: 215,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A critical industrial export for Bangladesh. Woven on ultra-wide looms up to 210 inches width, CBC provides dimensional stability, heat resistance, and natural elasticity for premium commercial and residential carpets across Europe and North America.',
    exportHub: 'Khulna & Demra Industrial Clusters, Bangladesh',
    leadTimeDays: 25,
    containerSpecs: {
      twentyFtFclCapacity: '11 - 13 Metric Tons',
      fortyFtHcCapacity: '22 - 24 Metric Tons in continuous rolls',
      packagingType: 'Heavy rolls wrapped in waterproof inner film and outer protective hessian casing',
      cbmPerUnit: 2.1,
      weightKgPerUnit: 1000.0
    },
    technicalSpecs: {
      fiberType: '100% Fine Grade Tossa Jute',
      weaveOrStructure: 'Plain Weave, Ultra-Wide Selvage (150 cm to 525 cm)',
      densityGSM: 200,
      tensileStrength: 'Warp: 120 kgf / Weft: 110 kgf per 5 cm strip',
      moistureRegain: '15% Standard',
      oilContent: 'Max 1.5% Non-Staining Batching Formulation',
      dimensions: 'Roll width: 4.0 m to 5.2 m; roll length: 800 m to 1,200 m'
    },
    certifications: ['European Carpet Standard EN 1307', 'BJMC Approved', 'ISO 9001:2015'],
    topExportDestinations: ['United States', 'Belgium', 'Germany', 'United Kingdom', 'Canada'],
    sustainability: {
      biodegradableDays: 150,
      co2AbsorbedPerTon: 2600,
      plasticEquivalentReplaced: 'Replaces polyurethane foam & synthetic latex backing sheets'
    },
    sampleAvailable: true
  },
  {
    id: 'export-geo-jute-erosion-mesh',
    rank: 4,
    name: 'BJRI-Certified Geo-Jute (Civil Engineering Soil Erosion Control Mesh)',
    bengaliName: 'জিও-জুট মৃত্তিকা ক্ষয়রোধক মেশ',
    tagline: 'High-tensile open-mesh geotextile for highway embankments, riverbanks & bio-engineering',
    category: 'geo-horticulture',
    categoryLabel: 'Civil Geo-Engineering',
    hsCode: '5310.90.00',
    fobPriceUsdPerUnit: 0.68,
    priceUnitLabel: 'per sq. meter (FOB CTG)',
    moq: '15,000 sq. meters (1x 20ft FCL)',
    rating: 4.97,
    reviewCount: 310,
    isTopTenExport: true,
    isUniqueToBD: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Developed in collaboration with Bangladesh Jute Research Institute (BJRI) and civil engineers worldwide, Geo-Jute is an open-mesh fabric laid on vulnerable hillsides and river embankments. It retains up to 500% moisture by weight, shelters emerging plant seeds, and naturally decomposes after 18-24 months into rich organic plant humus.',
    exportHub: 'Faridpur & Jessore Manufacturing Mills, Bangladesh',
    leadTimeDays: 14,
    containerSpecs: {
      twentyFtFclCapacity: '40,000 - 45,000 sq. meters',
      fortyFtHcCapacity: '90,000 - 95,000 sq. meters',
      packagingType: 'Export rolls (1.2m x 50m or 1.0m x 100m) protected by UV-stabilized wrap',
      cbmPerUnit: 0.00075,
      weightKgPerUnit: 0.52
    },
    technicalSpecs: {
      fiberType: '100% Unbleached Golden Tossa Jute Yarn',
      weaveOrStructure: 'Open Mesh (Gauze Weave / Leno Weave, Aperture: 11mm x 11mm)',
      densityGSM: 500,
      tensileStrength: 'MD: 12.5 kN/m | CD: 10.8 kN/m',
      moistureRegain: 'Water Absorption Capacity > 450%',
      oilContent: '100% Eco-Pure / Zero Chemical Additives',
      dimensions: 'Roll: 1.22 m width x 50 m length'
    },
    certifications: ['ASTM D4595 Certified', 'BJRI Standard Geo-Specs', 'CE Mark for EU Civil Works'],
    topExportDestinations: ['United States', 'Japan', 'Germany', 'Australia', 'Norway'],
    sustainability: {
      biodegradableDays: 540,
      co2AbsorbedPerTon: 3100,
      plasticEquivalentReplaced: 'Replaces non-degradable polypropylene geo-grids that pollute ground water'
    },
    sampleAvailable: true
  },
  {
    id: 'export-handcrafted-braided-jute-rug',
    rank: 5,
    name: 'Export-Grade Braided & Loomed Jute Rugs & Runners',
    bengaliName: 'হাতে বোনা সোনালী পাটের শতরঞ্জি ও কার্পেট',
    tagline: 'Hand-braided reversible golden tossa floor coverings for international luxury retail',
    category: 'rugs-carpets',
    categoryLabel: 'Artisan Rugs & Floorcoverings',
    hsCode: '5702.39.00',
    fobPriceUsdPerUnit: 24.50,
    priceUnitLabel: 'per piece (avg 5x8ft FOB CTG)',
    moq: '500 Pieces (Assorted sizes)',
    rating: 4.96,
    reviewCount: 512,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Crafted in the famed weaving districts of Rangpur and Tangail, these hand-braided and flat-woven jute rugs are regular staples in Scandinavian and North American homeware catalogs. With dense 2,400 GSM pile, reversible construction, and unbleached golden sheen, they bring earthy sophistication without microplastic shedding.',
    exportHub: 'Rangpur Shataranji Cluster & Kishoreganj, Bangladesh',
    leadTimeDays: 21,
    containerSpecs: {
      twentyFtFclCapacity: '1,800 - 2,200 Rugs',
      fortyFtHcCapacity: '4,200 - 4,800 Rugs',
      packagingType: 'Individually rolled with desiccants, master wrapped in heavy jute-poly export bales',
      cbmPerUnit: 0.018,
      weightKgPerUnit: 5.8
    },
    technicalSpecs: {
      fiberType: '100% Selected Sun-Dried Tossa Jute',
      weaveOrStructure: 'Hand-Coiled Braided Spiral & Handloom Shataranji Flatweave',
      densityGSM: 2400,
      tensileStrength: 'Heavy Traffic Commercial / Residential Grade',
      moistureRegain: '13% - 15%',
      oilContent: 'Zero Hydrocarbons / Odorless',
      dimensions: 'Available: 3x5ft, 5x8ft, 8x10ft, 6ft Round, 2.5x8ft Runner'
    },
    certifications: ['Fair Trade Certified Guild', 'Sedex SMETA Audited', 'OEKO-TEX Class 1', 'GoodWeave Compatible'],
    topExportDestinations: ['Sweden (IKEA supply lines)', 'United States', 'France', 'Japan', 'Denmark'],
    sustainability: {
      biodegradableDays: 120,
      co2AbsorbedPerTon: 2900,
      plasticEquivalentReplaced: 'Replaces synthetic polypropylene living room rugs'
    },
    sampleAvailable: true
  },
  {
    id: 'export-promotional-shopper-tote-bags',
    rank: 6,
    name: 'Export-Grade Jute Grocery & Promotional Tote Bags',
    bengaliName: 'ল্যামিনেটেড এক্সপোর্ট পাটের শপিং ব্যাগ',
    tagline: 'Custom-printed biodegradable carrier bags replacing single-use retail plastics across Europe',
    category: 'eco-bags',
    categoryLabel: 'Retail & Promotional Bags',
    hsCode: '4202.92.00',
    fobPriceUsdPerUnit: 1.45,
    priceUnitLabel: 'per piece (FOB CTG)',
    moq: '2,500 Pieces (Custom printing available)',
    rating: 4.91,
    reviewCount: 680,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The preferred retail bag across French, German, and UK supermarket networks. Lined with either food-safe water-resistant biodegradable cornstarch film or certified LDPE, with reinforced padded cotton cord or webbed handles. Can hold over 20 kg without seam distortion.',
    exportHub: 'Dhaka Export Processing Zone (DEPZ) & Gazipur, Bangladesh',
    leadTimeDays: 14,
    containerSpecs: {
      twentyFtFclCapacity: '32,000 Bags (Carton Packed)',
      fortyFtHcCapacity: '75,000 Bags',
      packagingType: '50 or 100 pcs per 5-ply export corrugated carton with moisture-barrier liner',
      cbmPerUnit: 0.0011,
      weightKgPerUnit: 0.28
    },
    technicalSpecs: {
      fiberType: '100% High-Density Bengal Fine Hessian',
      weaveOrStructure: '13x13 or 14x15 Porosity / Fine Plain Weave with Cotton Trim',
      densityGSM: 330,
      tensileStrength: 'Load bearing capacity tested to 22 kg continuous weight',
      moistureRegain: '12% - 14%',
      oilContent: 'AZO-Free & Heavy Metal Free Dyes',
      dimensions: '42 cm (W) x 35 cm (H) x 15 cm (Gusset)'
    },
    certifications: ['Sedex SMETA 4-Pillar', 'OEKO-TEX Certified', 'EU REACH Compliant', 'BSCI Approved Mill'],
    topExportDestinations: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Australia'],
    sustainability: {
      biodegradableDays: 90,
      co2AbsorbedPerTon: 2700,
      plasticEquivalentReplaced: 'Replaces ~350 single-use polyethylene grocery bags per bag lifecycle'
    },
    sampleAvailable: true
  },
  {
    id: 'export-sonali-bag-bioplastic-cellulose',
    rank: 7,
    name: 'Sonali Bag™: Biodegradable Jute Cellulose Bio-Polymer Film',
    bengaliName: 'সোনালী ব্যাগ™: পাটের সেলুলোজ বায়োপ্লাস্টিক',
    tagline: 'World-famous invention by Dr. Mubarak Ahmad Khan — completely dissolves in soil in 90 days',
    category: 'eco-bags',
    categoryLabel: 'Patented Bio-Polymer',
    hsCode: '3920.99.00',
    fobPriceUsdPerUnit: 0.085,
    priceUnitLabel: 'per bag (FOB CTG)',
    moq: '50,000 Bags (1 Master Pallet)',
    rating: 4.99,
    reviewCount: 840,
    isTopTenExport: true,
    isUniqueToBD: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Found exclusively in Bangladesh! Developed by renowned scientist Dr. Mubarak Ahmad Khan (former Chief Scientific Officer of Bangladesh Atomic Energy Commission). Synthesized directly from raw jute micro-cellulose fibers, Sonali Bag looks and feels like polymer plastic, but possesses 1.5x greater tensile strength, is non-toxic to marine life, and completely dissolves in soil or warm water within 90 days.',
    exportHub: 'Demra Pilot Facility & Latif Bawany Jute Mills, Bangladesh',
    leadTimeDays: 18,
    containerSpecs: {
      twentyFtFclCapacity: '500,000 Bags',
      fortyFtHcCapacity: '1,200,000 Bags',
      packagingType: 'Vacuum sealed moisture-proof cartons on heat-treated ISPM-15 wooden pallets',
      cbmPerUnit: 0.00007,
      weightKgPerUnit: 0.022
    },
    technicalSpecs: {
      fiberType: '100% Purified Bangladeshi Jute Cellulose & Natural Cross-Linkers',
      weaveOrStructure: 'Extruded Bio-Polymer Film (35 to 55 microns)',
      densityGSM: 45,
      tensileStrength: 'Tensile: 48 MPa (1.5x stronger than standard LDPE plastic)',
      moistureRegain: 'Water-resistant in ambient air; breaks down upon water immersion > 80°C or moist soil',
      oilContent: 'Zero Petroleum Derivatives / 100% Food Contact Safe',
      dimensions: 'Custom sizes from 10"x15" to 20"x24" with T-shirt handles or flat cut'
    },
    certifications: ['Bangladesh Atomic Energy Commission Patent', 'EN 13432 Compostability', 'ASTM D6400', 'FDA Food Contact Safe'],
    topExportDestinations: ['European Union (Single-Use Plastic Ban compliance)', 'Canada', 'United Arab Emirates', 'Singapore'],
    sustainability: {
      biodegradableDays: 90,
      co2AbsorbedPerTon: 3500,
      plasticEquivalentReplaced: 'Eliminates petroleum-based polyethylene without microplastic residue'
    },
    sampleAvailable: true
  },
  {
    id: 'export-diversified-nesting-storage-baskets',
    rank: 8,
    name: 'Artisan Jute Diversified Home Storage & Planter Baskets',
    bengaliName: 'হাতে তৈরি পাটের স্টোরেজ ও প্ল্যান্টার বাস্কেট',
    tagline: 'Hand-coiled nesting utility baskets with raw date-palm and unbleached cotton accents',
    category: 'diversified-decor',
    categoryLabel: 'Diversified Jute Decor',
    hsCode: '6304.99.00',
    fobPriceUsdPerUnit: 9.80,
    priceUnitLabel: 'per Nested Set of 3 (FOB CTG)',
    moq: '1,000 Sets',
    rating: 4.89,
    reviewCount: 290,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Exported under Bangladesh\'s Jute Diversification Promotion Center (JDPC) initiatives. Women-led artisan cooperatives coil thick golden jute rope with structural interlocks to create sturdy, collapsible storage baskets for boutique home decor brands in the US and Japan.',
    exportHub: 'Bogura & Jessore Artisan Guilds, Bangladesh',
    leadTimeDays: 20,
    containerSpecs: {
      twentyFtFclCapacity: '2,800 Nested Sets',
      fortyFtHcCapacity: '6,500 Nested Sets',
      packagingType: 'Tightly nested set-of-3 in polybag with silica gel, master packed in 5-ply cartons',
      cbmPerUnit: 0.012,
      weightKgPerUnit: 1.65
    },
    technicalSpecs: {
      fiberType: '100% Golden Tossa Jute Rope + Natural Cotton Thread',
      weaveOrStructure: 'Coiled Spiral Stitching with Reinforced Dual Carry Handles',
      densityGSM: 1800,
      tensileStrength: 'Firm standing wall structure without synthetic wire insert',
      moistureRegain: '13% Max',
      oilContent: '100% Natural Vegetable Batching / Zero Odor',
      dimensions: 'Small: 22x20cm | Med: 28x25cm | Large: 34x30cm'
    },
    certifications: ['Fair Trade Forum Bangladesh (ECOTA)', 'Sedex Audited', 'JDPC Approved Diversified Good'],
    topExportDestinations: ['United States', 'Netherlands', 'South Korea', 'Australia', 'Japan'],
    sustainability: {
      biodegradableDays: 120,
      co2AbsorbedPerTon: 2600,
      plasticEquivalentReplaced: 'Replaces plastic laundry hampers and PVC storage bins'
    },
    sampleAvailable: true
  },
  {
    id: 'export-horticultural-jute-felt-root-wraps',
    rank: 9,
    name: 'Horticultural Jute Felt & Tree Nursery Root-Ball Burlap',
    bengaliName: 'কৃষি ও নার্সারির জন্য পাটের রুট-বল কভার ও ফেল্ট',
    tagline: 'Needle-punched non-woven mats and square sheets for forestry, tree root protection & mulch',
    category: 'geo-horticulture',
    categoryLabel: 'Forestry & Horticulture',
    hsCode: '5602.10.00',
    fobPriceUsdPerUnit: 0.52,
    priceUnitLabel: 'per sq. meter (FOB CTG)',
    moq: '20,000 sq. meters',
    rating: 4.93,
    reviewCount: 220,
    isTopTenExport: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Indispensable for commercial tree nurseries and forestry projects in Europe and North America. Tree sapling roots can be placed directly into the ground with the jute burlap intact; it biodegrades naturally without replanting root-shock, acting as a slow-release natural moisture sponge.',
    exportHub: 'Faridpur & Madaripur Agro-Jute Mills, Bangladesh',
    leadTimeDays: 12,
    containerSpecs: {
      twentyFtFclCapacity: '22,000 sq. meters in rolls or 80,000 precut root squares',
      fortyFtHcCapacity: '50,000 sq. meters',
      packagingType: 'Compressed export bales with weather-resistant strapping',
      cbmPerUnit: 0.0015,
      weightKgPerUnit: 0.35
    },
    technicalSpecs: {
      fiberType: '100% Needle-Punched Natural Jute Fiber (No Glue/Resin)',
      weaveOrStructure: 'Non-Woven Needle-Punched Felt or Plain Square Burlap Sheets',
      densityGSM: 350,
      tensileStrength: 'Flexible & Puncture Resistant',
      moistureRegain: 'Absorbs up to 400% water by weight',
      oilContent: '100% Chemical-Free / Safe for Soil Microorganisms',
      dimensions: 'Pre-cut squares (24"x24", 36"x36", 48"x48") or 1.0m/2.0m continuous rolls'
    },
    certifications: ['USDA Organic Certified Compliant', 'EU Organic Regulation Approved', 'EPB Registered'],
    topExportDestinations: ['Germany', 'Netherlands', 'United States', 'Italy', 'Canada'],
    sustainability: {
      biodegradableDays: 180,
      co2AbsorbedPerTon: 3000,
      plasticEquivalentReplaced: 'Replaces plastic nursery pots and synthetic weed barrier fabrics'
    },
    sampleAvailable: true
  },
  {
    id: 'export-jute-automotive-composites-panel',
    rank: 10,
    name: 'Jute-Reinforced Automotive Non-Woven Composite Panels',
    bengaliName: 'অটোমোবাইল শিল্পের জন্য পাটের কম্পোজিট প্যানেল',
    tagline: 'Lightweight high-strength natural fiber substrate for BMW, Mercedes & European door trim',
    category: 'raw-industrial',
    categoryLabel: 'Advanced Automotive Composites',
    hsCode: '6815.99.00',
    fobPriceUsdPerUnit: 1950.0,
    priceUnitLabel: 'per Metric Ton (FOB CTG)',
    moq: '10 Metric Tons (1x 20ft FCL)',
    rating: 4.98,
    reviewCount: 175,
    isTopTenExport: true,
    isUniqueToBD: true,
    inStockForExport: true,
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The future of automotive sustainability. Manufactured by blending Bangladesh\'s highest-tenacity Tossa jute fibers with thermo-formable bio-resins, these composite fleeces are molded into interior door panels, dashboard substructures, and rear parcel shelves for German premium vehicles, cutting component weight by 35% over glass-fiber composites while eliminating splintering in crash impacts.',
    exportHub: 'Gazipur High-Tech Industrial Zone, Bangladesh',
    leadTimeDays: 28,
    containerSpecs: {
      twentyFtFclCapacity: '9 Metric Tons',
      fortyFtHcCapacity: '19 Metric Tons (Palletized Flat Sheets)',
      packagingType: 'Rigid export crates on fumigated ISPM-15 wooden pallets',
      cbmPerUnit: 2.4,
      weightKgPerUnit: 1000.0
    },
    technicalSpecs: {
      fiberType: '50% Carded Tossa Jute + 50% Polypropylene / PLA Matrix',
      weaveOrStructure: 'Needle-Punched Hybrid Mat (Areal weight: 800 - 1800 GSM)',
      densityGSM: 1200,
      tensileStrength: 'Flexural Modulus > 4.5 GPa / Tensile > 65 MPa',
      moistureRegain: 'Moisture barrier conditioned < 1.0%',
      oilContent: 'Zero VOC Emission / VDA 278 Automotive Certified',
      dimensions: 'Sheets: 1.5 m x 2.2 m x 2.5 mm thickness'
    },
    certifications: ['IATF 16949 (Automotive Quality Management)', 'ISO 14001', 'VDA 270/278 Low VOC Passed'],
    topExportDestinations: ['Germany (Tier-1 Auto Suppliers)', 'Japan', 'Sweden', 'Czech Republic'],
    sustainability: {
      biodegradableDays: 360,
      co2AbsorbedPerTon: 3200,
      plasticEquivalentReplaced: 'Replaces glass fiber reinforced plastics (GFRP) which cannot be incinerated or recycled'
    },
    sampleAvailable: true
  }
];

// Additional rich export categories & Bangladesh export facts
export const BANGLADESH_EXPORT_STATS = {
  globalMarketShare: '92% of World Raw Jute & 68% of World Jute Goods Exports',
  annualProductionTonnes: '1.45 Million Metric Tons annually',
  cultivatedLandHectares: '750,000+ Hectares across the Bengal Delta',
  farmingFamilies: '4.5 Million Smallholder Farming Households in BD',
  carbonAbsorptionAnnual: '11 Million Tonnes of CO2 absorbed in every 100-day harvest cycle',
  portsOfLoading: [
    { name: 'Chittagong Port (CTG)', code: 'BD CGP', handlingShare: '84% of total jute goods', avgVesselTurnaround: '48 hours' },
    { name: 'Mongla Port (MGL)', code: 'BD MGL', handlingShare: '16% of total jute goods', avgVesselTurnaround: '36 hours' }
  ]
};

export const BENGAL_GOLDEN_FIBER_ARTICLE = {
  title: 'The Bengal Golden Fiber: Why The World\'s Finest Jute Grows Exclusively in the Bangladesh Delta',
  bengaliTitle: 'সোনার বাংলা, সোনালী আঁশ: কেন বিশ্বের শ্রেষ্ঠ পাট কেবল বাংলাদেশেই জন্মায়',
  subtitle: 'The rare confluence of delta silt, monsoon deluge, and warm freshwater retting that makes Bangladeshi Corchorus olitorius unmatched across the planet.',
  author: 'Bangladesh Jute Export Promotion & Research Board',
  readTimeMinutes: 8,
  sections: [
    {
      id: 'geology-miracle',
      heading: '1. The Geological Miracle of the Bengal Alluvial Delta',
      body: `Jute has been cultivated across South Asia for millennia, but international buyers and textile engineers know that only the Bengal delta produces the prized "Golden Fiber" (সোনালী আঁশ). 
      The secret lies in the annual inundation by the Ganges (Padma), Brahmaputra (Jamuna), and Meghna river systems. Each monsoon season, these massive glacier-fed waterways deposit millions of tons of nutrient-rich alluvial silt across Faridpur, Mymensingh, Rangpur, and Kishoreganj. 
      This unique mineral-heavy silt, combined with humid sub-tropical rainfall exceeding 1,800mm and consistent 28°C–34°C temperatures, gives Bangladeshi Tossa jute (*Corchorus olitorius*) a cellular stalk density and fiber length that cannot be replicated in synthetic soil or other geographic latitudes.`,
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=85',
      caption: 'The fertile delta basin of Bangladesh where river silt creates the ideal bed for Corchorus olitorius.'
    },
    {
      id: 'retting-process',
      heading: '2. The Sacred "Jāg" (Freshwater Retting): Nature\'s Enzyme Magic',
      body: `The defining difference between harsh, brittle brown jute and silky, luminescent golden jute is the traditional biological retting process, known locally as "Jāg deoyā" (পাট জাগ দেওয়া). 
      Immediately after the July-August harvest, 12-foot jute bundles are submerged in slow-moving, warm freshwater canals and ponds for 14 to 20 days. Under the sun\'s gentle heat, native pectinolytic anaerobic bacteria digest the sticky pectins and gum binding the fibers together.
      Because Bangladesh possesses thousands of clean freshwater river branches, the retting occurs without chemical enzymes. When farmers strip the fiber ("pāṭ chhilā"), wash it in flowing current, and drape it across bamboo poles in the Bengal sun, it emerges with its signature golden-metallic gleam, zero brittleness, and natural tensile silkiness.`,
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=85',
      caption: 'Artisan washing and sun-drying of raw tossa fiber along the riverbanks of Kishoreganj.'
    },
    {
      id: 'dundee-to-narayanganj',
      heading: '3. The "Dundee of Bangladesh" & Historical Global Dominion',
      body: `In the 19th and 20th centuries, Narayanganj along the Shitalakshya river earned the title "The Dundee of Bangladesh". Raw jute from Narayanganj was shipped directly to feed the massive industrial looms of Dundee in Scotland. 
      Later, Bangladesh established the Adamjee Jute Mills in 1951—which became the largest jute mill on earth, housing over 3,000 automated looms. Today, Bangladesh has modernized with state-of-the-art private spinning conglomerates, holding over 92% of the world\'s raw jute export market and 68% of the global manufactured jute trade.`,
      image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=85',
      caption: 'High-speed spinning frames producing high-tenacity yarn in a Narayanganj export facility.'
    },
    {
      id: 'sonali-bag-breakthrough',
      heading: '4. The Modern Miracle: Dr. Mubarak Ahmad Khan & The Sonali Bag',
      body: `The crowning modern scientific achievement unique to Bangladesh is the "Sonali Bag" (Golden Bag), invented by nuclear scientist Dr. Mubarak Ahmad Khan, former Chief Scientific Officer at the Bangladesh Atomic Energy Commission.
      By chemically extracting micro-cellulose polymers from raw jute stalks, Dr. Khan synthesized a biodegradable sheet with identical barrier and flexibility properties to petrochemical polyethylene. 
      Crucially, the Sonali Bag dissolves completely in warm water or moist soil within 90 days, releasing zero toxic microplastics. As the European Union, Canada, and global retailers enforce stringent single-use plastic bans, Bangladesh\'s Sonali Bag stands as the world\'s premier ecological alternative.`,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      caption: 'Transparent biodegradable bio-cellulose film derived 100% from Bangladeshi jute stalks.'
    },
    {
      id: 'carbon-sink',
      heading: '5. The Ultimate Carbon-Negative Miracle Crop',
      body: `In an era of accelerating climate urgency, Bangladeshi jute is unmatched as a global carbon sink. During its brief 100-day cultivation season:
      • One hectare of growing jute plants absorbs approximately 15 metric tons of carbon dioxide (CO2).
      • Simultaneously, that same hectare releases 11 metric tons of pure oxygen (O2) into the atmosphere.
      • Unlike cotton, which demands thousands of liters of chemical pesticides and intense artificial irrigation, jute requires minimal fertilizers and thrives on natural monsoon floods.
      • When plowed back, jute roots and foliage enrich the delta topsoil with organic nitrogen, preventing soil exhaustion for subsequent crop rotations.`,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
      caption: 'Green lush jute plantations in rural Bangladesh absorbing CO2 at unmatched biological velocity.'
    }
  ]
};
