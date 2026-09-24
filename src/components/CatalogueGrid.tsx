import React from 'react';
import { Award, SlidersHorizontal, RotateCcw, Ship } from 'lucide-react';
import { JuteExportProduct, CategoryType, Currency } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogueGridProps {
  products: JuteExportProduct[];
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  sortBy: 'rank' | 'price-asc' | 'price-desc' | 'rating';
  onSortChange: (sort: 'rank' | 'price-asc' | 'price-desc' | 'rating') => void;
  currency: Currency;
  onSelectProduct: (product: JuteExportProduct) => void;
  onAddToRFQ: (product: JuteExportProduct, quantity?: number) => void;
  onOpenCalculatorForProduct: (product: JuteExportProduct) => void;
  rfqProductIds: string[];
  searchQuery: string;
  onResetFilters: () => void;
}

export const CatalogueGrid: React.FC<CatalogueGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  currency,
  onSelectProduct,
  onAddToRFQ,
  onOpenCalculatorForProduct,
  rfqProductIds,
  searchQuery,
  onResetFilters,
}) => {
  return (
    <section id="top-10-catalogue" className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E5D7C7]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A582C] mb-1">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Official Bangladesh Export Hierarchy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#27190F]">
              Top 10 Jute Goods Exports From Bangladesh
            </h2>
            <p className="text-xs sm:text-sm text-[#6C5745] mt-1 max-w-2xl font-normal">
              Direct from the world’s foremost jute mills in Narayanganj, Khulna, and Faridpur. Explore full technical specifications, customs HS codes, container loading limits, and FOB Chittagong/Mongla port quotations.
            </p>
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B5543]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="bg-white border border-[#D5C5B2] text-xs text-[#312013] font-semibold py-2 px-3 rounded-lg focus:outline-none focus:border-[#7A4E2B] cursor-pointer"
            >
              <option value="rank">Export Rank (Rank #1 to #10)</option>
              <option value="rating">Buyer Inspection Rating</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills & Quick Filter Bar */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'top-10-exports', label: 'Top 10 Official Exports' },
              { id: 'all', label: 'All Items' },
              { id: 'packaging-sacks', label: 'Burlap & Sacking' },
              { id: 'raw-industrial', label: 'Yarn, CBC & Composites' },
              { id: 'eco-bags', label: 'Sonali Bag™ & Totes' },
              { id: 'rugs-carpets', label: 'Handcrafted Rugs' },
              { id: 'geo-horticulture', label: 'Geo-Jute & Forestry' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id as CategoryType)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#3A2617] text-white shadow-xs'
                    : 'bg-[#EDE3D4] text-[#5C4533] hover:bg-[#E2D4C1] hover:text-[#2E1D10]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#7A6451] font-mono">
            Showing <strong>{products.length}</strong> export verified goods
          </div>
        </div>

        {/* Product Cards Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E3D4C2] p-8 space-y-4 my-6">
            <Ship className="w-12 h-12 text-[#9A7D63] mx-auto opacity-60" />
            <h3 className="font-serif text-xl font-bold text-[#2E1F14]">
              No Export Products Matched Your Query
            </h3>
            <p className="text-xs text-[#725F4E] max-w-md mx-auto">
              We couldn’t find any jute export items matching "{searchQuery}". Try searching for terms like "B-twill", "Yarn", "CBC", "Sonali", or "Geo-Jute".
            </p>
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3B2618] hover:bg-[#25170E] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters & Show All Top 10</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onSelectProduct={onSelectProduct}
                onAddToRFQ={onAddToRFQ}
                onOpenCalculatorForProduct={onOpenCalculatorForProduct}
                isInRFQ={rfqProductIds.includes(product.id)}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
