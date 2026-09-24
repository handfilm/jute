import React, { useState } from 'react';
import { Ship, Mail, ShieldCheck, Award, Check, Landmark } from 'lucide-react';

export const Footer: React.FC = () => {
  const [tradeEmail, setTradeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (tradeEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1C120A] text-[#FAF6F0] border-t border-[#352316] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & National Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#352316]">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#382618] flex items-center justify-center text-[#E5CEB0] border border-[#523A25]">
                <Ship className="w-5 h-5 text-[#DFC096]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  BENGAL GOLDEN FIBER
                </span>
                <span className="text-[11px] text-[#C5A376] font-medium font-serif italic">
                  বাংলাদেশ সোনালী আঁশ রপ্তানি পোর্টাল · Dhaka & Chittagong
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#C4B2A1] max-w-lg leading-relaxed">
              Official export aggregator and direct mill gateway for Bangladesh\'s Golden Fiber industry. Connecting global importers with certified production mills in Narayanganj, Khulna, and Faridpur to replace petrochemical plastics with 100% biodegradable Bengal tossa jute.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#998675] font-mono">
              <span>CNAME: <strong className="text-[#E0CFBD]">jute.handsandhead.com</strong></span>
              <span>•</span>
              <span>Port: Chittagong (BD CGP) & Mongla (BD MGL)</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <h4 className="font-serif text-base font-bold text-white">
              International Trade Intelligence & Harvest Release
            </h4>
            <p className="text-xs text-[#C4B2A1]">
              Receive monthly raw jute crop reports, Chittagong Port FOB freight indices, and new diversified product releases.
            </p>
            {subscribed ? (
              <div className="bg-[#2B3B2B] p-3.5 rounded-xl border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Trade subscription registered. Dispatching export catalog to {tradeEmail}.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={tradeEmail}
                    onChange={(e) => setTradeEmail(e.target.value)}
                    placeholder="Enter official corporate email"
                    className="w-full bg-[#2A1D13] border border-[#483321] focus:border-[#C59B6F] rounded-xl py-2.5 pl-10 pr-3 text-xs text-white placeholder-neutral-500 outline-none"
                  />
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                </div>
                <button
                  type="submit"
                  className="bg-[#C59B6F] hover:bg-[#B38759] text-[#22150B] px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Trade Links & Official Authorities */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 text-xs border-b border-[#352316]">
          <div>
            <h5 className="font-bold text-[#E5CEB0] uppercase tracking-wider mb-3">Top 10 Export Items</h5>
            <ul className="space-y-2 text-[#C4B2A1]">
              <li>B-Twill Sacking Bags (HS 6305.10)</li>
              <li>Jute Spun Yarn & Twine (HS 5307.10)</li>
              <li>Carpet Backing Cloth - CBC (HS 5310.10)</li>
              <li>Geo-Jute Soil Mesh (HS 5310.90)</li>
              <li>Handcrafted Braided Rugs (HS 5702.39)</li>
              <li>Sonali Bag™ Bio-Polymer (HS 3920.99)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#E5CEB0] uppercase tracking-wider mb-3">Producing Mill Belts</h5>
            <ul className="space-y-2 text-[#C4B2A1]">
              <li>Narayanganj ("Dundee of Bangladesh")</li>
              <li>Khulna River Industrial Cluster</li>
              <li>Faridpur Golden Tossa Delta</li>
              <li>Rangpur Shataranji Weaving Guild</li>
              <li>Demra & Gazipur Special Export Zones</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#E5CEB0] uppercase tracking-wider mb-3">Trade Regulatory Bodies</h5>
            <ul className="space-y-2 text-[#C4B2A1]">
              <li>Ministry of Textiles & Jute, Bangladesh</li>
              <li>Export Promotion Bureau (EPB)</li>
              <li>Bangladesh Jute Mills Corp (BJMC)</li>
              <li>Bangladesh Jute Spinners Assoc (BJSA)</li>
              <li>Jute Diversification Center (JDPC)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#E5CEB0] uppercase tracking-wider mb-3">Trade Compliance</h5>
            <div className="space-y-2.5 text-[#C4B2A1]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>IJO 98/01 Food Grade Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D8B486]" />
                <span>100% Soil Biodegradable</span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-sky-400" />
                <span>SGS & Bureau Veritas Inspected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & National Heritage Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9A8777] gap-3">
          <p>© {new Date().getFullYear()} Bangladesh Jute Export Gateway (Bengal Golden Fiber). All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Domain: jute.handsandhead.com</span>
            <span>•</span>
            <span>Made in Bangladesh (গণপ্রজাতন্ত্রী বাংলাদেশ)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
