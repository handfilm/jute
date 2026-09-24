import React, { useState } from 'react';
import { X, ShieldCheck, Box, FileText, Check, Sparkles, MapPin, Calculator, Leaf, Clock } from 'lucide-react';
import { JuteExportProduct, Currency } from '../types';
import { formatPrice } from '../utils/format';

interface ProductDetailModalProps {
  product: JuteExportProduct | null;
  currency: Currency;
  onClose: () => void;
  onAddToRFQ: (product: JuteExportProduct, quantity?: number) => void;
  onOpenCalculatorForProduct: (product: JuteExportProduct) => void;
  isInRFQ: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  onClose,
  onAddToRFQ,
  onOpenCalculatorForProduct,
  isInRFQ,
}) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToRFQ(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#D8C7B5] relative text-[#2B1B10]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 right-0 z-20 flex justify-between items-center p-4 sm:p-6 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DCCF]">
          <div className="flex items-center gap-2">
            <div className="bg-[#2E1D11] text-[#E7CFB2] px-2.5 py-1 rounded text-xs font-bold font-mono">
              #{product.rank} BD Export Rank
            </div>
            <span className="font-mono text-xs font-bold text-[#7E5734] bg-[#EFE3D4] px-2 py-1 rounded">
              HS {product.hsCode}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-black hover:bg-[#EAE0D2] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Top Hero Grid: Gallery + Core Quotation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery (Left Col) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#D5C2AD] bg-[#EFE7DC] relative shadow-inner">
                <img
                  src={product.images[selectedImgIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isUniqueToBD && (
                  <div className="absolute top-3 left-3 bg-[#1B3623] text-emerald-300 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-md border border-emerald-600/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Unique to Bangladesh</span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImgIdx === idx ? 'border-[#8A582C] scale-95 shadow-sm' : 'border-[#DDD0C1] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title, Pricing & Quick Action (Right Col) */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C582B] uppercase tracking-wider mb-1">
                  <span>{product.categoryLabel}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#8C582B]" />
                    <span>{product.exportHub}</span>
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#23170E] leading-tight">
                  {product.name}
                </h1>
                <p className="font-serif text-sm text-[#8C603A] italic mt-1">
                  {product.bengaliName}
                </p>
                <p className="text-xs sm:text-sm text-[#5C4A3C] leading-relaxed mt-2">
                  {product.description}
                </p>
              </div>

              {/* FOB Port Price Block */}
              <div className="bg-[#FAF4EB] p-4 rounded-2xl border border-[#E3D4C2] space-y-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#866F5B] block">
                      Indicative FOB Port Chittagong (CTG) Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl font-extrabold text-[#23170E]">
                        {formatPrice(product.fobPriceUsdPerUnit, currency)}
                      </span>
                      <span className="text-xs text-[#6F5946] font-semibold">
                        {product.priceUnitLabel}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-[#866F5B] block">Export MOQ</span>
                    <span className="text-xs font-bold text-[#442F1E]">{product.moq}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#EAE0D3] text-xs text-[#5D4A3B]">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    IJO 98/01 Food Grade Compliant
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#785E48]">
                    <Clock className="w-3.5 h-3.5" />
                    Mill Lead Time: {product.leadTimeDays} Days
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleAdd}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    added || isInRFQ
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#3A2516] hover:bg-[#25170C] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to RFQ Quotation Basket!</span>
                    </>
                  ) : isInRFQ ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Item Already in RFQ Basket</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 text-[#E6CBA7]" />
                      <span>Add To Request for Quotation (RFQ)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenCalculatorForProduct(product);
                  }}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-[#442E1D] bg-[#F1E7DA] hover:bg-[#E7DAC9] border border-[#D8C7B5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#8A582C]" />
                  <span>Calculate 20ft & 40ft Container Load Stuffing</span>
                </button>
              </div>

            </div>
          </div>

          {/* Technical Specifications Dossier Table */}
          <div className="border-t border-[#E5D7C7] pt-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#23170E] flex items-center gap-2">
              <Box className="w-5 h-5 text-[#8A582C]" />
              <span>Full Technical Data Sheet & Export Quality Standards</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* Left Specs Panel */}
              <div className="bg-white p-4 rounded-2xl border border-[#E0D3C3] space-y-3">
                <h4 className="font-bold text-[#7E522C] uppercase tracking-wider text-[10px]">
                  Fiber Structure & Composition
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Botanical Fiber:</span>
                    <span className="font-semibold text-right">{product.technicalSpecs.fiberType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Weave / Mesh:</span>
                    <span className="font-semibold text-right">{product.technicalSpecs.weaveOrStructure}</span>
                  </div>
                  {product.technicalSpecs.densityGSM ? (
                    <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                      <span className="text-[#745E4C]">Areal Weight (GSM):</span>
                      <span className="font-semibold text-right">{product.technicalSpecs.densityGSM} GSM</span>
                    </div>
                  ) : null}
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Tensile Strength:</span>
                    <span className="font-semibold text-right">{product.technicalSpecs.tensileStrength || 'High Tenacity export standard'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Moisture Regain:</span>
                    <span className="font-semibold text-right">{product.technicalSpecs.moistureRegain}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#745E4C]">Hydrocarbon & Batching Oil:</span>
                    <span className="font-bold text-emerald-800 text-right">{product.technicalSpecs.oilContent}</span>
                  </div>
                </div>
              </div>

              {/* Right Shipping Specs Panel */}
              <div className="bg-white p-4 rounded-2xl border border-[#E0D3C3] space-y-3">
                <h4 className="font-bold text-[#7E522C] uppercase tracking-wider text-[10px]">
                  Container Logistics & Packaging
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">20ft FCL Container:</span>
                    <span className="font-mono font-bold text-[#23170E] text-right">{product.containerSpecs.twentyFtFclCapacity}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">40ft High Cube (HC):</span>
                    <span className="font-mono font-bold text-[#23170E] text-right">{product.containerSpecs.fortyFtHcCapacity}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Export Packaging:</span>
                    <span className="font-medium text-right max-w-xs">{product.containerSpecs.packagingType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F4EBE0]">
                    <span className="text-[#745E4C]">Port of Loading (POL):</span>
                    <span className="font-semibold text-right">Chittagong (BD CGP) / Mongla (BD MGL)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#745E4C]">Top Destination Markets:</span>
                    <span className="font-medium text-right text-[#8A582C]">
                      {product.topExportDestinations.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Certifications & Sustainability Banner */}
          <div className="bg-[#EDE3D4] p-5 rounded-2xl border border-[#DBC9B5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-[#7A4E2B]">
                Export Compliance & Testing
              </span>
              <div className="flex flex-wrap gap-2 text-neutral-800">
                {product.certifications.map((cert) => (
                  <span key={cert} className="bg-white/80 border border-[#D5C2AE] px-2.5 py-0.5 rounded text-[11px] font-semibold">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-[#DAC7B3] sm:pl-6">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold justify-end">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Biodegradable in {product.sustainability.biodegradableDays} Days</span>
              </div>
              <p className="text-[11px] text-[#695443] mt-0.5">
                {product.sustainability.plasticEquivalentReplaced}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
