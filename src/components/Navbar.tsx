import React, { useState } from 'react';
import { Ship, FileText, Calculator, BookOpen, Search, Globe, ChevronDown, Check, Menu, X, ShieldCheck } from 'lucide-react';
import { Currency, CategoryType } from '../types';
import { CURRENCIES } from '../data/products';

interface NavbarProps {
  currentCurrency: Currency;
  onSelectCurrency: (c: Currency) => void;
  rfqCount: number;
  onOpenRFQ: () => void;
  onOpenCalculator: () => void;
  onOpenStory: () => void;
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onSelectCurrency,
  rfqCount,
  onOpenRFQ,
  onOpenCalculator,
  onOpenStory,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: { key: CategoryType; label: string; badge?: string }[] = [
    { key: 'top-10-exports', label: 'Top 10 Export Goods', badge: 'Official' },
    { key: 'all', label: 'All Catalog' },
    { key: 'packaging-sacks', label: 'Sacking & Burlap' },
    { key: 'raw-industrial', label: 'Yarn, CBC & Composites' },
    { key: 'eco-bags', label: 'Sonali & Eco Bags' },
    { key: 'rugs-carpets', label: 'Braided Rugs' },
    { key: 'geo-horticulture', label: 'Geo-Jute & Forestry' },
    { key: 'diversified-decor', label: 'Home Decor' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2] border-b border-[#E3D7C7] shadow-xs">
      {/* Top Export Ticker Bar */}
      <div className="bg-[#261B12] text-[#F3EADF] text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 tracking-wide font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>BANGLADESH JUTE EXPORT GATEWAY</span>
            <span className="text-[#C5A376]">·</span>
            <span className="text-[#DFD0BE] font-serif italic">বাংলাদেশ সোনালী আঁশ রপ্তানি পোর্টাল</span>
            <span className="hidden md:inline text-neutral-400">| Global Export Share: 92% Raw Jute & 68% Jute Goods</span>
          </div>

          <div className="flex items-center gap-4 text-[#D8C7B5]">
            <span className="hidden lg:inline flex items-center gap-1 text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> Food-Grade IJO 98/01 & EPB Certified
            </span>
            <span>Chittagong (CTG) & Mongla (MGL) Ports</span>
            
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-1 text-white hover:text-[#E0BC89] font-mono cursor-pointer transition-colors"
                title="Select Trade Currency"
              >
                <Globe className="w-3 h-3 text-[#C5A376]" />
                <span className="font-bold">{currentCurrency.code}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {showCurrencyDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-[#2C2117] text-white rounded-lg shadow-xl border border-[#483726] py-1 z-50 text-xs font-sans"
                  onMouseLeave={() => setShowCurrencyDropdown(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#A89482] border-b border-[#3D2F22]">
                    Trade Invoicing Currency
                  </div>
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onSelectCurrency(c);
                        setShowCurrencyDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#3E2E20] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <strong className="font-mono">{c.code}</strong>
                        <span className="text-[#D8C7B5] text-[11px] truncate">{c.label}</span>
                      </span>
                      {currentCurrency.code === c.code && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & National Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onSelectCategory('top-10-exports');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group cursor-pointer flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-lg bg-[#3A2617] flex items-center justify-center text-[#E5CEB0] shadow-sm border border-[#523A25] group-hover:bg-[#2C1C10] transition-colors">
                <Ship className="w-6 h-6 text-[#DFC096]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B1B10]">
                    BENGAL GOLDEN FIBER
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-[#3B2618] text-[#F3E6D5] px-1.5 py-0.5 rounded">
                    BD EXPORT
                  </span>
                </div>
                <div className="text-[11px] text-[#785E48] flex items-center gap-1 font-medium">
                  <span>Bangladesh Direct Mill Export Gateway</span>
                  <span className="text-[#C4A992]">·</span>
                  <span className="font-serif text-[12px] text-[#915B30]">সোনালী আঁশ বাংলাদেশ</span>
                </div>
              </div>
            </button>
          </div>

          {/* Quick Search */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search HS code, B-twill, Yarn, Sonali Bag, Geo-jute..."
                className="w-full bg-[#F3ECE0] border border-[#D5C4AF] rounded-lg py-2 pl-9 pr-3 text-xs text-[#2A1E16] placeholder-[#8A7461] focus:outline-none focus:border-[#7A4E2B] focus:bg-white transition-colors"
              />
              <Search className="w-4 h-4 text-[#8A7461] absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2.5 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Story Button */}
            <button
              onClick={onOpenStory}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#442E1D] hover:text-[#1F140C] bg-[#F1E7DA] hover:bg-[#E7DAC9] rounded-lg border border-[#DAC9B5] transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#8F592C]" />
              <span>Bengal Golden Fiber Story</span>
            </button>

            {/* Container Calculator Button */}
            <button
              onClick={onOpenCalculator}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#442E1D] hover:text-[#1F140C] bg-[#F1E7DA] hover:bg-[#E7DAC9] rounded-lg border border-[#DAC9B5] transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8F592C]" />
              <span>Container Load (FCL/LCL)</span>
            </button>

            {/* RFQ Basket Button */}
            <button
              onClick={onOpenRFQ}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#3B2618] hover:bg-[#25170E] rounded-lg shadow-sm transition-all cursor-pointer relative"
              title="View Request for Quotation Basket"
            >
              <FileText className="w-4 h-4 text-[#E6CBA7]" />
              <span className="hidden sm:inline">RFQ & Samples</span>
              <span className="sm:hidden">RFQ</span>
              {rfqCount > 0 && (
                <span className="bg-emerald-500 text-white font-mono font-bold text-[11px] px-1.5 py-0.2 rounded-full">
                  {rfqCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#442E1D] hover:bg-[#EFE4D5] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Category Navigation Strip */}
        <div className="border-t border-[#EAE0D3] py-2 overflow-x-auto no-scrollbar flex items-center gap-1 sm:gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#3A2617] text-[#FAF7F2] font-semibold shadow-xs'
                    : 'text-[#5C4533] hover:text-[#23170D] hover:bg-[#EDE2D4]'
                }`}
              >
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className={`text-[10px] uppercase font-bold px-1 rounded ${
                    isActive ? 'bg-[#C59B6F] text-[#24170D]' : 'bg-[#E2D2BE] text-[#473322]'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile menu expanded */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-[#E3D7C7] space-y-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search HS codes, goods..."
                className="w-full bg-[#F3ECE0] border border-[#D5C4AF] rounded-lg py-2 pl-9 pr-3 text-xs text-[#2A1E16]"
              />
              <Search className="w-4 h-4 text-[#8A7461] absolute left-2.5 top-2.5" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  onOpenStory();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 bg-[#F1E7DA] text-[#3B2618] font-semibold rounded-lg flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#8F592C]" />
                <span>Golden Fiber Story</span>
              </button>
              <button
                onClick={() => {
                  onOpenCalculator();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 bg-[#F1E7DA] text-[#3B2618] font-semibold rounded-lg flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#8F592C]" />
                <span>Container Calculator</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
