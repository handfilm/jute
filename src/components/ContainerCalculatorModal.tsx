import React, { useState, useMemo } from 'react';
import { X, Calculator, Box, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { JuteExportProduct, Currency } from '../types';
import { formatPrice, formatNumber } from '../utils/format';

interface ContainerCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: JuteExportProduct[];
  selectedProductInitial?: JuteExportProduct | null;
  currency: Currency;
  onApplyToRFQ: (product: JuteExportProduct, quantity: number) => void;
}

const DESTINATION_PORTS = [
  { name: 'Rotterdam, Netherlands (EU Hub)', days: 26, region: 'Europe' },
  { name: 'Hamburg, Germany', days: 28, region: 'Europe' },
  { name: 'New York / New Jersey, USA', days: 29, region: 'North America' },
  { name: 'Los Angeles / Long Beach, USA', days: 32, region: 'North America' },
  { name: 'Jebel Ali, Dubai, UAE', days: 12, region: 'Middle East' },
  { name: 'Yokohama, Tokyo, Japan', days: 18, region: 'Asia-Pacific' },
  { name: 'Sydney, Australia', days: 22, region: 'Oceania' },
  { name: 'Santos, Brazil', days: 34, region: 'South America' }
];

export const ContainerCalculatorModal: React.FC<ContainerCalculatorModalProps> = ({
  isOpen,
  onClose,
  products,
  selectedProductInitial,
  currency,
  onApplyToRFQ,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    selectedProductInitial?.id || products[0]?.id || ''
  );
  const [quantity, setQuantity] = useState<number>(20000);
  const [containerType, setContainerType] = useState<'20ft' | '40ft-hc'>('20ft');
  const [destinationPort, setDestinationPort] = useState(DESTINATION_PORTS[0].name);
  const [applied, setApplied] = useState(false);

  const currentProduct = useMemo(() => {
    return products.find((p) => p.id === selectedProductId) || products[0];
  }, [products, selectedProductId]);

  // Adjust default quantity when switching product type
  const handleProductChange = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = products.find((p) => p.id === prodId);
    if (!prod) return;
    if (prod.priceUnitLabel.includes('Metric Ton')) {
      setQuantity(20);
    } else if (prod.priceUnitLabel.includes('sq. meter')) {
      setQuantity(35000);
    } else if (prod.id.includes('sonali')) {
      setQuantity(200000);
    } else {
      setQuantity(18000);
    }
  };

  if (!isOpen || !currentProduct) return null;

  // Physical calculation
  const unitWeightKg = currentProduct.containerSpecs.weightKgPerUnit || 1.0;
  const unitCbm = currentProduct.containerSpecs.cbmPerUnit || 0.0017;
  
  const totalWeightMT = (quantity * unitWeightKg) / 1000;
  const totalVolumeCBM = quantity * unitCbm;

  // Max capacities
  const maxCBM = containerType === '20ft' ? 33.0 : 76.0;
  const maxWeightMT = containerType === '20ft' ? 21.5 : 26.5;

  const volumeFillPercent = Math.min(100, Math.round((totalVolumeCBM / maxCBM) * 100));
  const weightFillPercent = Math.min(100, Math.round((totalWeightMT / maxWeightMT) * 100));
  const primaryFillPercent = Math.max(volumeFillPercent, weightFillPercent);

  const isOverweight = totalWeightMT > maxWeightMT;
  const isOvervolume = totalVolumeCBM > maxCBM;

  const estimatedFobTotal = quantity * currentProduct.fobPriceUsdPerUnit;
  const selectedPortInfo = DESTINATION_PORTS.find((p) => p.name === destinationPort) || DESTINATION_PORTS[0];

  const handleApply = () => {
    onApplyToRFQ(currentProduct, quantity);
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-[#D5C2AD] relative text-[#2B1B10]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black rounded-full hover:bg-[#EDE1D1] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A582C] mb-1">
          <Calculator className="w-4 h-4" />
          <span>FOB Chittagong & Mongla Port Logistics Engine</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#27190E]">
          Container Load (FCL) & Freight Time Estimator
        </h2>
        <p className="text-xs sm:text-sm text-[#6C5643] mt-1 mb-6">
          Calculate standard ocean container stuffing (20ft FCL vs 40ft High Cube), gross payload weight, and maritime transit days from Bangladesh ports.
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 rounded-2xl border border-[#DECFC0] shadow-xs">
          
          {/* Select Jute Product */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#3E2918] uppercase tracking-wider">
              1. Select Top 10 Export Product
            </label>
            <select
              value={selectedProductId}
              onChange={(e) => handleProductChange(e.target.value)}
              className="w-full bg-[#FAF7F2] border border-[#D5C5B2] text-xs font-semibold py-2.5 px-3 rounded-xl focus:outline-none focus:border-[#7A4E2B] cursor-pointer"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  #{p.rank} {p.name} (HS {p.hsCode})
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-baseline">
              <label className="block text-xs font-bold text-[#3E2918] uppercase tracking-wider">
                2. Order Quantity
              </label>
              <span className="text-[11px] text-[#865932] font-semibold">
                Unit: {currentProduct.priceUnitLabel.replace('(FOB CTG)', '')}
              </span>
            </div>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full bg-[#FAF7F2] border border-[#D5C5B2] text-sm font-mono font-bold py-2 px-3.5 rounded-xl focus:outline-none focus:border-[#7A4E2B]"
            />
          </div>

          {/* Container Size Switch */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#3E2918] uppercase tracking-wider">
              3. Ocean Container Target
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setContainerType('20ft')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  containerType === '20ft'
                    ? 'bg-[#3A2617] text-white border-[#3A2617]'
                    : 'bg-[#FAF7F2] text-[#4A382A] border-[#D9CCBF] hover:bg-[#F2E8DC]'
                }`}
              >
                20ft Standard FCL (33 CBM / 21.5 MT)
              </button>

              <button
                type="button"
                onClick={() => setContainerType('40ft-hc')}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  containerType === '40ft-hc'
                    ? 'bg-[#3A2617] text-white border-[#3A2617]'
                    : 'bg-[#FAF7F2] text-[#4A382A] border-[#D9CCBF] hover:bg-[#F2E8DC]'
                }`}
              >
                40ft High Cube (76 CBM / 26.5 MT)
              </button>
            </div>
          </div>

          {/* Destination Port Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#3E2918] uppercase tracking-wider">
              4. Destination Discharge Port
            </label>
            <select
              value={destinationPort}
              onChange={(e) => setDestinationPort(e.target.value)}
              className="w-full bg-[#FAF7F2] border border-[#D5C5B2] text-xs font-semibold py-2.5 px-3 rounded-xl focus:outline-none focus:border-[#7A4E2B] cursor-pointer"
            >
              {DESTINATION_PORTS.map((port) => (
                <option key={port.name} value={port.name}>
                  {port.name} (~{port.days} Days Transit)
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Results Matrix & Visualization */}
        <div className="mt-6 bg-[#FAF4EB] p-5 rounded-2xl border border-[#DECFC0] space-y-4">
          
          {/* Progress Bar for Container Stuffing */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#3B2618] mb-1.5">
              <span>Estimated Container Space Utilization</span>
              <span className={`font-mono ${primaryFillPercent > 100 ? 'text-rose-600' : 'text-emerald-700'}`}>
                {primaryFillPercent}% Filled ({containerType.toUpperCase()})
              </span>
            </div>
            
            <div className="w-full h-3.5 bg-[#E6D8C8] rounded-full overflow-hidden p-0.5 border border-[#D8C7B4]">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  primaryFillPercent > 100
                    ? 'bg-rose-600'
                    : primaryFillPercent > 80
                    ? 'bg-emerald-600'
                    : 'bg-[#8A582C]'
                }`}
                style={{ width: `${Math.min(100, primaryFillPercent)}%` }}
              />
            </div>
          </div>

          {/* Detailed Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-[#E7DACD]">
              <span className="text-[10px] uppercase font-bold text-[#866F5D] block">Gross Payload Weight</span>
              <strong className="text-sm font-mono text-[#23170E]">{totalWeightMT.toFixed(2)} MT</strong>
              <span className="text-[10px] text-neutral-500 block">Max: {maxWeightMT} MT</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E7DACD]">
              <span className="text-[10px] uppercase font-bold text-[#866F5D] block">Cargo Volume</span>
              <strong className="text-sm font-mono text-[#23170E]">{totalVolumeCBM.toFixed(1)} CBM</strong>
              <span className="text-[10px] text-neutral-500 block">Max: {maxCBM} CBM</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E7DACD]">
              <span className="text-[10px] uppercase font-bold text-[#866F5D] block">Sea Freight Transit</span>
              <strong className="text-sm text-emerald-800 font-bold block">{selectedPortInfo.days} Days</strong>
              <span className="text-[10px] text-neutral-500 truncate block">From CTG Port</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E7DACD]">
              <span className="text-[10px] uppercase font-bold text-[#866F5D] block">FOB CTG Value</span>
              <strong className="text-sm font-serif font-black text-[#23170E] block">
                {formatPrice(estimatedFobTotal, currency)}
              </strong>
              <span className="text-[10px] text-neutral-500 block">Ex-Chittagong</span>
            </div>
          </div>

          {/* Warning notice if exceeding container */}
          {(isOverweight || isOvervolume) && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Payload exceeds single {containerType.toUpperCase()} capacity! Consider ordering <strong>{Math.ceil(Math.max(totalWeightMT / maxWeightMT, totalVolumeCBM / maxCBM))} containers</strong> or switching to 40ft High Cube.
              </span>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#DFD1C1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#6F5946]">
            <span>Packaging: <strong>{currentProduct.containerSpecs.packagingType}</strong></span>
          </div>

          <button
            onClick={handleApply}
            className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
              applied
                ? 'bg-emerald-700 text-white'
                : 'bg-[#3A2617] hover:bg-[#23160B] text-white'
            }`}
          >
            {applied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added {formatNumber(quantity)} to RFQ Basket!</span>
              </>
            ) : (
              <>
                <Box className="w-4 h-4 text-[#E6CBA7]" />
                <span>Apply Quantity to Formal RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
