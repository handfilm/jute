import React from 'react';
import { Ship, ShieldCheck } from 'lucide-react';

export const ExportLogisticsBanner: React.FC = () => {
  return (
    <section className="bg-[#261A11] text-[#FAF6F0] py-16 border-t border-[#3E2B1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D8B486] bg-[#3B271A] px-3.5 py-1.5 rounded-full border border-[#523A25]">
            <Ship className="w-3.5 h-3.5" />
            <span>DIRECT MARITIME EXPORT INFRASTRUCTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Chittagong & Mongla Deep-Sea Export Terminals
          </h2>
          <p className="text-xs sm:text-sm text-[#CDB9A7] leading-relaxed">
            Over 90% of the world’s exported jute goods depart from Bangladesh’s premier sea gates. Streamlined customs clearing, pre-shipment moisture testing, and direct feeder vessel connections to global transshipment hubs.
          </p>
        </div>

        {/* Port Terminal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Chittagong Port Card */}
          <div className="bg-[#322216] rounded-2xl p-6 border border-[#4D3624] space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8B486] block">
                  UN/LOCODE: BD CGP · Established 1887
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Chittagong Port Terminal (CTG)
                </h3>
              </div>
              <span className="bg-emerald-900/60 text-emerald-300 font-mono text-xs px-2.5 py-1 rounded border border-emerald-600/30">
                84% Total Jute Volume
              </span>
            </div>

            <p className="text-xs text-[#D1BEAC] leading-relaxed">
              Bangladesh’s principal maritime gateway handling high-density container traffic to Singapore, Colombo, and Tanjung Pelepas for onward transit to Europe, North America, and Australia.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#463121] text-xs">
              <div>
                <span className="text-[10px] text-[#A68F7D] block">Vessel Turnaround</span>
                <strong className="text-white">48 Hours Avg</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#A68F7D] block">FCL Stuffing Hubs</span>
                <strong className="text-white">19 Off-Dock Depots</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#A68F7D] block">Draft Depth</span>
                <strong className="text-white">9.5m - 10.0m</strong>
              </div>
            </div>
          </div>

          {/* Mongla Port Card */}
          <div className="bg-[#322216] rounded-2xl p-6 border border-[#4D3624] space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8B486] block">
                  UN/LOCODE: BD MGL · River Pasur Gate
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Mongla Port Terminal (MGL)
                </h3>
              </div>
              <span className="bg-emerald-900/60 text-emerald-300 font-mono text-xs px-2.5 py-1 rounded border border-emerald-600/30">
                16% Total Jute Volume
              </span>
            </div>

            <p className="text-xs text-[#D1BEAC] leading-relaxed">
              Ideally positioned for the Khulna, Jessore, and Faridpur jute industrial belts. Direct highway link via the Padma Multipurpose Bridge allows seamless truck container transfers within 4 hours.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#463121] text-xs">
              <div>
                <span className="text-[10px] text-[#A68F7D] block">Vessel Turnaround</span>
                <strong className="text-white">36 Hours Avg</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#A68F7D] block">Industrial Vicinity</span>
                <strong className="text-white">Khulna Mill Belt</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#A68F7D] block">Eco-Green Port</span>
                <strong className="text-white">Zero Congestion</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Quality Assurance & Certification Quad */}
        <div className="bg-[#1C120A] rounded-2xl p-6 sm:p-8 border border-[#3E2B1E] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#362417] pb-6">
            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                Pre-Shipment Quality Testing & International Certification
              </h4>
              <p className="text-xs text-[#BFAF9E] mt-0.5">
                Every exported consignment undergoes strict independent laboratory verification.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B486]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>BJMC & EPB Inspection Protocols</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#D6C5B6]">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#322013] text-[#D8B486] flex items-center justify-center font-bold">
                1
              </div>
              <h5 className="font-bold text-white text-sm">IJO 98/01 Food Grade</h5>
              <p className="text-[11px] text-[#A89482] leading-relaxed">
                Hydrocarbon-free batching with edible vegetable oils, preventing off-flavors in cocoa, coffee, and grain transport.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#322013] text-[#D8B486] flex items-center justify-center font-bold">
                2
              </div>
              <h5 className="font-bold text-white text-sm">Moisture Regain Testing</h5>
              <p className="text-[11px] text-[#A89482] leading-relaxed">
                Standard oven drying to guarantee 14-16% moisture regain, preventing mold or mildew during ocean transit.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#322013] text-[#D8B486] flex items-center justify-center font-bold">
                3
              </div>
              <h5 className="font-bold text-white text-sm">Tensile Strength Strips</h5>
              <p className="text-[11px] text-[#A89482] leading-relaxed">
                Calibrated Instron tensiometers test warp and weft breaking tenacity in accordance with ASTM and ISO textile norms.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#322013] text-[#D8B486] flex items-center justify-center font-bold">
                4
              </div>
              <h5 className="font-bold text-white text-sm">ISPM-15 Heat Treatment</h5>
              <p className="text-[11px] text-[#A89482] leading-relaxed">
                All wood pallets and dunnage materials are heat-treated and certified pest-free for global biosecurity entry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
