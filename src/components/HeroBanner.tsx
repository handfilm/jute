import React from 'react';
import { Anchor, Sparkles, BookOpen, Calculator, ShieldCheck, ArrowUpRight, Award, Compass } from 'lucide-react';

interface HeroBannerProps {
  onScrollToTop10: () => void;
  onOpenStory: () => void;
  onOpenCalculator: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onScrollToTop10,
  onOpenStory,
  onOpenCalculator,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#24170E] text-[#FAF6F0] border-b border-[#3E2C1F]">
      {/* Background Graphic & Texture Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D6A97A_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Subtle ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8B5A2B]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Mission & Export Directives */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* National Provenance Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFC096] bg-[#3A281A] px-3.5 py-1.5 rounded-full border border-[#523A25]">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>OFFICIAL BANGLADESH EXPORT AGGREGATOR</span>
              <span className="text-[#8F6A48]">·</span>
              <span className="font-serif italic text-amber-200">সোনালী আঁশের দেশ বাংলাদেশ</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              The Bengal Golden Fiber: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EED5B3] via-[#D5A76E] to-[#B38048]">
                World\'s #1 Jute Goods Export Base
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#D4C3B2] leading-relaxed max-w-2xl font-normal">
              Direct B2B mill export gateway connecting international commodity traders, retail giants, civil engineering contractors, and packaging distributors directly to Bangladesh’s premier certified jute mills. Sourcing food-grade agricultural sacking, precision carpet backing cloth (CBC), high-tenacity yarn, erosion-control geo-jute, and the revolutionary biodegradable <strong>Sonali Bag™</strong>.
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onScrollToTop10}
                className="px-6 py-3.5 bg-[#C59B6F] hover:bg-[#B68B5F] text-[#20140A] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Top 10 Export Goods</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenStory}
                className="px-5 py-3.5 bg-[#382619] hover:bg-[#483322] text-[#F3E8DB] font-semibold text-xs sm:text-sm rounded-xl border border-[#593E28] transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D8B486]" />
                <span>The Bengal Golden Fiber Story</span>
              </button>

              <button
                onClick={onOpenCalculator}
                className="px-4 py-3.5 bg-transparent hover:bg-[#342216] text-[#D4C3B2] hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-[#443022] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#C59B6F]" />
                <span>FCL Container Load Calculator</span>
              </button>
            </div>

            {/* Micro Verification Badges */}
            <div className="pt-4 border-t border-[#3E2B1D] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] text-[#C2AEA0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IJO 98/01 Food Grade (Hydrocarbon-Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#C59B6F] shrink-0" />
                <span>FOB Chittagong & Mongla Port Direct</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>EPB Bangladesh Export Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Global Transit to 120+ Countries</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Export Gallery Matrix */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Primary Feature Card: Raw Golden Tossa to Container Stacking */}
              <div className="rounded-2xl overflow-hidden border border-[#563C27] bg-[#2C1E14] shadow-2xl">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85"
                    alt="Authentic Bangladeshi Tossa Jute Harvest and Sacking Bales"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C120A] via-[#1C120A]/30 to-transparent" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-[#23150C]/90 backdrop-blur-md border border-[#5B3E26] rounded-lg p-2.5 text-xs text-white">
                    <span className="text-[10px] font-bold text-[#E5C396] uppercase tracking-wider block">Provenance: Corchorus Olitorius</span>
                    <span className="font-serif text-sm font-semibold">Bengal Delta River Silt Origin</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#CBB5A0] text-[11px] block">Global Export Hegemony</span>
                      <strong className="text-white text-base font-serif">92% of World Jute Supply</strong>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 font-mono text-[11px] rounded">
                      FOB CTG Verified
                    </span>
                  </div>
                </div>

                {/* Sub-strip of authentic production stages */}
                <div className="p-4 grid grid-cols-3 gap-2.5 bg-[#1F150D] text-[11px]">
                  <div className="space-y-1">
                    <div className="h-14 rounded-lg overflow-hidden border border-[#443021]">
                      <img
                        src="https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=300&q=80"
                        alt="Jute Yarn Bobbin Spinning"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-[#DFCFBE] block leading-tight">Yarn Spinning</span>
                    <span className="text-[#8F7C6B] text-[10px]">Narsingdi & Demra</span>
                  </div>

                  <div className="space-y-1">
                    <div className="h-14 rounded-lg overflow-hidden border border-[#443021]">
                      <img
                        src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=300&q=80"
                        alt="Braided Jute Loom"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-[#DFCFBE] block leading-tight">Loom Weaving</span>
                    <span className="text-[#8F7C6B] text-[10px]">Rangpur Artisans</span>
                  </div>

                  <div className="space-y-1">
                    <div className="h-14 rounded-lg overflow-hidden border border-[#443021]">
                      <img
                        src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=300&q=80"
                        alt="Freshwater Retting Jag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-[#DFCFBE] block leading-tight">Freshwater Retting</span>
                    <span className="text-[#8F7C6B] text-[10px]">Faridpur Basin</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#3B281B] border border-[#61452D] rounded-xl p-4 shadow-xl text-xs max-w-xs">
                <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Carbon-Negative Crop</span>
                </div>
                <p className="text-[#D8C7B8] text-[11px]">
                  1 Hectare of Bangladeshi jute absorbs <strong>15 MT of CO₂</strong> and outputs <strong>11 MT of pure O₂</strong> in 100 days.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Live Export Metric Ticker Strip */}
        <div className="mt-12 pt-8 border-t border-[#3E2C1E] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#A89280] font-semibold">World Market Share</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">92%</div>
            <p className="text-[11px] text-[#C2AEA0]">Raw golden fiber exports globally</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#A89280] font-semibold">Annual Production</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D8B486]">1.45M MT</div>
            <p className="text-[11px] text-[#C2AEA0]">Across 750,000+ Bengal delta hectares</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#A89280] font-semibold">Port Handling Capacity</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">Chittagong & Mongla</div>
            <p className="text-[11px] text-[#C2AEA0]">48-hr container vessel turnaround</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#A89280] font-semibold">Smallholder Cultivators</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">4.5M+ Families</div>
            <p className="text-[11px] text-[#C2AEA0]">Fair Trade & Living Wage Supported</p>
          </div>
        </div>

      </div>
    </section>
  );
};
