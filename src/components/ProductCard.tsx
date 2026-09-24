import React, { useState } from 'react';
import { ShieldCheck, FileText, Check, Sparkles, MapPin, Calculator, Eye } from 'lucide-react';
import { JuteExportProduct, Currency } from '../types';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: JuteExportProduct;
  currency: Currency;
  onSelectProduct: (p: JuteExportProduct) => void;
  onAddToRFQ: (p: JuteExportProduct, quantity?: number) => void;
  onOpenCalculatorForProduct: (p: JuteExportProduct) => void;
  isInRFQ: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onSelectProduct,
  onAddToRFQ,
  onOpenCalculatorForProduct,
  isInRFQ,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToRFQ(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const bengaliNumerals = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০'];
  const rankBengali = bengaliNumerals[product.rank - 1] || product.rank;

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="group bg-white rounded-2xl border border-[#DECFC0] hover:border-[#8E5E35] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Top Media Container with Multiple Photo Thumbnails */}
      <div className="relative h-64 sm:h-72 w-full bg-[#F3ECE0] overflow-hidden">
        <img
          src={product.images[activeImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          {/* Top 10 Rank Seal */}
          <div className="bg-[#2D1C10] text-[#F3E2CC] px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-md border border-[#593E28]">
            <span className="text-amber-400 font-serif text-sm">#{product.rank}</span>
            <span className="text-[10px] uppercase tracking-wider text-[#CBB5A0]">BD Export Rank</span>
            <span className="text-amber-300 font-serif">({rankBengali})</span>
          </div>

          {product.isUniqueToBD && (
            <div className="bg-[#1A3822] text-emerald-300 px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 shadow-sm border border-emerald-600/30">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Unique to BD</span>
            </div>
          )}
        </div>

        {/* HS Code Badge Top Right */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#3B2618] px-2.5 py-1 rounded-md text-[11px] font-mono font-bold shadow-sm border border-[#DAC9B5]">
          HS {product.hsCode}
        </div>

        {/* Bottom Image Thumbnail Strip */}
        {product.images.length > 1 && (
          <div 
            className="absolute bottom-2.5 left-3 flex items-center gap-1.5 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {product.images.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-7 h-7 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-amber-400 scale-110 shadow-md' : 'border-white/70 opacity-80 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Quick View hint */}
        <div className="absolute bottom-2.5 right-3 text-white/90 text-[11px] font-medium flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
          <Eye className="w-3 h-3" />
          <span>Full Specs</span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Hub info */}
        <div>
          {/* Hub and Category */}
          <div className="flex items-center justify-between text-xs text-[#8A705B] mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-[10px] text-[#A66F3F]">
              {product.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-[#695443]">
              <MapPin className="w-3 h-3 text-[#A66F3F]" />
              <span className="truncate max-w-[140px]">{product.exportHub}</span>
            </span>
          </div>

          {/* Product Titles */}
          <h3 className="font-serif text-lg font-bold text-[#23170E] group-hover:text-[#8E5E35] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="font-serif text-xs text-[#8C603A] italic mt-0.5">
            {product.bengaliName}
          </p>
          <p className="text-xs text-[#625042] mt-1.5 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Technical Data Preview Strip */}
        <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EBE1D5] text-[11px] space-y-1.5">
          <div className="flex items-center justify-between text-[#4D3A2B]">
            <span className="text-[#7F6A59]">Structure / Weave:</span>
            <span className="font-semibold truncate max-w-[170px]">{product.technicalSpecs.weaveOrStructure}</span>
          </div>

          {product.technicalSpecs.densityGSM ? (
            <div className="flex items-center justify-between text-[#4D3A2B]">
              <span className="text-[#7F6A59]">Density / Areal Weight:</span>
              <span className="font-semibold">{product.technicalSpecs.densityGSM} GSM</span>
            </div>
          ) : (
            <div className="flex items-center justify-between text-[#4D3A2B]">
              <span className="text-[#7F6A59]">Fiber Tenacity:</span>
              <span className="font-semibold truncate max-w-[170px]">{product.technicalSpecs.tensileStrength}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[#4D3A2B]">
            <span className="text-[#7F6A59]">Container Capacity (20ft FCL):</span>
            <span className="font-mono font-bold text-[#805027] truncate max-w-[170px]">
              {product.containerSpecs.twentyFtFclCapacity}
            </span>
          </div>

          <div className="flex items-center justify-between text-[#4D3A2B] pt-1 border-t border-[#EDE3D7]">
            <span className="text-[#7F6A59]">Food Safety & Standards:</span>
            <span className="font-medium text-emerald-800 flex items-center gap-1 truncate max-w-[170px]">
              <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
              {product.technicalSpecs.oilContent}
            </span>
          </div>
        </div>

        {/* Pricing, MOQ & Actions */}
        <div className="pt-2 border-t border-[#EFE5D9] space-y-3">
          
          {/* Price & MOQ */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8A7461] block">
                Indicative FOB Chittagong (CTG)
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-xl font-extrabold text-[#24170E]">
                  {formatPrice(product.fobPriceUsdPerUnit, currency)}
                </span>
                <span className="text-[11px] text-[#78614E] font-medium">
                  {product.priceUnitLabel.replace('(FOB CTG)', '')}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-[#8A7461] block">Min Order (MOQ)</span>
              <span className="text-xs font-semibold text-[#4A3728]">{product.moq}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onOpenCalculatorForProduct(product)}
              className="px-2.5 py-2 text-xs font-semibold text-[#442E1D] bg-[#F1E7DA] hover:bg-[#E8DCCB] rounded-lg border border-[#DAC9B5] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              title="Calculate Container Stuffing"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8F592C]" />
              <span>Container Load</span>
            </button>

            <button
              onClick={handleAdd}
              className={`px-3 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer ${
                isInRFQ || justAdded
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-[#3B2618] hover:bg-[#26170E] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added to RFQ</span>
                </>
              ) : isInRFQ ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In RFQ Basket</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-[#E6CBA7]" />
                  <span>Add to RFQ</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
