export type CategoryType = 
  | 'all' 
  | 'top-10-exports'
  | 'raw-industrial' 
  | 'packaging-sacks' 
  | 'eco-bags' 
  | 'rugs-carpets' 
  | 'diversified-decor' 
  | 'geo-horticulture';

export type JuteFiberGrade = 
  | 'Tossa BT-Special (Top Golden)'
  | 'Tossa BTA (High Tensile)'
  | 'Tossa BTB (Medium Fine)'
  | 'White BWA (Selected Soft)'
  | 'Jute Micro-Cellulose (Sonali Bio-Polymer)'
  | 'Needle-Punched Non-Woven';

export interface JuteExportProduct {
  id: string;
  rank: number; // 1 to 10 for Top 10 exports
  name: string;
  bengaliName: string;
  tagline: string;
  category: CategoryType;
  categoryLabel: string;
  hsCode: string; // Harmonized System Customs Code
  fobPriceUsdPerUnit: number; // Base FOB Chittagong price in USD
  priceUnitLabel: string; // e.g. "per Bag", "per Metric Ton (MT)", "per sq. meter", "per Unit"
  moq: string; // Minimum Order Quantity
  rating: number;
  reviewCount: number;
  isTopTenExport: boolean;
  isUniqueToBD?: boolean; // For Sonali Bag and specialized Bengal Tossa items
  inStockForExport: boolean;
  images: string[];
  description: string;
  exportHub: string; // e.g. Narayanganj, Khulna, Faridpur
  leadTimeDays: number;
  containerSpecs: {
    twentyFtFclCapacity: string;
    fortyFtHcCapacity: string;
    packagingType: string;
    cbmPerUnit: number;
    weightKgPerUnit: number;
  };
  technicalSpecs: {
    fiberType: string;
    weaveOrStructure: string;
    densityGSM?: number;
    tensileStrength?: string;
    moistureRegain: string;
    oilContent: string; // e.g. Hydrocarbon Free / Food Grade IJO 98/01
    dimensions?: string;
  };
  certifications: string[];
  topExportDestinations: string[];
  sustainability: {
    biodegradableDays: number;
    co2AbsorbedPerTon: number;
    plasticEquivalentReplaced: string;
  };
  sampleAvailable: boolean;
}

export interface RFQItem {
  product: JuteExportProduct;
  quantity: number;
  customNotes?: string;
}

export interface Currency {
  code: string;
  symbol: string;
  rate: number; // relative to USD
  label: string;
}

export interface ContainerCalculation {
  productId: string;
  quantity: number;
  containerType: '20ft' | '40ft-hc' | 'lcl';
  totalWeightMT: number;
  totalVolumeCBM: number;
  containerFillPercentage: number;
  estimatedFobTotalUsd: number;
  recommendedPort: string;
}
