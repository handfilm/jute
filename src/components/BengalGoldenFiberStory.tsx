import React, { useState } from 'react';
import { BookOpen, Sparkles, Droplets, Mountain, Landmark, Leaf, X, ChevronRight, Share2, Check, ExternalLink } from 'lucide-react';
import { BENGAL_GOLDEN_FIBER_ARTICLE } from '../data/products';

interface BengalGoldenFiberStoryProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  onNavigateToProduct?: (productId: string) => void;
}

export const BengalGoldenFiberStory: React.FC<BengalGoldenFiberStoryProps> = ({
  isOpenModal = false,
  onCloseModal,
  onNavigateToProduct
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('geology-miracle');
  const [copied, setCopied] = useState(false);

  const sections = BENGAL_GOLDEN_FIBER_ARTICLE.sections;
  const currentSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = (
    <div className="bg-[#FAF7F2] text-[#2C2117]">
      
      {/* Header Banner */}
      <div className="bg-[#2E1F14] text-[#FAF6F0] p-6 sm:p-10 border-b border-[#443021] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B6F]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF7A] bg-[#422C1C] px-3 py-1 rounded-full border border-[#5C3E28]">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>THE EXCLUSIVE BANGLADESH ARTICLE</span>
              <span className="text-[#8B6E52]">·</span>
              <span className="font-serif italic text-amber-100">সোনালী আঁশের ইতিহাস</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#C5B4A3]">
              <span>Read Time: ~{BENGAL_GOLDEN_FIBER_ARTICLE.readTimeMinutes} mins</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-[#3F2B1C] hover:bg-[#523A27] rounded text-white transition-colors cursor-pointer"
                title="Share Article Link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {BENGAL_GOLDEN_FIBER_ARTICLE.title}
          </h2>
          <p className="font-serif text-base sm:text-lg italic text-[#D8B486]">
            "{BENGAL_GOLDEN_FIBER_ARTICLE.bengaliTitle}"
          </p>

          <p className="text-xs sm:text-sm text-[#D1BEAC] leading-relaxed max-w-3xl">
            {BENGAL_GOLDEN_FIBER_ARTICLE.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-[#9E8B7A] font-medium border-t border-[#463324]">
            <span>Published by: {BENGAL_GOLDEN_FIBER_ARTICLE.author}</span>
            <span>•</span>
            <span>Chittagong Port Trade Research & Archival Desk</span>
          </div>
        </div>
      </div>

      {/* Main Body with Chapter Navigator */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Chapter Tabs / Quick Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10 pb-6 border-b border-[#E4D8CA]">
          {[
            { id: 'geology-miracle', label: '1. Delta Silt Geology', icon: Mountain },
            { id: 'retting-process', label: '2. Sacred Freshwater "Jāg"', icon: Droplets },
            { id: 'dundee-to-narayanganj', label: '3. Dundee of Bangladesh', icon: Landmark },
            { id: 'sonali-bag-breakthrough', label: '4. The Sonali Bag™ (Unique BD)', icon: Sparkles },
            { id: 'carbon-sink', label: '5. Carbon-Negative Miracle', icon: Leaf },
          ].map((ch) => {
            const Icon = ch.icon;
            const isActive = activeSectionId === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveSectionId(ch.id)}
                className={`p-3 text-left rounded-xl transition-all border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#382618] text-white border-[#382618] shadow-md'
                    : 'bg-white text-[#574232] border-[#E6DBCE] hover:bg-[#F3ECE0]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D8B486]' : 'text-[#8A6A4E]'}`} />
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </div>
                <span className="text-xs font-bold leading-tight">{ch.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Article Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C582B] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Chapter Archive · Bengal Delta Botanical Series</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1B10]">
              {currentSection.heading}
            </h3>

            <div className="text-sm text-[#4E3D2F] leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {currentSection.body}
            </div>

            {/* Special Callouts for Unique Bangladeshi Discoveries */}
            {activeSectionId === 'sonali-bag-breakthrough' && (
              <div className="bg-[#EFE8DC] p-5 rounded-2xl border border-[#D5C2AD] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2A5E35]">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>The Bangladesh Nuclear Scientist Breakthrough</span>
                </div>
                <p className="text-xs text-[#3E3023] leading-relaxed">
                  Dr. Mubarak Ahmad Khan developed the Sonali Bag at the Bangladesh Jute Mills Corporation (BJMC) and Bangladesh Atomic Energy Commission. It possesses zero petroleum components, completely degrades without microplastics in 90 days, and dissolves in water at 80°C.
                </p>
                {onNavigateToProduct && (
                  <button
                    onClick={() => onNavigateToProduct('export-sonali-bag-bioplastic-cellulose')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#78471F] hover:text-[#42240D] underline cursor-pointer"
                  >
                    <span>View Sonali Bag™ Export Product Card & Commercial Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {activeSectionId === 'retting-process' && (
              <div className="bg-[#EAE4D9] p-5 rounded-2xl border border-[#D5C6B5] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#352518]">
                  The 5 Stages of Bengal "Jāg" Retting:
                </h4>
                <ol className="text-xs text-[#523F30] space-y-2 list-decimal list-inside">
                  <li><strong>Monsoon Harvest</strong>: Stalks cut at 100-120 days when flowering begins for maximal tensile strength.</li>
                  <li><strong>Bundle Steeping ("Jāg")</strong>: Submerged 30-50 cm beneath warm freshwater surface using water-hyacinth or clay weights.</li>
                  <li><strong>Microbial Pectin Breakdown</strong>: Clostridium and Bacillus bacteria cleanly digest bark pectins over 14-20 days.</li>
                  <li><strong>Artisan Peeling ("Pāṭ Chhilā")</strong>: Clean golden fibers separated without splitting or mechanical fraying.</li>
                  <li><strong>Sun Bleaching & Drying</strong>: Draped over bamboo trellises under intense delta sun for 3-4 days to achieve golden luster.</li>
                </ol>
              </div>
            )}

            {/* Navigation to next chapter */}
            <div className="pt-6 border-t border-[#E5D7C7] flex items-center justify-between">
              <span className="text-xs text-[#7A6451]">
                Documenting Bangladesh’s National Golden Fiber Heritage
              </span>
              <button
                onClick={() => {
                  const currentIndex = sections.findIndex((s) => s.id === activeSectionId);
                  const nextIndex = (currentIndex + 1) % sections.length;
                  setActiveSectionId(sections[nextIndex].id);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3A2617] hover:bg-[#25170C] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Next Chapter</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Archival Photograph & Scientific Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Chapter Image with Caption */}
            <div className="rounded-2xl overflow-hidden border border-[#D8C7B5] bg-white shadow-md">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={currentSection.image}
                  alt={currentSection.heading}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F2EA] border-t border-[#E7DACD] text-xs text-[#624E3E]">
                <p className="italic font-serif">"{currentSection.caption}"</p>
                <span className="block mt-1 text-[10px] text-[#917E6F] font-mono">
                  Official Photo Archive · Bangladesh Ministry of Textiles & Jute
                </span>
              </div>
            </div>

            {/* Botanical Comparison Table (Bengal Tossa vs Global Varieties) */}
            <div className="bg-white rounded-2xl p-5 border border-[#DECFC0] shadow-xs space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#2B1B10]">
                Why Bengal Tossa Outperforms Global Fiber:
              </h4>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#F0E6D8]">
                  <span className="text-[#685342]">Fiber Tensile Tenacity</span>
                  <span className="font-bold text-[#2A1E16]">115 - 130% Quality Ratio</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#F0E6D8]">
                  <span className="text-[#685342]">Natural Cellular Length</span>
                  <span className="font-bold text-[#2A1E16]">Up to 3.5 Meters</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#F0E6D8]">
                  <span className="text-[#685342]">Freshwater Retting Purity</span>
                  <span className="font-bold text-emerald-700">100% Chemical-Free "Jāg"</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#F0E6D8]">
                  <span className="text-[#685342]">Fiber Color Tone</span>
                  <span className="font-bold text-[#B8860B]">Luminescent Golden Amber</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#685342]">Biodegradability Window</span>
                  <span className="font-bold text-emerald-700">90 - 150 Days in Soil</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );

  // If rendered inside a dedicated full modal:
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
        <div className="bg-[#FAF7F2] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DFD1C1] relative">
          
          {/* Close button */}
          <button
            onClick={onCloseModal}
            className="sticky top-4 right-4 ml-auto block z-20 bg-[#2E1F14] text-white p-2 rounded-full hover:bg-black transition-colors"
            title="Close Story Reader"
          >
            <X className="w-5 h-5" />
          </button>

          {content}
        </div>
      </div>
    );
  }

  // Otherwise rendered inline in page
  return (
    <section id="golden-fiber-story" className="border-t border-[#DFD0BE] bg-[#F7F2E9]">
      {content}
    </section>
  );
};
