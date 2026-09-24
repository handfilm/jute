import React, { useState } from 'react';
import { X, FileText, Send, Check, Trash2, Box, Anchor, Copy } from 'lucide-react';
import { RFQItem, Currency } from '../types';
import { formatPrice, formatNumber } from '../utils/format';
import confetti from 'canvas-confetti';

interface RFQDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: RFQItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearRFQ: () => void;
}

export const RFQDrawer: React.FC<RFQDrawerProps> = ({
  isOpen,
  onClose,
  rfqItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearRFQ,
}) => {
  const [incoterm, setIncoterm] = useState<'FOB-Chittagong' | 'FOB-Mongla' | 'CIF' | 'CFR'>('FOB-Chittagong');
  const [inspection, setInspection] = useState<'SGS' | 'Bureau-Veritas' | 'Intertek' | 'Standard-BJMC'>('SGS');
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalEstimatedFobUsd = rfqItems.reduce(
    (sum, item) => sum + item.quantity * item.product.fobPriceUsdPerUnit,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const referenceNumber = `BD-EXP-JUTE-${Date.now().toString().slice(-6)}`;
    setSubmittedRef(referenceNumber);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleCopySummary = () => {
    const lines = [
      `BANGLADESH JUTE EXPORT GATEWAY - OFFICIAL RFQ`,
      `Reference: ${submittedRef}`,
      `Company: ${companyName}`,
      `Email: ${contactEmail}`,
      `Incoterms: ${incoterm} | Port: ${destinationPort || 'To Be Nominated'}`,
      `Pre-Shipment Inspection: ${inspection}`,
      `----------------------------------------`,
      ...rfqItems.map(
        (it) =>
          `- ${it.product.name} (HS ${it.product.hsCode}): ${formatNumber(it.quantity)} ${it.product.priceUnitLabel} @ ~${formatPrice(it.product.fobPriceUsdPerUnit, currency)}`
      ),
      `----------------------------------------`,
      `Estimated Total FOB CTG: ${formatPrice(totalEstimatedFobUsd, currency)}`,
      `Notes: ${notes || 'None'}`
    ];
    navigator.clipboard?.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] w-full max-w-xl h-full flex flex-col shadow-2xl border-l border-[#D8C7B5] relative text-[#2B1B10]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#2E1D11] text-[#FAF6F0] flex items-center justify-between border-b border-[#442E1D]">
          <div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#D8B486]" />
              <h2 className="font-serif text-lg font-bold">Request for Quotation (RFQ)</h2>
            </div>
            <p className="text-[11px] text-[#CDB9A6] mt-0.5">
              Official Commercial Mill Inquiry & Free Material Swatch Dispatch
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#CDB9A6] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {submittedRef ? (
            /* Successful Submission Screen */
            <div className="bg-white rounded-2xl p-6 border border-[#DECFC0] shadow-sm text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#27190F]">
                RFQ Transmitted To Mill Export Desk!
              </h3>
              <p className="text-xs text-[#6F5B4B] leading-relaxed">
                Your formal inquiry has been logged with the Bangladesh Jute Export Promotion registry. Our trade desk officer will review your port requirements and issue proforma documentation within 12 business hours.
              </p>

              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D4C4] text-xs font-mono space-y-1.5 text-left">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Quotation Ref:</span>
                  <strong className="text-[#8A582C]">{submittedRef}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Incoterm:</span>
                  <strong>{incoterm}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Pre-Shipment Inspection:</span>
                  <strong>{inspection}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Est. Total FOB CTG:</span>
                  <strong>{formatPrice(totalEstimatedFobUsd, currency)}</strong>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopySummary}
                  className="flex-1 py-2.5 px-4 bg-[#F1E7DA] hover:bg-[#E7DAC9] text-[#3B2618] rounded-xl text-xs font-bold border border-[#DAC8B5] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Proforma Draft'}</span>
                </button>

                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    onClearRFQ();
                    onClose();
                  }}
                  className="flex-1 py-2.5 px-4 bg-[#3A2617] hover:bg-[#25170C] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : rfqItems.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16 space-y-3">
              <Box className="w-12 h-12 text-[#9E836A] mx-auto opacity-50" />
              <h3 className="font-serif text-lg font-bold text-[#2E1F14]">
                Your RFQ Basket Is Empty
              </h3>
              <p className="text-xs text-[#725E4D] max-w-xs mx-auto">
                Select any of the Top 10 Bangladeshi Jute Goods from the catalogue to request commercial FOB price quotes or free physical sample swatches.
              </p>
            </div>
          ) : (
            /* Active Items List & Form */
            <div className="space-y-6">
              
              {/* Selected Goods List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#8A582C]">
                  <span>Selected Jute Export Goods ({rfqItems.length})</span>
                  <button
                    onClick={onClearRFQ}
                    className="text-neutral-500 hover:text-red-700 normal-case font-normal text-[11px] cursor-pointer"
                  >
                    Clear all
                  </button>
                </div>

                <div className="space-y-2.5">
                  {rfqItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-white p-3.5 rounded-xl border border-[#E2D4C3] shadow-2xs space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-12 h-12 rounded-lg object-cover border border-[#E5D8CA]"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold bg-[#EFE3D4] text-[#694220] px-1.5 rounded">
                                #{item.product.rank}
                              </span>
                              <h4 className="font-serif text-xs font-bold text-[#23170E] line-clamp-1">
                                {item.product.name}
                              </h4>
                            </div>
                            <span className="text-[11px] text-[#7A6452] font-mono">
                              HS {item.product.hsCode} · {item.product.exportHub}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-neutral-400 hover:text-red-600 p-1 rounded cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity & Unit Pricing */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#F2EAE0] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-neutral-500 font-medium">Order Qty:</span>
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              onUpdateQuantity(item.product.id, Math.max(1, Number(e.target.value)))
                            }
                            className="w-24 bg-[#FAF7F2] border border-[#D5C5B2] px-2 py-1 rounded text-xs font-mono font-bold text-center"
                          />
                          <span className="text-[10px] text-neutral-600 truncate max-w-[90px]">
                            {item.product.priceUnitLabel.replace('(FOB CTG)', '')}
                          </span>
                        </div>

                        <div className="font-mono font-bold text-[#23170E]">
                          {formatPrice(item.quantity * item.product.fobPriceUsdPerUnit, currency)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Trade Form */}
              <form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl border border-[#DECFC0] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8A582C]">
                  <Anchor className="w-4 h-4" />
                  <span>Commercial Trade & Delivery Terms</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[#4B3728] font-bold mb-1">Incoterms 2020</label>
                    <select
                      value={incoterm}
                      onChange={(e) => setIncoterm(e.target.value as any)}
                      className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 font-semibold"
                    >
                      <option value="FOB-Chittagong">FOB Chittagong Port (CTG)</option>
                      <option value="FOB-Mongla">FOB Mongla Port (MGL)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#4B3728] font-bold mb-1">Pre-Shipment Inspection</label>
                    <select
                      value={inspection}
                      onChange={(e) => setInspection(e.target.value as any)}
                      className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 font-semibold"
                    >
                      <option value="SGS">SGS Pre-Shipment Inspection</option>
                      <option value="Bureau-Veritas">Bureau Veritas (BV)</option>
                      <option value="Intertek">Intertek Bangladesh</option>
                      <option value="Standard-BJMC">BJMC Government Mill Inspection</option>
                    </select>
                  </div>
                </div>

                {/* Company & Contact Details */}
                <div className="space-y-2.5 text-xs">
                  <div>
                    <label className="block text-[#4B3728] font-bold mb-1">Company / Importer Name</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="E.g., Global Agro Sourcing Ltd / Hansa Textiles"
                      className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[#4B3728] font-bold mb-1">Trade Email</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="purchasing@company.com"
                        className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[#4B3728] font-bold mb-1">Discharge Port</label>
                      <input
                        type="text"
                        value={destinationPort}
                        onChange={(e) => setDestinationPort(e.target.value)}
                        placeholder="E.g., Port of Rotterdam"
                        className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#4B3728] font-bold mb-1">
                      Custom Requirements / Sample Request Notes
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Specify custom stripe colors, stencil printing, moisture limits, or free physical swatch kit request..."
                      className="w-full bg-[#FAF7F2] border border-[#D5C5B2] rounded-lg p-2 text-xs"
                    />
                  </div>
                </div>

                {/* Total Summary */}
                <div className="pt-3 border-t border-[#EAE0D3] flex items-baseline justify-between text-xs">
                  <span className="font-bold text-[#624E3E]">Total Est. Value (FOB):</span>
                  <span className="font-serif text-xl font-extrabold text-[#23170E]">
                    {formatPrice(totalEstimatedFobUsd, currency)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#3A2516] hover:bg-[#23160B] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E6CBA7]" />
                  <span>Transmit RFQ to Bangladesh Jute Mills</span>
                </button>
              </form>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
